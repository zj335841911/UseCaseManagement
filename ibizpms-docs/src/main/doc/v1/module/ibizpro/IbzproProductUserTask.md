
# 实体-产品汇报用户任务(IBIZPRO_PRODUCTUSERTASK)
## 实体说明
产品汇报用户任务

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
| 1 | [编号](#属性-编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 2 | [用户](#属性-用户（ACCOUNT）) | ACCOUNT | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [日期](#属性-日期（DATE）) | DATE | 日期型 | 否 | 否 | 是 |
| 4 | [总计消耗](#属性-总计消耗（CONSUMED）) | CONSUMED | 浮点 | 否 | 否 | 是 |
| 5 | [预计剩余](#属性-预计剩余（LEFT）) | LEFT | 浮点 | 否 | 否 | 是 |
| 6 | [任务](#属性-任务（TASK）) | TASK | 大整型 | 否 | 否 | 是 |
| 7 | [任务名称](#属性-任务名称（TASKNAME）) | TASKNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 8 | [任务类型](#属性-任务类型（TASKTYPE）) | TASKTYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 9 | [进度](#属性-进度（PROGRESSRATE）) | PROGRESSRATE | 文本，可指定长度 | 否 | 否 | 是 |
| 10 | [延期天数](#属性-延期天数（DELAYDAYS）) | DELAYDAYS | 文本，可指定长度 | 否 | 否 | 是 |
| 11 | [预计开始](#属性-预计开始（ESTSTARTED）) | ESTSTARTED | 日期型 | 否 | 否 | 是 |
| 12 | [截止日期](#属性-截止日期（DEADLINE）) | DEADLINE | 日期型 | 否 | 否 | 是 |

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
无

#### 关系属性
无

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
| 1 | [任务类型（TASKTYPE）](#属性-任务类型（TASKTYPE）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 2 | [产品日报用户任务统计](#数据查询-产品日报用户任务统计（ProductDailyUserTaskStats）) | ProductDailyUserTaskStats | 否 |
| 3 | [产品月报用户任务统计](#数据查询-产品月报用户任务统计（ProductMonthlyUserTaskStats）) | ProductMonthlyUserTaskStats | 否 |
| 4 | [产品周报用户任务统计](#数据查询-产品周报用户任务统计（ProductWeeklyUserTaskStats）) | ProductWeeklyUserTaskStats | 否 |
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
### 数据查询-产品日报用户任务统计（ProductDailyUserTaskStats）
#### 说明
产品日报用户任务统计

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select 
t1.*,
t2.`name` AS taskname,
t2.deadline,
t2.ESTSTARTED,
t2.type AS TASKTYPE,
(CONCAT_WS('', CASE WHEN t2.consumed = 0 OR t2.consumed IS NULL THEN '0' WHEN t2.`left` = 0 OR t2.`left` IS NULL THEN '100' ELSE ROUND((ROUND(t2.`consumed`/( t2.`left` + t2.consumed ), 2 )) * 100 ) END, '%')) AS PROGRESSRATE, 
((CASE WHEN t2.deadline IS NULL OR t2.deadline = '1970-00-00' OR t2.deadline = '1970-01-01' THEN '' WHEN t2.`status` IN ( 'wait', 'doing' ) AND t2.deadline < DATE_FORMAT(now(), '%Y-%m-%d') THEN CONCAT_WS('', '延期', TIMESTAMPDIFF(DAY, t2.deadline, now()), '天') ELSE '' END)) AS DELAYDAYS 
from
(SELECT
t1.DATE,
t1.TASK,
t1.ACCOUNT,
ROUND(sum(t1.CONSUMED), 2) AS CONSUMED,
task AS id 
FROM
`zt_taskestimate` t1 
WHERE
t1.date >= DATE_FORMAT(${srfdatacontext('begin')}, '%Y-%m-%d')
AND t1.date <= DATE_FORMAT(${srfdatacontext('end')}, '%Y-%m-%d')
GROUP BY t1.DATE, t1.TASK, t1.ACCOUNT) t1
left join zt_task t2 
on t1.task = t2.id 
where 
FIND_IN_SET(t1.task, ${srfdatacontext('tasks')})
```
### 数据查询-产品月报用户任务统计（ProductMonthlyUserTaskStats）
#### 说明
产品月报用户任务统计

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.*,
t2.`name` AS taskname,
t2.deadline,
t2.ESTSTARTED,
t2.type AS TASKTYPE,
(CONCAT_WS('', CASE WHEN t2.consumed = 0 OR t2.consumed IS NULL THEN '0' WHEN t2.`left` = 0 OR t2.`left` IS NULL THEN '100' ELSE ROUND(( ROUND( t2.`consumed` /( t2.`left` + t2.consumed ), 2 )) * 100 ) END, '%')) AS PROGRESSRATE,
((CASE WHEN t2.deadline IS NULL OR t2.deadline = '1970-00-00' OR t2.deadline = '1970-01-01' THEN '' WHEN t2.`status` IN ( 'wait', 'doing' ) AND t2.deadline < DATE_FORMAT( now(), '%Y-%m-%d' ) THEN CONCAT_WS( '', '延期', TIMESTAMPDIFF( DAY, t2.deadline, now()), '天' ) ELSE '' END )) AS DELAYDAYS 
FROM
(SELECT
t1.DATE,
t1.TASK,
t1.ACCOUNT,
ROUND(sum(t1.CONSUMED), 2) AS CONSUMED,
task AS id 
FROM
`zt_taskestimate` t1 
WHERE ${srfdatacontext('yearmonth')} = DATE_FORMAT(t1.date, '%Y-%m')
GROUP BY t1.DATE, t1.TASK, t1.ACCOUNT 
) t1
LEFT JOIN zt_task t2 ON t1.task = t2.id
WHERE FIND_IN_SET(t1.task, ${srfdatacontext('tasks')})
```
### 数据查询-产品周报用户任务统计（ProductWeeklyUserTaskStats）
#### 说明
产品周报用户任务统计

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select 
t1.*,
t2.`name` AS taskname,
t2.deadline,
t2.ESTSTARTED,
t2.type AS TASKTYPE,
(CONCAT_WS('', CASE WHEN t2.consumed = 0 OR t2.consumed IS NULL THEN '0' WHEN t2.`left` = 0 OR t2.`left` IS NULL THEN '100' ELSE ROUND((ROUND(t2.`consumed`/( t2.`left` + t2.consumed ), 2 )) * 100 ) END, '%')) AS PROGRESSRATE, 
((CASE WHEN t2.deadline IS NULL OR t2.deadline = '1970-00-00' OR t2.deadline = '1970-01-01' THEN '' WHEN t2.`status` IN ( 'wait', 'doing' ) AND t2.deadline < DATE_FORMAT(now(), '%Y-%m-%d') THEN CONCAT_WS('', '延期', TIMESTAMPDIFF(DAY, t2.deadline, now()), '天') ELSE '' END)) AS DELAYDAYS 
from
(SELECT
t1.DATE,
t1.TASK,
t1.ACCOUNT,
ROUND(sum(t1.CONSUMED), 2) AS CONSUMED,
task AS id 
FROM
`zt_taskestimate` t1 
WHERE
t1.date >= DATE_FORMAT(${srfdatacontext('begin')}, '%Y-%m-%d')
AND t1.date <= DATE_FORMAT(${srfdatacontext('end')}, '%Y-%m-%d')
GROUP BY t1.DATE, t1.TASK, t1.ACCOUNT) t1
left join zt_task t2 
on t1.task = t2.id 
where 
FIND_IN_SET(t1.task, ${srfdatacontext('tasks')})

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
t1.`TASK`
FROM `zt_taskestimate` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据集](#数据集合-数据集（Default）) | Default | 是 |
| 2 | [产品日报用户任务统计](#数据集合-产品日报用户任务统计（ProductDailyUserTaskStats）) | ProductDailyUserTaskStats | 否 |
| 3 | [产品月报用户任务统计](#数据集合-产品月报用户任务统计（ProductMonthlyUserTaskStats）) | ProductMonthlyUserTaskStats | 否 |
| 4 | [产品周报用户任务统计](#数据集合-产品周报用户任务统计（ProductWeeklyUserTaskStats）) | ProductWeeklyUserTaskStats | 否 |

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
### 数据集合-产品日报用户任务统计（ProductDailyUserTaskStats）
#### 说明
产品日报用户任务统计

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品日报用户任务统计（ProductDailyUserTaskStats）](#数据查询-产品日报用户任务统计（ProductDailyUserTaskStats）) |
### 数据集合-产品月报用户任务统计（ProductMonthlyUserTaskStats）
#### 说明
产品月报用户任务统计

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品月报用户任务统计（ProductMonthlyUserTaskStats）](#数据查询-产品月报用户任务统计（ProductMonthlyUserTaskStats）) |
### 数据集合-产品周报用户任务统计（ProductWeeklyUserTaskStats）
#### 说明
产品周报用户任务统计

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品周报用户任务统计（ProductWeeklyUserTaskStats）](#数据查询-产品周报用户任务统计（ProductWeeklyUserTaskStats）) |

## 数据导入
无

## 数据导出
无

