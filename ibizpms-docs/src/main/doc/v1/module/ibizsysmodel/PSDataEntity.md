
# 实体-实体(PSDATAENTITY)
## 实体说明
实体

## 所属模块
[iBiz系统模型](../ibizsysmodel)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) | （默认） |
| 2 | [外部接口实体（PSSUBSYSSADE）](../ibizsysmodel/PSSubSysSADE) | （默认） |
| 3 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) | （默认） |
| 4 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [实体名称](#属性-实体名称（PSDATAENTITYNAME）) | PSDATAENTITYNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [实体标识](#属性-实体标识（PSDATAENTITYID）) | PSDATAENTITYID | 全局唯一标识，文本类型，用户不可见 | 是 | 否 | 否 |
| 3 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | 日期时间型 | 否 | 否 | 否 |
| 4 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 5 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 6 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | 日期时间型 | 否 | 否 | 否 |
| 7 | [虚拟实体](#属性-虚拟实体（VIRTUALFLAG）) | VIRTUALFLAG | 单项选择(数值) | 否 | 否 | 是 |
| 8 | [虚拟主键分隔符](#属性-虚拟主键分隔符（VKEYSEPARATOR）) | VKEYSEPARATOR | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [访问控制体系](#属性-访问控制体系（ACCCTRLARCH）) | ACCCTRLARCH | 单项选择(数值) | 否 | 否 | 是 |
| 10 | [审计模式](#属性-审计模式（AUDITMODE）) | AUDITMODE | 单项选择(数值) | 否 | 否 | 是 |
| 11 | [预置业务功能模式](#属性-预置业务功能模式（BIZTAG）) | BIZTAG | 单项选择(文本值) | 否 | 否 | 是 |
| 12 | [基类参数](#属性-基类参数（BASECLSPARAMS）) | BASECLSPARAMS | 长文本，长度1000 | 否 | 否 | 是 |
| 13 | [代码名称](#属性-代码名称（CODENAME）) | CODENAME | 文本，可指定长度 | 否 | 否 | 是 |
| 14 | [显示颜色](#属性-显示颜色（COLOR）) | COLOR | 文本，可指定长度 | 否 | 否 | 是 |
| 15 | [数据访问控制方式](#属性-数据访问控制方式（DATAACCMODE）) | DATAACCMODE | 单项选择(数值) | 否 | 否 | 是 |
| 16 | [数据导入导出能力](#属性-数据导入导出能力（DATAIMPEXPFLAG）) | DATAIMPEXPFLAG | 单项选择(数值) | 否 | 否 | 是 |
| 17 | [数据变更日志类型](#属性-数据变更日志类型（DATACHGLOGMODE）) | DATACHGLOGMODE | 单项选择(数值) | 否 | 否 | 是 |
| 18 | [数据库表空间](#属性-数据库表空间（DBTABSPACE）) | DBTABSPACE | 单项选择(文本值) | 否 | 否 | 是 |
| 19 | [实体类别](#属性-实体类别（DECAT）) | DECAT | 单项选择(文本值) | 否 | 否 | 是 |
| 20 | [全局禁止子系统导入](#属性-全局禁止子系统导入（DELOCKFLAG）) | DELOCKFLAG | 是否逻辑 | 否 | 否 | 是 |
| 21 | [实体编号](#属性-实体编号（DESN）) | DESN | 文本，可指定长度 | 否 | 否 | 是 |
| 22 | [实体标记2](#属性-实体标记2（DETAG2）) | DETAG2 | 文本，可指定长度 | 否 | 否 | 是 |
| 23 | [实体类型](#属性-实体类型（DETYPE）) | DETYPE | 单项选择(数值) | 否 | 否 | 否 |
| 24 | [实体标记](#属性-实体标记（DETAG）) | DETAG | 文本，可指定长度 | 否 | 否 | 是 |
| 25 | [扩展模式](#属性-扩展模式（DYNAMICMODE）) | DYNAMICMODE | 单项选择(数值) | 否 | 否 | 是 |
| 26 | [默认数据源](#属性-默认数据源（DSLINK）) | DSLINK | 单项选择(文本值) | 否 | 否 | 是 |
| 27 | [启用数据审计](#属性-启用数据审计（ENABLEAUDIT）) | ENABLEAUDIT | 是否逻辑 | 否 | 否 | 是 |
| 28 | [动态模型类型](#属性-动态模型类型（DYNAMODELFLAG）) | DYNAMODELFLAG | 单项选择(数值) | 否 | 否 | 是 |
| 29 | [启用数据版本](#属性-启用数据版本（ENABLEDATAVER）) | ENABLEDATAVER | 是否逻辑 | 否 | 否 | 是 |
| 30 | [启用DA日志](#属性-启用DA日志（ENABLEDALOG）) | ENABLEDALOG | 是否逻辑 | 否 | 否 | 是 |
| 31 | [支持获取结果集](#属性-支持获取结果集（ENABLEDEDATASET）) | ENABLEDEDATASET | 是否逻辑 | 否 | 否 | 是 |
| 32 | [启用数据对象缓存](#属性-启用数据对象缓存（ENABLEENTITYCACHE）) | ENABLEENTITYCACHE | 是否逻辑 | 否 | 否 | 是 |
| 33 | [支持实体行为](#属性-支持实体行为（ENABLEDEACTION）) | ENABLEDEACTION | 是否逻辑 | 否 | 否 | 是 |
| 34 | [支持多数据源](#属性-支持多数据源（ENABLEMULTIDS）) | ENABLEMULTIDS | 是否逻辑 | 否 | 否 | 是 |
| 35 | [支持移动端](#属性-支持移动端（ENABLEMOB）) | ENABLEMOB | 是否逻辑 | 否 | 否 | 是 |
| 36 | [启用操作者名称模型](#属性-启用操作者名称模型（ENABLEOPNAMEMODEL）) | ENABLEOPNAMEMODEL | 是否逻辑 | 否 | 否 | 是 |
| 37 | [启用组织模型](#属性-启用组织模型（ENABLEORGMODEL）) | ENABLEORGMODEL | 是否逻辑 | 否 | 否 | 是 |
| 38 | [启用多表单](#属性-启用多表单（ENAMULTIFORM）) | ENAMULTIFORM | 是否逻辑 | 否 | 否 | 是 |
| 39 | [启用工作流模型](#属性-启用工作流模型（ENABLEWFMODEL）) | ENABLEWFMODEL | 是否逻辑 | 否 | 否 | 是 |
| 40 | [支持简单查询](#属性-支持简单查询（ENABLESELECT）) | ENABLESELECT | 是否逻辑 | 否 | 否 | 是 |
| 41 | [启用临时数据](#属性-启用临时数据（ENATEMPDATA）) | ENATEMPDATA | 单项选择(数值) | 否 | 否 | 是 |
| 42 | [数据对象缓存时长](#属性-数据对象缓存时长（ENTITYCACHETIMEOUT）) | ENTITYCACHETIMEOUT | 整型 | 否 | 否 | 是 |
| 43 | [现有数据结构](#属性-现有数据结构（EXISTINGMODEL）) | EXISTINGMODEL | 是否逻辑 | 否 | 否 | 是 |
| 44 | [用户表](#属性-用户表（EXTABLENAME）) | EXTABLENAME | 文本，可指定长度 | 否 | 否 | 是 |
| 45 | [模型锁模式](#属性-模型锁模式（LOCKFLAG）) | LOCKFLAG | 单项选择(数值) | 否 | 否 | 是 |
| 46 | [索引类型](#属性-索引类型（INDEXDETYPE）) | INDEXDETYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 47 | [主键规则](#属性-主键规则（KEYRULE）) | KEYRULE | 文本，可指定长度 | 否 | 否 | 是 |
| 48 | [逻辑无效值](#属性-逻辑无效值（LOGICINVALIDVALUE）) | LOGICINVALIDVALUE | 文本，可指定长度 | 否 | 否 | 是 |
| 49 | [中文名称](#属性-中文名称（LOGICNAME）) | LOGICNAME | 文本，可指定长度 | 否 | 否 | 否 |
| 50 | [启用逻辑有效](#属性-启用逻辑有效（LOGICVALID）) | LOGICVALID | 是否逻辑 | 否 | 否 | 是 |
| 51 | [逻辑有效值](#属性-逻辑有效值（LOGICVALIDVALUE）) | LOGICVALIDVALUE | 文本，可指定长度 | 否 | 否 | 是 |
| 52 | [模型导入导出能力](#属性-模型导入导出能力（MODELIMPEXPFLAG）) | MODELIMPEXPFLAG | 单项选择(数值) | 否 | 否 | 是 |
| 53 | [备注](#属性-备注（MEMO）) | MEMO | 长文本，长度1000 | 否 | 否 | 是 |
| 54 | [最大缓存数据对象数](#属性-最大缓存数据对象数（MAXENTITYCACHECNT）) | MAXENTITYCACHECNT | 整型 | 否 | 否 | 是 |
| 55 | [无视图模式](#属性-无视图模式（NOVIEWMODE）) | NOVIEWMODE | 是否逻辑 | 否 | 否 | 是 |
| 56 | [模型状态](#属性-模型状态（MODELSTATE）) | MODELSTATE | 多项选择(数值) | 否 | 否 | 是 |
| 57 | [SaaS构型](#属性-SaaS构型（SAASMODE）) | SAASMODE | 单项选择(数值) | 否 | 否 | 是 |
| 58 | [删除模式](#属性-删除模式（REMOVEFLAG）) | REMOVEFLAG | 单项选择(数值) | 否 | 否 | 是 |
| 59 | [服务API模式](#属性-服务API模式（SERVICEAPIFLAG）) | SERVICEAPIFLAG | 单项选择(数值) | 否 | 否 | 是 |
| 60 | [服务代码名称](#属性-服务代码名称（SERVICECODENAME）) | SERVICECODENAME | 文本，可指定长度 | 否 | 否 | 是 |
| 61 | [存储模式](#属性-存储模式（STORAGEMODE）) | STORAGEMODE | 单项选择(数值) | 否 | 否 | 是 |
| 62 | [子系统实体](#属性-子系统实体（SUBSYSDE）) | SUBSYSDE | 是否逻辑 | 否 | 否 | 是 |
| 63 | [默认发布行为服务](#属性-默认发布行为服务（SVRPUBMODE）) | SVRPUBMODE | 是否逻辑 | 否 | 否 | 是 |
| 64 | [系统实体](#属性-系统实体（SYSTEMFLAG）) | SYSTEMFLAG | 是否逻辑 | 否 | 否 | 否 |
| 65 | [主表名称](#属性-主表名称（TABLENAME）) | TABLENAME | 文本，可指定长度 | 否 | 否 | 是 |
| 66 | [默认测试单元](#属性-默认测试单元（TESTCASEFLAG）) | TESTCASEFLAG | 是否逻辑 | 否 | 否 | 是 |
| 67 | [TODO](#属性-TODO（TODOTASK）) | TODOTASK | 长文本，长度1000 | 否 | 否 | 是 |
| 68 | [自定义参数](#属性-自定义参数（USERPARAMS）) | USERPARAMS | 文本，可指定长度 | 否 | 否 | 是 |
| 69 | [默认用户界面行为](#属性-默认用户界面行为（USERACTION）) | USERACTION | 多项选择(数值) | 否 | 否 | 是 |
| 70 | [用户分类](#属性-用户分类（USERCAT）) | USERCAT | 单项选择(文本值) | 否 | 否 | 是 |
| 71 | [用户标记2](#属性-用户标记2（USERTAG2）) | USERTAG2 | 文本，可指定长度 | 否 | 否 | 是 |
| 72 | [用户标记](#属性-用户标记（USERTAG）) | USERTAG | 文本，可指定长度 | 否 | 否 | 是 |
| 73 | [用户标记3](#属性-用户标记3（USERTAG3）) | USERTAG3 | 文本，可指定长度 | 否 | 否 | 是 |
| 74 | [用户标记4](#属性-用户标记4（USERTAG4）) | USERTAG4 | 文本，可指定长度 | 否 | 否 | 是 |
| 75 | [是否启用](#属性-是否启用（VALIDFLAG）) | VALIDFLAG | 是否逻辑 | 否 | 否 | 是 |
| 76 | [视图名称](#属性-视图名称（VIEWNAME）) | VIEWNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 77 | [多视图级别](#属性-多视图级别（VIEWLEVEL）) | VIEWLEVEL | 单项选择(数值) | 否 | 否 | 是 |
| 78 | [级别3视图名称](#属性-级别3视图名称（VIEWNAME3）) | VIEWNAME3 | 文本，可指定长度 | 否 | 否 | 是 |
| 79 | [级别2视图名称](#属性-级别2视图名称（VIEWNAME2）) | VIEWNAME2 | 文本，可指定长度 | 否 | 否 | 是 |
| 80 | [级别4视图名称](#属性-级别4视图名称（VIEWNAME4）) | VIEWNAME4 | 文本，可指定长度 | 否 | 否 | 是 |
| 81 | [系统](#属性-系统（PSSYSTEMID）) | PSSYSTEMID | 文本，可指定长度 | 否 | 否 | 是 |
| 82 | [系统](#属性-系统（PSSYSTEMNAME）) | PSSYSTEMNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 83 | [模块颜色](#属性-模块颜色（MODCOLOR）) | MODCOLOR | 外键值附加数据 | 否 | 是 | 是 |
| 84 | [系统模块](#属性-系统模块（PSMODULENAME）) | PSMODULENAME | 外键值文本 | 否 | 是 | 否 |
| 85 | [系统模块](#属性-系统模块（PSMODULEID）) | PSMODULEID | 外键值 | 否 | 是 | 否 |
| 86 | [子系统实体](#属性-子系统实体（SUBSYSMODULE）) | SUBSYSMODULE | 外键值附加数据 | 否 | 是 | 是 |
| 87 | [子系统接口实体](#属性-子系统接口实体（PSSUBSYSSADEID）) | PSSUBSYSSADEID | 外键值 | 否 | 是 | 是 |
| 88 | [子系统接口实体](#属性-子系统接口实体（PSSUBSYSSADENAME）) | PSSUBSYSSADENAME | 外键值文本 | 否 | 是 | 是 |
| 89 | [子系统服务接口](#属性-子系统服务接口（PSSUBSYSSERVICEAPIID）) | PSSUBSYSSERVICEAPIID | 外键值 | 否 | 是 | 是 |
| 90 | [子系统服务接口](#属性-子系统服务接口（PSSUBSYSSERVICEAPINAME）) | PSSUBSYSSERVICEAPINAME | 外键值文本 | 否 | 是 | 是 |
| 91 | [系统设计需求](#属性-系统设计需求（PSSYSREQITEMNAME）) | PSSYSREQITEMNAME | 外键值文本 | 否 | 是 | 是 |
| 92 | [系统设计需求](#属性-系统设计需求（PSSYSREQITEMID）) | PSSYSREQITEMID | 外键值 | 否 | 是 | 是 |

### 属性-实体名称（PSDATAENTITYNAME）
#### 属性说明
实体名称

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-实体标识（PSDATAENTITYID）
#### 属性说明
实体标识

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-虚拟实体（VIRTUALFLAG）
#### 属性说明
虚拟实体

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
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-虚拟主键分隔符（VKEYSEPARATOR）
#### 属性说明
虚拟主键分隔符

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-访问控制体系（ACCCTRLARCH）
#### 属性说明
访问控制体系

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-审计模式（AUDITMODE）
#### 属性说明
审计模式

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-预置业务功能模式（BIZTAG）
#### 属性说明
预置业务功能模式

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-基类参数（BASECLSPARAMS）
#### 属性说明
基类参数

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-代码名称（CODENAME）
#### 属性说明
代码名称

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-显示颜色（COLOR）
#### 属性说明
显示颜色

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-数据访问控制方式（DATAACCMODE）
#### 属性说明
数据访问控制方式

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-数据导入导出能力（DATAIMPEXPFLAG）
#### 属性说明
数据导入导出能力

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-数据变更日志类型（DATACHGLOGMODE）
#### 属性说明
数据变更日志类型

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-数据库表空间（DBTABSPACE）
#### 属性说明
数据库表空间

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-实体类别（DECAT）
#### 属性说明
实体类别

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
| 值 | DEFAULT |

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
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-全局禁止子系统导入（DELOCKFLAG）
#### 属性说明
全局禁止子系统导入

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-实体编号（DESN）
#### 属性说明
实体编号

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-实体标记2（DETAG2）
#### 属性说明
实体标记2

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-实体类型（DETYPE）
#### 属性说明
实体类型

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
单项选择(数值)

- Java类型
Integer

- 是否允许为空
否

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 1 |

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
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-实体标记（DETAG）
#### 属性说明
实体标记

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-扩展模式（DYNAMICMODE）
#### 属性说明
扩展模式

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-默认数据源（DSLINK）
#### 属性说明
默认数据源

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-启用数据审计（ENABLEAUDIT）
#### 属性说明
启用数据审计

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-动态模型类型（DYNAMODELFLAG）
#### 属性说明
动态模型类型

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
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-启用数据版本（ENABLEDATAVER）
#### 属性说明
启用数据版本

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-启用DA日志（ENABLEDALOG）
#### 属性说明
启用DA日志

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-支持获取结果集（ENABLEDEDATASET）
#### 属性说明
支持获取结果集

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-启用数据对象缓存（ENABLEENTITYCACHE）
#### 属性说明
启用数据对象缓存

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-支持实体行为（ENABLEDEACTION）
#### 属性说明
支持实体行为

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-支持多数据源（ENABLEMULTIDS）
#### 属性说明
支持多数据源

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-支持移动端（ENABLEMOB）
#### 属性说明
支持移动端

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-启用操作者名称模型（ENABLEOPNAMEMODEL）
#### 属性说明
启用操作者名称模型

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-启用组织模型（ENABLEORGMODEL）
#### 属性说明
启用组织模型

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-启用多表单（ENAMULTIFORM）
#### 属性说明
启用多表单

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-启用工作流模型（ENABLEWFMODEL）
#### 属性说明
启用工作流模型

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-支持简单查询（ENABLESELECT）
#### 属性说明
支持简单查询

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-启用临时数据（ENATEMPDATA）
#### 属性说明
启用临时数据

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
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-数据对象缓存时长（ENTITYCACHETIMEOUT）
#### 属性说明
数据对象缓存时长

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
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-现有数据结构（EXISTINGMODEL）
#### 属性说明
现有数据结构

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-用户表（EXTABLENAME）
#### 属性说明
用户表

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-模型锁模式（LOCKFLAG）
#### 属性说明
模型锁模式

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-索引类型（INDEXDETYPE）
#### 属性说明
索引类型

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-主键规则（KEYRULE）
#### 属性说明
主键规则

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-逻辑无效值（LOGICINVALIDVALUE）
#### 属性说明
逻辑无效值

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-中文名称（LOGICNAME）
#### 属性说明
中文名称

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
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-启用逻辑有效（LOGICVALID）
#### 属性说明
启用逻辑有效

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-逻辑有效值（LOGICVALIDVALUE）
#### 属性说明
逻辑有效值

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-模型导入导出能力（MODELIMPEXPFLAG）
#### 属性说明
模型导入导出能力

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-最大缓存数据对象数（MAXENTITYCACHECNT）
#### 属性说明
最大缓存数据对象数

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
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-无视图模式（NOVIEWMODE）
#### 属性说明
无视图模式

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-模型状态（MODELSTATE）
#### 属性说明
模型状态

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
多项选择(数值)

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
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-SaaS构型（SAASMODE）
#### 属性说明
SaaS构型

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-删除模式（REMOVEFLAG）
#### 属性说明
删除模式

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-服务API模式（SERVICEAPIFLAG）
#### 属性说明
服务API模式

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-服务代码名称（SERVICECODENAME）
#### 属性说明
服务代码名称

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-存储模式（STORAGEMODE）
#### 属性说明
存储模式

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-子系统实体（SUBSYSDE）
#### 属性说明
子系统实体

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-默认发布行为服务（SVRPUBMODE）
#### 属性说明
默认发布行为服务

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统实体（SYSTEMFLAG）
#### 属性说明
系统实体

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
是否逻辑

- Java类型
Integer

- 是否允许为空
否

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-主表名称（TABLENAME）
#### 属性说明
主表名称

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-默认测试单元（TESTCASEFLAG）
#### 属性说明
默认测试单元

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-TODO（TODOTASK）
#### 属性说明
TODO

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-默认用户界面行为（USERACTION）
#### 属性说明
默认用户界面行为

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
多项选择(数值)

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-是否启用（VALIDFLAG）
#### 属性说明
是否启用

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
| 值 | 1 |

- 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-视图名称（VIEWNAME）
#### 属性说明
视图名称

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-多视图级别（VIEWLEVEL）
#### 属性说明
多视图级别

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-级别3视图名称（VIEWNAME3）
#### 属性说明
级别3视图名称

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-级别2视图名称（VIEWNAME2）
#### 属性说明
级别2视图名称

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-级别4视图名称（VIEWNAME4）
#### 属性说明
级别4视图名称

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-模块颜色（MODCOLOR）
#### 属性说明
模块颜色

- 是否是主键
否

- 属性类型
链接字段[来自关系实体字段]

- 数据类型
外键值附加数据

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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [显示颜色（COLOR）](../ibizsysmodel/PSModule/#属性-显示颜色（COLOR）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统模块（PSMODULENAME）
#### 属性说明
系统模块

- 是否是主键
否

- 属性类型
链接字段[来自关系实体字段]

- 数据类型
外键值文本

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |
| 2 | `%like%` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统模块（PSMODULEID）
#### 属性说明
系统模块

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块标识（PSMODULEID）](../ibizsysmodel/PSModule/#属性-系统模块标识（PSMODULEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-子系统实体（SUBSYSMODULE）
#### 属性说明
子系统实体

- 是否是主键
否

- 属性类型
链接字段[来自关系实体字段]

- 数据类型
外键值附加数据

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [子系统模块（SUBSYSMODULE）](../ibizsysmodel/PSModule/#属性-子系统模块（SUBSYSMODULE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-子系统接口实体（PSSUBSYSSADEID）
#### 属性说明
子系统接口实体

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [外部接口实体（PSSUBSYSSADE）](../ibizsysmodel/PSSubSysSADE) |
| 关系属性 | [外部接口实体标识（PSSUBSYSSADEID）](../ibizsysmodel/PSSubSysSADE/#属性-外部接口实体标识（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-子系统接口实体（PSSUBSYSSADENAME）
#### 属性说明
子系统接口实体

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
| 关系实体 | [外部接口实体（PSSUBSYSSADE）](../ibizsysmodel/PSSubSysSADE) |
| 关系属性 | [外部接口实体名称（PSSUBSYSSADENAME）](../ibizsysmodel/PSSubSysSADE/#属性-外部接口实体名称（PSSUBSYSSADENAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-子系统服务接口（PSSUBSYSSERVICEAPIID）
#### 属性说明
子系统服务接口

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-子系统服务接口（PSSUBSYSSERVICEAPINAME）
#### 属性说明
子系统服务接口

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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口名称（PSSUBSYSSERVICEAPINAME）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口名称（PSSUBSYSSERVICEAPINAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统设计需求（PSSYSREQITEMNAME）
#### 属性说明
系统设计需求

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
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项名称（PSSYSREQITEMNAME）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项名称（PSSYSREQITEMNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统设计需求（PSSYSREQITEMID）
#### 属性说明
系统设计需求

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) |
| 关系属性 | [系统需求项标识（PSSYSREQITEMID）](../ibizsysmodel/PSSysReqItem/#属性-系统需求项标识（PSSYSREQITEMID）) |
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
| 1 | [实体名称（PSDATAENTITYNAME）](#属性-实体名称（PSDATAENTITYNAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [实体名称（PSDATAENTITYNAME）](#属性-实体名称（PSDATAENTITYNAME）) | `%like%` |
| 2 | [虚拟实体（VIRTUALFLAG）](#属性-虚拟实体（VIRTUALFLAG）) | `=` |
| 3 | [访问控制体系（ACCCTRLARCH）](#属性-访问控制体系（ACCCTRLARCH）) | `=` |
| 4 | [审计模式（AUDITMODE）](#属性-审计模式（AUDITMODE）) | `=` |
| 5 | [预置业务功能模式（BIZTAG）](#属性-预置业务功能模式（BIZTAG）) | `=` |
| 6 | [数据访问控制方式（DATAACCMODE）](#属性-数据访问控制方式（DATAACCMODE）) | `=` |
| 7 | [数据导入导出能力（DATAIMPEXPFLAG）](#属性-数据导入导出能力（DATAIMPEXPFLAG）) | `=` |
| 8 | [数据变更日志类型（DATACHGLOGMODE）](#属性-数据变更日志类型（DATACHGLOGMODE）) | `=` |
| 9 | [数据库表空间（DBTABSPACE）](#属性-数据库表空间（DBTABSPACE）) | `=` |
| 10 | [实体类别（DECAT）](#属性-实体类别（DECAT）) | `=` |
| 11 | [实体类型（DETYPE）](#属性-实体类型（DETYPE）) | `=` |
| 12 | [扩展模式（DYNAMICMODE）](#属性-扩展模式（DYNAMICMODE）) | `=` |
| 13 | [默认数据源（DSLINK）](#属性-默认数据源（DSLINK）) | `=` |
| 14 | [动态模型类型（DYNAMODELFLAG）](#属性-动态模型类型（DYNAMODELFLAG）) | `=` |
| 15 | [启用临时数据（ENATEMPDATA）](#属性-启用临时数据（ENATEMPDATA）) | `=` |
| 16 | [模型锁模式（LOCKFLAG）](#属性-模型锁模式（LOCKFLAG）) | `=` |
| 17 | [索引类型（INDEXDETYPE）](#属性-索引类型（INDEXDETYPE）) | `=` |
| 18 | [模型导入导出能力（MODELIMPEXPFLAG）](#属性-模型导入导出能力（MODELIMPEXPFLAG）) | `=` |
| 19 | [SaaS构型（SAASMODE）](#属性-SaaS构型（SAASMODE）) | `=` |
| 20 | [删除模式（REMOVEFLAG）](#属性-删除模式（REMOVEFLAG）) | `=` |
| 21 | [服务API模式（SERVICEAPIFLAG）](#属性-服务API模式（SERVICEAPIFLAG）) | `=` |
| 22 | [存储模式（STORAGEMODE）](#属性-存储模式（STORAGEMODE）) | `=` |
| 23 | [用户分类（USERCAT）](#属性-用户分类（USERCAT）) | `=` |
| 24 | [多视图级别（VIEWLEVEL）](#属性-多视图级别（VIEWLEVEL）) | `=` |
| 25 | [系统模块（PSMODULENAME）](#属性-系统模块（PSMODULENAME）) | `=` |
| 26 | [系统模块（PSMODULENAME）](#属性-系统模块（PSMODULENAME）) | `%like%` |
| 27 | [系统模块（PSMODULEID）](#属性-系统模块（PSMODULEID）) | `=` |
| 28 | [子系统接口实体（PSSUBSYSSADEID）](#属性-子系统接口实体（PSSUBSYSSADEID）) | `=` |
| 29 | [子系统接口实体（PSSUBSYSSADENAME）](#属性-子系统接口实体（PSSUBSYSSADENAME）) | `=` |
| 30 | [子系统接口实体（PSSUBSYSSADENAME）](#属性-子系统接口实体（PSSUBSYSSADENAME）) | `%like%` |
| 31 | [子系统服务接口（PSSUBSYSSERVICEAPIID）](#属性-子系统服务接口（PSSUBSYSSERVICEAPIID）) | `=` |
| 32 | [子系统服务接口（PSSUBSYSSERVICEAPINAME）](#属性-子系统服务接口（PSSUBSYSSERVICEAPINAME）) | `=` |
| 33 | [子系统服务接口（PSSUBSYSSERVICEAPINAME）](#属性-子系统服务接口（PSSUBSYSSERVICEAPINAME）) | `%like%` |
| 34 | [系统设计需求（PSSYSREQITEMNAME）](#属性-系统设计需求（PSSYSREQITEMNAME）) | `=` |
| 35 | [系统设计需求（PSSYSREQITEMNAME）](#属性-系统设计需求（PSSYSREQITEMNAME）) | `%like%` |
| 36 | [系统设计需求（PSSYSREQITEMID）](#属性-系统设计需求（PSSYSREQITEMID）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 2 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
t1.`ACCCTRLARCH`,
t1.`AUDITMODE`,
t1.`BASECLSPARAMS`,
t1.`BIZTAG`,
t1.`CODENAME`,
t1.`COLOR`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DATAACCMODE`,
t1.`DATACHGLOGMODE`,
t1.`DATAIMPEXPFLAG`,
t1.`DBTABSPACE`,
t1.`DECAT`,
t1.`DELOCKFLAG`,
t1.`DESN`,
t1.`DETAG`,
t1.`DETAG2`,
t1.`DETYPE`,
t1.`DSLINK`,
t1.`DYNAMICMODE`,
t1.`DYNAMODELFLAG`,
t1.`ENABLEAUDIT`,
t1.`ENABLEDALOG`,
t1.`ENABLEDATAVER`,
t1.`ENABLEDEACTION`,
t1.`ENABLEDEDATASET`,
t1.`ENABLEENTITYCACHE`,
t1.`ENABLEMOB`,
t1.`ENABLEMULTIDS`,
t1.`ENABLEOPNAMEMODEL`,
t1.`ENABLEORGMODEL`,
t1.`ENABLESELECT`,
t1.`ENABLEWFMODEL`,
t1.`ENAMULTIFORM`,
t1.`ENATEMPDATA`,
t1.`ENTITYCACHETIMEOUT`,
t1.`EXISTINGMODEL`,
t1.`EXTABLENAME`,
t1.`INDEXDETYPE`,
t1.`KEYRULE`,
t1.`LOCKFLAG`,
t1.`LOGICINVALIDVALUE`,
t1.`LOGICNAME`,
t1.`LOGICVALID`,
t1.`LOGICVALIDVALUE`,
t1.`MAXENTITYCACHECNT`,
t1.`MEMO`,
t11.`COLOR` AS `MODCOLOR`,
t1.`MODELIMPEXPFLAG`,
t1.`MODELSTATE`,
t1.`NOVIEWMODE`,
t1.`PSDATAENTITYID`,
t1.`PSDATAENTITYNAME`,
t1.`PSMODULEID`,
t11.`PSMODULENAME`,
t1.`PSSUBSYSSADEID`,
t21.`PSSUBSYSSADENAME`,
t1.`PSSUBSYSSERVICEAPIID`,
t31.`PSSUBSYSSERVICEAPINAME`,
t1.`PSSYSREQITEMID`,
t41.`PSSYSREQITEMNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`REMOVEFLAG`,
t1.`SAASMODE`,
t1.`SERVICEAPIFLAG`,
t1.`SERVICECODENAME`,
t1.`STORAGEMODE`,
t1.`SUBSYSDE`,
t11.`SUBSYSMODULE`,
t1.`SVRPUBMODE`,
t1.`SYSTEMFLAG`,
t1.`TABLENAME`,
t1.`TESTCASEFLAG`,
t1.`TODOTASK`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERACTION`,
t1.`USERCAT`,
t1.`USERPARAMS`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`,
t1.`VIEWLEVEL`,
t1.`VIEWNAME`,
t1.`VIEWNAME2`,
t1.`VIEWNAME3`,
t1.`VIEWNAME4`,
t1.`VIRTUALFLAG`,
t1.`VKEYSEPARATOR`
FROM `T_PSDATAENTITY` t1 
LEFT JOIN T_PSMODULE t11 ON t1.PSMODULEID = t11.PSMODULEID 
LEFT JOIN T_PSSUBSYSSADE t21 ON t1.PSSUBSYSSADEID = t21.PSSUBSYSSADEID 
LEFT JOIN T_PSSUBSYSSERVICEAPI t31 ON t1.PSSUBSYSSERVICEAPIID = t31.PSSUBSYSSERVICEAPIID 
LEFT JOIN T_PSSYSREQITEM t41 ON t1.PSSYSREQITEMID = t41.PSSYSREQITEMID 

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
t1.`ACCCTRLARCH`,
t1.`AUDITMODE`,
t1.`BASECLSPARAMS`,
t1.`BIZTAG`,
t1.`CODENAME`,
t1.`COLOR`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DATAACCMODE`,
t1.`DATACHGLOGMODE`,
t1.`DATAIMPEXPFLAG`,
t1.`DBTABSPACE`,
t1.`DECAT`,
t1.`DELOCKFLAG`,
t1.`DESN`,
t1.`DETAG`,
t1.`DETAG2`,
t1.`DETYPE`,
t1.`DSLINK`,
t1.`DYNAMICMODE`,
t1.`DYNAMODELFLAG`,
t1.`ENABLEAUDIT`,
t1.`ENABLEDALOG`,
t1.`ENABLEDATAVER`,
t1.`ENABLEDEACTION`,
t1.`ENABLEDEDATASET`,
t1.`ENABLEENTITYCACHE`,
t1.`ENABLEMOB`,
t1.`ENABLEMULTIDS`,
t1.`ENABLEOPNAMEMODEL`,
t1.`ENABLEORGMODEL`,
t1.`ENABLESELECT`,
t1.`ENABLEWFMODEL`,
t1.`ENAMULTIFORM`,
t1.`ENATEMPDATA`,
t1.`ENTITYCACHETIMEOUT`,
t1.`EXISTINGMODEL`,
t1.`EXTABLENAME`,
t1.`INDEXDETYPE`,
t1.`KEYRULE`,
t1.`LOCKFLAG`,
t1.`LOGICINVALIDVALUE`,
t1.`LOGICNAME`,
t1.`LOGICVALID`,
t1.`LOGICVALIDVALUE`,
t1.`MAXENTITYCACHECNT`,
t1.`MEMO`,
t11.`COLOR` AS `MODCOLOR`,
t1.`MODELIMPEXPFLAG`,
t1.`MODELSTATE`,
t1.`NOVIEWMODE`,
t1.`PSDATAENTITYID`,
t1.`PSDATAENTITYNAME`,
t1.`PSMODULEID`,
t11.`PSMODULENAME`,
t1.`PSSUBSYSSADEID`,
t21.`PSSUBSYSSADENAME`,
t1.`PSSUBSYSSERVICEAPIID`,
t31.`PSSUBSYSSERVICEAPINAME`,
t1.`PSSYSREQITEMID`,
t41.`PSSYSREQITEMNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`REMOVEFLAG`,
t1.`SAASMODE`,
t1.`SERVICEAPIFLAG`,
t1.`SERVICECODENAME`,
t1.`STORAGEMODE`,
t1.`SUBSYSDE`,
t11.`SUBSYSMODULE`,
t1.`SVRPUBMODE`,
t1.`SYSTEMFLAG`,
t1.`TABLENAME`,
t1.`TESTCASEFLAG`,
t1.`TODOTASK`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERACTION`,
t1.`USERCAT`,
t1.`USERPARAMS`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`,
t1.`VIEWLEVEL`,
t1.`VIEWNAME`,
t1.`VIEWNAME2`,
t1.`VIEWNAME3`,
t1.`VIEWNAME4`,
t1.`VIRTUALFLAG`,
t1.`VKEYSEPARATOR`
FROM `T_PSDATAENTITY` t1 
LEFT JOIN T_PSMODULE t11 ON t1.PSMODULEID = t11.PSMODULEID 
LEFT JOIN T_PSSUBSYSSADE t21 ON t1.PSSUBSYSSADEID = t21.PSSUBSYSSADEID 
LEFT JOIN T_PSSUBSYSSERVICEAPI t31 ON t1.PSSUBSYSSERVICEAPIID = t31.PSSUBSYSSERVICEAPIID 
LEFT JOIN T_PSSYSREQITEM t41 ON t1.PSSYSREQITEMID = t41.PSSYSREQITEMID 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据集](#数据集合-数据集（Default）) | Default | 是 |

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

