package cn.ibizlab.pms.core.util.message;

import cn.ibizlab.pms.util.domain.EntityBase;

import javax.annotation.Nullable;

/**
 * 消息推送
 */
public interface IMsgService  {

    void send(EntityBase et, String mainDataView);

    void send(EntityBase et, String logicName, String pcDataView, String mobDataView);

    void sendLinkMessage(String userids,String redirectUrl,String title,String content);

    String sendTask(EntityBase et, String userids, String redirectUrl, @Nullable String pcRedirectUrl, String title, String content);

    void completeTask(EntityBase et, String userids);
}
