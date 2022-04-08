
# 实体-后台服务架构(PSSYSSFPUB)
## 实体说明
后台服务架构

## 所属模块
[iBiz系统模型](../ibizsysmodel)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [后台服务架构名称](#属性-后台服务架构名称（PSSYSSFPUBNAME）) | PSSYSSFPUBNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [后台服务架构标识](#属性-后台服务架构标识（PSSYSSFPUBID）) | PSSYSSFPUBID | 全局唯一标识，文本类型，用户不可见 | 是 | 否 | 否 |
| 3 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 4 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 5 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | 日期时间型 | 否 | 否 | 否 |
| 6 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | 日期时间型 | 否 | 否 | 否 |
| 7 | [代码名称](#属性-代码名称（CODENAME）) | CODENAME | 文本，可指定长度 | 否 | 否 | 是 |
| 8 | [基类代码包名](#属性-基类代码包名（BASECLSPKGCODENAME）) | BASECLSPKGCODENAME | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [发布内容类型](#属性-发布内容类型（CONTENTTYPE）) | CONTENTTYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 10 | [默认后台服务](#属性-默认后台服务（DEFAULTPUB）) | DEFAULTPUB | 是否逻辑 | 否 | 否 | 是 |
| 11 | [文档模板样式](#属性-文档模板样式（DOCPSSFSTYLEID）) | DOCPSSFSTYLEID | 文本，可指定长度 | 否 | 否 | 是 |
| 12 | [文档模板样式](#属性-文档模板样式（DOCPSSFSTYLENAME）) | DOCPSSFSTYLENAME | 文本，可指定长度 | 否 | 否 | 是 |
| 13 | [备注](#属性-备注（MEMO）) | MEMO | 长文本，长度1000 | 否 | 否 | 是 |
| 14 | [服务框架](#属性-服务框架（PSSFSTYLEID）) | PSSFSTYLEID | 文本，可指定长度 | 否 | 否 | 是 |
| 15 | [服务框架参数](#属性-服务框架参数（PSSFSTYLEPARAMID）) | PSSFSTYLEPARAMID | 文本，可指定长度 | 否 | 否 | 是 |
| 16 | [代码包名](#属性-代码包名（PKGCODENAME）) | PKGCODENAME | 文本，可指定长度 | 否 | 否 | 是 |
| 17 | [服务框架扩展](#属性-服务框架扩展（PSSFSTYLEVERID）) | PSSFSTYLEVERID | 文本，可指定长度 | 否 | 否 | 是 |
| 18 | [服务框架参数](#属性-服务框架参数（PSSFSTYLEPARAMNAME）) | PSSFSTYLEPARAMNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 19 | [服务目录](#属性-服务目录（PUBFOLDER）) | PUBFOLDER | 文本，可指定长度 | 否 | 否 | 是 |
| 20 | [发布标记](#属性-发布标记（PUBTAG）) | PUBTAG | 文本，可指定长度 | 否 | 否 | 是 |
| 21 | [发布标记3](#属性-发布标记3（PUBTAG3）) | PUBTAG3 | 文本，可指定长度 | 否 | 否 | 是 |
| 22 | [发布标记2](#属性-发布标记2（PUBTAG2）) | PUBTAG2 | 文本，可指定长度 | 否 | 否 | 是 |
| 23 | [发布标记4](#属性-发布标记4（PUBTAG4）) | PUBTAG4 | 文本，可指定长度 | 否 | 否 | 是 |
| 24 | [删除模式](#属性-删除模式（REMOVEFLAG）) | REMOVEFLAG | 单项选择(数值) | 否 | 否 | 是 |
| 25 | [服务框架参数](#属性-服务框架参数（STYLEPARAMS）) | STYLEPARAMS | 长文本，长度1000 | 否 | 否 | 是 |
| 26 | [引用系统组件](#属性-引用系统组件（SUBSYSPKGFLAG）) | SUBSYSPKGFLAG | 是否逻辑 | 否 | 否 | 是 |
| 27 | [用户分类](#属性-用户分类（USERCAT）) | USERCAT | 单项选择(文本值) | 否 | 否 | 是 |
| 28 | [用户标记](#属性-用户标记（USERTAG）) | USERTAG | 文本，可指定长度 | 否 | 否 | 是 |
| 29 | [用户标记2](#属性-用户标记2（USERTAG2）) | USERTAG2 | 文本，可指定长度 | 否 | 否 | 是 |
| 30 | [用户标记4](#属性-用户标记4（USERTAG4）) | USERTAG4 | 文本，可指定长度 | 否 | 否 | 是 |
| 31 | [用户标记3](#属性-用户标记3（USERTAG3）) | USERTAG3 | 文本，可指定长度 | 否 | 否 | 是 |
| 32 | [版本号](#属性-版本号（VERSTR）) | VERSTR | 文本，可指定长度 | 否 | 否 | 是 |
| 33 | [父后台服务体系](#属性-父后台服务体系（PPSSYSSFPUBID）) | PPSSYSSFPUBID | 外键值 | 否 | 是 | 是 |
| 34 | [父后台服务体系](#属性-父后台服务体系（PPSSYSSFPUBNAME）) | PPSSYSSFPUBNAME | 外键值文本 | 否 | 是 | 是 |
| 35 | [系统](#属性-系统（PSSYSTEMID）) | PSSYSTEMID | 文本，可指定长度 | 否 | 是 | 是 |
| 36 | [系统](#属性-系统（PSSYSTEMNAME）) | PSSYSTEMNAME | 文本，可指定长度 | 否 | 是 | 是 |

### 属性-后台服务架构名称（PSSYSSFPUBNAME）
#### 属性说明
后台服务架构名称

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-后台服务架构标识（PSSYSSFPUBID）
#### 属性说明
后台服务架构标识

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-基类代码包名（BASECLSPKGCODENAME）
#### 属性说明
基类代码包名

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-发布内容类型（CONTENTTYPE）
#### 属性说明
发布内容类型

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-默认后台服务（DEFAULTPUB）
#### 属性说明
默认后台服务

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文档模板样式（DOCPSSFSTYLEID）
#### 属性说明
文档模板样式

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文档模板样式（DOCPSSFSTYLENAME）
#### 属性说明
文档模板样式

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-服务框架（PSSFSTYLEID）
#### 属性说明
服务框架

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-服务框架参数（PSSFSTYLEPARAMID）
#### 属性说明
服务框架参数

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-代码包名（PKGCODENAME）
#### 属性说明
代码包名

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-服务框架扩展（PSSFSTYLEVERID）
#### 属性说明
服务框架扩展

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-服务框架参数（PSSFSTYLEPARAMNAME）
#### 属性说明
服务框架参数

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-服务目录（PUBFOLDER）
#### 属性说明
服务目录

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-发布标记（PUBTAG）
#### 属性说明
发布标记

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-发布标记3（PUBTAG3）
#### 属性说明
发布标记3

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-发布标记2（PUBTAG2）
#### 属性说明
发布标记2

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-发布标记4（PUBTAG4）
#### 属性说明
发布标记4

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-服务框架参数（STYLEPARAMS）
#### 属性说明
服务框架参数

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-引用系统组件（SUBSYSPKGFLAG）
#### 属性说明
引用系统组件

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-版本号（VERSTR）
#### 属性说明
版本号

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-父后台服务体系（PPSSYSSFPUBID）
#### 属性说明
父后台服务体系

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构标识（PSSYSSFPUBID）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构标识（PSSYSSFPUBID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-父后台服务体系（PPSSYSSFPUBNAME）
#### 属性说明
父后台服务体系

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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 关系实体 | [后台服务架构（PSSYSSFPUB）](../ibizsysmodel/PSSysSFPub) |
| 关系属性 | [后台服务架构名称（PSSYSSFPUBNAME）](../ibizsysmodel/PSSysSFPub/#属性-后台服务架构名称（PSSYSSFPUBNAME）) |
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
| 1 | [后台服务架构名称（PSSYSSFPUBNAME）](#属性-后台服务架构名称（PSSYSSFPUBNAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [后台服务架构名称（PSSYSSFPUBNAME）](#属性-后台服务架构名称（PSSYSSFPUBNAME）) | `%like%` |
| 2 | [发布内容类型（CONTENTTYPE）](#属性-发布内容类型（CONTENTTYPE）) | `=` |
| 3 | [删除模式（REMOVEFLAG）](#属性-删除模式（REMOVEFLAG）) | `=` |
| 4 | [用户分类（USERCAT）](#属性-用户分类（USERCAT）) | `=` |
| 5 | [父后台服务体系（PPSSYSSFPUBID）](#属性-父后台服务体系（PPSSYSSFPUBID）) | `=` |
| 6 | [父后台服务体系（PPSSYSSFPUBNAME）](#属性-父后台服务体系（PPSSYSSFPUBNAME）) | `=` |
| 7 | [父后台服务体系（PPSSYSSFPUBNAME）](#属性-父后台服务体系（PPSSYSSFPUBNAME）) | `%like%` |

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
t1.`BASECLSPKGCODENAME`,
t1.`CODENAME`,
t1.`CONTENTTYPE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEFAULTPUB`,
t1.`DOCPSSFSTYLEID`,
t1.`DOCPSSFSTYLENAME`,
t1.`MEMO`,
t1.`PKGCODENAME`,
t1.`PPSSYSSFPUBID`,
t11.`PSSYSSFPUBNAME` AS `PPSSYSSFPUBNAME`,
t1.`PSSFSTYLEID`,
t1.`PSSFSTYLEPARAMID`,
t1.`PSSFSTYLEPARAMNAME`,
t1.`PSSFSTYLEVERID`,
t1.`PSSYSSFPUBID`,
t1.`PSSYSSFPUBNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`PUBFOLDER`,
t1.`PUBTAG`,
t1.`PUBTAG2`,
t1.`PUBTAG3`,
t1.`PUBTAG4`,
t1.`REMOVEFLAG`,
t1.`STYLEPARAMS`,
t1.`SUBSYSPKGFLAG`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VERSTR`
FROM `T_PSSYSSFPUB` t1 
LEFT JOIN T_PSSYSSFPUB t11 ON t1.PPSSYSSFPUBID = t11.PSSYSSFPUBID 

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
t1.`BASECLSPKGCODENAME`,
t1.`CODENAME`,
t1.`CONTENTTYPE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEFAULTPUB`,
t1.`DOCPSSFSTYLEID`,
t1.`DOCPSSFSTYLENAME`,
t1.`MEMO`,
t1.`PKGCODENAME`,
t1.`PPSSYSSFPUBID`,
t11.`PSSYSSFPUBNAME` AS `PPSSYSSFPUBNAME`,
t1.`PSSFSTYLEID`,
t1.`PSSFSTYLEPARAMID`,
t1.`PSSFSTYLEPARAMNAME`,
t1.`PSSFSTYLEVERID`,
t1.`PSSYSSFPUBID`,
t1.`PSSYSSFPUBNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`PUBFOLDER`,
t1.`PUBTAG`,
t1.`PUBTAG2`,
t1.`PUBTAG3`,
t1.`PUBTAG4`,
t1.`REMOVEFLAG`,
t1.`STYLEPARAMS`,
t1.`SUBSYSPKGFLAG`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VERSTR`
FROM `T_PSSYSSFPUB` t1 
LEFT JOIN T_PSSYSSFPUB t11 ON t1.PPSSYSSFPUBID = t11.PSSYSSFPUBID 

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
t1.`BASECLSPKGCODENAME`,
t1.`CODENAME`,
t1.`CONTENTTYPE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEFAULTPUB`,
t1.`DOCPSSFSTYLEID`,
t1.`DOCPSSFSTYLENAME`,
t1.`MEMO`,
t1.`PKGCODENAME`,
t1.`PPSSYSSFPUBID`,
t11.`PSSYSSFPUBNAME` AS `PPSSYSSFPUBNAME`,
t1.`PSSFSTYLEID`,
t1.`PSSFSTYLEPARAMID`,
t1.`PSSFSTYLEPARAMNAME`,
t1.`PSSFSTYLEVERID`,
t1.`PSSYSSFPUBID`,
t1.`PSSYSSFPUBNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`PUBFOLDER`,
t1.`PUBTAG`,
t1.`PUBTAG2`,
t1.`PUBTAG3`,
t1.`PUBTAG4`,
t1.`REMOVEFLAG`,
t1.`STYLEPARAMS`,
t1.`SUBSYSPKGFLAG`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VERSTR`
FROM `T_PSSYSSFPUB` t1 
LEFT JOIN T_PSSYSSFPUB t11 ON t1.PPSSYSSFPUBID = t11.PSSYSSFPUBID 

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

