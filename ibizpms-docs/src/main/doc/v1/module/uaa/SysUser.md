
# 实体-系统用户(SYS_USER)
## 实体说明
系统用户

## 所属模块
[uaa权限模块](../uaa)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [用户角色关系（SYS_USER_ROLE）](../uaa/SysUserRole) | 附属关系、附属关系(N:N连接) |
### N:1
无


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [用户标识](#属性-用户标识（USERID）) | USERID | 文本，可指定长度 | 是 | 否 | 是 |
| 2 | [用户全局名](#属性-用户全局名（USERNAME）) | USERNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [用户姓名](#属性-用户姓名（PERSONNAME）) | PERSONNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 4 | [密码](#属性-密码（PASSWORD）) | PASSWORD | 文本，可指定长度 | 否 | 否 | 是 |
| 5 | [用户工号](#属性-用户工号（USERCODE）) | USERCODE | 文本，可指定长度 | 否 | 否 | 否 |
| 6 | [登录名](#属性-登录名（LOGINNAME）) | LOGINNAME | 文本，可指定长度 | 否 | 否 | 否 |
| 7 | [区属](#属性-区属（DOMAINS）) | DOMAINS | 文本，可指定长度 | 否 | 否 | 是 |
| 8 | [主部门](#属性-主部门（MDEPTID）) | MDEPTID | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [主部门代码](#属性-主部门代码（MDEPTCODE）) | MDEPTCODE | 文本，可指定长度 | 否 | 否 | 是 |
| 10 | [主部门名称](#属性-主部门名称（MDEPTNAME）) | MDEPTNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 11 | [业务编码](#属性-业务编码（BCODE）) | BCODE | 文本，可指定长度 | 否 | 否 | 是 |
| 12 | [岗位标识](#属性-岗位标识（POSTID）) | POSTID | 文本，可指定长度 | 否 | 否 | 是 |
| 13 | [岗位代码](#属性-岗位代码（POSTCODE）) | POSTCODE | 文本，可指定长度 | 否 | 否 | 是 |
| 14 | [岗位名称](#属性-岗位名称（POSTNAME）) | POSTNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 15 | [单位](#属性-单位（ORGID）) | ORGID | 文本，可指定长度 | 否 | 否 | 是 |
| 16 | [单位代码](#属性-单位代码（ORGCODE）) | ORGCODE | 文本，可指定长度 | 否 | 否 | 是 |
| 17 | [单位名称](#属性-单位名称（ORGNAME）) | ORGNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 18 | [昵称别名](#属性-昵称别名（NICKNAME）) | NICKNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 19 | [性别](#属性-性别（SEX）) | SEX | 文本，可指定长度 | 否 | 否 | 是 |
| 20 | [出生日期](#属性-出生日期（BIRTHDAY）) | BIRTHDAY | 日期型 | 否 | 否 | 是 |
| 21 | [证件号码](#属性-证件号码（CERTCODE）) | CERTCODE | 文本，可指定长度 | 否 | 否 | 是 |
| 22 | [联系方式](#属性-联系方式（PHONE）) | PHONE | 文本，可指定长度 | 否 | 否 | 是 |
| 23 | [邮件](#属性-邮件（EMAIL）) | EMAIL | 文本，可指定长度 | 否 | 否 | 是 |
| 24 | [社交账号](#属性-社交账号（AVATAR）) | AVATAR | 文本，可指定长度 | 否 | 否 | 是 |
| 25 | [地址](#属性-地址（ADDR）) | ADDR | 文本，可指定长度 | 否 | 否 | 是 |
| 26 | [照片](#属性-照片（USERICON）) | USERICON | 文本，可指定长度 | 否 | 否 | 是 |
| 27 | [样式](#属性-样式（THEME）) | THEME | 文本，可指定长度 | 否 | 否 | 是 |
| 28 | [语言](#属性-语言（LANG）) | LANG | 文本，可指定长度 | 否 | 否 | 是 |
| 29 | [字号](#属性-字号（FONTSIZE）) | FONTSIZE | 文本，可指定长度 | 否 | 否 | 是 |
| 30 | [备注](#属性-备注（MEMO）) | MEMO | 文本，可指定长度 | 否 | 否 | 是 |
| 31 | [保留](#属性-保留（RESERVER）) | RESERVER | 文本，可指定长度 | 否 | 否 | 是 |
| 32 | [超级管理员](#属性-超级管理员（SUPERUSER）) | SUPERUSER | 是否逻辑 | 否 | 否 | 是 |
| 33 | [原密码](#属性-原密码（ORIGINALPASSWORD）) | ORIGINALPASSWORD | 文本，可指定长度 | 否 | 否 | 是 |
| 34 | [新密码](#属性-新密码（NEWPASSWORD）) | NEWPASSWORD | 文本，可指定长度 | 否 | 否 | 是 |
| 35 | [重复密码](#属性-重复密码（REPEATPASSWORD）) | REPEATPASSWORD | 文本，可指定长度 | 否 | 否 | 是 |

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
无

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
无

#### 关系属性
无

### 属性-用户姓名（PERSONNAME）
#### 属性说明
用户姓名

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
无

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
无

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
无

### 属性-主部门（MDEPTID）
#### 属性说明
主部门

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

### 属性-主部门代码（MDEPTCODE）
#### 属性说明
主部门代码

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

### 属性-主部门名称（MDEPTNAME）
#### 属性说明
主部门名称

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
无

### 属性-岗位标识（POSTID）
#### 属性说明
岗位标识

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

### 属性-岗位代码（POSTCODE）
#### 属性说明
岗位代码

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

### 属性-岗位名称（POSTNAME）
#### 属性说明
岗位名称

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

### 属性-单位（ORGID）
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
无

### 属性-单位代码（ORGCODE）
#### 属性说明
单位代码

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

### 属性-单位名称（ORGNAME）
#### 属性说明
单位名称

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
无

### 属性-性别（SEX）
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

### 属性-出生日期（BIRTHDAY）
#### 属性说明
出生日期

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
无

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

### 属性-证件号码（CERTCODE）
#### 属性说明
证件号码

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
无

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
无

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
无

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
无

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
无

### 属性-样式（THEME）
#### 属性说明
样式

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
无

### 属性-字号（FONTSIZE）
#### 属性说明
字号

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
无

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
无

### 属性-超级管理员（SUPERUSER）
#### 属性说明
超级管理员

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

### 属性-原密码（ORIGINALPASSWORD）
#### 属性说明
原密码

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

### 属性-新密码（NEWPASSWORD）
#### 属性说明
新密码

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

### 属性-重复密码（REPEATPASSWORD）
#### 属性说明
重复密码

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
| 6 | [修改密码](#实体行为-修改密码（ChangePwd）) | ChangePwd | 用户自定义 | 后台 |
| 7 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 8 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |

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
### 实体行为-修改密码（ChangePwd）
#### 说明
修改密码

- 行为类型
用户自定义

- 行为持有者
后台

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
| 1 | [用户姓名（PERSONNAME）](#属性-用户姓名（PERSONNAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [用户姓名（PERSONNAME）](#属性-用户姓名（PERSONNAME）) | `%like%` |

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
t1.`ADDR`,
t1.`AVATAR`,
t1.`BCODE`,
t1.`BIRTHDAY`,
t1.`CERTCODE`,
t1.`DOMAINS`,
t1.`EMAIL`,
t1.`FONTSIZE`,
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
t1.`POSTCODE`,
t1.`POSTID`,
t1.`POSTNAME`,
t1.`RESERVER`,
t1.`SEX`,
t1.`SUPERUSER`,
t1.`THEME`,
t1.`USERCODE`,
t1.`USERICON`,
t1.`USERID`,
t1.`USERNAME`
FROM `IBZUSER` t1 

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
t1.`BIRTHDAY`,
t1.`CERTCODE`,
t1.`DOMAINS`,
t1.`EMAIL`,
t1.`FONTSIZE`,
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
t1.`POSTCODE`,
t1.`POSTID`,
t1.`POSTNAME`,
t1.`RESERVER`,
t1.`SEX`,
t1.`SUPERUSER`,
t1.`THEME`,
t1.`USERCODE`,
t1.`USERICON`,
t1.`USERID`,
t1.`USERNAME`
FROM `IBZUSER` t1 

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
