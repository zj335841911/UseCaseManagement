
# 实体-外部接口实体(PSSUBSYSSADE)
## 实体说明
外部接口实体

## 所属模块
[iBiz系统模型](../ibizsysmodel)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [外部接口实体标识](#属性-外部接口实体标识（PSSUBSYSSADEID）) | PSSUBSYSSADEID | 全局唯一标识，文本类型，用户不可见 | 是 | 否 | 否 |
| 2 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 3 | [外部接口实体名称](#属性-外部接口实体名称（PSSUBSYSSADENAME）) | PSSUBSYSSADENAME | 文本，可指定长度 | 否 | 否 | 是 |
| 4 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | 日期时间型 | 否 | 否 | 否 |
| 5 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 6 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | 日期时间型 | 否 | 否 | 否 |
| 7 | [代码名称2](#属性-代码名称2（CODENAME2）) | CODENAME2 | 文本，可指定长度 | 否 | 否 | 是 |
| 8 | [代码名称](#属性-代码名称（CODENAME）) | CODENAME | 文本，可指定长度 | 否 | 否 | 否 |
| 9 | [实体标记](#属性-实体标记（DETAG）) | DETAG | 文本，可指定长度 | 否 | 否 | 是 |
| 10 | [实体标记2](#属性-实体标记2（DETAG2）) | DETAG2 | 文本，可指定长度 | 否 | 否 | 是 |
| 11 | [备注](#属性-备注（MEMO）) | MEMO | 长文本，长度1000 | 否 | 否 | 是 |
| 12 | [接口模式](#属性-接口模式（MAJORFLAG）) | MAJORFLAG | 单项选择(数值) | 否 | 否 | 是 |
| 13 | [逻辑名称](#属性-逻辑名称（LOGICNAME）) | LOGICNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 14 | [同步模型模式](#属性-同步模型模式（SYNCMODELMODE）) | SYNCMODELMODE | 单项选择(文本值) | 否 | 否 | 是 |
| 15 | [用户分类](#属性-用户分类（USERCAT）) | USERCAT | 单项选择(文本值) | 否 | 否 | 是 |
| 16 | [用户标记](#属性-用户标记（USERTAG）) | USERTAG | 文本，可指定长度 | 否 | 否 | 是 |
| 17 | [用户标记2](#属性-用户标记2（USERTAG2）) | USERTAG2 | 文本，可指定长度 | 否 | 否 | 是 |
| 18 | [用户标记3](#属性-用户标记3（USERTAG3）) | USERTAG3 | 文本，可指定长度 | 否 | 否 | 是 |
| 19 | [用户标记4](#属性-用户标记4（USERTAG4）) | USERTAG4 | 文本，可指定长度 | 否 | 否 | 是 |
| 20 | [是否启用](#属性-是否启用（VALIDFLAG）) | VALIDFLAG | 是否逻辑 | 否 | 否 | 否 |
| 21 | [子系统接口](#属性-子系统接口（PSSUBSYSSERVICEAPINAME）) | PSSUBSYSSERVICEAPINAME | 外键值文本 | 否 | 是 | 否 |
| 22 | [子系统接口](#属性-子系统接口（PSSUBSYSSERVICEAPIID）) | PSSUBSYSSERVICEAPIID | 外键值 | 否 | 是 | 否 |

### 属性-外部接口实体标识（PSSUBSYSSADEID）
#### 属性说明
外部接口实体标识

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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-外部接口实体名称（PSSUBSYSSADENAME）
#### 属性说明
外部接口实体名称

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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-代码名称2（CODENAME2）
#### 属性说明
代码名称2

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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-接口模式（MAJORFLAG）
#### 属性说明
接口模式

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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-逻辑名称（LOGICNAME）
#### 属性说明
逻辑名称

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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-同步模型模式（SYNCMODELMODE）
#### 属性说明
同步模型模式

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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-子系统接口（PSSUBSYSSERVICEAPINAME）
#### 属性说明
子系统接口

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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口名称（PSSUBSYSSERVICEAPINAME）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口名称（PSSUBSYSSERVICEAPINAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-子系统接口（PSSUBSYSSERVICEAPIID）
#### 属性说明
子系统接口

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
| 关系实体 | [外部服务接口（PSSUBSYSSERVICEAPI）](../ibizsysmodel/PSSubSysServiceAPI) |
| 关系属性 | [外部服务接口标识（PSSUBSYSSERVICEAPIID）](../ibizsysmodel/PSSubSysServiceAPI/#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) |
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
| 1 | [外部接口实体名称（PSSUBSYSSADENAME）](#属性-外部接口实体名称（PSSUBSYSSADENAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [外部接口实体名称（PSSUBSYSSADENAME）](#属性-外部接口实体名称（PSSUBSYSSADENAME）) | `%like%` |
| 2 | [接口模式（MAJORFLAG）](#属性-接口模式（MAJORFLAG）) | `=` |
| 3 | [同步模型模式（SYNCMODELMODE）](#属性-同步模型模式（SYNCMODELMODE）) | `=` |
| 4 | [用户分类（USERCAT）](#属性-用户分类（USERCAT）) | `=` |
| 5 | [子系统接口（PSSUBSYSSERVICEAPINAME）](#属性-子系统接口（PSSUBSYSSERVICEAPINAME）) | `=` |
| 6 | [子系统接口（PSSUBSYSSERVICEAPINAME）](#属性-子系统接口（PSSUBSYSSERVICEAPINAME）) | `%like%` |
| 7 | [子系统接口（PSSUBSYSSERVICEAPIID）](#属性-子系统接口（PSSUBSYSSERVICEAPIID）) | `=` |

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
t1.`CODENAME`,
t1.`CODENAME2`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DETAG`,
t1.`DETAG2`,
t1.`LOGICNAME`,
t1.`MAJORFLAG`,
t1.`MEMO`,
t1.`PSSUBSYSSADEID`,
t1.`PSSUBSYSSADENAME`,
t1.`PSSUBSYSSERVICEAPIID`,
t11.`PSSUBSYSSERVICEAPINAME`,
t1.`SYNCMODELMODE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`
FROM `T_PSSUBSYSSADE` t1 
LEFT JOIN T_PSSUBSYSSERVICEAPI t11 ON t1.PSSUBSYSSERVICEAPIID = t11.PSSUBSYSSERVICEAPIID 

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
t1.`CODENAME`,
t1.`CODENAME2`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DETAG`,
t1.`DETAG2`,
t1.`LOGICNAME`,
t1.`MAJORFLAG`,
t1.`MEMO`,
t1.`PSSUBSYSSADEID`,
t1.`PSSUBSYSSADENAME`,
t1.`PSSUBSYSSERVICEAPIID`,
t11.`PSSUBSYSSERVICEAPINAME`,
t1.`SYNCMODELMODE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`
FROM `T_PSSUBSYSSADE` t1 
LEFT JOIN T_PSSUBSYSSERVICEAPI t11 ON t1.PSSUBSYSSERVICEAPIID = t11.PSSUBSYSSERVICEAPIID 

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

