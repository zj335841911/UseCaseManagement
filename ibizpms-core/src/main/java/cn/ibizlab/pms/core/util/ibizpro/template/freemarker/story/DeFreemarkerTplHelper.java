package cn.ibizlab.pms.core.util.ibizpro.template.freemarker.story;

import cn.ibizlab.pms.util.constants.IBizPMSConstants;
import cn.ibizlab.pms.util.constants.IBizPMSMessage;
import cn.ibizlab.pms.util.helper.FreemarkerHelper;
import com.alibaba.fastjson.JSONObject;
import com.github.difflib.DiffUtils;
import com.github.difflib.patch.AbstractDelta;
import com.github.difflib.patch.Chunk;
import com.github.difflib.patch.DeltaType;
import com.github.difflib.patch.Patch;
import com.google.common.io.Files;
import freemarker.cache.FileTemplateLoader;
import freemarker.template.Configuration;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.hibernate.validator.internal.util.StringHelper;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Slf4j
@Component
public class DeFreemarkerTplHelper {
    // 前期从配置文件读取，后期根据库里获得

    @Value("${ibiz.template.freemarker.story.de.dir:freemarker/story/de/}")
    private String tplDirPath;

    @Value("${ibiz.story.de.dir:/app/file/pms/story/de/}")
    private String targetDirPath;

    @Value("${ibiz.template.freemarker.story.de.file:de}")
    private String fileName;

    final private static String[] EXTS = {"md", "html", "json"};

    private Configuration tplConf;

    /**
     * 构建模板生成目标文件
     *
     * @param dataModel
     * @param updatedateLong 考虑到父子业务数据，子数据更新，连带父数据的更新时间需要同步记录
     * @return
     */
    public boolean generate(JSONObject dataModel, long updatedateLong) {
        return generate(dataModel, updatedateLong,false);
    }

    /**
     * 构建模板生成目标文件
     *
     * @param dataModel
     * @param updatedateLong 考虑到父子业务数据，子数据更新，连带父数据的更新时间需要同步记录
     * @param forceReload 强制刷新
     * @return
     */
    public boolean generate(JSONObject dataModel, long updatedateLong, boolean forceReload) {
        if (!initConf(forceReload) || dataModel == null) {
            return false;
        }

        String targetFilePath = targetDirPath.replaceAll("\\\\", "/");
        if (!targetFilePath.isEmpty() && !targetFilePath.endsWith("/")) {
            targetFilePath += "/";
        }
        File targetDir = new File(targetFilePath);
        if (!targetDir.exists()) {
            targetDir.mkdirs();
        }
        if (!targetDir.isDirectory()) {
            log.error(IBizPMSMessage.MSG_ERROR_0201);
            return false;
        }
        boolean rst = true;
        List<String> successFiles = new ArrayList<>();
        String targetFilePathNoExt  = targetFilePath + dataModel.getString("itemname");
        String targetFileHistoryDirPath  = targetFilePath + dataModel.getString("itemname") + "/";
        String targetFileHistoryPathNoExt  = targetFileHistoryDirPath + dataModel.getString("itemname");

        // 文件锁
        File lockFile = new File(targetFilePathNoExt + ".lock");
        if (lockFile.exists()) {
            log.error(IBizPMSMessage.MSG_ERROR_0011);
            return false;
        }

        FileWriter lockFileWriter = null;
        try {
            lockFile.createNewFile();

            for (String ext : EXTS) {
                String tplFileName = fileName + "." + ext + ".ftl";
                String tmpTargetFilePath = targetFilePathNoExt + "_" + updatedateLong + "." + ext;
                if (!new File(tmpTargetFilePath).exists() || forceReload) {
                    rst = rst && FreemarkerHelper.generate(tplConf, tplFileName, tmpTargetFilePath, dataModel);
                    if (!rst) {
                        break;
                    } else {
                        successFiles.add(tmpTargetFilePath);
                    }
                }
            }
            rst = rst && isDiff(targetFilePathNoExt, updatedateLong);
        } catch (Exception e) {
            log.error(String.format(IBizPMSMessage.MSG_ERROR_0102, e));
            rst = false;
        }

        if (lockFile.exists()) {
            if (rst) {
                // 生成最新文件
                for (String ext : EXTS) {
                    File targetFileHistoryDir = new File(targetFileHistoryDirPath);
                    if (!targetFileHistoryDir.exists()) {
                        targetFileHistoryDir.mkdirs();
                    }
                    File targetFile= new File(targetFilePathNoExt + "_" + updatedateLong + "." + ext);
                    File targetFileHistory= new File(targetFileHistoryPathNoExt + "_" + updatedateLong + "." + ext);
                    File lastedTargetFile = new File(targetFilePathNoExt + ".lasted." + ext);
                    try {
                        Files.copy(targetFile, lastedTargetFile);
                        Files.move(targetFile, targetFileHistory);
                    } catch (Exception e) {
                        log.warn(IBizPMSMessage.MSG_ERROR_0001, e);
                    }
                }
            } else {
                for (String filePath : successFiles) {
                    File file = new File(filePath);
                    file.delete();
                    log.warn(String.format(IBizPMSMessage.MSG_WARN_0101, filePath));
                }
                File versionBakFile = new File(targetFilePathNoExt + ".json.version.bak");
                File versionFile = new File(targetFilePathNoExt + ".json.version");
                if (versionBakFile.exists()) {
                    try {
                        Files.copy(versionBakFile, versionFile);
                    } catch (IOException e) {
                        log.warn(IBizPMSMessage.MSG_ERROR_0001, e);
                    }
                    versionBakFile.delete();
                }
            }
            lockFile.delete();
        }
        log.warn(String.format(IBizPMSMessage.MSG_INFO_0101, rst));
        return rst;
    }

    /**
     * 初始化模板配置
     *
     * @param forceReload 强制刷新
     * @return
     */
    synchronized private boolean initConf(boolean forceReload) {
        if (isConfVaild() && !forceReload) {
            return true;
        }
        tplConf =  FreemarkerHelper.initConf(tplDirPath);
        if (tplConf == null) {
            return false;
        }
        return true;
    }

    /**
     *
     *
     * @return
     */
    private boolean isConfVaild() {
        return tplConf != null;
    }

    /**
     * 检查差异，生成版本文件
     *
     * @param targetFilePathNoExt 不含后缀的文件路径
     * @param updatedateLong
     * @return
     */
    private boolean isDiff(String targetFilePathNoExt, long updatedateLong) {
        String jsonLastedFilePath = targetFilePathNoExt + ".lasted.json";
        String jsonSrcFilePath = targetFilePathNoExt + "_" + updatedateLong + ".json";
        String jsonVersionFilePath = targetFilePathNoExt + ".json.version";
        String jsonVersionBakFilePath = targetFilePathNoExt + ".json.version.bak";
        return isDiff(jsonSrcFilePath, jsonLastedFilePath, jsonVersionFilePath, jsonVersionBakFilePath, updatedateLong);
    }

    /**
     * 检查差异，生成版本文件
     *
     * @param srcFilePath
     * @param lastedFilePath
     * @param versionFilePath
     * @param versionBakFilePath
     * @param updatedateLong
     * @return
     */
    private boolean isDiff(String srcFilePath, String lastedFilePath, String versionFilePath, String versionBakFilePath, long updatedateLong) {
        FileWriter versionFw = null;
        FileInputStream srcFi = null;
        FileInputStream lastedFi = null;

        File versionFile = new File(versionFilePath);
        File versionBakFile = new File(versionBakFilePath);

        boolean diffRst = false;
        try {
            StringBuilder changeLog = new StringBuilder();

            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            changeLog.append("\r\n【" + sdf.format(new Date(updatedateLong)) + "（" + updatedateLong + "）】\r\n");

            File lastedFile = new File(lastedFilePath);
            // 版本文件备份
            if (!versionFile.exists()) {
                // 第一次初始化
                versionFile.createNewFile();

                if (!lastedFile.exists()) {
                    changeLog.append("\r\n");
                    changeLog.append(IBizPMSMessage.MSG_INFO_0201);
                    changeLog.append("\r\n");
                    versionFw = new FileWriter(versionFile, true);
                    versionFw.append("【版本履历】\r\n");
                    versionFw.append(changeLog.toString());
                    return true;
                }
            } else {
                Files.copy(versionFile, versionBakFile);
            }
            if (!lastedFile.isFile()) {
                log.error(IBizPMSMessage.MSG_ERROR_0201);
                return false;
            }

            versionFw = new FileWriter(versionFile, true);
            srcFi = new FileInputStream(srcFilePath);
            lastedFi = new FileInputStream(lastedFilePath);

            List<String> srcFileLines = IOUtils.readLines(srcFi, IBizPMSConstants.ENCODING);
            List<String> lastedFileLines = IOUtils.readLines(lastedFi, IBizPMSConstants.ENCODING);
            Patch<String> diff = DiffUtils.diff(srcFileLines, lastedFileLines);
            List<AbstractDelta<String>> deltas = diff.getDeltas();
            for (AbstractDelta<String> delta : deltas) {
                switch (delta.getType()) {
                    case INSERT:
                        //新增
                        Chunk<String> insert = delta.getTarget();
                        int position = insert.getPosition();
                        changeLog.append("+ " + (position + 1) + " " + insert.getLines());
                        changeLog.append("\r\n");
                        diffRst = true;
                        break;
                    case CHANGE:
                        //修改
                        Chunk<String> source = delta.getSource();
                        Chunk<String> target = delta.getTarget();
                        changeLog.append("\n- " + (source.getPosition() + 1) + " " + source.getLines() + "\n+ " + "" + (target.getPosition() + 1) + " " + target.getLines());
                        changeLog.append("\r\n");
                        diffRst = true;
                        break;
                    case DELETE:
                        //删除
                        Chunk<String> delete = delta.getSource();
                        changeLog.append("- " + (delete.getPosition() + 1) + " " + delete.getLines());
                        changeLog.append("\r\n");
                        diffRst = true;
                        break;
                    default:
                        break;
                }
            }
            if (diffRst) {
                versionFw.append(changeLog.toString());
            }
        } catch (Exception e) {
            log.error(IBizPMSMessage.MSG_ERROR_0001, e);
        } finally{
            if (lastedFi != null) {
                try {
                    lastedFi.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            lastedFi = null;

            if (srcFi != null) {
                try {
                    srcFi.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            srcFi = null;

            if (versionFw != null) {
                try {
                    versionFw.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            versionFw = null;

            if (versionBakFile.exists()) {
                versionBakFile.delete();
            }
        }
        return diffRst;
    }
}
