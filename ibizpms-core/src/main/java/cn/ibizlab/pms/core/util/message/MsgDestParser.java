package cn.ibizlab.pms.core.util.message;

import cn.ibizlab.pms.core.ibiz.domain.TaskTeam;
import cn.ibizlab.pms.core.zentao.domain.*;
import cn.ibizlab.pms.core.zentao.filter.UserSearchContext;
import cn.ibizlab.pms.core.zentao.mapper.UserMapper;
import cn.ibizlab.pms.core.zentao.service.IUserService;
import cn.ibizlab.pms.core.zentao.service.logic.impl.TodoGetTODOTitleLogicImpl;
import cn.ibizlab.pms.util.domain.EntityBase;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import liquibase.pro.packaged.S;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import rx.internal.operators.SingleTakeUntilCompletable;

import javax.swing.text.html.parser.Entity;
import java.math.BigInteger;
import java.util.*;

/**
 * 解析业务实体中的发件人信息，
 * 包括 待办发送、消息发送等。
 */
@Slf4j
@Component
public class MsgDestParser {
    @Autowired
    public IUserService userService;

    public MsgDestParser() {
    }

    /**
     * 获取待办人员列表
     *
     * @param et 业务实体
     * @return 发送者id集合，多个用分号（,）隔开
     */
    public String getTaskUserIds(EntityBase et) {
        Object action = et.get("action");

        //更新操作，指派人未改变
        if ("update".equals(action) && (!"true".equals(et.getExtensionparams().get("assignedToChanged")))) {
            //指派人未发生
            log.info("更新操作，指派人[{}]未发生改变", et.get("assignedto"));
            return null;
        }

        //关闭状态不发送待办
        if ("closed".equals(et.get("status"))) {
            return null;
        }
        String assignedto = et.get("assignedto") == null ? null : String.valueOf(et.get("assignedto"));

        if (et instanceof Story) {
            //TODO multi resolvedBy
//            String reviewedby = ((Story)et).getReviewedby();
        } else if (et instanceof Task) {
            //TODO multi-user task
//            List<TaskTeam> team = task.getTaskteam();
//            Set<String> teamAccounts = new HashSet<>();
//            for(TaskTeam member: team){
//                teamAccounts.add(member.getAccount());
//            }
//            if(!CollectionUtils.isEmpty(teamAccounts)){
//                accounts = teamAccounts;
//            }
        }

        String ids = queryIds(getAccountSet(assignedto));
        log.info("发送待办IDs：[{}]", ids);
        return ids;
    }


    /**
     * 获取已办人员列表。
     *
     * @param et 业务实体
     * @return 已办人员发送者id集合，多个用分号（,）隔开
     */
    public String getCompleteTaskUserIds(EntityBase et) {
        Object action = et.get("action");

        if ("update".equals(action)) {
            if (!"true".equals(et.getExtensionparams().get("assignedToChanged"))
                    && !MsgDestParser.equalsInValue(et.get("status"), et.get("prestatus"))) {
                log.info("更新操作，未修改指派人、状态信息，数据[{}]", et);
                return null;
            }
        }

        Object preAssignedTo = et.getExtensionparams().get("preassignedto");
        String ids = queryIds(getAccountSet(StringUtils.isEmpty(preAssignedTo) ? null : String.valueOf(preAssignedTo)));

        log.info("[{}]操作，已办人员列表：[{}]", action, ids);
        return ids;
    }


    /**
     * 获取消息发送人员列表
     *
     * @param et 业务实体
     * @return 发送者id集合，多个用分号（,）隔开
     */
    public String getNoticeUserIds(EntityBase et) {

        String mailto = et.get("mailto") == null ? null : String.valueOf(et.get("mailto"));

        String ids = queryIds(getAccountSet(mailto));
        log.info("发送通知IDs:[{}]", ids);
        return ids;
    }

    private String queryIds(Set<String> accountList) {
        if (CollectionUtils.isEmpty(accountList)) {
            return null;
        }

        List<User> destIds = userService.list(new QueryWrapper<User>().in("account", accountList));

        if (CollectionUtils.isEmpty(destIds)) {
            return null;
        }

        StringBuilder builder = new StringBuilder();
        for (User user : destIds) {
            builder.append(",").append(user.getId());
        }
        return builder.substring(1);
    }

    /**
     * 账户信息去重
     *
     * @param strings
     * @return
     */
    public static Set<String> getAccountSet(String... strings) {
        Set<String> set = new HashSet<>();
        if (strings == null) {
            return null;
        }

        for (int i = 0; i < strings.length; i++) {
            if (!StringUtils.isEmpty(strings[i])) {
                set.addAll(Arrays.asList(strings[i].split(",")));
            }
        }
        return set;
    }

    public static boolean equalsInValue(Object db, Object page) {
        if (StringUtils.isEmpty(db)) {
            if (StringUtils.isEmpty(page)) {
                return true;
            } else {
                return false;
            }
        } else {
            return db.equals(page);
        }
    }

}

