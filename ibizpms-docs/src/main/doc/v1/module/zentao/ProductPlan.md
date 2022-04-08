
# 实体-产品计划(ZT_PRODUCTPLAN)
## 实体说明
产品计划

## 所属模块
[基础管理模块](../zentao)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [Bug（ZT_BUG）](../zentao/Bug) | （默认） |
| 2 | [项目产品（ZT_PROJECTPRODUCT）](../zentao/ProjectProduct) | （默认） |
| 3 | [任务（ZT_TASK）](../zentao/Task) | （默认） |
| 4 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) | （默认） |
| 2 | [产品（ZT_PRODUCT）](../zentao/Product) | （默认） |
| 3 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [名称](#属性-名称（TITLE）) | TITLE | 文本，可指定长度 | 否 | 否 | 否 |
| 2 | [编号](#属性-编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 3 | [开始日期](#属性-开始日期（BEGIN）) | BEGIN | 日期型 | 否 | 否 | 是 |
| 4 | [描述](#属性-描述（DESC）) | DESC | 长文本，没有长度限制 | 否 | 否 | 是 |
| 5 | [结束日期](#属性-结束日期（END）) | END | 日期型 | 否 | 否 | 是 |
| 6 | [已删除](#属性-已删除（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 否 |
| 7 | [排序](#属性-排序（ORDER）) | ORDER | 长文本，没有长度限制 | 否 | 否 | 是 |
| 8 | [父计划名称](#属性-父计划名称（PARENTNAME）) | PARENTNAME | 外键值文本 | 否 | 是 | 是 |
| 9 | [平台/分支](#属性-平台/分支（BRANCH）) | BRANCH | 外键值 | 否 | 是 | 是 |
| 10 | [父计划](#属性-父计划（PARENT）) | PARENT | 外键值 | 否 | 是 | 是 |
| 11 | [产品](#属性-产品（PRODUCT）) | PRODUCT | 外键值 | 否 | 是 | 是 |
| 12 | [状态](#属性-状态（STATUSS）) | STATUSS | 文本，可指定长度 | 否 | 是 | 是 |
| 13 | [待定](#属性-待定（FUTURE）) | FUTURE | 单项选择(文本值) | 否 | 是 | 是 |
| 14 | [周期](#属性-周期（DELTA）) | DELTA | 单项选择(文本值) | 否 | 是 | 是 |
| 15 | [上一次计划名称](#属性-上一次计划名称（OLDTITLE）) | OLDTITLE | 文本，可指定长度 | 否 | 是 | 是 |
| 16 | [需求数](#属性-需求数（STORYCNT）) | STORYCNT | 整型 | 否 | 是 | 是 |
| 17 | [bug数](#属性-bug数（BUGCNT）) | BUGCNT | 整型 | 否 | 是 | 是 |
| 18 | [是否过期](#属性-是否过期（ISEXPIRED）) | ISEXPIRED | 是否逻辑 | 否 | 是 | 是 |
| 19 | [工时数](#属性-工时数（ESTIMATECNT）) | ESTIMATECNT | 整型 | 否 | 是 | 是 |
| 20 | [开始日期](#属性-开始日期（BEGINSTR）) | BEGINSTR | 文本，可指定长度 | 否 | 是 | 是 |
| 21 | [结束日期](#属性-结束日期（ENDSTR）) | ENDSTR | 文本，可指定长度 | 否 | 是 | 是 |
| 22 | [计划模板](#属性-计划模板（PLANTEMPLET）) | PLANTEMPLET | 单项选择(文本值) | 否 | 是 | 是 |

### 属性-名称（TITLE）
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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-开始日期（BEGIN）
#### 属性说明
开始日期

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

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-描述（DESC）
#### 属性说明
描述

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-结束日期（END）
#### 属性说明
结束日期

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
| 1 | `<=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-已删除（DELETED）
#### 属性说明
已删除

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为空
否

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-排序（ORDER）
#### 属性说明
排序

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-父计划名称（PARENTNAME）
#### 属性说明
父计划名称

- 是否是主键
否

- 属性类型
链接字段[来自关系实体字段]

- 数据类型
外键值文本

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
| 2 | `%like%` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-平台/分支（BRANCH）
#### 属性说明
平台/分支

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [编号（ID）](../zentao/Branch/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-父计划（PARENT）
#### 属性说明
父计划

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [编号（ID）](../zentao/ProductPlan/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-产品（PRODUCT）
#### 属性说明
产品

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-状态（STATUSS）
#### 属性说明
状态

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
(case when t1.parent = -1 then 'parent' when t1.parent > 0 then  'chlid' else 'normal' end)
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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-待定（FUTURE）
#### 属性说明
待定

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
单项选择(文本值)

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[日期_待定（Date_disable）](../../codelist/Date_disable)】

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-周期（DELTA）
#### 属性说明
周期

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
参照数据字典【[时间周期（Zt__delta）](../../codelist/Zt__delta)】

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-上一次计划名称（OLDTITLE）
#### 属性说明
上一次计划名称

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-需求数（STORYCNT）
#### 属性说明
需求数

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
((select COUNT(t.id) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' ))
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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-bug数（BUGCNT）
#### 属性说明
bug数

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
((select count(t.id) FROM zt_bug t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0'))
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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-是否过期（ISEXPIRED）
#### 属性说明
是否过期

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
是否逻辑

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(case when t1.`end` > now() then '0' else '1' end)
```

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-工时数（ESTIMATECNT）
#### 属性说明
工时数

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
(select sum(t.estimate) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' )
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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-开始日期（BEGINSTR）
#### 属性说明
开始日期

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
(case when t1.`begin` = '2030-01-01' then '待定' else t1.`begin` end)
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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-结束日期（ENDSTR）
#### 属性说明
结束日期

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
(case when t1.`end` = '2030-01-01' then '待定' else t1.`end` end)
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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-计划模板（PLANTEMPLET）
#### 属性说明
计划模板

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
参照数据字典【[计划模板（PlanTemplet）](../../codelist/PlanTemplet)】

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |


## 业务状态
| 序号 | 状态名称 | [状态](#属性-状态（STATUSS）)<br>（STATUSS） | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [子计划](#业务状态-子计划（chlid）) | chlid |  |  | 否 |
| 2 | [正常](#业务状态-正常（normal）) | normal |  |  | 否 |
| 3 | [父计划](#业务状态-父计划（parent）) | parent |  |  | 否 |
### 业务状态-子计划（chlid）
#### 状态说明
子计划

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [状态](#属性-状态（STATUSS）)<br>（STATUSS） | chlid |



- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [计划子计划](#操作权限-计划子计划（SRFUR__PROP_CHILD_BUT）)<br>（SRFUR__PROP_CHILD_BUT） |
### 业务状态-正常（normal）
#### 状态说明
正常

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [状态](#属性-状态（STATUSS）)<br>（STATUSS） | normal |



- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
### 业务状态-父计划（parent）
#### 状态说明
父计划

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [状态](#属性-状态（STATUSS）)<br>（STATUSS） | parent |



- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [计划删除](#操作权限-计划删除（SRFUR__PROP_DELETE_BUT）)<br>（SRFUR__PROP_DELETE_BUT） |

## 实体行为
| 序号 | 行为 | 行为名 | 行为类型 | 行为持有者 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [Create](#实体行为-Create（Create）) | Create | 内置方法 | 后台及前台 |
| 2 | [Update](#实体行为-Update（Update）) | Update | 内置方法 | 后台及前台 |
| 3 | [Remove](#实体行为-Remove（Remove）) | Remove | 内置方法 | 后台及前台 |
| 4 | [Get](#实体行为-Get（Get）) | Get | 内置方法 | 后台及前台 |
| 5 | [GetDraft](#实体行为-GetDraft（GetDraft）) | GetDraft | 内置方法 | 后台及前台 |
| 6 | [批量解除关联Bug](#实体行为-批量解除关联Bug（BatchUnlinkBug）) | BatchUnlinkBug | 用户自定义 | 后台及前台 |
| 7 | [批量解除关联需求](#实体行为-批量解除关联需求（BatchUnlinkStory）) | BatchUnlinkStory | 用户自定义 | 后台及前台 |
| 8 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 9 | [获取上一个计划的名称](#实体行为-获取上一个计划的名称（GetOldPlanName）) | GetOldPlanName | 实体处理逻辑 | 后台 |
| 10 | [计算计划结束时间](#实体行为-计算计划结束时间（GetPlanEnd）) | GetPlanEnd | 用户自定义 | 前台 |
| 11 | [导入计划模板](#实体行为-导入计划模板（ImportPlanTemplet）) | ImportPlanTemplet | 用户自定义 | 后台及前台 |
| 12 | [关联Bug](#实体行为-关联Bug（LinkBug）) | LinkBug | 用户自定义 | 后台及前台 |
| 13 | [关联需求](#实体行为-关联需求（LinkStory）) | LinkStory | 用户自定义 | 后台及前台 |
| 14 | [关联任务](#实体行为-关联任务（LinkTask）) | LinkTask | 用户自定义 | 后台及前台 |
| 15 | [移动端产品计划计数器](#实体行为-移动端产品计划计数器（MobProductPlanCounter）) | MobProductPlanCounter | 实体处理逻辑 | 后台 |
| 16 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |
| 17 | [解除关联Bug](#实体行为-解除关联Bug（UnlinkBug）) | UnlinkBug | 用户自定义 | 后台及前台 |
| 18 | [解除关联需求](#实体行为-解除关联需求（UnlinkStory）) | UnlinkStory | 用户自定义 | 后台及前台 |

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
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [获取开始日期和结束日期<br>（GetBedinANDEnd）](#逻辑处理-获取开始日期和结束日期（GetBedinANDEnd）) | 执行之后 | 是 |  |
### 实体行为-GetDraft（GetDraft）
#### 说明
GetDraft

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [获取上一个计划的名称<br>（GetOldPlanName）](#逻辑处理-获取上一个计划的名称（GetOldPlanName）) | 执行之后 | 是 |  |
### 实体行为-批量解除关联Bug（BatchUnlinkBug）
#### 说明
批量解除关联Bug

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-批量解除关联需求（BatchUnlinkStory）
#### 说明
批量解除关联需求

- 行为类型
用户自定义

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
### 实体行为-获取上一个计划的名称（GetOldPlanName）
#### 说明
获取上一个计划的名称

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-计算计划结束时间（GetPlanEnd）
#### 说明
计算计划结束时间

- 行为类型
用户自定义

- 行为持有者
前台

#### 逻辑附加
无
### 实体行为-导入计划模板（ImportPlanTemplet）
#### 说明
导入计划模板

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-关联Bug（LinkBug）
#### 说明
关联Bug

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-关联需求（LinkStory）
#### 说明
关联需求

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-关联任务（LinkTask）
#### 说明
关联任务

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-移动端产品计划计数器（MobProductPlanCounter）
#### 说明
移动端产品计划计数器

- 行为类型
实体处理逻辑

- 行为持有者
后台

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
### 实体行为-解除关联Bug（UnlinkBug）
#### 说明
解除关联Bug

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-解除关联需求（UnlinkStory）
#### 说明
解除关联需求

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无

## 逻辑处理
| 序号 | 逻辑 | 逻辑名 | 逻辑持有者 |
| ---- | ---- | ---- | ---- |
| 1 | [获取开始日期和结束日期](#逻辑处理-获取开始日期和结束日期（GetBedinANDEnd）) | GetBedinANDEnd | 后台 |
| 2 | [获取上一个计划的名称](#逻辑处理-获取上一个计划的名称（GetOldPlanName）) | GetOldPlanName | 后台 |
| 3 | [移动端产品计划计数器](#逻辑处理-移动端产品计划计数器（MobProductPlanCounter）) | MobProductPlanCounter | 后台 |

### 逻辑处理-获取开始日期和结束日期（GetBedinANDEnd）
#### 说明
获取开始日期和结束日期

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 设置待定 | Prepareparam1 | 准备参数 |
| 2 | 开始 | Begin | 开始 |
### 逻辑处理-获取上一个计划的名称（GetOldPlanName）
#### 说明
获取上一个计划的名称

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 获取名称 | Rawsqlcall1 | 直接SQL调用 |
### 逻辑处理-移动端产品计划计数器（MobProductPlanCounter）
#### 说明
移动端产品计划计数器

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 获取需求数 | Rawsqlcall1 | 直接SQL调用 |
| 3 | 获取bug数 | Rawsqlcall2 | 直接SQL调用 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [名称（TITLE）](#属性-名称（TITLE）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [名称（TITLE）](#属性-名称（TITLE）) | `%like%` |
| 2 | [开始日期（BEGIN）](#属性-开始日期（BEGIN）) | `>=` |
| 3 | [结束日期（END）](#属性-结束日期（END）) | `<=` |
| 4 | [父计划名称（PARENTNAME）](#属性-父计划名称（PARENTNAME）) | `=` |
| 5 | [父计划名称（PARENTNAME）](#属性-父计划名称（PARENTNAME）) | `%like%` |
| 6 | [平台/分支（BRANCH）](#属性-平台/分支（BRANCH）) | `=` |
| 7 | [父计划（PARENT）](#属性-父计划（PARENT）) | `=` |
| 8 | [产品（PRODUCT）](#属性-产品（PRODUCT）) | `=` |
| 9 | [待定（FUTURE）](#属性-待定（FUTURE）) | `=` |
| 10 | [周期（DELTA）](#属性-周期（DELTA）) | `=` |
| 11 | [是否过期（ISEXPIRED）](#属性-是否过期（ISEXPIRED）) | `=` |
| 12 | [计划模板（PLANTEMPLET）](#属性-计划模板（PLANTEMPLET）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [子计划](#数据查询-子计划（ChildPlan）) | ChildPlan | 否 |
| 2 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 3 | [默认查询](#数据查询-默认查询（DefaultParent）) | DefaultParent | 否 |
| 4 | [获取产品计划列表](#数据查询-获取产品计划列表（GetList）) | GetList | 否 |
| 5 | [计划（代码表）](#数据查询-计划（代码表）（PlanCodeList）) | PlanCodeList | 否 |
| 6 | [项目立项](#数据查询-项目立项（ProjectApp）) | ProjectApp | 否 |
| 7 | [项目计划列表](#数据查询-项目计划列表（ProjectPlan）) | ProjectPlan | 否 |
| 8 | [根计划](#数据查询-根计划（RootPlan）) | RootPlan | 否 |
| 9 | [任务计划](#数据查询-任务计划（TaskPlan）) | TaskPlan | 否 |
| 10 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-子计划（ChildPlan）
#### 说明
子计划

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BEGIN`,
(case when t1.`begin` = '2030-01-01' then '待定' else t1.`begin` end) AS `BEGINSTR`,
t1.`BRANCH`,
((select count(t.id) FROM zt_bug t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0')) AS `BUGCNT`,
t1.`DELETED`,
t1.`END`,
(case when t1.`end` = '2030-01-01' then '待定' else t1.`end` end) AS `ENDSTR`,
(select sum(t.estimate) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' ) AS `ESTIMATECNT`,
(case when t1.`begin` = '2030-01-01' or t1.`end` = '2030-01-01' then 'on' else '' end) AS `FUTURE`,
t1.`ID`,
(case when t1.`end` > now() then '0' else '1' end) AS `ISEXPIRED`,
t1.`PARENT`,
t11.`TITLE` AS `PARENTNAME`,
t1.`PRODUCT`,
(case when t1.parent = -1 then 'parent' when t1.parent > 0 then  'chlid' else 'normal' end) AS `STATUSS`,
((select COUNT(t.id) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' )) AS `STORYCNT`,
t1.`TITLE` as `TITLE`
FROM `zt_productplan` t1 
LEFT JOIN `zt_productplan` t11 ON t1.`PARENT` = t11.`ID` 

```
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
t1.`BEGIN`,
(case when t1.`begin` = '2030-01-01' then '待定' else t1.`begin` end) AS `BEGINSTR`,
t1.`BRANCH`,
((select count(t.id) FROM zt_bug t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0')) AS `BUGCNT`,
t1.`DELETED`,
t1.`END`,
(case when t1.`end` = '2030-01-01' then '待定' else t1.`end` end) AS `ENDSTR`,
(select sum(t.estimate) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' ) AS `ESTIMATECNT`,
(case when t1.`begin` = '2030-01-01' or t1.`end` = '2030-01-01' then 'on' else '' end) AS `FUTURE`,
t1.`ID`,
(case when t1.`end` > now() then '0' else '1' end) AS `ISEXPIRED`,
t1.`PARENT`,
t11.`TITLE` AS `PARENTNAME`,
t1.`PRODUCT`,
(case when t1.parent = -1 then 'parent' when t1.parent > 0 then  'chlid' else 'normal' end) AS `STATUSS`,
((select COUNT(t.id) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' )) AS `STORYCNT`,
t1.`TITLE`
FROM `zt_productplan` t1 
LEFT JOIN `zt_productplan` t11 ON t1.`PARENT` = t11.`ID` 

```
### 数据查询-默认查询（DefaultParent）
#### 说明
默认查询

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BEGIN`,
(case when t1.`begin` = '2030-01-01' then '待定' else t1.`begin` end) AS `BEGINSTR`,
t1.`BRANCH`,
((select count(t.id) FROM zt_bug t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0')) AS `BUGCNT`,
t1.`DELETED`,
t1.`END`,
(case when t1.`end` = '2030-01-01' then '待定' else t1.`end` end) AS `ENDSTR`,
(select sum(t.estimate) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' ) AS `ESTIMATECNT`,
(case when t1.`begin` = '2030-01-01' or t1.`end` = '2030-01-01' then 'on' else '' end) AS `FUTURE`,
t1.`ID`,
(case when t1.`end` > now() then '0' else '1' end) AS `ISEXPIRED`,
t1.`PARENT`,
t11.`TITLE` AS `PARENTNAME`,
t1.`PRODUCT`,
(case when t1.parent = -1 then 'parent' when t1.parent > 0 then  'chlid' else 'normal' end) AS `STATUSS`,
((select COUNT(t.id) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' )) AS `STORYCNT`,
t1.`TITLE`
FROM `zt_productplan` t1 
LEFT JOIN `zt_productplan` t11 ON t1.`PARENT` = t11.`ID` 

```
### 数据查询-获取产品计划列表（GetList）
#### 说明
获取当前用户的相关产品（分支）的计划

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BEGIN`,
(case when t1.`begin` = '2030-01-01' then '待定' else t1.`begin` end) AS `BEGINSTR`,
t1.`BRANCH`,
((select count(t.id) FROM zt_bug t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0')) AS `BUGCNT`,
t1.`DELETED`,
t1.`END`,
(case when t1.`end` = '2030-01-01' then '待定' else t1.`end` end) AS `ENDSTR`,
(select sum(t.estimate) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' ) AS `ESTIMATECNT`,
(case when t1.`begin` = '2030-01-01' or t1.`end` = '2030-01-01' then 'on' else '' end) AS `FUTURE`,
t1.`ID`,
(case when t1.`end` > now() then '0' else '1' end) AS `ISEXPIRED`,
t1.`PARENT`,
t11.`TITLE` AS `PARENTNAME`,
t1.`PRODUCT`,
(case when t1.parent = -1 then 'parent' when t1.parent > 0 then  'chlid' else 'normal' end) AS `STATUSS`,
((select COUNT(t.id) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' )) AS `STORYCNT`,
t1.`TITLE`
FROM `zt_productplan` t1 
LEFT JOIN `zt_productplan` t11 ON t1.`PARENT` = t11.`ID` 

```
### 数据查询-计划（代码表）（PlanCodeList）
#### 说明
计划（代码表）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.* from ( SELECT
t1.`ID`,
t1.`TITLE`,
t1.product,
t1.parent
FROM `zt_productplan` t1 
UNION
SELECT
0 as `ID`,
'未计划' as `TITLE`,
0 as product,
0 as parent
FROM dual  ) t1
```
### 数据查询-项目立项（ProjectApp）
#### 说明
项目立项

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BEGIN`,
(case when t1.`begin` = '2030-01-01' then '待定' else t1.`begin` end) AS `BEGINSTR`,
t1.`BRANCH`,
((select count(t.id) FROM zt_bug t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0')) AS `BUGCNT`,
t1.`DELETED`,
t1.`END`,
(case when t1.`end` = '2030-01-01' then '待定' else t1.`end` end) AS `ENDSTR`,
(select sum(t.estimate) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' ) AS `ESTIMATECNT`,
(case when t1.`begin` = '2030-01-01' or t1.`end` = '2030-01-01' then 'on' else '' end) AS `FUTURE`,
t1.`ID`,
(case when t1.`end` > now() then '0' else '1' end) AS `ISEXPIRED`,
t1.`PARENT`,
t11.`TITLE` AS `PARENTNAME`,
t1.`PRODUCT`,
(case when t1.parent = -1 then 'parent' when t1.parent > 0 then  'chlid' else 'normal' end) AS `STATUSS`,
((select COUNT(t.id) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' )) AS `STORYCNT`,
t1.`TITLE`
FROM `zt_productplan` t1 
LEFT JOIN `zt_productplan` t11 ON t1.`PARENT` = t11.`ID` 

```
### 数据查询-项目计划列表（ProjectPlan）
#### 说明
项目计划列表

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.`BEGIN`,
(case when t1.`begin` = '2030-01-01' then '待定' else t1.`begin` end) AS `BEGINSTR`,
	t1.`BRANCH`,
	t1.`DELETED`,
	t1.`END`,
(case when t1.`end` = '2030-01-01' then '待定' else t1.`end` end) AS `ENDSTR`,
	t1.`ID`,
	t1.`PARENT`,
	t11.`TITLE` AS `PARENTNAME`,
	t1.`PRODUCT`,
	(CONCAT(t31.`name`,'/',t1.title,'[',case when t1.`begin` is not null then t1.`begin` else '' end,'~',case when t1.`end` is not null then t1.`end` else '' end,']')) as `TITLE` 
FROM
	`zt_productplan` t1
	LEFT JOIN zt_productplan t11 ON t1.PARENT = t11.ID
	LEFT JOIN zt_product t31 ON t1.product = t31.id 
	LEFT JOIN zt_projectproduct t21 ON t31.id = t21.product and t1.id = t21.plan
```
### 数据查询-根计划（RootPlan）
#### 说明
根计划

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BEGIN`,
(case when t1.`begin` = '2030-01-01' then '待定' else t1.`begin` end) AS `BEGINSTR`,
t1.`BRANCH`,
((select count(t.id) FROM zt_bug t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0')) AS `BUGCNT`,
t1.`DELETED`,
t1.`END`,
(case when t1.`end` = '2030-01-01' then '待定' else t1.`end` end) AS `ENDSTR`,
(select sum(t.estimate) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' ) AS `ESTIMATECNT`,
(case when t1.`begin` = '2030-01-01' or t1.`end` = '2030-01-01' then 'on' else '' end) AS `FUTURE`,
t1.`ID`,
(case when t1.`end` > now() then '0' else '1' end) AS `ISEXPIRED`,
t1.`PARENT`,
t11.`TITLE` AS `PARENTNAME`,
t1.`PRODUCT`,
(case when t1.parent = -1 then 'parent' when t1.parent > 0 then  'chlid' else 'normal' end) AS `STATUSS`,
((select COUNT(t.id) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' )) AS `STORYCNT`,
t1.`TITLE` as `TITLE`
FROM `zt_productplan` t1 
LEFT JOIN `zt_productplan` t11 ON t1.`PARENT` = t11.`ID` 

```
### 数据查询-任务计划（TaskPlan）
#### 说明
任务计划

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BEGIN`,
(case when t1.`begin` = '2030-01-01' then '待定' else t1.`begin` end) AS `BEGINSTR`,
t1.`BRANCH`,
((select count(t.id) FROM zt_bug t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0')) AS `BUGCNT`,
t1.`DELETED`,
t1.`END`,
(case when t1.`end` = '2030-01-01' then '待定' else t1.`end` end) AS `ENDSTR`,
(select sum(t.estimate) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' ) AS `ESTIMATECNT`,
(case when t1.`begin` = '2030-01-01' or t1.`end` = '2030-01-01' then 'on' else '' end) AS `FUTURE`,
t1.`ID`,
(case when t1.`end` > now() then '0' else '1' end) AS `ISEXPIRED`,
t1.`PARENT`,
t11.`TITLE` AS `PARENTNAME`,
t1.`PRODUCT`,
(case when t1.parent = -1 then 'parent' when t1.parent > 0 then  'chlid' else 'normal' end) AS `STATUSS`,
((select COUNT(t.id) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' )) AS `STORYCNT`,
t1.`TITLE`
FROM `zt_productplan` t1 
LEFT JOIN `zt_productplan` t11 ON t1.`PARENT` = t11.`ID` 

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
t1.`BEGIN`,
(case when t1.`begin` = '2030-01-01' then '待定' else t1.`begin` end) AS `BEGINSTR`,
t1.`BRANCH`,
((select count(t.id) FROM zt_bug t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0')) AS `BUGCNT`,
t1.`DELETED`,
t1.`DESC`,
t1.`END`,
(case when t1.`end` = '2030-01-01' then '待定' else t1.`end` end) AS `ENDSTR`,
(select sum(t.estimate) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' ) AS `ESTIMATECNT`,
(case when t1.`begin` = '2030-01-01' or t1.`end` = '2030-01-01' then 'on' else '' end) AS `FUTURE`,
t1.`ID`,
(case when t1.`end` > now() then '0' else '1' end) AS `ISEXPIRED`,
t1.`ORDER`,
t1.`PARENT`,
t11.`TITLE` AS `PARENTNAME`,
t1.`PRODUCT`,
(case when t1.parent = -1 then 'parent' when t1.parent > 0 then  'chlid' else 'normal' end) AS `STATUSS`,
((select COUNT(t.id) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' )) AS `STORYCNT`,
t1.`TITLE`
FROM `zt_productplan` t1 
LEFT JOIN `zt_productplan` t11 ON t1.`PARENT` = t11.`ID` 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [子计划](#数据集合-子计划（ChildPlan）) | ChildPlan | 否 |
| 2 | [CurProductPlan](#数据集合-CurProductPlan（CurProductPlan）) | CurProductPlan | 否 |
| 3 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 4 | [默认查询](#数据集合-默认查询（DefaultParent）) | DefaultParent | 否 |
| 5 | [计划（代码表）](#数据集合-计划（代码表）（PlanCodeList）) | PlanCodeList | 否 |
| 6 | [项目立项](#数据集合-项目立项（ProjectApp）) | ProjectApp | 否 |
| 7 | [项目计划列表](#数据集合-项目计划列表（ProjectPlan）) | ProjectPlan | 否 |
| 8 | [跟计划](#数据集合-跟计划（RootPlan）) | RootPlan | 否 |
| 9 | [任务计划](#数据集合-任务计划（TaskPlan）) | TaskPlan | 否 |

### 数据集合-子计划（ChildPlan）
#### 说明
子计划

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [子计划（ChildPlan）](#数据查询-子计划（ChildPlan）) |
### 数据集合-CurProductPlan（CurProductPlan）
#### 说明
CurProductPlan

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [获取产品计划列表（GetList）](#数据查询-获取产品计划列表（GetList）) |
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
### 数据集合-默认查询（DefaultParent）
#### 说明
默认查询

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [默认查询（DefaultParent）](#数据查询-默认查询（DefaultParent）) |
### 数据集合-计划（代码表）（PlanCodeList）
#### 说明
计划（代码表）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [计划（代码表）（PlanCodeList）](#数据查询-计划（代码表）（PlanCodeList）) |
### 数据集合-项目立项（ProjectApp）
#### 说明
项目立项

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目立项（ProjectApp）](#数据查询-项目立项（ProjectApp）) |
### 数据集合-项目计划列表（ProjectPlan）
#### 说明
项目计划列表

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目计划列表（ProjectPlan）](#数据查询-项目计划列表（ProjectPlan）) |
### 数据集合-跟计划（RootPlan）
#### 说明
跟计划

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [根计划（RootPlan）](#数据查询-根计划（RootPlan）) |
### 数据集合-任务计划（TaskPlan）
#### 说明
任务计划

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [任务计划（TaskPlan）](#数据查询-任务计划（TaskPlan）) |

## 数据导入
无

## 数据导出
| 序号 | 数据导出 | 数据导出名 | 最大导出数量 |
| ---- | ---- | ---- | ---- |
| 1 | [数据导出](#数据导出-数据导出（DataExport）) | DataExport | 1,000 |

### 数据导出-数据导出（DataExport）
#### 说明
数据导出

- 最大导出数
1,000

- 行为持有者
后台及前台

| 序号 | 导出标题 | 属性 | 默认值 |
| ---- | ---- | ---- | ---- |
| 1 | 编号 | [编号（ID）](#属性-编号（ID）) |  |
| 2 | 名称 | [名称（TITLE）](#属性-名称（TITLE）) |  |
| 3 | 开始日期 | [开始日期（BEGINSTR）](#属性-开始日期（BEGINSTR）) |  |
| 4 | 开始日期 | [开始日期（BEGIN）](#属性-开始日期（BEGIN）) |  |
| 5 | 结束日期 | [结束日期（END）](#属性-结束日期（END）) |  |
| 6 | 结束日期 | [结束日期（ENDSTR）](#属性-结束日期（ENDSTR）) |  |
| 7 | 需求数 | [需求数（STORYCNT）](#属性-需求数（STORYCNT）) |  |
| 8 | bug数 | [bug数（BUGCNT）](#属性-bug数（BUGCNT）) |  |
| 9 | 状态 | [状态（STATUSS）](#属性-状态（STATUSS）) |  |

