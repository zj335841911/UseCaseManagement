
# 实体-测试报告(ZT_TESTREPORT)
## 实体说明
测试报告

## 所属模块
[基础管理模块](../zentao)

## 实体关系
### 1:N
无
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [产品（ZT_PRODUCT）](../zentao/Product) | （默认） |
| 2 | [项目（ZT_PROJECT）](../zentao/Project) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [所属对象](#属性-所属对象（OBJECTID）) | OBJECTID | 整型 | 否 | 否 | 是 |
| 2 | [用例](#属性-用例（CASES）) | CASES | 长文本，没有长度限制 | 否 | 否 | 是 |
| 3 | [参与人员](#属性-参与人员（MEMBERS）) | MEMBERS | 长文本，没有长度限制 | 否 | 否 | 是 |
| 4 | [测试的Bug](#属性-测试的Bug（BUGS）) | BUGS | 长文本，没有长度限制 | 否 | 否 | 是 |
| 5 | [由谁创建](#属性-由谁创建（CREATEDBY）) | CREATEDBY | 文本，可指定长度 | 否 | 否 | 是 |
| 6 | [测试的需求](#属性-测试的需求（STORIES）) | STORIES | 长文本，没有长度限制 | 否 | 否 | 是 |
| 7 | [测试单](#属性-测试单（TASKS）) | TASKS | 文本，可指定长度 | 否 | 否 | 是 |
| 8 | [标题](#属性-标题（TITLE）) | TITLE | 文本，可指定长度 | 否 | 否 | 否 |
| 9 | [开始时间](#属性-开始时间（BEGIN）) | BEGIN | 日期型 | 否 | 否 | 否 |
| 10 | [对象类型](#属性-对象类型（OBJECTTYPE）) | OBJECTTYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 11 | [结束时间](#属性-结束时间（END）) | END | 日期型 | 否 | 否 | 否 |
| 12 | [版本信息](#属性-版本信息（BUILDS）) | BUILDS | 文本，可指定长度 | 否 | 否 | 是 |
| 13 | [创建时间](#属性-创建时间（CREATEDDATE）) | CREATEDDATE | 日期时间型 | 否 | 否 | 是 |
| 14 | [总结](#属性-总结（REPORT）) | REPORT | 长文本，没有长度限制 | 否 | 否 | 是 |
| 15 | [编号](#属性-编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 16 | [负责人](#属性-负责人（OWNER）) | OWNER | 文本，可指定长度 | 否 | 否 | 是 |
| 17 | [已删除](#属性-已删除（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 18 | [所属产品](#属性-所属产品（PRODUCT）) | PRODUCT | 外键值 | 否 | 是 | 是 |
| 19 | [所属项目](#属性-所属项目（PROJECT）) | PROJECT | 外键值 | 否 | 是 | 是 |
| 20 | [所属产品](#属性-所属产品（PRODUCTNAME）) | PRODUCTNAME | 外键值文本 | 否 | 是 | 是 |
| 21 | [所属项目](#属性-所属项目（PROJECTNAME）) | PROJECTNAME | 外键值文本 | 否 | 是 | 是 |
| 22 | [备注](#属性-备注（COMMENT）) | COMMENT | HTML文本，没有长度限制 | 否 | 是 | 是 |
| 23 | [概况](#属性-概况（OVERVIEWS）) | OVERVIEWS | HTML文本，没有长度限制 | 否 | 是 | 是 |
| 24 | [附件](#属性-附件（FILES）) | FILES | 文本，可指定长度 | 否 | 是 | 是 |
| 25 | [项目报告产品数](#属性-项目报告产品数（PRODUCTCNT）) | PRODUCTCNT | 整型 | 否 | 是 | 是 |

### 属性-所属对象（OBJECTID）
#### 属性说明
所属对象

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-用例（CASES）
#### 属性说明
用例

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-参与人员（MEMBERS）
#### 属性说明
参与人员

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
参照数据字典【[用户真实名称（动态-产品团队选择）（UserRealNameProductTeam）](../../codelist/UserRealNameProductTeam)】

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
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-测试的Bug（BUGS）
#### 属性说明
测试的Bug

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-由谁创建（CREATEDBY）
#### 属性说明
由谁创建

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-测试的需求（STORIES）
#### 属性说明
测试的需求

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-测试单（TASKS）
#### 属性说明
测试单

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
参照数据字典【[测试单（动态）（TestTask）](../../codelist/TestTask)】

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
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-标题（TITLE）
#### 属性说明
标题

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-开始时间（BEGIN）
#### 属性说明
开始时间

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
日期型

- Java类型
Timestamp

- 是否允许为空
否

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-对象类型（OBJECTTYPE）
#### 属性说明
对象类型

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
| 值 |  |

- 取值范围/公式
参照数据字典【[测试报告对象类型（Testreport__object_type）](../../codelist/Testreport__object_type)】

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
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-结束时间（END）
#### 属性说明
结束时间

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
日期型

- Java类型
Timestamp

- 是否允许为空
否

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-版本信息（BUILDS）
#### 属性说明
版本信息

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-创建时间（CREATEDDATE）
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-总结（REPORT）
#### 属性说明
总结

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-负责人（OWNER）
#### 属性说明
负责人

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
参照数据字典【[用户真实名称（动态-产品团队选择）（UserRealNameProductTeam）](../../codelist/UserRealNameProductTeam)】

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
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
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

### 属性-备注（COMMENT）
#### 属性说明
备注

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-概况（OVERVIEWS）
#### 属性说明
概况

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-项目报告产品数（PRODUCTCNT）
#### 属性说明
项目报告产品数

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
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
| 7 | [根据起始时间获取概况信息](#实体行为-根据起始时间获取概况信息（GetInfoTaskOvByTime）) | GetInfoTaskOvByTime | 实体处理逻辑 | 后台 |
| 8 | [根据测试单获取相应信息](#实体行为-根据测试单获取相应信息（GetInfoTestTask）) | GetInfoTestTask | 实体处理逻辑 | 后台 |
| 9 | [根据测试报告概况信息（项目报告）](#实体行为-根据测试报告概况信息（项目报告）（GetInfoTestTaskOvProject）) | GetInfoTestTaskOvProject | 实体处理逻辑 | 后台 |
| 10 | [根据测试单获取相应信息（项目报告）](#实体行为-根据测试单获取相应信息（项目报告）（GetInfoTestTaskProject）) | GetInfoTestTaskProject | 实体处理逻辑 | 后台 |
| 11 | [根据测试单获取相应信息（项目报告）（单测试）](#实体行为-根据测试单获取相应信息（项目报告）（单测试）（GetInfoTestTaskR）) | GetInfoTestTaskR | 实体处理逻辑 | 后台 |
| 12 | [根据测试单获取相应信息（项目报告）（测试）](#实体行为-根据测试单获取相应信息（项目报告）（测试）（GetInfoTestTaskS）) | GetInfoTestTaskS | 实体处理逻辑 | 后台 |
| 13 | [根据测试报告获取基本信息](#实体行为-根据测试报告获取基本信息（GetTestReportBasicInfo）) | GetTestReportBasicInfo | 实体处理逻辑 | 后台 |
| 14 | [根据测试报告获取基本信息（项目报告）](#实体行为-根据测试报告获取基本信息（项目报告）（GetTestReportProject）) | GetTestReportProject | 实体处理逻辑 | 后台 |
| 15 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |

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
### 实体行为-根据起始时间获取概况信息（GetInfoTaskOvByTime）
#### 说明
根据起始时间获取概况信息

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-根据测试单获取相应信息（GetInfoTestTask）
#### 说明
根据测试单获取相应信息

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-根据测试报告概况信息（项目报告）（GetInfoTestTaskOvProject）
#### 说明
根据测试报告概况信息（项目报告）

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-根据测试单获取相应信息（项目报告）（GetInfoTestTaskProject）
#### 说明
根据测试单获取相应信息（项目报告）

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-根据测试单获取相应信息（项目报告）（单测试）（GetInfoTestTaskR）
#### 说明
根据测试单获取相应信息（项目报告）（单测试）

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-根据测试单获取相应信息（项目报告）（测试）（GetInfoTestTaskS）
#### 说明
根据测试单获取相应信息（项目报告）（测试）

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-根据测试报告获取基本信息（GetTestReportBasicInfo）
#### 说明
根据测试报告获取基本信息

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-根据测试报告获取基本信息（项目报告）（GetTestReportProject）
#### 说明
根据测试报告获取基本信息（项目报告）

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

## 逻辑处理
| 序号 | 逻辑 | 逻辑名 | 逻辑持有者 |
| ---- | ---- | ---- | ---- |
| 1 | [根据测试单获取相应信息](#逻辑处理-根据测试单获取相应信息（GetInfoTestTask）) | GetInfoTestTask | 后台 |
| 2 | [根据报告起始时间更新概况信息](#逻辑处理-根据报告起始时间更新概况信息（GetInfoTestTaskOvByTime）) | GetInfoTestTaskOvByTime | 后台 |
| 3 | [根据测试报告概况信息（项目报告）](#逻辑处理-根据测试报告概况信息（项目报告）（GetInfoTestTaskOvProject）) | GetInfoTestTaskOvProject | 后台 |
| 4 | [根据测试单获取相应信息（项目报告）](#逻辑处理-根据测试单获取相应信息（项目报告）（GetInfoTestTaskProject）) | GetInfoTestTaskProject | 后台 |
| 5 | [根据测试单获取相应信息（项目报告）（单测试）](#逻辑处理-根据测试单获取相应信息（项目报告）（单测试）（GetInfoTestTaskR）) | GetInfoTestTaskR | 后台 |
| 6 | [根据测试单获取相应信息（项目报告）（多测试）](#逻辑处理-根据测试单获取相应信息（项目报告）（多测试）（GetInfoTestTaskS）) | GetInfoTestTaskS | 后台 |
| 7 | [根据测试报告获取基本信息](#逻辑处理-根据测试报告获取基本信息（GetTestReportBasicInfo）) | GetTestReportBasicInfo | 后台 |
| 8 | [根据测试报告获取基本信息（项目报告）](#逻辑处理-根据测试报告获取基本信息（项目报告）（GetTestReportProject）) | GetTestReportProject | 后台 |

### 逻辑处理-根据测试单获取相应信息（GetInfoTestTask）
#### 说明
根据测试单获取相应信息

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 遗留的Bug | Rawsqlcall8 | 直接SQL调用 |
| 2 | 获取数据 | Rawsqlcall1 | 直接SQL调用 |
| 3 | 有效需求数 | Rawsqlcall6 | 直接SQL调用 |
| 4 | 获取需求数 | Rawsqlcall2 | 直接SQL调用 |
| 5 | 获取项目名 | Rawsqlcall16 | 直接SQL调用 |
| 6 | 设置概况 | Rawsqlcall14 | 直接SQL调用 |
| 7 | 产生的bug | Rawsqlcall13 | 直接SQL调用 |
| 8 | 执行结果 | Rawsqlcall10 | 直接SQL调用 |
| 9 | 失败的用例数 | Rawsqlcall5 | 直接SQL调用 |
| 10 | 解决的bug | Rawsqlcall12 | 直接SQL调用 |
| 11 | 开始 | Begin | 开始 |
| 12 | 获取参与人员 | Rawsqlcall15 | 直接SQL调用 |
| 13 | 有效bug数 | Rawsqlcall11 | 直接SQL调用 |
| 14 | 获取用例数 | Rawsqlcall3 | 直接SQL调用 |
| 15 | 用例产生的bug | Rawsqlcall9 | 直接SQL调用 |
| 16 | 需求覆盖用例数 | Rawsqlcall7 | 直接SQL调用 |
| 17 | 执行的用例数 | Rawsqlcall4 | 直接SQL调用 |
### 逻辑处理-根据报告起始时间更新概况信息（GetInfoTestTaskOvByTime）
#### 说明
根据报告起始时间更新概况信息

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 产生的bug | Rawsqlcall12 | 直接SQL调用 |
| 2 | 有效bug数 | Rawsqlcall10 | 直接SQL调用 |
| 3 | 用例产生的bug | Rawsqlcall8 | 直接SQL调用 |
| 4 | 获取失败的用例数 | Rawsqlcall4 | 直接SQL调用 |
| 5 | 遗留的bug | Rawsqlcall7 | 直接SQL调用 |
| 6 | 用例覆盖数 | Rawsqlcall6 | 直接SQL调用 |
| 7 | 执行结果 | Rawsqlcall9 | 直接SQL调用 |
| 8 | 执行用例数 | Rawsqlcall3 | 直接SQL调用 |
| 9 | 有效需求数 | Rawsqlcall5 | 直接SQL调用 |
| 10 | 解决的bug | Rawsqlcall11 | 直接SQL调用 |
| 11 | 获取需求数 | Rawsqlcall1 | 直接SQL调用 |
| 12 | 设置概况 | Rawsqlcall13 | 直接SQL调用 |
| 13 | 获取用例数 | Rawsqlcall2 | 直接SQL调用 |
| 14 | 开始 | Begin | 开始 |
### 逻辑处理-根据测试报告概况信息（项目报告）（GetInfoTestTaskOvProject）
#### 说明
根据测试报告概况信息（项目报告）

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 执行的用例数 | Rawsqlcall3 | 直接SQL调用 |
| 2 | 执行结果 | Rawsqlcall5 | 直接SQL调用 |
| 3 | 失败的用例数 | Rawsqlcall4 | 直接SQL调用 |
| 4 | 有效Bug数 | Rawsqlcall6 | 直接SQL调用 |
| 5 | 遗留Bug | Rawsqlcall10 | 直接SQL调用 |
| 6 | 设置概况 | Rawsqlcall9 | 直接SQL调用 |
| 7 | 获取需求数 | Rawsqlcall1 | 直接SQL调用 |
| 8 | 解决的Bug | Rawsqlcall7 | 直接SQL调用 |
| 9 | 获取用例数 | Rawsqlcall2 | 直接SQL调用 |
| 10 | 用例产生的Bug | Rawsqlcall11 | 直接SQL调用 |
| 11 | 产生的Bug | Rawsqlcall8 | 直接SQL调用 |
| 12 | 测试版本 | Rawsqlcall12 | 直接SQL调用 |
| 13 | 有效需求数 | Rawsqlcall13 | 直接SQL调用 |
| 14 | 开始 | Begin | 开始 |
| 15 | 需求覆盖用例数 | Rawsqlcall14 | 直接SQL调用 |
### 逻辑处理-根据测试单获取相应信息（项目报告）（GetInfoTestTaskProject）
#### 说明
根据测试单获取相应信息（项目报告）

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 获取测试单 | Rawsqlcall2 | 直接SQL调用 |
| 2 | 获取影响Bug | Rawsqlcall5 | 直接SQL调用 |
| 3 | 获取影响需求 | Rawsqlcall4 | 直接SQL调用 |
| 4 | 获取产品 | Rawsqlcall7 | 直接SQL调用 |
| 5 | 开始 | Begin | 开始 |
| 6 | 获取项目周期 | Rawsqlcall3 | 直接SQL调用 |
| 7 | 准备参数 | Prepareparam1 | 准备参数 |
| 8 | 获取数据 | Rawsqlcall1 | 直接SQL调用 |
| 9 | 获取概况信息 | Deaction1 | 实体行为 |
| 10 | 获取产品数 | Rawsqlcall6 | 直接SQL调用 |
### 逻辑处理-根据测试单获取相应信息（项目报告）（单测试）（GetInfoTestTaskR）
#### 说明
根据测试单获取相应信息（项目报告）（单测试）

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 获取项目和产品 | Rawsqlcall6 | 直接SQL调用 |
| 2 | 获取测试单周期 | Rawsqlcall3 | 直接SQL调用 |
| 3 | 获取数据 | Rawsqlcall1 | 直接SQL调用 |
| 4 | 获取相应需求 | Rawsqlcall4 | 直接SQL调用 |
| 5 | 获取测试单 | Rawsqlcall2 | 直接SQL调用 |
| 6 | 获取影响Bug | Rawsqlcall5 | 直接SQL调用 |
| 7 | 准备参数 | Prepareparam1 | 准备参数 |
| 8 | 开始 | Begin | 开始 |
| 9 | 获取概况信息 | Deaction1 | 实体行为 |
### 逻辑处理-根据测试单获取相应信息（项目报告）（多测试）（GetInfoTestTaskS）
#### 说明
根据测试单获取相应信息（项目报告）（多测试）

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 准备参数 | Prepareparam1 | 准备参数 |
| 3 | 获取产品数 | Rawsqlcall6 | 直接SQL调用 |
| 4 | 获取测试单 | Rawsqlcall2 | 直接SQL调用 |
| 5 | 获取影响Bug | Rawsqlcall5 | 直接SQL调用 |
| 6 | 获取项目周期 | Rawsqlcall3 | 直接SQL调用 |
| 7 | 获取产品 | Rawsqlcall7 | 直接SQL调用 |
| 8 | 获取数据 | Rawsqlcall1 | 直接SQL调用 |
| 9 | 获取概况信息 | Deaction1 | 实体行为 |
| 10 | 获取相应需求 | Rawsqlcall4 | 直接SQL调用 |
### 逻辑处理-根据测试报告获取基本信息（GetTestReportBasicInfo）
#### 说明
根据测试报告获取基本信息

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 遗留Bug | Rawsqlcall10 | 直接SQL调用 |
| 2 | 获取需求数 | Rawsqlcall1 | 直接SQL调用 |
| 3 | 失败的用例数 | Rawsqlcall4 | 直接SQL调用 |
| 4 | 解决的Bug | Rawsqlcall7 | 直接SQL调用 |
| 5 | 执行结果 | Rawsqlcall5 | 直接SQL调用 |
| 6 | 需求覆盖用例数 | Rawsqlcall13 | 直接SQL调用 |
| 7 | 开始 | Begin | 开始 |
| 8 | 有效需求数 | Rawsqlcall12 | 直接SQL调用 |
| 9 | 获取用例数 | Rawsqlcall2 | 直接SQL调用 |
| 10 | 产生的Bug | Rawsqlcall8 | 直接SQL调用 |
| 11 | 获取数据 | Deaction1 | 实体行为 |
| 12 | 执行的用例数 | Rawsqlcall3 | 直接SQL调用 |
| 13 | 设置概况 | Rawsqlcall9 | 直接SQL调用 |
| 14 | 用例产生的Bug | Rawsqlcall11 | 直接SQL调用 |
| 15 | 有效Bug数 | Rawsqlcall6 | 直接SQL调用 |
### 逻辑处理-根据测试报告获取基本信息（项目报告）（GetTestReportProject）
#### 说明
根据测试报告获取基本信息（项目报告）

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 产生的Bug | Rawsqlcall8 | 直接SQL调用 |
| 2 | 遗留Bug | Rawsqlcall10 | 直接SQL调用 |
| 3 | 测试版本 | Rawsqlcall12 | 直接SQL调用 |
| 4 | 有效需求数 | Rawsqlcall13 | 直接SQL调用 |
| 5 | 设置概况 | Rawsqlcall9 | 直接SQL调用 |
| 6 | 用例产生的Bug | Rawsqlcall11 | 直接SQL调用 |
| 7 | 获取需求数 | Rawsqlcall1 | 直接SQL调用 |
| 8 | 开始 | Begin | 开始 |
| 9 | 需求覆盖用例数 | Rawsqlcall14 | 直接SQL调用 |
| 10 | 执行结果 | Rawsqlcall5 | 直接SQL调用 |
| 11 | 执行的用例数 | Rawsqlcall3 | 直接SQL调用 |
| 12 | 获取用例数 | Rawsqlcall2 | 直接SQL调用 |
| 13 | 解决的Bug | Rawsqlcall7 | 直接SQL调用 |
| 14 | 获取数据 | Deaction1 | 实体行为 |
| 15 | 有效Bug数 | Rawsqlcall6 | 直接SQL调用 |
| 16 | 失败的用例数 | Rawsqlcall4 | 直接SQL调用 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [标题（TITLE）](#属性-标题（TITLE）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [标题（TITLE）](#属性-标题（TITLE）) | `%like%` |
| 2 | [对象类型（OBJECTTYPE）](#属性-对象类型（OBJECTTYPE）) | `=` |
| 3 | [所属产品（PRODUCT）](#属性-所属产品（PRODUCT）) | `=` |
| 4 | [所属项目（PROJECT）](#属性-所属项目（PROJECT）) | `=` |
| 5 | [所属产品（PRODUCTNAME）](#属性-所属产品（PRODUCTNAME）) | `=` |
| 6 | [所属产品（PRODUCTNAME）](#属性-所属产品（PRODUCTNAME）) | `%like%` |
| 7 | [所属项目（PROJECTNAME）](#属性-所属项目（PROJECTNAME）) | `=` |
| 8 | [所属项目（PROJECTNAME）](#属性-所属项目（PROJECTNAME）) | `%like%` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 2 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
t1.`BEGIN`,
t1.`BUILDS`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DELETED`,
t1.`END`,
t1.`ID`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`OWNER`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`TASKS`,
t1.`TITLE`
FROM `zt_testreport` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 

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
t1.`BEGIN`,
t1.`BUGS`,
t1.`BUILDS`,
t1.`CASES`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DELETED`,
t1.`END`,
t1.`ID`,
t1.`MEMBERS`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`OWNER`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPORT`,
t1.`STORIES`,
t1.`TASKS`,
t1.`TITLE`
FROM `zt_testreport` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |

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
| 1 | ID | [编号（ID）](#属性-编号（ID）) |  |
| 2 | 标题 | [标题（TITLE）](#属性-标题（TITLE）) |  |
| 3 | 创建 | [由谁创建（CREATEDBY）](#属性-由谁创建（CREATEDBY）) |  |
| 4 | 创建时间 | [创建时间（CREATEDDATE）](#属性-创建时间（CREATEDDATE）) |  |
| 5 | 所属项目 | [所属项目（PROJECTNAME）](#属性-所属项目（PROJECTNAME）) |  |
| 6 | 测试版本 | [测试单（TASKS）](#属性-测试单（TASKS）) |  |

