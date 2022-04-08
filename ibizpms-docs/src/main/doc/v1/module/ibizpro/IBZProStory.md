
# 实体-需求(IBZPRO_STORY)
## 实体说明
需求

## 所属模块
[iBizPro模块](../ibizpro)

## 实体关系
### 1:N
无
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) | （默认） |
| 2 | [需求模块（IBZPRO_STORYMODULE）](../ibizpro/IBZProStoryModule) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [编号](#属性-编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 2 | [需求名称](#属性-需求名称（TITLE）) | TITLE | 文本，可指定长度 | 否 | 否 | 否 |
| 3 | [id](#属性-id（MODULE）) | MODULE | 外键值 | 否 | 是 | 是 |
| 4 | [编号](#属性-编号（PRODUCT）) | PRODUCT | 外键值 | 否 | 是 | 是 |
| 5 | [IBIZ标识](#属性-IBIZ标识（IBIZ_ID）) | IBIZ_ID | 文本，可指定长度 | 否 | 是 | 是 |
| 6 | [需求来源](#属性-需求来源（SOURCE）) | SOURCE | 单项选择(文本值) | 否 | 是 | 是 |
| 7 | [来源备注](#属性-来源备注（SOURCENOTE）) | SOURCENOTE | 文本，可指定长度 | 否 | 是 | 是 |
| 8 | [来源对象](#属性-来源对象（IBIZ_SOURCEOBJECT）) | IBIZ_SOURCEOBJECT | 单项选择(文本值) | 否 | 是 | 是 |
| 9 | [来源对象名称](#属性-来源对象名称（IBIZ_SOURCENAME）) | IBIZ_SOURCENAME | 文本，可指定长度 | 否 | 是 | 是 |
| 10 | [来源对象标识](#属性-来源对象标识（IBIZ_SOURCEID）) | IBIZ_SOURCEID | 文本，可指定长度 | 否 | 是 | 是 |
| 11 | [版本号](#属性-版本号（VERSION）) | VERSION | 整型 | 否 | 是 | 是 |
| 12 | [预计工时](#属性-预计工时（ESTIMATE）) | ESTIMATE | 浮点 | 否 | 是 | 是 |
| 13 | [关键词](#属性-关键词（KEYWORDS）) | KEYWORDS | 文本，可指定长度 | 否 | 是 | 是 |
| 14 | [创建日期](#属性-创建日期（OPENEDDATE）) | OPENEDDATE | 日期时间型 | 否 | 是 | 是 |
| 15 | [最后修改日期](#属性-最后修改日期（LASTEDITEDDATE）) | LASTEDITEDDATE | 日期时间型 | 否 | 是 | 是 |
| 16 | [已删除](#属性-已删除（DELETED）) | DELETED | 文本，可指定长度 | 否 | 是 | 是 |
| 17 | [由谁创建](#属性-由谁创建（OPENEDBY）) | OPENEDBY | 文本，可指定长度 | 否 | 是 | 是 |
| 18 | [状态](#属性-状态（STATUS）) | STATUS | 单项选择(文本值) | 否 | 是 | 是 |
| 19 | [需求类型](#属性-需求类型（TYPE）) | TYPE | 单项选择(文本值) | 否 | 是 | 是 |
| 20 | [需求阶段](#属性-需求阶段（STAGE）) | STAGE | 单项选择(文本值) | 否 | 是 | 是 |
| 21 | [优先级](#属性-优先级（PRI）) | PRI | 整型 | 否 | 是 | 是 |
| 22 | [颜色](#属性-颜色（COLOR）) | COLOR | 单项选择(文本值) | 否 | 是 | 是 |
| 23 | [项目](#属性-项目（PROJECT）) | PROJECT | 文本，可指定长度 | 否 | 是 | 是 |
| 24 | [设置阶段者](#属性-设置阶段者（STAGEDBY）) | STAGEDBY | 单项选择(文本值) | 否 | 是 | 是 |
| 25 | [指派给](#属性-指派给（ASSIGNEDTO）) | ASSIGNEDTO | 文本，可指定长度 | 否 | 是 | 是 |
| 26 | [指派日期](#属性-指派日期（ASSIGNEDDATE）) | ASSIGNEDDATE | 日期时间型 | 否 | 是 | 是 |
| 27 | [由谁评审](#属性-由谁评审（REVIEWEDBY）) | REVIEWEDBY | 多项选择(文本值) | 否 | 是 | 是 |
| 28 | [评审时间](#属性-评审时间（REVIEWEDDATE）) | REVIEWEDDATE | 日期型 | 否 | 是 | 是 |
| 29 | [平台](#属性-平台（BRANCH）) | BRANCH | 整型 | 否 | 是 | 是 |
| 30 | [抄送给](#属性-抄送给（MAILTO）) | MAILTO | 文本，可指定长度 | 否 | 是 | 是 |
| 31 | [最后修改者](#属性-最后修改者（LASTEDITEDBY）) | LASTEDITEDBY | 文本，可指定长度 | 否 | 是 | 是 |
| 32 | [需求细分](#属性-需求细分（CHILDSTORIES）) | CHILDSTORIES | 文本，可指定长度 | 否 | 是 | 是 |
| 33 | [相关需求](#属性-相关需求（LINKSTORIES）) | LINKSTORIES | 文本，可指定长度 | 否 | 是 | 是 |
| 34 | [由谁关闭](#属性-由谁关闭（CLOSEDBY）) | CLOSEDBY | 文本，可指定长度 | 否 | 是 | 是 |
| 35 | [子状态](#属性-子状态（SUBSTATUS）) | SUBSTATUS | 文本，可指定长度 | 否 | 是 | 是 |
| 36 | [关闭日期	](#属性-关闭日期	（CLOSEDDATE）) | CLOSEDDATE | 日期时间型 | 否 | 是 | 是 |
| 37 | [关闭原因](#属性-关闭原因（CLOSEDREASON）) | CLOSEDREASON | 文本，可指定长度 | 否 | 是 | 是 |
| 38 | [转Bug](#属性-转Bug（TOBUG）) | TOBUG | 整型 | 否 | 是 | 是 |
| 39 | [重复需求](#属性-重复需求（DUPLICATESTORY）) | DUPLICATESTORY | 整型 | 否 | 是 | 是 |
| 40 | [来源Bug](#属性-来源Bug（FROMBUG）) | FROMBUG | 整型 | 否 | 是 | 是 |
| 41 | [需求描述](#属性-需求描述（SPEC）) | SPEC | 文本，可指定长度 | 否 | 是 | 是 |
| 42 | [验收标准](#属性-验收标准（VERIFY）) | VERIFY | 文本，可指定长度 | 否 | 是 | 是 |
| 43 | [备注](#属性-备注（COMMENT）) | COMMENT | HTML文本，没有长度限制 | 否 | 是 | 是 |

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-需求名称（TITLE）
#### 属性说明
需求名称

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-id（MODULE）
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
| 关系实体 | [需求模块（IBZPRO_STORYMODULE）](../ibizpro/IBZProStoryModule) |
| 关系属性 | [id（ID）](../ibizpro/IBZProStoryModule/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-编号（PRODUCT）
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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-IBIZ标识（IBIZ_ID）
#### 属性说明
IBIZ标识

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-需求来源（SOURCE）
#### 属性说明
需求来源

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
| 值 | iBiz |

- 取值范围/公式
参照数据字典【[需求来源（Story__source）](../../codelist/Story__source)】

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-来源备注（SOURCENOTE）
#### 属性说明
来源备注

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-来源对象（IBIZ_SOURCEOBJECT）
#### 属性说明
来源对象

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
参照数据字典【[来源对象（Ibizpro_story__sourceobject）](../../codelist/Ibizpro_story__sourceobject)】

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-来源对象名称（IBIZ_SOURCENAME）
#### 属性说明
来源对象名称

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-来源对象标识（IBIZ_SOURCEID）
#### 属性说明
来源对象标识

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-版本号（VERSION）
#### 属性说明
每次更新内容，会自动加1（只有真正更新数据才会更新，例如打开编辑/变更需求，没有进行任何修改点击保存，是不会更新该笔数据）

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-预计工时（ESTIMATE）
#### 属性说明
预计工时

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
浮点

- Java类型
Double

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-关键词（KEYWORDS）
#### 属性说明
关键词

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-创建日期（OPENEDDATE）
#### 属性说明
创建日期

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-最后修改日期（LASTEDITEDDATE）
#### 属性说明
最后修改日期

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-由谁创建（OPENEDBY）
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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-状态（STATUS）
#### 属性说明
状态

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
参照数据字典【[需求状态（Story__status）](../../codelist/Story__status)】

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-需求类型（TYPE）
#### 属性说明
需求类型

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
参照数据字典【[需求类型（Story__type）](../../codelist/Story__type)】

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-需求阶段（STAGE）
#### 属性说明
需求阶段

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
参照数据字典【[需求阶段（Story__stage）](../../codelist/Story__stage)】

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-优先级（PRI）
#### 属性说明
优先级

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
参照数据字典【[需求优先级（Story__pri）](../../codelist/Story__pri)】

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-颜色（COLOR）
#### 属性说明
颜色

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
参照数据字典【[需求颜色（Story__color）](../../codelist/Story__color)】

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-项目（PROJECT）
#### 属性说明
项目

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-设置阶段者（STAGEDBY）
#### 属性说明
设置阶段者

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-指派给（ASSIGNEDTO）
#### 属性说明
指派给

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-指派日期（ASSIGNEDDATE）
#### 属性说明
指派日期

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-由谁评审（REVIEWEDBY）
#### 属性说明
由谁评审

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
多项选择(文本值)

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-评审时间（REVIEWEDDATE）
#### 属性说明
评审时间

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
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-平台（BRANCH）
#### 属性说明
平台

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-抄送给（MAILTO）
#### 属性说明
抄送给

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-最后修改者（LASTEDITEDBY）
#### 属性说明
最后修改者

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-需求细分（CHILDSTORIES）
#### 属性说明
需求细分

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-相关需求（LINKSTORIES）
#### 属性说明
相关需求

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-由谁关闭（CLOSEDBY）
#### 属性说明
由谁关闭

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-子状态（SUBSTATUS）
#### 属性说明
子状态

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-关闭日期	（CLOSEDDATE）
#### 属性说明
关闭日期	

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-关闭原因（CLOSEDREASON）
#### 属性说明
关闭原因

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-转Bug（TOBUG）
#### 属性说明
转Bug

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-重复需求（DUPLICATESTORY）
#### 属性说明
重复需求

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-来源Bug（FROMBUG）
#### 属性说明
来源Bug

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-需求描述（SPEC）
#### 属性说明
需求描述

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-验收标准（VERIFY）
#### 属性说明
验收标准

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
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
| 8 | [同步Ibz平台需求](#实体行为-同步Ibz平台需求（SyncFromIBIZ）) | SyncFromIBIZ | 用户自定义 | 后台及前台 |

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
### 实体行为-同步Ibz平台需求（SyncFromIBIZ）
#### 说明
同步Ibz平台需求

- 行为类型
用户自定义

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
| 1 | [需求名称（TITLE）](#属性-需求名称（TITLE）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [需求名称（TITLE）](#属性-需求名称（TITLE）) | `%like%` |
| 2 | [id（MODULE）](#属性-id（MODULE）) | `=` |
| 3 | [编号（PRODUCT）](#属性-编号（PRODUCT）) | `=` |
| 4 | [IBIZ标识（IBIZ_ID）](#属性-IBIZ标识（IBIZ_ID）) | `=` |
| 5 | [需求来源（SOURCE）](#属性-需求来源（SOURCE）) | `=` |
| 6 | [来源备注（SOURCENOTE）](#属性-来源备注（SOURCENOTE）) | `=` |
| 7 | [来源对象（IBIZ_SOURCEOBJECT）](#属性-来源对象（IBIZ_SOURCEOBJECT）) | `=` |
| 8 | [状态（STATUS）](#属性-状态（STATUS）) | `=` |
| 9 | [需求类型（TYPE）](#属性-需求类型（TYPE）) | `=` |
| 10 | [需求阶段（STAGE）](#属性-需求阶段（STAGE）) | `=` |
| 11 | [优先级（PRI）](#属性-优先级（PRI）) | `=` |
| 12 | [颜色（COLOR）](#属性-颜色（COLOR）) | `=` |
| 13 | [设置阶段者（STAGEDBY）](#属性-设置阶段者（STAGEDBY）) | `=` |

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
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`IBIZ_ID`,
t1.`IBIZ_SOURCEID`,
t1.`IBIZ_SOURCENAME`,
t1.`IBIZ_SOURCEOBJECT`,
t1.`ID`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PRI`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_story` t1 

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
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`IBIZ_ID`,
t1.`IBIZ_SOURCEID`,
t1.`IBIZ_SOURCENAME`,
t1.`IBIZ_SOURCEOBJECT`,
t1.`ID`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PRI`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_story` t1 

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

