
# 实体-我的地盘(IBZ_MYTERRITORY)
## 实体说明
我的地盘

## 所属模块
[iBiz增强模块](../ibiz)

## 实体关系
### 1:N
无
### N:1
无


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [fails](#属性-fails（FAILS）) | FAILS | 整型 | 否 | 否 | 是 |
| 2 | [通讯地址](#属性-通讯地址（ADDRESS）) | ADDRESS | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [密码](#属性-密码（PASSWORD）) | PASSWORD | 文本，可指定长度 | 否 | 否 | 是 |
| 4 | [微信](#属性-微信（WEIXIN）) | WEIXIN | 文本，可指定长度 | 否 | 否 | 是 |
| 5 | [钉钉](#属性-钉钉（DINGDING）) | DINGDING | 文本，可指定长度 | 否 | 否 | 是 |
| 6 | [账户](#属性-账户（ACCOUNT）) | ACCOUNT | 文本，可指定长度 | 否 | 否 | 是 |
| 7 | [ranzhi](#属性-ranzhi（RANZHI）) | RANZHI | 文本，可指定长度 | 否 | 否 | 是 |
| 8 | [slack](#属性-slack（SLACK）) | SLACK | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [真实姓名](#属性-真实姓名（REALNAME）) | REALNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 10 | [locked](#属性-locked（LOCKED）) | LOCKED | 日期时间型 | 否 | 否 | 是 |
| 11 | [scoreLevel](#属性-scoreLevel（SCORELEVEL）) | SCORELEVEL | 整型 | 否 | 否 | 是 |
| 12 | [avatar](#属性-avatar（AVATAR）) | AVATAR | 文本，可指定长度 | 否 | 否 | 是 |
| 13 | [zipcode](#属性-zipcode（ZIPCODE）) | ZIPCODE | 文本，可指定长度 | 否 | 否 | 是 |
| 14 | [所属部门](#属性-所属部门（DEPT）) | DEPT | 整型 | 否 | 否 | 是 |
| 15 | [源代码账户](#属性-源代码账户（COMMITER）) | COMMITER | 文本，可指定长度 | 否 | 否 | 是 |
| 16 | [逻辑删除标志](#属性-逻辑删除标志（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 17 | [最后登录](#属性-最后登录（LAST）) | LAST | 整型 | 否 | 否 | 是 |
| 18 | [skype](#属性-skype（SKYPE）) | SKYPE | 文本，可指定长度 | 否 | 否 | 是 |
| 19 | [score](#属性-score（SCORE）) | SCORE | 整型 | 否 | 否 | 是 |
| 20 | [whatsapp](#属性-whatsapp（WHATSAPP）) | WHATSAPP | 文本，可指定长度 | 否 | 否 | 是 |
| 21 | [访问次数](#属性-访问次数（VISITS）) | VISITS | 整型 | 否 | 否 | 是 |
| 22 | [手机](#属性-手机（MOBILE）) | MOBILE | 文本，可指定长度 | 否 | 否 | 是 |
| 23 | [clientLang](#属性-clientLang（CLIENTLANG）) | CLIENTLANG | 文本，可指定长度 | 否 | 否 | 是 |
| 24 | [入职日期](#属性-入职日期（JOIN）) | JOIN | 日期型 | 否 | 否 | 是 |
| 25 | [ip](#属性-ip（IP）) | IP | 文本，可指定长度 | 否 | 否 | 是 |
| 26 | [邮箱](#属性-邮箱（EMAIL）) | EMAIL | 文本，可指定长度 | 否 | 否 | 是 |
| 27 | [nickname](#属性-nickname（NICKNAME）) | NICKNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 28 | [电话](#属性-电话（PHONE）) | PHONE | 文本，可指定长度 | 否 | 否 | 是 |
| 29 | [birthday](#属性-birthday（BIRTHDAY）) | BIRTHDAY | 日期型 | 否 | 否 | 是 |
| 30 | [ID](#属性-ID（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 31 | [QQ](#属性-QQ（QQ）) | QQ | 文本，可指定长度 | 否 | 否 | 是 |
| 32 | [男女](#属性-男女（GENDER）) | GENDER | 单项选择(文本值) | 否 | 否 | 是 |
| 33 | [职位](#属性-职位（ROLE）) | ROLE | 文本，可指定长度 | 否 | 否 | 是 |
| 34 | [clientStatus](#属性-clientStatus（CLIENTSTATUS）) | CLIENTSTATUS | 单项选择(文本值) | 否 | 否 | 是 |
| 35 | [我的任务](#属性-我的任务（MYTASKS）) | MYTASKS | 整型 | 否 | 否 | 是 |
| 36 | [我的bugs](#属性-我的bugs（MYBUGS）) | MYBUGS | 整型 | 否 | 否 | 是 |
| 37 | [我的过期bug数](#属性-我的过期bug数（MYEBUGS）) | MYEBUGS | 文本，可指定长度 | 否 | 否 | 是 |
| 38 | [我的需求数](#属性-我的需求数（MYSTORYS）) | MYSTORYS | 整型 | 否 | 否 | 是 |
| 39 | [未关闭产品数](#属性-未关闭产品数（PRODUCTS）) | PRODUCTS | 整型 | 否 | 否 | 是 |
| 40 | [过期项目数](#属性-过期项目数（EPROJECTS）) | EPROJECTS | 文本，可指定长度 | 否 | 否 | 是 |
| 41 | [未关闭项目数](#属性-未关闭项目数（PROJECTS）) | PROJECTS | 整型 | 否 | 否 | 是 |
| 42 | [我的过期任务数](#属性-我的过期任务数（MYETASKS）) | MYETASKS | 文本，可指定长度 | 否 | 否 | 是 |
| 43 | [我的待办数](#属性-我的待办数（MYTODOCNT）) | MYTODOCNT | 整型 | 否 | 否 | 是 |
| 44 | [我收藏的需求数](#属性-我收藏的需求数（MYFAVORITESTORYS）) | MYFAVORITESTORYS | 整型 | 否 | 否 | 是 |
| 45 | [我收藏的bugs](#属性-我收藏的bugs（MYFAVORITEBUGS）) | MYFAVORITEBUGS | 整型 | 否 | 否 | 是 |
| 46 | [我收藏的任务](#属性-我收藏的任务（MYFAVORITETASKS）) | MYFAVORITETASKS | 整型 | 否 | 否 | 是 |
| 47 | [我的收藏](#属性-我的收藏（MYFAVORITES）) | MYFAVORITES | 整型 | 否 | 否 | 是 |
| 48 | [我的地盘](#属性-我的地盘（MYTERRITORYCNT）) | MYTERRITORYCNT | 整型 | 否 | 否 | 是 |
| 49 | [今日截止待办](#属性-今日截止待办（MYTODOCNTJZ）) | MYTODOCNTJZ | 文本，可指定长度 | 否 | 否 | 是 |
| 50 | [剩余里程碑](#属性-剩余里程碑（LEFTLCBCNT）) | LEFTLCBCNT | 整型 | 否 | 否 | 是 |
| 51 | [剩余里程碑（今日到期）](#属性-剩余里程碑（今日到期）（LEFTLCBJZCNT）) | LEFTLCBJZCNT | 文本，可指定长度 | 否 | 否 | 是 |
| 52 | [项目成员](#属性-项目成员（PROJECTTEAMCNT）) | PROJECTTEAMCNT | 整型 | 否 | 否 | 是 |
| 53 | [项目成员（今日截止）](#属性-项目成员（今日截止）（PROJECTTEAMJZCNT）) | PROJECTTEAMJZCNT | 文本，可指定长度 | 否 | 否 | 是 |

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
| 1 | `=` |

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
| 值 | 0000-00-00 00:00:00 |

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
无

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
| 值 | 0000-00-00 |

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
| 值 | 0000-00-00 |

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

### 属性-男女（GENDER）
#### 属性说明
男女

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

### 属性-职位（ROLE）
#### 属性说明
职位

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
参照数据字典【[群组（动态）（Role）](../../codelist/Role)】

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

### 属性-我的任务（MYTASKS）
#### 属性说明
我的任务

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

### 属性-我的bugs（MYBUGS）
#### 属性说明
我的bugs

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

### 属性-我的过期bug数（MYEBUGS）
#### 属性说明
我的过期bug数

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

### 属性-我的需求数（MYSTORYS）
#### 属性说明
我的需求数

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

### 属性-未关闭产品数（PRODUCTS）
#### 属性说明
未关闭产品数

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

### 属性-过期项目数（EPROJECTS）
#### 属性说明
过期项目数

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

### 属性-未关闭项目数（PROJECTS）
#### 属性说明
未关闭项目数

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

### 属性-我的过期任务数（MYETASKS）
#### 属性说明
我的过期任务数

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

### 属性-我的待办数（MYTODOCNT）
#### 属性说明
我的待办数

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

### 属性-我收藏的需求数（MYFAVORITESTORYS）
#### 属性说明
我收藏的需求数

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

### 属性-我收藏的bugs（MYFAVORITEBUGS）
#### 属性说明
我收藏的bugs

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

### 属性-我收藏的任务（MYFAVORITETASKS）
#### 属性说明
我收藏的任务

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

### 属性-我的收藏（MYFAVORITES）
#### 属性说明
我的收藏

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

### 属性-我的地盘（MYTERRITORYCNT）
#### 属性说明
我的地盘

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

### 属性-今日截止待办（MYTODOCNTJZ）
#### 属性说明
今日截止待办

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

### 属性-剩余里程碑（LEFTLCBCNT）
#### 属性说明
剩余里程碑

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

### 属性-剩余里程碑（今日到期）（LEFTLCBJZCNT）
#### 属性说明
剩余里程碑（今日到期）

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

### 属性-项目成员（PROJECTTEAMCNT）
#### 属性说明
项目成员

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

### 属性-项目成员（今日截止）（PROJECTTEAMJZCNT）
#### 属性说明
项目成员（今日截止）

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
| 7 | [移动端菜单计数器](#实体行为-移动端菜单计数器（MobMenuCount）) | MobMenuCount | 实体处理逻辑 | 后台 |
| 8 | [我的收藏计数器](#实体行为-我的收藏计数器（MyFavoriteCount）) | MyFavoriteCount | 实体处理逻辑 | 后台 |
| 9 | [我的地盘移动端计数器](#实体行为-我的地盘移动端计数器（MyTerritoryCount）) | MyTerritoryCount | 实体处理逻辑 | 后台 |
| 10 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |

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
### 实体行为-移动端菜单计数器（MobMenuCount）
#### 说明
移动端菜单计数器

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-我的收藏计数器（MyFavoriteCount）
#### 说明
我的收藏计数器

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-我的地盘移动端计数器（MyTerritoryCount）
#### 说明
我的地盘移动端计数器

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

## 逻辑处理
| 序号 | 逻辑 | 逻辑名 | 逻辑持有者 |
| ---- | ---- | ---- | ---- |
| 1 | [移动端菜单计数器](#逻辑处理-移动端菜单计数器（MobMenuCount）) | MobMenuCount | 后台 |
| 2 | [我的收藏计数器](#逻辑处理-我的收藏计数器（MyFavoriteCount）) | MyFavoriteCount | 后台 |
| 3 | [我的地盘移动端计数器](#逻辑处理-我的地盘移动端计数器（MyTerritoryCount）) | MyTerritoryCount | 后台及前台 |

### 逻辑处理-移动端菜单计数器（MobMenuCount）
#### 说明
移动端菜单计数器

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 产品数 | Rawsqlcall1 | 直接SQL调用 |
| 3 | 计算我的 | Rawsqlcall4 | 直接SQL调用 |
| 4 | 收藏 | Deaction1 | 实体行为 |
| 5 | 我的 | Deaction2 | 实体行为 |
| 6 | 项目数 | Rawsqlcall2 | 直接SQL调用 |
| 7 | 计算我的收藏数 | Rawsqlcall3 | 直接SQL调用 |
### 逻辑处理-我的收藏计数器（MyFavoriteCount）
#### 说明
我的收藏计数器

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 我的收藏任务数 | Rawsqlcall3 | 直接SQL调用 |
| 2 | 我的收藏Bug数 | Rawsqlcall2 | 直接SQL调用 |
| 3 | 获取我的收藏需求数 | Rawsqlcall1 | 直接SQL调用 |
| 4 | 开始 | Begin | 开始 |
### 逻辑处理-我的地盘移动端计数器（MyTerritoryCount）
#### 说明
我的地盘移动端计数器

- 逻辑持有者
后台及前台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 我的待办数 | Rawsqlcall4 | 直接SQL调用 |
| 2 | 获取我的Bug数 | Rawsqlcall3 | 直接SQL调用 |
| 3 | 开始 | Begin | 开始 |
| 4 | 获取我的需求数 | Rawsqlcall1 | 直接SQL调用 |
| 5 | 获取我的Bug数 | Rawsqlcall2 | 直接SQL调用 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [真实姓名（REALNAME）](#属性-真实姓名（REALNAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [账户（ACCOUNT）](#属性-账户（ACCOUNT）) | `=` |
| 2 | [真实姓名（REALNAME）](#属性-真实姓名（REALNAME）) | `%like%` |
| 3 | [男女（GENDER）](#属性-男女（GENDER）) | `=` |
| 4 | [clientStatus（CLIENTSTATUS）](#属性-clientStatus（CLIENTSTATUS）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 2 | [我的工作](#数据查询-我的工作（MyWork）) | MyWork | 否 |
| 3 | [我的工作](#数据查询-我的工作（MyWorkMob）) | MyWorkMob | 否 |
| 4 | [我的工作（项目经理）](#数据查询-我的工作（项目经理）（MyWorkPm）) | MyWorkPm | 否 |
| 5 | [个人信息-个人贡献](#数据查询-个人信息-个人贡献（PersonInfo）) | PersonInfo | 否 |
| 6 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |
| 7 | [欢迎](#数据查询-欢迎（Welcome）) | Welcome | 否 |

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
### 数据查询-我的工作（MyWork）
#### 说明
我的工作

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.`ACCOUNT`,
	t11.mytasks,
	CONCAT('已延期 ',t51.MYETASKS) as MYETASKS,
	t21.mybugs,
	CONCAT('已延期 ', t31.myEbugs) as myEbugs,
	t41.mystorys ,
	(select count(1) as projects from zt_project tt where tt.deleted = '0' and (tt.`status` <> 'closed' )) as  projects,
	concat('已延期 ', (select count(1) as eprojects from zt_project tt where tt.deleted = '0' and (tt.`status` <> 'closed' ) and tt.`end` < DATE_FORMAT(now(),'%Y-%m-%d'))) as  eprojects,
	(select count(1) as products from zt_product tt where tt.`status` = 'normal' and tt.deleted = '0' and tt.acl = 'open') as  products
FROM
	(select DISTINCT t1.actor as account from zt_action t1 where t1.actor <> '' and t1.actor is not null) t1
	LEFT JOIN ( SELECT t.assignedTo AS account, COUNT( 1 ) AS mytasks FROM zt_task t GROUP BY t.assignedTo ) t11 ON t1.account = t11.account
	LEFT JOIN ( SELECT t.assignedTo AS account, COUNT( 1 ) AS mybugs FROM zt_bug t GROUP BY t.assignedTo ) t21 ON t1.account = t21.account
	LEFT JOIN (
SELECT
	t.assignedTo AS account,
	COUNT( 1 ) AS myEbugs 
FROM
	zt_bug t 
WHERE
	t.DEADLINE < DATE_FORMAT( now( ), '%Y-%m-%d' ) 
	AND t.`status` = 'active' 
GROUP BY
	t.assignedTo 
	) t31 ON t1.account = t31.account
	LEFT JOIN ( SELECT t.assignedTo AS account, COUNT( 1 ) AS mystorys FROM zt_story t GROUP BY t.assignedTo ) t41 ON t1.account = t41.account
	LEFT JOIN ( SELECT t.assignedTo AS account, COUNT( 1 ) AS MYETASKS FROM zt_task t where (t.`status` = 'wait' or t.`status` = 'doing') and (t.DEADLINE < DATE_FORMAT(now(),'%Y-%m-%d') and t.deadline <> '0000-00-00') GROUP BY t.assignedTo ) t51 ON t1.account = t51.account
```
### 数据查询-我的工作（MyWorkMob）
#### 说明
我的工作

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.`ACCOUNT`,
	t11.mytasks,
	CONCAT(t51.MYETASKS) as MYETASKS,
	t21.mybugs,
	CONCAT( t31.myEbugs) as myEbugs,
	t41.mystorys ,
	(select count(1) as projects from zt_project tt where tt.deleted = '0' and (tt.`status` <> 'closed' )) as  projects,
	concat((select count(1) as eprojects from zt_project tt where tt.deleted = '0' and (tt.`status` <> 'closed' ) and tt.`end` < DATE_FORMAT(now(),'%Y-%m-%d'))) as  eprojects,
	(select count(1) as products from zt_product tt where tt.`status` = 'normal' and tt.deleted = '0' and tt.acl = 'open') as  products
FROM
	(select DISTINCT t1.actor as account from zt_action t1 where t1.actor <> '' and t1.actor is not null) t1
	LEFT JOIN ( SELECT t.assignedTo AS account, COUNT( 1 ) AS mytasks FROM zt_task t GROUP BY t.assignedTo ) t11 ON t1.account = t11.account
	LEFT JOIN ( SELECT t.assignedTo AS account, COUNT( 1 ) AS mybugs FROM zt_bug t GROUP BY t.assignedTo ) t21 ON t1.account = t21.account
	LEFT JOIN (
SELECT
	t.assignedTo AS account,
	COUNT( 1 ) AS myEbugs 
FROM
	zt_bug t 
WHERE
	t.DEADLINE < DATE_FORMAT( now( ), '%Y-%m-%d' ) 
	AND t.`status` = 'active' 
GROUP BY
	t.assignedTo 
	) t31 ON t1.account = t31.account
	LEFT JOIN ( SELECT t.assignedTo AS account, COUNT( 1 ) AS mystorys FROM zt_story t GROUP BY t.assignedTo ) t41 ON t1.account = t41.account
	LEFT JOIN ( SELECT t.assignedTo AS account, COUNT( 1 ) AS MYETASKS FROM zt_task t where (t.`status` = 'wait' or t.`status` = 'doing') and (t.DEADLINE < DATE_FORMAT(now(),'%Y-%m-%d') and t.deadline <> '0000-00-00') GROUP BY t.assignedTo ) t51 ON t1.account = t51.account
```
### 数据查询-我的工作（项目经理）（MyWorkPm）
#### 说明
我的工作（项目经理）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.`ACCOUNT`,
	(select count(1) as projects from zt_project tt where tt.deleted = '0' and (tt.`status` <> 'closed' ) and tt.pm = t1.account) as  projects,
	concat('已延期 ', (select count(1) as eprojects from zt_project tt where tt.deleted = '0' and (tt.`status` <> 'closed' ) and tt.`end` < DATE_FORMAT(now(),'%Y-%m-%d') and tt.pm = t1.account) ) as  eprojects,
	(select count(1) as LEFTLCBCNT from T_PMSEE_MILESTONE tt left JOIN t_pmsee_project t2 on t2.PMSEE_PROJECTID = tt.projectid and tt.version = t2.MILESTONEVERSION where t2.deleted = '0' and tt.`status` = '0' and t2.PMO = t1.account) as LEFTLCBCNT,
	concat('今日里程碑 ',(select count(1) as LEFTLCBJZCNT from T_PMSEE_MILESTONE tt left JOIN t_pmsee_project t2 on t2.PMSEE_PROJECTID = tt.projectid and tt.version = t2.MILESTONEVERSION where t2.deleted = '0' and DATE_FORMAT(now(),'%Y-%m-%d') = DATE_FORMAT(tt.`end`,'%Y-%m-%d') and t2.PMO = t1.account)) as LEFTLCBJZCNT,
	(select count(1) as PROJECTTEAMCNT from (select t2.pm,tt.account from zt_team tt left join zt_project t2 on tt.root = t2.id where tt.type = 'project' and t2.PM is not null and t2.pm <> '' GROUP BY t2.PM, tt.account) tt where tt.pm = t1.account) as PROJECTTEAMCNT,
	concat('今日离场 ',(select count(1) as PROJECTTEAMJZCNT  from (select t2.pm,tt.account from zt_team tt left join zt_project t2 on tt.root = t2.id where DATE_FORMAT(now(),'%Y-%m-%d') = DATE_FORMAT(DATE_ADD(tt.`join`, INTERVAL tt.days day),'%Y-%m-%d')  and tt.type = 'project' and t2.PM is not null and t2.pm <> '' GROUP BY t2.PM, tt.account) tt where tt.pm = t1.account)) as PROJECTTEAMJZCNT,
	(select count(1) as MYTODOCNT from zt_todo t where t.`status` in( 'doing', 'wait') and t.type = 'custom' and t.cycle = '0' and t.account = t1.account) as MYTODOCNT,
	concat('今日截止 ',(select count(1) as MYTODOCNTJZ from zt_todo t where t.`status` in( 'doing', 'wait') and t.type = 'custom' and t.cycle = '0' and DATE_FORMAT(now(),'%Y-%m-%d') >= t.date and t.account = t1.account)) as MYTODOCNTJZ
FROM
	(select DISTINCT t1.actor as account from zt_action t1 where t1.actor <> '' and t1.actor is not null) t1
```
### 数据查询-个人信息-个人贡献（PersonInfo）
#### 说明
个人信息-个人贡献

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT #{srf.sessioncontext.srfloginname} as account, (SELECT count(1) from zt_todo where account = #{srf.sessioncontext.srfloginname} ) as mytodocnt,(SELECT count(1) from zt_story where deleted = '0' and openedBy = #{srf.sessioncontext.srfloginname}) as mystorys, (SELECT count(1) from zt_task where deleted = '0' and (`status` = 'done' or (`status` = 'closed' and closedReason = 'done') ) and parent >= 0 and ((finishedBy = #{srf.sessioncontext.srfloginname} and not EXISTS (SELECT 1 from zt_team t where t.root = id and t.type = 'task')) 
or FIND_IN_SET(#{srf.sessioncontext.srfloginname},finishedList)
)) as mytasks, (SELECT count(1) from zt_bug where `status` in ('closed','resolved') and resolution = 'fixed' and resolvedBy = #{srf.sessioncontext.srfloginname}) as mybugs,
(SELECT count(1) from zt_case where deleted = '0' and openedBy = 
#{srf.sessioncontext.srfloginname}) as MYFAVORITEBUGS
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
### 数据查询-欢迎（Welcome）
#### 说明
欢迎

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select CONCAT(t1.REALNAME,'，',t1.NICKNAME,'!') as realname, t1.ACCOUNT from (SELECT
	t1.`ACCOUNT`,
	(case when DATE_FORMAT(now(),'%H') < 11 AND DATE_FORMAT(now(),'%H') >= 5   then '早上好' when DATE_FORMAT(now(),'%H') < 14 AND DATE_FORMAT(now(),'%H') >= 11 then '中午好' when DATE_FORMAT(now(),'%H') < 19 AND DATE_FORMAT(now(),'%H') >= 14 then '下午好' when (DATE_FORMAT(now(),'%H') >= 19 || DATE_FORMAT(now(),'%H') < 5) then '晚上好' end) AS `NICKNAME`,
	t1.`REALNAME`
FROM
	`zt_user` t1) t1
```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 2 | [我的工作](#数据集合-我的工作（MyWork）) | MyWork | 否 |
| 3 | [我的工作](#数据集合-我的工作（MyWorkMob）) | MyWorkMob | 否 |
| 4 | [我的工作（项目经理）](#数据集合-我的工作（项目经理）（MyWorkPm）) | MyWorkPm | 否 |
| 5 | [个人信息-个人贡献](#数据集合-个人信息-个人贡献（PersonInfo）) | PersonInfo | 否 |
| 6 | [欢迎](#数据集合-欢迎（Welcome）) | Welcome | 否 |

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
### 数据集合-我的工作（MyWork）
#### 说明
我的工作

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我的工作（MyWork）](#数据查询-我的工作（MyWork）) |
### 数据集合-我的工作（MyWorkMob）
#### 说明
我的工作

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我的工作（MyWorkMob）](#数据查询-我的工作（MyWorkMob）) |
### 数据集合-我的工作（项目经理）（MyWorkPm）
#### 说明
我的工作（项目经理）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我的工作（项目经理）（MyWorkPm）](#数据查询-我的工作（项目经理）（MyWorkPm）) |
### 数据集合-个人信息-个人贡献（PersonInfo）
#### 说明
个人信息-个人贡献

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [个人信息-个人贡献（PersonInfo）](#数据查询-个人信息-个人贡献（PersonInfo）) |
### 数据集合-欢迎（Welcome）
#### 说明
欢迎

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [欢迎（Welcome）](#数据查询-欢迎（Welcome）) |

## 数据导入
无

## 数据导出
无

