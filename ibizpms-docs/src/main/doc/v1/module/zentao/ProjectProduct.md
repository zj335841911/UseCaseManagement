
# 实体-项目产品(ZT_PROJECTPRODUCT)
## 实体说明
项目产品

## 所属模块
[基础管理模块](../zentao)

## 实体关系
### 1:N
无
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) | （默认） |
| 2 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) | （默认） |
| 3 | [产品（ZT_PRODUCT）](../zentao/Product) | （默认） |
| 4 | [项目（ZT_PROJECT）](../zentao/Project) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [虚拟主键](#属性-虚拟主键（ID）) | ID | 文本，可指定长度 | 是 | 否 | 否 |
| 2 | [产品](#属性-产品（PRODUCTNAME）) | PRODUCTNAME | 外键值文本 | 否 | 是 | 是 |
| 3 | [项目](#属性-项目（PROJECTNAME）) | PROJECTNAME | 外键值文本 | 否 | 是 | 是 |
| 4 | [计划名称](#属性-计划名称（PLANNAME）) | PLANNAME | 外键值文本 | 否 | 是 | 是 |
| 5 | [产品](#属性-产品（PRODUCT）) | PRODUCT | 外键值 | 否 | 是 | 否 |
| 6 | [产品计划](#属性-产品计划（PLAN）) | PLAN | 外键值 | 否 | 是 | 是 |
| 7 | [平台/分支](#属性-平台/分支（BRANCH）) | BRANCH | 外键值 | 否 | 是 | 是 |
| 8 | [项目](#属性-项目（PROJECT）) | PROJECT | 外键值 | 否 | 是 | 否 |

### 属性-虚拟主键（ID）
#### 属性说明
虚拟主键

- 是否是主键
是

- 属性类型
逻辑字段[来自计算式]

- 数据类型
文本，可指定长度

- Java类型
String

- 是否允许为空
否

- 默认值
无

- 取值范围/公式
```SQL
concat(%1$s,'__',%2$s)
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-产品（PRODUCTNAME）
#### 属性说明
产品

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
是

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |
| 2 | `%like%` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-项目（PROJECTNAME）
#### 属性说明
项目

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-计划名称（PLANNAME）
#### 属性说明
计划名称

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-产品（PRODUCT）
#### 属性说明
产品

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-产品计划（PLAN）
#### 属性说明
产品计划

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [编号（ID）](../zentao/ProductPlan/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-平台/分支（BRANCH）
#### 属性说明
平台/分支

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
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [编号（ID）](../zentao/Branch/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-项目（PROJECT）
#### 属性说明
项目

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
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
| 1 | [产品（PRODUCTNAME）](#属性-产品（PRODUCTNAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [产品（PRODUCTNAME）](#属性-产品（PRODUCTNAME）) | `=` |
| 2 | [产品（PRODUCTNAME）](#属性-产品（PRODUCTNAME）) | `%like%` |
| 3 | [项目（PROJECTNAME）](#属性-项目（PROJECTNAME）) | `=` |
| 4 | [项目（PROJECTNAME）](#属性-项目（PROJECTNAME）) | `%like%` |
| 5 | [计划名称（PLANNAME）](#属性-计划名称（PLANNAME）) | `=` |
| 6 | [计划名称（PLANNAME）](#属性-计划名称（PLANNAME）) | `%like%` |
| 7 | [产品（PRODUCT）](#属性-产品（PRODUCT）) | `=` |
| 8 | [产品计划（PLAN）](#属性-产品计划（PLAN）) | `=` |
| 9 | [平台/分支（BRANCH）](#属性-平台/分支（BRANCH）) | `=` |
| 10 | [项目（PROJECT）](#属性-项目（PROJECT）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 2 | [关联计划](#数据查询-关联计划（RelationPlan）) | RelationPlan | 否 |
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
t1.`BRANCH`,
concat(t1.`PROJECT`,'__',t1.`PRODUCT`) AS `ID`,
t1.`PLAN`,
t31.`TITLE` AS `PLANNAME`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`
FROM `zt_projectproduct` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_productplan t31 ON t1.PLAN = t31.ID 

```
### 数据查询-关联计划（RelationPlan）
#### 说明
关联计划

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BRANCH`,
concat(t1.`PROJECT`,'__',t1.`PRODUCT`) AS `ID`,
t1.`PLAN`,
t31.`TITLE` AS `PLANNAME`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`
FROM `zt_projectproduct` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_productplan t31 ON t1.PLAN = t31.ID 

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
t1.`BRANCH`,
concat(t1.`PROJECT`,'__',t1.`PRODUCT`) AS `ID`,
t1.`PLAN`,
t31.`TITLE` AS `PLANNAME`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`
FROM `zt_projectproduct` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_productplan t31 ON t1.PLAN = t31.ID 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 2 | [关联计划](#数据集合-关联计划（RelationPlan）) | RelationPlan | 否 |

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
### 数据集合-关联计划（RelationPlan）
#### 说明
关联计划

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [关联计划（RelationPlan）](#数据查询-关联计划（RelationPlan）) |

## 数据导入
无

## 数据导出
无

