
# 实体-单位(SYS_ORG)
## 实体说明
单位

## 所属模块
[ou组织用户管理模块](../ou)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [人员（IBZEMP）](../ou/SysEmployee) | （默认） |
| 2 | [部门（SYS_DEPT）](../ou/SysDepartment) | 嵌套操作 |
| 3 | [单位（SYS_ORG）](../ou/SysOrganization) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [单位（SYS_ORG）](../ou/SysOrganization) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [单位标识](#属性-单位标识（ORGID）) | ORGID | 文本，可指定长度 | 是 | 否 | 是 |
| 2 | [单位代码](#属性-单位代码（ORGCODE）) | ORGCODE | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [名称](#属性-名称（ORGNAME）) | ORGNAME | 文本，可指定长度 | 否 | 否 | 否 |
| 4 | [上级单位](#属性-上级单位（PORGID）) | PORGID | 外键值 | 否 | 是 | 是 |
| 5 | [单位简称](#属性-单位简称（SHORTNAME）) | SHORTNAME | 文本，可指定长度 | 否 | 是 | 是 |
| 6 | [单位级别](#属性-单位级别（ORGLEVEL）) | ORGLEVEL | 整型 | 否 | 是 | 是 |
| 7 | [排序](#属性-排序（SHOWORDER）) | SHOWORDER | 整型 | 否 | 是 | 是 |
| 8 | [上级单位](#属性-上级单位（PORGNAME）) | PORGNAME | 外键值文本 | 否 | 是 | 是 |
| 9 | [区属](#属性-区属（DOMAINS）) | DOMAINS | 文本，可指定长度 | 否 | 是 | 是 |
| 10 | [逻辑有效](#属性-逻辑有效（ENABLE）) | ENABLE | 是否逻辑 | 否 | 是 | 是 |
| 11 | [创建时间](#属性-创建时间（CREATEDATE）) | CREATEDATE | 日期时间型 | 否 | 是 | 是 |
| 12 | [最后修改时间](#属性-最后修改时间（UPDATEDATE）) | UPDATEDATE | 日期时间型 | 否 | 是 | 是 |

### 属性-单位标识（ORGID）
#### 属性说明
单位标识

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
| 项目 | 说明 |
| ---- | ---- |
| 类型 | PARAM |
| 值 | orgcode |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [单位（SYS_ORG）](../ou/SysOrganization) |
| 关系属性 | [名称（ORGNAME）](../ou/SysOrganization/#属性-名称（ORGNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-名称（ORGNAME）
#### 属性说明
名称

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

### 属性-上级单位（PORGID）
#### 属性说明
上级单位

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

### 属性-单位简称（SHORTNAME）
#### 属性说明
单位简称

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
| 关系属性 | [单位标识（ORGID）](../ou/SysOrganization/#属性-单位标识（ORGID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-单位级别（ORGLEVEL）
#### 属性说明
单位级别

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
| 关系属性 | [单位标识（ORGID）](../ou/SysOrganization/#属性-单位标识（ORGID）) |
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
| 关系属性 | [单位标识（ORGID）](../ou/SysOrganization/#属性-单位标识（ORGID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-上级单位（PORGNAME）
#### 属性说明
上级单位

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

### 属性-最后修改时间（UPDATEDATE）
#### 属性说明
最后修改时间

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
| 1 | [名称（ORGNAME）](#属性-名称（ORGNAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [名称（ORGNAME）](#属性-名称（ORGNAME）) | `%like%` |
| 2 | [上级单位（PORGID）](#属性-上级单位（PORGID）) | `=` |
| 3 | [上级单位（PORGNAME）](#属性-上级单位（PORGNAME）) | `=` |
| 4 | [上级单位（PORGNAME）](#属性-上级单位（PORGNAME）) | `%like%` |

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
t1.`DOMAINS`,
t1.`ENABLE`,
t1.`ORGCODE`,
t1.`ORGID`,
t1.`ORGLEVEL`,
t1.`ORGNAME`,
t1.`PORGID`,
t11.`ORGNAME` AS `PORGNAME`,
t1.`SHORTNAME`,
t1.`SHOWORDER`,
t1.`UPDATEDATE`
FROM `T_SYS_ORG` t1 
LEFT JOIN T_SYS_ORG t11 ON t1.PORGID = t11.ORGID 

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
t1.`DOMAINS`,
t1.`ENABLE`,
t1.`ORGCODE`,
t1.`ORGID`,
t1.`ORGLEVEL`,
t1.`ORGNAME`,
t1.`PORGID`,
t11.`ORGNAME` AS `PORGNAME`,
t1.`SHORTNAME`,
t1.`SHOWORDER`,
t1.`UPDATEDATE`
FROM `T_SYS_ORG` t1 
LEFT JOIN T_SYS_ORG t11 ON t1.PORGID = t11.ORGID 

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

