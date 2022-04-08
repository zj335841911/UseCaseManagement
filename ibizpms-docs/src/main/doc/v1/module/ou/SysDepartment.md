
# 实体-部门(SYS_DEPT)
## 实体说明
部门

## 所属模块
[ou组织用户管理模块](../ou)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [人员（IBZEMP）](../ou/SysEmployee) | （默认） |
| 2 | [部门（SYS_DEPT）](../ou/SysDepartment) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [部门（SYS_DEPT）](../ou/SysDepartment) | （默认） |
| 2 | [单位（SYS_ORG）](../ou/SysOrganization) | 嵌套操作 |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [部门标识](#属性-部门标识（DEPTID）) | DEPTID | 文本，可指定长度 | 是 | 否 | 是 |
| 2 | [部门代码](#属性-部门代码（DEPTCODE）) | DEPTCODE | 文本，可指定长度 | 否 | 否 | 否 |
| 3 | [部门名称](#属性-部门名称（DEPTNAME）) | DEPTNAME | 文本，可指定长度 | 否 | 否 | 否 |
| 4 | [单位](#属性-单位（ORGID）) | ORGID | 外键值 | 否 | 是 | 是 |
| 5 | [上级部门](#属性-上级部门（PDEPTID）) | PDEPTID | 外键值 | 否 | 是 | 是 |
| 6 | [部门简称](#属性-部门简称（SHORTNAME）) | SHORTNAME | 文本，可指定长度 | 否 | 是 | 是 |
| 7 | [部门级别](#属性-部门级别（DEPTLEVEL）) | DEPTLEVEL | 整型 | 否 | 是 | 是 |
| 8 | [区属](#属性-区属（DOMAINS）) | DOMAINS | 文本，可指定长度 | 否 | 是 | 是 |
| 9 | [排序](#属性-排序（SHOWORDER）) | SHOWORDER | 整型 | 否 | 是 | 是 |
| 10 | [业务编码](#属性-业务编码（BCODE）) | BCODE | 文本，可指定长度 | 否 | 是 | 是 |
| 11 | [分管领导标识](#属性-分管领导标识（LEADERID）) | LEADERID | 文本，可指定长度 | 否 | 是 | 是 |
| 12 | [分管领导](#属性-分管领导（LEADERNAME）) | LEADERNAME | 文本，可指定长度 | 否 | 是 | 是 |
| 13 | [单位](#属性-单位（ORGNAME）) | ORGNAME | 外键值文本 | 否 | 是 | 是 |
| 14 | [上级部门](#属性-上级部门（PDEPTNAME）) | PDEPTNAME | 外键值文本 | 否 | 是 | 是 |
| 15 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | 日期时间型 | 否 | 是 | 否 |
| 16 | [逻辑有效标志](#属性-逻辑有效标志（ENABLE）) | ENABLE | 是否逻辑 | 否 | 是 | 否 |
| 17 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | 文本，可指定长度 | 否 | 是 | 否 |
| 18 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | 文本，可指定长度 | 否 | 是 | 否 |
| 19 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | 日期时间型 | 否 | 是 | 否 |

### 属性-部门标识（DEPTID）
#### 属性说明
部门标识

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
| 关系实体 | [部门（SYS_DEPT）](../ou/SysDepartment) |
| 关系属性 | [部门名称（DEPTNAME）](../ou/SysDepartment/#属性-部门名称（DEPTNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-部门代码（DEPTCODE）
#### 属性说明
部门代码

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
| 关系实体 | [部门（SYS_DEPT）](../ou/SysDepartment) |
| 关系属性 | [部门名称（DEPTNAME）](../ou/SysDepartment/#属性-部门名称（DEPTNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-部门名称（DEPTNAME）
#### 属性说明
部门名称

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

### 属性-上级部门（PDEPTID）
#### 属性说明
上级部门

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

### 属性-部门简称（SHORTNAME）
#### 属性说明
部门简称

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
| 关系属性 | [部门标识（DEPTID）](../ou/SysDepartment/#属性-部门标识（DEPTID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-部门级别（DEPTLEVEL）
#### 属性说明
部门级别

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
| 关系实体 | [部门（SYS_DEPT）](../ou/SysDepartment) |
| 关系属性 | [部门标识（DEPTID）](../ou/SysDepartment/#属性-部门标识（DEPTID）) |
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
| 关系实体 | [部门（SYS_DEPT）](../ou/SysDepartment) |
| 关系属性 | [部门标识（DEPTID）](../ou/SysDepartment/#属性-部门标识（DEPTID）) |
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
| 关系实体 | [部门（SYS_DEPT）](../ou/SysDepartment) |
| 关系属性 | [部门标识（DEPTID）](../ou/SysDepartment/#属性-部门标识（DEPTID）) |
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
| 关系属性 | [部门标识（DEPTID）](../ou/SysDepartment/#属性-部门标识（DEPTID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-分管领导标识（LEADERID）
#### 属性说明
分管领导标识

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
| 关系属性 | [部门标识（DEPTID）](../ou/SysDepartment/#属性-部门标识（DEPTID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-分管领导（LEADERNAME）
#### 属性说明
分管领导

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
| 关系属性 | [部门标识（DEPTID）](../ou/SysDepartment/#属性-部门标识（DEPTID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-单位（ORGNAME）
#### 属性说明
单位

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
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-上级部门（PDEPTNAME）
#### 属性说明
上级部门

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
| 关系实体 | [部门（SYS_DEPT）](../ou/SysDepartment) |
| 关系属性 | [部门名称（DEPTNAME）](../ou/SysDepartment/#属性-部门名称（DEPTNAME）) |
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
| 关系实体 | [部门（SYS_DEPT）](../ou/SysDepartment) |
| 关系属性 | [部门名称（DEPTNAME）](../ou/SysDepartment/#属性-部门名称（DEPTNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-逻辑有效标志（ENABLE）
#### 属性说明
逻辑有效标志

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
| 关系实体 | [部门（SYS_DEPT）](../ou/SysDepartment) |
| 关系属性 | [部门名称（DEPTNAME）](../ou/SysDepartment/#属性-部门名称（DEPTNAME）) |
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
| 关系实体 | [部门（SYS_DEPT）](../ou/SysDepartment) |
| 关系属性 | [部门名称（DEPTNAME）](../ou/SysDepartment/#属性-部门名称（DEPTNAME）) |
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
| 关系实体 | [部门（SYS_DEPT）](../ou/SysDepartment) |
| 关系属性 | [部门名称（DEPTNAME）](../ou/SysDepartment/#属性-部门名称（DEPTNAME）) |
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
| 1 | [部门名称（DEPTNAME）](#属性-部门名称（DEPTNAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [部门名称（DEPTNAME）](#属性-部门名称（DEPTNAME）) | `%like%` |
| 2 | [单位（ORGID）](#属性-单位（ORGID）) | `=` |
| 3 | [上级部门（PDEPTID）](#属性-上级部门（PDEPTID）) | `=` |
| 4 | [单位（ORGNAME）](#属性-单位（ORGNAME）) | `=` |
| 5 | [单位（ORGNAME）](#属性-单位（ORGNAME）) | `%like%` |
| 6 | [上级部门（PDEPTNAME）](#属性-上级部门（PDEPTNAME）) | `=` |
| 7 | [上级部门（PDEPTNAME）](#属性-上级部门（PDEPTNAME）) | `%like%` |

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
t1.`BCODE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEPTCODE`,
t1.`DEPTID`,
t1.`DEPTLEVEL`,
t1.`DEPTNAME`,
t1.`DOMAINS`,
t1.`ENABLE`,
t1.`LEADERID`,
t1.`LEADERNAME`,
t1.`ORGID`,
t11.`ORGNAME`,
t1.`PDEPTID`,
t21.`DEPTNAME` AS `PDEPTNAME`,
t1.`SHORTNAME`,
t1.`SHOWORDER`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_SYS_DEPT` t1 
LEFT JOIN T_SYS_ORG t11 ON t1.ORGID = t11.ORGID 
LEFT JOIN T_SYS_DEPT t21 ON t1.PDEPTID = t21.DEPTID 

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
t1.`BCODE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEPTCODE`,
t1.`DEPTID`,
t1.`DEPTLEVEL`,
t1.`DEPTNAME`,
t1.`DOMAINS`,
t1.`ENABLE`,
t1.`LEADERID`,
t1.`LEADERNAME`,
t1.`ORGID`,
t11.`ORGNAME`,
t1.`PDEPTID`,
t21.`DEPTNAME` AS `PDEPTNAME`,
t1.`SHORTNAME`,
t1.`SHOWORDER`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_SYS_DEPT` t1 
LEFT JOIN T_SYS_ORG t11 ON t1.ORGID = t11.ORGID 
LEFT JOIN T_SYS_DEPT t21 ON t1.PDEPTID = t21.DEPTID 

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

