
# 实体-Bug统计(IBZ_BUGSTATS)
## 实体说明
Bug统计

## 所属模块
[iBiz增强模块](../ibiz)

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
| 1 | [标识](#属性-标识（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 是 |
| 2 | [名称](#属性-名称（TITLE）) | TITLE | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [由谁创建](#属性-由谁创建（OPENEDBY）) | OPENEDBY | 单项选择(文本值) | 否 | 否 | 是 |
| 4 | [未解决](#属性-未解决（BUGWJJ）) | BUGWJJ | 整型 | 否 | 否 | 是 |
| 5 | [设计如此](#属性-设计如此（BUGBYDESIGN）) | BUGBYDESIGN | 整型 | 否 | 否 | 是 |
| 6 | [重复Bug](#属性-重复Bug（BUGDUPLICATE）) | BUGDUPLICATE | 整型 | 否 | 否 | 是 |
| 7 | [外部原因](#属性-外部原因（BUGEXTERNAL）) | BUGEXTERNAL | 整型 | 否 | 否 | 是 |
| 8 | [已解决](#属性-已解决（BUGFIXED）) | BUGFIXED | 整型 | 否 | 否 | 是 |
| 9 | [无法重现](#属性-无法重现（BUGNOTREPRO）) | BUGNOTREPRO | 整型 | 否 | 否 | 是 |
| 10 | [延期处理](#属性-延期处理（BUGPOSTPONED）) | BUGPOSTPONED | 整型 | 否 | 否 | 是 |
| 11 | [不予解决](#属性-不予解决（BUGWILLNOTFIX）) | BUGWILLNOTFIX | 整型 | 否 | 否 | 是 |
| 12 | [转为需求](#属性-转为需求（BUGTOSTORY）) | BUGTOSTORY | 整型 | 否 | 否 | 是 |
| 13 | [有效率](#属性-有效率（BUGEFFICIENT）) | BUGEFFICIENT | 文本，可指定长度 | 否 | 否 | 是 |
| 14 | [总计](#属性-总计（BUGTOTAL）) | BUGTOTAL | 整型 | 否 | 否 | 是 |
| 15 | [编号](#属性-编号（PRODUCT）) | PRODUCT | 外键值 | 否 | 是 | 是 |
| 16 | [产品名称](#属性-产品名称（PRODUCTNAME）) | PRODUCTNAME | 外键值文本 | 否 | 是 | 是 |
| 17 | [Bug](#属性-Bug（BUGCNT）) | BUGCNT | 整型 | 否 | 是 | 是 |
| 18 | [指派给](#属性-指派给（ASSIGNEDTO）) | ASSIGNEDTO | 单项选择(文本值) | 否 | 是 | 是 |
| 19 | [由谁解决](#属性-由谁解决（RESOLVEDBY）) | RESOLVEDBY | 单项选择(文本值) | 否 | 是 | 是 |
| 20 | [项目编号](#属性-项目编号（PROJECT）) | PROJECT | 外键值 | 否 | 是 | 是 |
| 21 | [项目名称](#属性-项目名称（PROJECTNAME）) | PROJECTNAME | 文本，可指定长度 | 否 | 是 | 是 |
| 22 | [激活Bug](#属性-激活Bug（BUGACTIVE）) | BUGACTIVE | 整型 | 否 | 是 | 是 |
| 23 | [已解决Bug](#属性-已解决Bug（BUGRESOLVED）) | BUGRESOLVED | 整型 | 否 | 是 | 是 |
| 24 | [已关闭Bug](#属性-已关闭Bug（BUGCLOSED）) | BUGCLOSED | 整型 | 否 | 是 | 是 |
| 25 | [项目名称](#属性-项目名称（PROJECTNAME1）) | PROJECTNAME1 | 文本，可指定长度 | 否 | 是 | 是 |
| 26 | [Bug解决方案](#属性-Bug解决方案（BUGRESOLUTION）) | BUGRESOLUTION | 文本，可指定长度 | 否 | 是 | 是 |
| 27 | [Bug状态](#属性-Bug状态（BUGSTATUS）) | BUGSTATUS | 文本，可指定长度 | 否 | 是 | 是 |
| 28 | [Bug编号](#属性-Bug编号（BUGID）) | BUGID | 整型 | 否 | 是 | 是 |
| 29 | [Bug标题](#属性-Bug标题（BUGTITLE）) | BUGTITLE | 文本，可指定长度 | 否 | 是 | 是 |
| 30 | [Bug优先级](#属性-Bug优先级（BUGPRI）) | BUGPRI | 整型 | 否 | 是 | 是 |
| 31 | [Bug严重程度](#属性-Bug严重程度（BUGSEVERITY）) | BUGSEVERITY | 整型 | 否 | 是 | 是 |
| 32 | [bug创建人](#属性-bug创建人（BUGOPENEDBY）) | BUGOPENEDBY | 文本，可指定长度 | 否 | 是 | 是 |
| 33 | [Bug创建日期](#属性-Bug创建日期（BUGOPENEDDATE）) | BUGOPENEDDATE | 日期型 | 否 | 是 | 是 |
| 34 | [bug解决日期](#属性-bug解决日期（BUGRESOLVEDDATE）) | BUGRESOLVEDDATE | 日期型 | 否 | 是 | 是 |
| 35 | [部门](#属性-部门（DEPT）) | DEPT | 单项选择(文本值) | 否 | 是 | 是 |
| 36 | [开始](#属性-开始（BEGIN）) | BEGIN | 日期型 | 否 | 是 | 是 |
| 37 | [结束](#属性-结束（END）) | END | 日期型 | 否 | 是 | 是 |

### 属性-标识（ID）
#### 属性说明
标识

- 是否是主键
是

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
自增标识，整数类型，用户不可见

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
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-名称（TITLE）
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
| 1 | `%like%` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-由谁创建（OPENEDBY）
#### 属性说明
由谁创建

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
参照数据字典【[用户真实名称（动态-表格）（UserRealName_Gird）](../../codelist/UserRealName_Gird)】

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

### 属性-未解决（BUGWJJ）
#### 属性说明
未解决

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
0
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

### 属性-设计如此（BUGBYDESIGN）
#### 属性说明
设计如此

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
0
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

### 属性-重复Bug（BUGDUPLICATE）
#### 属性说明
重复Bug

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
0
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

### 属性-外部原因（BUGEXTERNAL）
#### 属性说明
外部原因

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
0
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

### 属性-已解决（BUGFIXED）
#### 属性说明
已解决

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
0
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

### 属性-无法重现（BUGNOTREPRO）
#### 属性说明
无法重现

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
0
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

### 属性-延期处理（BUGPOSTPONED）
#### 属性说明
延期处理

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
0
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

### 属性-不予解决（BUGWILLNOTFIX）
#### 属性说明
不予解决

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
0
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `<=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-转为需求（BUGTOSTORY）
#### 属性说明
转为需求

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
0
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

### 属性-有效率（BUGEFFICIENT）
#### 属性说明
有效率

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
0%
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

### 属性-总计（BUGTOTAL）
#### 属性说明
总计

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
0
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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
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
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [产品名称（NAME）](../zentao/Product/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-Bug（BUGCNT）
#### 属性说明
Bug

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
0
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

### 属性-指派给（ASSIGNEDTO）
#### 属性说明
指派给

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
参照数据字典【[用户真实名称（动态-表格）（UserRealName_Gird）](../../codelist/UserRealName_Gird)】

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

### 属性-由谁解决（RESOLVEDBY）
#### 属性说明
由谁解决

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
参照数据字典【[用户真实名称（动态-表格）（UserRealName_Gird）](../../codelist/UserRealName_Gird)】

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

### 属性-项目编号（PROJECT）
#### 属性说明
项目编号

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-项目名称（PROJECTNAME）
#### 属性说明
项目名称

- 是否是主键
否

- 属性类型
链接字段[来自关系实体字段]

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-激活Bug（BUGACTIVE）
#### 属性说明
激活Bug

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
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-已解决Bug（BUGRESOLVED）
#### 属性说明
已解决Bug

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
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-已关闭Bug（BUGCLOSED）
#### 属性说明
已关闭Bug

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
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-项目名称（PROJECTNAME1）
#### 属性说明
项目名称

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-Bug解决方案（BUGRESOLUTION）
#### 属性说明
Bug解决方案

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
参照数据字典【[Bug解决方案（Bug__resolution）](../../codelist/Bug__resolution)】

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

### 属性-Bug状态（BUGSTATUS）
#### 属性说明
Bug状态

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
参照数据字典【[Bug状态（Bug__status）](../../codelist/Bug__status)】

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

### 属性-Bug编号（BUGID）
#### 属性说明
Bug编号

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
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-Bug标题（BUGTITLE）
#### 属性说明
Bug标题

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-Bug优先级（BUGPRI）
#### 属性说明
Bug优先级

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
参照数据字典【[Bug优先级（Bug__pri）](../../codelist/Bug__pri)】

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

### 属性-Bug严重程度（BUGSEVERITY）
#### 属性说明
Bug严重程度

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
参照数据字典【[Bug严重程度（Bug__severity）](../../codelist/Bug__severity)】

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

### 属性-bug创建人（BUGOPENEDBY）
#### 属性说明
bug创建人

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-Bug创建日期（BUGOPENEDDATE）
#### 属性说明
Bug创建日期

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-bug解决日期（BUGRESOLVEDDATE）
#### 属性说明
bug解决日期

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
| 1 | `>=` |
| 2 | `<=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-部门（DEPT）
#### 属性说明
部门

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
参照数据字典【[真实部门（RealDept）](../../codelist/RealDept)】

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

### 属性-开始（BEGIN）
#### 属性说明
开始

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
| 1 | `>=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-结束（END）
#### 属性说明
结束

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
| 1 | [名称（TITLE）](#属性-名称（TITLE）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [名称（TITLE）](#属性-名称（TITLE）) | `%like%` |
| 2 | [由谁创建（OPENEDBY）](#属性-由谁创建（OPENEDBY）) | `=` |
| 3 | [不予解决（BUGWILLNOTFIX）](#属性-不予解决（BUGWILLNOTFIX）) | `<=` |
| 4 | [编号（PRODUCT）](#属性-编号（PRODUCT）) | `=` |
| 5 | [指派给（ASSIGNEDTO）](#属性-指派给（ASSIGNEDTO）) | `=` |
| 6 | [由谁解决（RESOLVEDBY）](#属性-由谁解决（RESOLVEDBY）) | `=` |
| 7 | [项目编号（PROJECT）](#属性-项目编号（PROJECT）) | `=` |
| 8 | [bug解决日期（BUGRESOLVEDDATE）](#属性-bug解决日期（BUGRESOLVEDDATE）) | `>=` |
| 9 | [bug解决日期（BUGRESOLVEDDATE）](#属性-bug解决日期（BUGRESOLVEDDATE）) | `<=` |
| 10 | [部门（DEPT）](#属性-部门（DEPT）) | `=` |
| 11 | [开始（BEGIN）](#属性-开始（BEGIN）) | `>=` |
| 12 | [结束（END）](#属性-结束（END）) | `<=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [Bug在每个解决方案的Bug数](#数据查询-Bug在每个解决方案的Bug数（BugCountInResolution）) | BugCountInResolution | 否 |
| 2 | [Bug完成表](#数据查询-Bug完成表（BugResolvedBy）) | BugResolvedBy | 否 |
| 3 | [bug解决汇总表](#数据查询-bug解决汇总表（BugResolvedGird）) | BugResolvedGird | 否 |
| 4 | [Bug指派表](#数据查询-Bug指派表（BugassignedTo）) | BugassignedTo | 否 |
| 5 | [Bug创建表](#数据查询-Bug创建表（Default）) | Default | 否 |
| 6 | [产品Bug解决方案汇总](#数据查询-产品Bug解决方案汇总（ProductBugResolutionStats）) | ProductBugResolutionStats | 否 |
| 7 | [产品Bug状态汇总](#数据查询-产品Bug状态汇总（ProductBugStatusSum）) | ProductBugStatusSum | 否 |
| 8 | [产品创建bug占比](#数据查询-产品创建bug占比（ProductCreateBug）) | ProductCreateBug | 否 |
| 9 | [项目bug状态统计](#数据查询-项目bug状态统计（ProjectBugStatusCount）) | ProjectBugStatusCount | 否 |
| 10 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-Bug在每个解决方案的Bug数（BugCountInResolution）
#### 说明
Bug在每个解决方案的Bug数

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.project,
t1.projectname,
sum(if(t1.resolution='tostory',t1.ss,0)) as bugtostory,
sum(if(t1.resolution='bydesign',t1.ss,0)) as bugbydesign,
sum(if(t1.resolution='duplicate',t1.ss,0)) as bugduplicate,
sum(if(t1.resolution='fixed',t1.ss,0)) as bugfixed,
sum(if(t1.resolution='external',t1.ss,0)) as bugexternal,
sum(if(t1.resolution='willnotfix',t1.ss,0)) as bugwillnotfix,
sum(if(t1.resolution='notrepro',t1.ss,0)) as bugnotrepro,
sum(if(t1.resolution='postponed',t1.ss,0)) as bugpostponed,
count(1) as bugcnt
from
(
SELECT
t1.resolution,
t1.project,
t11.name as projectname,
1 as ss
from
zt_bug t1
left join zt_project t11 on t1.project = t11.id
where t1.deleted='0' and t1.project <>0 and t1.resolution <> ''
)t1
GROUP BY
t1.project,
t1.projectname

```
### 数据查询-Bug完成表（BugResolvedBy）
#### 说明
Bug完成表

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.resolvedBy,
	t1.product,
	t1.productname,
	t1.bugcnt,
	t11.bugcnt AS bugtotal 
FROM
	(
	SELECT
		t1.resolvedBy,
		t1.product,
		t11.`name` AS productname,
		COUNT( t1.id ) AS bugcnt 
	FROM
		`zt_bug` t1
		LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
	WHERE
		t1.deleted = '0' 
		AND t1.resolvedBy <> '' 
		AND t1.product <> 0 
		AND t11.deleted = '0' 
	GROUP BY
		t1.resolvedBy,
		t1.product,
		t11.`name` 
	) t1
	INNER JOIN (
	SELECT
		t1.resolvedBy,
		COUNT( t1.id ) AS bugcnt 
	FROM
		`zt_bug` t1
		LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
	WHERE
		t1.deleted = '0' 
		AND t1.resolvedBy <> '' 
		AND t1.product <> 0 
		AND t11.deleted = '0' 
	GROUP BY
		t1.resolvedBy 
	) t11 ON t1.resolvedBy = t11.resolvedBy 
ORDER BY
	t1.resolvedBy ASC
```
### 数据查询-bug解决汇总表（BugResolvedGird）
#### 说明
bug解决汇总表

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.resolvedBy,t1.resolution as bugresolution,t1.id as bugid,t1.title as bugtitle,t1.pri as bugpri,t1.severity as bugseverity,t1.openedBy as bugopenedby,t1.openedDate as bugopeneddate,t1.resolvedDate as bugresolvedDate,t1.`status` as bugstatus ,t2.dept,DATE_FORMAT(t1.resolvedDate,'%Y-%m-%d') as `begin`,DATE_FORMAT(t1.resolvedDate,'%Y-%m-%d') as `end`

from zt_bug t1 LEFT JOIN zt_user t2 on t1.resolvedBy = t2.account where t1.deleted = '0' and t1.resolution = 'fixed' and t1.`status` in ('closed','resolved') 
and ( t2.dept = #{srf.datacontext.dept} or #{srf.datacontext.dept} is null )
and (DATE_FORMAT(t1.resolvedDate,'%Y-%m-%d') >= #{srf.datacontext.begin} or #{srf.datacontext.begin} is null)
and (DATE_FORMAT(t1.resolvedDate,'%Y-%m-%d') <= #{srf.datacontext.end} or #{srf.datacontext.end} is null)

ORDER BY t1.resolvedBy
```
### 数据查询-Bug指派表（BugassignedTo）
#### 说明
Bug指派表

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.assignedTo , t1.product,t1.productname,t1.bugcnt,t11.bugcnt as bugtotal
FROM
	(
SELECT
	t1.assignedTo,
	t1.product,
	t11.`name` as productname,
	COUNT( t1.id ) AS bugcnt 
FROM
	`zt_bug` t1
	LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
WHERE
	t1.deleted = '0' 
	AND t1.assignedTo <> '' 
	AND t1.assignedTo IS NOT NULL 
	AND t1.product <> 0 
	AND t1.assignedTo <> 'closed' 
	AND t1.`status` = 'active'
	and t11.deleted = '0'
GROUP BY
	t1.assignedTo,
	t1.product,
	t11.`name` 
	) t1 inner join (SELECT
	t1.assignedTo,
	COUNT( t1.id ) AS bugcnt 
FROM
	`zt_bug` t1
	LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
WHERE
	t1.deleted = '0' 
	AND t1.assignedTo <> '' 
	AND t1.assignedTo IS NOT NULL 
	AND t1.product <> 0 
	AND t1.assignedTo <> 'closed' 
	AND t1.`status` = 'active'
	and t11.deleted = '0'
GROUP BY
	t1.assignedTo) t11 on t1.assignedTo = t11.assignedTo
ORDER BY
	t1.assignedTo asc
	
	
```
### 数据查询-Bug创建表（Default）
#### 说明
Bug创建表

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.openedBy,
	sum( IF ( t1.resolution = '', t1.v1, 0 ) ) AS Bugwjj,
	sum( IF ( t1.resolution = 'bydesign', t1.v1, 0 ) ) AS Bugbydesign,
	SUM( IF ( t1.resolution = 'duplicate', t1.v1, 0 ) ) AS Bugduplicate,
	SUM( IF ( t1.resolution = 'fixed', t1.v1, 0 ) ) AS Bugfixed,
	SUM( IF ( t1.resolution = 'external', t1.v1, 0 ) ) AS Bugexternal,
	sum( IF ( t1.resolution = 'notrepro', t1.v1, 0 ) ) AS Bugnotrepro,
	SUM( IF ( t1.resolution = 'postponed', t1.v1, 0 ) ) AS Bugpostponed,
	SUM( IF ( t1.resolution = 'willnotfix', t1.v1, 0 ) ) AS Bugwillnotfix,
	CONCAT( ROUND( case when (SUM( IF ( t1.resolution = 'fixed', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'postponed', t1.v1, 0 ) )) = 0 then 0 else (SUM( IF ( t1.resolution = 'fixed', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'postponed', t1.v1, 0 ) ))/ (sum( IF ( t1.resolution = 'bydesign', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'duplicate', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'fixed', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'external', t1.v1, 0 ) ) + sum( IF ( t1.resolution = 'notrepro', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'postponed', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'willnotfix', t1.v1, 0 ) )) * 100 end,2), '%') as BugEfficient,
	SUM( IF ( t1.resolution = 'tostory', t1.v1, 0 ) ) AS Bugtostory,
	SUM( t1.v1 ) AS BUGTOTAL 
FROM
	(
SELECT
	t1.`OPENEDBY`,
	t1.`OPENEDDATE`,
	t1.`PRODUCT`,
	t1.`PROJECT`,
	t1.`RESOLUTION`,
	1 AS `V1` 
FROM
	`zt_bug` t1
	LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID
WHERE
	t1.deleted = '0' 
	) t1 
WHERE
	( t1.openedDate >= #{srf.datacontext.openeddatelt}  OR #{srf.datacontext.openeddatelt} IS NULL ) 
	AND ( t1.openedDate <= #{srf.datacontext.openeddategt} OR #{srf.datacontext.openeddategt} is null ) 
	AND ( t1.PRODUCT = #{srf.datacontext.producteq} OR #{srf.datacontext.producteq}  IS NULL ) 
	AND ( t1.PROJECT = #{srf.datacontext.projecteq}  OR #{srf.datacontext.projecteq}  IS NULL ) 
GROUP BY
	t1.openedBy
```
### 数据查询-产品Bug解决方案汇总（ProductBugResolutionStats）
#### 说明
产品Bug解决方案汇总

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.id AS Product, 
	t1.`name` AS ProductName, 
	ifnull(t2.Bugwjj, 0) AS Bugwjj, 
	ifnull(t2.Bugbydesign, 0) AS Bugbydesign, 
	ifnull(t2.Bugduplicate, 0) AS Bugduplicate, 
	ifnull(t2.Bugfixed, 0) AS Bugfixed, 
	ifnull(t2.Bugexternal, 0) AS Bugexternal, 
	ifnull(t2.Bugnotrepro, 0) AS Bugnotrepro, 
	ifnull(t2.Bugpostponed, 0) AS Bugpostponed, 
	ifnull(t2.Bugwillnotfix, 0) AS Bugwillnotfix, 
	ifnull(t2.BugEfficient, '100.00%') AS BugEfficient, 
	ifnull(t2.Bugtostory, 0) AS Bugtostory, 
	ifnull(t2.BUGTOTAL, 0) AS BUGTOTAL 
	from zt_product t1 left join (SELECT
	t1.product, 
	t1.project,
	sum( IF ( t1.resolution = '', t1.v1, 0 ) ) AS Bugwjj,
	sum( IF ( t1.resolution = 'bydesign', t1.v1, 0 ) ) AS Bugbydesign,
	SUM( IF ( t1.resolution = 'duplicate', t1.v1, 0 ) ) AS Bugduplicate,
	SUM( IF ( t1.resolution = 'fixed', t1.v1, 0 ) ) AS Bugfixed,
	SUM( IF ( t1.resolution = 'external', t1.v1, 0 ) ) AS Bugexternal,
	sum( IF ( t1.resolution = 'notrepro', t1.v1, 0 ) ) AS Bugnotrepro,
	SUM( IF ( t1.resolution = 'postponed', t1.v1, 0 ) ) AS Bugpostponed,
	SUM( IF ( t1.resolution = 'willnotfix', t1.v1, 0 ) ) AS Bugwillnotfix,
	CONCAT( ROUND( case when (SUM( IF ( t1.resolution = 'fixed', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'postponed', t1.v1, 0 ) )) = 0 then 0 else (SUM( IF ( t1.resolution = 'fixed', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'postponed', t1.v1, 0 ) ))/ (sum( IF ( t1.resolution = 'bydesign', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'duplicate', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'fixed', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'external', t1.v1, 0 ) ) + sum( IF ( t1.resolution = 'notrepro', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'postponed', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'willnotfix', t1.v1, 0 ) )) * 100 end,2), '%') as BugEfficient,
	SUM( IF ( t1.resolution = 'tostory', t1.v1, 0 ) ) AS Bugtostory,
	SUM( t1.v1 ) AS BUGTOTAL 
FROM
	(
SELECT
	t1.`OPENEDBY`,
	t1.`OPENEDDATE`,
	t1.`PRODUCT`,
	t1.`PROJECT`,
	t1.`RESOLUTION`,
	1 AS `V1` 
FROM
	`zt_bug` t1
WHERE
	t1.deleted = '0'
	) t1 
WHERE
	( t1.openedDate >= #{srf.datacontext.openeddatelt}  OR #{srf.datacontext.openeddatelt} IS NULL ) 
	AND ( t1.openedDate <= #{srf.datacontext.openeddategt} OR #{srf.datacontext.openeddategt} is null ) 
GROUP BY
	t1.product) t2 on t1.id = t2.product
	where t1.deleted = '0'
	AND ( t2.PRODUCT = #{srf.datacontext.producteq} OR #{srf.datacontext.producteq}  IS NULL ) 
	AND ( t2.PROJECT = #{srf.datacontext.projecteq}  OR #{srf.datacontext.projecteq}  IS NULL )
```
### 数据查询-产品Bug状态汇总（ProductBugStatusSum）
#### 说明
产品Bug状态汇总

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.id AS Product, 
	t1.`name` AS ProductName, 
	ifnull(t2.ActiveBug, 0) AS BugActive, 
	ifnull(t2.ResolvedBug, 0) AS BugResolved, 
	ifnull(t2.ClosedBug, 0) AS BugClosed, 
	ifnull(t2.BugEfficient, '100.00%') AS BugEfficient, 
	ifnull(t2.BUGTOTAL, 0) AS BUGTOTAL 
	from zt_product t1 left join (SELECT
	t1.product, 
	t1.project, 
	sum( IF ( t1.`status` = 'active', t1.v1, 0 ) ) AS ActiveBug,
	sum( IF ( t1.`status` = 'resolved', t1.v1, 0 ) ) AS ResolvedBug,
	SUM( IF ( t1.`status` = 'closed', t1.v1, 0 ) ) AS ClosedBug,
	CONCAT( ROUND( case when (SUM( IF ( t1.`status` = 'closed', t1.v1, 0 ) ) + SUM( IF ( t1.`status` = 'resolved', t1.v1, 0 ) )) = 0 then 0 else (SUM( IF ( t1.`status` = 'closed', t1.v1, 0 ) ) + SUM( IF ( t1.`status` = 'resolved', t1.v1, 0 ) ))/ (sum( IF ( t1.`status` = 'active', t1.v1, 0 ) ) + SUM( IF ( t1.`status` = 'resolved', t1.v1, 0 ) ) + SUM( IF ( t1.`status` = 'closed', t1.v1, 0 ) )) * 100 end,2), '%') as BugEfficient,
	SUM( t1.v1 ) AS BUGTOTAL 
FROM
	(
SELECT
	t1.`OPENEDBY`,
	t1.`OPENEDDATE`,
	t1.`PRODUCT`,
	t1.`PROJECT`,
	t1.`STATUS`,
	1 AS `V1` 
FROM
	`zt_bug` t1
WHERE
	t1.deleted = '0'
	) t1 
WHERE
	( t1.openedDate >= #{srf.datacontext.openeddatelt}  OR #{srf.datacontext.openeddatelt} IS NULL ) 
	AND ( t1.openedDate <= #{srf.datacontext.openeddategt} OR #{srf.datacontext.openeddategt} is null ) 
GROUP BY
	t1.product) t2 on t1.id = t2.product
	where t1.deleted = '0'
		AND ( t2.PRODUCT = #{srf.datacontext.producteq} OR #{srf.datacontext.producteq}  IS NULL ) 
	AND ( t2.PROJECT = #{srf.datacontext.projecteq}  OR #{srf.datacontext.projecteq}  IS NULL )
```
### 数据查询-产品创建bug占比（ProductCreateBug）
#### 说明
产品创建bug占比

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.*,t2.productallbug, CONCAT(ROUND(t1.createbugcnt/(case when t2.productallbug = 0 or t2.productallbug is null then 1 else t2.productallbug end)*100,1),'%') from (
SELECT t1.openedBy,t1.productid,t1.productname,COUNT(1) as createbugcnt from (
SELECT t1.id ,t1.openedBy,t2.id as productid,t1.product,t2.`name` as productname from zt_bug t1
LEFT JOIN zt_product t2 on t2.id = t1.product
) t1 GROUP BY t1.openedBy,t1.productid  )t1
LEFT JOIN ( select t1.productid,t1.productname,count(1) as productallbug from (
SELECT t1.id ,t1.openedBy,t2.id as productid,t1.product,t2.`name` as productname from zt_bug t1
LEFT JOIN zt_product t2 on t2.id = t1.product
) t1 GROUP BY t1.productid ) t2 on t2.productid = t1.productid HAVING t1.openedBy = #{srf.sessioncontext.srfloginname}
```
### 数据查询-项目bug状态统计（ProjectBugStatusCount）
#### 说明
项目bug状态统计

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.project,
	t1.projectname,
		sum( IF ( t1.`status` = 'resolved', t1.ss, 0 ) ) AS bugresolved,
		sum( IF ( t1.`status` = 'closed', t1.ss, 0 ) ) AS bugclosed,
		sum( IF ( t1.`status` = 'active', t1.ss, 0 ) ) AS bugactive,
	count(1) as bugcnt
FROM
	(
	SELECT
		t1.`status`,
		t1.project,
		t11.`name` AS projectname,
		1 AS ss,
		t11.deleted
	FROM
		zt_bug t1
		LEFT JOIN zt_project t11 ON t1.project = t11.id 
		where t1.deleted = '0' and t1.project <> 0
	) t1 
GROUP BY
	t1.project,
	t1.projectname
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
t1.`ASSIGNEDTO`,
0 AS `BUGBYDESIGN`,
0 AS `BUGCNT`,
0 AS `BUGDUPLICATE`,
0% AS `BUGEFFICIENT`,
0 AS `BUGEXTERNAL`,
0 AS `BUGFIXED`,
0 AS `BUGNOTREPRO`,
0 AS `BUGPOSTPONED`,
0 AS `BUGTOSTORY`,
0 AS `BUGTOTAL`,
0 AS `BUGWILLNOTFIX`,
0 AS `BUGWJJ`,
t1.`ID`,
t1.`OPENEDBY`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t2.`PROJECTNAME`,
t1.`RESOLVEDBY`,
t1.`TITLE`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [Bug在每个解决方案的Bug数](#数据集合-Bug在每个解决方案的Bug数（BugCountInResolution）) | BugCountInResolution | 否 |
| 2 | [Bug完成表](#数据集合-Bug完成表（BugResolvedBy）) | BugResolvedBy | 否 |
| 3 | [bug解决汇总表](#数据集合-bug解决汇总表（BugResolvedGird）) | BugResolvedGird | 否 |
| 4 | [Bug指派表](#数据集合-Bug指派表（BugassignedTo）) | BugassignedTo | 否 |
| 5 | [数据集](#数据集合-数据集（Default）) | Default | 是 |
| 6 | [产品Bug解决方案汇总](#数据集合-产品Bug解决方案汇总（ProductBugResolutionStats）) | ProductBugResolutionStats | 否 |
| 7 | [产品Bug状态汇总](#数据集合-产品Bug状态汇总（ProductBugStatusSum）) | ProductBugStatusSum | 否 |
| 8 | [产品创建bug占比](#数据集合-产品创建bug占比（ProductCreateBug）) | ProductCreateBug | 否 |
| 9 | [项目bug状态统计](#数据集合-项目bug状态统计（ProjectBugStatusCount）) | ProjectBugStatusCount | 否 |

### 数据集合-Bug在每个解决方案的Bug数（BugCountInResolution）
#### 说明
Bug在每个解决方案的Bug数

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [Bug在每个解决方案的Bug数（BugCountInResolution）](#数据查询-Bug在每个解决方案的Bug数（BugCountInResolution）) |
### 数据集合-Bug完成表（BugResolvedBy）
#### 说明
Bug完成表

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [Bug完成表（BugResolvedBy）](#数据查询-Bug完成表（BugResolvedBy）) |
### 数据集合-bug解决汇总表（BugResolvedGird）
#### 说明
bug解决汇总表

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [bug解决汇总表（BugResolvedGird）](#数据查询-bug解决汇总表（BugResolvedGird）) |
### 数据集合-Bug指派表（BugassignedTo）
#### 说明
Bug指派表

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [Bug指派表（BugassignedTo）](#数据查询-Bug指派表（BugassignedTo）) |
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
| 1 | [Bug创建表（Default）](#数据查询-Bug创建表（Default）) |
### 数据集合-产品Bug解决方案汇总（ProductBugResolutionStats）
#### 说明
产品Bug解决方案汇总

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品Bug解决方案汇总（ProductBugResolutionStats）](#数据查询-产品Bug解决方案汇总（ProductBugResolutionStats）) |
### 数据集合-产品Bug状态汇总（ProductBugStatusSum）
#### 说明
产品Bug状态汇总

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品Bug状态汇总（ProductBugStatusSum）](#数据查询-产品Bug状态汇总（ProductBugStatusSum）) |
### 数据集合-产品创建bug占比（ProductCreateBug）
#### 说明
产品创建bug占比

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品创建bug占比（ProductCreateBug）](#数据查询-产品创建bug占比（ProductCreateBug）) |
### 数据集合-项目bug状态统计（ProjectBugStatusCount）
#### 说明
项目bug状态统计

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目bug状态统计（ProjectBugStatusCount）](#数据查询-项目bug状态统计（ProjectBugStatusCount）) |

## 数据导入
无

## 数据导出
| 序号 | 数据导出 | 数据导出名 | 最大导出数量 |
| ---- | ---- | ---- | ---- |
| 1 | [Bug解决数据导出](#数据导出-Bug解决数据导出（BugResolvedExport）) | BugResolvedExport | 1,000 |

### 数据导出-Bug解决数据导出（BugResolvedExport）
#### 说明
Bug解决数据导出

- 最大导出数
1,000

- 行为持有者
后台及前台

| 序号 | 导出标题 | 属性 | 默认值 |
| ---- | ---- | ---- | ---- |
| 1 | 由谁解决 | [由谁解决（RESOLVEDBY）](#属性-由谁解决（RESOLVEDBY）) |  |
| 2 | Bug编号 | [Bug编号（BUGID）](#属性-Bug编号（BUGID）) |  |
| 3 | Bug标题 | [Bug标题（BUGTITLE）](#属性-Bug标题（BUGTITLE）) |  |
| 4 | 优先级 | [Bug优先级（BUGPRI）](#属性-Bug优先级（BUGPRI）) |  |
| 5 | 严重程度 | [Bug严重程度（BUGSEVERITY）](#属性-Bug严重程度（BUGSEVERITY）) |  |
| 6 | 由谁创建 | [bug创建人（BUGOPENEDBY）](#属性-bug创建人（BUGOPENEDBY）) |  |
| 7 | 创建 | [Bug创建日期（BUGOPENEDDATE）](#属性-Bug创建日期（BUGOPENEDDATE）) |  |
| 8 | 解决方案 | [Bug解决方案（BUGRESOLUTION）](#属性-Bug解决方案（BUGRESOLUTION）) |  |
| 9 | 解决日期 | [bug解决日期（BUGRESOLVEDDATE）](#属性-bug解决日期（BUGRESOLVEDDATE）) |  |
| 10 | Bug状态 | [Bug状态（BUGSTATUS）](#属性-Bug状态（BUGSTATUS）) |  |

