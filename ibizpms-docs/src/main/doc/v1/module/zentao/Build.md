
# 实体-版本(ZT_BUILD)
## 实体说明
版本

## 所属模块
[基础管理模块](../zentao)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [发布（ZT_RELEASE）](../zentao/Release) | （默认） |
| 2 | [测试版本（ZT_TESTTASK）](../zentao/TestTask) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) | （默认） |
| 2 | [产品（ZT_PRODUCT）](../zentao/Product) | （默认） |
| 3 | [项目（ZT_PROJECT）](../zentao/Project) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [名称编号](#属性-名称编号（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 否 |
| 2 | [构建者](#属性-构建者（BUILDER）) | BUILDER | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [描述](#属性-描述（DESC）) | DESC | 长文本，没有长度限制 | 否 | 否 | 是 |
| 4 | [id](#属性-id（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 5 | [已删除](#属性-已删除（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 6 | [源代码地址](#属性-源代码地址（SCMPATH）) | SCMPATH | 文本，可指定长度 | 否 | 否 | 是 |
| 7 | [下载地址](#属性-下载地址（FILEPATH）) | FILEPATH | 文本，可指定长度 | 否 | 否 | 是 |
| 8 | [完成的需求](#属性-完成的需求（STORIES）) | STORIES | 长文本，没有长度限制 | 否 | 否 | 是 |
| 9 | [解决的Bug](#属性-解决的Bug（BUGS）) | BUGS | 长文本，没有长度限制 | 否 | 否 | 是 |
| 10 | [打包日期](#属性-打包日期（DATE）) | DATE | 日期型 | 否 | 否 | 是 |
| 11 | [产品](#属性-产品（PRODUCT）) | PRODUCT | 外键值 | 否 | 是 | 是 |
| 12 | [平台/分支](#属性-平台/分支（BRANCH）) | BRANCH | 外键值 | 否 | 是 | 是 |
| 13 | [所属项目](#属性-所属项目（PROJECT）) | PROJECT | 外键值 | 否 | 是 | 是 |
| 14 | [产品名称](#属性-产品名称（PRODUCTNAME）) | PRODUCTNAME | 外键值文本 | 否 | 是 | 是 |
| 15 | [Bug版本健值](#属性-Bug版本健值（IDS）) | IDS | 文本，可指定长度 | 否 | 是 | 是 |
| 16 | [附件](#属性-附件（FILES）) | FILES | 文本，可指定长度 | 否 | 是 | 是 |
| 17 | [重新构建](#属性-重新构建（REBUILD）) | REBUILD | 单项选择(数值) | 否 | 是 | 是 |
| 18 | [运行模式](#属性-运行模式（RELEASETYPE）) | RELEASETYPE | 单项选择(文本值) | 否 | 是 | 是 |
| 19 | [系统应用](#属性-系统应用（FRONTAPPLICATION）) | FRONTAPPLICATION | 单项选择(文本值) | 否 | 是 | 是 |
| 20 | [后台体系](#属性-后台体系（BACKGROUNDID）) | BACKGROUNDID | 单项选择(文本值) | 否 | 是 | 是 |
| 21 | [运行数据库](#属性-运行数据库（SQLID）) | SQLID | 单项选择(文本值) | 否 | 是 | 是 |
| 22 | [产生的bug](#属性-产生的bug（CREATEBUGCNT）) | CREATEBUGCNT | 长文本，没有长度限制 | 否 | 是 | 是 |
| 23 | [构建者（选择）](#属性-构建者（选择）（BUILDERPK）) | BUILDERPK | 文本，可指定长度 | 否 | 是 | 是 |
| 24 | [消息通知用户](#属性-消息通知用户（NOTICEUSERS）) | NOTICEUSERS | 文本，可指定长度 | 否 | 是 | 是 |

### 属性-名称编号（NAME）
#### 属性说明
名称编号

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

### 属性-构建者（BUILDER）
#### 属性说明
构建者

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
参照数据字典【[用户真实名称（动态-表格）（UserRealName_Gird）](../../codelist/UserRealName_Gird)】

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

### 属性-描述（DESC）
#### 属性说明
描述

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

### 属性-源代码地址（SCMPATH）
#### 属性说明
源代码地址

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

### 属性-下载地址（FILEPATH）
#### 属性说明
下载地址

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

### 属性-完成的需求（STORIES）
#### 属性说明
完成的需求

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

### 属性-解决的Bug（BUGS）
#### 属性说明
解决的Bug

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

### 属性-打包日期（DATE）
#### 属性说明
打包日期

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `<=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
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
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [编号（ID）](../zentao/Branch/#属性-编号（ID）) |
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

### 属性-产品名称（PRODUCTNAME）
#### 属性说明
产品名称

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

### 属性-Bug版本健值（IDS）
#### 属性说明
Bug版本健值

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-重新构建（REBUILD）
#### 属性说明
重新构建

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
单项选择(数值)

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[重新构建（RELEASE_rebuild）](../../codelist/RELEASE_rebuild)】

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

### 属性-运行模式（RELEASETYPE）
#### 属性说明
运行模式

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
单项选择(文本值)

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[运行模式（RELEASE_Type）](../../codelist/RELEASE_Type)】

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

### 属性-系统应用（FRONTAPPLICATION）
#### 属性说明
系统应用

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
单项选择(文本值)

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[系统应用（版本）（APPBuild）](../../codelist/APPBuild)】

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

### 属性-后台体系（BACKGROUNDID）
#### 属性说明
后台体系

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
单项选择(文本值)

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[后台服务体系（版本）（BackendBuild）](../../codelist/BackendBuild)】

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

### 属性-运行数据库（SQLID）
#### 属性说明
运行数据库

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
单项选择(文本值)

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[运行数据库（版本）（SQLBuild）](../../codelist/SQLBuild)】

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

### 属性-产生的bug（CREATEBUGCNT）
#### 属性说明
产生的bug

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-构建者（选择）（BUILDERPK）
#### 属性说明
构建者（选择）

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
t1.BUILDER
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

### 属性-消息通知用户（NOTICEUSERS）
#### 属性说明
消息通知用户

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
| 7 | [关联需求](#实体行为-关联需求（LinkStory）) | LinkStory | 用户自定义 | 后台及前台 |
| 8 | [提交测试](#实体行为-提交测试（MentionTest）) | mentionTest | 用户自定义 | 前台 |
| 9 | [移动端项目版本计数器](#实体行为-移动端项目版本计数器（MobProjectBuildCounter）) | MobProjectBuildCounter | 实体处理逻辑 | 后台 |
| 10 | [一键发布](#实体行为-一键发布（OneClickRelease）) | OneClickRelease | 用户自定义 | 后台及前台 |
| 11 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |

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
### 实体行为-关联需求（LinkStory）
#### 说明
【版本】关联需求、使用多项数据选择视图，选择多个数据，再保存关联性。

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-提交测试（MentionTest）
#### 说明
提交测试

- 行为类型
用户自定义

- 行为持有者
前台

#### 逻辑附加
无
### 实体行为-移动端项目版本计数器（MobProjectBuildCounter）
#### 说明
移动端项目版本计数器

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-一键发布（OneClickRelease）
#### 说明
一键发布

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

## 逻辑处理
| 序号 | 逻辑 | 逻辑名 | 逻辑持有者 |
| ---- | ---- | ---- | ---- |
| 1 | [移动端项目版本计数器](#逻辑处理-移动端项目版本计数器（MobProjectBuildCounter）) | MobProjectBuildCounter | 后台 |

### 逻辑处理-移动端项目版本计数器（MobProjectBuildCounter）
#### 说明
移动端项目版本计数器

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 获取完成的需求数 | Rawsqlcall1 | 直接SQL调用 |
| 2 | 获取产生的bug | Rawsqlcall3 | 直接SQL调用 |
| 3 | 获取解决的bug | Rawsqlcall2 | 直接SQL调用 |
| 4 | 开始 | Begin | 开始 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [名称编号（NAME）](#属性-名称编号（NAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [名称编号（NAME）](#属性-名称编号（NAME）) | `%like%` |
| 2 | [打包日期（DATE）](#属性-打包日期（DATE）) | `<=` |
| 3 | [产品（PRODUCT）](#属性-产品（PRODUCT）) | `=` |
| 4 | [平台/分支（BRANCH）](#属性-平台/分支（BRANCH）) | `=` |
| 5 | [所属项目（PROJECT）](#属性-所属项目（PROJECT）) | `=` |
| 6 | [产品名称（PRODUCTNAME）](#属性-产品名称（PRODUCTNAME）) | `=` |
| 7 | [产品名称（PRODUCTNAME）](#属性-产品名称（PRODUCTNAME）) | `%like%` |
| 8 | [重新构建（REBUILD）](#属性-重新构建（REBUILD）) | `=` |
| 9 | [运行模式（RELEASETYPE）](#属性-运行模式（RELEASETYPE）) | `=` |
| 10 | [系统应用（FRONTAPPLICATION）](#属性-系统应用（FRONTAPPLICATION）) | `=` |
| 11 | [后台体系（BACKGROUNDID）](#属性-后台体系（BACKGROUNDID）) | `=` |
| 12 | [运行数据库（SQLID）](#属性-运行数据库（SQLID）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [Bug产品版本](#数据查询-Bug产品版本（BugProductBuild）) | BugProductBuild | 否 |
| 2 | [产品版本](#数据查询-产品版本（CurProduct）) | CurProduct | 否 |
| 3 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 4 | [测试版本](#数据查询-测试版本（TestBuild）) | TestBuild | 否 |
| 5 | [测试轮次](#数据查询-测试轮次（TestRounds）) | TestRounds | 否 |
| 6 | [更新日志](#数据查询-更新日志（UpdateLog）) | UpdateLog | 否 |
| 7 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-Bug产品版本（BugProductBuild）
#### 说明
Bug产品版本

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.* from (select 0 as `BRANCH`,
	'' as `BUILDER`,
	null as `DATE`,
	'0' AS `DELETED`,
	'' AS `FILEPATH`,
	100000000 AS `ID`,
	'trunk' AS `IDs`,
	'主干' AS `NAME`,
	null AS `PRODUCT`,
	'' AS `PRODUCTNAME`,
	null as `PROJECT`,
	'' AS `SCMPATH`  from dual 
union all

SELECT
	t1.`BRANCH`,
	t1.`BUILDER`,
	t1.`DATE`,
	t1.`DELETED`,
	t1.`FILEPATH`,
	t1.`ID`,
	t1.`ID` AS `IDS`,
	(case when (select tt.`name` from zt_release tt where tt.build = t1.id and tt.deleted = '0'  order by tt.date desc LIMIT 0,1) is null then t1.`name` else (select tt.`name` from zt_release tt where tt.build = t1.id and tt.deleted = '0' order by tt.date desc LIMIT 0,1) end) AS `NAME`,
	t1.`PRODUCT`,
	t11.`NAME` AS `PRODUCTNAME`,
	t1.`PROJECT`,
	t1.`SCMPATH` 
FROM
	`zt_build` t1
	LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID where not EXISTS(select 1 from zt_release t2 where t2.build = t1.id and t2.`status` = 'terminate')) t1
```
### 数据查询-产品版本（CurProduct）
#### 说明
产品版本

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BRANCH`,
t1.`BUILDER`,
t1.BUILDER AS `BUILDERPK`,
t1.`DATE`,
t1.`DELETED`,
t1.`FILEPATH`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t1.`SCMPATH`
FROM `zt_build` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 

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
t1.`BRANCH`,
t1.`BUILDER`,
t1.BUILDER AS `BUILDERPK`,
t1.`DATE`,
t1.`DELETED`,
t1.`FILEPATH`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t1.`SCMPATH`
FROM `zt_build` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 

```
### 数据查询-测试版本（TestBuild）
#### 说明
测试版本

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BRANCH`,
t1.`BUILDER`,
t1.`DATE`,
t1.`DELETED`,
t1.`FILEPATH`,
t1.`ID`,
case when (select t2.`name` from zt_release t2 where t2.build = t1.id and t2.deleted = '0' ORDER BY t2.date desc LIMIT 0,1) is null then t1.`name` else (select t2.`name` from zt_release t2 where t2.build = t1.id and t2.deleted = '0' ORDER BY t2.date desc LIMIT 0,1) end as `NAME`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t1.`SCMPATH`
FROM `zt_build` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID
```
### 数据查询-测试轮次（TestRounds）
#### 说明
测试轮次

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BRANCH`,
t1.`BUILDER`,
t1.BUILDER AS `BUILDERPK`,
t1.`DATE`,
t1.`DELETED`,
t1.`FILEPATH`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t1.`SCMPATH`
FROM `zt_build` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 

```
### 数据查询-更新日志（UpdateLog）
#### 说明
更新日志

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BRANCH`,
t1.`BUGS`,
t1.`BUILDER`,
t1.`DATE`,
t1.`DELETED`,
t1.`DESC`,
t1.`FILEPATH`,
t1.`ID`,
CONCAT_WS('','PMS ',t1.`name`,' 主要更新') as `NAME`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t1.`SCMPATH`,
t1.`STORIES`
FROM `zt_build` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID
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
t1.`BUGS`,
t1.`BUILDER`,
t1.BUILDER AS `BUILDERPK`,
t1.`DATE`,
t1.`DELETED`,
t1.`DESC`,
t1.`FILEPATH`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t1.`SCMPATH`,
t1.`STORIES`
FROM `zt_build` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [Bug产品版本](#数据集合-Bug产品版本（BugProductBuild）) | BugProductBuild | 否 |
| 2 | [产品版本](#数据集合-产品版本（CurProduct）) | CurProduct | 否 |
| 3 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 4 | [测试版本](#数据集合-测试版本（TestBuild）) | TestBuild | 否 |
| 5 | [测试轮次](#数据集合-测试轮次（TestRounds）) | TestRounds | 否 |
| 6 | [更新日志](#数据集合-更新日志（UpdateLog）) | UpdateLog | 否 |

### 数据集合-Bug产品版本（BugProductBuild）
#### 说明
Bug产品版本

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [Bug产品版本（BugProductBuild）](#数据查询-Bug产品版本（BugProductBuild）) |
### 数据集合-产品版本（CurProduct）
#### 说明
产品版本

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品版本（CurProduct）](#数据查询-产品版本（CurProduct）) |
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
### 数据集合-测试版本（TestBuild）
#### 说明
测试版本

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [测试版本（TestBuild）](#数据查询-测试版本（TestBuild）) |
### 数据集合-测试轮次（TestRounds）
#### 说明
测试轮次

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [测试轮次（TestRounds）](#数据查询-测试轮次（TestRounds）) |
### 数据集合-更新日志（UpdateLog）
#### 说明
更新日志

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [更新日志（UpdateLog）](#数据查询-更新日志（UpdateLog）) |

## 数据导入
无

## 数据导出
| 序号 | 数据导出 | 数据导出名 | 最大导出数量 |
| ---- | ---- | ---- | ---- |
| 1 | [数据导出](#数据导出-数据导出（DataExport）) | DataExport | 1,000 |

### 数据导出-数据导出（DataExport）
#### 说明
数据导出

- 最大导出数
1,000

- 行为持有者
后台及前台

| 序号 | 导出标题 | 属性 | 默认值 |
| ---- | ---- | ---- | ---- |
| 1 | ID | [id（ID）](#属性-id（ID）) |  |
| 2 | 产品名称 | [产品名称（PRODUCTNAME）](#属性-产品名称（PRODUCTNAME）) |  |
| 3 | 名称编号 | [名称编号（NAME）](#属性-名称编号（NAME）) |  |
| 4 | 源代码地址 | [源代码地址（SCMPATH）](#属性-源代码地址（SCMPATH）) |  |
| 5 | 下载地址 | [下载地址（FILEPATH）](#属性-下载地址（FILEPATH）) |  |
| 6 | 打包日期 | [打包日期（DATE）](#属性-打包日期（DATE）) |  |
| 7 | 构建者 | [构建者（BUILDER）](#属性-构建者（BUILDER）) |  |
| 8 | 产品 | [产品（PRODUCT）](#属性-产品（PRODUCT）) |  |
| 9 | 所属项目 | [所属项目（PROJECT）](#属性-所属项目（PROJECT）) |  |

