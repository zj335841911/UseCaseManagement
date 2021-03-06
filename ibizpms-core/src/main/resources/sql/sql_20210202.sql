ALTER TABLE `zt_product`
ADD COLUMN `SUPPROREPORT`  VARCHAR(200)  COMMENT '支持产品汇报' ;
ALTER TABLE `zt_product`
ADD COLUMN `PRODUCTCLASS`  VARCHAR(10)  COMMENT '产品分类' ;
ALTER TABLE `zt_project`
ADD COLUMN `SUPPROREPORT`  VARCHAR(60)  COMMENT '支持项目汇报' ;
ALTER TABLE `zt_project`
ADD COLUMN `PMSEEPROJECTINFO`  MEDIUMTEXT  COMMENT '项目立项信息' ;
ALTER TABLE `zt_team`
ADD COLUMN `TEAMSTATUS`  VARCHAR(100)  COMMENT '成员状态' ;
ALTER TABLE `zt_team`
ADD COLUMN `END`  DATETIME  COMMENT '结束时间' ;
ALTER TABLE `zt_team`
ADD COLUMN `LEADINGCADRE`  VARCHAR(60)  COMMENT '当前负责人' ;
ALTER TABLE `zt_story`
ADD COLUMN `STORYLATESTFINISHEDDATE`  DATETIME  COMMENT '需求最晚完成时间' ;
ALTER TABLE `zt_story`
ADD COLUMN `STORYPROVIDEDATE`  DATETIME  COMMENT '需求提供时间' ;
ALTER TABLE `zt_story`
ADD COLUMN `STORYPROVIDER`  VARCHAR(100)  COMMENT '需求提供人' ;
ALTER TABLE `zt_task`
ADD COLUMN `TASKSPECIES`  VARCHAR(60)  COMMENT '任务种别' ;
ALTER TABLE `zt_task`
ADD COLUMN `CONFIG_BEFOREDAYS`  INTEGER  COMMENT '提前天数' ;
ALTER TABLE `zt_task`
ADD COLUMN `CONFIG_TYPE`  VARCHAR(60)  COMMENT '周期类型' ;
ALTER TABLE `zt_task`
ADD COLUMN `CONFIG_MONTH`  VARCHAR(2000)  COMMENT '周期设置月' ;
ALTER TABLE `zt_task`
ADD COLUMN `PLAN`  BIGINT(8)  UNSIGNED  COMMENT '编号' ;
ALTER TABLE `zt_task`
ADD COLUMN `CONFIG_BEGIN`  DATETIME  COMMENT '开始日期' ;
ALTER TABLE `zt_task`
ADD COLUMN `CYCLE`  INTEGER  COMMENT '周期' ;
ALTER TABLE `zt_task`
ADD COLUMN `CONFIG_END`  DATETIME  COMMENT '过期日期' ;
ALTER TABLE zt_task ADD CONSTRAINT F5F24CBB172AF38F63 FOREIGN KEY(PLAN) REFERENCES zt_productplan(ID);
ALTER TABLE `zt_task`
ADD COLUMN `CONFIG_DAY`  INTEGER  COMMENT '间隔天数' ;
ALTER TABLE `zt_task`
ADD COLUMN `IDVALUE`  BIGINT(8)  COMMENT '关联编号' ;
ALTER TABLE `zt_task`
ADD COLUMN `ASSIGN`  VARCHAR(100)  COMMENT '是否指派' ;
ALTER TABLE `zt_task`
ADD COLUMN `INPUTCOST`  DOUBLE  COMMENT '投入成本' ;
ALTER TABLE `zt_taskestimate`
ADD COLUMN `EVALUATIONCOST`  DOUBLE  COMMENT '评估成本' ;
ALTER TABLE `zt_taskestimate`
ADD COLUMN `INPUTCOST`  DOUBLE  COMMENT '投入成本' ;
ALTER TABLE `zt_taskestimate`
ADD COLUMN `EVALUATIONTIME`  DOUBLE  COMMENT '评估工时' ;
ALTER TABLE `zt_taskestimate`
ADD COLUMN `EVALUATIONSTATUS`  VARCHAR(100)  COMMENT '评估状态' ;
ALTER TABLE `zt_taskestimate`
ADD COLUMN `EVALUATIONDESC`  MEDIUMTEXT  COMMENT '评估说明' ;
ALTER TABLE `zt_taskestimate`
ADD COLUMN `MONTHNAME`  VARCHAR(100)  COMMENT '月（显示）' ;
ALTER TABLE `zt_taskestimate`
ADD COLUMN `FILES`  VARCHAR(2000)  COMMENT '附件' ;