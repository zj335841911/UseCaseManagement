
# 实体-实体属性(PSDEFIELD)
## 实体说明
实体属性

## 所属模块
[iBiz系统模型](../ibizsysmodel)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) | （默认） |
| 2 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) | （默认） |
| 3 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) | （默认） |
| 4 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) | （默认） |
| 5 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) | （默认） |
| 2 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) | （默认） |
| 3 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) | （默认） |
| 4 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) | （默认） |
| 5 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) | （默认） |
| 6 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [实体属性标识](#属性-实体属性标识（PSDEFIELDID）) | PSDEFIELDID | 全局唯一标识，文本类型，用户不可见 | 是 | 否 | 否 |
| 2 | [实体属性名称](#属性-实体属性名称（PSDEFIELDNAME）) | PSDEFIELDNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 4 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | 日期时间型 | 否 | 否 | 否 |
| 5 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 6 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | 日期时间型 | 否 | 否 | 否 |
| 7 | [业务标记](#属性-业务标记（BIZTAG）) | BIZTAG | 单项选择(文本值) | 否 | 否 | 是 |
| 8 | [允许为空](#属性-允许为空（ALLOWEMPTY）) | ALLOWEMPTY | 是否逻辑 | 否 | 否 | 否 |
| 9 | [审计信息格式](#属性-审计信息格式（AUDITINFOFORMAT）) | AUDITINFOFORMAT | 文本，可指定长度 | 否 | 否 | 是 |
| 10 | [检查递归](#属性-检查递归（CHECKRECURSION）) | CHECKRECURSION | 是否逻辑 | 否 | 否 | 是 |
| 11 | [代码名称](#属性-代码名称（CODENAME）) | CODENAME | 文本，可指定长度 | 否 | 否 | 是 |
| 12 | [数据库更新值模式](#属性-数据库更新值模式（DBVALUEMODE）) | DBVALUEMODE | 单项选择(文本值) | 否 | 否 | 是 |
| 13 | [自定义导出范围](#属性-自定义导出范围（CUSTOMEXPORTSCOPE）) | CUSTOMEXPORTSCOPE | 是否逻辑 | 否 | 否 | 是 |
| 14 | [数据库新建值模式](#属性-数据库新建值模式（DBVALUEMODE2）) | DBVALUEMODE2 | 单项选择(文本值) | 否 | 否 | 是 |
| 15 | [属性类型](#属性-属性类型（DEFTYPE）) | DEFTYPE | 单项选择(数值) | 否 | 否 | 否 |
| 16 | [属性默认值](#属性-属性默认值（DEFAULTVALUE）) | DEFAULTVALUE | 文本，可指定长度 | 否 | 否 | 是 |
| 17 | [重复值检查](#属性-重复值检查（DUPCHECKMODE）) | DUPCHECKMODE | 单项选择(文本值) | 否 | 否 | 是 |
| 18 | [检查值范围](#属性-检查值范围（DUPCHECKVALUES）) | DUPCHECKVALUES | 文本，可指定长度 | 否 | 否 | 是 |
| 19 | [默认值类型](#属性-默认值类型（DVT）) | DVT | 单项选择(文本值) | 否 | 否 | 是 |
| 20 | [启用审计](#属性-启用审计（ENABLEAUDIT）) | ENABLEAUDIT | 是否逻辑 | 否 | 否 | 是 |
| 21 | [动态模型类型](#属性-动态模型类型（DYNAMODELFLAG）) | DYNAMODELFLAG | 单项选择(数值) | 否 | 否 | 是 |
| 22 | [启用快速搜索](#属性-启用快速搜索（ENABLEQS）) | ENABLEQS | 是否逻辑 | 否 | 否 | 是 |
| 23 | [启用列权限控制](#属性-启用列权限控制（ENABLECOLPRIV）) | ENABLECOLPRIV | 是否逻辑 | 否 | 否 | 是 |
| 24 | [支持链接属性回写](#属性-支持链接属性回写（ENAWRITEBACK）) | ENAWRITEBACK | 是否逻辑 | 否 | 否 | 是 |
| 25 | [默认用户行为](#属性-默认用户行为（ENABLEUSERINPUT）) | ENABLEUSERINPUT | 多项选择(数值) | 否 | 否 | 是 |
| 26 | [支持临时数据](#属性-支持临时数据（ENABLETEMPDATA）) | ENABLETEMPDATA | 是否逻辑 | 否 | 否 | 是 |
| 27 | [扩展模式](#属性-扩展模式（EXTENDMODE）) | EXTENDMODE | 单项选择(数值) | 否 | 否 | 是 |
| 28 | [导出范围](#属性-导出范围（EXPORTSCOPE）) | EXPORTSCOPE | 多项选择(数值) | 否 | 否 | 是 |
| 29 | [逻辑属性参数](#属性-逻辑属性参数（FORMULAFIELDS）) | FORMULAFIELDS | 文本，可指定长度 | 否 | 否 | 是 |
| 30 | [外键属性](#属性-外键属性（FKEY）) | FKEY | 是否逻辑 | 否 | 否 | 是 |
| 31 | [逻辑字段格式](#属性-逻辑字段格式（FORMULAFORMAT）) | FORMULAFORMAT | 文本，可指定长度 | 否 | 否 | 是 |
| 32 | [数据导入识别](#属性-数据导入识别（IMPORTKEY）) | IMPORTKEY | 是否逻辑 | 否 | 否 | 是 |
| 33 | [数据导入次序](#属性-数据导入次序（IMPORTORDER）) | IMPORTORDER | 整型 | 否 | 否 | 是 |
| 34 | [索引类型属性](#属性-索引类型属性（INDEXTYPE）) | INDEXTYPE | 是否逻辑 | 否 | 否 | 是 |
| 35 | [长度](#属性-长度（LENGTH）) | LENGTH | 整型 | 否 | 否 | 是 |
| 36 | [数据导入标识](#属性-数据导入标识（IMPORTTAG）) | IMPORTTAG | 文本，可指定长度 | 否 | 否 | 是 |
| 37 | [模型锁模式](#属性-模型锁模式（LOCKFLAG）) | LOCKFLAG | 单项选择(数值) | 否 | 否 | 是 |
| 38 | [中文名称](#属性-中文名称（LOGICNAME）) | LOGICNAME | 文本，可指定长度 | 否 | 否 | 否 |
| 39 | [多表单识别属性](#属性-多表单识别属性（MULTIFORMFIELD）) | MULTIFORMFIELD | 是否逻辑 | 否 | 否 | 是 |
| 40 | [主信息属性](#属性-主信息属性（MAJORFIELD）) | MAJORFIELD | 是否逻辑 | 否 | 否 | 是 |
| 41 | [备注](#属性-备注（MEMO）) | MEMO | 长文本，长度1000 | 否 | 否 | 是 |
| 42 | [排序值](#属性-排序值（ORDERVALUE）) | ORDERVALUE | 整型 | 否 | 否 | 是 |
| 43 | [空值排序](#属性-空值排序（NULLVALORDER）) | NULLVALORDER | 单项选择(文本值) | 否 | 否 | 是 |
| 44 | [粘帖重置](#属性-粘帖重置（PASTERESET）) | PASTERESET | 是否逻辑 | 否 | 否 | 是 |
| 45 | [物理化属性](#属性-物理化属性（PHYSICALFIELD）) | PHYSICALFIELD | 是否逻辑 | 否 | 否 | 是 |
| 46 | [主键属性](#属性-主键属性（PKEY）) | PKEY | 单项选择(数值) | 否 | 否 | 是 |
| 47 | [浮点精度](#属性-浮点精度（PRECISION2）) | PRECISION2 | 整型 | 否 | 否 | 是 |
| 48 | [系统预置属性](#属性-系统预置属性（PREDEFINETYPE）) | PREDEFINETYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 49 | [数据类型](#属性-数据类型（PSDATATYPENAME）) | PSDATATYPENAME | 文本，可指定长度 | 否 | 否 | 否 |
| 50 | [查询输出](#属性-查询输出（QUERYCOLUMN）) | QUERYCOLUMN | 是否逻辑 | 否 | 否 | 是 |
| 51 | [数据类型](#属性-数据类型（PSDATATYPEID）) | PSDATATYPEID | 文本，可指定长度 | 否 | 否 | 否 |
| 52 | [服务代码名称](#属性-服务代码名称（SERVICECODENAME）) | SERVICECODENAME | 文本，可指定长度 | 否 | 否 | 是 |
| 53 | [主状态属性](#属性-主状态属性（STATEFIELD）) | STATEFIELD | 单项选择(文本值) | 否 | 否 | 是 |
| 54 | [查询扩展选项](#属性-查询扩展选项（QUERYCS）) | QUERYCS | 多项选择(文本值) | 否 | 否 | 是 |
| 55 | [字符长度](#属性-字符长度（STRLENGTH）) | STRLENGTH | 整型 | 否 | 否 | 是 |
| 56 | [字符转换](#属性-字符转换（STRINGCASE）) | STRINGCASE | 单项选择(文本值) | 否 | 否 | 是 |
| 57 | [默认测试值](#属性-默认测试值（TESTDATA）) | TESTDATA | 文本，可指定长度 | 否 | 否 | 是 |
| 58 | [表名称](#属性-表名称（TABLENAME）) | TABLENAME | 文本，可指定长度 | 否 | 否 | 是 |
| 59 | [双字节字符](#属性-双字节字符（UNICODECHAR）) | UNICODECHAR | 是否逻辑 | 否 | 否 | 是 |
| 60 | [单位](#属性-单位（UNIT）) | UNIT | 文本，可指定长度 | 否 | 否 | 是 |
| 61 | [联合键值](#属性-联合键值（UNIONKEYVALUE）) | UNIONKEYVALUE | 单项选择(文本值) | 否 | 否 | 是 |
| 62 | [更新旧值回填](#属性-更新旧值回填（UPDATEOVMODE）) | UPDATEOVMODE | 单项选择(文本值) | 否 | 否 | 是 |
| 63 | [单位宽度](#属性-单位宽度（UNITWIDTH）) | UNITWIDTH | 整型 | 否 | 否 | 是 |
| 64 | [自定义参数](#属性-自定义参数（USERPARAMS）) | USERPARAMS | 文本，可指定长度 | 否 | 否 | 是 |
| 65 | [用户标记](#属性-用户标记（USERTAG）) | USERTAG | 文本，可指定长度 | 否 | 否 | 是 |
| 66 | [用户分类](#属性-用户分类（USERCAT）) | USERCAT | 单项选择(文本值) | 否 | 否 | 是 |
| 67 | [用户标记3](#属性-用户标记3（USERTAG3）) | USERTAG3 | 文本，可指定长度 | 否 | 否 | 是 |
| 68 | [用户标记4](#属性-用户标记4（USERTAG4）) | USERTAG4 | 文本，可指定长度 | 否 | 否 | 是 |
| 69 | [用户标记2](#属性-用户标记2（USERTAG2）) | USERTAG2 | 文本，可指定长度 | 否 | 否 | 是 |
| 70 | [是否启用](#属性-是否启用（VALIDFLAG）) | VALIDFLAG | 是否逻辑 | 否 | 否 | 是 |
| 71 | [视图列级别](#属性-视图列级别（VIEWCOLLEVEL）) | VIEWCOLLEVEL | 单项选择(数值) | 否 | 否 | 是 |
| 72 | [值格式化](#属性-值格式化（VALUEFORMAT）) | VALUEFORMAT | 文本，可指定长度 | 否 | 否 | 是 |
| 73 | [范围属性2](#属性-范围属性2（NO2DUPCHKPSDEFNAME）) | NO2DUPCHKPSDEFNAME | 外键值文本 | 否 | 是 | 是 |
| 74 | [范围属性2](#属性-范围属性2（NO2DUPCHKPSDEFID）) | NO2DUPCHKPSDEFID | 外键值 | 否 | 是 | 是 |
| 75 | [范围属性3](#属性-范围属性3（NO3DUPCHKPSDEFNAME）) | NO3DUPCHKPSDEFNAME | 外键值文本 | 否 | 是 | 是 |
| 76 | [范围属性3](#属性-范围属性3（NO3DUPCHKPSDEFID）) | NO3DUPCHKPSDEFID | 外键值 | 否 | 是 | 是 |
| 77 | [值项属性](#属性-值项属性（VALUEPSDEFNAME）) | VALUEPSDEFNAME | 外键值文本 | 否 | 是 | 是 |
| 78 | [值项属性](#属性-值项属性（VALUEPSDEFID）) | VALUEPSDEFID | 外键值 | 否 | 是 | 是 |
| 79 | [关系属性](#属性-关系属性（DERPSDEFNAME）) | DERPSDEFNAME | 外键值文本 | 否 | 是 | 是 |
| 80 | [范围属性](#属性-范围属性（DUPCHKPSDEFID）) | DUPCHKPSDEFID | 外键值 | 否 | 是 | 是 |
| 81 | [关系属性](#属性-关系属性（DERPSDEFID）) | DERPSDEFID | 外键值 | 否 | 是 | 是 |
| 82 | [范围属性](#属性-范围属性（DUPCHKPSDEFNAME）) | DUPCHKPSDEFNAME | 外键值文本 | 否 | 是 | 是 |
| 83 | [实体](#属性-实体（PSDENAME）) | PSDENAME | 外键值文本 | 否 | 是 | 否 |
| 84 | [实体](#属性-实体（PSDEID）) | PSDEID | 外键值 | 否 | 是 | 否 |
| 85 | [PSSUBSYSSADEID](#属性-PSSUBSYSSADEID（PSSUBSYSSADEID）) | PSSUBSYSSADEID | 外键值附加数据 | 否 | 是 | 是 |
| 86 | [系统](#属性-系统（PSSYSTEMID）) | PSSYSTEMID | 文本，可指定长度 | 否 | 是 | 是 |
| 87 | [系统](#属性-系统（PSSYSTEMNAME）) | PSSYSTEMNAME | 文本，可指定长度 | 否 | 是 | 是 |

### 属性-实体属性标识（PSDEFIELDID）
#### 属性说明
实体属性标识

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-实体属性名称（PSDEFIELDNAME）
#### 属性说明
实体属性名称

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-业务标记（BIZTAG）
#### 属性说明
业务标记

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-允许为空（ALLOWEMPTY）
#### 属性说明
允许为空

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-审计信息格式（AUDITINFOFORMAT）
#### 属性说明
审计信息格式

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-检查递归（CHECKRECURSION）
#### 属性说明
检查递归

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-数据库更新值模式（DBVALUEMODE）
#### 属性说明
数据库更新值模式

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-自定义导出范围（CUSTOMEXPORTSCOPE）
#### 属性说明
自定义导出范围

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-数据库新建值模式（DBVALUEMODE2）
#### 属性说明
数据库新建值模式

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-属性类型（DEFTYPE）
#### 属性说明
属性类型

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-属性默认值（DEFAULTVALUE）
#### 属性说明
属性默认值

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-重复值检查（DUPCHECKMODE）
#### 属性说明
重复值检查

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-检查值范围（DUPCHECKVALUES）
#### 属性说明
检查值范围

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-默认值类型（DVT）
#### 属性说明
默认值类型

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-启用审计（ENABLEAUDIT）
#### 属性说明
启用审计

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-启用快速搜索（ENABLEQS）
#### 属性说明
启用快速搜索

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-启用列权限控制（ENABLECOLPRIV）
#### 属性说明
启用列权限控制

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-支持链接属性回写（ENAWRITEBACK）
#### 属性说明
支持链接属性回写

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-默认用户行为（ENABLEUSERINPUT）
#### 属性说明
默认用户行为

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
| 值 | 3 |

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-支持临时数据（ENABLETEMPDATA）
#### 属性说明
支持临时数据

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-扩展模式（EXTENDMODE）
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-导出范围（EXPORTSCOPE）
#### 属性说明
导出范围

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-逻辑属性参数（FORMULAFIELDS）
#### 属性说明
逻辑属性参数

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-外键属性（FKEY）
#### 属性说明
外键属性

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-逻辑字段格式（FORMULAFORMAT）
#### 属性说明
逻辑字段格式

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-数据导入识别（IMPORTKEY）
#### 属性说明
数据导入识别

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-数据导入次序（IMPORTORDER）
#### 属性说明
数据导入次序

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-索引类型属性（INDEXTYPE）
#### 属性说明
索引类型属性

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-长度（LENGTH）
#### 属性说明
长度

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-数据导入标识（IMPORTTAG）
#### 属性说明
数据导入标识

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-多表单识别属性（MULTIFORMFIELD）
#### 属性说明
多表单识别属性

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-主信息属性（MAJORFIELD）
#### 属性说明
主信息属性

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-排序值（ORDERVALUE）
#### 属性说明
排序值

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-粘帖重置（PASTERESET）
#### 属性说明
粘帖重置

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-物理化属性（PHYSICALFIELD）
#### 属性说明
物理化属性

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-主键属性（PKEY）
#### 属性说明
主键属性

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-浮点精度（PRECISION2）
#### 属性说明
浮点精度

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统预置属性（PREDEFINETYPE）
#### 属性说明
系统预置属性

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-数据类型（PSDATATYPENAME）
#### 属性说明
数据类型

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-查询输出（QUERYCOLUMN）
#### 属性说明
查询输出

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-数据类型（PSDATATYPEID）
#### 属性说明
数据类型

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-主状态属性（STATEFIELD）
#### 属性说明
主状态属性

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-查询扩展选项（QUERYCS）
#### 属性说明
查询扩展选项

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-字符长度（STRLENGTH）
#### 属性说明
字符长度

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-字符转换（STRINGCASE）
#### 属性说明
字符转换

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-默认测试值（TESTDATA）
#### 属性说明
默认测试值

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-表名称（TABLENAME）
#### 属性说明
表名称

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-双字节字符（UNICODECHAR）
#### 属性说明
双字节字符

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-单位（UNIT）
#### 属性说明
单位

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-联合键值（UNIONKEYVALUE）
#### 属性说明
联合键值

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-更新旧值回填（UPDATEOVMODE）
#### 属性说明
更新旧值回填

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-单位宽度（UNITWIDTH）
#### 属性说明
单位宽度

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-视图列级别（VIEWCOLLEVEL）
#### 属性说明
视图列级别

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-值格式化（VALUEFORMAT）
#### 属性说明
值格式化

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-范围属性2（NO2DUPCHKPSDEFNAME）
#### 属性说明
范围属性2

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

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
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性名称（PSDEFIELDNAME）](../ibizsysmodel/PSDEField/#属性-实体属性名称（PSDEFIELDNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-范围属性2（NO2DUPCHKPSDEFID）
#### 属性说明
范围属性2

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
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性标识（PSDEFIELDID）](../ibizsysmodel/PSDEField/#属性-实体属性标识（PSDEFIELDID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-范围属性3（NO3DUPCHKPSDEFNAME）
#### 属性说明
范围属性3

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

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
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性名称（PSDEFIELDNAME）](../ibizsysmodel/PSDEField/#属性-实体属性名称（PSDEFIELDNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-范围属性3（NO3DUPCHKPSDEFID）
#### 属性说明
范围属性3

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
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性标识（PSDEFIELDID）](../ibizsysmodel/PSDEField/#属性-实体属性标识（PSDEFIELDID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-值项属性（VALUEPSDEFNAME）
#### 属性说明
值项属性

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

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
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性名称（PSDEFIELDNAME）](../ibizsysmodel/PSDEField/#属性-实体属性名称（PSDEFIELDNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-值项属性（VALUEPSDEFID）
#### 属性说明
值项属性

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
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性标识（PSDEFIELDID）](../ibizsysmodel/PSDEField/#属性-实体属性标识（PSDEFIELDID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-关系属性（DERPSDEFNAME）
#### 属性说明
关系属性

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

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
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性名称（PSDEFIELDNAME）](../ibizsysmodel/PSDEField/#属性-实体属性名称（PSDEFIELDNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-范围属性（DUPCHKPSDEFID）
#### 属性说明
范围属性

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
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性标识（PSDEFIELDID）](../ibizsysmodel/PSDEField/#属性-实体属性标识（PSDEFIELDID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-关系属性（DERPSDEFID）
#### 属性说明
关系属性

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
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性标识（PSDEFIELDID）](../ibizsysmodel/PSDEField/#属性-实体属性标识（PSDEFIELDID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-范围属性（DUPCHKPSDEFNAME）
#### 属性说明
范围属性

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

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
| 关系实体 | [实体属性（PSDEFIELD）](../ibizsysmodel/PSDEField) |
| 关系属性 | [实体属性名称（PSDEFIELDNAME）](../ibizsysmodel/PSDEField/#属性-实体属性名称（PSDEFIELDNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-实体（PSDENAME）
#### 属性说明
实体

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [实体名称（PSDATAENTITYNAME）](../ibizsysmodel/PSDataEntity/#属性-实体名称（PSDATAENTITYNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-实体（PSDEID）
#### 属性说明
实体

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [实体标识（PSDATAENTITYID）](../ibizsysmodel/PSDataEntity/#属性-实体标识（PSDATAENTITYID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-PSSUBSYSSADEID（PSSUBSYSSADEID）
#### 属性说明
PSSUBSYSSADEID

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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 关系实体 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) |
| 关系属性 | [子系统接口实体（PSSUBSYSSADEID）](../ibizsysmodel/PSDataEntity/#属性-子系统接口实体（PSSUBSYSSADEID）) |
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
| 1 | [实体属性名称（PSDEFIELDNAME）](#属性-实体属性名称（PSDEFIELDNAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [实体属性名称（PSDEFIELDNAME）](#属性-实体属性名称（PSDEFIELDNAME）) | `%like%` |
| 2 | [业务标记（BIZTAG）](#属性-业务标记（BIZTAG）) | `=` |
| 3 | [数据库更新值模式（DBVALUEMODE）](#属性-数据库更新值模式（DBVALUEMODE）) | `=` |
| 4 | [数据库新建值模式（DBVALUEMODE2）](#属性-数据库新建值模式（DBVALUEMODE2）) | `=` |
| 5 | [属性类型（DEFTYPE）](#属性-属性类型（DEFTYPE）) | `=` |
| 6 | [重复值检查（DUPCHECKMODE）](#属性-重复值检查（DUPCHECKMODE）) | `=` |
| 7 | [默认值类型（DVT）](#属性-默认值类型（DVT）) | `=` |
| 8 | [动态模型类型（DYNAMODELFLAG）](#属性-动态模型类型（DYNAMODELFLAG）) | `=` |
| 9 | [扩展模式（EXTENDMODE）](#属性-扩展模式（EXTENDMODE）) | `=` |
| 10 | [模型锁模式（LOCKFLAG）](#属性-模型锁模式（LOCKFLAG）) | `=` |
| 11 | [空值排序（NULLVALORDER）](#属性-空值排序（NULLVALORDER）) | `=` |
| 12 | [主键属性（PKEY）](#属性-主键属性（PKEY）) | `=` |
| 13 | [系统预置属性（PREDEFINETYPE）](#属性-系统预置属性（PREDEFINETYPE）) | `=` |
| 14 | [主状态属性（STATEFIELD）](#属性-主状态属性（STATEFIELD）) | `=` |
| 15 | [字符转换（STRINGCASE）](#属性-字符转换（STRINGCASE）) | `=` |
| 16 | [联合键值（UNIONKEYVALUE）](#属性-联合键值（UNIONKEYVALUE）) | `=` |
| 17 | [更新旧值回填（UPDATEOVMODE）](#属性-更新旧值回填（UPDATEOVMODE）) | `=` |
| 18 | [用户分类（USERCAT）](#属性-用户分类（USERCAT）) | `=` |
| 19 | [视图列级别（VIEWCOLLEVEL）](#属性-视图列级别（VIEWCOLLEVEL）) | `=` |
| 20 | [范围属性2（NO2DUPCHKPSDEFNAME）](#属性-范围属性2（NO2DUPCHKPSDEFNAME）) | `=` |
| 21 | [范围属性2（NO2DUPCHKPSDEFNAME）](#属性-范围属性2（NO2DUPCHKPSDEFNAME）) | `%like%` |
| 22 | [范围属性2（NO2DUPCHKPSDEFID）](#属性-范围属性2（NO2DUPCHKPSDEFID）) | `=` |
| 23 | [范围属性3（NO3DUPCHKPSDEFNAME）](#属性-范围属性3（NO3DUPCHKPSDEFNAME）) | `=` |
| 24 | [范围属性3（NO3DUPCHKPSDEFNAME）](#属性-范围属性3（NO3DUPCHKPSDEFNAME）) | `%like%` |
| 25 | [范围属性3（NO3DUPCHKPSDEFID）](#属性-范围属性3（NO3DUPCHKPSDEFID）) | `=` |
| 26 | [值项属性（VALUEPSDEFNAME）](#属性-值项属性（VALUEPSDEFNAME）) | `=` |
| 27 | [值项属性（VALUEPSDEFNAME）](#属性-值项属性（VALUEPSDEFNAME）) | `%like%` |
| 28 | [值项属性（VALUEPSDEFID）](#属性-值项属性（VALUEPSDEFID）) | `=` |
| 29 | [关系属性（DERPSDEFNAME）](#属性-关系属性（DERPSDEFNAME）) | `=` |
| 30 | [关系属性（DERPSDEFNAME）](#属性-关系属性（DERPSDEFNAME）) | `%like%` |
| 31 | [范围属性（DUPCHKPSDEFID）](#属性-范围属性（DUPCHKPSDEFID）) | `=` |
| 32 | [关系属性（DERPSDEFID）](#属性-关系属性（DERPSDEFID）) | `=` |
| 33 | [范围属性（DUPCHKPSDEFNAME）](#属性-范围属性（DUPCHKPSDEFNAME）) | `=` |
| 34 | [范围属性（DUPCHKPSDEFNAME）](#属性-范围属性（DUPCHKPSDEFNAME）) | `%like%` |
| 35 | [实体（PSDENAME）](#属性-实体（PSDENAME）) | `=` |
| 36 | [实体（PSDENAME）](#属性-实体（PSDENAME）) | `%like%` |
| 37 | [实体（PSDEID）](#属性-实体（PSDEID）) | `=` |

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
t1.`ALLOWEMPTY`,
t1.`AUDITINFOFORMAT`,
t1.`BIZTAG`,
t1.`CHECKRECURSION`,
t1.`CODENAME`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`CUSTOMEXPORTSCOPE`,
t1.`DBVALUEMODE`,
t1.`DBVALUEMODE2`,
t1.`DEFAULTVALUE`,
t1.`DEFTYPE`,
t1.`DERPSDEFID`,
t1.`DERPSDEFNAME`,
t1.`DUPCHECKMODE`,
t1.`DUPCHECKVALUES`,
t1.`DUPCHKPSDEFID`,
t1.`DUPCHKPSDEFNAME`,
t1.`DVT`,
t1.`DYNAMODELFLAG`,
t1.`ENABLEAUDIT`,
t1.`ENABLECOLPRIV`,
t1.`ENABLEQS`,
t1.`ENABLETEMPDATA`,
t1.`ENABLEUSERINPUT`,
t1.`ENAWRITEBACK`,
t1.`EXPORTSCOPE`,
t1.`EXTENDMODE`,
t1.`FKEY`,
t1.`FORMULAFIELDS`,
t1.`FORMULAFORMAT`,
t1.`IMPORTKEY`,
t1.`IMPORTORDER`,
t1.`IMPORTTAG`,
t1.`INDEXTYPE`,
t1.`LENGTH`,
t1.`LOCKFLAG`,
t1.`LOGICNAME`,
t1.`MAJORFIELD`,
t1.`MEMO`,
t1.`MULTIFORMFIELD`,
t1.`NO2DUPCHKPSDEFID`,
t1.`NO2DUPCHKPSDEFNAME`,
t1.`NO3DUPCHKPSDEFID`,
t1.`NO3DUPCHKPSDEFNAME`,
t1.`NULLVALORDER`,
t1.`ORDERVALUE`,
t1.`PASTERESET`,
t1.`PHYSICALFIELD`,
t1.`PKEY`,
t1.`PRECISION2`,
t1.`PREDEFINETYPE`,
t1.`PSDATATYPEID`,
t1.`PSDATATYPENAME`,
t1.`PSDEFIELDID`,
t1.`PSDEFIELDNAME`,
t1.`PSDEID`,
t1.`PSDENAME`,
t11.`PSSUBSYSSADEID`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`QUERYCOLUMN`,
t1.`QUERYCS`,
t1.`SERVICECODENAME`,
t1.`STATEFIELD`,
t1.`STRINGCASE`,
t1.`STRLENGTH`,
t1.`TABLENAME`,
t1.`TESTDATA`,
t1.`UNICODECHAR`,
t1.`UNIONKEYVALUE`,
t1.`UNIT`,
t1.`UNITWIDTH`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEOVMODE`,
t1.`USERCAT`,
t1.`USERPARAMS`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`,
t1.`VALUEFORMAT`,
t1.`VALUEPSDEFID`,
t1.`VALUEPSDEFNAME`,
t1.`VIEWCOLLEVEL`
FROM `T_PSDEFIELD` t1 
LEFT JOIN T_PSDATAENTITY t11 ON t1.PSDEID = t11.PSDATAENTITYID 

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
t1.`ALLOWEMPTY`,
t1.`AUDITINFOFORMAT`,
t1.`BIZTAG`,
t1.`CHECKRECURSION`,
t1.`CODENAME`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`CUSTOMEXPORTSCOPE`,
t1.`DBVALUEMODE`,
t1.`DBVALUEMODE2`,
t1.`DEFAULTVALUE`,
t1.`DEFTYPE`,
t1.`DERPSDEFID`,
t1.`DERPSDEFNAME`,
t1.`DUPCHECKMODE`,
t1.`DUPCHECKVALUES`,
t1.`DUPCHKPSDEFID`,
t1.`DUPCHKPSDEFNAME`,
t1.`DVT`,
t1.`DYNAMODELFLAG`,
t1.`ENABLEAUDIT`,
t1.`ENABLECOLPRIV`,
t1.`ENABLEQS`,
t1.`ENABLETEMPDATA`,
t1.`ENABLEUSERINPUT`,
t1.`ENAWRITEBACK`,
t1.`EXPORTSCOPE`,
t1.`EXTENDMODE`,
t1.`FKEY`,
t1.`FORMULAFIELDS`,
t1.`FORMULAFORMAT`,
t1.`IMPORTKEY`,
t1.`IMPORTORDER`,
t1.`IMPORTTAG`,
t1.`INDEXTYPE`,
t1.`LENGTH`,
t1.`LOCKFLAG`,
t1.`LOGICNAME`,
t1.`MAJORFIELD`,
t1.`MEMO`,
t1.`MULTIFORMFIELD`,
t1.`NO2DUPCHKPSDEFID`,
t1.`NO2DUPCHKPSDEFNAME`,
t1.`NO3DUPCHKPSDEFID`,
t1.`NO3DUPCHKPSDEFNAME`,
t1.`NULLVALORDER`,
t1.`ORDERVALUE`,
t1.`PASTERESET`,
t1.`PHYSICALFIELD`,
t1.`PKEY`,
t1.`PRECISION2`,
t1.`PREDEFINETYPE`,
t1.`PSDATATYPEID`,
t1.`PSDATATYPENAME`,
t1.`PSDEFIELDID`,
t1.`PSDEFIELDNAME`,
t1.`PSDEID`,
t1.`PSDENAME`,
t11.`PSSUBSYSSADEID`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`QUERYCOLUMN`,
t1.`QUERYCS`,
t1.`SERVICECODENAME`,
t1.`STATEFIELD`,
t1.`STRINGCASE`,
t1.`STRLENGTH`,
t1.`TABLENAME`,
t1.`TESTDATA`,
t1.`UNICODECHAR`,
t1.`UNIONKEYVALUE`,
t1.`UNIT`,
t1.`UNITWIDTH`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEOVMODE`,
t1.`USERCAT`,
t1.`USERPARAMS`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`,
t1.`VALUEFORMAT`,
t1.`VALUEPSDEFID`,
t1.`VALUEPSDEFNAME`,
t1.`VIEWCOLLEVEL`
FROM `T_PSDEFIELD` t1 
LEFT JOIN T_PSDATAENTITY t11 ON t1.PSDEID = t11.PSDATAENTITYID 

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

