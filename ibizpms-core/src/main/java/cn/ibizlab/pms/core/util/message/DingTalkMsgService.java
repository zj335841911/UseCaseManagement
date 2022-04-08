package cn.ibizlab.pms.core.util.message;

import cn.ibizlab.pms.core.ibiz.domain.TaskMsgRecord;
import cn.ibizlab.pms.core.ibiz.service.ITaskMsgRecordService;
import cn.ibizlab.pms.util.client.IBZNotifyFeignClient;
import cn.ibizlab.pms.util.domain.EntityBase;
import cn.ibizlab.pms.util.log.IBIZTraceLog;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.alibaba.csp.sentinel.util.StringUtil;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.Query;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.annotation.Nullable;
import javax.swing.text.html.parser.Entity;
import java.math.BigInteger;
import java.net.URLEncoder;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Map;

@Slf4j
@IBIZTraceLog
@Component
public class DingTalkMsgService implements IMsgService {
    @Autowired
    private IBZNotifyFeignClient feignClient;
    @Autowired
    private MsgDestParser destParser;
    @Autowired
    private ITaskMsgRecordService taskMsgRecordService;

    @Override
    public void send(EntityBase et, String mainDataView) {
        this.send(et, et.getClass().getSimpleName().toUpperCase(), mainDataView, "mobeditview");
    }

    /**
     * 发送通知
     *
     * @param et          业务数据
     * @param logicName   业务实体名称
     * @param pcDataView  PC端主数据视图名
     * @param mobDataView MOB端主数据视图名
     */
    @Override
    public void send(EntityBase et, String logicName, String pcDataView, String mobDataView) {
        //当前操作人相关信息，userid、姓名
        String name = AuthenticationUser.getAuthenticationUser().getPersonname();

        //当前数据相关信息, 类名、id、标题
        String className = et.getClass().getSimpleName().toLowerCase();
        Long idLong = (Long) et.get("id");
        BigInteger id = BigInteger.valueOf(idLong);
        String title = (String) et.get("title");

        if (StringUtils.isEmpty(title)) {
            title = (String) et.get("name");
        }

        //生成重定向地址
        String redirect_url_pc = String.format(MsgConstants.URL_TEMP_PC, MsgConstants.REDIRECT_HOMEPAGE_PC, Inflector.getInstance().pluralize(className), id, pcDataView);
        String redirect_url_mob = String.format(MsgConstants.URL_TEMP_MOB, MsgConstants.REDIRECT_HOMEPAGE_MOB, Inflector.getInstance().pluralize(className), id, mobDataView);

        //设置已办
        String completeUserids = destParser.getCompleteTaskUserIds(et);
        if(!StringUtils.isEmpty(completeUserids)){
            completeTask(et, completeUserids);
        }

        //设置代办
        String taskUserIds = destParser.getTaskUserIds(et);
        if (!StringUtils.isEmpty(taskUserIds)) {
            //分别发送PC、MOB通知
            String content = String.format(MsgConstants.TASK_CONTENT_TMPL, logicName, id, title);

            sendTask(et, taskUserIds, redirect_url_mob, redirect_url_pc, null, content);

        }

        //设置通知
        String noticeUserIds = destParser.getNoticeUserIds(et);
        if (!StringUtils.isEmpty(noticeUserIds)) {
            //分别发送PC、MOB通知
            String content = String.format(MsgConstants.NOTICE_CONTENT_TMPL, name, logicName, id, title);
            sendLinkMessage(noticeUserIds, redirect_url_pc, "(PC)" + MsgConstants.APP_NAME, content);
            sendLinkMessage(noticeUserIds, redirect_url_mob, "(MOB)" + MsgConstants.APP_NAME, content);
        }
    }

    /**
     * 发送带链接的工作通知
     *
     * @param userids     发送人
     * @param redirectUrl 链接地址
     * @param title       标题
     * @param content     正文
     */
    @Override
    public void sendLinkMessage(String userids, String redirectUrl, String title, String content) {
        log.info("redirectURL:[{}]", redirectUrl);
        JSONObject message = new JSONObject();
        message.put("templateid", "pms");
        message.put("msgtypes", MsgConstants.MESSAGE_TYPE);
        message.put("userids", userids);
        message.put("title", title);
        message.put("content", content);
        String encodeUrl = URLEncoder.encode(redirectUrl);

        message.put("url", String.format("dingtalk://dingtalkclient/page/link?url=%s&pc_slide=%b", encodeUrl, title.contains("(MOB)")));
        try {
            feignClient.sendDingTalkLinkMsg(message);
            log.info("成功发送链接通知，内容为[{}]。", message);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("发送工作通知失败,数据[{}],原因为:[{}]", message, e);
        }
    }


    /**
     * 发送Dingding待办任务。
     *
     * @param userids       待办发送用户id （IBZUserId）
     * @param redirectUrl   链接地址，比如： http://ibizpmspc.ibizlab.cn/#/ibizpms/bugs/250/maindashboardview
     * @param pcredirectUrl pc端链接地址，可为空
     * @param title         待办通知标题
     * @param content       待办通知内容
     * @return 返回生成的待办任务id
     */
    @Override
    public String sendTask(EntityBase et, String userids, String redirectUrl, @Nullable String pcredirectUrl, String title, String content) {

        log.info("redirectURL:[{}]", redirectUrl);
        log.info("userid:[{}]", userids);
        JSONObject message = new JSONObject();
        message.put("to_users", userids);
        message.put("template_id", "pms");
        message.put("title", title == null ? MsgConstants.APP_NAME : title);
        message.put("content", content);
        message.put("msg_link", redirectUrl);
        message.put("msg_link_pc", pcredirectUrl);
        String recordids = null;
        try {
            recordids = feignClient.createDingTalkWorkRecord(message);
            log.info("成功发送待办任务,内容为:[{}],记录id为[{}]。", message, recordids);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("发送待办任务失败,数据[{}],原因为:[{}]", message, e);
        }

        //记录待办发送内容。
        recordTaskMsg(et, recordids, userids, title, content);
        return "";

    }

    private void recordTaskMsg(EntityBase et, String recordids, String userids, String title, String content) {
        if (!StringUtils.isEmpty(recordids)) {
            String[] recordids_arr = recordids.split(",");
            String[] userids_arr = userids.split(",");
            if (recordids_arr.length == userids_arr.length) {
                for (int i = 0; i < recordids_arr.length; i++) {
                    TaskMsgRecord taskMsgRecord = new TaskMsgRecord();
                    taskMsgRecord.setApptaskid(recordids_arr[i]);
                    taskMsgRecord.setTaskmsgrecordname(content);
                    taskMsgRecord.setTaskuserid(userids_arr[i]);
                    taskMsgRecord.setTasktype(et.getClass().getSimpleName());
                    taskMsgRecord.setDataid(String.valueOf(et.get("id") == null ? null : et.get("id")));

                    boolean created = taskMsgRecordService.create(taskMsgRecord);
                    if (created) {
                        log.info("待办消息已记录，[{}]", taskMsgRecord);
                    }
                }
            }
        }
    }

    @Override
    public void completeTask(EntityBase et, String userids) {
        if (et == null || StringUtils.isEmpty(userids)) {
            return;
        }

        for (String userid : userids.split(",")) {
            TaskMsgRecord taskMsgRecord = taskMsgRecordService.getOne(Wrappers.<TaskMsgRecord>lambdaQuery()
                    .eq(TaskMsgRecord::getDataid, et.get("id"))
                    .eq(TaskMsgRecord::getTaskuserid, userid)
                    .eq(TaskMsgRecord::getTasktype, et.getClass().getSimpleName())
                    .orderByDesc(TaskMsgRecord::getCreatedate), false);

            if (taskMsgRecord != null) {
//                JSONObject message = new JSONObject();
//                message.put("userids", userid);
//                message.put("templateid", "pms");
//                message.put("recordid", taskMsgRecord.getApptaskid());
                Boolean markCompleted = feignClient.finishDingTalkWorkRecord(taskMsgRecord.getApptaskid());

                if (markCompleted) {
                    log.info("发送已办成功,消息记录信息：[{}]", taskMsgRecord);
                    taskMsgRecordService.remove(taskMsgRecord.getTaskmsgrecordid());
                }
            }
        }

    }
}
