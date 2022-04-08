
# 实体-人员(IBZEMP)
## 实体说明
人员

## 所属模块
[ou组织用户管理模块](../ou)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [组成员（SYS_TEAMMEMBER）](../ou/SysTeamMember) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [部门（SYS_DEPT）](../ou/SysDepartment) | （默认） |
| 2 | [单位（SYS_ORG）](../ou/SysOrganization) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [用户标识](#属性-用户标识（USERID）) | USERID | 文本，可指定长度 | 是 | 否 | 是 |
| 2 | [用户全局名](#属性-用户全局名（USERNAME）) | USERNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [姓名](#属性-姓名（PERSONNAME）) | PERSONNAME | 文本，可指定长度 | 否 | 否 | 否 |
| 4 | [用户工号](#属性-用户工号（USERCODE）) | USERCODE | 文本，可指定长度 | 否 | 否 | 否 |
| 5 | [登录名](#属性-登录名（LOGINNAME）) | LOGINNAME | 文本，可指定长度 | 否 | 否 | 否 |
| 6 | [密码](#属性-密码（PASSWORD）) | PASSWORD | 文本，可指定长度 | 否 | 否 | 否 |
| 7 | [区属](#属性-区属（DOMAINS）) | DOMAINS | 文本，可指定长度 | 否 | 否 | 是 |
| 8 | [主部门](#属性-主部门（MDEPTID）) | MDEPTID | 外键值 | 否 | 是 | 是 |
| 9 | [主部门代码](#属性-主部门代码（MDEPTCODE）) | MDEPTCODE | 外键值附加数据 | 否 | 是 | 是 |
| 10 | [主部门名称](#属性-主部门名称（MDEPTNAME）) | MDEPTNAME | 外键值文本 | 否 | 是 | 是 |
| 11 | [业务编码](#属性-业务编码（BCODE）) | BCODE | 文本，可指定长度 | 否 | 是 | 是 |
| 12 | [单位](#属性-单位（ORGID）) | ORGID | 外键值 | 否 | 是 | 是 |
| 13 | [单位代码](#属性-单位代码（ORGCODE）) | ORGCODE | 外键值附加数据 | 否 | 是 | 是 |
| 14 | [单位名称](#属性-单位名称（ORGNAME）) | ORGNAME | 外键值文本 | 否 | 是 | 是 |
| 15 | [昵称别名](#属性-昵称别名（NICKNAME）) | NICKNAME | 文本，可指定长度 | 否 | 是 | 是 |
| 16 | [性别](#属性-性别（SEX）) | SEX | 单项选择(文本值) | 否 | 是 | 是 |
| 17 | [联系方式](#属性-联系方式（PHONE）) | PHONE | 文本，可指定长度 | 否 | 是 | 是 |
| 18 | [邮件](#属性-邮件（EMAIL）) | EMAIL | 文本，可指定长度 | 否 | 是 | 是 |
| 19 | [社交账号](#属性-社交账号（AVATAR）) | AVATAR | 文本，可指定长度 | 否 | 是 | 是 |
| 20 | [地址](#属性-地址（ADDR）) | ADDR | 文本，可指定长度 | 否 | 是 | 是 |
| 21 | [照片](#属性-照片（USERICON）) | USERICON | 文本，可指定长度 | 否 | 是 | 是 |
| 22 | [ip地址](#属性-ip地址（IPADDR）) | IPADDR | 文本，可指定长度 | 否 | 是 | 是 |
| 23 | [语言](#属性-语言（LANG）) | LANG | 文本，可指定长度 | 否 | 是 | 是 |
| 24 | [备注](#属性-备注（MEMO）) | MEMO | 文本，可指定长度 | 否 | 是 | 是 |
| 25 | [保留](#属性-保留（RESERVER）) | RESERVER | 文本，可指定长度 | 否 | 是 | 是 |
| 26 | [排序](#属性-排序（SHOWORDER）) | SHOWORDER | 整型 | 否 | 是 | 是 |
| 27 | [逻辑有效](#属性-逻辑有效（ENABLE）) | ENABLE | 是否逻辑 | 否 | 是 | 是 |
| 28 | [创建时间](#属性-创建时间（CREATEDATE）) | CREATEDATE | 日期时间型 | 否 | 是 | 是 |
| 29 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | 文本，可指定长度 | 否 | 是 | 否 |
| 30 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | 文本，可指定长度 | 否 | 是 | 否 |
| 31 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | 日期时间型 | 否 | 是 | 否 |

### 属性-用户标识（USERID）
#### 属性说明
用户标识

- 是否是主键
是

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-用户全局名（USERNAME）
#### 属性说明
用户全局名

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
| 2 | `in(...)` |
| 3 | `%like%` |
| 4 | `notin(...)` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-姓名（PERSONNAME）
#### 属性说明
姓名

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
是

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `%like%` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-用户工号（USERCODE）
#### 属性说明
用户工号

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-登录名（LOGINNAME）
#### 属性说明
登录名

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-区属（DOMAINS）
#### 属性说明
区属

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-主部门（MDEPTID）
#### 属性说明
主部门

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
| 关系实体 | [部门（SYS_DEPT）](../ou/SysDepartment) |
| 关系属性 | [部门标识（DEPTID）](../ou/SysDepartment/#属性-部门标识（DEPTID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-主部门代码（MDEPTCODE）
#### 属性说明
主部门代码

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

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
| 关系实体 | [部门（SYS_DEPT）](../ou/SysDepartment) |
| 关系属性 | [部门代码（DEPTCODE）](../ou/SysDepartment/#属性-部门代码（DEPTCODE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-主部门名称（MDEPTNAME）
#### 属性说明
主部门名称

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
| 关系实体 | [部门（SYS_DEPT）](../ou/SysDepartment) |
| 关系属性 | [部门名称（DEPTNAME）](../ou/SysDepartment/#属性-部门名称（DEPTNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-业务编码（BCODE）
#### 属性说明
业务编码

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
| 关系实体 | [部门（SYS_DEPT）](../ou/SysDepartment) |
| 关系属性 | [部门名称（DEPTNAME）](../ou/SysDepartment/#属性-部门名称（DEPTNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-单位（ORGID）
#### 属性说明
单位

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [单位标识（ORGID）](../ou/SysOrganization/#属性-单位标识（ORGID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-单位代码（ORGCODE）
#### 属性说明
单位代码

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [单位代码（ORGCODE）](../ou/SysOrganization/#属性-单位代码（ORGCODE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-单位名称（ORGNAME）
#### 属性说明
单位名称

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-昵称别名（NICKNAME）
#### 属性说明
昵称别名

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-性别（SEX）
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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-联系方式（PHONE）
#### 属性说明
联系方式

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-邮件（EMAIL）
#### 属性说明
邮件

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-社交账号（AVATAR）
#### 属性说明
社交账号

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-地址（ADDR）
#### 属性说明
地址

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-照片（USERICON）
#### 属性说明
照片

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-ip地址（IPADDR）
#### 属性说明
ip地址

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-语言（LANG）
#### 属性说明
语言

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-备注（MEMO）
#### 属性说明
备注

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-保留（RESERVER）
#### 属性说明
保留

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-排序（SHOWORDER）
#### 属性说明
排序

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-逻辑有效（ENABLE）
#### 属性说明
逻辑有效

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-创建时间（CREATEDATE）
#### 属性说明
创建时间

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
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
| 1 | [姓名（PERSONNAME）](#属性-姓名（PERSONNAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [用户全局名（USERNAME）](#属性-用户全局名（USERNAME）) | `=` |
| 2 | [用户全局名（USERNAME）](#属性-用户全局名（USERNAME）) | `in(...)` |
| 3 | [用户全局名（USERNAME）](#属性-用户全局名（USERNAME）) | `%like%` |
| 4 | [用户全局名（USERNAME）](#属性-用户全局名（USERNAME）) | `notin(...)` |
| 5 | [姓名（PERSONNAME）](#属性-姓名（PERSONNAME）) | `%like%` |
| 6 | [主部门（MDEPTID）](#属性-主部门（MDEPTID）) | `=` |
| 7 | [主部门名称（MDEPTNAME）](#属性-主部门名称（MDEPTNAME）) | `=` |
| 8 | [主部门名称（MDEPTNAME）](#属性-主部门名称（MDEPTNAME）) | `%like%` |
| 9 | [单位（ORGID）](#属性-单位（ORGID）) | `=` |
| 10 | [单位名称（ORGNAME）](#属性-单位名称（ORGNAME）) | `=` |
| 11 | [单位名称（ORGNAME）](#属性-单位名称（ORGNAME）) | `%like%` |
| 12 | [性别（SEX）](#属性-性别（SEX）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [Bug用户](#数据查询-Bug用户（BugUser）) | BugUser | 否 |
| 2 | [联系人用户](#数据查询-联系人用户（ContActList）) | ContActList | 否 |
| 3 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 4 | [项目团队管理](#数据查询-项目团队管理（ProductTeamM）) | ProductTeamM | 否 |
| 5 | [项目团队管理](#数据查询-项目团队管理（ProjectTeamM）) | ProjectTeamM | 否 |
| 6 | [项目团队管理](#数据查询-项目团队管理（ProjectTeamMProduct）) | ProjectTeamMProduct | 否 |
| 7 | [项目团队成员(临时)](#数据查询-项目团队成员(临时)（ProjectTeamTaskUserTemp）) | ProjectTeamTaskUserTemp | 否 |
| 8 | [项目团队成员](#数据查询-项目团队成员（ProjectTeamUser）) | ProjectTeamUser | 否 |
| 9 | [项目团队成员](#数据查询-项目团队成员（ProjectTeamUserTask）) | ProjectTeamUserTask | 否 |
| 10 | [项目团队成员选择](#数据查询-项目团队成员选择（ProjectteamPk）) | ProjectteamPk | 否 |
| 11 | [产品团队成员选择](#数据查询-产品团队成员选择（StoryProductTeamPK）) | StoryProductTeamPK | 否 |
| 12 | [任务多人团队](#数据查询-任务多人团队（TaskMTeam）) | TaskMTeam | 否 |
| 13 | [任务团队](#数据查询-任务团队（TaskTeam）) | TaskTeam | 否 |
| 14 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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

```
### 数据查询-联系人用户（ContActList）
#### 说明
联系人用户

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ADDR`,
t1.`AVATAR`,
t1.`BCODE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DOMAINS`,
t1.`EMAIL`,
t1.`ENABLE`,
t1.`IPADDR`,
t1.`LANG`,
t1.`LOGINNAME`,
t1.`MDEPTCODE`,
t1.`MDEPTID`,
t1.`MDEPTNAME`,
t1.`MEMO`,
t1.`NICKNAME`,
t1.`ORGCODE`,
t1.`ORGID`,
t1.`ORGNAME`,
t1.`PASSWORD`,
t1.`PERSONNAME`,
t1.`PHONE`,
t1.`RESERVER`,
t1.`SEX`,
t1.`SHOWORDER`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCODE`,
t1.`USERICON`,
t1.`USERID`,
t1.`USERNAME`
FROM `T_IBZEMP` t1 

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
t1.`ADDR`,
t1.`AVATAR`,
t1.`BCODE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DOMAINS`,
t1.`EMAIL`,
t1.`ENABLE`,
t1.`IPADDR`,
t1.`LANG`,
t1.`LOGINNAME`,
t1.`MDEPTCODE`,
t1.`MDEPTID`,
t1.`MDEPTNAME`,
t1.`MEMO`,
t1.`NICKNAME`,
t1.`ORGCODE`,
t1.`ORGID`,
t1.`ORGNAME`,
t1.`PASSWORD`,
t1.`PERSONNAME`,
t1.`PHONE`,
t1.`RESERVER`,
t1.`SEX`,
t1.`SHOWORDER`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCODE`,
t1.`USERICON`,
t1.`USERID`,
t1.`USERNAME`
FROM `T_IBZEMP` t1 

```
### 数据查询-项目团队管理（ProductTeamM）
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
t1.`ADDR`,
t1.`AVATAR`,
t1.`BCODE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DOMAINS`,
t1.`EMAIL`,
t1.`ENABLE`,
t1.`IPADDR`,
t1.`LANG`,
t1.`LOGINNAME`,
t1.`MDEPTCODE`,
t1.`MDEPTID`,
t1.`MDEPTNAME`,
t1.`MEMO`,
t1.`NICKNAME`,
t1.`ORGCODE`,
t1.`ORGID`,
t1.`ORGNAME`,
t1.`PASSWORD`,
t1.`PERSONNAME`,
t1.`PHONE`,
t1.`RESERVER`,
t1.`SEX`,
t1.`SHOWORDER`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCODE`,
t1.`USERICON`,
t1.`USERID`,
t1.`USERNAME`
FROM `T_IBZEMP` t1 

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
t1.`ADDR`,
t1.`AVATAR`,
t1.`BCODE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DOMAINS`,
t1.`EMAIL`,
t1.`ENABLE`,
t1.`IPADDR`,
t1.`LANG`,
t1.`LOGINNAME`,
t1.`MDEPTCODE`,
t1.`MDEPTID`,
t1.`MDEPTNAME`,
t1.`MEMO`,
t1.`NICKNAME`,
t1.`ORGCODE`,
t1.`ORGID`,
t1.`ORGNAME`,
t1.`PASSWORD`,
t1.`PERSONNAME`,
t1.`PHONE`,
t1.`RESERVER`,
t1.`SEX`,
t1.`SHOWORDER`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCODE`,
t1.`USERICON`,
t1.`USERID`,
t1.`USERNAME`
FROM `T_IBZEMP` t1 

```
### 数据查询-项目团队管理（ProjectTeamMProduct）
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
t1.`ADDR`,
t1.`AVATAR`,
t1.`BCODE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DOMAINS`,
t1.`EMAIL`,
t1.`ENABLE`,
t1.`IPADDR`,
t1.`LANG`,
t1.`LOGINNAME`,
t1.`MDEPTCODE`,
t1.`MDEPTID`,
t1.`MDEPTNAME`,
t1.`MEMO`,
t1.`NICKNAME`,
t1.`ORGCODE`,
t1.`ORGID`,
t1.`ORGNAME`,
t1.`PASSWORD`,
t1.`PERSONNAME`,
t1.`PHONE`,
t1.`RESERVER`,
t1.`SEX`,
t1.`SHOWORDER`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCODE`,
t1.`USERICON`,
t1.`USERID`,
t1.`USERNAME`
FROM `T_IBZEMP` t1 

```
### 数据查询-项目团队成员(临时)（ProjectTeamTaskUserTemp）
#### 说明
项目团队成员(临时)

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL

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

```
### 数据查询-项目团队成员选择（ProjectteamPk）
#### 说明
项目团队成员选择

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ADDR`,
t1.`AVATAR`,
t1.`BCODE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DOMAINS`,
t1.`EMAIL`,
t1.`ENABLE`,
t1.`IPADDR`,
t1.`LANG`,
t1.`LOGINNAME`,
t1.`MDEPTCODE`,
t1.`MDEPTID`,
t1.`MDEPTNAME`,
t1.`MEMO`,
t1.`NICKNAME`,
t1.`ORGCODE`,
t1.`ORGID`,
t1.`ORGNAME`,
t1.`PASSWORD`,
t1.`PERSONNAME`,
t1.`PHONE`,
t1.`RESERVER`,
t1.`SEX`,
t1.`SHOWORDER`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCODE`,
t1.`USERICON`,
t1.`USERID`,
t1.`USERNAME`
FROM `T_IBZEMP` t1 

```
### 数据查询-产品团队成员选择（StoryProductTeamPK）
#### 说明
产品团队成员选择

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ADDR`,
t1.`AVATAR`,
t1.`BCODE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DOMAINS`,
t1.`EMAIL`,
t1.`ENABLE`,
t1.`IPADDR`,
t1.`LANG`,
t1.`LOGINNAME`,
t1.`MDEPTCODE`,
t1.`MDEPTID`,
t1.`MDEPTNAME`,
t1.`MEMO`,
t1.`NICKNAME`,
t1.`ORGCODE`,
t1.`ORGID`,
t1.`ORGNAME`,
t1.`PASSWORD`,
t1.`PERSONNAME`,
t1.`PHONE`,
t1.`RESERVER`,
t1.`SEX`,
t1.`SHOWORDER`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCODE`,
t1.`USERICON`,
t1.`USERID`,
t1.`USERNAME`
FROM `T_IBZEMP` t1 

```
### 数据查询-任务多人团队（TaskMTeam）
#### 说明
任务多人团队

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL

```
### 数据查询-任务团队（TaskTeam）
#### 说明
任务团队

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL

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
t1.`ADDR`,
t1.`AVATAR`,
t1.`BCODE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DOMAINS`,
t1.`EMAIL`,
t1.`ENABLE`,
t1.`IPADDR`,
t1.`LANG`,
t1.`LOGINNAME`,
t1.`MDEPTCODE`,
t1.`MDEPTID`,
t1.`MDEPTNAME`,
t1.`MEMO`,
t1.`NICKNAME`,
t1.`ORGCODE`,
t1.`ORGID`,
t1.`ORGNAME`,
t1.`PASSWORD`,
t1.`PERSONNAME`,
t1.`PHONE`,
t1.`RESERVER`,
t1.`SEX`,
t1.`SHOWORDER`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCODE`,
t1.`USERICON`,
t1.`USERID`,
t1.`USERNAME`
FROM `T_IBZEMP` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [Bug用户](#数据集合-Bug用户（BugUser）) | BugUser | 否 |
| 2 | [联系人用户](#数据集合-联系人用户（ContActList）) | ContActList | 否 |
| 3 | [数据集](#数据集合-数据集（Default）) | Default | 是 |
| 4 | [项目团队管理](#数据集合-项目团队管理（ProductTeamM）) | ProductTeamM | 否 |
| 5 | [项目团队管理](#数据集合-项目团队管理（ProjectTeamM）) | ProjectTeamM | 否 |
| 6 | [项目团队管理](#数据集合-项目团队管理（ProjectTeamMProduct）) | ProjectTeamMProduct | 否 |
| 7 | [项目团队成员(临时)](#数据集合-项目团队成员(临时)（ProjectTeamTaskUserTemp）) | ProjectTeamTaskUserTemp | 否 |
| 8 | [项目团队成员](#数据集合-项目团队成员（ProjectTeamUser）) | ProjectTeamUser | 否 |
| 9 | [项目团队成员](#数据集合-项目团队成员（ProjectTeamUserTask）) | ProjectTeamUserTask | 否 |
| 10 | [项目团队成员选择](#数据集合-项目团队成员选择（ProjectteamPk）) | ProjectteamPk | 否 |
| 11 | [产品团队成员选择](#数据集合-产品团队成员选择（StoryProductTeamPK）) | StoryProductTeamPK | 否 |
| 12 | [任务多人团队](#数据集合-任务多人团队（TaskMTeam）) | TaskMTeam | 否 |
| 13 | [数据查询2](#数据集合-数据查询2（TaskTeam）) | TaskTeam | 否 |

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
### 数据集合-联系人用户（ContActList）
#### 说明
联系人用户

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [联系人用户（ContActList）](#数据查询-联系人用户（ContActList）) |
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
### 数据集合-项目团队管理（ProductTeamM）
#### 说明
项目团队管理

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目团队管理（ProductTeamM）](#数据查询-项目团队管理（ProductTeamM）) |
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
### 数据集合-项目团队管理（ProjectTeamMProduct）
#### 说明
项目团队管理

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目团队管理（ProjectTeamMProduct）](#数据查询-项目团队管理（ProjectTeamMProduct）) |
### 数据集合-项目团队成员(临时)（ProjectTeamTaskUserTemp）
#### 说明
项目团队成员(临时)

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目团队成员(临时)（ProjectTeamTaskUserTemp）](#数据查询-项目团队成员(临时)（ProjectTeamTaskUserTemp）) |
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
### 数据集合-项目团队成员选择（ProjectteamPk）
#### 说明
项目团队成员选择

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目团队成员选择（ProjectteamPk）](#数据查询-项目团队成员选择（ProjectteamPk）) |
### 数据集合-产品团队成员选择（StoryProductTeamPK）
#### 说明
产品团队成员选择

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品团队成员选择（StoryProductTeamPK）](#数据查询-产品团队成员选择（StoryProductTeamPK）) |
### 数据集合-任务多人团队（TaskMTeam）
#### 说明
任务多人团队

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [任务多人团队（TaskMTeam）](#数据查询-任务多人团队（TaskMTeam）) |
### 数据集合-数据查询2（TaskTeam）
#### 说明
数据查询2

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [任务团队（TaskTeam）](#数据查询-任务团队（TaskTeam）) |

## 数据导入
无

## 数据导出
无

