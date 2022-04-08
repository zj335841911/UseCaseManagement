
# 实体-部门(ZT_DEPT)
## 实体说明
部门

## 所属模块
[基础管理模块](../zentao)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [部门（ZT_DEPT）](../zentao/Dept) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [部门（ZT_DEPT）](../zentao/Dept) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [负责人](#属性-负责人（MANAGER）) | MANAGER | 单项选择(文本值) | 否 | 否 | 是 |
| 2 | [grade](#属性-grade（GRADE）) | GRADE | 整型 | 否 | 否 | 是 |
| 3 | [function](#属性-function（FUNCTION）) | FUNCTION | 文本，可指定长度 | 否 | 否 | 是 |
| 4 | [order](#属性-order（ORDER）) | ORDER | 整型 | 否 | 否 | 是 |
| 5 | [path](#属性-path（PATH）) | PATH | 文本，可指定长度 | 否 | 否 | 是 |
| 6 | [position](#属性-position（POSITION）) | POSITION | 文本，可指定长度 | 否 | 否 | 是 |
| 7 | [id](#属性-id（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 8 | [部门名称](#属性-部门名称（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 否 |
| 9 | [上级部门](#属性-上级部门（PARENTNAME）) | PARENTNAME | 外键值文本 | 否 | 是 | 是 |
| 10 | [parent](#属性-parent（PARENT）) | PARENT | 外键值 | 否 | 是 | 是 |
| 11 | [无子部门](#属性-无子部门（ISLEAF）) | ISLEAF | 文本，可指定长度 | 否 | 是 | 是 |

### 属性-负责人（MANAGER）
#### 属性说明
负责人

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [部门（ZT_DEPT）](../zentao/Dept) |
| 关系属性 | [id（ID）](../zentao/Dept/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-grade（GRADE）
#### 属性说明
grade

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [部门（ZT_DEPT）](../zentao/Dept) |
| 关系属性 | [id（ID）](../zentao/Dept/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-function（FUNCTION）
#### 属性说明
function

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
| 关系实体 | [部门（ZT_DEPT）](../zentao/Dept) |
| 关系属性 | [id（ID）](../zentao/Dept/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-order（ORDER）
#### 属性说明
order

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [部门（ZT_DEPT）](../zentao/Dept) |
| 关系属性 | [id（ID）](../zentao/Dept/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-path（PATH）
#### 属性说明
path

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
| 关系实体 | [部门（ZT_DEPT）](../zentao/Dept) |
| 关系属性 | [id（ID）](../zentao/Dept/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-position（POSITION）
#### 属性说明
position

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
| 关系实体 | [部门（ZT_DEPT）](../zentao/Dept) |
| 关系属性 | [id（ID）](../zentao/Dept/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-id（ID）
#### 属性说明
id

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [部门（ZT_DEPT）](../zentao/Dept) |
| 关系属性 | [id（ID）](../zentao/Dept/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-部门名称（NAME）
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
| 关系实体 | [部门（ZT_DEPT）](../zentao/Dept) |
| 关系属性 | [id（ID）](../zentao/Dept/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-上级部门（PARENTNAME）
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
| 关系实体 | [部门（ZT_DEPT）](../zentao/Dept) |
| 关系属性 | [部门名称（NAME）](../zentao/Dept/#属性-部门名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-parent（PARENT）
#### 属性说明
parent

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [部门（ZT_DEPT）](../zentao/Dept) |
| 关系属性 | [id（ID）](../zentao/Dept/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-无子部门（ISLEAF）
#### 属性说明
无子部门

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
(CASE WHEN EXISTS (SELECT 1 FROM ZT_DEPT WHERE  PARENT = %1$s) THEN FALSE ELSE TRUE  END )
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [部门（ZT_DEPT）](../zentao/Dept) |
| 关系属性 | [id（ID）](../zentao/Dept/#属性-id（ID）) |
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
| 1 | [部门名称（NAME）](#属性-部门名称（NAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [部门名称（NAME）](#属性-部门名称（NAME）) | `%like%` |
| 2 | [上级部门（PARENTNAME）](#属性-上级部门（PARENTNAME）) | `=` |
| 3 | [上级部门（PARENTNAME）](#属性-上级部门（PARENTNAME）) | `%like%` |
| 4 | [parent（PARENT）](#属性-parent（PARENT）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 2 | [根部门](#数据查询-根部门（Root）) | Root | 否 |
| 3 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
t1.`FUNCTION`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_DEPT WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`MANAGER`,
t1.`NAME`,
t1.`ORDER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`POSITION`
FROM `zt_dept` t1 
LEFT JOIN zt_dept t11 ON t1.PARENT = t11.ID 

```
### 数据查询-根部门（Root）
#### 说明
根部门

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`FUNCTION`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_DEPT WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`MANAGER`,
t1.`NAME`,
t1.`ORDER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`POSITION`
FROM `zt_dept` t1 
LEFT JOIN zt_dept t11 ON t1.PARENT = t11.ID 

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
t1.`FUNCTION`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_DEPT WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`MANAGER`,
t1.`NAME`,
t1.`ORDER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`POSITION`
FROM `zt_dept` t1 
LEFT JOIN zt_dept t11 ON t1.PARENT = t11.ID 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 2 | [根部门](#数据集合-根部门（Root）) | Root | 否 |

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
### 数据集合-根部门（Root）
#### 说明
根部门

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [根部门（Root）](#数据查询-根部门（Root）) |

## 数据导入
无

## 数据导出
无

