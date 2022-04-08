package cn.ibizlab.pms.util.helper;

import cn.ibizlab.pms.util.constants.IBizPMSConstants;
import cn.ibizlab.pms.util.constants.IBizPMSMessage;
import freemarker.cache.FileTemplateLoader;
import freemarker.template.Configuration;
import freemarker.template.Template;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.validator.internal.util.StringHelper;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

@Slf4j
final public class FreemarkerHelper {

    /**
     * 初始化模板
     *
     * @param dirPath
     * @return
     */
    final public static Configuration initConf(String dirPath) {
        if (StringHelper.isNullOrEmptyString(dirPath)) {
            return null;
        }
        Configuration conf = null;
        try {
            conf = new Configuration(Configuration.DEFAULT_INCOMPATIBLE_IMPROVEMENTS);
            conf.setDefaultEncoding(IBizPMSConstants.ENCODING);
            File dir;
            if (!dirPath.startsWith("/") || !dirPath.startsWith("../") || !dirPath.startsWith("./") || !dirPath.contains(":")) {
                dir = ResourceUtils.getFile(ResourceUtils.CLASSPATH_URL_PREFIX + dirPath);
                if (!dir.exists() || !dir.isDirectory()) {
                    dir = new File(dirPath);
                }
            } else {
                dir = new File(dirPath);
            }
            if (!dir.exists() || !dir.isDirectory()) {
                return null;
            }
            conf.setTemplateLoader(new FileTemplateLoader(dir));
        } catch (IOException e) {
            log.error(IBizPMSMessage.MSG_ERROR_0101, e);
            conf = null;
        }
        return conf;
    }

    /**
     * 根据模板生成目标文件
     *
     * @param conf 模板配置
     * @param tplFileName 模板文件名
     * @param targetFilePath 目标文件路径
     * @param dataModel 数据模型
     * @return
     */
    final public static boolean generate(Configuration conf, String tplFileName, String targetFilePath, Object dataModel) {
        if (conf == null || StringHelper.isNullOrEmptyString(tplFileName) || StringHelper.isNullOrEmptyString(targetFilePath)) {
            return false;
        }
        String fileContent = null;
        FileWriter fw = null;
        try {
            fw = new FileWriter(targetFilePath);
            Template template = conf.getTemplate(tplFileName);
            template.process(dataModel, fw);
            fileContent = fw.toString();
            return true;
        } catch (Exception e) {
            log.error(IBizPMSMessage.MSG_ERROR_0102, e);
            return false;
        } finally{
            if (fw != null) {
                try {
                    fw.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            fw = null;
        }
    }
}
