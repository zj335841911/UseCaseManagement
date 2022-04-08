
# 实体-任务统计(IBZ_TASKSTATS)
## 实体说明
任务统计

## 所属模块
[iBiz增强模块](../ibiz)

## 实体关系
### 1:N
无
### N:1
无


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [项目名称](#属性-项目名称（PROJECTNAME）) | PROJECTNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [预计总工时](#属性-预计总工时（TOTALESTIMATE）) | TOTALESTIMATE | 整型 | 否 | 否 | 是 |
| 3 | [消耗总工时](#属性-消耗总工时（TOTALCONSUMED）) | TOTALCONSUMED | 整型 | 否 | 否 | 是 |
| 4 | [剩余总工时](#属性-剩余总工时（TOTALLEFT）) | TOTALLEFT | 整型 | 否 | 否 | 是 |
| 5 | [项目](#属性-项目（PROJECT）) | PROJECT | 文本，可指定长度 | 否 | 否 | 是 |
| 6 | [编号](#属性-编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 是 |
| 7 | [名称](#属性-名称（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 是 |
| 8 | [完成者](#属性-完成者（FINISHEDBY）) | FINISHEDBY | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [效率](#属性-效率（TASKEFFICIENT）) | TASKEFFICIENT | 文本，可指定长度 | 否 | 否 | 是 |
| 10 | [任务编号](#属性-任务编号（TASKID）) | TASKID | 整型 | 否 | 否 | 是 |
| 11 | [任务名称](#属性-任务名称（TASKNAME）) | TASKNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 12 | [任务优先级](#属性-任务优先级（TASKPRI）) | TASKPRI | 整型 | 否 | 否 | 是 |
| 13 | [任务预计消耗](#属性-任务预计消耗（TASKESTIMATE）) | TASKESTIMATE | 整型 | 否 | 否 | 是 |
| 14 | [任务实际开始时间](#属性-任务实际开始时间（TASKREALSTART）) | TASKREALSTART | 日期型 | 否 | 否 | 是 |
| 15 | [任务截至日期](#属性-任务截至日期（TASKDEADLINE）) | TASKDEADLINE | 日期型 | 否 | 否 | 是 |
| 16 | [任务实际完成日期](#属性-任务实际完成日期（TASKFINISHEDDATE）) | TASKFINISHEDDATE | 日期型 | 否 | 否 | 是 |
| 17 | [任务延期](#属性-任务延期（TASKDELAY）) | TASKDELAY | 文本，可指定长度 | 否 | 否 | 是 |
| 18 | [任务预计开始日期](#属性-任务预计开始日期（TASKESTSTARTED）) | TASKESTSTARTED | 日期型 | 否 | 否 | 是 |
| 19 | [总任务数](#属性-总任务数（TASKCNT）) | TASKCNT | 整型 | 否 | 否 | 是 |
| 20 | [项目总消耗](#属性-项目总消耗（PROJECTCONSUMED）) | PROJECTCONSUMED | 整型 | 否 | 否 | 是 |
| 21 | [用户总消耗](#属性-用户总消耗（USERCONSUMED）) | USERCONSUMED | 整型 | 否 | 否 | 是 |
| 22 | [部门](#属性-部门（DEPT）) | DEPT | 单项选择(文本值) | 否 | 否 | 是 |
| 23 | [结束](#属性-结束（END）) | END | 日期型 | 否 | 否 | 是 |
| 24 | [属性](#属性-属性（BEGIN）) | BEGIN | 日期型 | 否 | 否 | 是 |

### 属性-项目名称（PROJECTNAME）
#### 属性说明
项目名称

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-预计总工时（TOTALESTIMATE）
#### 属性说明
预计总工时

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
0
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-消耗总工时（TOTALCONSUMED）
#### 属性说明
消耗总工时

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
0
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-剩余总工时（TOTALLEFT）
#### 属性说明
剩余总工时

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
0
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-项目（PROJECT）
#### 属性说明
项目

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
无

### 属性-编号（ID）
#### 属性说明
编号

- 是否是主键
是

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
自增标识，整数类型，用户不可见

- Java类型
Long

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-名称（NAME）
#### 属性说明
名称

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
是

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `%like%` |

#### 关系属性
无

### 属性-完成者（FINISHEDBY）
#### 属性说明
完成者

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
无

### 属性-效率（TASKEFFICIENT）
#### 属性说明
效率

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
0
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-任务编号（TASKID）
#### 属性说明
任务编号

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-任务名称（TASKNAME）
#### 属性说明
任务名称

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-任务优先级（TASKPRI）
#### 属性说明
任务优先级

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[任务优先级（Task__pri）](../../codelist/Task__pri)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-任务预计消耗（TASKESTIMATE）
#### 属性说明
任务预计消耗

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-任务实际开始时间（TASKREALSTART）
#### 属性说明
任务实际开始时间

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
日期型

- Java类型
Timestamp

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
yyyy-MM-dd

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-任务截至日期（TASKDEADLINE）
#### 属性说明
任务截至日期

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
日期型

- Java类型
Timestamp

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
yyyy-MM-dd

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-任务实际完成日期（TASKFINISHEDDATE）
#### 属性说明
任务实际完成日期

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
日期型

- Java类型
Timestamp

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
yyyy-MM-dd

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-任务延期（TASKDELAY）
#### 属性说明
任务延期

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-任务预计开始日期（TASKESTSTARTED）
#### 属性说明
任务预计开始日期

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
日期型

- Java类型
Timestamp

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
yyyy-MM-dd

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-总任务数（TASKCNT）
#### 属性说明
总任务数

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-项目总消耗（PROJECTCONSUMED）
#### 属性说明
项目总消耗

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-用户总消耗（USERCONSUMED）
#### 属性说明
用户总消耗

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-部门（DEPT）
#### 属性说明
部门

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
单项选择(文本值)

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[真实部门（RealDept）](../../codelist/RealDept)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
无

### 属性-结束（END）
#### 属性说明
结束

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
日期型

- Java类型
Timestamp

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
yyyy-MM-dd

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `<=` |

#### 关系属性
无

### 属性-属性（BEGIN）
#### 属性说明
属性

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
日期型

- Java类型
Timestamp

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
yyyy-MM-dd

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `>=` |

#### 关系属性
无


## 业务状态
无

## 实体行为
| 序号 | 行为 | 行为名 | 行为类型 | 行为持有者 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [Create](#实体行为-Create（Create）) | Create | 内置方法 | 后台及前台 |
| 2 | [Update](#实体行为-Update（Update）) | Update | 内置方法 | 后台及前台 |
| 3 | [Remove](#实体行为-Remove（Remove）) | Remove | 内置方法 | 后台及前台 |
| 4 | [Get](#实体行为-Get（Get）) | Get | 内置方法 | 后台及前台 |
| 5 | [GetDraft](#实体行为-GetDraft（GetDraft）) | GetDraft | 内置方法 | 后台及前台 |
| 6 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 7 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |

### 实体行为-Create（Create）
#### 说明
Create

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-Update（Update）
#### 说明
Update

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-Remove（Remove）
#### 说明
Remove

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-Get（Get）
#### 说明
Get

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-GetDraft（GetDraft）
#### 说明
GetDraft

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-CheckKey（CheckKey）
#### 说明
CheckKey

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-Save（Save）
#### 说明
Save

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
无

## 逻辑处理
无

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [名称（NAME）](#属性-名称（NAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [项目（PROJECT）](#属性-项目（PROJECT）) | `=` |
| 2 | [名称（NAME）](#属性-名称（NAME）) | `%like%` |
| 3 | [完成者（FINISHEDBY）](#属性-完成者（FINISHEDBY）) | `=` |
| 4 | [部门（DEPT）](#属性-部门（DEPT）) | `=` |
| 5 | [结束（END）](#属性-结束（END）) | `<=` |
| 6 | [属性（BEGIN）](#属性-属性（BEGIN）) | `>=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 2 | [任务完成汇总表](#数据查询-任务完成汇总表（TaskFinishHuiZong）) | TaskFinishHuiZong | 否 |
| 3 | [用户完成任务统计](#数据查询-用户完成任务统计（UserFinishTaskSum）) | UserFinishTaskSum | 否 |
| 4 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-数据查询（Default）
#### 说明
数据查询

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ID`,
t1.`NAME`,
0 AS `TASKEFFICIENT`,
0 AS `TOTALCONSUMED`,
0 AS `TOTALESTIMATE`,
0 AS `TOTALLEFT`
FROM `zt_task` t1 

```
### 数据查询-任务完成汇总表（TaskFinishHuiZong）
#### 说明
任务完成汇总表

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t4.account as finishedby,t1.project,t1.projectname,t1.id as taskid,t1.taskname,t1.pri as taskpri,t1.estStarted as taskeststarted,t1.realStarted as taskrealstart,t1.deadline as taskdeadline,t1.finishedDate as taskfinisheddate,null as delay,t1.estimate as taskestimate,t1.consumed as totalconsumed, t2.taskcnt,t2.projectconsumed,t3.userconsumed 
,t4.dept,DATE_FORMAT(t1.finishedDate,'%Y-%m-%d') as `begin`,DATE_FORMAT(t1.finishedDate,'%Y-%m-%d') as `end`
from (
select t1.finishedBy,t1.project,t2.`name` as projectname,t1.id,t1.`name` as taskname ,t1.pri,t1.estStarted,t1.realStarted,t1.deadline,t1.finishedDate,null as delay,t1.estimate,t1.consumed
from zt_task t1 LEFT JOIN zt_project t2 on t1.project = t2.id where (t1.`status` = 'done' or (t1.`status` = 'closed' and closedReason = 'done')) and t2.deleted ='0' and t1.deleted = '0'  and t2.id <> 0 and t1.finishedBy <> '' and t1.finishedBy is not null and t1.parent >= 0 and not EXISTS (select 1 from zt_team t where t.root = t1.id and t.type = 'task')

UNION
select t3.account as finishedBy,t1.project,t2.`name` as projectname,t1.id,t1.`name` as taskname ,t1.pri,t1.estStarted,t1.realStarted,t1.deadline,t1.finishedDate,null as delay,t1.estimate,t3.consumed
from zt_task t1 LEFT JOIN zt_project t2 on t1.project = t2.id inner JOIN zt_team t3 on t3.root = t1.id and t3.type = 'task'
where t2.deleted ='0' and t1.deleted = '0' and FIND_IN_SET(t3.account,t1.finishedList) and t2.id <> 0 and t1.parent >= 0 and t3.`left` = 0 

) t1 LEFT JOIN (

SELECT t1.finishedBy,t1.project,t1.projectname,t1.id,t1.taskname,COUNT(1) as taskcnt,SUM(t1.consumed) as projectconsumed from (
select t1.finishedBy,t1.project,t2.`name` as projectname,t1.id,t1.`name` as taskname ,t1.consumed
from zt_task t1 LEFT JOIN zt_project t2 on t1.project = t2.id where (t1.`status` = 'done' or (t1.`status` = 'closed' and closedReason = 'done')) and t2.deleted ='0' and t1.deleted = '0'  and t2.id <> 0 and t1.finishedBy <> '' and t1.finishedBy is not null and t1.parent >= 0 and not EXISTS (select 1 from zt_team t where t.root = t1.id and t.type = 'task')

UNION
select t3.account as finishedBy,t1.project,t2.`name` as projectname,t1.id,t1.`name` as taskname ,t3.consumed
from zt_task t1 LEFT JOIN zt_project t2 on t1.project = t2.id inner JOIN zt_team t3 on t3.root = t1.id and t3.type = 'task'
where t2.deleted ='0' and t1.deleted = '0' and FIND_IN_SET(t3.account,t1.finishedList) and t2.id <> 0 and t1.parent >= 0 and t3.`left` = 0 
) t1 GROUP BY t1.finishedBy,t1.project  

) t2 on t1.finishedBy = t2.finishedBy  and t1.project = t2.project   
LEFT JOIN ( 

SELECT t1.finishedBy,SUM(t1.consumed) as userconsumed from (
select t1.finishedBy,t1.project,t2.`name` as projectname,t1.id,t1.`name` as taskname ,t1.consumed
from zt_task t1 LEFT JOIN zt_project t2 on t1.project = t2.id where (t1.`status` = 'done' or (t1.`status` = 'closed' and closedReason = 'done')) and t2.deleted ='0' and t1.deleted = '0'  and t2.id <> 0 and t1.finishedBy <> '' and t1.finishedBy is not null and t1.parent >= 0 and not EXISTS (select 1 from zt_team t where t.root = t1.id and t.type = 'task')

UNION
select t3.account as finishedBy,t1.project,t2.`name` as projectname,t1.id,t1.`name` as taskname ,t3.consumed
from zt_task t1 LEFT JOIN zt_project t2 on t1.project = t2.id inner JOIN zt_team t3 on t3.root = t1.id and t3.type = 'task'
where t2.deleted ='0' and t1.deleted = '0' and FIND_IN_SET(t3.account,t1.finishedList) and t2.id <> 0 and t1.parent >= 0 and t3.`left` = 0 

) t1 GROUP BY t1.finishedBy

) t3 on t1.finishedBy = t3.finishedBy

left JOIN zt_user t4 on t1.finishedBy = t4.account
where (t4.dept = #{srf.datacontext.dept} or #{srf.datacontext.dept} is null) 
and (DATE_FORMAT(t1.finishedDate,'%Y-%m-%d') >= #{srf.datacontext.begin} or #{srf.datacontext.begin} is null)
and (DATE_FORMAT(t1.finishedDate,'%Y-%m-%d') >= #{srf.datacontext.end} or #{srf.datacontext.end} is null)
ORDER BY t4.account,t1.project

```
### 数据查询-用户完成任务统计（UserFinishTaskSum）
#### 说明
用户完成任务统计

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.project,
	t2.`name` as PROJECTNAME,
	t1.finishedBy,
	sum( t1.estimate ) AS TOTALESTIMATE,
	sum( t1.consumed ) AS TOTALCONSUMED,
	CASE WHEN sum( t1.consumed ) <= sum( t1.estimate ) THEN
		'100.00%' ELSE CONCAT ( FORMAT(( sum( t1.estimate ) / sum( t1.consumed )) * 100, 2 ), '%' ) 
	END AS TASKEFFICIENT
FROM
	((
		SELECT
			t1.project,
			t1.finishedBy,
			t1.estimate,
			CASE WHEN t2.consumed IS NULL THEN
				t1.consumed ELSE t2.consumed 
			END AS consumed 
		FROM
			zt_task t1
			LEFT JOIN zt_taskestimate t2 ON t1.id = t2.task 
		WHERE
			t1.deleted = '0' 
			AND t1.parent <> - 1 
			AND t1.`status` IN ( 'done', 'closed' ) 
			AND t1.finishedBy <> '' 
			AND t1.id NOT IN ( SELECT t1.id FROM zt_team t1 WHERE t1.type = 'task' ) 
			) UNION
		(
		SELECT
			t1.project,
			t2.account AS finishedBy,
			t2.estimate,
			CASE WHEN t3.consumed IS NULL THEN
				t2.consumed ELSE t3.consumed 
			END AS consumed 
		FROM
			zt_task t1
			JOIN zt_team t2 ON t2.type = 'task' 
			AND t1.id = t2.root
			LEFT JOIN zt_taskestimate t3 ON t1.id = t3.task 
			AND t2.account = t3.account 
		WHERE
			t1.deleted = '0' 
			AND t1.parent <> - 1 
		AND t1.`status` IN ( 'done', 'closed' )) 
	) t1
	JOIN zt_project t2 ON t1.project = t2.id 
WHERE
	t2.deleted = '0' 
GROUP BY
	t1.project,
	t1.finishedBy
```
### 数据查询-默认（全部数据）（View）
#### 说明
默认（全部数据）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ID`,
t1.`NAME`,
0 AS `TASKEFFICIENT`,
0 AS `TOTALCONSUMED`,
0 AS `TOTALESTIMATE`,
0 AS `TOTALLEFT`
FROM `zt_task` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据集](#数据集合-数据集（Default）) | Default | 是 |
| 2 | [任务完成汇总表](#数据集合-任务完成汇总表（TaskFinishHuiZong）) | TaskFinishHuiZong | 否 |
| 3 | [用户完成任务统计](#数据集合-用户完成任务统计（UserFinishTaskSum）) | UserFinishTaskSum | 否 |

### 数据集合-数据集（Default）
#### 说明
数据集

- 默认集合
是

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [数据查询（Default）](#数据查询-数据查询（Default）) |
### 数据集合-任务完成汇总表（TaskFinishHuiZong）
#### 说明
任务完成汇总表

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [任务完成汇总表（TaskFinishHuiZong）](#数据查询-任务完成汇总表（TaskFinishHuiZong）) |
### 数据集合-用户完成任务统计（UserFinishTaskSum）
#### 说明
用户完成任务统计

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [用户完成任务统计（UserFinishTaskSum）](#数据查询-用户完成任务统计（UserFinishTaskSum）) |

## 数据导入
无

## 数据导出
| 序号 | 数据导出 | 数据导出名 | 最大导出数量 |
| ---- | ---- | ---- | ---- |
| 1 | [数据导出-任务完成汇总表](#数据导出-数据导出-任务完成汇总表（TaskFinishGird）) | TaskFinishGird | 1,000 |

### 数据导出-数据导出-任务完成汇总表（TaskFinishGird）
#### 说明
数据导出-任务完成汇总表

- 最大导出数
1,000

- 行为持有者
后台及前台

| 序号 | 导出标题 | 属性 | 默认值 |
| ---- | ---- | ---- | ---- |
| 1 | 完成者 | [完成者（FINISHEDBY）](#属性-完成者（FINISHEDBY）) |  |
| 2 | 所属项目 | [项目名称（PROJECTNAME）](#属性-项目名称（PROJECTNAME）) |  |
| 3 | 编号 | [任务编号（TASKID）](#属性-任务编号（TASKID）) |  |
| 4 | 任务名称 | [任务名称（TASKNAME）](#属性-任务名称（TASKNAME）) |  |
| 5 | 优先级 | [任务优先级（TASKPRI）](#属性-任务优先级（TASKPRI）) |  |
| 6 | 预计开始 | [任务预计开始日期（TASKESTSTARTED）](#属性-任务预计开始日期（TASKESTSTARTED）) |  |
| 7 | 实际开始 | [任务实际开始时间（TASKREALSTART）](#属性-任务实际开始时间（TASKREALSTART）) |  |
| 8 | 截至日期 | [任务截至日期（TASKDEADLINE）](#属性-任务截至日期（TASKDEADLINE）) |  |
| 9 | 实际完成 | [任务实际完成日期（TASKFINISHEDDATE）](#属性-任务实际完成日期（TASKFINISHEDDATE）) |  |
| 10 | 延期 | [任务延期（TASKDELAY）](#属性-任务延期（TASKDELAY）) |  |
| 11 | 最初预计 | [任务预计消耗（TASKESTIMATE）](#属性-任务预计消耗（TASKESTIMATE）) |  |
| 12 | 任务总消耗 | [消耗总工时（TOTALCONSUMED）](#属性-消耗总工时（TOTALCONSUMED）) |  |
| 13 | 总任务数 | [总任务数（TASKCNT）](#属性-总任务数（TASKCNT）) |  |
| 14 | 项目总消耗 | [项目总消耗（PROJECTCONSUMED）](#属性-项目总消耗（PROJECTCONSUMED）) |  |
| 15 | 用户总消耗 | [用户总消耗（USERCONSUMED）](#属性-用户总消耗（USERCONSUMED）) |  |

