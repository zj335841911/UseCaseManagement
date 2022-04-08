SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for databasechangelog
-- ----------------------------
DROP TABLE IF EXISTS `databasechangelog`;
CREATE TABLE `databasechangelog`  (
  `ID` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `AUTHOR` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `FILENAME` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `DATEEXECUTED` datetime(0) NOT NULL,
  `ORDEREXECUTED` int(11) NOT NULL,
  `EXECTYPE` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `MD5SUM` varchar(35) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `DESCRIPTION` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `COMMENTS` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `TAG` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `LIQUIBASE` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `CONTEXTS` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `LABELS` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `DEPLOYMENT_ID` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for databasechangeloglock
-- ----------------------------
DROP TABLE IF EXISTS `databasechangeloglock`;
CREATE TABLE `databasechangeloglock`  (
  `ID` int(11) NOT NULL,
  `LOCKED` bit(1) NOT NULL,
  `LOCKGRANTED` datetime(0) NULL DEFAULT NULL,
  `LOCKEDBY` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ibzcfg
-- ----------------------------
DROP TABLE IF EXISTS `ibzcfg`;
CREATE TABLE `ibzcfg`  (
  `CFGID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `SYSTEMID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '系统标识',
  `CFGTYPE` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '配置类型',
  `TARGETTYPE` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '引用对象',
  `USERID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户标识',
  `CFG` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '配置',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`CFGID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '配置' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ibzdataaudit
-- ----------------------------
DROP TABLE IF EXISTS `ibzdataaudit`;
CREATE TABLE `ibzdataaudit`  (
  `DATAAUDITID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `OPPERSONID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '操作人标识',
  `OPPERSONNAME` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '操作人名称',
  `AUDITTYPE` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '审计行为类型',
  `OPTIME` date NULL DEFAULT NULL COMMENT '操作时间',
  `IPADDRESS` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '访问地址',
  `AUDITOBJECTDATA` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '审计对象（表数据）',
  `AUDITOBJECT` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '审计对象（表）',
  `AUDITINFO` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '审计明细',
  `ISDATACHANGED` int(11) NULL DEFAULT NULL COMMENT '审计数据是否发生变化',
  PRIMARY KEY (`DATAAUDITID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '数据审计' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ibzfile
-- ----------------------------
DROP TABLE IF EXISTS `ibzfile`;
CREATE TABLE `ibzfile`  (
  `FILEID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `FILENAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `FILEPATH` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `FOLDER` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `CREATEDATE` date NULL DEFAULT NULL,
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `UPDATEDATE` date NULL DEFAULT NULL,
  `FILEEXT` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `FILESIZE` int(11) NULL DEFAULT NULL,
  `DIGESTCODE` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `OWNERTYPE` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `OWNERID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `MEMO` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `RESERVER` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`FILEID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '文件' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for ibzuser
-- ----------------------------
DROP TABLE IF EXISTS `ibzuser`;
CREATE TABLE `ibzuser`  (
  `USERID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `PERSONNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `USERNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `USERCODE` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `LOGINNAME` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `PASSWORD` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `DOMAINS` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `MDEPTID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `MDEPTCODE` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `MDEPTNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `BCODE` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `POSTID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `POSTCODE` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `POSTNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ORGID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ORGCODE` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ORGNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `NICKNAME` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `EMAIL` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `AVATAR` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `PHONE` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `RESERVER` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `USERICON` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `SEX` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `BIRTHDAY` date NULL DEFAULT NULL,
  `CERTCODE` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ADDR` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `THEME` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `FONTSIZE` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `LANG` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `MEMO` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `SUPERUSER` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`USERID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_dynadashboard
-- ----------------------------
DROP TABLE IF EXISTS `t_dynadashboard`;
CREATE TABLE `t_dynadashboard`  (
  `USERID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户标识',
  `DYNADASHBOARDID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '动态数据看板标识',
  `DYNADASHBOARDNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '动态数据看板名称',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `MODELID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '模型标识',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `APPID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '应用标识',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `MODEL` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '模型',
  PRIMARY KEY (`DYNADASHBOARDID`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '动态数据看板' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibizpro_keyword
-- ----------------------------
DROP TABLE IF EXISTS `t_ibizpro_keyword`;
CREATE TABLE `t_ibizpro_keyword`  (
  `IBIZPRO_KEYWORDID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '关键词标识',
  `IBIZPRO_KEYWORDNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '关键词名称',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  PRIMARY KEY (`IBIZPRO_KEYWORDID`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '关键词' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibizpro_message
-- ----------------------------
DROP TABLE IF EXISTS `t_ibizpro_message`;
CREATE TABLE `t_ibizpro_message`  (
  `IBIZPRO_MESSAGENAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '消息名称',
  `IBIZPRO_MESSAGEID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '消息标识',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `SUBJECT` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '标题',
  `CONTENT` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '内容',
  `TYPE` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '消息类型',
  `ISLINK` int(11) NULL DEFAULT NULL COMMENT '是否是链接消息	',
  `ISSYNC` int(11) NULL DEFAULT NULL COMMENT '是否同步',
  `ISRETRY` int(11) NULL DEFAULT NULL COMMENT '是否重发',
  `RETRYTIMES` int(11) NULL DEFAULT NULL COMMENT '重发次数',
  `RETRYINTERVALTIME` int(11) NULL DEFAULT NULL COMMENT '重发间隔时间',
  `FROM` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '发送方',
  `TO` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '接收方',
  `CC` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '抄送方',
  `BCC` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '密件抄送方',
  `PARAM` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '消息参数',
  PRIMARY KEY (`IBIZPRO_MESSAGEID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '消息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibizpro_messageobject
-- ----------------------------
DROP TABLE IF EXISTS `t_ibizpro_messageobject`;
CREATE TABLE `t_ibizpro_messageobject`  (
  `IBIZPRO_MESSAGEOBJECTID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '消息对象标识',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `IBIZPRO_MESSAGEOBJECTNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '消息对象名称',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `OBJECTTYPE` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '对象类型',
  `OBJECTID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '对象标识',
  PRIMARY KEY (`IBIZPRO_MESSAGEOBJECTID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '消息对象' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibizpro_messageproxy
-- ----------------------------
DROP TABLE IF EXISTS `t_ibizpro_messageproxy`;
CREATE TABLE `t_ibizpro_messageproxy`  (
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `IBIZPRO_MESSAGEPROXYID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '消息代理标识',
  `IBIZPRO_MESSAGEPROXYNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '消息代理名称',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `PARAM` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '处理参数',
  `LINKSUPPORTTYPE` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '消息链接形式',
  `LINKURL` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '消息链接地址',
  `LINKEXMSG` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '消息补充信息',
  `PLUGINID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '代理标识',
  PRIMARY KEY (`IBIZPRO_MESSAGEPROXYID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '消息代理' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibizpro_messagesend
-- ----------------------------
DROP TABLE IF EXISTS `t_ibizpro_messagesend`;
CREATE TABLE `t_ibizpro_messagesend`  (
  `IBIZPRO_MESSAGESENDID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '消息发送标识',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `IBIZPRO_MESSAGESENDNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '消息发送名称',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `ISSEND` int(11) NULL DEFAULT NULL COMMENT '是否发送',
  `ISREAD` int(11) NULL DEFAULT NULL COMMENT '是否已读',
  `ISERROR` int(11) NULL DEFAULT NULL COMMENT '是否发生错误',
  `ERRORMSG` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '最新一次发生错误的消息',
  `RETRYCOUNT` int(11) NULL DEFAULT NULL COMMENT '重试次数',
  `ISDONE` int(11) NULL DEFAULT NULL COMMENT '是否已完成',
  `RECIVER` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '接收人',
  `SENDER` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '发送者',
  PRIMARY KEY (`IBIZPRO_MESSAGESENDID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '消息发送' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibizpro_plugin
-- ----------------------------
DROP TABLE IF EXISTS `t_ibizpro_plugin`;
CREATE TABLE `t_ibizpro_plugin`  (
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `IBIZPRO_PLUGINNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '系统插件名称',
  `IBIZPRO_PLUGINID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '系统插件标识',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `DOWNLOADURL` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '最新版本下载地址',
  `TYPE` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '类型',
  `TAG` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '标签',
  `VERSION` int(11) NULL DEFAULT NULL COMMENT '版本',
  `KEYWORD` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '关键字',
  PRIMARY KEY (`IBIZPRO_PLUGINID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '系统插件' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibizpro_productdaily
-- ----------------------------
DROP TABLE IF EXISTS `t_ibizpro_productdaily`;
CREATE TABLE `t_ibizpro_productdaily`  (
  `IBIZPRO_PRODUCTDAILYNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '产品日报名称',
  `IBIZPRO_PRODUCTDAILYID` bigint(100) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '产品日报标识',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `PO` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '产品负责人',
  `PRODUCT` bigint(8) UNSIGNED NULL DEFAULT NULL COMMENT '产品',
  `DATE` datetime(0) NULL DEFAULT NULL COMMENT '日期',
  `TASKS` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '任务',
  `TOTALESTIMATES` double NULL DEFAULT NULL COMMENT '总工时',
  `BEGIN` datetime(0) NULL DEFAULT NULL COMMENT '开始日期',
  `END` datetime(0) NULL DEFAULT NULL COMMENT '结束日期',
  PRIMARY KEY (`IBIZPRO_PRODUCTDAILYID`) USING BTREE,
  INDEX `F9095C63C139531A07`(`PRODUCT`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '产品日报' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibizpro_productmonthly
-- ----------------------------
DROP TABLE IF EXISTS `t_ibizpro_productmonthly`;
CREATE TABLE `t_ibizpro_productmonthly`  (
  `IBIZPRO_PRODUCTMONTHLYID` bigint(100) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '产品月报标识',
  `IBIZPRO_PRODUCTMONTHLYNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '产品月报名称',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `PRODUCT` bigint(8) UNSIGNED NULL DEFAULT NULL COMMENT '产品编号',
  `TOTALESTIMATES` double NULL DEFAULT NULL COMMENT '总工时',
  `TASKS` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '任务',
  `DATE` datetime(0) NULL DEFAULT NULL COMMENT '日期',
  `YEAR_MONTH` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '年月',
  PRIMARY KEY (`IBIZPRO_PRODUCTMONTHLYID`) USING BTREE,
  INDEX `F41D6ED435CA8E3EDF`(`PRODUCT`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '产品月报' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibizpro_productweekly
-- ----------------------------
DROP TABLE IF EXISTS `t_ibizpro_productweekly`;
CREATE TABLE `t_ibizpro_productweekly`  (
  `TOTALESTIMATES` double NULL DEFAULT NULL COMMENT '总工时',
  `TASKS` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '任务',
  `PO` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '产品负责人',
  `DATE` datetime(0) NULL DEFAULT NULL COMMENT '日期',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `IBIZPRO_PRODUCTDAILYNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '产品周报名称',
  `IBIZPRO_PRODUCTWEEKLYID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '产品周报标识',
  `PRODUCT` bigint(8) UNSIGNED NULL DEFAULT NULL COMMENT '编号',
  `BEGINDATESTATS` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '开始统计',
  `ENDDATESTATS` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '结束统计',
  PRIMARY KEY (`IBIZPRO_PRODUCTWEEKLYID`) USING BTREE,
  INDEX `F58DB8C6F9A07CC107`(`PRODUCT`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 31 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '产品周报' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibizpro_projectdaily
-- ----------------------------
DROP TABLE IF EXISTS `t_ibizpro_projectdaily`;
CREATE TABLE `t_ibizpro_projectdaily`  (
  `IBIZPRO_PROJECTDAILYID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '项目日报标识',
  `IBIZPRO_PROJECTDAILYNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '项目日报名称',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `PROJECT` bigint(8) UNSIGNED NULL DEFAULT NULL COMMENT '项目编号',
  `DATE` datetime(0) NULL DEFAULT NULL COMMENT '日期',
  `TASKS` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '任务',
  `TOTALESTIMATES` double NULL DEFAULT NULL COMMENT '总工时',
  `PM` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '项目负责人',
  `BEGIN` datetime(0) NULL DEFAULT NULL COMMENT '开始日期',
  `END` datetime(0) NULL DEFAULT NULL COMMENT '结束日期',
  PRIMARY KEY (`IBIZPRO_PROJECTDAILYID`) USING BTREE,
  INDEX `F66DEA26CB54BFB9E9`(`PROJECT`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '项目日报' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibizpro_projectmonthly
-- ----------------------------
DROP TABLE IF EXISTS `t_ibizpro_projectmonthly`;
CREATE TABLE `t_ibizpro_projectmonthly`  (
  `IBIZPRO_PROJECTMONTHLYID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '项目月报标识',
  `IBIZPRO_PROJECTMONTHLYNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '项目月报名称',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `PROJECT` bigint(8) UNSIGNED NULL DEFAULT NULL COMMENT '项目编号',
  `TOTALESTIMATES` double NULL DEFAULT NULL COMMENT '总工时',
  `TASKS` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '任务',
  `DATE` datetime(0) NULL DEFAULT NULL COMMENT '日期',
  `YEAR_MONTH` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '年月',
  PRIMARY KEY (`IBIZPRO_PROJECTMONTHLYID`) USING BTREE,
  INDEX `F752EAF91D2F853A62`(`PROJECT`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '项目月报' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibizpro_tag
-- ----------------------------
DROP TABLE IF EXISTS `t_ibizpro_tag`;
CREATE TABLE `t_ibizpro_tag`  (
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `IBIZPRO_TAGNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '标签名称',
  `IBIZPRO_TAGID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '标签标识',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`IBIZPRO_TAGID`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '标签' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibizpro_todomessage
-- ----------------------------
DROP TABLE IF EXISTS `t_ibizpro_todomessage`;
CREATE TABLE `t_ibizpro_todomessage`  (
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `CONTENT` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '内容',
  `SUBJECT` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '主题',
  `FROM` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '发送方',
  `IBIZPRO_MESSAGEID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '消息标识',
  `IBIZPRO_MESSAGENAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '消息名称',
  `TO` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '接收方',
  `ISREAD` int(11) NULL DEFAULT NULL COMMENT '是否已读',
  `TYPE` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '消息类型',
  `PARAM` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '消息参数',
  `SENDTIME` datetime(0) NULL DEFAULT NULL COMMENT '发送时间',
  PRIMARY KEY (`IBIZPRO_MESSAGEID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = 'ToDo消息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibz_agent
-- ----------------------------
DROP TABLE IF EXISTS `t_ibz_agent`;
CREATE TABLE `t_ibz_agent`  (
  `IBZ_AGENTID` bigint(100) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '代理标识',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `IBZ_AGENTNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '代理名称',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `AGENTUSER` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '代理用户',
  `AGENTBEGIN` datetime(0) NULL DEFAULT NULL COMMENT '代理开始日期',
  `AGENTEND` datetime(0) NULL DEFAULT NULL COMMENT '代理结束日期',
  `CREATEMANNAME` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建人姓名',
  PRIMARY KEY (`IBZ_AGENTID`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '代理' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibz_daily
-- ----------------------------
DROP TABLE IF EXISTS `t_ibz_daily`;
CREATE TABLE `t_ibz_daily`  (
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `IBZ_DAILYID` bigint(100) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '日报标识',
  `IBZ_DAILYNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '日报名称',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `DATE` timestamp(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '日期',
  `ACCOUNT` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户',
  `WORKTODAY` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '今日工作',
  `MAILTO` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '抄送给',
  `TODAYTASK` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '完成任务',
  `ISSUBMIT` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否提交',
  `PLANSTOMORROW` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '明日计划',
  `TOMORROWPLANSTASK` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '明日计划任务',
  `REPORTTO` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '汇报给',
  `COMMENT` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '其他事项',
  `CREATEMANNAME` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人名称',
  `UPDATEMANNAME` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人名称',
  `REPORTSTATUS` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '状态',
  `SUBMITTIME` timestamp(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '提交时间',
  PRIMARY KEY (`IBZ_DAILYID`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2380 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '日报' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibz_favorites
-- ----------------------------
DROP TABLE IF EXISTS `t_ibz_favorites`;
CREATE TABLE `t_ibz_favorites`  (
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `IBZ_FAVORITESID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '收藏标识',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL,
  `IBZ_FAVORITESNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '收藏名称',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL,
  `OBJECTID` int(11) NULL DEFAULT NULL COMMENT '数据对象标识',
  `ACCOUNT` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '收藏用户',
  `TYPE` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '类型',
  PRIMARY KEY (`IBZ_FAVORITESID`) USING BTREE,
  INDEX `TYPE_ACCOUNT_OBJECTID`(`TYPE`, `ACCOUNT`, `OBJECTID`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '收藏' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibz_monthly
-- ----------------------------
DROP TABLE IF EXISTS `t_ibz_monthly`;
CREATE TABLE `t_ibz_monthly`  (
  `IBZ_MONTHLYID` bigint(100) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '月报标识',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `IBZ_MONTHLYNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '月报名称',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `DATE` datetime(0) NULL DEFAULT NULL COMMENT '日期',
  `ACCOUNT` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户',
  `WORKTHISMONTH` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '本月工作',
  `PLANSNEXTMONTH` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '下月计划',
  `REPORTTO` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '汇报给',
  `MAILTO` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '抄送给',
  `COMMENT` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '其他事项',
  `THISMONTHTASK` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '本月完成任务',
  `NEXTMONTHPLANSTASK` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '下月计划任务',
  `ISSUBMIT` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否提交',
  `UPDATEMANNAME` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人名称',
  `REPORTSTATUS` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '状态',
  `CREATEMANNAME` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人名称',
  `SUBMITTIME` datetime(0) NULL DEFAULT NULL COMMENT '提交时间',
  PRIMARY KEY (`IBZ_MONTHLYID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 96 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '月报' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibz_plantemplet
-- ----------------------------
DROP TABLE IF EXISTS `t_ibz_plantemplet`;
CREATE TABLE `t_ibz_plantemplet`  (
  `IBZ_PLANTEMPLETID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '产品计划模板标识',
  `IBZ_PLANTEMPLETNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '模板名称',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `PLANS` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '计划',
  `PRODUCT` bigint(20) NULL DEFAULT NULL COMMENT '产品',
  `ACL` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '权限',
  `CREATEMANNAME` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建人姓名',
  PRIMARY KEY (`IBZ_PLANTEMPLETID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '计划模板' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibz_plantempletdetail
-- ----------------------------
DROP TABLE IF EXISTS `t_ibz_plantempletdetail`;
CREATE TABLE `t_ibz_plantempletdetail`  (
  `IBZ_PLANTEMPLETDETAILID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '计划模板详情标识',
  `IBZ_PLANTEMPLETDETAILNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '计划模板详情名称',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `PLANTEMPLETID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '产品计划模板标识',
  `PLANCODE` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '计划编号',
  `ORDER` int(11) NULL DEFAULT NULL COMMENT '排序',
  `DESC` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '计划名称',
  `EXPECT` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '描述',
  `TYPE` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '类型',
  PRIMARY KEY (`IBZ_PLANTEMPLETDETAILID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '计划模板详情' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibz_productlife
-- ----------------------------
DROP TABLE IF EXISTS `t_ibz_productlife`;
CREATE TABLE `t_ibz_productlife`  (
  `BRANCH` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '平台/分支',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `IBZ_PRODUCTLIFENAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '产品生命周期名称',
  `PRODUCT` int(11) NULL DEFAULT NULL COMMENT '产品',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `PARENT` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '父对象',
  `YEAR` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '年',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `TYPE` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '属性',
  `MARKER` int(11) NULL DEFAULT NULL COMMENT '里程碑',
  `BEGIN` datetime(0) NULL DEFAULT NULL COMMENT '开始日期',
  `IBZ_PRODUCTLIFEID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '产品生命周期标识',
  `END` datetime(0) NULL DEFAULT NULL COMMENT '结束日期',
  PRIMARY KEY (`IBZ_PRODUCTLIFEID`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '产品生命周期' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibz_report_role_config
-- ----------------------------
DROP TABLE IF EXISTS `t_ibz_report_role_config`;
CREATE TABLE `t_ibz_report_role_config`  (
  `IBZ_REPORT_ROLE_CONFIGNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '汇报角色配置名称',
  `IBZ_REPORT_ROLE_CONFIGID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '汇报角色配置标识',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `REPORT_ROLE` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '角色',
  `TYPE` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '类型',
  PRIMARY KEY (`IBZ_REPORT_ROLE_CONFIGID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '汇报角色配置' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibz_reportly
-- ----------------------------
DROP TABLE IF EXISTS `t_ibz_reportly`;
CREATE TABLE `t_ibz_reportly`  (
  `IBZ_REPORTLYID` bigint(100) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '汇报标识',
  `IBZ_REPORTLYNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '汇报名称',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `CONTENT` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '工作内容',
  `REPORTTO` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '汇报给',
  `MAILTO` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '抄送给',
  `DATE` datetime(0) NULL DEFAULT NULL COMMENT '汇报日期',
  `ISSUBMIT` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否提交',
  `SUBMITTIME` datetime(0) NULL DEFAULT NULL COMMENT '提交时间',
  `ACCOUNT` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户',
  `REPORTSTATUS` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`IBZ_REPORTLYID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '汇报' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibz_systpl
-- ----------------------------
DROP TABLE IF EXISTS `t_ibz_systpl`;
CREATE TABLE `t_ibz_systpl`  (
  `IBZ_SYSTPLID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '系统模板标识',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL,
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `IBZ_SYSTPLNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '系统模板名称',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL,
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  PRIMARY KEY (`IBZ_SYSTPLID`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '系统模板' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibz_top
-- ----------------------------
DROP TABLE IF EXISTS `t_ibz_top`;
CREATE TABLE `t_ibz_top`  (
  `IBZ_TOPID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '标识',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL,
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `IBZ_TOPNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '置顶名称',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL,
  `TYPE` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '类型',
  `OBJECTID` int(11) NULL DEFAULT NULL COMMENT '数据对象标识',
  `OBJECTORDER` int(11) NULL DEFAULT NULL COMMENT '排序',
  `ACCOUNT` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '置顶用户',
  PRIMARY KEY (`IBZ_TOPID`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '置顶' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibz_weekly
-- ----------------------------
DROP TABLE IF EXISTS `t_ibz_weekly`;
CREATE TABLE `t_ibz_weekly`  (
  `IBZ_WEEKLYNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '周报名称',
  `IBZ_WEEKLYID` bigint(100) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '周报标识',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `ACCOUNT` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户',
  `MAILTO` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '抄送给',
  `ISSUBMIT` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否提交',
  `REPORTTO` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '汇报给',
  `COMMENT` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '其他事项',
  `DATE` datetime(0) NULL DEFAULT NULL COMMENT '日期',
  `WORKTHISWEEK` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '本周工作',
  `PLANNEXTWEEK` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '下周计划',
  `THISWEEKTASK` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '本周完成任务',
  `NEXTWEEKTASK` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '下周计划任务',
  `UPDATEMANNAME` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人名称',
  `CREATEMANNAME` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人名称',
  `REPORTSTATUS` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '状态',
  `SUBMITTIME` datetime(0) NULL DEFAULT NULL COMMENT '提交时间',
  PRIMARY KEY (`IBZ_WEEKLYID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 615 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '周报' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibzpro_config
-- ----------------------------
DROP TABLE IF EXISTS `t_ibzpro_config`;
CREATE TABLE `t_ibzpro_config`  (
  `IBZPRO_CONFIGNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '系统配置表名称',
  `IBZPRO_CONFIGID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '系统配置表标识',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `SCOPE` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '范围',
  `GROUP` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '分组',
  `VAILD` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否启用',
  `MEMO` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '描述',
  `TYPE` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '类型',
  `MANAGEMENTSTATUS` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '管理现状',
  PRIMARY KEY (`IBZPRO_CONFIGID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '系统配置表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibzpro_projectweekly
-- ----------------------------
DROP TABLE IF EXISTS `t_ibzpro_projectweekly`;
CREATE TABLE `t_ibzpro_projectweekly`  (
  `IBZPRO_PROJECTWEEKLYNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '项目周报名称',
  `IBZPRO_PROJECTWEEKLYID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '项目周报标识',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `PM` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '项目负责人',
  `TOTALESTIMATES` double NULL DEFAULT NULL COMMENT '总工时',
  `TASKS` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '任务',
  `DATE` datetime(0) NULL DEFAULT NULL COMMENT '日期',
  `PROJECT` bigint(8) UNSIGNED NULL DEFAULT NULL COMMENT '项目编号',
  `WEEK` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '周',
  `YEAR` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '年',
  `MONTH` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '月',
  `BEGINDATESTATS` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '开始统计',
  `ENDDATESTATS` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '结束统计',
  PRIMARY KEY (`IBZPRO_PROJECTWEEKLYID`) USING BTREE,
  INDEX `FA9A870079F6BCF22A`(`PROJECT`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '项目周报' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibzpro_system
-- ----------------------------
DROP TABLE IF EXISTS `t_ibzpro_system`;
CREATE TABLE `t_ibzpro_system`  (
  `IBZPRO_SYSTEMID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '运行生产系统标识',
  `IBZPRO_SYSTEMNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '运行生产系统名称',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL,
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`IBZPRO_SYSTEMID`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '运行生产系统' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_ibzpro_systpl
-- ----------------------------
DROP TABLE IF EXISTS `t_ibzpro_systpl`;
CREATE TABLE `t_ibzpro_systpl`  (
  `IBZPRO_SYSTPLID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '系统模板标识',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL,
  `IBZPRO_SYSTPLNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '系统模板名称',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL,
  `PUBLIC` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否公开',
  `IBIZ_SOURCEOBJECT` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '来源对象',
  `CONTENT` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '模板内容',
  `TPLTYPE` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'IBIZ模板类型',
  `FILE` bigint(20) UNSIGNED NULL DEFAULT NULL COMMENT 'id',
  PRIMARY KEY (`IBZPRO_SYSTPLID`) USING BTREE,
  INDEX `FFD0FBE185A072627C`(`FILE`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '系统模板' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_sys_update_features
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_update_features`;
CREATE TABLE `t_sys_update_features`  (
  `SYS_UPDATE_FEATURESNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '系统更新功能名称',
  `SYS_UPDATE_FEATURESID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '系统更新功能标识',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `SYS_UPDATE_LOGID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '系统更新日志标识',
  `UPFEATURES` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新功能',
  `FEATURESDESC` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '功能描述',
  `TYPE` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新类型',
  `DISPLAYORDER` int(11) NULL DEFAULT NULL COMMENT '展示顺序',
  `SYS_UPDATE_LOG` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '系统更新日志标识',
  PRIMARY KEY (`SYS_UPDATE_FEATURESID`) USING BTREE,
  INDEX `F4E719C7322A682CBD`(`SYS_UPDATE_LOG`) USING BTREE,
  INDEX `F4F285C7ACBBE2262F`(`SYS_UPDATE_LOGID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '系统更新功能' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_sys_update_log
-- ----------------------------
DROP TABLE IF EXISTS `t_sys_update_log`;
CREATE TABLE `t_sys_update_log`  (
  `SYS_UPDATE_LOGID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '系统更新日志标识',
  `SYS_UPDATE_LOGNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新名称',
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '建立时间',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `UPDATE` datetime(0) NULL DEFAULT NULL COMMENT '更新日期',
  `UPDESC` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '更新说明',
  `LATESTUPDATE` int(11) NULL DEFAULT NULL COMMENT '最新更新',
  `UPDATEBRANCH` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新平台',
  PRIMARY KEY (`SYS_UPDATE_LOGID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '系统更新日志' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for t_taskmsgrecord
-- ----------------------------
DROP TABLE IF EXISTS `t_taskmsgrecord`;
CREATE TABLE `t_taskmsgrecord`  (
  `TASKMSGRECORDID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '待办消息记录标识',
  `CREATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '建立人',
  `TASKMSGRECORDNAME` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '待办消息记录名称',
  `ENABLE` int(11) NULL DEFAULT NULL COMMENT '逻辑有效标志',
  `UPDATEDATE` datetime(0) NULL DEFAULT NULL,
  `UPDATEMAN` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `CREATEDATE` datetime(0) NULL DEFAULT NULL,
  `TASKUSERID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '待办人标识',
  `APPTASKID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '第三方应用待办标识',
  `TASKTYPE` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '待办类型',
  `MEMO` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  `TITLE` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '标题',
  `DATAID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '数据标识',
  PRIMARY KEY (`TASKMSGRECORDID`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '待办消息记录' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_action
-- ----------------------------
DROP TABLE IF EXISTS `zt_action`;
CREATE TABLE `zt_action`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `objectType` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `objectID` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `product` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `project` mediumint(9) NOT NULL,
  `actor` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `action` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `date` datetime(0) NOT NULL,
  `comment` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `extra` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `read` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `date`(`date`) USING BTREE,
  INDEX `actor`(`actor`) USING BTREE,
  INDEX `project`(`project`) USING BTREE,
  INDEX `objectID_OBJECTTYPE`(`objectID`, `objectType`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 67502 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_block
-- ----------------------------
DROP TABLE IF EXISTS `zt_block`;
CREATE TABLE `zt_block`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `account` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `module` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `source` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `block` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `params` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `order` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `grid` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `height` smallint(5) UNSIGNED NOT NULL DEFAULT 0,
  `hidden` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `accountModuleOrder`(`account`, `module`, `order`) USING BTREE,
  INDEX `account`(`account`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_branch
-- ----------------------------
DROP TABLE IF EXISTS `zt_branch`;
CREATE TABLE `zt_branch`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `product` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `order` smallint(5) UNSIGNED NOT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `product`(`product`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_bug
-- ----------------------------
DROP TABLE IF EXISTS `zt_bug`;
CREATE TABLE `zt_bug`  (
  `id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `product` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `branch` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `module` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `project` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `plan` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `story` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `storyVersion` smallint(6) NOT NULL DEFAULT 1,
  `task` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `toTask` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `toStory` mediumint(8) NOT NULL DEFAULT 0,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `keywords` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `severity` tinyint(4) NOT NULL DEFAULT 0,
  `pri` tinyint(3) UNSIGNED NOT NULL,
  `type` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `os` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `browser` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `hardware` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `found` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `steps` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` enum('active','resolved','closed') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'active',
  `subStatus` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `color` char(7) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `confirmed` tinyint(1) NOT NULL DEFAULT 0,
  `activatedCount` smallint(6) NOT NULL,
  `activatedDate` datetime(0) NOT NULL,
  `mailto` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `openedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `openedDate` datetime(0) NOT NULL,
  `openedBuild` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `assignedTo` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `assignedDate` datetime(0) NOT NULL,
  `deadline` date NOT NULL,
  `resolvedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `resolution` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `resolvedBuild` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `resolvedDate` datetime(0) NOT NULL,
  `closedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `closedDate` datetime(0) NOT NULL,
  `duplicateBug` mediumint(8) UNSIGNED NOT NULL,
  `linkBug` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `case` mediumint(8) UNSIGNED NOT NULL,
  `caseVersion` smallint(6) NOT NULL DEFAULT 1,
  `result` mediumint(8) UNSIGNED NOT NULL,
  `repo` mediumint(8) UNSIGNED NOT NULL,
  `entry` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `lines` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `v1` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `v2` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `repoType` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `testtask` mediumint(8) UNSIGNED NOT NULL,
  `lastEditedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `lastEditedDate` datetime(0) NOT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `product`(`product`) USING BTREE,
  INDEX `project`(`project`) USING BTREE,
  INDEX `status`(`status`) USING BTREE,
  INDEX `plan`(`plan`) USING BTREE,
  INDEX `story`(`story`) USING BTREE,
  INDEX `case`(`case`) USING BTREE,
  INDEX `assignedTo`(`assignedTo`) USING BTREE,
  INDEX `FBC549EB20D0091CA8`(`toStory`) USING BTREE,
  INDEX `F2D9B199EFCE9D11C9`(`entry`) USING BTREE,
  INDEX `FE9BAFE0B99BFA950C`(`toTask`) USING BTREE,
  INDEX `F2F5AE3C453BA66928`(`module`) USING BTREE,
  INDEX `FE78608389B0F8256E`(`branch`) USING BTREE,
  INDEX `F2121957B58E9AC70E`(`duplicateBug`) USING BTREE,
  INDEX `FADCD439791EF71575`(`repo`) USING BTREE,
  INDEX `F35B0FF93CF3498B28`(`task`) USING BTREE,
  INDEX `F2AAA7501573EA258E`(`testtask`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_build
-- ----------------------------
DROP TABLE IF EXISTS `zt_build`;
CREATE TABLE `zt_build`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `product` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `branch` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `project` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `name` char(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `scmPath` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `filePath` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` date NOT NULL,
  `stories` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `bugs` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `builder` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `desc` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `CREATEBUGCNT` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '产生的bug',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `product`(`product`) USING BTREE,
  INDEX `project`(`project`) USING BTREE,
  INDEX `F8A46A551C9DC16F40`(`branch`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_burn
-- ----------------------------
DROP TABLE IF EXISTS `zt_burn`;
CREATE TABLE `zt_burn`  (
  `project` mediumint(8) UNSIGNED NOT NULL,
  `task` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `date` date NOT NULL,
  `estimate` float NOT NULL,
  `left` float NOT NULL,
  `consumed` float NOT NULL,
  PRIMARY KEY (`project`, `date`, `task`) USING BTREE,
  INDEX `F50C7A44EC35D2C2C5`(`task`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Table structure for zt_case
-- ----------------------------
DROP TABLE IF EXISTS `zt_case`;
CREATE TABLE `zt_case`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `product` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `branch` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `lib` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `module` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `path` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `story` mediumint(30) UNSIGNED NOT NULL DEFAULT 0,
  `storyVersion` smallint(6) NOT NULL DEFAULT 1,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `precondition` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `keywords` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pri` tinyint(3) UNSIGNED NOT NULL DEFAULT 3,
  `type` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '1',
  `auto` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'no',
  `frame` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `stage` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `howRun` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `scriptedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `scriptedDate` date NOT NULL,
  `scriptStatus` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `scriptLocation` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '1',
  `subStatus` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `color` char(7) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `frequency` enum('1','2','3') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '1',
  `order` tinyint(30) UNSIGNED NOT NULL DEFAULT 0,
  `openedBy` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `openedDate` datetime(0) NOT NULL,
  `reviewedBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `reviewedDate` date NOT NULL,
  `lastEditedBy` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `lastEditedDate` datetime(0) NOT NULL,
  `version` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `linkCase` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `fromBug` mediumint(8) UNSIGNED NOT NULL,
  `fromCaseID` mediumint(8) UNSIGNED NOT NULL,
  `fromCaseVersion` mediumint(8) UNSIGNED NOT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `lastRunner` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `lastRunDate` datetime(0) NOT NULL,
  `lastRunResult` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `product`(`product`) USING BTREE,
  INDEX `story`(`story`) USING BTREE,
  INDEX `module`(`module`) USING BTREE,
  INDEX `FC94FB7363E9E779B1`(`fromCaseID`) USING BTREE,
  INDEX `F5BDF27B698BD5339F`(`branch`) USING BTREE,
  INDEX `F30260955C984B92AD`(`fromBug`) USING BTREE,
  INDEX `FDDBEF4CB165D6CF31`(`lib`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_casestep
-- ----------------------------
DROP TABLE IF EXISTS `zt_casestep`;
CREATE TABLE `zt_casestep`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `parent` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `case` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `version` smallint(3) UNSIGNED NOT NULL DEFAULT 0,
  `type` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'step',
  `desc` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `expect` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `case`(`case`) USING BTREE,
  INDEX `version`(`version`) USING BTREE,
  INDEX `parent`(`parent`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_company
-- ----------------------------
DROP TABLE IF EXISTS `zt_company`;
CREATE TABLE `zt_company`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` char(120) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `fax` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` char(120) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `zipcode` char(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `website` char(120) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `backyard` char(120) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `guest` enum('1','0') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `admins` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Table structure for zt_compile
-- ----------------------------
DROP TABLE IF EXISTS `zt_compile`;
CREATE TABLE `zt_compile`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `job` mediumint(8) UNSIGNED NOT NULL,
  `queue` mediumint(8) NOT NULL,
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `logs` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `atTime` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `testtask` mediumint(8) UNSIGNED NOT NULL,
  `tag` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createdBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createdDate` datetime(0) NOT NULL,
  `updateDate` datetime(0) NOT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_config
-- ----------------------------
DROP TABLE IF EXISTS `zt_config`;
CREATE TABLE `zt_config`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `owner` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `module` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `section` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `key` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `value` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `unique`(`owner`, `module`, `section`, `key`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_cron
-- ----------------------------
DROP TABLE IF EXISTS `zt_cron`;
CREATE TABLE `zt_cron`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `m` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `h` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `dom` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `mon` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `dow` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `command` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `buildin` tinyint(1) NOT NULL DEFAULT 0,
  `status` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `lastTime` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `lastTime`(`lastTime`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_dept
-- ----------------------------
DROP TABLE IF EXISTS `zt_dept`;
CREATE TABLE `zt_dept`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` char(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `parent` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `path` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `grade` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `order` smallint(4) UNSIGNED NOT NULL DEFAULT 0,
  `position` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `function` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `manager` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `parent`(`parent`) USING BTREE,
  INDEX `path`(`path`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Table structure for zt_doc
-- ----------------------------
DROP TABLE IF EXISTS `zt_doc`;
CREATE TABLE `zt_doc`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `product` mediumint(8) UNSIGNED NOT NULL,
  `project` mediumint(8) UNSIGNED NOT NULL,
  `lib` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `module` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `keywords` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `views` smallint(5) UNSIGNED NOT NULL,
  `collector` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `addedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `addedDate` datetime(0) NOT NULL,
  `editedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `editedDate` datetime(0) NOT NULL,
  `acl` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'open',
  `groups` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `users` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `version` smallint(5) UNSIGNED NOT NULL DEFAULT 1,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `product`(`product`) USING BTREE,
  INDEX `project`(`project`) USING BTREE,
  INDEX `lib`(`lib`) USING BTREE,
  INDEX `module`(`module`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_doccontent
-- ----------------------------
DROP TABLE IF EXISTS `zt_doccontent`;
CREATE TABLE `zt_doccontent`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `doc` mediumint(8) UNSIGNED NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `digest` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `files` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `version` smallint(5) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `doc_version`(`doc`, `version`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_doclib
-- ----------------------------
DROP TABLE IF EXISTS `zt_doclib`;
CREATE TABLE `zt_doclib`  (
  `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `type` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `product` mediumint(8) UNSIGNED NOT NULL,
  `project` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `acl` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'open',
  `groups` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `users` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `main` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `collector` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `order` tinyint(5) UNSIGNED NOT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `MDEPTID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '部门标识',
  `ORGID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '组织标识',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `product`(`product`) USING BTREE,
  INDEX `project`(`project`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 158 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_effort
-- ----------------------------
DROP TABLE IF EXISTS `zt_effort`;
CREATE TABLE `zt_effort`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `todo` enum('1','0') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '1',
  `date` date NOT NULL,
  `begin` datetime(0) NOT NULL DEFAULT '1970-01-01 00:00:00',
  `end` datetime(0) NOT NULL DEFAULT '1970-01-01 00:00:00',
  `type` enum('1','2','3') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '1',
  `idvalue` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `name` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `desc` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `status` enum('1','2','3') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user`(`user`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Table structure for zt_entry
-- ----------------------------
DROP TABLE IF EXISTS `zt_entry`;
CREATE TABLE `zt_entry`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `account` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `code` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `key` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `freePasswd` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `ip` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `desc` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createdBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createdDate` datetime(0) NOT NULL,
  `calledTime` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `editedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `editedDate` datetime(0) NOT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_extension
-- ----------------------------
DROP TABLE IF EXISTS `zt_extension`;
CREATE TABLE `zt_extension`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `code` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `version` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `author` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `desc` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `license` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'extension',
  `site` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `zentaoCompatible` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `installedTime` datetime(0) NOT NULL,
  `depends` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `dirs` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `files` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `code`(`code`) USING BTREE,
  INDEX `name`(`name`) USING BTREE,
  INDEX `installedTime`(`installedTime`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_file
-- ----------------------------
DROP TABLE IF EXISTS `zt_file`;
CREATE TABLE `zt_file`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `pathname` char(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `extension` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `size` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `objectType` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `objectID` mediumint(9) NOT NULL,
  `addedBy` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `addedDate` datetime(0) NOT NULL,
  `downloads` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `extra` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `objectType`(`objectType`) USING BTREE,
  INDEX `objectID`(`objectID`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 12759 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_group
-- ----------------------------
DROP TABLE IF EXISTS `zt_group`;
CREATE TABLE `zt_group`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `role` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `desc` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `acl` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_grouppriv
-- ----------------------------
DROP TABLE IF EXISTS `zt_grouppriv`;
CREATE TABLE `zt_grouppriv`  (
  `group` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `module` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `method` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  UNIQUE INDEX `group`(`group`, `module`, `method`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Table structure for zt_history
-- ----------------------------
DROP TABLE IF EXISTS `zt_history`;
CREATE TABLE `zt_history`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `action` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `field` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `old` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `new` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `diff` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `action`(`action`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 166545 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_im_chat
-- ----------------------------
DROP TABLE IF EXISTS `zt_im_chat`;
CREATE TABLE `zt_im_chat`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `gid` char(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `name` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'group',
  `admins` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `committers` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `subject` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `public` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `createdBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `createdDate` datetime(0) NOT NULL DEFAULT '1970-01-01 00:00:00',
  `editedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `editedDate` datetime(0) NOT NULL DEFAULT '1970-01-01 00:00:00',
  `lastActiveTime` datetime(0) NOT NULL DEFAULT '1970-01-01 00:00:00',
  `dismissDate` datetime(0) NOT NULL DEFAULT '1970-01-01 00:00:00',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `gid`(`gid`) USING BTREE,
  INDEX `name`(`name`) USING BTREE,
  INDEX `type`(`type`) USING BTREE,
  INDEX `public`(`public`) USING BTREE,
  INDEX `createdBy`(`createdBy`) USING BTREE,
  INDEX `editedBy`(`editedBy`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_im_chatuser
-- ----------------------------
DROP TABLE IF EXISTS `zt_im_chatuser`;
CREATE TABLE `zt_im_chatuser`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `cgid` char(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `user` mediumint(8) NOT NULL DEFAULT 0,
  `order` smallint(5) NOT NULL DEFAULT 0,
  `star` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `hide` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `mute` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `freeze` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `join` datetime(0) NOT NULL DEFAULT '1970-01-01 00:00:00',
  `quit` datetime(0) NOT NULL DEFAULT '1970-01-01 00:00:00',
  `category` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `chatuser`(`cgid`, `user`) USING BTREE,
  INDEX `cgid`(`cgid`) USING BTREE,
  INDEX `user`(`user`) USING BTREE,
  INDEX `order`(`order`) USING BTREE,
  INDEX `star`(`star`) USING BTREE,
  INDEX `hide`(`hide`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_im_client
-- ----------------------------
DROP TABLE IF EXISTS `zt_im_client`;
CREATE TABLE `zt_im_client`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `version` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `desc` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `changeLog` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `strategy` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `downloads` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createdDate` datetime(0) NOT NULL,
  `createdBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `editedDate` datetime(0) NOT NULL,
  `editedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `status` enum('released','wait') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'wait',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_im_conference
-- ----------------------------
DROP TABLE IF EXISTS `zt_im_conference`;
CREATE TABLE `zt_im_conference`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `rid` char(24) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `cgid` char(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `status` enum('closed','open') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'closed',
  `participants` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `openedBy` mediumint(8) NOT NULL DEFAULT 0,
  `openedDate` datetime(0) NOT NULL DEFAULT '1970-01-01 00:00:00',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_im_conferenceaction
-- ----------------------------
DROP TABLE IF EXISTS `zt_im_conferenceaction`;
CREATE TABLE `zt_im_conferenceaction`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `rid` char(24) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `type` enum('create','join','leave','close') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'create',
  `user` mediumint(8) NOT NULL DEFAULT 0,
  `date` datetime(0) NOT NULL DEFAULT '1970-01-01 00:00:00',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Table structure for zt_im_message
-- ----------------------------
DROP TABLE IF EXISTS `zt_im_message`;
CREATE TABLE `zt_im_message`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `gid` char(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `cgid` char(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `user` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `date` datetime(0) NOT NULL DEFAULT '1970-01-01 00:00:00',
  `order` bigint(8) UNSIGNED NOT NULL,
  `type` enum('normal','broadcast','notify') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'normal',
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `contentType` enum('text','plain','emotion','image','file','object','code') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'text',
  `data` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `mgid`(`gid`) USING BTREE,
  INDEX `mcgid`(`cgid`) USING BTREE,
  INDEX `muser`(`user`) USING BTREE,
  INDEX `mtype`(`type`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_im_messagestatus
-- ----------------------------
DROP TABLE IF EXISTS `zt_im_messagestatus`;
CREATE TABLE `zt_im_messagestatus`  (
  `user` mediumint(8) NOT NULL DEFAULT 0,
  `message` int(11) UNSIGNED NOT NULL,
  `status` enum('waiting','sent','readed','deleted') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'waiting',
  UNIQUE INDEX `user`(`user`, `message`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Table structure for zt_im_queue
-- ----------------------------
DROP TABLE IF EXISTS `zt_im_queue`;
CREATE TABLE `zt_im_queue`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `type` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `addDate` datetime(0) NOT NULL,
  `processDate` datetime(0) NOT NULL,
  `result` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_jenkins
-- ----------------------------
DROP TABLE IF EXISTS `zt_jenkins`;
CREATE TABLE `zt_jenkins`  (
  `id` smallint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `account` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createdBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createdDate` datetime(0) NOT NULL,
  `editedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `editedDate` datetime(0) NOT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_job
-- ----------------------------
DROP TABLE IF EXISTS `zt_job`;
CREATE TABLE `zt_job`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `repo` mediumint(8) UNSIGNED NOT NULL,
  `product` mediumint(8) UNSIGNED NOT NULL,
  `frame` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `jkHost` mediumint(8) UNSIGNED NOT NULL,
  `jkJob` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `triggerType` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `svnDir` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `atDay` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `atTime` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `comment` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createdBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createdDate` datetime(0) NOT NULL,
  `editedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `editedDate` datetime(0) NOT NULL,
  `lastExec` datetime(0) NULL DEFAULT NULL,
  `lastStatus` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `lastTag` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_lang
-- ----------------------------
DROP TABLE IF EXISTS `zt_lang`;
CREATE TABLE `zt_lang`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `lang` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `module` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `section` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `key` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `value` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `system` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `lang`(`lang`, `module`, `section`, `key`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_log
-- ----------------------------
DROP TABLE IF EXISTS `zt_log`;
CREATE TABLE `zt_log`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `objectType` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `objectID` mediumint(8) UNSIGNED NOT NULL,
  `action` mediumint(8) UNSIGNED NOT NULL,
  `date` datetime(0) NOT NULL,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `contentType` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `data` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `result` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `objectType`(`objectType`) USING BTREE,
  INDEX `obejctID`(`objectID`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_module
-- ----------------------------
DROP TABLE IF EXISTS `zt_module`;
CREATE TABLE `zt_module`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `root` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `branch` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `name` char(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `parent` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `path` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `grade` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `order` smallint(5) UNSIGNED NOT NULL DEFAULT 0,
  `type` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `owner` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `collector` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `short` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `MDEPTID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '部门标识',
  `ORGID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '组织标识',
  `IBIZ_ID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'IBIZ标识',
  `IBIZ_STORYTYPE` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '需求模块类型',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `root`(`root`) USING BTREE,
  INDEX `type`(`type`) USING BTREE,
  INDEX `path`(`path`) USING BTREE,
  INDEX `branch`(`branch`) USING BTREE,
  INDEX `parent`(`parent`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 112 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_notify
-- ----------------------------
DROP TABLE IF EXISTS `zt_notify`;
CREATE TABLE `zt_notify`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `objectType` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `objectID` mediumint(8) UNSIGNED NOT NULL,
  `action` mediumint(9) NOT NULL,
  `toList` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ccList` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `subject` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `data` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createdBy` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createdDate` datetime(0) NOT NULL,
  `sendTime` datetime(0) NOT NULL,
  `status` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'wait',
  `failReason` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_oauth
-- ----------------------------
DROP TABLE IF EXISTS `zt_oauth`;
CREATE TABLE `zt_oauth`  (
  `account` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `openID` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `providerType` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `providerID` mediumint(8) UNSIGNED NOT NULL,
  INDEX `account`(`account`) USING BTREE,
  INDEX `providerType`(`providerType`) USING BTREE,
  INDEX `providerID`(`providerID`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_product
-- ----------------------------
DROP TABLE IF EXISTS `zt_product`;
CREATE TABLE `zt_product`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(90) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `code` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `line` mediumint(8) NOT NULL,
  `type` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'normal',
  `status` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `subStatus` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `desc` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `PO` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `QD` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `RD` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `acl` enum('open','private','custom') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'open',
  `whitelist` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createdBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createdDate` datetime(0) NOT NULL,
  `createdVersion` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `order` mediumint(8) UNSIGNED NOT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `MDEPTID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '部门标识',
  `ORGID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '组织标识',
  `IBIZ_ID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'IBIZ标识',
  `SUPPROREPORT` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '支持产品汇报',
  `PRODUCTCLASS` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '产品分类',
  `orgname` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '归属组织名',
  `mdeptname` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '归属部门名',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `acl`(`acl`) USING BTREE,
  INDEX `order`(`order`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 56 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_productplan
-- ----------------------------
DROP TABLE IF EXISTS `zt_productplan`;
CREATE TABLE `zt_productplan`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `product` mediumint(8) UNSIGNED NOT NULL,
  `branch` mediumint(8) UNSIGNED NOT NULL,
  `parent` mediumint(9) NULL DEFAULT 0,
  `title` varchar(90) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `desc` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `begin` date NULL DEFAULT NULL,
  `end` date NULL DEFAULT NULL,
  `order` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `STATUS` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '计划状态',
  `ENDACT` datetime(0) NULL DEFAULT NULL COMMENT '实际结束日期',
  `BEGINACT` datetime(0) NULL DEFAULT NULL COMMENT '实际开始日期',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `end`(`end`) USING BTREE,
  INDEX `branch`(`branch`) USING BTREE,
  INDEX `DELETE_PARENT_PRODUCT_STA_TITLE`(`deleted`, `parent`, `product`, `STATUS`, `title`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 187 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_project
-- ----------------------------
DROP TABLE IF EXISTS `zt_project`;
CREATE TABLE `zt_project`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `isCat` enum('1','0') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `catID` mediumint(8) UNSIGNED NOT NULL,
  `type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'sprint',
  `parent` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `name` varchar(90) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `code` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `begin` date NOT NULL,
  `end` date NOT NULL,
  `days` smallint(5) UNSIGNED NOT NULL,
  `status` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `subStatus` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `statge` enum('1','2','3','4','5') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '1',
  `pri` enum('1','2','3','4') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '1',
  `desc` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `openedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `openedDate` datetime(0) NOT NULL,
  `openedVersion` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `closedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `closedDate` datetime(0) NULL DEFAULT NULL,
  `canceledBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `canceledDate` datetime(0) NULL DEFAULT NULL,
  `PO` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `PM` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `QD` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `RD` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `team` varchar(90) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `acl` enum('open','private','custom') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'open',
  `whitelist` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `order` mediumint(8) UNSIGNED NOT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `MDEPTID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '部门标识',
  `ORGID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '组织标识',
  `SUPPROREPORT` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '支持项目汇报',
  `PMSEEPROJECTINFO` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '项目立项信息',
  `MDEPTNAME` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '归属部门名',
  `ORGNAME` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '归属组织名',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `parent`(`parent`) USING BTREE,
  INDEX `begin`(`begin`) USING BTREE,
  INDEX `end`(`end`) USING BTREE,
  INDEX `status`(`status`) USING BTREE,
  INDEX `acl`(`acl`) USING BTREE,
  INDEX `order`(`order`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 109 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_projectproduct
-- ----------------------------
DROP TABLE IF EXISTS `zt_projectproduct`;
CREATE TABLE `zt_projectproduct`  (
  `project` mediumint(8) UNSIGNED NOT NULL,
  `product` mediumint(8) UNSIGNED NOT NULL,
  `branch` mediumint(8) UNSIGNED NOT NULL,
  `plan` mediumint(8) UNSIGNED NOT NULL,
  PRIMARY KEY (`project`, `product`) USING BTREE,
  INDEX `product`(`product`) USING BTREE,
  INDEX `plan`(`plan`) USING BTREE,
  INDEX `branch`(`branch`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Table structure for zt_projectstory
-- ----------------------------
DROP TABLE IF EXISTS `zt_projectstory`;
CREATE TABLE `zt_projectstory`  (
  `project` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `product` mediumint(8) UNSIGNED NOT NULL,
  `story` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `version` smallint(6) NOT NULL DEFAULT 1,
  `order` smallint(6) UNSIGNED NOT NULL,
  UNIQUE INDEX `project`(`project`, `story`) USING BTREE,
  INDEX `story`(`story`) USING BTREE,
  INDEX `product`(`product`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Table structure for zt_relation
-- ----------------------------
DROP TABLE IF EXISTS `zt_relation`;
CREATE TABLE `zt_relation`  (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `program` mediumint(8) NOT NULL,
  `product` mediumint(8) NOT NULL,
  `project` mediumint(8) NOT NULL,
  `AType` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `AID` mediumint(8) NOT NULL,
  `AVersion` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `relation` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `BType` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `BID` mediumint(8) NOT NULL,
  `BVersion` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `extra` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `relation`(`relation`, `AType`, `BType`, `AID`, `BID`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Table structure for zt_release
-- ----------------------------
DROP TABLE IF EXISTS `zt_release`;
CREATE TABLE `zt_release`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `product` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `branch` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `build` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `marker` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `date` date NOT NULL,
  `stories` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `bugs` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `leftBugs` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `desc` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'normal',
  `subStatus` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `product`(`product`) USING BTREE,
  INDEX `build`(`build`) USING BTREE,
  INDEX `branch`(`branch`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_repo
-- ----------------------------
DROP TABLE IF EXISTS `zt_repo`;
CREATE TABLE `zt_repo`  (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `prefix` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `encoding` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `SCM` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `client` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `commits` mediumint(8) UNSIGNED NOT NULL,
  `account` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `encrypt` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'plain',
  `acl` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `synced` tinyint(1) NOT NULL DEFAULT 0,
  `lastSync` datetime(0) NOT NULL,
  `desc` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `deleted` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_repobranch
-- ----------------------------
DROP TABLE IF EXISTS `zt_repobranch`;
CREATE TABLE `zt_repobranch`  (
  `repo` mediumint(8) UNSIGNED NOT NULL,
  `revision` mediumint(8) UNSIGNED NOT NULL,
  `branch` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  UNIQUE INDEX `repo_revision_branch`(`repo`, `revision`, `branch`) USING BTREE,
  INDEX `branch`(`branch`) USING BTREE,
  INDEX `revision`(`revision`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_repofiles
-- ----------------------------
DROP TABLE IF EXISTS `zt_repofiles`;
CREATE TABLE `zt_repofiles`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `repo` mediumint(8) UNSIGNED NOT NULL,
  `revision` mediumint(8) UNSIGNED NOT NULL,
  `path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `parent` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `action` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `path`(`path`) USING BTREE,
  INDEX `parent`(`parent`) USING BTREE,
  INDEX `repo`(`repo`) USING BTREE,
  INDEX `revision`(`revision`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_repohistory
-- ----------------------------
DROP TABLE IF EXISTS `zt_repohistory`;
CREATE TABLE `zt_repohistory`  (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `repo` mediumint(9) NOT NULL,
  `revision` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `commit` mediumint(8) UNSIGNED NOT NULL,
  `comment` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `committer` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `repo`(`repo`) USING BTREE,
  INDEX `revision`(`revision`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_score
-- ----------------------------
DROP TABLE IF EXISTS `zt_score`;
CREATE TABLE `zt_score`  (
  `id` bigint(12) UNSIGNED NOT NULL AUTO_INCREMENT,
  `account` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `module` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `method` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `desc` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `before` int(11) NOT NULL DEFAULT 0,
  `score` int(11) NOT NULL DEFAULT 0,
  `after` int(11) NOT NULL DEFAULT 0,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `account`(`account`) USING BTREE,
  INDEX `model`(`module`) USING BTREE,
  INDEX `method`(`method`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_story
-- ----------------------------
DROP TABLE IF EXISTS `zt_story`;
CREATE TABLE `zt_story`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `parent` mediumint(9) NULL DEFAULT 0,
  `product` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `branch` mediumint(8) UNSIGNED NULL DEFAULT 0,
  `module` mediumint(8) UNSIGNED NULL DEFAULT 0,
  `plan` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `source` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sourceNote` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `fromBug` mediumint(8) UNSIGNED NULL DEFAULT 0,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `keywords` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'story',
  `pri` tinyint(3) UNSIGNED NULL DEFAULT 3,
  `estimate` float UNSIGNED NULL DEFAULT NULL,
  `status` enum('','changed','active','draft','closed') CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `subStatus` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `color` char(7) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `stage` enum('','wait','planned','projected','developing','developed','testing','tested','verified','released','closed') CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'wait',
  `stagedBy` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `mailto` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `openedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `openedDate` datetime(0) NULL DEFAULT NULL,
  `assignedTo` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `assignedDate` datetime(0) NULL DEFAULT NULL,
  `lastEditedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `lastEditedDate` datetime(0) NULL DEFAULT NULL,
  `reviewedBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `reviewedDate` date NULL DEFAULT NULL,
  `closedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `closedDate` datetime(0) NULL DEFAULT NULL,
  `closedReason` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `toBug` mediumint(8) UNSIGNED NULL DEFAULT NULL,
  `childStories` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `linkStories` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `duplicateStory` mediumint(8) UNSIGNED NULL DEFAULT NULL,
  `version` smallint(6) NULL DEFAULT 1,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0',
  `IBIZ_SOURCEOBJECT` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '来源对象',
  `IBIZ_ID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'IBIZ标识',
  `SOURCEOBJECT` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '来源对象',
  `SOURCEID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '来源对象标识',
  `IBIZ_SOURCENAME` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '来源对象名称',
  `IBIZ_SOURCEID` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '来源对象标识',
  `SOURCENAME` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '来源对象名称',
  `STORYPOINTS` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '故事点',
  `STORYLATESTFINISHEDDATE` datetime(0) NULL DEFAULT NULL COMMENT '需求最晚完成时间',
  `STORYPROVIDEDATE` datetime(0) NULL DEFAULT NULL COMMENT '需求提供时间',
  `STORYPROVIDER` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '需求提供人',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `product`(`product`) USING BTREE,
  INDEX `status`(`status`) USING BTREE,
  INDEX `assignedTo`(`assignedTo`) USING BTREE,
  INDEX `fromBug`(`fromBug`) USING BTREE,
  INDEX `parent`(`parent`) USING BTREE,
  INDEX `module`(`module`) USING BTREE,
  INDEX `duplicateStory`(`duplicateStory`) USING BTREE,
  INDEX `branch`(`branch`) USING BTREE,
  INDEX `toBug`(`toBug`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 102 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_storyspec
-- ----------------------------
DROP TABLE IF EXISTS `zt_storyspec`;
CREATE TABLE `zt_storyspec`  (
  `story` mediumint(9) NOT NULL,
  `version` smallint(6) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `spec` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `verify` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  UNIQUE INDEX `story`(`story`, `version`) USING BTREE,
  FULLTEXT INDEX `fulltitle_spec_storyspec`(`spec`)
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_storystage
-- ----------------------------
DROP TABLE IF EXISTS `zt_storystage`;
CREATE TABLE `zt_storystage`  (
  `story` mediumint(8) UNSIGNED NOT NULL,
  `branch` mediumint(8) UNSIGNED NOT NULL,
  `stage` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `stagedBy` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  UNIQUE INDEX `story_branch`(`story`, `branch`) USING BTREE,
  INDEX `story`(`story`) USING BTREE,
  INDEX `branch`(`branch`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_suitecase
-- ----------------------------
DROP TABLE IF EXISTS `zt_suitecase`;
CREATE TABLE `zt_suitecase`  (
  `suite` mediumint(8) UNSIGNED NOT NULL,
  `product` mediumint(8) UNSIGNED NOT NULL,
  `case` mediumint(8) UNSIGNED NOT NULL,
  `version` smallint(5) UNSIGNED NOT NULL,
  UNIQUE INDEX `suitecase`(`suite`, `case`) USING BTREE,
  INDEX `product`(`product`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Table structure for zt_task
-- ----------------------------
DROP TABLE IF EXISTS `zt_task`;
CREATE TABLE `zt_task`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `parent` mediumint(8) NOT NULL DEFAULT 0,
  `project` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `module` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `story` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `storyVersion` smallint(6) NOT NULL DEFAULT 1,
  `fromBug` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pri` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `estimate` float UNSIGNED NULL DEFAULT NULL,
  `consumed` float UNSIGNED NULL DEFAULT NULL,
  `left` float UNSIGNED NULL DEFAULT NULL,
  `deadline` date NULL DEFAULT NULL,
  `status` enum('wait','doing','done','pause','cancel','closed') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'wait',
  `subStatus` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `color` char(7) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `mailto` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `desc` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `openedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `openedDate` datetime(0) NULL DEFAULT NULL,
  `assignedTo` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `assignedDate` datetime(0) NULL DEFAULT NULL,
  `estStarted` date NULL DEFAULT NULL,
  `realStarted` date NULL DEFAULT NULL,
  `finishedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `finishedDate` datetime(0) NULL DEFAULT NULL,
  `finishedList` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `canceledBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `canceledDate` datetime(0) NULL DEFAULT NULL,
  `closedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `closedDate` datetime(0) NULL DEFAULT NULL,
  `closedReason` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `lastEditedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `lastEditedDate` datetime(0) NOT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `TASKSPECIES` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '任务种别',
  `CONFIG_WEEK` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '周期设置周几',
  `CONFIG_BEFOREDAYS` int(11) NULL DEFAULT NULL COMMENT '提前天数',
  `CONFIG_TYPE` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '周期类型',
  `CONFIG_MONTH` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '周期设置月',
  `PLAN` bigint(8) UNSIGNED NULL DEFAULT NULL COMMENT '编号',
  `CONFIG_BEGIN` datetime(0) NULL DEFAULT NULL COMMENT '开始日期',
  `CYCLE` int(11) NULL DEFAULT NULL COMMENT '周期',
  `CONFIG_END` datetime(0) NULL DEFAULT NULL COMMENT '过期日期',
  `CONFIG_DAY` int(11) NULL DEFAULT NULL COMMENT '间隔天数',
  `IDVALUE` bigint(8) NULL DEFAULT NULL COMMENT '关联编号',
  `ASSIGN` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否指派',
  `INPUTCOST` double NULL DEFAULT NULL COMMENT '投入成本',
  `ORDERNUM` int(11) NULL DEFAULT NULL COMMENT '排序',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `DELETE_PAR_STA_PROJECT`(`deleted`, `parent`, `status`, `project`) USING BTREE,
  INDEX `project`(`project`) USING BTREE,
  INDEX `story`(`story`) USING BTREE,
  INDEX `assignedTo`(`assignedTo`) USING BTREE,
  INDEX `F5F24CBB172AF38F63`(`PLAN`) USING BTREE,
  INDEX `module`(`module`) USING BTREE,
  INDEX `parent`(`parent`) USING BTREE,
  INDEX `fromBug`(`fromBug`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 22032 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_taskestimate
-- ----------------------------
DROP TABLE IF EXISTS `zt_taskestimate`;
CREATE TABLE `zt_taskestimate`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `task` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `date` date NOT NULL,
  `left` float UNSIGNED NOT NULL DEFAULT 0,
  `consumed` float UNSIGNED NOT NULL,
  `account` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `work` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `EVALUATIONCOST` double NULL DEFAULT NULL COMMENT '评估成本',
  `INPUTCOST` double NULL DEFAULT NULL COMMENT '投入成本',
  `EVALUATIONTIME` double NULL DEFAULT NULL COMMENT '评估工时',
  `EVALUATIONSTATUS` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '评估状态',
  `EVALUATIONDESC` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '评估说明',
  `MONTHNAME` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '月（显示）',
  `FILES` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '附件',
  `MINDATE` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '工时记录（开始）',
  `MAXDATE` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '工时记录（最晚）',
  `NAME` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '项目名称',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `task`(`task`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 7038 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_team
-- ----------------------------
DROP TABLE IF EXISTS `zt_team`;
CREATE TABLE `zt_team`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `root` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `type` enum('project','task','product') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'project',
  `account` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `role` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `limited` char(8) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'no',
  `join` date NOT NULL DEFAULT '1970-01-01',
  `days` smallint(5) UNSIGNED NOT NULL,
  `hours` float(2, 1) UNSIGNED NOT NULL DEFAULT 0.0,
  `estimate` decimal(12, 2) UNSIGNED NOT NULL DEFAULT 0.00,
  `consumed` decimal(12, 2) UNSIGNED NOT NULL DEFAULT 0.00,
  `left` decimal(12, 2) UNSIGNED NOT NULL DEFAULT 0.00,
  `order` tinyint(3) NOT NULL DEFAULT 0,
  `TEAMSTATUS` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '成员状态',
  `END` datetime(0) NULL DEFAULT NULL COMMENT '结束时间',
  `LEADINGCADRE` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '当前负责人',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `type_root`(`type`, `root`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 636 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_testreport
-- ----------------------------
DROP TABLE IF EXISTS `zt_testreport`;
CREATE TABLE `zt_testreport`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `product` mediumint(8) UNSIGNED NOT NULL,
  `project` mediumint(8) UNSIGNED NOT NULL,
  `tasks` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `builds` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `begin` date NOT NULL,
  `end` date NOT NULL,
  `owner` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `members` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `stories` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `bugs` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cases` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `report` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `objectType` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `objectID` mediumint(8) UNSIGNED NOT NULL,
  `createdBy` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createdDate` datetime(0) NOT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `product`(`product`) USING BTREE,
  INDEX `project`(`project`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_testresult
-- ----------------------------
DROP TABLE IF EXISTS `zt_testresult`;
CREATE TABLE `zt_testresult`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `run` mediumint(8) UNSIGNED NOT NULL,
  `case` mediumint(8) UNSIGNED NOT NULL,
  `version` smallint(5) UNSIGNED NOT NULL,
  `job` mediumint(8) UNSIGNED NOT NULL,
  `compile` mediumint(8) UNSIGNED NOT NULL,
  `caseResult` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `stepResults` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `lastRunner` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` datetime(0) NOT NULL,
  `duration` float NOT NULL,
  `xml` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `case`(`case`) USING BTREE,
  INDEX `version`(`version`) USING BTREE,
  INDEX `run`(`run`) USING BTREE,
  INDEX `job`(`job`) USING BTREE,
  INDEX `compile`(`compile`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_testrun
-- ----------------------------
DROP TABLE IF EXISTS `zt_testrun`;
CREATE TABLE `zt_testrun`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `task` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `case` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `version` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `assignedTo` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `lastRunner` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `lastRunDate` datetime(0) NOT NULL,
  `lastRunResult` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `task`(`task`, `case`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_testsuite
-- ----------------------------
DROP TABLE IF EXISTS `zt_testsuite`;
CREATE TABLE `zt_testsuite`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `product` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `desc` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `addedBy` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `addedDate` datetime(0) NOT NULL,
  `lastEditedBy` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `lastEditedDate` datetime(0) NOT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `product`(`product`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_testtask
-- ----------------------------
DROP TABLE IF EXISTS `zt_testtask`;
CREATE TABLE `zt_testtask`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` char(90) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `product` mediumint(8) UNSIGNED NOT NULL,
  `project` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `build` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `owner` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pri` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `begin` date NOT NULL,
  `end` date NOT NULL,
  `mailto` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `desc` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `report` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` enum('blocked','doing','wait','done') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'wait',
  `auto` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'no',
  `subStatus` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `product`(`product`) USING BTREE,
  INDEX `build`(`build`) USING BTREE,
  INDEX `project`(`project`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_todo
-- ----------------------------
DROP TABLE IF EXISTS `zt_todo`;
CREATE TABLE `zt_todo`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `account` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` date NOT NULL,
  `begin` smallint(4) UNSIGNED ZEROFILL NULL DEFAULT NULL,
  `end` smallint(4) UNSIGNED ZEROFILL NULL DEFAULT NULL,
  `type` char(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `cycle` tinyint(3) UNSIGNED NULL DEFAULT 0,
  `idvalue` mediumint(8) UNSIGNED NULL DEFAULT 0,
  `pri` tinyint(3) UNSIGNED NULL DEFAULT NULL,
  `name` char(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `desc` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `status` enum('wait','doing','done','closed') CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'wait',
  `private` tinyint(1) NULL DEFAULT NULL,
  `config` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `assignedTo` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `assignedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `assignedDate` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `finishedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `finishedDate` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `closedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `closedDate` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `COST` decimal(10, 2) NULL DEFAULT NULL COMMENT '费用',
  `CONSUMED` double NULL DEFAULT NULL COMMENT '工时',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `account`(`account`) USING BTREE,
  INDEX `assignedTo`(`assignedTo`) USING BTREE,
  INDEX `finishedBy`(`finishedBy`) USING BTREE,
  INDEX `date`(`date`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_user
-- ----------------------------
DROP TABLE IF EXISTS `zt_user`;
CREATE TABLE `zt_user`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `dept` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `account` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `password` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `role` char(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `realname` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `nickname` char(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `commiter` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `avatar` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `birthday` date NOT NULL DEFAULT '1970-01-01',
  `gender` enum('f','m') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'f',
  `email` char(90) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `skype` char(90) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `qq` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `mobile` char(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `phone` char(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `weixin` varchar(90) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `dingding` varchar(90) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `slack` varchar(90) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `whatsapp` varchar(90) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `address` char(120) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `zipcode` char(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `join` date NOT NULL DEFAULT '1970-01-01',
  `visits` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  `ip` char(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `last` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `fails` tinyint(5) NOT NULL DEFAULT 0,
  `locked` datetime(0) NOT NULL DEFAULT '1970-01-01 00:00:00',
  `ranzhi` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `score` int(11) NOT NULL DEFAULT 0,
  `scoreLevel` int(11) NOT NULL DEFAULT 0,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  `clientStatus` enum('online','away','busy','offline') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'offline',
  `clientLang` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'zh-cn',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `account`(`account`) USING BTREE,
  INDEX `dept`(`dept`) USING BTREE,
  INDEX `email`(`email`) USING BTREE,
  INDEX `commiter`(`commiter`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_usercontact
-- ----------------------------
DROP TABLE IF EXISTS `zt_usercontact`;
CREATE TABLE `zt_usercontact`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `account` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `listName` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userList` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `account`(`account`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_usergroup
-- ----------------------------
DROP TABLE IF EXISTS `zt_usergroup`;
CREATE TABLE `zt_usergroup`  (
  `account` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `group` mediumint(8) UNSIGNED NOT NULL DEFAULT 0,
  UNIQUE INDEX `account`(`account`, `group`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Table structure for zt_userquery
-- ----------------------------
DROP TABLE IF EXISTS `zt_userquery`;
CREATE TABLE `zt_userquery`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `account` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `module` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(90) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `form` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sql` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `shortcut` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `account`(`account`) USING BTREE,
  INDEX `module`(`module`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_usertpl
-- ----------------------------
DROP TABLE IF EXISTS `zt_usertpl`;
CREATE TABLE `zt_usertpl`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `account` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `public` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `account`(`account`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_userview
-- ----------------------------
DROP TABLE IF EXISTS `zt_userview`;
CREATE TABLE `zt_userview`  (
  `account` char(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `products` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `projects` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  UNIQUE INDEX `account`(`account`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for zt_webhook
-- ----------------------------
DROP TABLE IF EXISTS `zt_webhook`;
CREATE TABLE `zt_webhook`  (
  `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `type` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'default',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `domain` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `secret` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `contentType` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'application/json',
  `sendType` enum('sync','async') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'sync',
  `products` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `projects` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `params` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `actions` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `desc` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createdBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createdDate` datetime(0) NOT NULL,
  `editedBy` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `editedDate` datetime(0) NOT NULL,
  `deleted` enum('0','1') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
