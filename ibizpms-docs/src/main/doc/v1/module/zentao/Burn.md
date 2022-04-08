
# 实体-burn(ZT_BURN)
## 实体说明
burn

## 所属模块
[基础管理模块](../zentao)

## 实体关系
### 1:N
无
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [项目（ZT_PROJECT）](../zentao/Project) | （默认） |
| 2 | [任务（ZT_TASK）](../zentao/Task) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [日期](#属性-日期（DATE）) | DATE | 日期型 | 否 | 否 | 是 |
| 2 | [虚拟主键](#属性-虚拟主键（ID）) | ID | 文本，可指定长度 | 是 | 否 | 否 |
| 3 | [总计消耗](#属性-总计消耗（CONSUMED）) | CONSUMED | 外键值附加数据 | 否 | 是 | 是 |
| 4 | [预计剩余](#属性-预计剩余（LEFT）) | LEFT | 外键值附加数据 | 否 | 是 | 是 |
| 5 | [最初预计](#属性-最初预计（ESTIMATE）) | ESTIMATE | 外键值附加数据 | 否 | 是 | 是 |
| 6 | [所属项目](#属性-所属项目（PROJECT）) | PROJECT | 外键值 | 否 | 是 | 是 |
| 7 | [任务](#属性-任务（TASK）) | TASK | 外键值 | 否 | 是 | 是 |
| 8 | [周末](#属性-周末（ISWEEKEND）) | ISWEEKEND | 文本，可指定长度 | 否 | 是 | 是 |

### 属性-日期（DATE）
#### 属性说明
定时任务，每天一个有task的project对应一个图，也可手动刷新

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
是

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [编号（ID）](../zentao/Task/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-虚拟主键（ID）
#### 属性说明
虚拟主键

- 是否是主键
是

- 属性类型
逻辑字段[来自计算式]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为空
否

- 默认值
无

- 取值范围/公式
```SQL
concat(%1$s,'__',%2$s,'__',%3$s)
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [编号（ID）](../zentao/Task/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-总计消耗（CONSUMED）
#### 属性说明
总计消耗

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值附加数据

- Java类型
Double

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [总计消耗（CONSUMED）](../zentao/Task/#属性-总计消耗（CONSUMED）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-预计剩余（LEFT）
#### 属性说明
预计剩余

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值附加数据

- Java类型
Double

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [预计剩余（LEFT）](../zentao/Task/#属性-预计剩余（LEFT）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-最初预计（ESTIMATE）
#### 属性说明
最初预计

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值附加数据

- Java类型
Double

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [最初预计（ESTIMATE）](../zentao/Task/#属性-最初预计（ESTIMATE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-所属项目（PROJECT）
#### 属性说明
所属项目

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-任务（TASK）
#### 属性说明
任务

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [编号（ID）](../zentao/Task/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-周末（ISWEEKEND）
#### 属性说明
周末

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
1
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |
| 2 | `in(...)` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [编号（ID）](../zentao/Task/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |


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
| 7 | [更新燃尽图](#实体行为-更新燃尽图（ComputeBurn）) | ComputeBurn | 用户自定义 | 后台及前台 |
| 8 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |

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
### 实体行为-更新燃尽图（ComputeBurn）
#### 说明
更新燃尽图

- 行为类型
用户自定义

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
| 1 | [日期（DATE）](#属性-日期（DATE）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [所属项目（PROJECT）](#属性-所属项目（PROJECT）) | `=` |
| 2 | [任务（TASK）](#属性-任务（TASK）) | `=` |
| 3 | [周末（ISWEEKEND）](#属性-周末（ISWEEKEND）) | `=` |
| 4 | [周末（ISWEEKEND）](#属性-周末（ISWEEKEND）) | `in(...)` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 2 | [燃尽图预计（含周末）](#数据查询-燃尽图预计（含周末）（ESTIMATEANDLEFT）) | ESTIMATEANDLEFT | 否 |
| 3 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-DEFAULT（Default）
#### 说明
DEFAULT

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`CONSUMED`,
t1.`DATE`,
t1.`ESTIMATE`,
concat(t1.`PROJECT`,'__',t1.`TASK`,'__',t1.`DATE`) AS `ID`,
1 AS `ISWEEKEND`,
t1.`LEFT`,
t1.`PROJECT`,
t1.`TASK`
FROM `zt_burn` t1 

```
### 数据查询-燃尽图预计（含周末）（ESTIMATEANDLEFT）
#### 说明
燃尽图预计（含周末）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`CONSUMED`,
t1.`DATE`,
ROUND((select estimate from zt_burn where date=t2.begin and project=t1.project)*(1-(DATEDIFF(t1.date,t2.`begin`))/(DATEDIFF(t2.`end`,t2.`begin`))),1) AS `ESTIMATE`,
t1.`LEFT`,
t1.`PROJECT`,
DATE_FORMAT(t1.date,'%w')  as ISWEEKEND
FROM `zt_burn` t1  
LEFT JOIN zt_project t2 on t1.project=t2.id
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
t1.`CONSUMED`,
t1.`DATE`,
t1.`ESTIMATE`,
concat(t1.`PROJECT`,'__',t1.`TASK`,'__',t1.`DATE`) AS `ID`,
1 AS `ISWEEKEND`,
t1.`LEFT`,
t1.`PROJECT`,
t1.`TASK`
FROM `zt_burn` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 2 | [燃尽图预计（含周末）](#数据集合-燃尽图预计（含周末）（ESTIMATEANDLEFT）) | ESTIMATEANDLEFT | 否 |

### 数据集合-DEFAULT（Default）
#### 说明
DEFAULT

- 默认集合
是

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [DEFAULT（Default）](#数据查询-DEFAULT（Default）) |
### 数据集合-燃尽图预计（含周末）（ESTIMATEANDLEFT）
#### 说明
燃尽图预计（含周末）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [燃尽图预计（含周末）（ESTIMATEANDLEFT）](#数据查询-燃尽图预计（含周末）（ESTIMATEANDLEFT）) |

## 数据导入
无

## 数据导出
无

