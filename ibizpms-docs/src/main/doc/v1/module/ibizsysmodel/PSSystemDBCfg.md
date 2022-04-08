
# 实体-系统数据库(PSSYSTEMDBCFG)
## 实体说明
系统数据库

## 所属模块
[iBiz系统模型](../ibizsysmodel)

## 实体关系
### 1:N
无
### N:1
无


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [系统数据库名称](#属性-系统数据库名称（PSSYSTEMDBCFGNAME）) | PSSYSTEMDBCFGNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [系统数据库标识](#属性-系统数据库标识（PSSYSTEMDBCFGID）) | PSSYSTEMDBCFGID | 全局唯一标识，文本类型，用户不可见 | 是 | 否 | 否 |
| 3 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 4 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | 日期时间型 | 否 | 否 | 否 |
| 5 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 6 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | 日期时间型 | 否 | 否 | 否 |
| 7 | [附加模式名称](#属性-附加模式名称（APPENDSCHEMA）) | APPENDSCHEMA | 是否逻辑 | 否 | 否 | 是 |
| 8 | [数据库模式名称](#属性-数据库模式名称（DBSCHEMANAME）) | DBSCHEMANAME | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [默认数据源](#属性-默认数据源（DEFAULTFLAG）) | DEFAULTFLAG | 是否逻辑 | 否 | 否 | 是 |
| 10 | [支持Web管理](#属性-支持Web管理（ENABLEWEBTOOL）) | ENABLEWEBTOOL | 是否逻辑 | 否 | 否 | 是 |
| 11 | [备注](#属性-备注（MEMO）) | MEMO | 长文本，长度1000 | 否 | 否 | 是 |
| 12 | [无数据库模式](#属性-无数据库模式（NODBINSTMODE）) | NODBINSTMODE | 是否逻辑 | 否 | 否 | 是 |
| 13 | [空值排序](#属性-空值排序（NULLVALORDER）) | NULLVALORDER | 单项选择(文本值) | 否 | 否 | 是 |
| 14 | [发布模型注释](#属性-发布模型注释（PUBCOMMENTFLAG）) | PUBCOMMENTFLAG | 是否逻辑 | 否 | 否 | 是 |
| 15 | [对象名称转换](#属性-对象名称转换（OBJNAMECASE）) | OBJNAMECASE | 单项选择(文本值) | 否 | 否 | 是 |
| 16 | [发布外键](#属性-发布外键（PUBFKEYFLAG）) | PUBFKEYFLAG | 是否逻辑 | 否 | 否 | 是 |
| 17 | [发布数据库模型](#属性-发布数据库模型（PUBDBMODELFLAG）) | PUBDBMODELFLAG | 是否逻辑 | 否 | 否 | 是 |
| 18 | [资源信息](#属性-资源信息（RESINFO）) | RESINFO | 长文本，长度1000 | 否 | 否 | 是 |
| 19 | [发布索引](#属性-发布索引（PUBINDEXFLAG）) | PUBINDEXFLAG | 是否逻辑 | 否 | 否 | 是 |
| 20 | [发布视图](#属性-发布视图（PUBVIEWFLAG）) | PUBVIEWFLAG | 是否逻辑 | 否 | 否 | 是 |
| 21 | [资源状态](#属性-资源状态（RESSTATE）) | RESSTATE | 单项选择(数值) | 否 | 否 | 是 |
| 22 | [资源就绪时间](#属性-资源就绪时间（RESREADYTIME）) | RESREADYTIME | 日期时间型 | 否 | 否 | 是 |
| 23 | [表空间2名称](#属性-表空间2名称（TABSPACE2）) | TABSPACE2 | 文本，可指定长度 | 否 | 否 | 是 |
| 24 | [默认表空间名称](#属性-默认表空间名称（TABSPACE）) | TABSPACE | 文本，可指定长度 | 否 | 否 | 是 |
| 25 | [表空间3名称](#属性-表空间3名称（TABSPACE3）) | TABSPACE3 | 文本，可指定长度 | 否 | 否 | 是 |
| 26 | [表空间4名称](#属性-表空间4名称（TABSPACE4）) | TABSPACE4 | 文本，可指定长度 | 否 | 否 | 是 |
| 27 | [用户分类](#属性-用户分类（USERCAT）) | USERCAT | 单项选择(文本值) | 否 | 否 | 是 |
| 28 | [用户标记](#属性-用户标记（USERTAG）) | USERTAG | 文本，可指定长度 | 否 | 否 | 是 |
| 29 | [自定义参数](#属性-自定义参数（USERPARAMS）) | USERPARAMS | 文本，可指定长度 | 否 | 否 | 是 |
| 30 | [用户标记2](#属性-用户标记2（USERTAG2）) | USERTAG2 | 文本，可指定长度 | 否 | 否 | 是 |
| 31 | [用户标记3](#属性-用户标记3（USERTAG3）) | USERTAG3 | 文本，可指定长度 | 否 | 否 | 是 |
| 32 | [用户标记4](#属性-用户标记4（USERTAG4）) | USERTAG4 | 文本，可指定长度 | 否 | 否 | 是 |
| 33 | [系统](#属性-系统（PSSYSTEMID）) | PSSYSTEMID | 文本，可指定长度 | 否 | 否 | 是 |
| 34 | [系统](#属性-系统（PSSYSTEMNAME）) | PSSYSTEMNAME | 文本，可指定长度 | 否 | 否 | 是 |

### 属性-系统数据库名称（PSSYSTEMDBCFGNAME）
#### 属性说明
系统数据库名称

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

### 属性-系统数据库标识（PSSYSTEMDBCFGID）
#### 属性说明
系统数据库标识

- 是否是主键
是

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
全局唯一标识，文本类型，用户不可见

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
否

- 搜索条件
无

#### 关系属性
无

### 属性-更新人（UPDATEMAN）
#### 属性说明
更新人

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
参照数据字典【[云系统操作者（SysOperator）](../../codelist/SysOperator)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-建立时间（CREATEDATE）
#### 属性说明
建立时间

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
日期时间型

- Java类型
Timestamp

- 是否允许为空
否

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

### 属性-建立人（CREATEMAN）
#### 属性说明
建立人

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
参照数据字典【[云系统操作者（SysOperator）](../../codelist/SysOperator)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-更新时间（UPDATEDATE）
#### 属性说明
更新时间

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
日期时间型

- Java类型
Timestamp

- 是否允许为空
否

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

### 属性-附加模式名称（APPENDSCHEMA）
#### 属性说明
附加模式名称

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
是否逻辑

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-数据库模式名称（DBSCHEMANAME）
#### 属性说明
数据库模式名称

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

### 属性-默认数据源（DEFAULTFLAG）
#### 属性说明
默认数据源

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
是否逻辑

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
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-支持Web管理（ENABLEWEBTOOL）
#### 属性说明
支持Web管理

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
是否逻辑

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
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-备注（MEMO）
#### 属性说明
备注

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
长文本，长度1000

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

### 属性-无数据库模式（NODBINSTMODE）
#### 属性说明
无数据库模式

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
是否逻辑

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-空值排序（NULLVALORDER）
#### 属性说明
空值排序

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

### 属性-发布模型注释（PUBCOMMENTFLAG）
#### 属性说明
发布模型注释

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
是否逻辑

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-对象名称转换（OBJNAMECASE）
#### 属性说明
对象名称转换

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

### 属性-发布外键（PUBFKEYFLAG）
#### 属性说明
发布外键

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
是否逻辑

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-发布数据库模型（PUBDBMODELFLAG）
#### 属性说明
发布数据库模型

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
是否逻辑

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-资源信息（RESINFO）
#### 属性说明
资源信息

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
长文本，长度1000

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

### 属性-发布索引（PUBINDEXFLAG）
#### 属性说明
发布索引

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
是否逻辑

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-发布视图（PUBVIEWFLAG）
#### 属性说明
发布视图

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
是否逻辑

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-资源状态（RESSTATE）
#### 属性说明
资源状态

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

### 属性-资源就绪时间（RESREADYTIME）
#### 属性说明
资源就绪时间

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

### 属性-表空间2名称（TABSPACE2）
#### 属性说明
表空间2名称

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

### 属性-默认表空间名称（TABSPACE）
#### 属性说明
默认表空间名称

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

### 属性-表空间3名称（TABSPACE3）
#### 属性说明
表空间3名称

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

### 属性-表空间4名称（TABSPACE4）
#### 属性说明
表空间4名称

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

### 属性-用户分类（USERCAT）
#### 属性说明
用户分类

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

### 属性-用户标记（USERTAG）
#### 属性说明
用户标记

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

### 属性-自定义参数（USERPARAMS）
#### 属性说明
自定义参数

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

### 属性-用户标记2（USERTAG2）
#### 属性说明
用户标记2

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

### 属性-用户标记3（USERTAG3）
#### 属性说明
用户标记3

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

### 属性-用户标记4（USERTAG4）
#### 属性说明
用户标记4

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

### 属性-系统（PSSYSTEMID）
#### 属性说明
系统

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

### 属性-系统（PSSYSTEMNAME）
#### 属性说明
系统

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
| 1 | [系统数据库名称（PSSYSTEMDBCFGNAME）](#属性-系统数据库名称（PSSYSTEMDBCFGNAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [系统数据库名称（PSSYSTEMDBCFGNAME）](#属性-系统数据库名称（PSSYSTEMDBCFGNAME）) | `%like%` |
| 2 | [空值排序（NULLVALORDER）](#属性-空值排序（NULLVALORDER）) | `=` |
| 3 | [对象名称转换（OBJNAMECASE）](#属性-对象名称转换（OBJNAMECASE）) | `=` |
| 4 | [资源状态（RESSTATE）](#属性-资源状态（RESSTATE）) | `=` |
| 5 | [用户分类（USERCAT）](#属性-用户分类（USERCAT）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [版本](#数据查询-版本（Build）) | Build | 否 |
| 2 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 3 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-版本（Build）
#### 说明
版本

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`APPENDSCHEMA`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DBSCHEMANAME`,
t1.`DEFAULTFLAG`,
t1.`ENABLEWEBTOOL`,
t1.`MEMO`,
t1.`NODBINSTMODE`,
t1.`NULLVALORDER`,
t1.`OBJNAMECASE`,
t1.`PSSYSTEMDBCFGID`,
t1.`PSSYSTEMDBCFGNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`PUBCOMMENTFLAG`,
t1.`PUBDBMODELFLAG`,
t1.`PUBFKEYFLAG`,
t1.`PUBINDEXFLAG`,
t1.`PUBVIEWFLAG`,
t1.`RESINFO`,
t1.`RESREADYTIME`,
t1.`RESSTATE`,
t1.`TABSPACE`,
t1.`TABSPACE2`,
t1.`TABSPACE3`,
t1.`TABSPACE4`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERPARAMS`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`
FROM `T_PSSYSTEMDBCFG` t1 

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
t1.`APPENDSCHEMA`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DBSCHEMANAME`,
t1.`DEFAULTFLAG`,
t1.`ENABLEWEBTOOL`,
t1.`MEMO`,
t1.`NODBINSTMODE`,
t1.`NULLVALORDER`,
t1.`OBJNAMECASE`,
t1.`PSSYSTEMDBCFGID`,
t1.`PSSYSTEMDBCFGNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`PUBCOMMENTFLAG`,
t1.`PUBDBMODELFLAG`,
t1.`PUBFKEYFLAG`,
t1.`PUBINDEXFLAG`,
t1.`PUBVIEWFLAG`,
t1.`RESINFO`,
t1.`RESREADYTIME`,
t1.`RESSTATE`,
t1.`TABSPACE`,
t1.`TABSPACE2`,
t1.`TABSPACE3`,
t1.`TABSPACE4`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERPARAMS`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`
FROM `T_PSSYSTEMDBCFG` t1 

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
t1.`APPENDSCHEMA`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DBSCHEMANAME`,
t1.`DEFAULTFLAG`,
t1.`ENABLEWEBTOOL`,
t1.`MEMO`,
t1.`NODBINSTMODE`,
t1.`NULLVALORDER`,
t1.`OBJNAMECASE`,
t1.`PSSYSTEMDBCFGID`,
t1.`PSSYSTEMDBCFGNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`PUBCOMMENTFLAG`,
t1.`PUBDBMODELFLAG`,
t1.`PUBFKEYFLAG`,
t1.`PUBINDEXFLAG`,
t1.`PUBVIEWFLAG`,
t1.`RESINFO`,
t1.`RESREADYTIME`,
t1.`RESSTATE`,
t1.`TABSPACE`,
t1.`TABSPACE2`,
t1.`TABSPACE3`,
t1.`TABSPACE4`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERPARAMS`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`
FROM `T_PSSYSTEMDBCFG` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [版本](#数据集合-版本（Build）) | Build | 否 |
| 2 | [数据集](#数据集合-数据集（Default）) | Default | 是 |

### 数据集合-版本（Build）
#### 说明
版本

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [版本（Build）](#数据查询-版本（Build）) |
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

