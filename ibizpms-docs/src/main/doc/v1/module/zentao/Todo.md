
# 实体-待办(ZT_TODO)
## 实体说明
待办

## 所属模块
[基础管理模块](../zentao)

## 实体关系
### 1:N
无
### N:1
无


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [编号](#属性-编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 2 | [所有者](#属性-所有者（ACCOUNT）) | ACCOUNT | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [关闭时间](#属性-关闭时间（CLOSEDDATE）) | CLOSEDDATE | 日期时间型 | 否 | 否 | 是 |
| 4 | [由谁关闭](#属性-由谁关闭（CLOSEDBY）) | CLOSEDBY | 文本，可指定长度 | 否 | 否 | 是 |
| 5 | [类型](#属性-类型（TYPE）) | TYPE | 文本，可指定长度 | 否 | 否 | 是 |
| 6 | [结束](#属性-结束（END）) | END | 单项选择(数值) | 否 | 否 | 是 |
| 7 | [描述](#属性-描述（DESC）) | DESC | 长文本，没有长度限制 | 否 | 否 | 是 |
| 8 | [由谁完成](#属性-由谁完成（FINISHEDBY）) | FINISHEDBY | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [开始](#属性-开始（BEGIN）) | BEGIN | 单项选择(数值) | 否 | 否 | 是 |
| 10 | [关联编号](#属性-关联编号（IDVALUE）) | IDVALUE | 大整型 | 否 | 否 | 是 |
| 11 | [由谁指派](#属性-由谁指派（ASSIGNEDBY）) | ASSIGNEDBY | 文本，可指定长度 | 否 | 否 | 是 |
| 12 | [完成时间](#属性-完成时间（FINISHEDDATE）) | FINISHEDDATE | 日期时间型 | 否 | 否 | 是 |
| 13 | [周期](#属性-周期（CYCLE）) | CYCLE | 整型 | 否 | 否 | 是 |
| 14 | [指派给](#属性-指派给（ASSIGNEDTO）) | ASSIGNEDTO | 文本，可指定长度 | 否 | 否 | 是 |
| 15 | [状态](#属性-状态（STATUS）) | STATUS | 单项选择(文本值) | 否 | 否 | 是 |
| 16 | [待办名称](#属性-待办名称（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 是 |
| 17 | [指派日期](#属性-指派日期（ASSIGNEDDATE）) | ASSIGNEDDATE | 日期型 | 否 | 否 | 是 |
| 18 | [优先级](#属性-优先级（PRI）) | PRI | 整型 | 否 | 否 | 是 |
| 19 | [日期](#属性-日期（DATE）) | DATE | 日期型 | 否 | 否 | 是 |
| 20 | [私人事务](#属性-私人事务（PRIVATE）) | PRIVATE | 多项选择(文本值) | 否 | 否 | 是 |
| 21 | [config](#属性-config（CONFIG）) | CONFIG | 文本，可指定长度 | 否 | 否 | 是 |
| 22 | [间隔天数](#属性-间隔天数（CONFIG_DAY）) | CONFIG_DAY | 整型 | 否 | 否 | 是 |
| 23 | [提前](#属性-提前（CONFIG_BEFOREDAYS）) | CONFIG_BEFOREDAYS | 整型 | 否 | 否 | 是 |
| 24 | [周期设置周几](#属性-周期设置周几（CONFIG_WEEK）) | CONFIG_WEEK | 多项选择(文本值) | 否 | 否 | 是 |
| 25 | [周期设置月](#属性-周期设置月（CONFIG_MONTH）) | CONFIG_MONTH | 多项选择(文本值) | 否 | 否 | 是 |
| 26 | [周期类型](#属性-周期类型（CONFIG_TYPE）) | CONFIG_TYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 27 | [过期时间](#属性-过期时间（CONFIG_END）) | CONFIG_END | 日期型 | 否 | 否 | 是 |
| 28 | [待办名称](#属性-待办名称（BUG）) | BUG | 文本，可指定长度 | 否 | 否 | 是 |
| 29 | [待办名称](#属性-待办名称（TASK）) | TASK | 文本，可指定长度 | 否 | 否 | 是 |
| 30 | [待办名称](#属性-待办名称（STORY）) | STORY | 文本，可指定长度 | 否 | 否 | 是 |
| 31 | [日期](#属性-日期（DATE1）) | DATE1 | 文本，可指定长度 | 否 | 否 | 是 |
| 32 | [待定](#属性-待定（DATE_DISABLE）) | DATE_DISABLE | 文本，可指定长度 | 否 | 否 | 是 |
| 33 | [指派给（选择）](#属性-指派给（选择）（ASSIGNEDTOPK）) | ASSIGNEDTOPK | 文本，可指定长度 | 否 | 否 | 是 |
| 34 | [消息通知用户](#属性-消息通知用户（NOTICEUSERS）) | NOTICEUSERS | 文本，可指定长度 | 否 | 否 | 是 |

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
无

### 属性-所有者（ACCOUNT）
#### 属性说明
所有者

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

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

### 属性-关闭时间（CLOSEDDATE）
#### 属性说明
关闭时间

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
日期时间型

- Java类型
Timestamp

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
yyyy-MM-dd HH:mm:ss

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-由谁关闭（CLOSEDBY）
#### 属性说明
由谁关闭

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

### 属性-类型（TYPE）
#### 属性说明
类型

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
参照数据字典【[待办类型（Type）](../../codelist/Type)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |
| 2 | `!=`或者`<>` |

#### 关系属性
无

### 属性-结束（END）
#### 属性说明
结束

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
单项选择(数值)

- Java类型
Integer

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 1800 |

- 取值范围/公式
参照数据字典【[起止时间选择(下拉列表)（BeginendDropList）](../../codelist/BeginendDropList)】

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
无

### 属性-由谁完成（FINISHEDBY）
#### 属性说明
由谁完成

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
否

- 搜索条件
无

#### 关系属性
无

### 属性-开始（BEGIN）
#### 属性说明
开始

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
单项选择(数值)

- Java类型
Integer

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 600 |

- 取值范围/公式
参照数据字典【[起止时间选择(下拉列表)（BeginendDropList）](../../codelist/BeginendDropList)】

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

### 属性-关联编号（IDVALUE）
#### 属性说明
关联编号

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

### 属性-由谁指派（ASSIGNEDBY）
#### 属性说明
由谁指派

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-完成时间（FINISHEDDATE）
#### 属性说明
完成时间

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
日期时间型

- Java类型
Timestamp

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
yyyy-MM-dd HH:mm:ss

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-周期（CYCLE）
#### 属性说明
周期

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
整型

- Java类型
Integer

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
无

### 属性-指派给（ASSIGNEDTO）
#### 属性说明
指派给

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-状态（STATUS）
#### 属性说明
状态

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
单项选择(文本值)

- Java类型
String

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | wait |

- 取值范围/公式
参照数据字典【[ZT_TODO__STATUS（Todo__status）](../../codelist/Todo__status)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |
| 2 | `!=`或者`<>` |

#### 关系属性
无

### 属性-待办名称（NAME）
#### 属性说明
待办名称

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

### 属性-指派日期（ASSIGNEDDATE）
#### 属性说明
指派日期

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

### 属性-优先级（PRI）
#### 属性说明
优先级

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
整型

- Java类型
Integer

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 0 |

- 取值范围/公式
参照数据字典【[待办优先级（Pri）](../../codelist/Pri)】

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
日期

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
| 1 | `=` |
| 2 | `>=` |
| 3 | `<=` |
| 4 | `!=`或者`<>` |

#### 关系属性
无

### 属性-私人事务（PRIVATE）
#### 属性说明
私人事务

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
多项选择(文本值)

- Java类型
String

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 0 |

- 取值范围/公式
参照数据字典【[私人事务选择（Private_choose）](../../codelist/Private_choose)】

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

### 属性-config（CONFIG）
#### 属性说明
config

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

### 属性-间隔天数（CONFIG_DAY）
#### 属性说明
间隔天数

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

### 属性-提前（CONFIG_BEFOREDAYS）
#### 属性说明
提前

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

### 属性-周期设置周几（CONFIG_WEEK）
#### 属性说明
周期设置周几

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
多项选择(文本值)

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[星期（1～7）（CodeList46）](../../codelist/CodeList46)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-周期设置月（CONFIG_MONTH）
#### 属性说明
周期设置月

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
多项选择(文本值)

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[月（1～31）（CodeList47）](../../codelist/CodeList47)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-周期类型（CONFIG_TYPE）
#### 属性说明
周期类型

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
参照数据字典【[周期类型（CycleType）](../../codelist/CycleType)】

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

### 属性-过期时间（CONFIG_END）
#### 属性说明
过期时间

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

### 属性-待办名称（BUG）
#### 属性说明
待办名称

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

### 属性-待办名称（TASK）
#### 属性说明
待办名称

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

### 属性-待办名称（STORY）
#### 属性说明
待办名称

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

### 属性-日期（DATE1）
#### 属性说明
日期

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
(case when t1.`DATE` = '2030-01-01' then '待定' else t1.`DATE` end)
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-待定（DATE_DISABLE）
#### 属性说明
待定

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

### 属性-指派给（选择）（ASSIGNEDTOPK）
#### 属性说明
指派给（选择）

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
t1.ASSIGNEDTO
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-消息通知用户（NOTICEUSERS）
#### 属性说明
消息通知用户

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


## 业务状态
| 序号 | 状态名称 | [状态](#属性-状态（STATUS）)<br>（STATUS） | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [closed](#业务状态-closed（closed）) | closed |  |  | 否 |
| 2 | [doing](#业务状态-doing（doing）) | doing |  |  | 否 |
| 3 | [done](#业务状态-done（done）) | done |  |  | 否 |
| 4 | [wait](#业务状态-wait（wait）) | wait |  |  | 否 |
### 业务状态-closed（closed）
#### 状态说明
closed

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [状态](#属性-状态（STATUS）)<br>（STATUS） | closed |



- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：允许

| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [删除](#操作权限-删除（DELETE）)<br>（DELETE） |
| 2 | [激活](#操作权限-激活（ACTIVATE）)<br>（ACTIVATE） |
| 3 | [更新](#操作权限-更新（UPDATE）)<br>（UPDATE） |
### 业务状态-doing（doing）
#### 状态说明
doing

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [状态](#属性-状态（STATUS）)<br>（STATUS） | doing |



- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：允许

| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [转BUG](#操作权限-转BUG（TOBUG）)<br>（TOBUG） |
| 2 | [更新](#操作权限-更新（UPDATE）)<br>（UPDATE） |
| 3 | [指派](#操作权限-指派（ASSIGNTO）)<br>（ASSIGNTO） |
| 4 | [完成](#操作权限-完成（FINISH）)<br>（FINISH） |
| 5 | [转任务](#操作权限-转任务（TOTASK）)<br>（TOTASK） |
| 6 | [删除](#操作权限-删除（DELETE）)<br>（DELETE） |
### 业务状态-done（done）
#### 状态说明
done

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [状态](#属性-状态（STATUS）)<br>（STATUS） | done |



- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：允许

| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [删除](#操作权限-删除（DELETE）)<br>（DELETE） |
| 2 | [关闭](#操作权限-关闭（CLOSE）)<br>（CLOSE） |
| 3 | [激活](#操作权限-激活（ACTIVATE）)<br>（ACTIVATE） |
| 4 | [更新](#操作权限-更新（UPDATE）)<br>（UPDATE） |
### 业务状态-wait（wait）
#### 状态说明
wait

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [状态](#属性-状态（STATUS）)<br>（STATUS） | wait |



- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：允许

| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [完成](#操作权限-完成（FINISH）)<br>（FINISH） |
| 2 | [转BUG](#操作权限-转BUG（TOBUG）)<br>（TOBUG） |
| 3 | [删除](#操作权限-删除（DELETE）)<br>（DELETE） |
| 4 | [更新](#操作权限-更新（UPDATE）)<br>（UPDATE） |
| 5 | [指派](#操作权限-指派（ASSIGNTO）)<br>（ASSIGNTO） |
| 6 | [转任务](#操作权限-转任务（TOTASK）)<br>（TOTASK） |

## 实体行为
| 序号 | 行为 | 行为名 | 行为类型 | 行为持有者 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [Create](#实体行为-Create（Create）) | Create | 内置方法 | 后台及前台 |
| 2 | [Update](#实体行为-Update（Update）) | Update | 内置方法 | 后台及前台 |
| 3 | [Remove](#实体行为-Remove（Remove）) | Remove | 内置方法 | 后台及前台 |
| 4 | [Get](#实体行为-Get（Get）) | Get | 内置方法 | 后台及前台 |
| 5 | [GetDraft](#实体行为-GetDraft（GetDraft）) | GetDraft | 内置方法 | 后台及前台 |
| 6 | [Activate](#实体行为-Activate（Activate）) | Activate | 用户自定义 | 后台及前台 |
| 7 | [AssignTo](#实体行为-AssignTo（AssignTo）) | AssignTo | 用户自定义 | 后台及前台 |
| 8 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 9 | [Close](#实体行为-Close（Close）) | Close | 用户自定义 | 后台及前台 |
| 10 | [定时创建周期](#实体行为-定时创建周期（CreateCycle）) | createCycle | 用户自定义 | 后台及前台 |
| 11 | [Finish](#实体行为-Finish（Finish）) | Finish | 用户自定义 | 后台及前台 |
| 12 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |
| 13 | [行为](#实体行为-行为（SendMessage）) | sendMessage | 用户自定义 | 后台及前台 |
| 14 | [发送消息前置处理](#实体行为-发送消息前置处理（SendMsgPreProcess）) | sendMsgPreProcess | 用户自定义 | 后台及前台 |

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
| 1 | [获取待办名称<br>（GetTODOTitle）](#逻辑处理-获取待办名称（GetTODOTitle）) | 执行之后 | 是 |  |
| 2 | [重置开始日期和结束日期<br>（ResetBeginEnd）](#逻辑处理-重置开始日期和结束日期（ResetBeginEnd）) | 执行之后 | 是 |  |
### 实体行为-GetDraft（GetDraft）
#### 说明
GetDraft

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-Activate（Activate）
#### 说明
Activate

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-AssignTo（AssignTo）
#### 说明
AssignTo

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
### 实体行为-Close（Close）
#### 说明
Close

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-定时创建周期（CreateCycle）
#### 说明
定时创建周期

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-Finish（Finish）
#### 说明
Finish

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
### 实体行为-行为（SendMessage）
#### 说明
行为

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-发送消息前置处理（SendMsgPreProcess）
#### 说明
发送消息前置处理

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无

## 逻辑处理
| 序号 | 逻辑 | 逻辑名 | 逻辑持有者 |
| ---- | ---- | ---- | ---- |
| 1 | [获取待办名称](#逻辑处理-获取待办名称（GetTODOTitle）) | GetTODOTitle | 后台 |
| 2 | [重置开始日期和结束日期](#逻辑处理-重置开始日期和结束日期（ResetBeginEnd）) | ResetBeginEnd | 后台 |

### 逻辑处理-获取待办名称（GetTODOTitle）
#### 说明
获取待办名称

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 获取待办的标题 | Rawsqlcall1 | 直接SQL调用 |
| 2 | 开始 | Begin | 开始 |
### 逻辑处理-重置开始日期和结束日期（ResetBeginEnd）
#### 说明
重置开始日期和结束日期

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 获取开始日期 | Rawsqlcall1 | 直接SQL调用 |
| 2 | 开始 | Begin | 开始 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [待办名称（NAME）](#属性-待办名称（NAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [所有者（ACCOUNT）](#属性-所有者（ACCOUNT）) | `=` |
| 2 | [类型（TYPE）](#属性-类型（TYPE）) | `=` |
| 3 | [类型（TYPE）](#属性-类型（TYPE）) | `!=`或者`<>` |
| 4 | [结束（END）](#属性-结束（END）) | `=` |
| 5 | [开始（BEGIN）](#属性-开始（BEGIN）) | `=` |
| 6 | [周期（CYCLE）](#属性-周期（CYCLE）) | `=` |
| 7 | [状态（STATUS）](#属性-状态（STATUS）) | `=` |
| 8 | [状态（STATUS）](#属性-状态（STATUS）) | `!=`或者`<>` |
| 9 | [待办名称（NAME）](#属性-待办名称（NAME）) | `%like%` |
| 10 | [日期（DATE）](#属性-日期（DATE）) | `=` |
| 11 | [日期（DATE）](#属性-日期（DATE）) | `>=` |
| 12 | [日期（DATE）](#属性-日期（DATE）) | `<=` |
| 13 | [日期（DATE）](#属性-日期（DATE）) | `!=`或者`<>` |
| 14 | [私人事务（PRIVATE）](#属性-私人事务（PRIVATE）) | `=` |
| 15 | [周期类型（CONFIG_TYPE）](#属性-周期类型（CONFIG_TYPE）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 2 | [我的待办](#数据查询-我的待办（MyTodo）) | MyTodo | 否 |
| 3 | [我的待办](#数据查询-我的待办（MyTodoPc）) | MyTodoPc | 否 |
| 4 | [MyUpcoming](#数据查询-MyUpcoming（MyUpcoming）) | MyUpcoming | 否 |
| 5 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
t1.`ACCOUNT`,
t1.`ASSIGNEDBY`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
case when t1.`BEGIN` = 2400 then null else t1.`begin` end as `begin`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CONFIG`,
t1.`CYCLE`,
t1.`DATE` as `DATE`,
(case when t1.`DATE` = '2030-01-01' then '待定' else t1.`DATE` end) AS `DATE1`,
case when t1.`END` = 2400 then null else t1.`END` end as `END`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`ID`,
t1.`IDVALUE`,
case when t1.type = 'bug' then t11.`TITLE` when t1.type = 'task' then t21.`name` when t1.type = 'story' then t31.`TITLE` else t1.`NAME` end `name`,
t1.`PRI`,
t1.`PRIVATE`,
t1.`STATUS`,
t1.`TYPE`
FROM `zt_todo` t1 
LEFT JOIN zt_bug t11 on t11.id = t1.idvalue
LEFT JOIN zt_task t21 on t21.id = t1.idvalue
LEFT JOIN zt_story t31 on t31.id = t1.idvalue
```
### 数据查询-我的待办（MyTodo）
#### 说明
我的待办

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACCOUNT`,
t1.`ASSIGNEDBY`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BEGIN`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CONFIG`,
t1.`CYCLE`,
t1.`DATE`,
(case when t1.`DATE` = '2030-01-01' then '待定' else t1.`DATE` end) AS `DATE1`,
t1.`END`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`ID`,
t1.`IDVALUE`,
t1.`NAME`,
t1.`PRI`,
t1.`PRIVATE`,
t1.`STATUS`,
t1.`TYPE`
FROM `zt_todo` t1 

```
### 数据查询-我的待办（MyTodoPc）
#### 说明
我的待办

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACCOUNT`,
t1.`ASSIGNEDBY`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BEGIN`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CONFIG`,
t1.`CYCLE`,
t1.`DATE`,
(case when t1.`DATE` = '2030-01-01' then '待定' else t1.`DATE` end) AS `DATE1`,
t1.`END`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`ID`,
t1.`IDVALUE`,
t1.`NAME`,
t1.`PRI`,
t1.`PRIVATE`,
t1.`STATUS`,
t1.`TYPE`
FROM `zt_todo` t1 

```
### 数据查询-MyUpcoming（MyUpcoming）
#### 说明
MyUpcoming

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACCOUNT`,
t1.`ASSIGNEDBY`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
case when t1.`BEGIN` = 2400 then null else t1.`begin` end as `begin`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CONFIG`,
t1.`CYCLE`,
t1.`DATE` as `DATE`,
DATE_FORMAT(t1.`date`,'%c月%d日') AS `DATE1`,
case when t1.`END` = 2400 then null else t1.`END` end as `END`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`ID`,
t1.`IDVALUE`,
case when t1.type = 'bug' then t11.`TITLE` when t1.type = 'task' then t21.`name` when t1.type = 'story' then t31.`TITLE` else t1.`NAME` end `name`,
t1.`PRI`,
t1.`PRIVATE`,
t1.`STATUS`,
t1.`TYPE`
FROM `zt_todo` t1 
LEFT JOIN zt_bug t11 on t11.id = t1.idvalue
LEFT JOIN zt_task t21 on t21.id = t1.idvalue
LEFT JOIN zt_story t31 on t31.id = t1.idvalue
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
t1.`ASSIGNEDBY`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.ASSIGNEDTO AS `ASSIGNEDTOPK`,
t1.`BEGIN`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CONFIG`,
t1.`CYCLE`,
t1.`DATE`,
(case when t1.`DATE` = '2030-01-01' then '待定' else t1.`DATE` end) AS `DATE1`,
t1.`DESC`,
t1.`END`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`ID`,
t1.`IDVALUE`,
t1.`NAME`,
t1.`PRI`,
t1.`PRIVATE`,
t1.`STATUS`,
t1.`TYPE`
FROM `zt_todo` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 2 | [我的待办](#数据集合-我的待办（MyTodo）) | MyTodo | 否 |
| 3 | [我的待办](#数据集合-我的待办（MyTodoPc）) | MyTodoPc | 否 |
| 4 | [MyUpcoming](#数据集合-MyUpcoming（MyUpcoming）) | MyUpcoming | 否 |

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
### 数据集合-我的待办（MyTodo）
#### 说明
我的待办

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我的待办（MyTodo）](#数据查询-我的待办（MyTodo）) |
### 数据集合-我的待办（MyTodoPc）
#### 说明
我的待办

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我的待办（MyTodoPc）](#数据查询-我的待办（MyTodoPc）) |
### 数据集合-MyUpcoming（MyUpcoming）
#### 说明
MyUpcoming

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [MyUpcoming（MyUpcoming）](#数据查询-MyUpcoming（MyUpcoming）) |

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
| 2 | 日期 | [日期（DATE1）](#属性-日期（DATE1）) |  |
| 3 | 类型 | [类型（TYPE）](#属性-类型（TYPE）) |  |
| 4 | 优先级 | [优先级（PRI）](#属性-优先级（PRI）) |  |
| 5 | 待办名称 | [待办名称（NAME）](#属性-待办名称（NAME）) |  |
| 6 | 开始 | [开始（BEGIN）](#属性-开始（BEGIN）) |  |
| 7 | 结束 | [结束（END）](#属性-结束（END）) |  |
| 8 | 状态 | [状态（STATUS）](#属性-状态（STATUS）) |  |

