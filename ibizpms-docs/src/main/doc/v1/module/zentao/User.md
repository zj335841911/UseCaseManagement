
# 实体-用户(ZT_USER)
## 实体说明
用户

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
| 1 | [密码](#属性-密码（PASSWORD）) | PASSWORD | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [通讯地址](#属性-通讯地址（ADDRESS）) | ADDRESS | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [微信](#属性-微信（WEIXIN）) | WEIXIN | 文本，可指定长度 | 否 | 否 | 是 |
| 4 | [钉钉](#属性-钉钉（DINGDING）) | DINGDING | 文本，可指定长度 | 否 | 否 | 是 |
| 5 | [fails](#属性-fails（FAILS）) | FAILS | 整型 | 否 | 否 | 是 |
| 6 | [slack](#属性-slack（SLACK）) | SLACK | 文本，可指定长度 | 否 | 否 | 是 |
| 7 | [ranzhi](#属性-ranzhi（RANZHI）) | RANZHI | 文本，可指定长度 | 否 | 否 | 是 |
| 8 | [账户](#属性-账户（ACCOUNT）) | ACCOUNT | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [locked](#属性-locked（LOCKED）) | LOCKED | 日期时间型 | 否 | 否 | 是 |
| 10 | [avatar](#属性-avatar（AVATAR）) | AVATAR | 文本，可指定长度 | 否 | 否 | 是 |
| 11 | [scoreLevel](#属性-scoreLevel（SCORELEVEL）) | SCORELEVEL | 整型 | 否 | 否 | 是 |
| 12 | [真实姓名](#属性-真实姓名（REALNAME）) | REALNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 13 | [zipcode](#属性-zipcode（ZIPCODE）) | ZIPCODE | 文本，可指定长度 | 否 | 否 | 是 |
| 14 | [所属部门](#属性-所属部门（DEPT）) | DEPT | 整型 | 否 | 否 | 是 |
| 15 | [源代码账户](#属性-源代码账户（COMMITER）) | COMMITER | 文本，可指定长度 | 否 | 否 | 是 |
| 16 | [职位](#属性-职位（ROLE）) | ROLE | 单项选择(文本值) | 否 | 否 | 是 |
| 17 | [逻辑删除标志](#属性-逻辑删除标志（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 18 | [最后登录](#属性-最后登录（LAST）) | LAST | 整型 | 否 | 否 | 是 |
| 19 | [clientStatus](#属性-clientStatus（CLIENTSTATUS）) | CLIENTSTATUS | 单项选择(文本值) | 否 | 否 | 是 |
| 20 | [skype](#属性-skype（SKYPE）) | SKYPE | 文本，可指定长度 | 否 | 否 | 是 |
| 21 | [whatsapp](#属性-whatsapp（WHATSAPP）) | WHATSAPP | 文本，可指定长度 | 否 | 否 | 是 |
| 22 | [score](#属性-score（SCORE）) | SCORE | 整型 | 否 | 否 | 是 |
| 23 | [性别](#属性-性别（GENDER）) | GENDER | 单项选择(文本值) | 否 | 否 | 是 |
| 24 | [手机](#属性-手机（MOBILE）) | MOBILE | 文本，可指定长度 | 否 | 否 | 是 |
| 25 | [clientLang](#属性-clientLang（CLIENTLANG）) | CLIENTLANG | 文本，可指定长度 | 否 | 否 | 是 |
| 26 | [访问次数](#属性-访问次数（VISITS）) | VISITS | 整型 | 否 | 否 | 是 |
| 27 | [入职日期](#属性-入职日期（JOIN）) | JOIN | 日期型 | 否 | 否 | 是 |
| 28 | [邮箱](#属性-邮箱（EMAIL）) | EMAIL | 文本，可指定长度 | 否 | 否 | 是 |
| 29 | [ip](#属性-ip（IP）) | IP | 文本，可指定长度 | 否 | 否 | 是 |
| 30 | [birthday](#属性-birthday（BIRTHDAY）) | BIRTHDAY | 日期型 | 否 | 否 | 是 |
| 31 | [nickname](#属性-nickname（NICKNAME）) | NICKNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 32 | [电话](#属性-电话（PHONE）) | PHONE | 文本，可指定长度 | 否 | 否 | 是 |
| 33 | [ID](#属性-ID（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 34 | [QQ](#属性-QQ（QQ）) | QQ | 文本，可指定长度 | 否 | 否 | 是 |

### 属性-密码（PASSWORD）
#### 属性说明
密码

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

### 属性-通讯地址（ADDRESS）
#### 属性说明
通讯地址

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

### 属性-微信（WEIXIN）
#### 属性说明
微信

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

### 属性-钉钉（DINGDING）
#### 属性说明
钉钉

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

### 属性-fails（FAILS）
#### 属性说明
fails

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
无

#### 关系属性
无

### 属性-slack（SLACK）
#### 属性说明
slack

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

### 属性-ranzhi（RANZHI）
#### 属性说明
ranzhi

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

### 属性-账户（ACCOUNT）
#### 属性说明
账户

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `in(...)` |
| 2 | `notin(...)` |

#### 关系属性
无

### 属性-locked（LOCKED）
#### 属性说明
locked

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
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 1970-00-00 00:00:00 |

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

### 属性-avatar（AVATAR）
#### 属性说明
avatar

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

### 属性-scoreLevel（SCORELEVEL）
#### 属性说明
scoreLevel

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
无

#### 关系属性
无

### 属性-真实姓名（REALNAME）
#### 属性说明
真实姓名

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

### 属性-zipcode（ZIPCODE）
#### 属性说明
zipcode

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

### 属性-所属部门（DEPT）
#### 属性说明
所属部门

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

### 属性-源代码账户（COMMITER）
#### 属性说明
用于关联UAA账号

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

### 属性-职位（ROLE）
#### 属性说明
职位

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
参照数据字典【[群组（动态）（Role）](../../codelist/Role)】

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

### 属性-逻辑删除标志（DELETED）
#### 属性说明
逻辑删除标志

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

### 属性-最后登录（LAST）
#### 属性说明
最后登录

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
无

#### 关系属性
无

### 属性-clientStatus（CLIENTSTATUS）
#### 属性说明
clientStatus

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
参照数据字典【[ZT_USER__CLIENTSTATUS（User__clientStatus）](../../codelist/User__clientStatus)】

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

### 属性-skype（SKYPE）
#### 属性说明
skype

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

### 属性-whatsapp（WHATSAPP）
#### 属性说明
whatsapp

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

### 属性-score（SCORE）
#### 属性说明
score

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
无

#### 关系属性
无

### 属性-性别（GENDER）
#### 属性说明
性别

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
参照数据字典【[ZT_USER__GENDER（User__gender）](../../codelist/User__gender)】

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

### 属性-手机（MOBILE）
#### 属性说明
手机

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

### 属性-clientLang（CLIENTLANG）
#### 属性说明
clientLang

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
| 值 | zh-cn |

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

### 属性-访问次数（VISITS）
#### 属性说明
访问次数

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
无

#### 关系属性
无

### 属性-入职日期（JOIN）
#### 属性说明
入职日期

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
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 1970-00-00 |

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

### 属性-邮箱（EMAIL）
#### 属性说明
邮箱

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

### 属性-ip（IP）
#### 属性说明
ip

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

### 属性-birthday（BIRTHDAY）
#### 属性说明
birthday

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
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 1970-00-00 |

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

### 属性-nickname（NICKNAME）
#### 属性说明
nickname

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

### 属性-电话（PHONE）
#### 属性说明
电话

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

### 属性-ID（ID）
#### 属性说明
ID

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

### 属性-QQ（QQ）
#### 属性说明
QQ

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
| 7 | [根据代码账户查询用户信息](#实体行为-根据代码账户查询用户信息（GetByCommiter）) | getByCommiter | 内置方法 | 后台及前台 |
| 8 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |
| 9 | [同步账号](#实体行为-同步账号（SyncAccount）) | SyncAccount | 用户自定义 | 后台及前台 |

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
### 实体行为-根据代码账户查询用户信息（GetByCommiter）
#### 说明
根据代码账户查询用户信息

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
### 实体行为-同步账号（SyncAccount）
#### 说明
同步账号

- 行为类型
用户自定义

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
| 1 | [真实姓名（REALNAME）](#属性-真实姓名（REALNAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [账户（ACCOUNT）](#属性-账户（ACCOUNT）) | `in(...)` |
| 2 | [账户（ACCOUNT）](#属性-账户（ACCOUNT）) | `notin(...)` |
| 3 | [真实姓名（REALNAME）](#属性-真实姓名（REALNAME）) | `%like%` |
| 4 | [所属部门（DEPT）](#属性-所属部门（DEPT）) | `=` |
| 5 | [职位（ROLE）](#属性-职位（ROLE）) | `=` |
| 6 | [clientStatus（CLIENTSTATUS）](#属性-clientStatus（CLIENTSTATUS）) | `=` |
| 7 | [性别（GENDER）](#属性-性别（GENDER）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [Bug用户](#数据查询-Bug用户（BugUser）) | BugUser | 否 |
| 2 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 3 | [账户获取登录名](#数据查询-账户获取登录名（GetByLogin）) | GetByLogin | 否 |
| 4 | [项目团队管理](#数据查询-项目团队管理（ProjectTeamM）) | ProjectTeamM | 否 |
| 5 | [项目团队成员](#数据查询-项目团队成员（ProjectTeamUser）) | ProjectTeamUser | 否 |
| 6 | [项目团队成员](#数据查询-项目团队成员（ProjectTeamUserTask）) | ProjectTeamUserTask | 否 |
| 7 | [TASKTEAM](#数据查询-TASKTEAM（TaskTeam）) | TaskTeam | 否 |
| 8 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-Bug用户（BugUser）
#### 说明
Bug用户

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACCOUNT`,
t1.`ADDRESS`,
t1.`AVATAR`,
t1.`BIRTHDAY`,
t1.`CLIENTLANG`,
t1.`CLIENTSTATUS`,
t1.`COMMITER`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
t1.`NICKNAME`,
t1.`PASSWORD`,
t1.`PHONE`,
t1.`QQ`,
t1.`RANZHI`,
t1.`REALNAME`,
t1.`ROLE`,
t1.`SCORE`,
t1.`SCORELEVEL`,
t1.`SKYPE`,
t1.`SLACK`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
t1.`ZIPCODE`
FROM `zt_user` t1 

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
t1.`ACCOUNT`,
t1.`ADDRESS`,
t1.`AVATAR`,
t1.`BIRTHDAY`,
t1.`CLIENTLANG`,
t1.`CLIENTSTATUS`,
t1.`COMMITER`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
t1.`NICKNAME`,
t1.`PASSWORD`,
t1.`PHONE`,
t1.`QQ`,
t1.`RANZHI`,
t1.`REALNAME`,
t1.`ROLE`,
t1.`SCORE`,
t1.`SCORELEVEL`,
t1.`SKYPE`,
t1.`SLACK`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
t1.`ZIPCODE`
FROM `zt_user` t1 

```
### 数据查询-账户获取登录名（GetByLogin）
#### 说明
根据ZT账户标识（account、邮箱、手机号、源代码账户）获取登录名，用于关联UAA登录与ZT登录

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACCOUNT`,
t1.`ADDRESS`,
t1.`AVATAR`,
t1.`BIRTHDAY`,
t1.`CLIENTLANG`,
t1.`CLIENTSTATUS`,
t1.`COMMITER`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
t1.`NICKNAME`,
t1.`PASSWORD`,
t1.`PHONE`,
t1.`QQ`,
t1.`RANZHI`,
t1.`REALNAME`,
t1.`ROLE`,
t1.`SCORE`,
t1.`SCORELEVEL`,
t1.`SKYPE`,
t1.`SLACK`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
t1.`ZIPCODE`
FROM `zt_user` t1 

```
### 数据查询-项目团队管理（ProjectTeamM）
#### 说明
排除当前项目已经选择的用户

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACCOUNT`,
t1.`ADDRESS`,
t1.`AVATAR`,
t1.`BIRTHDAY`,
t1.`CLIENTLANG`,
t1.`CLIENTSTATUS`,
t1.`COMMITER`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
t1.`NICKNAME`,
t1.`PASSWORD`,
t1.`PHONE`,
t1.`QQ`,
t1.`RANZHI`,
t1.`REALNAME`,
t1.`ROLE`,
t1.`SCORE`,
t1.`SCORELEVEL`,
t1.`SKYPE`,
t1.`SLACK`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
t1.`ZIPCODE`
FROM `zt_user` t1 

```
### 数据查询-项目团队成员（ProjectTeamUser）
#### 说明
项目团队成员

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACCOUNT`,
t1.`ADDRESS`,
t1.`AVATAR`,
t1.`BIRTHDAY`,
t1.`CLIENTLANG`,
t1.`CLIENTSTATUS`,
t1.`COMMITER`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
t1.`NICKNAME`,
t1.`PASSWORD`,
t1.`PHONE`,
t1.`QQ`,
t1.`RANZHI`,
t1.`REALNAME`,
t1.`ROLE`,
t1.`SCORE`,
t1.`SCORELEVEL`,
t1.`SKYPE`,
t1.`SLACK`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
t1.`ZIPCODE`
FROM `zt_user` t1 

```
### 数据查询-项目团队成员（ProjectTeamUserTask）
#### 说明
项目团队成员

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACCOUNT`,
t1.`ADDRESS`,
t1.`AVATAR`,
t1.`BIRTHDAY`,
t1.`CLIENTLANG`,
t1.`CLIENTSTATUS`,
t1.`COMMITER`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
t1.`NICKNAME`,
t1.`PASSWORD`,
t1.`PHONE`,
t1.`QQ`,
t1.`RANZHI`,
t1.`REALNAME`,
t1.`ROLE`,
t1.`SCORE`,
t1.`SCORELEVEL`,
t1.`SKYPE`,
t1.`SLACK`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
t1.`ZIPCODE`
FROM `zt_user` t1 

```
### 数据查询-TASKTEAM（TaskTeam）
#### 说明
TASKTEAM

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ACCOUNT`, t1.`ADDRESS`, t1.`AVATAR`, t1.`BIRTHDAY`, t1.`CLIENTLANG`, t1.`CLIENTSTATUS`, t1.`COMMITER`, t1.`DELETED`, t1.`DEPT`, t1.`DINGDING`, t1.`EMAIL`, t1.`FAILS`, t1.`GENDER`, t1.`ID`, t1.`IP`, t1.`JOIN`, t1.`LAST`, t1.`LOCKED`, t1.`MOBILE`, t1.`NICKNAME`, t1.`PASSWORD`, t1.`PHONE`, t1.`QQ`, t1.`RANZHI`, t1.`REALNAME`, t1.`ROLE`, t1.`SCORE`, t1.`SCORELEVEL`, t1.`SKYPE`, t1.`SLACK`, t1.`VISITS`, t1.`WEIXIN`, t1.`WHATSAPP`, t1.`ZIPCODE` FROM `zt_user` t1
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
t1.`ADDRESS`,
t1.`AVATAR`,
t1.`BIRTHDAY`,
t1.`CLIENTLANG`,
t1.`CLIENTSTATUS`,
t1.`COMMITER`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
t1.`NICKNAME`,
t1.`PASSWORD`,
t1.`PHONE`,
t1.`QQ`,
t1.`RANZHI`,
t1.`REALNAME`,
t1.`ROLE`,
t1.`SCORE`,
t1.`SCORELEVEL`,
t1.`SKYPE`,
t1.`SLACK`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
t1.`ZIPCODE`
FROM `zt_user` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [Bug用户](#数据集合-Bug用户（BugUser）) | BugUser | 否 |
| 2 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 3 | [根据源代码账户获取登录名](#数据集合-根据源代码账户获取登录名（GetByCommiter）) | GetByCommiter | 否 |
| 4 | [项目团队管理](#数据集合-项目团队管理（ProjectTeamM）) | ProjectTeamM | 否 |
| 5 | [项目团队成员](#数据集合-项目团队成员（ProjectTeamUser）) | ProjectTeamUser | 否 |
| 6 | [项目团队成员](#数据集合-项目团队成员（ProjectTeamUserTask）) | ProjectTeamUserTask | 否 |
| 7 | [TASKTEAM](#数据集合-TASKTEAM（TaskTeam）) | TaskTeam | 否 |

### 数据集合-Bug用户（BugUser）
#### 说明
Bug用户

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [Bug用户（BugUser）](#数据查询-Bug用户（BugUser）) |
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
### 数据集合-根据源代码账户获取登录名（GetByCommiter）
#### 说明
根据源代码账户获取登录名

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [账户获取登录名（GetByLogin）](#数据查询-账户获取登录名（GetByLogin）) |
### 数据集合-项目团队管理（ProjectTeamM）
#### 说明
项目团队管理

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目团队管理（ProjectTeamM）](#数据查询-项目团队管理（ProjectTeamM）) |
### 数据集合-项目团队成员（ProjectTeamUser）
#### 说明
项目团队成员

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目团队成员（ProjectTeamUser）](#数据查询-项目团队成员（ProjectTeamUser）) |
### 数据集合-项目团队成员（ProjectTeamUserTask）
#### 说明
项目团队成员

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目团队成员（ProjectTeamUserTask）](#数据查询-项目团队成员（ProjectTeamUserTask）) |
### 数据集合-TASKTEAM（TaskTeam）
#### 说明
TASKTEAM

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [TASKTEAM（TaskTeam）](#数据查询-TASKTEAM（TaskTeam）) |

## 数据导入
无

## 数据导出
无

