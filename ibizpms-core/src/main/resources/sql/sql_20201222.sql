CREATE TABLE `T_IBZ_TOP`(
`IBZ_TOPID`  VARCHAR(100)  NOT NULL PRIMARY KEY COMMENT '标识' 
,`CREATEDATE`  DATETIME COMMENT '建立时间' 
,`UPDATEMAN`  VARCHAR(60) COMMENT '更新人' 
,`IBZ_TOPNAME`  VARCHAR(200) COMMENT '置顶名称' 
,`CREATEMAN`  VARCHAR(60) COMMENT '建立人' 
,`UPDATEDATE`  DATETIME COMMENT '更新时间' 
,`TYPE`  VARCHAR(60) COMMENT '类型' 
,`OBJECTID`  INTEGER COMMENT '数据对象标识' 
,`OBJECTORDER`  INTEGER COMMENT '排序' 
,`ACCOUNT`  VARCHAR(60) COMMENT '置顶用户' 
)COMMENT='置顶';
CREATE TABLE `T_IBZ_FAVORITES`(
`CREATEMAN`  VARCHAR(60) COMMENT '建立人' 
,`IBZ_FAVORITESID`  VARCHAR(100)  NOT NULL PRIMARY KEY COMMENT '收藏标识' 
,`CREATEDATE`  DATETIME COMMENT '建立时间' 
,`IBZ_FAVORITESNAME`  VARCHAR(200) COMMENT '收藏名称' 
,`UPDATEMAN`  VARCHAR(60) COMMENT '更新人' 
,`UPDATEDATE`  DATETIME COMMENT '更新时间' 
,`OBJECTID`  INTEGER COMMENT '数据对象标识' 
,`ACCOUNT`  VARCHAR(60) COMMENT '收藏用户' 
,`TYPE`  VARCHAR(60) COMMENT '类型' 
)COMMENT='收藏';

CREATE TABLE `T_SYS_UPDATE_LOG`(
`SYS_UPDATE_LOGID`  VARCHAR(100)  NOT NULL PRIMARY KEY COMMENT '系统更新日志标识' 
,`SYS_UPDATE_LOGNAME`  VARCHAR(200) COMMENT '更新名称' 
,`UPDATEMAN`  VARCHAR(60) COMMENT '更新人' 
,`CREATEMAN`  VARCHAR(60) COMMENT '建立人' 
,`CREATEDATE`  DATETIME COMMENT '建立时间' 
,`UPDATEDATE`  DATETIME COMMENT '更新时间' 
,`UPDATE`  DATETIME COMMENT '更新日期' 
,`UPDESC`  MEDIUMTEXT COMMENT '更新说明' 
,`LATESTUPDATE`  INTEGER COMMENT '最新更新' 
,`UPDATEBRANCH`  VARCHAR(60) COMMENT '更新平台' 
)COMMENT='更新日志';

CREATE TABLE `T_SYS_UPDATE_FEATURES`(
`SYS_UPDATE_FEATURESNAME`  VARCHAR(200) COMMENT '系统更新功能名称' 
,`SYS_UPDATE_FEATURESID`  VARCHAR(100)  NOT NULL PRIMARY KEY COMMENT '系统更新功能标识' 
,`CREATEMAN`  VARCHAR(60) COMMENT '建立人' 
,`UPDATEMAN`  VARCHAR(60) COMMENT '更新人' 
,`CREATEDATE`  DATETIME COMMENT '建立时间' 
,`UPDATEDATE`  DATETIME COMMENT '更新时间' 
,`SYS_UPDATE_LOGID`  VARCHAR(100) COMMENT '系统更新日志标识' 
,`UPFEATURES`  VARCHAR(100) COMMENT '更新功能' 
,`FEATURESDESC`  MEDIUMTEXT COMMENT '功能描述' 
,`TYPE`  VARCHAR(60) COMMENT '更新类型' 
,`DISPLAYORDER`  INTEGER COMMENT '展示顺序' 
)COMMENT='系统更新功能';

CREATE TABLE `T_IBZ_DAILY`(
`CREATEMAN`  VARCHAR(60) COMMENT '建立人' 
,`IBZ_DAILYID`  BIGINT(100)  UNSIGNED  NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT '日报标识' 
,`IBZ_DAILYNAME`  VARCHAR(200) COMMENT '日报名称' 
,`UPDATEDATE`  DATETIME COMMENT '更新时间' 
,`CREATEDATE`  DATETIME COMMENT '建立时间' 
,`UPDATEMAN`  VARCHAR(60) COMMENT '更新人' 
,`DATE`  DATETIME COMMENT '日期' 
,`ACCOUNT`  VARCHAR(60) COMMENT '用户' 
,`WORKTODAY`  MEDIUMTEXT COMMENT '今日工作' 
,`MAILTO`  VARCHAR(2000) COMMENT '抄送给' 
,`TODAYTASK`  VARCHAR(2000) COMMENT '完成任务' 
,`ISSUBMIT`  VARCHAR(60) COMMENT '是否提交' 
,`PLANSTOMORROW`  MEDIUMTEXT COMMENT '明日计划' 
,`TOMORROWPLANSTASK`  VARCHAR(2000) COMMENT '明日计划任务' 
,`REPORTTO`  VARCHAR(60) COMMENT '汇报给' 
,`COMMENT`  MEDIUMTEXT COMMENT '其他事项' 
,`CREATEMANNAME`  VARCHAR(60) COMMENT '建立人名称' 
,`UPDATEMANNAME`  VARCHAR(60) COMMENT '更新人名称' 
,`REPORTSTATUS`  VARCHAR(60) COMMENT '状态' 
,`SUBMITTIME`  DATETIME COMMENT '提交时间' 
)COMMENT='日报';

CREATE TABLE `T_IBZ_WEEKLY`(
`IBZ_WEEKLYNAME`  VARCHAR(200) COMMENT '周报名称' 
,`IBZ_WEEKLYID`  BIGINT(100)  UNSIGNED  NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT '周报标识' 
,`CREATEMAN`  VARCHAR(60) COMMENT '建立人' 
,`CREATEDATE`  DATETIME COMMENT '建立时间' 
,`UPDATEMAN`  VARCHAR(60) COMMENT '更新人' 
,`UPDATEDATE`  DATETIME COMMENT '更新时间' 
,`ACCOUNT`  VARCHAR(60) COMMENT '用户' 
,`MAILTO`  VARCHAR(2000) COMMENT '抄送给' 
,`ISSUBMIT`  VARCHAR(60) COMMENT '是否提交' 
,`REPORTTO`  VARCHAR(60) COMMENT '汇报给' 
,`COMMENT`  MEDIUMTEXT COMMENT '其他事项' 
,`DATE`  DATETIME COMMENT '日期' 
,`WORKTHISWEEK`  MEDIUMTEXT COMMENT '本周工作' 
,`PLANNEXTWEEK`  MEDIUMTEXT COMMENT '下周计划' 
,`THISWEEKTASK`  VARCHAR(100) COMMENT '本周完成任务' 
,`NEXTWEEKTASK`  VARCHAR(100) COMMENT '下周计划任务' 
,`UPDATEMANNAME`  VARCHAR(60) COMMENT '更新人名称' 
,`CREATEMANNAME`  VARCHAR(60) COMMENT '建立人名称' 
,`REPORTSTATUS`  VARCHAR(60) COMMENT '状态' 
,`SUBMITTIME`  DATETIME COMMENT '提交时间' 
)COMMENT='周报';

CREATE TABLE `T_IBZ_MONTHLY`(
`IBZ_MONTHLYID`  BIGINT(100)  UNSIGNED  NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT '月报标识' 
,`CREATEMAN`  VARCHAR(60) COMMENT '建立人' 
,`UPDATEMAN`  VARCHAR(60) COMMENT '更新人' 
,`CREATEDATE`  DATETIME COMMENT '建立时间' 
,`IBZ_MONTHLYNAME`  VARCHAR(200) COMMENT '月报名称' 
,`UPDATEDATE`  DATETIME COMMENT '更新时间' 
,`DATE`  DATETIME COMMENT '日期' 
,`ACCOUNT`  VARCHAR(100) COMMENT '用户' 
,`WORKTHISMONTH`  MEDIUMTEXT COMMENT '本月工作' 
,`PLANSNEXTMONTH`  MEDIUMTEXT COMMENT '下月计划' 
,`REPORTTO`  VARCHAR(60) COMMENT '汇报给' 
,`MAILTO`  VARCHAR(2000) COMMENT '抄送给' 
,`COMMENT`  MEDIUMTEXT COMMENT '其他事项' 
,`THISMONTHTASK`  VARCHAR(2000) COMMENT '本月完成任务' 
,`NEXTMONTHPLANSTASK`  VARCHAR(2000) COMMENT '下月计划任务' 
,`ISSUBMIT`  VARCHAR(100) COMMENT '是否提交' 
,`UPDATEMANNAME`  VARCHAR(60) COMMENT '更新人名称' 
,`REPORTSTATUS`  VARCHAR(60) COMMENT '状态' 
,`CREATEMANNAME`  VARCHAR(60) COMMENT '建立人名称' 
,`SUBMITTIME`  DATETIME COMMENT '提交时间' 
)COMMENT='月报';

CREATE TABLE `T_IBZ_REPORT_ROLE_CONFIG`(
`IBZ_REPORT_ROLE_CONFIGNAME`  VARCHAR(200) COMMENT '汇报角色配置名称' 
,`IBZ_REPORT_ROLE_CONFIGID`  VARCHAR(100)  NOT NULL PRIMARY KEY COMMENT '汇报角色配置标识' 
,`CREATEDATE`  DATETIME COMMENT '建立时间' 
,`CREATEMAN`  VARCHAR(60) COMMENT '建立人' 
,`UPDATEMAN`  VARCHAR(60) COMMENT '更新人' 
,`UPDATEDATE`  DATETIME COMMENT '更新时间' 
,`REPORT_ROLE`  VARCHAR(2000) COMMENT '角色' 
,`TYPE`  VARCHAR(60) COMMENT '类型' 
)COMMENT='汇报角色配置';

CREATE TABLE `T_IBZ_REPORTLY`(
`IBZ_REPORTLYID`  BIGINT(100)  UNSIGNED  NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT '汇报标识' 
,`IBZ_REPORTLYNAME`  VARCHAR(200) COMMENT '汇报名称' 
,`UPDATEMAN`  VARCHAR(60) COMMENT '更新人' 
,`CREATEDATE`  DATETIME COMMENT '建立时间' 
,`CREATEMAN`  VARCHAR(60) COMMENT '建立人' 
,`UPDATEDATE`  DATETIME COMMENT '更新时间' 
,`CONTENT`  MEDIUMTEXT COMMENT '工作内容' 
,`REPORTTO`  VARCHAR(100) COMMENT '汇报给' 
,`MAILTO`  VARCHAR(100) COMMENT '抄送给' 
,`DATE`  DATETIME COMMENT '汇报日期' 
,`ISSUBMIT`  VARCHAR(100) COMMENT '是否提交' 
,`SUBMITTIME`  DATETIME COMMENT '提交时间' 
,`ACCOUNT`  VARCHAR(60) COMMENT '用户' 
,`REPORTSTATUS`  VARCHAR(100) COMMENT '状态' 
)COMMENT='汇报';

CREATE TABLE `T_IBZPRO_CONFIG`(
`IBZPRO_CONFIGNAME`  VARCHAR(200) COMMENT '系统配置表名称' 
,`IBZPRO_CONFIGID`  VARCHAR(100)  NOT NULL PRIMARY KEY COMMENT '系统配置表标识' 
,`UPDATEMAN`  VARCHAR(60) COMMENT '更新人' 
,`UPDATEDATE`  DATETIME COMMENT '更新时间' 
,`CREATEDATE`  DATETIME COMMENT '建立时间' 
,`CREATEMAN`  VARCHAR(60) COMMENT '建立人' 
,`SCOPE`  VARCHAR(2000) COMMENT '范围' 
,`VAILD`  VARCHAR(60) COMMENT '是否启用' 
,`MEMO`  VARCHAR(100) COMMENT '描述' 
,`TYPE`  VARCHAR(60) COMMENT '类型' 
,`MANAGEMENTSTATUS`  VARCHAR(60) COMMENT '管理现状' 
)COMMENT='系统配置表';

CREATE TABLE `T_IBZ_PLANTEMPLET`(
`IBZ_PLANTEMPLETID`  VARCHAR(100)  NOT NULL PRIMARY KEY COMMENT '产品计划模板标识' 
,`IBZ_PLANTEMPLETNAME`  VARCHAR(200) COMMENT '模板名称' 
,`CREATEMAN`  VARCHAR(60) COMMENT '建立人' 
,`CREATEDATE`  DATETIME COMMENT '建立时间' 
,`UPDATEMAN`  VARCHAR(60) COMMENT '更新人' 
,`UPDATEDATE`  DATETIME COMMENT '更新时间' 
,`PLANS`  VARCHAR(2000) COMMENT '计划' 
,`PRODUCT`  BIGINT(20) COMMENT '产品' 
,`ACL`  VARCHAR(60) COMMENT '权限' 
,`CREATEMANNAME`  VARCHAR(100) COMMENT '创建人姓名' 
)COMMENT='计划模板';

CREATE TABLE `T_IBZ_PLANTEMPLETDETAIL`(
`IBZ_PLANTEMPLETDETAILID`  VARCHAR(100)  NOT NULL PRIMARY KEY COMMENT '计划模板详情标识' 
,`IBZ_PLANTEMPLETDETAILNAME`  VARCHAR(200) COMMENT '计划模板详情名称' 
,`CREATEMAN`  VARCHAR(60) COMMENT '建立人' 
,`CREATEDATE`  DATETIME COMMENT '建立时间' 
,`UPDATEMAN`  VARCHAR(60) COMMENT '更新人' 
,`UPDATEDATE`  DATETIME COMMENT '更新时间' 
,`PLANTEMPLETID`  VARCHAR(100) COMMENT '产品计划模板标识' 
,`PLANCODE`  VARCHAR(100) COMMENT '计划编号' 
,`ORDER`  INTEGER COMMENT '排序' 
,`DESC`  MEDIUMTEXT COMMENT '计划名称' 
,`EXPECT`  MEDIUMTEXT COMMENT '描述' 
,`TYPE`  VARCHAR(60) COMMENT '类型' 
)COMMENT='计划模板详情';

ALTER TABLE `zt_product`
ADD COLUMN `IBIZ_ID`  VARCHAR(100)  COMMENT 'IBIZ标识' ;
ALTER TABLE `zt_product`
ADD COLUMN `MDEPTID`  VARCHAR(100)  COMMENT '部门标识' ;
ALTER TABLE `zt_product`
ADD COLUMN `ORGID`  VARCHAR(100)  COMMENT '组织标识' ;

ALTER TABLE `zt_project`
ADD COLUMN `MDEPTID`  VARCHAR(100)  COMMENT '部门标识' ;
ALTER TABLE `zt_project`
ADD COLUMN `ORGID`  VARCHAR(100)  COMMENT '组织标识' ;

ALTER TABLE `zt_module`
ADD COLUMN `IBIZ_ID`  VARCHAR(100)  COMMENT 'IBIZ标识' ;
ALTER TABLE `zt_module`
ADD COLUMN `MDEPTID`  VARCHAR(100)  COMMENT '部门标识' ;
ALTER TABLE `zt_module`
ADD COLUMN `ORGID`  VARCHAR(100)  COMMENT '组织标识' ;
ALTER TABLE `zt_module`
ADD COLUMN `IBIZ_STORYTYPE`  VARCHAR(100)  COMMENT '需求模块类型' ;

ALTER TABLE `zt_story`
ADD COLUMN `STORYPOINTS`  VARCHAR(60)  COMMENT '故事点' ;
ALTER TABLE `zt_story`
ADD COLUMN `SOURCEID`  VARCHAR(100)  COMMENT '来源对象标识' ;
ALTER TABLE `zt_story`
ADD COLUMN `IBIZ_SOURCENAME`  VARCHAR(100)  COMMENT '来源对象名称' ;
ALTER TABLE `zt_story`
ADD COLUMN `SOURCENAME`  VARCHAR(100)  COMMENT '来源对象名称' ;
ALTER TABLE `zt_story`
ADD COLUMN `IBIZ_SOURCEID`  VARCHAR(100)  COMMENT '来源对象标识' ;
ALTER TABLE `zt_story`
ADD COLUMN `IBIZ_SOURCEOBJECT`  VARCHAR(100)  COMMENT '来源对象' ;
ALTER TABLE `zt_story`
ADD COLUMN `IBIZ_ID`  VARCHAR(100)  COMMENT 'IBIZ标识' ;
ALTER TABLE `zt_story`
ADD COLUMN `SOURCEOBJECT`  VARCHAR(100)  COMMENT '来源对象' ;