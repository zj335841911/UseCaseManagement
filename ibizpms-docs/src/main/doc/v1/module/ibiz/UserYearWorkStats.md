
# 实体-用户年度工作内容统计(IBZ_USERYEARWORKSTATS)
## 实体说明
用户年度工作内容统计

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
| 1 | [用户编号](#属性-用户编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 是 |
| 2 | [真实用户名](#属性-真实用户名（REALNAME）) | REALNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [账号](#属性-账号（ACCOUNT）) | ACCOUNT | 文本，可指定长度 | 否 | 否 | 是 |
| 4 | [角色](#属性-角色（ROLE）) | ROLE | 文本，可指定长度 | 否 | 否 | 是 |
| 5 | [部门编号](#属性-部门编号（DEPT）) | DEPT | 单项选择(文本值) | 否 | 否 | 是 |
| 6 | [累计登录次数](#属性-累计登录次数（VISITS）) | VISITS | 整型 | 否 | 否 | 是 |
| 7 | [累计创建计划数](#属性-累计创建计划数（YEARPLANCNT）) | YEARPLANCNT | 整型 | 否 | 否 | 是 |
| 8 | [累计参与产品数](#属性-累计参与产品数（YEARPRODUCTCNT）) | YEARPRODUCTCNT | 整型 | 否 | 否 | 是 |
| 9 | [累计创建需求数](#属性-累计创建需求数（YEARSTORYCNT）) | YEARSTORYCNT | 整型 | 否 | 否 | 是 |
| 10 | [累计动态数](#属性-累计动态数（YEARACTIONCNT）) | YEARACTIONCNT | 整型 | 否 | 否 | 是 |
| 11 | [累计创建Bug数](#属性-累计创建Bug数（YEARBUGCNT）) | YEARBUGCNT | 整型 | 否 | 否 | 是 |
| 12 | [累计创建用例数](#属性-累计创建用例数（YEARCASECNT）) | YEARCASECNT | 整型 | 否 | 否 | 是 |
| 13 | [累计日志数](#属性-累计日志数（YEARLOGCNT）) | YEARLOGCNT | 整型 | 否 | 否 | 是 |
| 14 | [累计工时数](#属性-累计工时数（YEARESTIMATECNT）) | YEARESTIMATECNT | 整型 | 否 | 否 | 是 |
| 15 | [判断角色](#属性-判断角色（JUDGEROLE）) | JUDGEROLE | 文本，可指定长度 | 否 | 否 | 是 |
| 16 | [累计登录次数](#属性-累计登录次数（YEARVISITS）) | YEARVISITS | 整型 | 否 | 否 | 是 |
| 17 | [年度](#属性-年度（CURYEAR）) | CURYEAR | 文本，可指定长度 | 否 | 否 | 是 |
| 18 | [标题](#属性-标题（TITLE）) | TITLE | 文本，可指定长度 | 否 | 否 | 是 |
| 19 | [月完成任务数](#属性-月完成任务数（MONTHFINISHTASK）) | MONTHFINISHTASK | 整型 | 否 | 否 | 是 |
| 20 | [月累计工时](#属性-月累计工时（MONTESTIMATE）) | MONTESTIMATE | 整型 | 否 | 否 | 是 |
| 21 | [月解决Bug数](#属性-月解决Bug数（MONTRESOLVEDBUG）) | MONTRESOLVEDBUG | 整型 | 否 | 否 | 是 |
| 22 | [当前月](#属性-当前月（CURMONTH）) | CURMONTH | 文本，可指定长度 | 否 | 否 | 是 |
| 23 | [slack](#属性-slack（SLACK）) | SLACK | 文本，可指定长度 | 否 | 否 | 是 |
| 24 | [skype](#属性-skype（SKYPE）) | SKYPE | 文本，可指定长度 | 否 | 否 | 是 |
| 25 | [score](#属性-score（SCORE）) | SCORE | 整型 | 否 | 否 | 是 |
| 26 | [微信](#属性-微信（WEIXIN）) | WEIXIN | 文本，可指定长度 | 否 | 否 | 是 |
| 27 | [入职日期](#属性-入职日期（JOIN）) | JOIN | 日期时间型 | 否 | 否 | 是 |
| 28 | [电话](#属性-电话（PHONE）) | PHONE | 文本，可指定长度 | 否 | 否 | 是 |
| 29 | [fails](#属性-fails（FAILS）) | FAILS | 整型 | 否 | 否 | 是 |
| 30 | [邮箱](#属性-邮箱（EMAIL）) | EMAIL | 文本，可指定长度 | 否 | 否 | 是 |
| 31 | [clientLang](#属性-clientLang（CLIENTLANG）) | CLIENTLANG | 文本，可指定长度 | 否 | 否 | 是 |
| 32 | [逻辑删除标志](#属性-逻辑删除标志（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 33 | [ranzhi](#属性-ranzhi（RANZHI）) | RANZHI | 文本，可指定长度 | 否 | 否 | 是 |
| 34 | [avatar](#属性-avatar（AVATAR）) | AVATAR | 文本，可指定长度 | 否 | 否 | 是 |
| 35 | [源代码账户](#属性-源代码账户（COMMITER）) | COMMITER | 文本，可指定长度 | 否 | 否 | 是 |
| 36 | [性别](#属性-性别（GENDER）) | GENDER | 文本，可指定长度 | 否 | 否 | 是 |
| 37 | [QQ](#属性-QQ（QQ）) | QQ | 文本，可指定长度 | 否 | 否 | 是 |
| 38 | [birthday](#属性-birthday（BIRTHDAY）) | BIRTHDAY | 日期时间型 | 否 | 否 | 是 |
| 39 | [locked](#属性-locked（LOCKED）) | LOCKED | 日期时间型 | 否 | 否 | 是 |
| 40 | [钉钉](#属性-钉钉（DINGDING）) | DINGDING | 文本，可指定长度 | 否 | 否 | 是 |
| 41 | [ip](#属性-ip（IP）) | IP | 文本，可指定长度 | 否 | 否 | 是 |
| 42 | [whatsapp](#属性-whatsapp（WHATSAPP）) | WHATSAPP | 文本，可指定长度 | 否 | 否 | 是 |
| 43 | [zipcode](#属性-zipcode（ZIPCODE）) | ZIPCODE | 文本，可指定长度 | 否 | 否 | 是 |
| 44 | [密码](#属性-密码（PASSWORD）) | PASSWORD | 文本，可指定长度 | 否 | 否 | 是 |
| 45 | [nickname](#属性-nickname（NICKNAME）) | NICKNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 46 | [clientStatus](#属性-clientStatus（CLIENTSTATUS）) | CLIENTSTATUS | 文本，可指定长度 | 否 | 否 | 是 |
| 47 | [scoreLevel](#属性-scoreLevel（SCORELEVEL）) | SCORELEVEL | 整型 | 否 | 否 | 是 |
| 48 | [手机](#属性-手机（MOBILE）) | MOBILE | 文本，可指定长度 | 否 | 否 | 是 |
| 49 | [最后登录](#属性-最后登录（LAST）) | LAST | 整型 | 否 | 否 | 是 |
| 50 | [通讯地址](#属性-通讯地址（ADDRESS）) | ADDRESS | 文本，可指定长度 | 否 | 否 | 是 |

### 属性-用户编号（ID）
#### 属性说明
用户编号

- 是否是主键
是

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
自增标识，整数类型，用户不可见

- Java类型
Long

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

### 属性-真实用户名（REALNAME）
#### 属性说明
真实用户名

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
| 1 | `%like%` |

#### 关系属性
无

### 属性-账号（ACCOUNT）
#### 属性说明
账号

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

### 属性-角色（ROLE）
#### 属性说明
角色

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

### 属性-部门编号（DEPT）
#### 属性说明
部门编号

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
参照数据字典【[真实部门（RealDept）](../../codelist/RealDept)】

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

### 属性-累计登录次数（VISITS）
#### 属性说明
累计登录次数

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

### 属性-累计创建计划数（YEARPLANCNT）
#### 属性说明
累计创建计划数

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
0
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-累计参与产品数（YEARPRODUCTCNT）
#### 属性说明
累计参与产品数

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
0
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-累计创建需求数（YEARSTORYCNT）
#### 属性说明
累计创建需求数

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
0
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-累计动态数（YEARACTIONCNT）
#### 属性说明
累计动态数

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
0
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-累计创建Bug数（YEARBUGCNT）
#### 属性说明
累计创建Bug数

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
0
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-累计创建用例数（YEARCASECNT）
#### 属性说明
累计创建用例数

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
0
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-累计日志数（YEARLOGCNT）
#### 属性说明
累计日志数

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
0
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-累计工时数（YEARESTIMATECNT）
#### 属性说明
累计工时数

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
0
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-判断角色（JUDGEROLE）
#### 属性说明
判断角色

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
(case when t1.role in ('dev','td','pm') then 'dev' when t1.role in ('qd','qa') then 'qa' else 'po' end)
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-累计登录次数（YEARVISITS）
#### 属性说明
累计登录次数

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
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 0 |

- 取值范围/公式
```SQL
(select count(1) from zt_action t where t.actor = t1.account and t.action = 'login' and DATE_FORMAT(t.date,'%Y') = DATE_FORMAT(now(),'%Y'))
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-年度（CURYEAR）
#### 属性说明
年度

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
(DATE_FORMAT(now(),'%Y'))
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-标题（TITLE）
#### 属性说明
标题

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
 CONCAT_WS('',(DATE_FORMAT(now(),'%Y')),'年工作内容统计一览表 —— ',t1.realname)
```

- 数据格式
无

- 是否支持快速搜索
是

- 搜索条件
无

#### 关系属性
无

### 属性-月完成任务数（MONTHFINISHTASK）
#### 属性说明
月完成任务数

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
0
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-月累计工时（MONTESTIMATE）
#### 属性说明
月累计工时

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
0
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-月解决Bug数（MONTRESOLVEDBUG）
#### 属性说明
月解决Bug数

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
0
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-当前月（CURMONTH）
#### 属性说明
当前月

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
'一月'
```

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

### 属性-入职日期（JOIN）
#### 属性说明
入职日期

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

### 属性-源代码账户（COMMITER）
#### 属性说明
源代码账户

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

### 属性-性别（GENDER）
#### 属性说明
性别

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

### 属性-birthday（BIRTHDAY）
#### 属性说明
birthday

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

### 属性-clientStatus（CLIENTSTATUS）
#### 属性说明
clientStatus

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
| 7 | [获取研发人员相关数据](#实体行为-获取研发人员相关数据（GetDevInfomation）) | GetDevInfomation | 实体处理逻辑 | 后台 |
| 8 | [获取产品经理相关数据](#实体行为-获取产品经理相关数据（GetPoInfomation）) | GetPoInfomation | 实体处理逻辑 | 后台 |
| 9 | [获取测试人员相关数据](#实体行为-获取测试人员相关数据（GetQaInfomation）) | GetQaInfomation | 实体处理逻辑 | 后台 |
| 10 | [获取用户所选年度的动作](#实体行为-获取用户所选年度的动作（GetUserYearAction）) | GetUserYearAction | 用户自定义 | 后台 |
| 11 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |
| 12 | [更新标题](#实体行为-更新标题（UpdateTitleByYear）) | UpdateTitleByYear | 用户自定义 | 后台 |

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
### 实体行为-获取研发人员相关数据（GetDevInfomation）
#### 说明
获取研发人员相关数据

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-获取产品经理相关数据（GetPoInfomation）
#### 说明
获取产品经理相关数据

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-获取测试人员相关数据（GetQaInfomation）
#### 说明
获取测试人员相关数据

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-获取用户所选年度的动作（GetUserYearAction）
#### 说明
获取用户所选年度的动作

- 行为类型
用户自定义

- 行为持有者
后台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [获取相关信息<br>（GetInfo）](#逻辑处理-获取相关信息（GetInfo）) | 执行之后 | 是 |  |
### 实体行为-Save（Save）
#### 说明
Save

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-更新标题（UpdateTitleByYear）
#### 说明
更新标题

- 行为类型
用户自定义

- 行为持有者
后台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [更新相关信息<br>（UpdateInfo）](#逻辑处理-更新相关信息（UpdateInfo）) | 执行之后 | 是 |  |

## 逻辑处理
| 序号 | 逻辑 | 逻辑名 | 逻辑持有者 |
| ---- | ---- | ---- | ---- |
| 1 | [获取研发人员相关数据](#逻辑处理-获取研发人员相关数据（GetDevInfomation）) | GetDevInfomation | 后台 |
| 2 | [获取相关信息](#逻辑处理-获取相关信息（GetInfo）) | GetInfo | 后台 |
| 3 | [获取产品经理相关数据](#逻辑处理-获取产品经理相关数据（GetPOInfomation）) | GetPOInfomation | 后台 |
| 4 | [获取测试人员相关数据](#逻辑处理-获取测试人员相关数据（GetQAInformation）) | GetQAInformation | 后台 |
| 5 | [更新相关信息](#逻辑处理-更新相关信息（UpdateInfo）) | UpdateInfo | 后台 |

### 逻辑处理-获取研发人员相关数据（GetDevInfomation）
#### 说明
获取研发人员相关数据

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 获取日志数 | Rawsqlcall2 | 直接SQL调用 |
| 2 | 开始 | Begin | 开始 |
| 3 | 获取工时数 | Rawsqlcall3 | 直接SQL调用 |
| 4 | 获取登录数 | Rawsqlcall4 | 直接SQL调用 |
| 5 | 获取动态数 | Rawsqlcall1 | 直接SQL调用 |
### 逻辑处理-获取相关信息（GetInfo）
#### 说明
获取相关信息

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 获取研发用户信息 | Deaction2 | 实体行为 |
| 2 | 获取产品经理信息 | Deaction4 | 实体行为 |
| 3 | 获取用户信息 | Deaction1 | 实体行为 |
| 4 | 开始 | Begin | 开始 |
| 5 | 获取测试用户信息 | Deaction3 | 实体行为 |
### 逻辑处理-获取产品经理相关数据（GetPOInfomation）
#### 说明
获取产品经理相关数据

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 获取登录数 | Rawsqlcall4 | 直接SQL调用 |
| 3 | 获取需求数 | Rawsqlcall3 | 直接SQL调用 |
| 4 | 获取产品数 | Rawsqlcall1 | 直接SQL调用 |
| 5 | 获取计划数 | Rawsqlcall2 | 直接SQL调用 |
### 逻辑处理-获取测试人员相关数据（GetQAInformation）
#### 说明
获取测试人员相关数据

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 获取创建bug数 | Rawsqlcall2 | 直接SQL调用 |
| 3 | 获取动态数 | Rawsqlcall1 | 直接SQL调用 |
| 4 | 获取登录次数 | Rawsqlcall4 | 直接SQL调用 |
| 5 | 获取创建用例数 | Rawsqlcall3 | 直接SQL调用 |
### 逻辑处理-更新相关信息（UpdateInfo）
#### 说明
更新相关信息

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 获取测试用户信息 | Deaction3 | 实体行为 |
| 3 | 获取产品经理信息 | Deaction4 | 实体行为 |
| 4 | 获取标题 | Rawsqlcall1 | 直接SQL调用 |
| 5 | 获取研发用户信息 | Deaction2 | 实体行为 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [标题（TITLE）](#属性-标题（TITLE）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [真实用户名（REALNAME）](#属性-真实用户名（REALNAME）) | `%like%` |
| 2 | [部门编号（DEPT）](#属性-部门编号（DEPT）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 2 | [月完成任务数及累计工时和解决Bug数](#数据查询-月完成任务数及累计工时和解决Bug数（MonthFinishTaskAndBug）) | MonthFinishTaskAndBug | 否 |
| 3 | [月创建Bug数和创建用例数](#数据查询-月创建Bug数和创建用例数（MonthOpenedBugAndCase）) | MonthOpenedBugAndCase | 否 |
| 4 | [月创建需求数](#数据查询-月创建需求数（MonthOpenedStory）) | MonthOpenedStory | 否 |
| 5 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
t1.`ACCOUNT`,
t1.`ADDRESS`,
t1.`AVATAR`,
t1.`BIRTHDAY`,
t1.`CLIENTLANG`,
t1.`CLIENTSTATUS`,
t1.`COMMITER`,
'一月' AS `CURMONTH`,
(DATE_FORMAT(now(),'%Y')) AS `CURYEAR`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
(case when t1.role in ('dev','td','pm') then 'dev' when t1.role in ('qd','qa') then 'qa' else 'po' end) AS `JUDGEROLE`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
0 AS `MONTESTIMATE`,
0 AS `MONTHFINISHTASK`,
0 AS `MONTRESOLVEDBUG`,
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
 CONCAT_WS('',(DATE_FORMAT(now(),'%Y')),'年工作内容统计一览表 —— ',t1.realname) AS `TITLE`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
0 AS `YEARACTIONCNT`,
0 AS `YEARBUGCNT`,
0 AS `YEARCASECNT`,
0 AS `YEARESTIMATECNT`,
0 AS `YEARLOGCNT`,
0 AS `YEARPLANCNT`,
0 AS `YEARPRODUCTCNT`,
0 AS `YEARSTORYCNT`,
(select count(1) from zt_action t where t.actor = t1.account and t.action = 'login' and DATE_FORMAT(t.date,'%Y') = DATE_FORMAT(now(),'%Y')) AS `YEARVISITS`,
t1.`ZIPCODE`
FROM `zt_user` t1 

```
### 数据查询-月完成任务数及累计工时和解决Bug数（MonthFinishTaskAndBug）
#### 说明
月完成任务数及累计工时和解决Bug数

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.account,CONCAT_WS('',CASE 
	WHEN t21.`YEAR` is NULL THEN
		#{srf.webcontext.curyear}
	ELSE
		t21.`YEAR`
END ,'-',t1.CURMONTH,'-01 00:00:00') as CURMONTH,case when t11.consumed is null then 0 else t11.consumed end as MONTESTIMATE,case when t11.MONTHFINISHTASK is null then 0 else t11.MONTHFINISHTASK end as MONTHFINISHTASK,case when t21.ss is null then 0 else t21.ss end as MONTRESOLVEDBUG   from (
select * from (select DISTINCT t1.actor as account,'01' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'02' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'03' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'04' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'05' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'06' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'07' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'08' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'09' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'10' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'11' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'12' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t) t1 left join (
SELECT
	t11.account,
	t11.date,
	sum( t11.`consumed` ) AS `consumed`,
	COUNT( t11.task ) AS MONTHFINISHTASK 
FROM
	(
SELECT
  DATE_FORMAT( t11.date, '%Y' ) AS `YEAR`,
	DATE_FORMAT( t11.date, '%m' ) AS date,
	t11.account,
	t11.`consumed`,
	t11.task 
FROM
	zt_taskestimate t11 
	) t11 
WHERE
	t11.date NOT IN ( '00', '' ) and t11.`YEAR` = #{srf.webcontext.curyear}
GROUP BY
	t11.account,
	t11.date ) t11 on t11.account = t1.account and t11.date = t1.curmonth
	left join (
SELECT
	tt.`YEAR`,
	tt.resolvedBy,
	tt.resolvedDate,
	COUNT( 1 ) AS ss 
FROM
	( SELECT DATE_FORMAT( t.resolvedDate, '%Y' ) as `YEAR`,DATE_FORMAT( t.resolvedDate, '%m' ) AS resolvedDate, t.resolvedBy FROM zt_bug t WHERE t.resolvedBy <> '' ) tt 
WHERE
	tt.resolvedDate <> '00'  and tt.`YEAR` =   #{srf.webcontext.curyear}
GROUP BY
	tt.resolvedBy,
	tt.resolvedDate ) t21 on t1.account = t21.resolvedBy AND t21.resolvedDate = t1.CURMONTH
```
### 数据查询-月创建Bug数和创建用例数（MonthOpenedBugAndCase）
#### 说明
月创建Bug数和创建用例数

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
 select t1.account,CONCAT_WS('',case when t11.`year` is not null then t11.`YEAR` when t21.`year` is not null then t21.`year` else DATE_FORMAT( now(), '%Y' ) end  ,'-',t1.CURMONTH,'-01 00:00:00') as CURMONTH,case when t11.MONTRESOLVEDBUG is null then 0 else t11.MONTRESOLVEDBUG end as MONTRESOLVEDBUG,case when t21.YEARCASECNT is null then 0 else t21.YEARCASECNT end as YEARCASECNT  from (
select * from (select DISTINCT t1.actor as account,'01' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'02' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'03' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'04' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'05' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'06' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'07' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'08' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'09' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'10' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'11' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'12' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t) t1 left join (select t11.openedBy,t11.openedDate,COUNT(1) as MONTRESOLVEDBUG,t11.`year` from (select t11.openedBy, DATE_FORMAT( t11.openedDate, '%Y' ) AS `YEAR`, 	DATE_FORMAT( t11.openedDate, '%m' ) AS openedDate from zt_bug t11  where t11.deleted = '0') t11 where t11.`YEAR` = #{srf.webcontext.curyear}
					 GROUP BY t11.openedBy,t11.openedDate ) t11 on t11.openedBy = t1.account and t11.openedDate = t1.curmonth 	left join (select t11.openedBy,t11.openedDate,COUNT(1) as YEARCASECNT,t11.`year` from (select t11.openedBy, DATE_FORMAT( t11.openedDate, '%Y' ) AS `YEAR`, 	DATE_FORMAT( t11.openedDate, '%m' ) AS openedDate from zt_case t11  where t11.deleted = '0') t11 where t11.`YEAR` =#{srf.webcontext.curyear} 
					 GROUP BY t11.openedBy,t11.openedDate ) t21 on t21.openedBy = t1.account and t21.openedDate = t1.curmonth
```
### 数据查询-月创建需求数（MonthOpenedStory）
#### 说明
月创建需求数

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.account,CONCAT_WS('',CASE 
	WHEN t11.`YEAR` is NULL THEN
		 #{srf.webcontext.curyear}
	ELSE
		t11.`YEAR`
END ,'-',t1.CURMONTH,'-01 00:00:00') as CURMONTH,case when t11.YEARSTORYCNT is null then 0 else t11.YEARSTORYCNT end as YEARSTORYCNT  from (
select * from (select DISTINCT t1.actor as account,'01' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'02' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'03' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'04' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'05' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'06' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'07' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'08' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'09' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'10' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'11' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'12' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t) t1 left join (select t11.openedBy,t11.`year`,t11.openedDate,COUNT(1) as YEARSTORYCNT from (select t11.openedBy, DATE_FORMAT( t11.openedDate, '%Y' ) AS `YEAR`,
	DATE_FORMAT( t11.openedDate, '%m' ) AS openedDate from zt_story t11  where t11.deleted = '0') t11 where t11.`YEAR` =  #{srf.webcontext.curyear}
	GROUP BY t11.openedBy,t11.openedDate ) t11 on t11.openedBy = t1.account and t11.openedDate = t1.curmonth
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
'一月' AS `CURMONTH`,
(DATE_FORMAT(now(),'%Y')) AS `CURYEAR`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
(case when t1.role in ('dev','td','pm') then 'dev' when t1.role in ('qd','qa') then 'qa' else 'po' end) AS `JUDGEROLE`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
0 AS `MONTESTIMATE`,
0 AS `MONTHFINISHTASK`,
0 AS `MONTRESOLVEDBUG`,
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
 CONCAT_WS('',(DATE_FORMAT(now(),'%Y')),'年工作内容统计一览表 —— ',t1.realname) AS `TITLE`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
0 AS `YEARACTIONCNT`,
0 AS `YEARBUGCNT`,
0 AS `YEARCASECNT`,
0 AS `YEARESTIMATECNT`,
0 AS `YEARLOGCNT`,
0 AS `YEARPLANCNT`,
0 AS `YEARPRODUCTCNT`,
0 AS `YEARSTORYCNT`,
(select count(1) from zt_action t where t.actor = t1.account and t.action = 'login' and DATE_FORMAT(t.date,'%Y') = DATE_FORMAT(now(),'%Y')) AS `YEARVISITS`,
t1.`ZIPCODE`
FROM `zt_user` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据集](#数据集合-数据集（Default）) | Default | 是 |
| 2 | [月完成任务数及累计工时和解决Bug数](#数据集合-月完成任务数及累计工时和解决Bug数（MonthFinishTaskAndBug）) | MonthFinishTaskAndBug | 否 |
| 3 | [月创建Bug数和创建用例数](#数据集合-月创建Bug数和创建用例数（MonthOpenedBugAndCase）) | MonthOpenedBugAndCase | 否 |
| 4 | [月创建需求数](#数据集合-月创建需求数（MonthOpenedStory）) | MonthOpenedStory | 否 |

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
### 数据集合-月完成任务数及累计工时和解决Bug数（MonthFinishTaskAndBug）
#### 说明
月完成任务数及累计工时和解决Bug数

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [月完成任务数及累计工时和解决Bug数（MonthFinishTaskAndBug）](#数据查询-月完成任务数及累计工时和解决Bug数（MonthFinishTaskAndBug）) |
### 数据集合-月创建Bug数和创建用例数（MonthOpenedBugAndCase）
#### 说明
月创建Bug数和创建用例数

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [月创建Bug数和创建用例数（MonthOpenedBugAndCase）](#数据查询-月创建Bug数和创建用例数（MonthOpenedBugAndCase）) |
### 数据集合-月创建需求数（MonthOpenedStory）
#### 说明
月创建需求数

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [月创建需求数（MonthOpenedStory）](#数据查询-月创建需求数（MonthOpenedStory）) |

## 数据导入
无

## 数据导出
无

