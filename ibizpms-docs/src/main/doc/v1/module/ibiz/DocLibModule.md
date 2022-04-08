
# 实体-文档库分类(IBZ_DOCLIBMODULE)
## 实体说明
文档库分类

## 所属模块
[iBiz增强模块](../ibiz)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) | （默认） |
| 2 | [文档库（ZT_DOCLIB）](../zentao/DocLib) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [叶子模块](#属性-叶子模块（ISLEAF）) | ISLEAF | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [名称](#属性-名称（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 否 |
| 3 | [简称](#属性-简称（SHORT）) | SHORT | 文本，可指定长度 | 否 | 否 | 是 |
| 4 | [grade](#属性-grade（GRADE）) | GRADE | 整型 | 否 | 否 | 是 |
| 5 | [collector](#属性-collector（COLLECTOR）) | COLLECTOR | 长文本，没有长度限制 | 否 | 否 | 是 |
| 6 | [branch](#属性-branch（BRANCH）) | BRANCH | 整型 | 否 | 否 | 是 |
| 7 | [id](#属性-id（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 8 | [排序值](#属性-排序值（ORDER）) | ORDER | 整型 | 否 | 否 | 是 |
| 9 | [逻辑删除标志](#属性-逻辑删除标志（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 10 | [path](#属性-path（PATH）) | PATH | 文本，可指定长度 | 否 | 否 | 是 |
| 11 | [owner](#属性-owner（OWNER）) | OWNER | 文本，可指定长度 | 否 | 否 | 是 |
| 12 | [类型](#属性-类型（TYPE）) | TYPE | 文本，可指定长度 | 否 | 否 | 是 |
| 13 | [编号](#属性-编号（ROOT）) | ROOT | 外键值 | 否 | 是 | 是 |
| 14 | [id](#属性-id（PARENT）) | PARENT | 外键值 | 否 | 是 | 是 |
| 15 | [所属文档库](#属性-所属文档库（DOCLIBNAME）) | DOCLIBNAME | 外键值文本 | 否 | 是 | 是 |
| 16 | [上级模块](#属性-上级模块（MODULENAME）) | MODULENAME | 外键值文本 | 否 | 是 | 是 |
| 17 | [查询类型](#属性-查询类型（DOCQTYPE）) | DOCQTYPE | 文本，可指定长度 | 否 | 是 | 是 |
| 18 | [是否已收藏](#属性-是否已收藏（ISFAVOURITES）) | ISFAVOURITES | 文本，可指定长度 | 否 | 是 | 是 |
| 19 | [文档数](#属性-文档数（DOCCNT）) | DOCCNT | 整型 | 否 | 是 | 是 |

### 属性-叶子模块（ISLEAF）
#### 属性说明
叶子模块

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
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = %1$s) THEN FALSE ELSE TRUE  END )
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
| 关系实体 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) |
| 关系属性 | [名称（NAME）](../ibiz/DocLibModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-名称（NAME）
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
| 关系实体 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) |
| 关系属性 | [名称（NAME）](../ibiz/DocLibModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-简称（SHORT）
#### 属性说明
简称

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
| 值 | / |

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
| 关系实体 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) |
| 关系属性 | [名称（NAME）](../ibiz/DocLibModule/#属性-名称（NAME）) |
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
| 关系实体 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) |
| 关系属性 | [名称（NAME）](../ibiz/DocLibModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-collector（COLLECTOR）
#### 属性说明
collector

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
长文本，没有长度限制

- Java类型
String

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | / |

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
| 关系实体 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) |
| 关系属性 | [名称（NAME）](../ibiz/DocLibModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-branch（BRANCH）
#### 属性说明
branch

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
参照数据字典【[产品平台（动态）_缓存（ProductBranch_Cache）](../../codelist/ProductBranch_Cache)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) |
| 关系属性 | [名称（NAME）](../ibiz/DocLibModule/#属性-名称（NAME）) |
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
| 关系实体 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) |
| 关系属性 | [名称（NAME）](../ibiz/DocLibModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-排序值（ORDER）
#### 属性说明
排序值

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
| 关系实体 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) |
| 关系属性 | [名称（NAME）](../ibiz/DocLibModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) |
| 关系属性 | [名称（NAME）](../ibiz/DocLibModule/#属性-名称（NAME）) |
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
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | , |

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
| 关系实体 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) |
| 关系属性 | [名称（NAME）](../ibiz/DocLibModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-owner（OWNER）
#### 属性说明
owner

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
| 值 | / |

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
| 关系实体 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) |
| 关系属性 | [名称（NAME）](../ibiz/DocLibModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-类型（TYPE）
#### 属性说明
类型

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
| 值 | doc |

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
| 关系实体 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) |
| 关系属性 | [名称（NAME）](../ibiz/DocLibModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-编号（ROOT）
#### 属性说明
编号

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
| 关系实体 | [文档库（ZT_DOCLIB）](../zentao/DocLib) |
| 关系属性 | [编号（ID）](../zentao/DocLib/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-id（PARENT）
#### 属性说明
id

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
| 关系实体 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) |
| 关系属性 | [id（ID）](../ibiz/DocLibModule/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-所属文档库（DOCLIBNAME）
#### 属性说明
所属文档库

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
| 关系实体 | [文档库（ZT_DOCLIB）](../zentao/DocLib) |
| 关系属性 | [文档库名称（NAME）](../zentao/DocLib/#属性-文档库名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-上级模块（MODULENAME）
#### 属性说明
上级模块

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
| 关系实体 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) |
| 关系属性 | [名称（NAME）](../ibiz/DocLibModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-查询类型（DOCQTYPE）
#### 属性说明
查询类型

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) |
| 关系属性 | [名称（NAME）](../ibiz/DocLibModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-是否已收藏（ISFAVOURITES）
#### 属性说明
是否已收藏

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
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END )
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
| 关系实体 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) |
| 关系属性 | [名称（NAME）](../ibiz/DocLibModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文档数（DOCCNT）
#### 属性说明
文档数

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
(select count(1) from zt_doc t where t.deleted = '0' and t.module = t1.id) + (select count(1) from zt_module t where t.deleted = '0' and t.type = 'doc' and t.root = t1.root and t.parent = t1.id)
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
| 关系实体 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) |
| 关系属性 | [名称（NAME）](../ibiz/DocLibModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |


## 业务状态
| 序号 | 状态名称 | [查询类型](#属性-查询类型（DOCQTYPE）)<br>（DOCQTYPE） | [是否已收藏](#属性-是否已收藏（ISFAVOURITES）)<br>（ISFAVOURITES） | 默认 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [模块_未收藏](#业务状态-模块_未收藏（module_0）) | module | 0 |  | 否 |
| 2 | [模块_已收藏](#业务状态-模块_已收藏（module_1）) | module | 1 |  | 否 |
### 业务状态-模块_未收藏（module_0）
#### 状态说明
模块_未收藏

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [查询类型](#属性-查询类型（DOCQTYPE）)<br>（DOCQTYPE） | module |
| [是否已收藏](#属性-是否已收藏（ISFAVOURITES）)<br>（ISFAVOURITES） | 0 |


- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [取消收藏文档库分类](#操作权限-取消收藏文档库分类（SRFUR__DOCLIBMODULE_NFAVOUR_BUT）)<br>（SRFUR__DOCLIBMODULE_NFAVOUR_BUT） |
### 业务状态-模块_已收藏（module_1）
#### 状态说明
模块_已收藏

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [查询类型](#属性-查询类型（DOCQTYPE）)<br>（DOCQTYPE） | module |
| [是否已收藏](#属性-是否已收藏（ISFAVOURITES）)<br>（ISFAVOURITES） | 1 |


- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [收藏文档库分类](#操作权限-收藏文档库分类（SRFUR__DOCLIBMODULE_FAVOUR_BUT）)<br>（SRFUR__DOCLIBMODULE_FAVOUR_BUT） |

## 实体行为
| 序号 | 行为 | 行为名 | 行为类型 | 行为持有者 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [Create](#实体行为-Create（Create）) | Create | 内置方法 | 后台及前台 |
| 2 | [Update](#实体行为-Update（Update）) | Update | 内置方法 | 后台及前台 |
| 3 | [Remove](#实体行为-Remove（Remove）) | Remove | 内置方法 | 后台及前台 |
| 4 | [Get](#实体行为-Get（Get）) | Get | 内置方法 | 后台及前台 |
| 5 | [GetDraft](#实体行为-GetDraft（GetDraft）) | GetDraft | 内置方法 | 后台及前台 |
| 6 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 7 | [收藏](#实体行为-收藏（Collect）) | Collect | 用户自定义 | 后台及前台 |
| 8 | [取消收藏](#实体行为-取消收藏（DocLibModuleNFavorite）) | DocLibModuleNFavorite | 实体处理逻辑 | 后台 |
| 9 | [收藏](#实体行为-收藏（DoclibModuleFavorite）) | DoclibModuleFavorite | 实体处理逻辑 | 后台 |
| 10 | [重建模块路径](#实体行为-重建模块路径（Fix）) | Fix | 实体处理逻辑 | 后台 |
| 11 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |
| 12 | [取消收藏](#实体行为-取消收藏（UnCollect）) | UnCollect | 用户自定义 | 后台及前台 |

### 实体行为-Create（Create）
#### 说明
Create

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [重建模块路径<br>（FixPath）](#逻辑处理-重建模块路径（FixPath）) | 执行之后 | 是 |  |
### 实体行为-Update（Update）
#### 说明
Update

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [重建模块路径<br>（FixPath）](#逻辑处理-重建模块路径（FixPath）) | 执行之后 | 是 |  |
| 2 | [行为[Update]主状态拒绝逻辑<br>（Update__MSDeny）](#逻辑处理-行为[Update]主状态拒绝逻辑（Update__MSDeny）) | 检查 | 是 |  |
### 实体行为-Remove（Remove）
#### 说明
Remove

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [行为[Remove]主状态拒绝逻辑<br>（Remove__MSDeny）](#逻辑处理-行为[Remove]主状态拒绝逻辑（Remove__MSDeny）) | 检查 | 是 |  |
### 实体行为-Get（Get）
#### 说明
Get

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [当前是否收藏文档库分类<br>（CurUserIsF）](#逻辑处理-当前是否收藏文档库分类（CurUserIsF）) | 执行之后 | 是 |  |
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
### 实体行为-收藏（Collect）
#### 说明
收藏

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-取消收藏（DocLibModuleNFavorite）
#### 说明
取消收藏

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-收藏（DoclibModuleFavorite）
#### 说明
收藏

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-重建模块路径（Fix）
#### 说明
重建模块路径

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
### 实体行为-取消收藏（UnCollect）
#### 说明
取消收藏

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无

## 逻辑处理
| 序号 | 逻辑 | 逻辑名 | 逻辑持有者 |
| ---- | ---- | ---- | ---- |
| 1 | [当前是否收藏文档库分类](#逻辑处理-当前是否收藏文档库分类（CurUserIsF）) | CurUserIsF | 后台 |
| 2 | [文档库收藏](#逻辑处理-文档库收藏（DocLibModuleFavorite）) | DocLibModuleFavorite | 后台 |
| 3 | [文档库取消收藏](#逻辑处理-文档库取消收藏（DoclibModuleNFavorite）) | DoclibModuleNFavorite | 后台 |
| 4 | [重建模块路径](#逻辑处理-重建模块路径（FixPath）) | FixPath | 后台 |
| 5 | [行为[Update]主状态拒绝逻辑](#逻辑处理-行为[Update]主状态拒绝逻辑（Update__MSDeny）) | Update__MSDeny | 后台 |
| 6 | [行为[Remove]主状态拒绝逻辑](#逻辑处理-行为[Remove]主状态拒绝逻辑（Remove__MSDeny）) | Remove__MSDeny | 后台 |

### 逻辑处理-当前是否收藏文档库分类（CurUserIsF）
#### 说明
当前是否收藏文档库分类

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 查询是否收藏 | Rawsqlcall1 | 直接SQL调用 |
| 2 | 开始 | Begin | 开始 |
| 3 | 设置查询类型 | Rawsqlcall2 | 直接SQL调用 |
### 逻辑处理-文档库收藏（DocLibModuleFavorite）
#### 说明
文档库收藏

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 收藏 | Deaction1 | 实体行为 |
| 2 | 开始 | Begin | 开始 |
| 3 | 准备参数 | Prepareparam1 | 准备参数 |
### 逻辑处理-文档库取消收藏（DoclibModuleNFavorite）
#### 说明
文档库取消收藏

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 取消收藏 | Rawsqlcall1 | 直接SQL调用 |
### 逻辑处理-重建模块路径（FixPath）
#### 说明
重建模块路径

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 执行重建模型路径 | Deaction1 | 实体行为 |
| 3 | 准备参数 | Prepareparam1 | 准备参数 |
### 逻辑处理-行为[Update]主状态拒绝逻辑（Update__MSDeny）
#### 说明
行为[Update]主状态拒绝逻辑

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 状态[模块_已收藏]拒绝[Update]操作 | DenyBymodule_1 | 抛出异常 |
| 2 | 状态[模块_未收藏]拒绝[Update]操作 | DenyBymodule_0 | 抛出异常 |
| 3 | 开始 | Begin | 开始 |
| 4 | 获取数据 | Get | 实体行为 |
| 5 | 准备临时参数 | PrepareTemp | 准备参数 |
### 逻辑处理-行为[Remove]主状态拒绝逻辑（Remove__MSDeny）
#### 说明
行为[Remove]主状态拒绝逻辑

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 状态[模块_已收藏]拒绝[Remove]操作 | DenyBymodule_1 | 抛出异常 |
| 2 | 获取数据 | Get | 实体行为 |
| 3 | 准备临时参数 | PrepareTemp | 准备参数 |
| 4 | 状态[模块_未收藏]拒绝[Remove]操作 | DenyBymodule_0 | 抛出异常 |
| 5 | 开始 | Begin | 开始 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [名称（NAME）](#属性-名称（NAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [名称（NAME）](#属性-名称（NAME）) | `%like%` |
| 2 | [编号（ROOT）](#属性-编号（ROOT）) | `=` |
| 3 | [id（PARENT）](#属性-id（PARENT）) | `=` |
| 4 | [所属文档库（DOCLIBNAME）](#属性-所属文档库（DOCLIBNAME）) | `=` |
| 5 | [所属文档库（DOCLIBNAME）](#属性-所属文档库（DOCLIBNAME）) | `%like%` |
| 6 | [上级模块（MODULENAME）](#属性-上级模块（MODULENAME）) | `=` |
| 7 | [上级模块（MODULENAME）](#属性-上级模块（MODULENAME）) | `%like%` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据查询](#数据查询-数据查询（AllDoclibModule_Custom）) | AllDoclibModule_Custom | 否 |
| 2 | [子模块目录](#数据查询-子模块目录（ChildModuleByParent）) | ChildModuleByParent | 否 |
| 3 | [文档库分类子模块](#数据查询-文档库分类子模块（ChildModuleByRealParent）) | ChildModuleByRealParent | 否 |
| 4 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 5 | [数据查询](#数据查询-数据查询（DefaultDoclib）) | DefaultDoclib | 否 |
| 6 | [我的收藏](#数据查询-我的收藏（MyFavourites）) | MyFavourites | 否 |
| 7 | [父模块](#数据查询-父模块（ParentModule）) | ParentModule | 否 |
| 8 | [所有根模块目录](#数据查询-所有根模块目录（RootModuleMuLu）) | RootModuleMuLu | 否 |
| 9 | [根模块目录动态](#数据查询-根模块目录动态（RootModuleMuLuByRoot）) | RootModuleMuLuByRoot | 否 |
| 10 | [根模块目录动态](#数据查询-根模块目录动态（RootModuleMuLuBysrfparentkey）) | RootModuleMuLuBysrfparentkey | 否 |
| 11 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-数据查询（AllDoclibModule_Custom）
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
t1.`BRANCH`,
t1.`DELETED`,
t11.`NAME` AS `DOCLIBNAME`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t21.`NAME` AS `MODULENAME`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`, 
'module' AS `DOCQTYPE`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`
FROM `zt_module` t1 
LEFT JOIN zt_doclib t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

```
### 数据查询-子模块目录（ChildModuleByParent）
#### 说明
子模块目录

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t11.`NAME` AS `DOCLIBNAME`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t21.`NAME` AS `MODULENAME`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`, 
'module' AS `DOCQTYPE`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`
FROM `zt_module` t1 
LEFT JOIN zt_doclib t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

```
### 数据查询-文档库分类子模块（ChildModuleByRealParent）
#### 说明
文档库分类下维护分类专属

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t11.`NAME` AS `DOCLIBNAME`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t21.`NAME` AS `MODULENAME`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`, 
'module' AS `DOCQTYPE`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`
FROM `zt_module` t1 
LEFT JOIN zt_doclib t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID
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
t1.`BRANCH`,
t1.`DELETED`,
(select count(1) from zt_doc t where t.deleted = '0' and t.module = t1.id) + (select count(1) from zt_module t where t.deleted = '0' and t.type = 'doc' and t.root = t1.root and t.parent = t1.id) AS `DOCCNT`,
t11.`NAME` AS `DOCLIBNAME`,
t1.`GRADE`,
t1.`ID`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t21.`NAME` AS `MODULENAME`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_doclib t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

```
### 数据查询-数据查询（DefaultDoclib）
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
t1.`BRANCH`,
t1.`DELETED`,
t11.`NAME` AS `DOCLIBNAME`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t21.`NAME` AS `MODULENAME`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`, 
'module' AS `DOCQTYPE`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`
FROM `zt_module` t1 
LEFT JOIN zt_doclib t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

```
### 数据查询-我的收藏（MyFavourites）
#### 说明
我的收藏

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.`BRANCH`,
	t1.`DELETED`,
	t1.`GRADE`,
	t1.`ID`,
	'module' AS `DOCQTYPE`,
	1 AS `ISFAVOURITES`,
	( CASE WHEN EXISTS ( SELECT 1 FROM ZT_MODULE WHERE PARENT = t1.`ID` ) THEN FALSE ELSE TRUE END ) AS `ISLEAF`,
	t1.`NAME`,
	t1.`ORDER`,
	t1.`OWNER`,
	t1.`PARENT`,
	t1.`PATH`,
	t1.`ROOT`,
	t1.`SHORT`,
	t1.`TYPE` 
FROM
	`zt_module` t1
```
### 数据查询-父模块（ParentModule）
#### 说明
父模块

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t11.`NAME` AS `DOCLIBNAME`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t21.`NAME` AS `MODULENAME`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`, 
'module' AS `DOCQTYPE`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`
FROM `zt_module` t1 
LEFT JOIN zt_doclib t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

```
### 数据查询-所有根模块目录（RootModuleMuLu）
#### 说明
所有根模块目录

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t11.`NAME` AS `DOCLIBNAME`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t21.`NAME` AS `MODULENAME`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
'module'  as `TYPE`,
'module' AS `DOCQTYPE`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`,
(select count(1) from zt_doc t where t.deleted = '0' and t.module = t1.id) + (select count(1) from zt_module t where t.deleted = '0' and t.type = 'doc' and t.root = t1.root and t.parent = t1.id) as doccnt
FROM `zt_module` t1 
LEFT JOIN zt_doclib t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

```
### 数据查询-根模块目录动态（RootModuleMuLuByRoot）
#### 说明
根模块目录动态

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t11.`NAME` AS `DOCLIBNAME`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t21.`NAME` AS `MODULENAME`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`, 
'module' AS `DOCQTYPE`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`
FROM `zt_module` t1 
LEFT JOIN zt_doclib t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

```
### 数据查询-根模块目录动态（RootModuleMuLuBysrfparentkey）
#### 说明
根模块目录动态

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t11.`NAME` AS `DOCLIBNAME`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t21.`NAME` AS `MODULENAME`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`,
'module' AS `DOCQTYPE`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`
FROM `zt_module` t1 
LEFT JOIN zt_doclib t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 


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
t1.`COLLECTOR`,
t1.`DELETED`,
(select count(1) from zt_doc t where t.deleted = '0' and t.module = t1.id) + (select count(1) from zt_module t where t.deleted = '0' and t.type = 'doc' and t.root = t1.root and t.parent = t1.id) AS `DOCCNT`,
t11.`NAME` AS `DOCLIBNAME`,
t1.`GRADE`,
t1.`ID`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t21.`NAME` AS `MODULENAME`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_doclib t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [自定义文档库的模块](#数据集合-自定义文档库的模块（AllDocLibModule_Custom）) | AllDocLibModule_Custom | 否 |
| 2 | [所有文档库模块](#数据集合-所有文档库模块（AllDoclibModule）) | AllDoclibModule | 否 |
| 3 | [子模块目录](#数据集合-子模块目录（ChildModuleByParent）) | ChildModuleByParent | 否 |
| 4 | [文档库分类子模块](#数据集合-文档库分类子模块（ChildModuleByRealParent）) | ChildModuleByRealParent | 否 |
| 5 | [数据集](#数据集合-数据集（Default）) | Default | 是 |
| 6 | [我的收藏](#数据集合-我的收藏（MyFavourites）) | MyFavourites | 否 |
| 7 | [父集合](#数据集合-父集合（ParentModule）) | ParentModule | 否 |
| 8 | [所有根模块目录](#数据集合-所有根模块目录（RootModuleMuLu）) | RootModuleMuLu | 否 |
| 9 | [根模块目录](#数据集合-根模块目录（RootModuleMuLuByRoot）) | RootModuleMuLuByRoot | 否 |
| 10 | [根模块目录动态](#数据集合-根模块目录动态（RootModuleMuLuBysrfparentkey）) | RootModuleMuLuBysrfparentkey | 否 |

### 数据集合-自定义文档库的模块（AllDocLibModule_Custom）
#### 说明
自定义文档库的模块

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [数据查询（AllDoclibModule_Custom）](#数据查询-数据查询（AllDoclibModule_Custom）) |
### 数据集合-所有文档库模块（AllDoclibModule）
#### 说明
所有文档库模块

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [数据查询（DefaultDoclib）](#数据查询-数据查询（DefaultDoclib）) |
### 数据集合-子模块目录（ChildModuleByParent）
#### 说明
子模块目录

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [子模块目录（ChildModuleByParent）](#数据查询-子模块目录（ChildModuleByParent）) |
### 数据集合-文档库分类子模块（ChildModuleByRealParent）
#### 说明
文档库分类子模块

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [文档库分类子模块（ChildModuleByRealParent）](#数据查询-文档库分类子模块（ChildModuleByRealParent）) |
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
### 数据集合-我的收藏（MyFavourites）
#### 说明
我的收藏

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我的收藏（MyFavourites）](#数据查询-我的收藏（MyFavourites）) |
### 数据集合-父集合（ParentModule）
#### 说明
父集合

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [父模块（ParentModule）](#数据查询-父模块（ParentModule）) |
### 数据集合-所有根模块目录（RootModuleMuLu）
#### 说明
所有根模块目录

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [所有根模块目录（RootModuleMuLu）](#数据查询-所有根模块目录（RootModuleMuLu）) |
### 数据集合-根模块目录（RootModuleMuLuByRoot）
#### 说明
根模块目录

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [根模块目录动态（RootModuleMuLuByRoot）](#数据查询-根模块目录动态（RootModuleMuLuByRoot）) |
### 数据集合-根模块目录动态（RootModuleMuLuBysrfparentkey）
#### 说明
根模块目录动态

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [根模块目录动态（RootModuleMuLuBysrfparentkey）](#数据查询-根模块目录动态（RootModuleMuLuBysrfparentkey）) |

## 数据导入
无

## 数据导出
无

