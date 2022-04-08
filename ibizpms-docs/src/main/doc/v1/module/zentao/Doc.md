
# 实体-文档(ZT_DOC)
## 实体说明
文档

## 所属模块
[基础管理模块](../zentao)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [文档内容（ZT_DOCCONTENT）](../zentao/DocContent) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [文档库（ZT_DOCLIB）](../zentao/DocLib) | （默认） |
| 2 | [模块（ZT_MODULE）](../zentao/Module) | （默认） |
| 3 | [产品（ZT_PRODUCT）](../zentao/Product) | （默认） |
| 4 | [项目（ZT_PROJECT）](../zentao/Project) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [分组](#属性-分组（GROUPS）) | GROUPS | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [更新时间](#属性-更新时间（EDITEDDATE）) | EDITEDDATE | 日期时间型 | 否 | 否 | 是 |
| 3 | [views](#属性-views（VIEWS）) | VIEWS | 整型 | 否 | 否 | 是 |
| 4 | [版本号](#属性-版本号（VERSION）) | VERSION | 整型 | 否 | 否 | 是 |
| 5 | [由谁更新](#属性-由谁更新（EDITEDBY）) | EDITEDBY | 文本，可指定长度 | 否 | 否 | 是 |
| 6 | [文档编号](#属性-文档编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 7 | [文档标题](#属性-文档标题（TITLE）) | TITLE | 文本，可指定长度 | 否 | 否 | 否 |
| 8 | [已删除](#属性-已删除（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [文档类型](#属性-文档类型（TYPE）) | TYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 10 | [添加时间](#属性-添加时间（ADDEDDATE）) | ADDEDDATE | 日期时间型 | 否 | 否 | 是 |
| 11 | [权限](#属性-权限（ACL）) | ACL | 单项选择(文本值) | 否 | 否 | 是 |
| 12 | [用户](#属性-用户（USERS）) | USERS | 长文本，没有长度限制 | 否 | 否 | 是 |
| 13 | [关键字](#属性-关键字（KEYWORDS）) | KEYWORDS | 文本，可指定长度 | 否 | 否 | 是 |
| 14 | [收藏者](#属性-收藏者（COLLECTOR）) | COLLECTOR | 长文本，没有长度限制 | 否 | 否 | 是 |
| 15 | [由谁添加](#属性-由谁添加（ADDEDBY）) | ADDEDBY | 文本，可指定长度 | 否 | 否 | 是 |
| 16 | [所属文档库](#属性-所属文档库（LIB）) | LIB | 外键值 | 否 | 是 | 是 |
| 17 | [所属项目](#属性-所属项目（PROJECT）) | PROJECT | 外键值 | 否 | 是 | 是 |
| 18 | [所属产品](#属性-所属产品（PRODUCT）) | PRODUCT | 外键值 | 否 | 是 | 是 |
| 19 | [所属分类](#属性-所属分类（MODULE）) | MODULE | 外键值 | 否 | 是 | 是 |
| 20 | [所属项目](#属性-所属项目（PROJECTNAME）) | PROJECTNAME | 外键值文本 | 否 | 是 | 是 |
| 21 | [所属产品](#属性-所属产品（PRODUCTNAME）) | PRODUCTNAME | 外键值文本 | 否 | 是 | 是 |
| 22 | [所属文档库](#属性-所属文档库（LIBNAME）) | LIBNAME | 外键值文本 | 否 | 是 | 是 |
| 23 | [模块分类](#属性-模块分类（MODULENAME）) | MODULENAME | 外键值文本 | 否 | 是 | 是 |
| 24 | [文档正文](#属性-文档正文（CONTENT）) | CONTENT | HTML文本，没有长度限制 | 否 | 是 | 是 |
| 25 | [附件](#属性-附件（FILES）) | FILES | 文本，可指定长度 | 否 | 是 | 是 |
| 26 | [文档链接](#属性-文档链接（URL）) | URL | 文本，可指定长度 | 否 | 是 | 是 |
| 27 | [文档查询类型](#属性-文档查询类型（DOCQTYPE）) | DOCQTYPE | 文本，可指定长度 | 否 | 是 | 是 |
| 28 | [是否收藏](#属性-是否收藏（ISFAVOURITES）) | ISFAVOURITES | 文本，可指定长度 | 否 | 是 | 是 |
| 29 | [所有文档数量](#属性-所有文档数量（ALLDOCCNT）) | ALLDOCCNT | 整型 | 否 | 是 | 是 |
| 30 | [最近更新数量](#属性-最近更新数量（RECENTUPDATECNT）) | RECENTUPDATECNT | 整型 | 否 | 是 | 是 |
| 31 | [今日更新数量](#属性-今日更新数量（TODAYUPDATECNT）) | TODAYUPDATECNT | 整型 | 否 | 是 | 是 |
| 32 | [最近添加数量](#属性-最近添加数量（RECENTADDCNT）) | RECENTADDCNT | 整型 | 否 | 是 | 是 |
| 33 | [我的文档数量](#属性-我的文档数量（MYDOCCNT）) | MYDOCCNT | 整型 | 否 | 是 | 是 |
| 34 | [我的收藏数量](#属性-我的收藏数量（MYFAVOURITECNT）) | MYFAVOURITECNT | 整型 | 否 | 是 | 是 |
| 35 | [文档数](#属性-文档数（DOCCNT）) | DOCCNT | 整型 | 否 | 是 | 是 |

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-更新时间（EDITEDDATE）
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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-views（VIEWS）
#### 属性说明
views

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-版本号（VERSION）
#### 属性说明
版本号

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
| 值 | 1 |

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-由谁更新（EDITEDBY）
#### 属性说明
由谁更新

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文档编号（ID）
#### 属性说明
文档编号

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文档标题（TITLE）
#### 属性说明
文档标题

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文档类型（TYPE）
#### 属性说明
文档类型

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
参照数据字典【[文档类型（Doc__type）](../../codelist/Doc__type)】

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-添加时间（ADDEDDATE）
#### 属性说明
添加时间

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
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
| 值 | open |

- 取值范围/公式
参照数据字典【[文档权限（Doc__acl）](../../codelist/Doc__acl)】

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-关键字（KEYWORDS）
#### 属性说明
关键字

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-由谁添加（ADDEDBY）
#### 属性说明
由谁添加

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

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-所属文档库（LIB）
#### 属性说明
所属文档库

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

### 属性-所属项目（PROJECT）
#### 属性说明
所属项目

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

### 属性-所属产品（PRODUCT）
#### 属性说明
所属产品

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

### 属性-所属分类（MODULE）
#### 属性说明
所属分类

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
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

### 属性-所属文档库（LIBNAME）
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

### 属性-模块分类（MODULENAME）
#### 属性说明
模块分类

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文档正文（CONTENT）
#### 属性说明
文档正文

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
HTML文本，没有长度限制

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-附件（FILES）
#### 属性说明
附件

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文档链接（URL）
#### 属性说明
文档链接

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文档查询类型（DOCQTYPE）
#### 属性说明
文档查询类型

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
'doc'
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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-所有文档数量（ALLDOCCNT）
#### 属性说明
所有文档数量

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-最近更新数量（RECENTUPDATECNT）
#### 属性说明
最近更新数量

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-今日更新数量（TODAYUPDATECNT）
#### 属性说明
今日更新数量

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-最近添加数量（RECENTADDCNT）
#### 属性说明
最近添加数量

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-我的文档数量（MYDOCCNT）
#### 属性说明
我的文档数量

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-我的收藏数量（MYFAVOURITECNT）
#### 属性说明
我的收藏数量

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文档数（DOCCNT）
#### 属性说明
文档数

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |


## 业务状态
| 序号 | 状态名称 | [文档查询类型](#属性-文档查询类型（DOCQTYPE）)<br>（DOCQTYPE） | [是否收藏](#属性-是否收藏（ISFAVOURITES）)<br>（ISFAVOURITES） | 默认 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [文档_未收藏](#业务状态-文档_未收藏（doc_0）) | doc | 0 |  | 否 |
| 2 | [文档_已收藏](#业务状态-文档_已收藏（doc_1）) | doc | 1 |  | 否 |
| 3 | [文档库_未收藏](#业务状态-文档库_未收藏（doclib_0）) | doclib | 0 |  | 否 |
| 4 | [文档库_已收藏](#业务状态-文档库_已收藏（doclib_1）) | doclib | 1 |  | 否 |
| 5 | [文档库分类模块_未收藏](#业务状态-文档库分类模块_未收藏（module_0）) | module | 0 |  | 否 |
| 6 | [文档库分类模块_已收藏](#业务状态-文档库分类模块_已收藏（module_1）) | module | 1 |  | 否 |
### 业务状态-文档_未收藏（doc_0）
#### 状态说明
文档_未收藏

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [文档查询类型](#属性-文档查询类型（DOCQTYPE）)<br>（DOCQTYPE） | doc |
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
| 1 | [文档库](#操作权限-文档库（DOCLIB）)<br>（DOCLIB） |
| 2 | [文档库分类模块](#操作权限-文档库分类模块（MODULE）)<br>（MODULE） |
| 3 | [取消收藏文档](#操作权限-取消收藏文档（SRFUR__DOC_NFAVOUR_BUT）)<br>（SRFUR__DOC_NFAVOUR_BUT） |
### 业务状态-文档_已收藏（doc_1）
#### 状态说明
文档_已收藏

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [文档查询类型](#属性-文档查询类型（DOCQTYPE）)<br>（DOCQTYPE） | doc |
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
| 1 | [收藏文档](#操作权限-收藏文档（SRFUR__DOC_FAVOUR_BUT）)<br>（SRFUR__DOC_FAVOUR_BUT） |
| 2 | [文档库分类模块](#操作权限-文档库分类模块（MODULE）)<br>（MODULE） |
| 3 | [文档库](#操作权限-文档库（DOCLIB）)<br>（DOCLIB） |
### 业务状态-文档库_未收藏（doclib_0）
#### 状态说明
文档库_未收藏

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [文档查询类型](#属性-文档查询类型（DOCQTYPE）)<br>（DOCQTYPE） | doclib |
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
| 2 | [取消收藏文档](#操作权限-取消收藏文档（SRFUR__DOC_NFAVOUR_BUT）)<br>（SRFUR__DOC_NFAVOUR_BUT） |
| 3 | [文档库分类模块](#操作权限-文档库分类模块（MODULE）)<br>（MODULE） |
### 业务状态-文档库_已收藏（doclib_1）
#### 状态说明
文档库_已收藏

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [文档查询类型](#属性-文档查询类型（DOCQTYPE）)<br>（DOCQTYPE） | doclib |
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
| 1 | [收藏文档](#操作权限-收藏文档（SRFUR__DOC_FAVOUR_BUT）)<br>（SRFUR__DOC_FAVOUR_BUT） |
| 2 | [文档库维护](#操作权限-文档库维护（DOC）)<br>（DOC） |
| 3 | [文档库分类模块](#操作权限-文档库分类模块（MODULE）)<br>（MODULE） |
### 业务状态-文档库分类模块_未收藏（module_0）
#### 状态说明
文档库分类模块_未收藏

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [文档查询类型](#属性-文档查询类型（DOCQTYPE）)<br>（DOCQTYPE） | module |
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
| 1 | [取消收藏文档](#操作权限-取消收藏文档（SRFUR__DOC_NFAVOUR_BUT）)<br>（SRFUR__DOC_NFAVOUR_BUT） |
| 2 | [文档库](#操作权限-文档库（DOCLIB）)<br>（DOCLIB） |
| 3 | [文档库维护](#操作权限-文档库维护（DOC）)<br>（DOC） |
### 业务状态-文档库分类模块_已收藏（module_1）
#### 状态说明
文档库分类模块_已收藏

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [文档查询类型](#属性-文档查询类型（DOCQTYPE）)<br>（DOCQTYPE） | module |
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
| 1 | [文档库](#操作权限-文档库（DOCLIB）)<br>（DOCLIB） |
| 2 | [文档库维护](#操作权限-文档库维护（DOC）)<br>（DOC） |
| 3 | [收藏文档](#操作权限-收藏文档（SRFUR__DOC_FAVOUR_BUT）)<br>（SRFUR__DOC_FAVOUR_BUT） |

## 实体行为
| 序号 | 行为 | 行为名 | 行为类型 | 行为持有者 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [Create](#实体行为-Create（Create）) | Create | 内置方法 | 后台及前台 |
| 2 | [Update](#实体行为-Update（Update）) | Update | 内置方法 | 后台及前台 |
| 3 | [Remove](#实体行为-Remove（Remove）) | Remove | 内置方法 | 后台及前台 |
| 4 | [Get](#实体行为-Get（Get）) | Get | 内置方法 | 后台及前台 |
| 5 | [GetDraft](#实体行为-GetDraft（GetDraft）) | GetDraft | 内置方法 | 后台及前台 |
| 6 | [根据版本更新正文信息](#实体行为-根据版本更新正文信息（ByVersionUpdateContext）) | ByVersionUpdateContext | 用户自定义 | 后台 |
| 7 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 8 | [收藏](#实体行为-收藏（Collect）) | Collect | 用户自定义 | 后台 |
| 9 | [行为](#实体行为-行为（GetDocStatus）) | GetDocStatus | 用户自定义 | 后台及前台 |
| 10 | [仅收藏文档](#实体行为-仅收藏文档（OnlyCollectDoc）) | OnlyCollectDoc | 用户自定义 | 后台及前台 |
| 11 | [仅取消收藏文档](#实体行为-仅取消收藏文档（OnlyUnCollectDoc）) | OnlyUnCollectDoc | 用户自定义 | 后台及前台 |
| 12 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |
| 13 | [取消收藏](#实体行为-取消收藏（UnCollect）) | UnCollect | 用户自定义 | 后台 |

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
| 1 | [当前是否收藏文档<br>（CurUserIsF）](#逻辑处理-当前是否收藏文档（CurUserIsF）) | 执行之后 | 是 |  |
### 实体行为-GetDraft（GetDraft）
#### 说明
GetDraft

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-根据版本更新正文信息（ByVersionUpdateContext）
#### 说明
根据版本更新正文信息

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
### 实体行为-收藏（Collect）
#### 说明
收藏

- 行为类型
用户自定义

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-行为（GetDocStatus）
#### 说明
行为

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-仅收藏文档（OnlyCollectDoc）
#### 说明
仅收藏文档

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-仅取消收藏文档（OnlyUnCollectDoc）
#### 说明
仅取消收藏文档

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
后台

#### 逻辑附加
无

## 逻辑处理
| 序号 | 逻辑 | 逻辑名 | 逻辑持有者 |
| ---- | ---- | ---- | ---- |
| 1 | [根据版本更新正文信息](#逻辑处理-根据版本更新正文信息（ByVersionUpdateContext）) | ByVersionUpdateContext | 后台 |
| 2 | [当前是否收藏文档](#逻辑处理-当前是否收藏文档（CurUserIsF）) | CurUserIsF | 后台 |

### 逻辑处理-根据版本更新正文信息（ByVersionUpdateContext）
#### 说明
根据版本更新正文信息

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 获取正文信息 | Rawsqlcall1 | 直接SQL调用 |
### 逻辑处理-当前是否收藏文档（CurUserIsF）
#### 说明
当前是否收藏文档

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 查询是否收藏 | Rawsqlcall1 | 直接SQL调用 |
| 2 | 开始 | Begin | 开始 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [文档标题（TITLE）](#属性-文档标题（TITLE）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [文档标题（TITLE）](#属性-文档标题（TITLE）) | `%like%` |
| 2 | [文档类型（TYPE）](#属性-文档类型（TYPE）) | `=` |
| 3 | [权限（ACL）](#属性-权限（ACL）) | `=` |
| 4 | [收藏者（COLLECTOR）](#属性-收藏者（COLLECTOR）) | `%like%` |
| 5 | [由谁添加（ADDEDBY）](#属性-由谁添加（ADDEDBY）) | `=` |
| 6 | [所属文档库（LIB）](#属性-所属文档库（LIB）) | `=` |
| 7 | [所属项目（PROJECT）](#属性-所属项目（PROJECT）) | `=` |
| 8 | [所属产品（PRODUCT）](#属性-所属产品（PRODUCT）) | `=` |
| 9 | [所属分类（MODULE）](#属性-所属分类（MODULE）) | `=` |
| 10 | [所属项目（PROJECTNAME）](#属性-所属项目（PROJECTNAME）) | `=` |
| 11 | [所属项目（PROJECTNAME）](#属性-所属项目（PROJECTNAME）) | `%like%` |
| 12 | [所属产品（PRODUCTNAME）](#属性-所属产品（PRODUCTNAME）) | `=` |
| 13 | [所属产品（PRODUCTNAME）](#属性-所属产品（PRODUCTNAME）) | `%like%` |
| 14 | [所属文档库（LIBNAME）](#属性-所属文档库（LIBNAME）) | `=` |
| 15 | [所属文档库（LIBNAME）](#属性-所属文档库（LIBNAME）) | `%like%` |
| 16 | [模块分类（MODULENAME）](#属性-模块分类（MODULENAME）) | `=` |
| 17 | [模块分类（MODULENAME）](#属性-模块分类（MODULENAME）) | `%like%` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [文档库文档（子库）](#数据查询-文档库文档（子库）（ChildDocLibDoc）) | ChildDocLibDoc | 否 |
| 2 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 3 | [文档库文档](#数据查询-文档库文档（DocLibAndDoc）) | DocLibAndDoc | 否 |
| 4 | [文档库文档](#数据查询-文档库文档（DocLibDoc）) | DocLibDoc | 否 |
| 5 | [文档库分类文档](#数据查询-文档库分类文档（DocModuleDoc）) | DocModuleDoc | 否 |
| 6 | [文档统计](#数据查询-文档统计（DocStatus）) | DocStatus | 否 |
| 7 | [文件夹文档（子目录）](#数据查询-文件夹文档（子目录）（ModuleDocChild）) | ModuleDocChild | 否 |
| 8 | [我的收藏](#数据查询-我的收藏（MyFavourite）) | MyFavourite | 否 |
| 9 | [我的收藏](#数据查询-我的收藏（MyFavouritesOnlyDoc）) | MyFavouritesOnlyDoc | 否 |
| 10 | [子目录文档](#数据查询-子目录文档（NotRootDoc）) | NotRootDoc | 否 |
| 11 | [根目录文档](#数据查询-根目录文档（RootDoc）) | RootDoc | 否 |
| 12 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-文档库文档（子库）（ChildDocLibDoc）
#### 说明
文档库文档（子库）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.* from (select null as `ACL`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`, 
null as `ADDEDBY`,
null as `ADDEDDATE`,
'0' as `DELETED`,
null as `EDITEDBY`,
null as `EDITEDDATE`,
null as  `GROUPS`,
t1.`ID`,
''`KEYWORDS`,
${srfdatacontext('srfparentkey','{"defname":"ROOT","dename":"ZT_MODULE"}')} as `LIB`,
'' AS `LIBNAME`,
0 as `MODULE`,
'' AS `MODULENAME`,
0 as `PRODUCT`,
'' AS `PRODUCTNAME`,
0 as `PROJECT`,
'' AS `PROJECTNAME`,
t1.`name` as `TITLE`,
'text' as `TYPE`,
1 as `VERSION`,
'' as `VIEWS`,'module' as DOCQTYPE from zt_module t1 where t1.deleted = '0' and t1.type = 'doc' and t1.root = ${srfdatacontext('srfparentkey','{"defname":"ROOT","dename":"ZT_MODULE"}')} and t1.parent = ${srfdatacontext('parent','{"defname":"ROOT","dename":"ZT_MODULE"}')}
UNION
SELECT
t1.`ACL`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`, 
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`GROUPS`,
t1.`ID`,
t1.`KEYWORDS`,
t1.`LIB`,
t31.`NAME` AS `LIBNAME`,
t1.`MODULE`,
t41.`NAME` AS `MODULENAME`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
t1.`TITLE`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VIEWS`,
'doc' as DOCQTYPE
FROM `zt_doc` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 
LEFT JOIN zt_doclib t31 ON t1.LIB = t31.ID 
LEFT JOIN zt_module t41 ON t1.MODULE = t41.ID ) t1
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
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
'doc' AS `DOCQTYPE`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`GROUPS`,
t1.`ID`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`,
t1.`KEYWORDS`,
t1.`LIB`,
t31.`NAME` AS `LIBNAME`,
t1.`MODULE`,
t41.`NAME` AS `MODULENAME`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
t1.`TITLE`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VIEWS`
FROM `zt_doc` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 
LEFT JOIN zt_doclib t31 ON t1.LIB = t31.ID 
LEFT JOIN zt_module t41 ON t1.MODULE = t41.ID 

```
### 数据查询-文档库文档（DocLibAndDoc）
#### 说明
文档库文档

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.* from (select null as `ACL`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`,
null as `ADDEDBY`,
null as `ADDEDDATE`,
'0' as `DELETED`,
null as `EDITEDBY`,
null as `EDITEDDATE`,
null as  `GROUPS`,
t1.`ID`,
''`KEYWORDS`,
'0' as `LIB`,
'' AS `LIBNAME`,
(case when ${srfdatacontext('srfparentkey','{"defname":"ROOT","dename":"ZT_MODULE"}')} is null then '0' else 
${srfdatacontext('srfparentkey','{"defname":"ROOT","dename":"ZT_MODULE"}')} end
)
 as `MODULE`,
'' AS `MODULENAME`,
t2.product as `PRODUCT`,
'' AS `PRODUCTNAME`,
0 as `PROJECT`,
'' AS `PROJECTNAME`,
t1.`name` as `TITLE`,
'module' as `TYPE`,
1 as `VERSION`,
(select count(1) from zt_doc t where t.deleted = '0' and t.module = t1.id) + (select count(1) from zt_module t where t.deleted = '0' and t.type = 'doc' and t.root = t1.root and t.parent = t1.id) as doccnt,
'' as `VIEWS`, 'module' as DOCQTYPE from zt_module t1 
LEFT JOIN zt_doclib t2 on t2.id = t1.root
where t1.deleted = '0' and t1.type = 'doc'  and t1.parent =  (case when ${srfdatacontext('srfparentkey','{"defname":"ROOT","dename":"ZT_MODULE"}')} is null then '0' else 
${srfdatacontext('srfparentkey','{"defname":"ROOT","dename":"ZT_MODULE"}')} end
)
UNION
SELECT
t1.`ACL`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`,
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`GROUPS`,
t1.`ID`,
t1.`KEYWORDS`,
t1.`LIB`,
t31.`NAME` AS `LIBNAME`,
t1.`MODULE`,
t41.`NAME` AS `MODULENAME`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
t1.`TITLE`,
t1.`TYPE`,
t1.`VERSION`,
0 as doccnt,
t1.`VIEWS`,
'doc' as DOCQTYPE
FROM `zt_doc` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 
LEFT JOIN zt_doclib t31 ON t1.LIB = t31.ID 
LEFT JOIN zt_module t41 ON t1.MODULE = t41.ID ) t1
```
### 数据查询-文档库文档（DocLibDoc）
#### 说明
文档库文档

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.* from (select null as `ACL`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`,
null as `ADDEDBY`,
null as `ADDEDDATE`,
'0' as `DELETED`,
null as `EDITEDBY`,
null as `EDITEDDATE`,
null as  `GROUPS`,
t1.`ID`,
''`KEYWORDS`,
${srfdatacontext('srfroot','{"defname":"ROOT","dename":"ZT_MODULE"}')} as `LIB`,
'' AS `LIBNAME`,
(case when ${srfdatacontext('parent','{"defname":"ROOT","dename":"ZT_MODULE"}')} is null then '0' else 
${srfdatacontext('parent','{"defname":"ROOT","dename":"ZT_MODULE"}')} end
)
 as `MODULE`,
'' AS `MODULENAME`,
0 as `PRODUCT`,
'' AS `PRODUCTNAME`,
0 as `PROJECT`,
'' AS `PROJECTNAME`,
t1.`name` as `TITLE`,
'text' as `TYPE`,
1 as `VERSION`,
'' as `VIEWS`,'module' as DOCQTYPE from zt_module t1 where t1.deleted = '0' and t1.type = 'doc' and t1.root = ${srfdatacontext('srfroot','{"defname":"ROOT","dename":"ZT_MODULE"}')} and t1.parent =  (case when ${srfdatacontext('parent','{"defname":"ROOT","dename":"ZT_MODULE"}')} is null then '0' else 
${srfdatacontext('parent','{"defname":"ROOT","dename":"ZT_MODULE"}')} end
)
UNION
SELECT
t1.`ACL`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`,
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`GROUPS`,
t1.`ID`,
t1.`KEYWORDS`,
t1.`LIB`,
t31.`NAME` AS `LIBNAME`,
t1.`MODULE`,
t41.`NAME` AS `MODULENAME`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
t1.`TITLE`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VIEWS`,
'doc' as DOCQTYPE
FROM `zt_doc` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 
LEFT JOIN zt_doclib t31 ON t1.LIB = t31.ID 
LEFT JOIN zt_module t41 ON t1.MODULE = t41.ID ) t1
```
### 数据查询-文档库分类文档（DocModuleDoc）
#### 说明
文档库分类文档

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.* from (select null as `ACL`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`, 
null as `ADDEDBY`,
null as `ADDEDDATE`,
'0' as `DELETED`,
null as `EDITEDBY`,
null as `EDITEDDATE`,
null as  `GROUPS`,
t1.`ID`,
''`KEYWORDS`,
${srfdatacontext('lib','{"defname":"ROOT","dename":"ZT_MODULE"}')} as `LIB`,
'' AS `LIBNAME`,
${srfdatacontext('id','{"defname":"ROOT","dename":"ZT_MODULE"}')} as `MODULE`,
'' AS `MODULENAME`,
0 as `PRODUCT`,
'' AS `PRODUCTNAME`,
0 as `PROJECT`,
'' AS `PROJECTNAME`,
t1.`name` as `TITLE`,
'text' as `TYPE`,
1 as `VERSION`,
'' as `VIEWS`,'module' as DOCQTYPE from zt_module t1 where t1.deleted = '0' and t1.type = 'doc' and t1.root = ${srfdatacontext('lib','{"defname":"ROOT","dename":"ZT_MODULE"}')} and t1.parent = ${srfdatacontext('id','{"defname":"ROOT","dename":"ZT_MODULE"}')}
UNION
SELECT
t1.`ACL`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`, 
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`GROUPS`,
t1.`ID`,
t1.`KEYWORDS`,
t1.`LIB`,
t31.`NAME` AS `LIBNAME`,
t1.`MODULE`,
t41.`NAME` AS `MODULENAME`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
t1.`TITLE`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VIEWS`,
'doc' as DOCQTYPE
FROM `zt_doc` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 
LEFT JOIN zt_doclib t31 ON t1.LIB = t31.ID 
LEFT JOIN zt_module t41 ON t1.MODULE = t41.ID ) t1
```
### 数据查询-文档统计（DocStatus）
#### 说明
文档统计

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select 
count(1) as `ALLDOCCNT`,
(select count(1) from zt_doc where TO_DAYS(DATE_FORMAT(NOW(),'%Y-%m-%d')) - TO_DAYS(DATE_FORMAT(editedDate,'%Y-%m-%d')) < 5 and deleted = '0') as `RECENTUPDATECNT`,
(select count(1) from zt_doc where DATE_FORMAT(NOW(),'%Y-%m-%d') = DATE_FORMAT(editedDate,'%Y-%m-%d') and deleted = '0') as `TODAYUPDATECNT`,
(select count(1) from zt_doc where TO_DAYS(DATE_FORMAT(NOW(),'%Y-%m-%d')) - TO_DAYS(DATE_FORMAT(addedDate,'%Y-%m-%d')) < 5 and deleted = '0') as `RECENTADDCNT`,
(select count(1) from zt_doc where addedBy = #{srf.sessioncontext.srfloginname} and deleted = '0') as `MYDOCCNT`,
(select count(1) from zt_doc where FIND_IN_SET(#{srf.sessioncontext.srfloginname},collector) > 0) as `MYFAVOURITECNT`
from zt_doc
where deleted = '0'
```
### 数据查询-文件夹文档（子目录）（ModuleDocChild）
#### 说明
文件夹文档（子目录）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACL`,
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
'doc' AS `DOCQTYPE`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`GROUPS`,
t1.`ID`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`,
t1.`KEYWORDS`,
t1.`LIB`,
t31.`NAME` AS `LIBNAME`,
t1.`MODULE`,
t41.`NAME` AS `MODULENAME`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
t1.`TITLE`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VIEWS`
FROM `zt_doc` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 
LEFT JOIN zt_doclib t31 ON t1.LIB = t31.ID 
LEFT JOIN zt_module t41 ON t1.MODULE = t41.ID 

```
### 数据查询-我的收藏（MyFavourite）
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
	* 
FROM
	(
	SELECT
		t1.id,
		t1.`name` AS `title`,
		NULL AS `addedBy`,
		NULL AS `addedDate`,
		NULL AS `editedBy`,
		NULL AS `editedDate`,
		1 AS `ISFAVOURITES`, 
		'doclib' as DOCQTYPE
	FROM
		zt_doclib t1 
	WHERE
		t1.collector LIKE CONCAT_WS( '', '%,', #{srf.sessioncontext.srfloginname}, '%,' ) 
		AND t1.deleted = '0' UNION
	SELECT
		t2.id,
		t2.`name` AS `title`,
		NULL AS `addedBy`,
		NULL AS `addedDate`,
		NULL AS `editedBy`,
		NULL AS `editedDate`,
		1 AS `ISFAVOURITES`, 
		'module' as DOCQTYPE 
	FROM
		zt_module t2 
	WHERE
		t2.collector LIKE CONCAT_WS( '', '%,', #{srf.sessioncontext.srfloginname}, '%,' ) 
		AND t2.deleted = '0' UNION
	SELECT
		t3.id,
		t3.title AS `title`,
		t3.addedBy,
		t3.addedDate,
		t3.editedBy,
		t3.editedDate,
		1 AS `ISFAVOURITES`, 
		'doc' as DOCQTYPE 
	FROM
		zt_doc t3 
	WHERE
		t3.collector LIKE CONCAT_WS( '', '%,', #{srf.sessioncontext.srfloginname}, '%,' ) 
	AND t3.deleted = '0' 
	) t1
```
### 数据查询-我的收藏（MyFavouritesOnlyDoc）
#### 说明
只查询我收藏的文档

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.`ACL`,
	t1.`ADDEDBY`,
	t1.`ADDEDDATE`,
	t1.`DELETED`,
	'doc' AS `DOCQTYPE`,
	t1.`EDITEDBY`,
	t1.`EDITEDDATE`,
	t1.`GROUPS`,
	t1.`ID`,
	1 AS `ISFAVOURITES`,
	t1.`KEYWORDS`,
	t1.`LIB`,
	t1.`MODULE`,
	t1.`PRODUCT`,
	t1.`PROJECT`,
	t1.`TITLE`,
	t1.`TYPE`,
	t1.`VERSION`,
	t1.`VIEWS` 
FROM
	`zt_doc` t1
```
### 数据查询-子目录文档（NotRootDoc）
#### 说明
子目录文档

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACL`,
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
'doc' AS `DOCQTYPE`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`GROUPS`,
t1.`ID`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`, 
t1.`KEYWORDS`,
t1.`LIB`,
t31.`NAME` AS `LIBNAME`,
t1.`MODULE`,
t41.`NAME` AS `MODULENAME`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
t1.`TITLE`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VIEWS`
FROM `zt_doc` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 
LEFT JOIN zt_doclib t31 ON t1.LIB = t31.ID 
LEFT JOIN zt_module t41 ON t1.MODULE = t41.ID 

```
### 数据查询-根目录文档（RootDoc）
#### 说明
根目录文档

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACL`,
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
'doc' AS `DOCQTYPE`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`GROUPS`,
t1.`ID`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`,
t1.`KEYWORDS`,
t1.`LIB`,
t31.`NAME` AS `LIBNAME`,
t1.`MODULE`,
t41.`NAME` AS `MODULENAME`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
t1.`TITLE`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VIEWS`
FROM `zt_doc` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 
LEFT JOIN zt_doclib t31 ON t1.LIB = t31.ID 
LEFT JOIN zt_module t41 ON t1.MODULE = t41.ID 

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
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`COLLECTOR`,
t1.`DELETED`,
'doc' AS `DOCQTYPE`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`GROUPS`,
t1.`ID`,
( CASE WHEN FIND_IN_SET( #{srf.sessioncontext.srfloginname}, t1.collector ) > 0 THEN 1 ELSE 0 END ) AS `ISFAVOURITES`,
t1.`KEYWORDS`,
t1.`LIB`,
t31.`NAME` AS `LIBNAME`,
t1.`MODULE`,
t41.`NAME` AS `MODULENAME`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
t1.`TITLE`,
t1.`TYPE`,
t1.`USERS`,
t1.`VERSION`,
t1.`VIEWS`
FROM `zt_doc` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 
LEFT JOIN zt_doclib t31 ON t1.LIB = t31.ID 
LEFT JOIN zt_module t41 ON t1.MODULE = t41.ID 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [文档库文档（子库）](#数据集合-文档库文档（子库）（ChildDocLibDoc）) | ChildDocLibDoc | 否 |
| 2 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 3 | [文档库文档](#数据集合-文档库文档（DocLibAndDoc）) | DocLibAndDoc | 否 |
| 4 | [文档库文档](#数据集合-文档库文档（DocLibDoc）) | DocLibDoc | 否 |
| 5 | [文档库分类文档](#数据集合-文档库分类文档（DocModuleDoc）) | DocModuleDoc | 否 |
| 6 | [文档统计](#数据集合-文档统计（DocStatus）) | DocStatus | 否 |
| 7 | [文件夹文档（子目录）](#数据集合-文件夹文档（子目录）（ModuleDocChild）) | ModuleDocChild | 否 |
| 8 | [我的收藏](#数据集合-我的收藏（MyFavourite）) | MyFavourite | 否 |
| 9 | [我的收藏](#数据集合-我的收藏（MyFavouritesOnlyDoc）) | MyFavouritesOnlyDoc | 否 |
| 10 | [子目录文档](#数据集合-子目录文档（NotRootDoc）) | NotRootDoc | 否 |
| 11 | [根目录文档](#数据集合-根目录文档（RootDoc）) | RootDoc | 否 |

### 数据集合-文档库文档（子库）（ChildDocLibDoc）
#### 说明
文档库文档（子库）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [文档库文档（子库）（ChildDocLibDoc）](#数据查询-文档库文档（子库）（ChildDocLibDoc）) |
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
### 数据集合-文档库文档（DocLibAndDoc）
#### 说明
文档库文档

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [文档库文档（DocLibAndDoc）](#数据查询-文档库文档（DocLibAndDoc）) |
### 数据集合-文档库文档（DocLibDoc）
#### 说明
文档库文档

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [文档库文档（DocLibDoc）](#数据查询-文档库文档（DocLibDoc）) |
### 数据集合-文档库分类文档（DocModuleDoc）
#### 说明
文档库分类文档

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [文档库分类文档（DocModuleDoc）](#数据查询-文档库分类文档（DocModuleDoc）) |
### 数据集合-文档统计（DocStatus）
#### 说明
文档统计

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [文档统计（DocStatus）](#数据查询-文档统计（DocStatus）) |
### 数据集合-文件夹文档（子目录）（ModuleDocChild）
#### 说明
文件夹文档（子目录）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [文件夹文档（子目录）（ModuleDocChild）](#数据查询-文件夹文档（子目录）（ModuleDocChild）) |
### 数据集合-我的收藏（MyFavourite）
#### 说明
我的收藏

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我的收藏（MyFavourite）](#数据查询-我的收藏（MyFavourite）) |
### 数据集合-我的收藏（MyFavouritesOnlyDoc）
#### 说明
我的收藏

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我的收藏（MyFavouritesOnlyDoc）](#数据查询-我的收藏（MyFavouritesOnlyDoc）) |
### 数据集合-子目录文档（NotRootDoc）
#### 说明
子目录文档

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [子目录文档（NotRootDoc）](#数据查询-子目录文档（NotRootDoc）) |
### 数据集合-根目录文档（RootDoc）
#### 说明
根目录文档

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [根目录文档（RootDoc）](#数据查询-根目录文档（RootDoc）) |

## 数据导入
无

## 数据导出
无

