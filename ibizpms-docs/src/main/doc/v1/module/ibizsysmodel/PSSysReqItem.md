
# 实体-系统需求项(PSSYSREQITEM)
## 实体说明
系统需求项

## 所属模块
[iBiz系统模型](../ibizsysmodel)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) | （默认） |
| 2 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [系统需求项（PSSYSREQITEM）](../ibizsysmodel/PSSysReqItem) | （默认） |
| 2 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [系统需求项标识](#属性-系统需求项标识（PSSYSREQITEMID）) | PSSYSREQITEMID | 全局唯一标识，文本类型，用户不可见 | 是 | 否 | 否 |
| 2 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 3 | [系统需求项名称](#属性-系统需求项名称（PSSYSREQITEMNAME）) | PSSYSREQITEMNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 4 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | 日期时间型 | 否 | 否 | 否 |
| 5 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | 日期时间型 | 否 | 否 | 否 |
| 6 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 7 | [代码标识](#属性-代码标识（CODENAME）) | CODENAME | 文本，可指定长度 | 否 | 否 | 是 |
| 8 | [项编号](#属性-项编号（ITEMSN）) | ITEMSN | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [项标记](#属性-项标记（ITEMTAG）) | ITEMTAG | 文本，可指定长度 | 否 | 否 | 是 |
| 10 | [项标记2](#属性-项标记2（ITEMTAG2）) | ITEMTAG2 | 文本，可指定长度 | 否 | 否 | 是 |
| 11 | [项类型](#属性-项类型（ITEMTYPE）) | ITEMTYPE | 单项选择(文本值) | 否 | 否 | 否 |
| 12 | [备注](#属性-备注（MEMO）) | MEMO | 长文本，长度1000 | 否 | 否 | 是 |
| 13 | [次序](#属性-次序（ORDERVALUE）) | ORDERVALUE | 整型 | 否 | 否 | 是 |
| 14 | [内容](#属性-内容（REQCONTENT）) | REQCONTENT | HTML文本，没有长度限制 | 否 | 否 | 是 |
| 15 | [用户标记2](#属性-用户标记2（USERTAG2）) | USERTAG2 | 文本，可指定长度 | 否 | 否 | 是 |
| 16 | [用户标记](#属性-用户标记（USERTAG）) | USERTAG | 文本，可指定长度 | 否 | 否 | 是 |
| 17 | [用户分类](#属性-用户分类（USERCAT）) | USERCAT | 单项选择(文本值) | 否 | 否 | 是 |
| 18 | [用户标记3](#属性-用户标记3（USERTAG3）) | USERTAG3 | 文本，可指定长度 | 否 | 否 | 是 |
| 19 | [用户标记4](#属性-用户标记4（USERTAG4）) | USERTAG4 | 文本，可指定长度 | 否 | 否 | 是 |
| 20 | [版本](#属性-版本（VER）) | VER | 整型 | 否 | 否 | 是 |
| 21 | [是否有效](#属性-是否有效（VALIDFLAG）) | VALIDFLAG | 是否逻辑 | 否 | 否 | 否 |
| 22 | [父需求项](#属性-父需求项（PPSSYSREQITEMID）) | PPSSYSREQITEMID | 外键值 | 否 | 是 | 是 |
| 23 | [父需求项](#属性-父需求项（PPSSYSREQITEMNAME）) | PPSSYSREQITEMNAME | 外键值文本 | 否 | 是 | 是 |
| 24 | [需求模块](#属性-需求模块（PSSYSREQMODULEID）) | PSSYSREQMODULEID | 外键值 | 否 | 是 | 是 |
| 25 | [需求模块](#属性-需求模块（PSSYSREQMODULENAME）) | PSSYSREQMODULENAME | 外键值文本 | 否 | 是 | 是 |
| 26 | [系统](#属性-系统（PSSYSTEMID）) | PSSYSTEMID | 文本，可指定长度 | 否 | 是 | 是 |
| 27 | [系统](#属性-系统（PSSYSTEMNAME）) | PSSYSTEMNAME | 文本，可指定长度 | 否 | 是 | 是 |
| 28 | [系统用例](#属性-系统用例（PSSYSUSERCASEID）) | PSSYSUSERCASEID | 文本，可指定长度 | 否 | 是 | 是 |
| 29 | [系统用例](#属性-系统用例（PSSYSUSERCASENAME）) | PSSYSUSERCASENAME | 文本，可指定长度 | 否 | 是 | 是 |

### 属性-系统需求项标识（PSSYSREQITEMID）
#### 属性说明
系统需求项标识

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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统需求项名称（PSSYSREQITEMNAME）
#### 属性说明
系统需求项名称

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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-代码标识（CODENAME）
#### 属性说明
代码标识

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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-项编号（ITEMSN）
#### 属性说明
项编号

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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-项标记（ITEMTAG）
#### 属性说明
项标记

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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-项标记2（ITEMTAG2）
#### 属性说明
项标记2

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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-项类型（ITEMTYPE）
#### 属性说明
项类型

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
单项选择(文本值)

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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-次序（ORDERVALUE）
#### 属性说明
次序

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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-内容（REQCONTENT）
#### 属性说明
内容

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
HTML文本，没有长度限制

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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-版本（VER）
#### 属性说明
版本

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
| 值 | 1 |

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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-是否有效（VALIDFLAG）
#### 属性说明
是否有效

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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-父需求项（PPSSYSREQITEMID）
#### 属性说明
父需求项

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

### 属性-父需求项（PPSSYSREQITEMNAME）
#### 属性说明
父需求项

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

### 属性-需求模块（PSSYSREQMODULEID）
#### 属性说明
需求模块

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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块标识（PSSYSREQMODULEID）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块标识（PSSYSREQMODULEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-需求模块（PSSYSREQMODULENAME）
#### 属性说明
需求模块

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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统用例（PSSYSUSERCASEID）
#### 属性说明
系统用例

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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统用例（PSSYSUSERCASENAME）
#### 属性说明
系统用例

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
| 关系实体 | [系统需求模块（PSSYSREQMODULE）](../ibizsysmodel/PSSysReqModule) |
| 关系属性 | [系统需求模块名称（PSSYSREQMODULENAME）](../ibizsysmodel/PSSysReqModule/#属性-系统需求模块名称（PSSYSREQMODULENAME）) |
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
| 1 | [系统需求项名称（PSSYSREQITEMNAME）](#属性-系统需求项名称（PSSYSREQITEMNAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [系统需求项名称（PSSYSREQITEMNAME）](#属性-系统需求项名称（PSSYSREQITEMNAME）) | `%like%` |
| 2 | [项类型（ITEMTYPE）](#属性-项类型（ITEMTYPE）) | `=` |
| 3 | [用户分类（USERCAT）](#属性-用户分类（USERCAT）) | `=` |
| 4 | [父需求项（PPSSYSREQITEMID）](#属性-父需求项（PPSSYSREQITEMID）) | `=` |
| 5 | [父需求项（PPSSYSREQITEMNAME）](#属性-父需求项（PPSSYSREQITEMNAME）) | `=` |
| 6 | [父需求项（PPSSYSREQITEMNAME）](#属性-父需求项（PPSSYSREQITEMNAME）) | `%like%` |
| 7 | [需求模块（PSSYSREQMODULEID）](#属性-需求模块（PSSYSREQMODULEID）) | `=` |
| 8 | [需求模块（PSSYSREQMODULENAME）](#属性-需求模块（PSSYSREQMODULENAME）) | `=` |
| 9 | [需求模块（PSSYSREQMODULENAME）](#属性-需求模块（PSSYSREQMODULENAME）) | `%like%` |

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
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`ITEMSN`,
t1.`ITEMTAG`,
t1.`ITEMTAG2`,
t1.`ITEMTYPE`,
t1.`MEMO`,
t1.`ORDERVALUE`,
t1.`PPSSYSREQITEMID`,
t11.`PSSYSREQITEMNAME` AS `PPSSYSREQITEMNAME`,
t1.`PSSYSREQITEMID`,
t1.`PSSYSREQITEMNAME`,
t1.`PSSYSREQMODULEID`,
t21.`PSSYSREQMODULENAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`PSSYSUSERCASEID`,
t1.`PSSYSUSERCASENAME`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`,
t1.`VER`
FROM `T_PSSYSREQITEM` t1 
LEFT JOIN T_PSSYSREQITEM t11 ON t1.PPSSYSREQITEMID = t11.PSSYSREQITEMID 
LEFT JOIN T_PSSYSREQMODULE t21 ON t1.PSSYSREQMODULEID = t21.PSSYSREQMODULEID 

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
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`ITEMSN`,
t1.`ITEMTAG`,
t1.`ITEMTAG2`,
t1.`ITEMTYPE`,
t1.`MEMO`,
t1.`ORDERVALUE`,
t1.`PPSSYSREQITEMID`,
t11.`PSSYSREQITEMNAME` AS `PPSSYSREQITEMNAME`,
t1.`PSSYSREQITEMID`,
t1.`PSSYSREQITEMNAME`,
t1.`PSSYSREQMODULEID`,
t21.`PSSYSREQMODULENAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`PSSYSUSERCASEID`,
t1.`PSSYSUSERCASENAME`,
t1.`REQCONTENT`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`,
t1.`VER`
FROM `T_PSSYSREQITEM` t1 
LEFT JOIN T_PSSYSREQITEM t11 ON t1.PPSSYSREQITEMID = t11.PSSYSREQITEMID 
LEFT JOIN T_PSSYSREQMODULE t21 ON t1.PSSYSREQMODULEID = t21.PSSYSREQMODULEID 

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

