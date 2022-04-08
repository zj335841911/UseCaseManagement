
# 实体-文档库(ZT_DOCLIB)
## 实体说明
文档库

## 所属模块
[基础管理模块](../zentao)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [文档库分类（IBZ_DOCLIBMODULE）](../ibiz/DocLibModule) | （默认） |
| 2 | [文档（ZT_DOC）](../zentao/Doc) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [产品（ZT_PRODUCT）](../zentao/Product) | （默认） |
| 2 | [项目（ZT_PROJECT）](../zentao/Project) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [文档类型](#属性-文档类型（TYPE）) | TYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 2 | [收藏者](#属性-收藏者（COLLECTOR）) | COLLECTOR | 长文本，没有长度限制 | 否 | 否 | 是 |
| 3 | [权限](#属性-权限（ACL）) | ACL | 单项选择(文本值) | 否 | 否 | 是 |
| 4 | [已删除](#属性-已删除（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 5 | [分组](#属性-分组（GROUPS）) | GROUPS | 文本，可指定长度 | 否 | 否 | 是 |
| 6 | [编号](#属性-编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 7 | [用户](#属性-用户（USERS）) | USERS | 长文本，没有长度限制 | 否 | 否 | 是 |
| 8 | [是否是主库](#属性-是否是主库（MAIN）) | MAIN | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [文档库名称](#属性-文档库名称（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 否 |
| 10 | [排序](#属性-排序（ORDER）) | ORDER | 整型 | 否 | 否 | 是 |
| 11 | [项目库](#属性-项目库（PROJECT）) | PROJECT | 外键值 | 否 | 是 | 是 |
| 12 | [产品库](#属性-产品库（PRODUCT）) | PRODUCT | 外键值 | 否 | 是 | 是 |
| 13 | [文档数量](#属性-文档数量（DOCCNT）) | DOCCNT | 整型 | 否 | 是 | 是 |
| 14 | [文件库类型](#属性-文件库类型（DOCLIBTYPE）) | DOCLIBTYPE | 单项选择(文本值) | 否 | 是 | 是 |
| 15 | [所属项目](#属性-所属项目（PROJECTNAME）) | PROJECTNAME | 外键值文本 | 否 | 是 | 是 |
| 16 | [所属产品](#属性-所属产品（PRODUCTNAME）) | PRODUCTNAME | 外键值文本 | 否 | 是 | 是 |
| 17 | [是否收藏](#属性-是否收藏（ISFAVOURITES）) | ISFAVOURITES | 文本，可指定长度 | 否 | 是 | 是 |
| 18 | [组织标识](#属性-组织标识（ORGID）) | ORGID | 文本，可指定长度 | 否 | 是 | 是 |
| 19 | [部门标识](#属性-部门标识（MDEPTID）) | MDEPTID | 文本，可指定长度 | 否 | 是 | 是 |
| 20 | [Root](#属性-Root（ROOT）) | ROOT | 文本，可指定长度 | 否 | 是 | 是 |
| 21 | [文件夹数](#属性-文件夹数（MODULECNT）) | MODULECNT | 整型 | 否 | 是 | 是 |
| 22 | [创建时间](#属性-创建时间（OPENEDDATE）) | OPENEDDATE | 日期时间型 | 否 | 是 | 是 |

### 属性-文档类型（TYPE）
#### 属性说明
业务逻辑处理上还存在collector进行判断是否为all展示

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
参照数据字典【[文档库类型（Doclib__type）](../../codelist/Doclib__type)】

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
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-收藏者（COLLECTOR）
#### 属性说明
收藏者

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
| 值 |  |

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-权限（ACL）
#### 属性说明
权限

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
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | default |

- 取值范围/公式
参照数据字典【[文档库权限（Doclib__acl）](../../codelist/Doclib__acl)】

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
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-已删除（DELETED）
#### 属性说明
已删除

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-分组（GROUPS）
#### 属性说明
选择权限为自定义生效

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
| 值 |  |

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-编号（ID）
#### 属性说明
编号

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-用户（USERS）
#### 属性说明
选择权限为自定义生效

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
| 值 |  |

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-是否是主库（MAIN）
#### 属性说明
是否是主库

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文档库名称（NAME）
#### 属性说明
文档库名称

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-排序（ORDER）
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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-项目库（PROJECT）
#### 属性说明
项目库

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-产品库（PRODUCT）
#### 属性说明
产品库

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文档数量（DOCCNT）
#### 属性说明
文档数量

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文件库类型（DOCLIBTYPE）
#### 属性说明
文件库类型

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
单项选择(文本值)

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[文件库类型（DOCLIBTYPE）](../../codelist/DOCLIBTYPE)】

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

### 属性-所属项目（PROJECTNAME）
#### 属性说明
所属项目

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

### 属性-所属产品（PRODUCTNAME）
#### 属性说明
所属产品

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-是否收藏（ISFAVOURITES）
#### 属性说明
是否收藏

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-组织标识（ORGID）
#### 属性说明
组织标识

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-部门标识（MDEPTID）
#### 属性说明
部门标识

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-Root（ROOT）
#### 属性说明
Root

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文件夹数（MODULECNT）
#### 属性说明
文件夹数

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
(select count(1) from zt_module t where t.deleted = '0' and t.type = 'doc' and t.parent = 0 and t.root = t1.id)
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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-创建时间（OPENEDDATE）
#### 属性说明
创建时间

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
日期时间型

- Java类型
Timestamp

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(select t.date from zt_action t where t.objectID = t1.id and t.objectType = 'doclib' and t.action = 'created')
```

- 数据格式
yyyy-MM-dd HH:mm:ss

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |


## 业务状态
| 序号 | 状态名称 | [文件库类型](#属性-文件库类型（DOCLIBTYPE）)<br>（DOCLIBTYPE） | [是否收藏](#属性-是否收藏（ISFAVOURITES）)<br>（ISFAVOURITES） | 默认 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [文档库_未收藏](#业务状态-文档库_未收藏（doc_0）) | doc | 0 |  | 否 |
| 2 | [文档库_已收藏](#业务状态-文档库_已收藏（doc_1）) | doc | 1 |  | 否 |
| 3 | [附件库_未收藏](#业务状态-附件库_未收藏（file_0）) | file | 0 |  | 否 |
| 4 | [附件库_已收藏](#业务状态-附件库_已收藏（file_1）) | file | 1 |  | 否 |
### 业务状态-文档库_未收藏（doc_0）
#### 状态说明
文档库_未收藏

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [文件库类型](#属性-文件库类型（DOCLIBTYPE）)<br>（DOCLIBTYPE） | doc |
| [是否收藏](#属性-是否收藏（ISFAVOURITES）)<br>（ISFAVOURITES） | 0 |


- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [取消收藏文档库](#操作权限-取消收藏文档库（SRFUR__DOCLIB_NFAVOUR_BUT）)<br>（SRFUR__DOCLIB_NFAVOUR_BUT） |
| 2 | [附件库](#操作权限-附件库（FILE）)<br>（FILE） |
### 业务状态-文档库_已收藏（doc_1）
#### 状态说明
文档库_已收藏

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [文件库类型](#属性-文件库类型（DOCLIBTYPE）)<br>（DOCLIBTYPE） | doc |
| [是否收藏](#属性-是否收藏（ISFAVOURITES）)<br>（ISFAVOURITES） | 1 |


- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [附件库](#操作权限-附件库（FILE）)<br>（FILE） |
| 2 | [收藏文档库](#操作权限-收藏文档库（SRFUR__DOCLIB_FAVOUR_BUT）)<br>（SRFUR__DOCLIB_FAVOUR_BUT） |
### 业务状态-附件库_未收藏（file_0）
#### 状态说明
附件库_未收藏

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [文件库类型](#属性-文件库类型（DOCLIBTYPE）)<br>（DOCLIBTYPE） | file |
| [是否收藏](#属性-是否收藏（ISFAVOURITES）)<br>（ISFAVOURITES） | 0 |


- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [文档库维护](#操作权限-文档库维护（DOC）)<br>（DOC） |
| 2 | [取消收藏文档库](#操作权限-取消收藏文档库（SRFUR__DOCLIB_NFAVOUR_BUT）)<br>（SRFUR__DOCLIB_NFAVOUR_BUT） |
| 3 | [收藏文档库](#操作权限-收藏文档库（SRFUR__DOCLIB_FAVOUR_BUT）)<br>（SRFUR__DOCLIB_FAVOUR_BUT） |
### 业务状态-附件库_已收藏（file_1）
#### 状态说明
附件库_已收藏

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [文件库类型](#属性-文件库类型（DOCLIBTYPE）)<br>（DOCLIBTYPE） | file |
| [是否收藏](#属性-是否收藏（ISFAVOURITES）)<br>（ISFAVOURITES） | 1 |


- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [收藏文档库](#操作权限-收藏文档库（SRFUR__DOCLIB_FAVOUR_BUT）)<br>（SRFUR__DOCLIB_FAVOUR_BUT） |
| 2 | [文档库维护](#操作权限-文档库维护（DOC）)<br>（DOC） |
| 3 | [取消收藏文档库](#操作权限-取消收藏文档库（SRFUR__DOCLIB_NFAVOUR_BUT）)<br>（SRFUR__DOCLIB_NFAVOUR_BUT） |

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
| 8 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |
| 9 | [取消收藏](#实体行为-取消收藏（UnCollect）) | UnCollect | 用户自定义 | 后台及前台 |

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
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [当前是否收藏文档库<br>（CurUserIsF）](#逻辑处理-当前是否收藏文档库（CurUserIsF）) | 执行之后 | 是 |  |
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
| 1 | [当前是否收藏文档库](#逻辑处理-当前是否收藏文档库（CurUserIsF）) | CurUserIsF | 后台 |

### 逻辑处理-当前是否收藏文档库（CurUserIsF）
#### 说明
当前是否收藏文档库

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 设置是否收藏 | Rawsqlcall1 | 直接SQL调用 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [文档库名称（NAME）](#属性-文档库名称（NAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [文档类型（TYPE）](#属性-文档类型（TYPE）) | `=` |
| 2 | [权限（ACL）](#属性-权限（ACL）) | `=` |
| 3 | [是否是主库（MAIN）](#属性-是否是主库（MAIN）) | `=` |
| 4 | [文档库名称（NAME）](#属性-文档库名称（NAME）) | `%like%` |
| 5 | [项目库（PROJECT）](#属性-项目库（PROJECT）) | `=` |
| 6 | [产品库（PRODUCT）](#属性-产品库（PRODUCT）) | `=` |
| 7 | [文件库类型（DOCLIBTYPE）](#属性-文件库类型（DOCLIBTYPE）) | `=` |
| 8 | [所属项目（PROJECTNAME）](#属性-所属项目（PROJECTNAME）) | `=` |
| 9 | [所属项目（PROJECTNAME）](#属性-所属项目（PROJECTNAME）) | `%like%` |
| 10 | [所属产品（PRODUCTNAME）](#属性-所属产品（PRODUCTNAME）) | `=` |
| 11 | [所属产品（PRODUCTNAME）](#属性-所属产品（PRODUCTNAME）) | `%like%` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [自定义文档库](#数据查询-自定义文档库（ByCustom）) | ByCustom | 否 |
| 2 | [产品文档库](#数据查询-产品文档库（ByProduct）) | ByProduct | 否 |
| 3 | [产品文档库](#数据查询-产品文档库（ByProductNotFiles）) | ByProductNotFiles | 否 |
| 4 | [项目文件库](#数据查询-项目文件库（ByProject）) | ByProject | 否 |
| 5 | [项目文件库](#数据查询-项目文件库（ByProjectNotFiles）) | ByProjectNotFiles | 否 |
| 6 | [所属文档库](#数据查询-所属文档库（CurDocLib）) | CurDocLib | 否 |
| 7 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 8 | [我的收藏](#数据查询-我的收藏（MyFavourites）) | MyFavourites | 否 |
| 9 | [根目录](#数据查询-根目录（RootModuleMuLu）) | RootModuleMuLu | 否 |
| 10 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-自定义文档库（ByCustom）
#### 说明
自定义文档库

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACL`,
t1.`DELETED`,
'doc' AS `DOCLIBTYPE`,
t1.`GROUPS`,
t1.`ID`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`,
t1.`MAIN`,
t1.`MDEPTID`,
(select count(1) from zt_module t where t.deleted = '0' and t.type = 'doc' and t.parent = 0 and t.root = t1.id) AS `MODULECNT`,
t1.`NAME`,
(select t.date from zt_action t where t.objectID = t1.id and t.objectType = 'doclib' and t.action = 'created') AS `OPENEDDATE`,
t1.`ORDER`,
t1.`ORGID`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
t1.`TYPE`
FROM `zt_doclib` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 

```
### 数据查询-产品文档库（ByProduct）
#### 说明
产品文档库

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.* from (SELECT
	( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`,
	t1.`ACL`,
	t1.`DELETED`,
	t1.`GROUPS`,
	t1.`ID`,
	t1.`MAIN`,
	t1.`NAME`,
	t1.`ORDER`,
	t1.`PRODUCT`,
	t1.`PROJECT`,
	t1.`TYPE` ,
        'doc' as DOCLIBTYPE,
	(select count(1) from zt_doc t where t.lib = t1.id and t.product = t1.product and t.deleted = '0') as DOCCNT
FROM
	`zt_doclib` t1 
	
	UNION
	SELECT
	0 AS `ISFAVOURITES`,
	'default' as `ACL`,
	'0' as `DELETED`,
	'' as `GROUPS`,
	0 as `ID`,
	0 as `MAIN`,
	'附件库' as `NAME`,
	0 as `ORDER`,
	#{srf.datacontext.product} as `PRODUCT`, 
	0 as `PROJECT`,
	'product' as `TYPE` ,
        'file' as DOCLIBTYPE,
	(select count(1) from zt_file t where ((t.objectType ='product' and t.objectID =  #{srf.datacontext.product}
	) or (t.objectType = 'story' and exists(select 1 from zt_story tt where tt.id = t.objectID and tt.product =  #{srf.datacontext.product} 
	and tt.deleted = '0')) or (t.objectType = 'bug' and exists(select 1 from zt_bug tt where tt.id = t.objectID and tt.product =  #{srf.datacontext.product} 
	and tt.deleted = '0')) or (t.objectType = 'doc' and EXISTS(select 1 from zt_doc tt where tt.id = t.objectID and tt.product = #{srf.datacontext.product}
	and tt.deleted = '0'))) and t.deleted = '0') as DOCCNT
FROM
	dual  ) t1
```
### 数据查询-产品文档库（ByProductNotFiles）
#### 说明
产品文档库

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.* 
FROM
	(
	SELECT
		( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`,
		t1.`ACL`,
		t1.`DELETED`,
		t1.`GROUPS`,
		t1.`ID`,
(select count(1) from zt_module t where t.deleted = '0' and t.type = 'doc' and t.parent = 0 and t.root = t1.id) as modulecnt,
(select t.date from zt_action t where t.objectID = t1.id and t.objectType = 'doclib' and t.action = 'created') as openedDate,
		t1.`MAIN`,
		t1.`NAME`,
		t1.`ORDER`,
		t1.`PRODUCT`,
		t1.`PROJECT`,
		t1.`TYPE`,
		'doc' AS DOCLIBTYPE,
		(
		SELECT
			count( 1 ) 
		FROM
			zt_doc t 
		WHERE
			t.lib = t1.id 
			AND t.product = t1.product 
			AND t.deleted = '0' 
		) AS DOCCNT 
	FROM
	`zt_doclib` t1 
	) t1
```
### 数据查询-项目文件库（ByProject）
#### 说明
项目文件库

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.* from (SELECT
	( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`,
	t1.`ACL`,
	t1.`DELETED`,
	t1.`GROUPS`,
	t1.`ID`,
	t1.`MAIN`,
	t1.`NAME`,
	t1.`ORDER`,
	t1.`PRODUCT`,
	t1.`PROJECT`,
	t1.`TYPE` ,
        'doc' as DOCLIBTYPE,
	(select count(1) from zt_doc t where t.lib = t1.id and t.project = t1.project and t.deleted = '0') as DOCCNT
FROM
	`zt_doclib` t1 
	
	UNION
	SELECT
	0 AS `ISFAVOURITES`,
	'default' as `ACL`,
	'0' as `DELETED`,
	'' as `GROUPS`,
	0 as `ID`,
	0 as `MAIN`,
	'附件库' as `NAME`,
	0 as `ORDER`,
	0 as `PRODUCT`,
	#{srf.datacontext.project} as `PROJECT`,
	'project' as `TYPE` ,
        'file' as DOCLIBTYPE,
	(select count(1) from zt_file t where ((t.objectType ='project' and t.objectID = #{srf.datacontext.project}) or (t.objectType = 'task' and exists(select 1 from zt_task tt where tt.id = t.objectID and tt.project = #{srf.datacontext.project} and tt.deleted = '0')) or (t.objectType = 'build' and exists(select 1 from zt_build tt where tt.id = t.objectID and tt.project = #{srf.datacontext.project} and tt.deleted = '0')) or (t.objectType = 'doc' and EXISTS(select 1 from zt_doc tt where tt.id = t.objectID and tt.project = #{srf.datacontext.project} and tt.deleted = '0'))) and t.deleted = '0') as DOCCNT
FROM
	dual  ) t1
```
### 数据查询-项目文件库（ByProjectNotFiles）
#### 说明
项目文件库

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.* 
FROM
	(
	SELECT
		( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`,
		t1.`ACL`,
		t1.`DELETED`,
		t1.`GROUPS`,
		t1.`ID`,
		t1.`MAIN`,
		t1.`NAME`,
		t1.`ORDER`,
		t1.`PRODUCT`,
		t1.`PROJECT`,
		t1.`TYPE`,
		'doc' AS DOCLIBTYPE,
		(
		SELECT
			count( 1 ) 
		FROM
			zt_doc t 
		WHERE
			t.lib = t1.id 
			AND t.project = t1.project 
			AND t.deleted = '0' 
		) AS DOCCNT 
	FROM
	`zt_doclib` t1 
	) t1
```
### 数据查询-所属文档库（CurDocLib）
#### 说明
所属文档库

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACL`,
t1.`DELETED`,
'doc' AS `DOCLIBTYPE`,
t1.`GROUPS`,
t1.`ID`,
t1.`MAIN`,
 CONCAT_WS('',case when t1.type = 'product' then '/[产品]/' when t1.type = 'project' then '/[项目]/' else '/' end,case when t1.type = 'product' then t21.`name` when t1.type = 'project' then t11.`name` else '' end,case when t1.type = 'product' then '/' when t1.type = 'project' then '/' else '' end,t1.`name`)  as `NAME`,
t1.`ORDER`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
t1.`TYPE`,
t1.orgid,
t1.MDEPTID
FROM `zt_doclib` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID
```
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
t1.`ACL`,
t1.`DELETED`,
'doc' AS `DOCLIBTYPE`,
t1.`GROUPS`,
t1.`ID`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`,
t1.`MAIN`,
t1.`MDEPTID`,
(select count(1) from zt_module t where t.deleted = '0' and t.type = 'doc' and t.parent = 0 and t.root = t1.id) AS `MODULECNT`,
t1.`NAME`,
(select t.date from zt_action t where t.objectID = t1.id and t.objectType = 'doclib' and t.action = 'created') AS `OPENEDDATE`,
t1.`ORDER`,
t1.`ORGID`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
t1.`TYPE`
FROM `zt_doclib` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 

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
	t1.`ACL`,
	t1.`DELETED`,
	'doc' AS `DOCLIBTYPE`,
	t1.`GROUPS`,
	t1.`ID`,
	'1' AS `ISFAVOURITES`,
	t1.`MAIN`,
	t1.`MDEPTID`,
	t1.`NAME`,
	t1.`ORDER`,
	t1.`ORGID`,
	t1.`PRODUCT`,
	t1.`PROJECT`,
	t1.`TYPE` 
FROM
	zt_doclib t1
```
### 数据查询-根目录（RootModuleMuLu）
#### 说明
根目录

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
'module'  as `TYPE`
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
t1.`ACL`,
t1.`COLLECTOR`,
t1.`DELETED`,
'doc' AS `DOCLIBTYPE`,
t1.`GROUPS`,
t1.`ID`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`,
t1.`MAIN`,
t1.`MDEPTID`,
(select count(1) from zt_module t where t.deleted = '0' and t.type = 'doc' and t.parent = 0 and t.root = t1.id) AS `MODULECNT`,
t1.`NAME`,
(select t.date from zt_action t where t.objectID = t1.id and t.objectType = 'doclib' and t.action = 'created') AS `OPENEDDATE`,
t1.`ORDER`,
t1.`ORGID`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
t1.`TYPE`,
t1.`USERS`
FROM `zt_doclib` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [自定义文档库](#数据集合-自定义文档库（ByCustom）) | ByCustom | 否 |
| 2 | [产品文档库](#数据集合-产品文档库（ByProduct）) | ByProduct | 否 |
| 3 | [产品文档库](#数据集合-产品文档库（ByProductNotFiles）) | ByProductNotFiles | 否 |
| 4 | [项目文件库](#数据集合-项目文件库（ByProject）) | ByProject | 否 |
| 5 | [项目文件库](#数据集合-项目文件库（ByProjectNotFiles）) | ByProjectNotFiles | 否 |
| 6 | [所属文档库](#数据集合-所属文档库（CurDocLib）) | CurDocLib | 否 |
| 7 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 8 | [我的收藏](#数据集合-我的收藏（MyFavourites）) | MyFavourites | 否 |
| 9 | [根目录](#数据集合-根目录（RootModuleMuLu）) | RootModuleMuLu | 否 |

### 数据集合-自定义文档库（ByCustom）
#### 说明
自定义文档库

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [自定义文档库（ByCustom）](#数据查询-自定义文档库（ByCustom）) |
### 数据集合-产品文档库（ByProduct）
#### 说明
产品文档库

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品文档库（ByProduct）](#数据查询-产品文档库（ByProduct）) |
### 数据集合-产品文档库（ByProductNotFiles）
#### 说明
产品文档库

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品文档库（ByProductNotFiles）](#数据查询-产品文档库（ByProductNotFiles）) |
### 数据集合-项目文件库（ByProject）
#### 说明
项目文件库

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目文件库（ByProject）](#数据查询-项目文件库（ByProject）) |
### 数据集合-项目文件库（ByProjectNotFiles）
#### 说明
项目文件库

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目文件库（ByProjectNotFiles）](#数据查询-项目文件库（ByProjectNotFiles）) |
### 数据集合-所属文档库（CurDocLib）
#### 说明
所属文档库

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [所属文档库（CurDocLib）](#数据查询-所属文档库（CurDocLib）) |
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
### 数据集合-根目录（RootModuleMuLu）
#### 说明
根目录

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [根目录（RootModuleMuLu）](#数据查询-根目录（RootModuleMuLu）) |

## 数据导入
无

## 数据导出
无

