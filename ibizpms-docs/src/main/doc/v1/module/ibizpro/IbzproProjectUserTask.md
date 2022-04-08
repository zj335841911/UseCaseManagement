
# 实体-项目汇报用户任务(IBIZPRO_PROJECTUSERTASK)
## 实体说明
项目汇报用户任务

## 所属模块
[iBizPro模块](../ibizpro)

## 实体关系
### 1:N
无
### N:1
无


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [用户](#属性-用户（ACCOUNT）) | ACCOUNT | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [编号](#属性-编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 3 | [总计消耗](#属性-总计消耗（CONSUMED）) | CONSUMED | 浮点 | 否 | 否 | 是 |
| 4 | [日期](#属性-日期（DATE）) | DATE | 日期型 | 否 | 否 | 是 |
| 5 | [预计剩余](#属性-预计剩余（LEFT）) | LEFT | 浮点 | 否 | 否 | 是 |
| 6 | [work](#属性-work（WORK）) | WORK | 长文本，没有长度限制 | 否 | 否 | 是 |
| 7 | [任务](#属性-任务（TASK）) | TASK | 大整型 | 否 | 否 | 是 |
| 8 | [任务名称](#属性-任务名称（TASKNAME）) | TASKNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [任务类型](#属性-任务类型（TASKTYPE）) | TASKTYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 10 | [进度](#属性-进度（PROGRESSRATE）) | PROGRESSRATE | 文本，可指定长度 | 否 | 否 | 是 |
| 11 | [延期天数](#属性-延期天数（DELAYDAYS）) | DELAYDAYS | 文本，可指定长度 | 否 | 否 | 是 |
| 12 | [预计开始](#属性-预计开始（ESTSTARTED）) | ESTSTARTED | 日期型 | 否 | 否 | 是 |
| 13 | [截止日期](#属性-截止日期（DEADLINE）) | DEADLINE | 日期型 | 否 | 否 | 是 |

### 属性-用户（ACCOUNT）
#### 属性说明
用户

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
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 |  |

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
否

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

### 属性-总计消耗（CONSUMED）
#### 属性说明
总计消耗

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
浮点

- Java类型
Double

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 0 |

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

### 属性-日期（DATE）
#### 属性说明
完成日期（指任务人的，不是任务的）

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

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

### 属性-预计剩余（LEFT）
#### 属性说明
预计剩余

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
浮点

- Java类型
Double

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 0 |

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

### 属性-work（WORK）
#### 属性说明
暂时还不知道做什么用的，没有任何处理的代码

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
长文本，没有长度限制

- Java类型
String

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 |  |

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

### 属性-任务（TASK）
#### 属性说明
任务

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
大整型

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

### 属性-任务类型（TASKTYPE）
#### 属性说明
任务类型

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
参照数据字典【[任务类型（Task__type）](../../codelist/Task__type)】

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

### 属性-进度（PROGRESSRATE）
#### 属性说明
进度

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

### 属性-延期天数（DELAYDAYS）
#### 属性说明
延期天数

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

### 属性-预计开始（ESTSTARTED）
#### 属性说明
预计开始

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

### 属性-截止日期（DEADLINE）
#### 属性说明
截止日期

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
| 1 | [编号（ID）](#属性-编号（ID）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [编号（ID）](#属性-编号（ID）) | `%like%` |
| 2 | [任务类型（TASKTYPE）](#属性-任务类型（TASKTYPE）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 2 | [项目日报任务](#数据查询-项目日报任务（ProjectDailyTask）) | ProjectDailyTask | 否 |
| 3 | [项目月报任务](#数据查询-项目月报任务（ProjectMonthlyTask）) | ProjectMonthlyTask | 否 |
| 4 | [项目周报任务](#数据查询-项目周报任务（ProjectWeeklyTask）) | ProjectWeeklyTask | 否 |
| 5 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
t1.`ACCOUNT`,
t1.`CONSUMED`,
t1.`DATE`,
t1.`ID`,
t1.`LEFT`,
t1.`TASK`
FROM `zt_taskestimate` t1 

```
### 数据查询-项目日报任务（ProjectDailyTask）
#### 说明
项目日报任务

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.*,t11.`name` as taskname,t11.deadline,t11.ESTSTARTED,t11.type as TASKTYPE,(CONCAT_WS('',case when t11.consumed = 0 or t11.consumed is null then '0' when t11.`left` = 0 or t11.`left` is null then '100' else ROUND((ROUND(t11.`consumed`/(t11.`left` + t11.consumed),2)) * 100) end ,'%')) as PROGRESSRATE,((case when t11.deadline is null or t11.deadline = '1970-00-00' or t11.deadline = '1970-01-01' then '' when t11.`status` in ('wait','doing') and t11.deadline <DATE_FORMAT(now(),'%Y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t11.deadline, now()),'天') else '' end))as DELAYDAYS from (select t1.DATE,t1.TASK,t1.ACCOUNT,ROUND(sum(t1.CONSUMED),2) as CONSUMED,task as id from (
SELECT
t1.`ACCOUNT`,
t1.`CONSUMED`,
t1.`DATE`,
t1.`ID`,
t1.`LEFT`,
t1.`TASK`
FROM `zt_taskestimate` t1 where t1.date >= DATE_FORMAT(${srfdatacontext('begin')},'%y-%m-%d') and t1.date <= DATE_FORMAT(${srfdatacontext('end')},'%y-%m-%d')) t1 GROUP BY t1.DATE,t1.TASK,t1.ACCOUNT) t1 left join zt_task t11 on t1.task = t11.id
```
### 数据查询-项目月报任务（ProjectMonthlyTask）
#### 说明
项目月报任务

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.*,t11.`name` as taskname,t11.deadline,t11.ESTSTARTED,t11.type as TASKTYPE,(CONCAT_WS('',case when t11.consumed = 0 or t11.consumed is null then '0' when t11.`left` = 0 or t11.`left` is null then '100' else ROUND((ROUND(t11.`consumed`/(t11.`left` + t11.consumed),2)) * 100) end ,'%')) as PROGRESSRATE,((case when t11.deadline is null or t11.deadline = '1970-00-00' or t11.deadline = '1970-01-01' then '' when t11.`status` in ('wait','doing') and t11.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t11.deadline, now()),'天') else '' end))as DELAYDAYS from (select t1.DATE,t1.TASK,t1.ACCOUNT,ROUND(sum(t1.CONSUMED),2) as CONSUMED,task as id from (
SELECT
t1.`ACCOUNT`,
t1.`CONSUMED`,
t1.`DATE`,
t1.`ID`,
t1.`LEFT`,
t1.`TASK`
FROM `zt_taskestimate` t1 where ${srfdatacontext('yearmonth')} =DATE_FORMAT(t1.date,'%Y-%m')) t1 GROUP BY t1.DATE,t1.TASK,t1.ACCOUNT) t1 left join zt_task t11 on t1.task = t11.id
```
### 数据查询-项目周报任务（ProjectWeeklyTask）
#### 说明
项目周报任务

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.*,t11.`name` as taskname,t11.deadline,t11.ESTSTARTED,t11.type as TASKTYPE,(CONCAT_WS('',case when t11.consumed = 0 or t11.consumed is null then '0' when t11.`left` = 0 or t11.`left` is null then '100' else ROUND((ROUND(t11.`consumed`/(t11.`left` + t11.consumed),2)) * 100) end ,'%')) as PROGRESSRATE,((case when t11.deadline is null or t11.deadline = '1970-00-00' or t11.deadline = '1970-01-01' then '' when t11.`status` in ('wait','doing') and t11.deadline <DATE_FORMAT(now(),'%Y-%m-%d') then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t11.deadline, now()),'天') else '' end))as DELAYDAYS from (select t1.DATE,t1.TASK,t1.ACCOUNT,ROUND(sum(t1.CONSUMED),2) as CONSUMED,task as id from ( SELECT t1.`ACCOUNT`, t1.`CONSUMED`, t1.`DATE`, t1.`ID`, t1.`LEFT`, t1.`TASK` FROM `zt_taskestimate` t1 where (DATE_FORMAT(t1.date,'%Y-%m-%d') between DATE_FORMAT(${srfdatacontext('begindatestats')},'%Y-%m-%d') and DATE_FORMAT(${srfdatacontext('enddatestats')},'%Y-%m-%d'))) t1 GROUP BY 
 t1.TASK,t1.ACCOUNT) t1 left join zt_task t11 on t1.task = t11.id
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
t1.`ACCOUNT`,
t1.`CONSUMED`,
t1.`DATE`,
t1.`ID`,
t1.`LEFT`,
t1.`TASK`,
t1.`WORK`
FROM `zt_taskestimate` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据集](#数据集合-数据集（Default）) | Default | 是 |
| 2 | [项目日报任务](#数据集合-项目日报任务（ProjectDailyTask）) | ProjectDailyTask | 否 |
| 3 | [项目日报任务](#数据集合-项目日报任务（ProjectMonthlyTask）) | ProjectMonthlyTask | 否 |
| 4 | [项目周报任务](#数据集合-项目周报任务（ProjectWeeklyTask）) | ProjectWeeklyTask | 否 |

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
### 数据集合-项目日报任务（ProjectDailyTask）
#### 说明
项目日报任务

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目日报任务（ProjectDailyTask）](#数据查询-项目日报任务（ProjectDailyTask）) |
### 数据集合-项目日报任务（ProjectMonthlyTask）
#### 说明
项目日报任务

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目月报任务（ProjectMonthlyTask）](#数据查询-项目月报任务（ProjectMonthlyTask）) |
### 数据集合-项目周报任务（ProjectWeeklyTask）
#### 说明
项目周报任务

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目周报任务（ProjectWeeklyTask）](#数据查询-项目周报任务（ProjectWeeklyTask）) |

## 数据导入
无

## 数据导出
无

