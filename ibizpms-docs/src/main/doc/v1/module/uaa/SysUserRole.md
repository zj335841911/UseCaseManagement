
# 实体-用户角色关系(SYS_USER_ROLE)
## 实体说明
用户角色关系

## 所属模块
[uaa权限模块](../uaa)

## 实体关系
### 1:N
无
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [系统角色（SYS_ROLE）](../uaa/SysRole) | 附属关系、附属关系(N:N连接) |
| 2 | [系统用户（SYS_USER）](../uaa/SysUser) | 附属关系、附属关系(N:N连接) |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [用户角色关系标识](#属性-用户角色关系标识（SYS_USER_ROLEID）) | SYS_USER_ROLEID | 全局唯一标识，文本类型，用户不可见 | 是 | 否 | 否 |
| 2 | [角色标识](#属性-角色标识（SYS_ROLEID）) | SYS_ROLEID | 外键值 | 否 | 是 | 是 |
| 3 | [角色名称](#属性-角色名称（SYS_ROLENAME）) | SYS_ROLENAME | 外键值文本 | 否 | 是 | 是 |
| 4 | [用户标识](#属性-用户标识（SYS_USERID）) | SYS_USERID | 外键值 | 否 | 是 | 是 |
| 5 | [用户名称](#属性-用户名称（SYS_USERNAME）) | SYS_USERNAME | 外键值文本 | 否 | 是 | 是 |
| 6 | [登录名](#属性-登录名（LOGINNAME）) | LOGINNAME | 外键值附加数据 | 否 | 是 | 是 |
| 7 | [单位](#属性-单位（ORGNAME）) | ORGNAME | 外键值附加数据 | 否 | 是 | 是 |
| 8 | [主部门](#属性-主部门（MDEPTNAME）) | MDEPTNAME | 外键值附加数据 | 否 | 是 | 是 |
| 9 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | 日期时间型 | 否 | 是 | 否 |
| 10 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | 日期时间型 | 否 | 是 | 否 |

### 属性-用户角色关系标识（SYS_USER_ROLEID）
#### 属性说明
用户角色关系标识

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
| 关系实体 | [系统用户（SYS_USER）](../uaa/SysUser) |
| 关系属性 | [主部门名称（MDEPTNAME）](../uaa/SysUser/#属性-主部门名称（MDEPTNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-角色标识（SYS_ROLEID）
#### 属性说明
角色标识

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
| 关系实体 | [系统角色（SYS_ROLE）](../uaa/SysRole) |
| 关系属性 | [角色标识（SYS_ROLEID）](../uaa/SysRole/#属性-角色标识（SYS_ROLEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-角色名称（SYS_ROLENAME）
#### 属性说明
角色名称

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
| 2 | `in(...)` |
| 3 | `%like%` |
| 4 | `notin(...)` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统角色（SYS_ROLE）](../uaa/SysRole) |
| 关系属性 | [角色名称（SYS_ROLENAME）](../uaa/SysRole/#属性-角色名称（SYS_ROLENAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-用户标识（SYS_USERID）
#### 属性说明
用户标识

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
是

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |
| 2 | `in(...)` |
| 3 | `%like%` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统用户（SYS_USER）](../uaa/SysUser) |
| 关系属性 | [用户标识（USERID）](../uaa/SysUser/#属性-用户标识（USERID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-用户名称（SYS_USERNAME）
#### 属性说明
用户名称

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
| 2 | `in(...)` |
| 3 | `%like%` |
| 4 | `notin(...)` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统用户（SYS_USER）](../uaa/SysUser) |
| 关系属性 | [用户姓名（PERSONNAME）](../uaa/SysUser/#属性-用户姓名（PERSONNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-登录名（LOGINNAME）
#### 属性说明
登录名

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
| 关系实体 | [系统用户（SYS_USER）](../uaa/SysUser) |
| 关系属性 | [登录名（LOGINNAME）](../uaa/SysUser/#属性-登录名（LOGINNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-单位（ORGNAME）
#### 属性说明
单位

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
| 关系实体 | [系统用户（SYS_USER）](../uaa/SysUser) |
| 关系属性 | [单位名称（ORGNAME）](../uaa/SysUser/#属性-单位名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-主部门（MDEPTNAME）
#### 属性说明
主部门

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
| 关系实体 | [系统用户（SYS_USER）](../uaa/SysUser) |
| 关系属性 | [主部门名称（MDEPTNAME）](../uaa/SysUser/#属性-主部门名称（MDEPTNAME）) |
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
| 关系实体 | [系统用户（SYS_USER）](../uaa/SysUser) |
| 关系属性 | [主部门名称（MDEPTNAME）](../uaa/SysUser/#属性-主部门名称（MDEPTNAME）) |
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
| 关系实体 | [系统用户（SYS_USER）](../uaa/SysUser) |
| 关系属性 | [主部门名称（MDEPTNAME）](../uaa/SysUser/#属性-主部门名称（MDEPTNAME）) |
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
| 1 | [用户标识（SYS_USERID）](#属性-用户标识（SYS_USERID）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [角色标识（SYS_ROLEID）](#属性-角色标识（SYS_ROLEID）) | `=` |
| 2 | [角色名称（SYS_ROLENAME）](#属性-角色名称（SYS_ROLENAME）) | `=` |
| 3 | [角色名称（SYS_ROLENAME）](#属性-角色名称（SYS_ROLENAME）) | `in(...)` |
| 4 | [角色名称（SYS_ROLENAME）](#属性-角色名称（SYS_ROLENAME）) | `%like%` |
| 5 | [角色名称（SYS_ROLENAME）](#属性-角色名称（SYS_ROLENAME）) | `notin(...)` |
| 6 | [用户标识（SYS_USERID）](#属性-用户标识（SYS_USERID）) | `=` |
| 7 | [用户标识（SYS_USERID）](#属性-用户标识（SYS_USERID）) | `in(...)` |
| 8 | [用户标识（SYS_USERID）](#属性-用户标识（SYS_USERID）) | `%like%` |
| 9 | [用户名称（SYS_USERNAME）](#属性-用户名称（SYS_USERNAME）) | `=` |
| 10 | [用户名称（SYS_USERNAME）](#属性-用户名称（SYS_USERNAME）) | `in(...)` |
| 11 | [用户名称（SYS_USERNAME）](#属性-用户名称（SYS_USERNAME）) | `%like%` |
| 12 | [用户名称（SYS_USERNAME）](#属性-用户名称（SYS_USERNAME）) | `notin(...)` |

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
t1.`CREATEDATE`,
t21.`LOGINNAME`,
t21.`MDEPTNAME`,
t21.`ORGNAME`,
t1.`SYS_ROLEID`,
t11.`SYS_ROLENAME`,
t1.`SYS_USERID`,
t21.`PERSONNAME` AS `SYS_USERNAME`,
t1.`SYS_USER_ROLEID`,
t1.`UPDATEDATE`
FROM `IBZUSER_ROLE` t1 
LEFT JOIN IBZROLE t11 ON t1.SYS_ROLEID = t11.SYS_ROLEID 
LEFT JOIN IBZUSER t21 ON t1.SYS_USERID = t21.USERID 

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
t1.`CREATEDATE`,
t21.`LOGINNAME`,
t21.`MDEPTNAME`,
t21.`ORGNAME`,
t1.`SYS_ROLEID`,
t11.`SYS_ROLENAME`,
t1.`SYS_USERID`,
t21.`PERSONNAME` AS `SYS_USERNAME`,
t1.`SYS_USER_ROLEID`,
t1.`UPDATEDATE`
FROM `IBZUSER_ROLE` t1 
LEFT JOIN IBZROLE t11 ON t1.SYS_ROLEID = t11.SYS_ROLEID 
LEFT JOIN IBZUSER t21 ON t1.SYS_USERID = t21.USERID 

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

