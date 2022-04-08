
# 实体-公司动态汇总(IBZ_COMPANYSTATS)
## 实体说明
公司动态汇总

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
| 1 | [标识](#属性-标识（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 是 |
| 2 | [备注](#属性-备注（COMMENT）) | COMMENT | 长文本，没有长度限制 | 否 | 否 | 是 |
| 3 | [日期](#属性-日期（ZTDATE）) | ZTDATE | 日期型 | 否 | 否 | 是 |
| 4 | [登录次数](#属性-登录次数（LOGINCNT）) | LOGINCNT | 整型 | 否 | 否 | 是 |
| 5 | [日志工时](#属性-日志工时（LOGHOURS）) | LOGHOURS | 整型 | 否 | 否 | 是 |
| 6 | [新增需求数](#属性-新增需求数（OPENEDSTORYCNT）) | OPENEDSTORYCNT | 整型 | 否 | 否 | 是 |
| 7 | [关闭需求数](#属性-关闭需求数（CLOSEDSTORYCNT）) | CLOSEDSTORYCNT | 整型 | 否 | 否 | 是 |
| 8 | [新增任务数](#属性-新增任务数（OPENEDTASKCNT）) | OPENEDTASKCNT | 整型 | 否 | 否 | 是 |
| 9 | [完成任务数](#属性-完成任务数（FINISHEDTASKCNT）) | FINISHEDTASKCNT | 整型 | 否 | 否 | 是 |
| 10 | [新增Bug数](#属性-新增Bug数（OPENEDBUGCNT）) | OPENEDBUGCNT | 整型 | 否 | 否 | 是 |
| 11 | [解决Bug数](#属性-解决Bug数（RESOLVEDBUGCNT）) | RESOLVEDBUGCNT | 整型 | 否 | 否 | 是 |
| 12 | [动态数](#属性-动态数（DYNAMICCNT）) | DYNAMICCNT | 整型 | 否 | 否 | 是 |
| 13 | [日志日期](#属性-日志日期（DATE）) | DATE | 日期型 | 否 | 否 | 是 |

### 属性-标识（ID）
#### 属性说明
标识

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

### 属性-备注（COMMENT）
#### 属性说明
备注

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

### 属性-日期（ZTDATE）
#### 属性说明
日期

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

### 属性-登录次数（LOGINCNT）
#### 属性说明
登录次数

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

### 属性-日志工时（LOGHOURS）
#### 属性说明
日志工时

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

### 属性-新增需求数（OPENEDSTORYCNT）
#### 属性说明
新增需求数

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

### 属性-关闭需求数（CLOSEDSTORYCNT）
#### 属性说明
关闭需求数

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

### 属性-新增任务数（OPENEDTASKCNT）
#### 属性说明
新增任务数

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

### 属性-完成任务数（FINISHEDTASKCNT）
#### 属性说明
完成任务数

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

### 属性-新增Bug数（OPENEDBUGCNT）
#### 属性说明
新增Bug数

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

### 属性-解决Bug数（RESOLVEDBUGCNT）
#### 属性说明
解决Bug数

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

### 属性-动态数（DYNAMICCNT）
#### 属性说明
动态数

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

### 属性-日志日期（DATE）
#### 属性说明
日志日期

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `>=` |
| 2 | `<=` |

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
| 1 | [备注（COMMENT）](#属性-备注（COMMENT）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [备注（COMMENT）](#属性-备注（COMMENT）) | `%like%` |
| 2 | [日志日期（DATE）](#属性-日志日期（DATE）) | `>=` |
| 3 | [日志日期（DATE）](#属性-日志日期（DATE）) | `<=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [公司动态统计](#数据查询-公司动态统计（CompanyDynamicStats）) | CompanyDynamicStats | 否 |
| 2 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 3 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-公司动态统计（CompanyDynamicStats）
#### 说明
公司动态统计

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select 
DATE_FORMAT(t1.date, '%Y-%m-%d') as `ZTDATE`, 
t1.date, 
sum(case when t1.objecttype = 'user' and t1.action = 'login' then 1 else 0 end) as `LoginCNT`,
IFNULL((select sum(t2.consumed) from zt_taskestimate t2 where t2.date = DATE_FORMAT(t1.date, '%Y-%m-%d')), 0) as `LogHours`, 
sum(case when t1.objecttype = 'story' and t1.action = 'opened' then 1 else 0 end) as `OpenedStoryCNT`, 
sum(case when t1.objecttype = 'story' and t1.action = 'closed' then 1 else 0 end) as `ClosedStoryCNT`, 
sum(case when t1.objecttype = 'task' and t1.action = 'opened' then 1 else 0 end) as `OpenedTaskCNT`, 
sum(case when t1.objecttype = 'task' and t1.action = 'finished' then 1 else 0 end) as `FinishedTaskCNT`, 
sum(case when t1.objecttype = 'bug' and t1.action = 'opened' then 1 else 0 end) as `OpenedBugCNT`, 
sum(case when t1.objecttype = 'bug' and t1.action = 'resolved' then 1 else 0 end) as `ResolvedBugCNT`, 
count(1) as `DynamicCNT` 
from zt_action t1 
where (DATE_FORMAT(t1.date, '%Y-%m-%d') >= #{srf.datacontext.begin} or #{srf.datacontext.begin} is null) and (DATE_FORMAT(t1.date, '%Y-%m-%d') <= #{srf.datacontext.end} or #{srf.datacontext.end} is null)
group by DATE_FORMAT(t1.date, '%Y-%m-%d')
```
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
0 AS `CLOSEDSTORYCNT`,
t1.`DATE`,
0 AS `DYNAMICCNT`,
0 AS `FINISHEDTASKCNT`,
t1.`ID`,
0 AS `LOGHOURS`,
0 AS `LOGINCNT`,
0 AS `OPENEDBUGCNT`,
0 AS `OPENEDSTORYCNT`,
0 AS `OPENEDTASKCNT`,
0 AS `RESOLVEDBUGCNT`
FROM `zt_action` t1 

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
0 AS `CLOSEDSTORYCNT`,
t1.`COMMENT`,
t1.`DATE`,
0 AS `DYNAMICCNT`,
0 AS `FINISHEDTASKCNT`,
t1.`ID`,
0 AS `LOGHOURS`,
0 AS `LOGINCNT`,
0 AS `OPENEDBUGCNT`,
0 AS `OPENEDSTORYCNT`,
0 AS `OPENEDTASKCNT`,
0 AS `RESOLVEDBUGCNT`
FROM `zt_action` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [公司动态统计](#数据集合-公司动态统计（CompanyDynamicStats）) | CompanyDynamicStats | 否 |
| 2 | [数据集](#数据集合-数据集（Default）) | Default | 是 |

### 数据集合-公司动态统计（CompanyDynamicStats）
#### 说明
公司动态统计

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [公司动态统计（CompanyDynamicStats）](#数据查询-公司动态统计（CompanyDynamicStats）) |
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

## 数据导入
无

## 数据导出
无

