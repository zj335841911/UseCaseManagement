
# 实体-用户工时统计(ACCOUNTTASKESTIMATE)
## 实体说明
用户工时统计

## 所属模块
[iBizPro模块](../ibizpro)

## 实体关系
### 1:N
无
### N:1
无


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [主键](#属性-主键（ID）) | ID | 文本，可指定长度 | 是 | 否 | 是 |
| 2 | [项目标识](#属性-项目标识（PROJECT）) | PROJECT | 大整型 | 否 | 否 | 是 |
| 3 | [项目名称](#属性-项目名称（PROJECTNAME）) | PROJECTNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 4 | [年](#属性-年（YEAR）) | YEAR | 文本，可指定长度 | 否 | 否 | 是 |
| 5 | [月](#属性-月（MONTH）) | MONTH | 文本，可指定长度 | 否 | 否 | 是 |
| 6 | [用户](#属性-用户（ACCOUNT）) | ACCOUNT | 文本，可指定长度 | 否 | 否 | 是 |
| 7 | [日期](#属性-日期（DATE）) | DATE | 日期型 | 否 | 否 | 是 |
| 8 | [工时](#属性-工时（CONSUMED）) | CONSUMED | 浮点 | 否 | 否 | 是 |
| 9 | [评估成本](#属性-评估成本（EVALUATIONCOST）) | EVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 10 | [投入成本](#属性-投入成本（INPUTCOST）) | INPUTCOST | 浮点 | 否 | 否 | 是 |
| 11 | [评估工时](#属性-评估工时（EVALUATIONTIME）) | EVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 12 | [三十一号评估工时](#属性-三十一号评估工时（THIRTYONEEVALUATIONTIME）) | THIRTYONEEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 13 | [三十号评估工时](#属性-三十号评估工时（THIRTYEVALUATIONTIME）) | THIRTYEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 14 | [二十八号评估工时](#属性-二十八号评估工时（TWENTYEIGHTEVALUATIONTIME）) | TWENTYEIGHTEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 15 | [二十九号评估工时](#属性-二十九号评估工时（TWENTYNINEEVALUATIONTIME）) | TWENTYNINEEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 16 | [二十七号评估工时](#属性-二十七号评估工时（TWENTYSEVENEVALUATIONTIME）) | TWENTYSEVENEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 17 | [二十六号评估工时](#属性-二十六号评估工时（TWENTYSIXEVALUATIONTIME）) | TWENTYSIXEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 18 | [二十五号评估工时](#属性-二十五号评估工时（TWENTYFIVEEVALUATIONTIME）) | TWENTYFIVEEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 19 | [二十四号评估工时](#属性-二十四号评估工时（TWENTYFOUREVALUATIONTIME）) | TWENTYFOUREVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 20 | [二十三号评估工时](#属性-二十三号评估工时（TWENTYTHREEEVALUATIONTIME）) | TWENTYTHREEEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 21 | [二十二号评估工时](#属性-二十二号评估工时（TWENTYTWOEVALUATIONTIME）) | TWENTYTWOEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 22 | [十九号评估工时](#属性-十九号评估工时（NINETEENEVALUATIONTIME）) | NINETEENEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 23 | [二十一号评估工时](#属性-二十一号评估工时（TWENTYONEEVALUATIONTIME）) | TWENTYONEEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 24 | [二十号评估工时](#属性-二十号评估工时（TWENTYEVALUATIONTIME）) | TWENTYEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 25 | [十七号评估工时](#属性-十七号评估工时（SEVENTEENEVALUATIONTIME）) | SEVENTEENEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 26 | [十八号评估工时](#属性-十八号评估工时（EIGHTEENEVALUATIONTIME）) | EIGHTEENEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 27 | [十六号评估工时](#属性-十六号评估工时（SIXTEENEVALUATIONTIME）) | SIXTEENEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 28 | [十五号评估工时](#属性-十五号评估工时（FIFTEENEVALUATIONTIME）) | FIFTEENEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 29 | [十四号评估工时](#属性-十四号评估工时（FOURTEENEVALUATIONTIME）) | FOURTEENEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 30 | [十三号评估工时](#属性-十三号评估工时（THIRTEENEVALUATIONTIME）) | THIRTEENEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 31 | [十一号评估工时](#属性-十一号评估工时（ELEVENEVALUATIONTIME）) | ELEVENEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 32 | [九号评估工时](#属性-九号评估工时（NINEEVALUATIONTIME）) | NINEEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 33 | [十二号评估工时](#属性-十二号评估工时（TWELVEEVALUATIONTIME）) | TWELVEEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 34 | [七号评估工时](#属性-七号评估工时（SEVENEVALUATIONTIME）) | SEVENEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 35 | [十号评估工时](#属性-十号评估工时（TENEVALUATIONTIME）) | TENEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 36 | [六号评估工时](#属性-六号评估工时（SIXEVALUATIONTIME）) | SIXEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 37 | [八号评估工时](#属性-八号评估工时（EIGHTEVALUATIONTIME）) | EIGHTEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 38 | [五号评估工时](#属性-五号评估工时（FIVEEVALUATIONTIME）) | FIVEEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 39 | [一号评估工时](#属性-一号评估工时（ONEEVALUATIONTIME）) | ONEEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 40 | [三号评估工时](#属性-三号评估工时（THREEEVALUATIONTIME）) | THREEEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 41 | [四号评估工时](#属性-四号评估工时（FOUREVALUATIONTIME）) | FOUREVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 42 | [二号工时](#属性-二号工时（TWOCONSUMED）) | TWOCONSUMED | 浮点 | 否 | 否 | 是 |
| 43 | [二号评估工时](#属性-二号评估工时（TWOEVALUATIONTIME）) | TWOEVALUATIONTIME | 浮点 | 否 | 否 | 是 |
| 44 | [一号工时](#属性-一号工时（ONECONSUMED）) | ONECONSUMED | 浮点 | 否 | 否 | 是 |
| 45 | [四号工时](#属性-四号工时（FOURONSUMED）) | FOURONSUMED | 浮点 | 否 | 否 | 是 |
| 46 | [五号工时](#属性-五号工时（FIVECONSUMED）) | FIVECONSUMED | 浮点 | 否 | 否 | 是 |
| 47 | [三号工时](#属性-三号工时（THREECONSUMED）) | THREECONSUMED | 浮点 | 否 | 否 | 是 |
| 48 | [七号工时](#属性-七号工时（SEVENCONSUMED）) | SEVENCONSUMED | 浮点 | 否 | 否 | 是 |
| 49 | [九号工时](#属性-九号工时（NINECONSUMED）) | NINECONSUMED | 浮点 | 否 | 否 | 是 |
| 50 | [六号工时](#属性-六号工时（SIXCONSUMED）) | SIXCONSUMED | 浮点 | 否 | 否 | 是 |
| 51 | [十号工时](#属性-十号工时（TENCONSUMED）) | TENCONSUMED | 浮点 | 否 | 否 | 是 |
| 52 | [八号工时](#属性-八号工时（EIGHTCONSUMED）) | EIGHTCONSUMED | 浮点 | 否 | 否 | 是 |
| 53 | [十三号工时](#属性-十三号工时（THIRTEENCONSUMED）) | THIRTEENCONSUMED | 浮点 | 否 | 否 | 是 |
| 54 | [十一号工时](#属性-十一号工时（ELEVENCONSUMED）) | ELEVENCONSUMED | 浮点 | 否 | 否 | 是 |
| 55 | [十四号工时](#属性-十四号工时（FOURTEENCONSUMED）) | FOURTEENCONSUMED | 浮点 | 否 | 否 | 是 |
| 56 | [十二号工时](#属性-十二号工时（TWELVECONSUMED）) | TWELVECONSUMED | 浮点 | 否 | 否 | 是 |
| 57 | [十七号工时](#属性-十七号工时（SEVENTEENCONSUMED）) | SEVENTEENCONSUMED | 浮点 | 否 | 否 | 是 |
| 58 | [十五号工时](#属性-十五号工时（FIFTEENCONSUMED）) | FIFTEENCONSUMED | 浮点 | 否 | 否 | 是 |
| 59 | [十八号工时](#属性-十八号工时（EIGHTEENCONSUMED）) | EIGHTEENCONSUMED | 浮点 | 否 | 否 | 是 |
| 60 | [十六号工时](#属性-十六号工时（SIXTEENCONSUMED）) | SIXTEENCONSUMED | 浮点 | 否 | 否 | 是 |
| 61 | [二十号工时](#属性-二十号工时（TWENTYCONSUMED）) | TWENTYCONSUMED | 浮点 | 否 | 否 | 是 |
| 62 | [二十二号工时](#属性-二十二号工时（TWENTYTWOCONSUMED）) | TWENTYTWOCONSUMED | 浮点 | 否 | 否 | 是 |
| 63 | [十九号工时](#属性-十九号工时（NINETEENCONSUMED）) | NINETEENCONSUMED | 浮点 | 否 | 否 | 是 |
| 64 | [二十一号工时](#属性-二十一号工时（TWENTYONECONSUMED）) | TWENTYONECONSUMED | 浮点 | 否 | 否 | 是 |
| 65 | [二十三号工时](#属性-二十三号工时（TWENTYTHREECONSUMED）) | TWENTYTHREECONSUMED | 浮点 | 否 | 否 | 是 |
| 66 | [二十四号工时](#属性-二十四号工时（TWENTYFOURCONSUMED）) | TWENTYFOURCONSUMED | 浮点 | 否 | 否 | 是 |
| 67 | [二十六号工时](#属性-二十六号工时（TWENTYSIXCONSUMED）) | TWENTYSIXCONSUMED | 浮点 | 否 | 否 | 是 |
| 68 | [二十九号工时](#属性-二十九号工时（TWENTYNINECONSUMED）) | TWENTYNINECONSUMED | 浮点 | 否 | 否 | 是 |
| 69 | [二十七号工时](#属性-二十七号工时（TWENTYSEVENCONSUMED）) | TWENTYSEVENCONSUMED | 浮点 | 否 | 否 | 是 |
| 70 | [二十五号工时](#属性-二十五号工时（TWENTYFIVECONSUMED）) | TWENTYFIVECONSUMED | 浮点 | 否 | 否 | 是 |
| 71 | [二十八号工时](#属性-二十八号工时（TWENTYEIGHTCONSUMED）) | TWENTYEIGHTCONSUMED | 浮点 | 否 | 否 | 是 |
| 72 | [三十一号工时](#属性-三十一号工时（THIRTYONECONSUMED）) | THIRTYONECONSUMED | 浮点 | 否 | 否 | 是 |
| 73 | [三十号工时](#属性-三十号工时（THIRTYCONSUMED）) | THIRTYCONSUMED | 浮点 | 否 | 否 | 是 |
| 74 | [三十号评估成本](#属性-三十号评估成本（THIRTYEVALUATIONCOST）) | THIRTYEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 75 | [三十一号评估成本](#属性-三十一号评估成本（THIRTYONEEVALUATIONCOST）) | THIRTYONEEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 76 | [二十七号评估成本](#属性-二十七号评估成本（TWENTYSEVENEVALUATIONCOST）) | TWENTYSEVENEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 77 | [二十九号评估成本](#属性-二十九号评估成本（TWENTYNINEEVALUATIONCOST）) | TWENTYNINEEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 78 | [二十八号评估成本](#属性-二十八号评估成本（TWENTYEIGHTEVALUATIONCOST）) | TWENTYEIGHTEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 79 | [二十六号评估成本](#属性-二十六号评估成本（TWENTYSIXEVALUATIONCOST）) | TWENTYSIXEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 80 | [二十三号评估成本](#属性-二十三号评估成本（TWENTYTHREEEVALUATIONCOST）) | TWENTYTHREEEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 81 | [二十四号评估成本](#属性-二十四号评估成本（TWENTYFOUREVALUATIONCOST）) | TWENTYFOUREVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 82 | [二十二号评估成本](#属性-二十二号评估成本（TWENTYTWOEVALUATIONCOST）) | TWENTYTWOEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 83 | [二十五号评估成本](#属性-二十五号评估成本（TWENTYFIVEEVALUATIONCOST）) | TWENTYFIVEEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 84 | [十九号评估成本](#属性-十九号评估成本（NINETEENEVALUATIONCOST）) | NINETEENEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 85 | [二十一号评估成本](#属性-二十一号评估成本（TWENTYONEEVALUATIONCOST）) | TWENTYONEEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 86 | [二十号评估成本](#属性-二十号评估成本（TWENTYEVALUATIONCOST）) | TWENTYEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 87 | [十八号评估成本](#属性-十八号评估成本（EIGHTEENEVALUATIONCOST）) | EIGHTEENEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 88 | [十七号评估成本](#属性-十七号评估成本（SEVENTEENEVALUATIONCOST）) | SEVENTEENEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 89 | [十五号评估成本](#属性-十五号评估成本（FIFTEENEVALUATIONCOST）) | FIFTEENEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 90 | [十六号评估成本](#属性-十六号评估成本（SIXTEENEVALUATIONCOST）) | SIXTEENEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 91 | [十四号评估成本](#属性-十四号评估成本（FOURTEENEVALUATIONCOST）) | FOURTEENEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 92 | [十三号评估成本](#属性-十三号评估成本（THIRTEENEVALUATIONCOST）) | THIRTEENEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 93 | [十号评估成本](#属性-十号评估成本（TENEVALUATIONCOST）) | TENEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 94 | [十二号评估成本](#属性-十二号评估成本（TWELVEEVALUATIONCOST）) | TWELVEEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 95 | [十一号评估成本](#属性-十一号评估成本（ELEVENEVALUATIONCOST）) | ELEVENEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 96 | [九号评估成本](#属性-九号评估成本（NINEEVALUATIONCOST）) | NINEEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 97 | [六号评估成本](#属性-六号评估成本（SIXEVALUATIONCOST）) | SIXEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 98 | [七号评估成本](#属性-七号评估成本（SEVENEVALUATIONCOST）) | SEVENEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 99 | [五号评估成本](#属性-五号评估成本（FIVEEVALUATIONCOST）) | FIVEEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 100 | [八号评估成本](#属性-八号评估成本（EIGHTEVALUATIONCOST）) | EIGHTEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 101 | [四号评估成本](#属性-四号评估成本（FOUREVALUATIONCOST）) | FOUREVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 102 | [三号评估成本](#属性-三号评估成本（THREEEVALUATIONCOST）) | THREEEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 103 | [二号评估成本](#属性-二号评估成本（TWOEVALUATIONCOST）) | TWOEVALUATIONCOST | 浮点 | 否 | 否 | 是 |
| 104 | [一号评估成本](#属性-一号评估成本（ONEEVALUATIONCOST）) | ONEEVALUATIONCOST | 浮点 | 否 | 否 | 是 |

### 属性-主键（ID）
#### 属性说明
主键

- 是否是主键
是

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
无

### 属性-项目标识（PROJECT）
#### 属性说明
项目标识

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
大整型

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
| 1 | `in(...)` |

#### 关系属性
无

### 属性-项目名称（PROJECTNAME）
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
无

### 属性-年（YEAR）
#### 属性说明
年

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
无

### 属性-月（MONTH）
#### 属性说明
月

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
无

### 属性-用户（ACCOUNT）
#### 属性说明
用户

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
无

### 属性-日期（DATE）
#### 属性说明
日期

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
| 1 | `=` |

#### 关系属性
无

### 属性-工时（CONSUMED）
#### 属性说明
工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-评估成本（EVALUATIONCOST）
#### 属性说明
评估成本

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
无

### 属性-投入成本（INPUTCOST）
#### 属性说明
投入成本

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
无

### 属性-评估工时（EVALUATIONTIME）
#### 属性说明
评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-三十一号评估工时（THIRTYONEEVALUATIONTIME）
#### 属性说明
三十一号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-三十号评估工时（THIRTYEVALUATIONTIME）
#### 属性说明
三十号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十八号评估工时（TWENTYEIGHTEVALUATIONTIME）
#### 属性说明
二十八号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十九号评估工时（TWENTYNINEEVALUATIONTIME）
#### 属性说明
二十九号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十七号评估工时（TWENTYSEVENEVALUATIONTIME）
#### 属性说明
二十七号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十六号评估工时（TWENTYSIXEVALUATIONTIME）
#### 属性说明
二十六号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十五号评估工时（TWENTYFIVEEVALUATIONTIME）
#### 属性说明
二十五号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十四号评估工时（TWENTYFOUREVALUATIONTIME）
#### 属性说明
二十四号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十三号评估工时（TWENTYTHREEEVALUATIONTIME）
#### 属性说明
二十三号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十二号评估工时（TWENTYTWOEVALUATIONTIME）
#### 属性说明
二十二号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十九号评估工时（NINETEENEVALUATIONTIME）
#### 属性说明
十九号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十一号评估工时（TWENTYONEEVALUATIONTIME）
#### 属性说明
二十一号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十号评估工时（TWENTYEVALUATIONTIME）
#### 属性说明
二十号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十七号评估工时（SEVENTEENEVALUATIONTIME）
#### 属性说明
十七号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十八号评估工时（EIGHTEENEVALUATIONTIME）
#### 属性说明
十八号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十六号评估工时（SIXTEENEVALUATIONTIME）
#### 属性说明
十六号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十五号评估工时（FIFTEENEVALUATIONTIME）
#### 属性说明
十五号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十四号评估工时（FOURTEENEVALUATIONTIME）
#### 属性说明
十四号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十三号评估工时（THIRTEENEVALUATIONTIME）
#### 属性说明
十三号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十一号评估工时（ELEVENEVALUATIONTIME）
#### 属性说明
十一号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-九号评估工时（NINEEVALUATIONTIME）
#### 属性说明
九号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十二号评估工时（TWELVEEVALUATIONTIME）
#### 属性说明
十二号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-七号评估工时（SEVENEVALUATIONTIME）
#### 属性说明
七号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十号评估工时（TENEVALUATIONTIME）
#### 属性说明
十号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-六号评估工时（SIXEVALUATIONTIME）
#### 属性说明
六号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-八号评估工时（EIGHTEVALUATIONTIME）
#### 属性说明
八号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-五号评估工时（FIVEEVALUATIONTIME）
#### 属性说明
五号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-一号评估工时（ONEEVALUATIONTIME）
#### 属性说明
一号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-三号评估工时（THREEEVALUATIONTIME）
#### 属性说明
三号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-四号评估工时（FOUREVALUATIONTIME）
#### 属性说明
四号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二号工时（TWOCONSUMED）
#### 属性说明
二号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二号评估工时（TWOEVALUATIONTIME）
#### 属性说明
二号评估工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-一号工时（ONECONSUMED）
#### 属性说明
一号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-四号工时（FOURONSUMED）
#### 属性说明
四号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-五号工时（FIVECONSUMED）
#### 属性说明
五号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-三号工时（THREECONSUMED）
#### 属性说明
三号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-七号工时（SEVENCONSUMED）
#### 属性说明
七号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-九号工时（NINECONSUMED）
#### 属性说明
九号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-六号工时（SIXCONSUMED）
#### 属性说明
六号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十号工时（TENCONSUMED）
#### 属性说明
十号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-八号工时（EIGHTCONSUMED）
#### 属性说明
八号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十三号工时（THIRTEENCONSUMED）
#### 属性说明
十三号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十一号工时（ELEVENCONSUMED）
#### 属性说明
十一号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十四号工时（FOURTEENCONSUMED）
#### 属性说明
十四号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十二号工时（TWELVECONSUMED）
#### 属性说明
十二号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十七号工时（SEVENTEENCONSUMED）
#### 属性说明
十七号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十五号工时（FIFTEENCONSUMED）
#### 属性说明
十五号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十八号工时（EIGHTEENCONSUMED）
#### 属性说明
十八号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十六号工时（SIXTEENCONSUMED）
#### 属性说明
十六号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十号工时（TWENTYCONSUMED）
#### 属性说明
二十号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十二号工时（TWENTYTWOCONSUMED）
#### 属性说明
二十二号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十九号工时（NINETEENCONSUMED）
#### 属性说明
十九号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十一号工时（TWENTYONECONSUMED）
#### 属性说明
二十一号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十三号工时（TWENTYTHREECONSUMED）
#### 属性说明
二十三号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十四号工时（TWENTYFOURCONSUMED）
#### 属性说明
二十四号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十六号工时（TWENTYSIXCONSUMED）
#### 属性说明
二十六号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十九号工时（TWENTYNINECONSUMED）
#### 属性说明
二十九号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十七号工时（TWENTYSEVENCONSUMED）
#### 属性说明
二十七号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十五号工时（TWENTYFIVECONSUMED）
#### 属性说明
二十五号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十八号工时（TWENTYEIGHTCONSUMED）
#### 属性说明
二十八号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-三十一号工时（THIRTYONECONSUMED）
#### 属性说明
三十一号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-三十号工时（THIRTYCONSUMED）
#### 属性说明
三十号工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-三十号评估成本（THIRTYEVALUATIONCOST）
#### 属性说明
三十号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-三十一号评估成本（THIRTYONEEVALUATIONCOST）
#### 属性说明
三十一号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十七号评估成本（TWENTYSEVENEVALUATIONCOST）
#### 属性说明
二十七号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十九号评估成本（TWENTYNINEEVALUATIONCOST）
#### 属性说明
二十九号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十八号评估成本（TWENTYEIGHTEVALUATIONCOST）
#### 属性说明
二十八号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十六号评估成本（TWENTYSIXEVALUATIONCOST）
#### 属性说明
二十六号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十三号评估成本（TWENTYTHREEEVALUATIONCOST）
#### 属性说明
二十三号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十四号评估成本（TWENTYFOUREVALUATIONCOST）
#### 属性说明
二十四号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十二号评估成本（TWENTYTWOEVALUATIONCOST）
#### 属性说明
二十二号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十五号评估成本（TWENTYFIVEEVALUATIONCOST）
#### 属性说明
二十五号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十九号评估成本（NINETEENEVALUATIONCOST）
#### 属性说明
十九号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十一号评估成本（TWENTYONEEVALUATIONCOST）
#### 属性说明
二十一号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二十号评估成本（TWENTYEVALUATIONCOST）
#### 属性说明
二十号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十八号评估成本（EIGHTEENEVALUATIONCOST）
#### 属性说明
十八号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十七号评估成本（SEVENTEENEVALUATIONCOST）
#### 属性说明
十七号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十五号评估成本（FIFTEENEVALUATIONCOST）
#### 属性说明
十五号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十六号评估成本（SIXTEENEVALUATIONCOST）
#### 属性说明
十六号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十四号评估成本（FOURTEENEVALUATIONCOST）
#### 属性说明
十四号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十三号评估成本（THIRTEENEVALUATIONCOST）
#### 属性说明
十三号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十号评估成本（TENEVALUATIONCOST）
#### 属性说明
十号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十二号评估成本（TWELVEEVALUATIONCOST）
#### 属性说明
十二号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-十一号评估成本（ELEVENEVALUATIONCOST）
#### 属性说明
十一号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-九号评估成本（NINEEVALUATIONCOST）
#### 属性说明
九号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-六号评估成本（SIXEVALUATIONCOST）
#### 属性说明
六号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-七号评估成本（SEVENEVALUATIONCOST）
#### 属性说明
七号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-五号评估成本（FIVEEVALUATIONCOST）
#### 属性说明
五号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-八号评估成本（EIGHTEVALUATIONCOST）
#### 属性说明
八号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-四号评估成本（FOUREVALUATIONCOST）
#### 属性说明
四号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-三号评估成本（THREEEVALUATIONCOST）
#### 属性说明
三号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-二号评估成本（TWOEVALUATIONCOST）
#### 属性说明
二号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无

### 属性-一号评估成本（ONEEVALUATIONCOST）
#### 属性说明
一号评估成本

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
无


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
无

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [项目标识（PROJECT）](#属性-项目标识（PROJECT）) | `in(...)` |
| 2 | [年（YEAR）](#属性-年（YEAR）) | `=` |
| 3 | [月（MONTH）](#属性-月（MONTH）) | `=` |
| 4 | [用户（ACCOUNT）](#属性-用户（ACCOUNT）) | `=` |
| 5 | [日期（DATE）](#属性-日期（DATE）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [所有用户工时](#数据查询-所有用户工时（AllAccountEstimate）) | AllAccountEstimate | 否 |
| 2 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 3 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-所有用户工时（AllAccountEstimate）
#### 说明
所有用户工时

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT T1.* FROM (SELECT
	t1.account,t1.`YEAR`,concat(t1.`YEAR`, t1.`MONTH`) as `MONTH`,
	sum(if(t1.`day` = '01',t1.consumed, 0)) as oneconsumed,
	sum(if(t1.`day` = '02',t1.consumed, 0)) as twoconsumed,
	sum(if(t1.`day` = '03',t1.consumed, 0)) as threeconsumed,
	sum(if(t1.`day` = '04',t1.consumed, 0)) as FOURONSUMED,
	sum(if(t1.`day` = '05',t1.consumed, 0)) as fiveconsumed,
	sum(if(t1.`day` = '06',t1.consumed, 0)) as sixconsumed,
	sum(if(t1.`day` = '07',t1.consumed, 0)) as sevenconsumed,
	sum(if(t1.`day` = '08',t1.consumed, 0)) as eightconsumed,
	sum(if(t1.`day` = '09',t1.consumed, 0)) as nineconsumed,
	sum(if(t1.`day` = '10',t1.consumed, 0)) as tenconsumed,
	sum(if(t1.`day` = '11',t1.consumed, 0)) as elevenconsumed,
	sum(if(t1.`day` = '12',t1.consumed, 0)) as twelveconsumed,
	sum(if(t1.`day` = '13',t1.consumed, 0)) as thirteenconsumed,
	sum(if(t1.`day` = '14',t1.consumed, 0)) as fourteenconsumed,
	sum(if(t1.`day` = '15',t1.consumed, 0)) as fifteenconsumed,
	sum(if(t1.`day` = '16',t1.consumed, 0)) as sixteenconsumed,
	sum(if(t1.`day` = '17',t1.consumed, 0)) as seventeenconsumed,
	sum(if(t1.`day` = '18',t1.consumed, 0)) as eighteenconsumed,
	sum(if(t1.`day` = '19',t1.consumed, 0)) as nineteenconsumed,
	sum(if(t1.`day` = '20',t1.consumed, 0)) as twentyconsumed,
	sum(if(t1.`day` = '21',t1.consumed, 0)) as twentyoneconsumed,
	sum(if(t1.`day` = '22',t1.consumed, 0)) as twentytwoconsumed,
	sum(if(t1.`day` = '23',t1.consumed, 0)) as twentythreeconsumed,
	sum(if(t1.`day` = '24',t1.consumed, 0)) as twentyfourconsumed,
	sum(if(t1.`day` = '25',t1.consumed, 0)) as twentyfiveconsumed,
	sum(if(t1.`day` = '26',t1.consumed, 0)) as twentysixconsumed,
	sum(if(t1.`day` = '27',t1.consumed, 0)) as twentysevenconsumed,
	sum(if(t1.`day` = '28',t1.consumed, 0)) as twentyeightconsumed,
	sum(if(t1.`day` = '29',t1.consumed, 0)) as twentynineconsumed,
	sum(if(t1.`day` = '30',t1.consumed, 0)) as thirtyconsumed,
	sum(if(t1.`day` = '31',t1.consumed, 0)) as thirtyoneconsumed,
	sum(if(t1.`day` = '01',t1.EVALUATIONTIME, 0)) as oneEVALUATIONTIME,
	sum(if(t1.`day` = '02',t1.EVALUATIONTIME, 0)) as twoEVALUATIONTIME,
	sum(if(t1.`day` = '03',t1.EVALUATIONTIME, 0)) as threeEVALUATIONTIME,
	sum(if(t1.`day` = '04',t1.EVALUATIONTIME, 0)) as fourEVALUATIONTIME,
	sum(if(t1.`day` = '05',t1.EVALUATIONTIME, 0)) as fiveEVALUATIONTIME,
	sum(if(t1.`day` = '06',t1.EVALUATIONTIME, 0)) as sixEVALUATIONTIME,
	sum(if(t1.`day` = '07',t1.EVALUATIONTIME, 0)) as sevenEVALUATIONTIME,
	sum(if(t1.`day` = '08',t1.EVALUATIONTIME, 0)) as eightEVALUATIONTIME,
	sum(if(t1.`day` = '09',t1.EVALUATIONTIME, 0)) as nineEVALUATIONTIME,
	sum(if(t1.`day` = '10',t1.EVALUATIONTIME, 0)) as tenEVALUATIONTIME,
	sum(if(t1.`day` = '11',t1.EVALUATIONTIME, 0)) as elevenEVALUATIONTIME,
	sum(if(t1.`day` = '12',t1.EVALUATIONTIME, 0)) as twelveEVALUATIONTIME,
	sum(if(t1.`day` = '13',t1.EVALUATIONTIME, 0)) as thirteenEVALUATIONTIME,
	sum(if(t1.`day` = '14',t1.EVALUATIONTIME, 0)) as fourteenEVALUATIONTIME,
	sum(if(t1.`day` = '15',t1.EVALUATIONTIME, 0)) as fifteenEVALUATIONTIME,
	sum(if(t1.`day` = '16',t1.EVALUATIONTIME, 0)) as sixteenEVALUATIONTIME,
	sum(if(t1.`day` = '17',t1.EVALUATIONTIME, 0)) as seventeenEVALUATIONTIME,
	sum(if(t1.`day` = '18',t1.EVALUATIONTIME, 0)) as eighteenEVALUATIONTIME,
	sum(if(t1.`day` = '19',t1.EVALUATIONTIME, 0)) as nineteenEVALUATIONTIME,
	sum(if(t1.`day` = '20',t1.EVALUATIONTIME, 0)) as twentyEVALUATIONTIME,
	sum(if(t1.`day` = '21',t1.EVALUATIONTIME, 0)) as twentyoneEVALUATIONTIME,
	sum(if(t1.`day` = '22',t1.EVALUATIONTIME, 0)) as twentytwoEVALUATIONTIME,
	sum(if(t1.`day` = '23',t1.EVALUATIONTIME, 0)) as twentythreeEVALUATIONTIME,
	sum(if(t1.`day` = '24',t1.EVALUATIONTIME, 0)) as twentyfourEVALUATIONTIME,
	sum(if(t1.`day` = '25',t1.EVALUATIONTIME, 0)) as twentyfiveEVALUATIONTIME,
	sum(if(t1.`day` = '26',t1.EVALUATIONTIME, 0)) as twentysixEVALUATIONTIME,
	sum(if(t1.`day` = '27',t1.EVALUATIONTIME, 0)) as twentysevenEVALUATIONTIME,
	sum(if(t1.`day` = '28',t1.EVALUATIONTIME, 0)) as twentyeightEVALUATIONTIME,
	sum(if(t1.`day` = '29',t1.EVALUATIONTIME, 0)) as twentynineEVALUATIONTIME,
	sum(if(t1.`day` = '30',t1.EVALUATIONTIME, 0)) as thirtyEVALUATIONTIME,
	sum(if(t1.`day` = '31',t1.EVALUATIONTIME, 0)) as thirtyoneEVALUATIONTIME,
	sum(if(t1.`day` = '01',t1.EVALUATIONCOST, 0)) as oneEVALUATIONCOST,
	sum(if(t1.`day` = '02',t1.EVALUATIONCOST, 0)) as twoEVALUATIONCOST,
	sum(if(t1.`day` = '03',t1.EVALUATIONCOST, 0)) as threeEVALUATIONCOST,
	sum(if(t1.`day` = '04',t1.EVALUATIONCOST, 0)) as fourEVALUATIONCOST,
	sum(if(t1.`day` = '05',t1.EVALUATIONCOST, 0)) as fiveEVALUATIONCOST,
	sum(if(t1.`day` = '06',t1.EVALUATIONCOST, 0)) as sixEVALUATIONCOST,
	sum(if(t1.`day` = '07',t1.EVALUATIONCOST, 0)) as sevenEVALUATIONCOST,
	sum(if(t1.`day` = '08',t1.EVALUATIONCOST, 0)) as eightEVALUATIONCOST,
	sum(if(t1.`day` = '09',t1.EVALUATIONCOST, 0)) as nineEVALUATIONCOST,
	sum(if(t1.`day` = '10',t1.EVALUATIONCOST, 0)) as tenEVALUATIONCOST,
	sum(if(t1.`day` = '11',t1.EVALUATIONCOST, 0)) as elevenEVALUATIONCOST,
	sum(if(t1.`day` = '12',t1.EVALUATIONCOST, 0)) as twelveEVALUATIONCOST,
	sum(if(t1.`day` = '13',t1.EVALUATIONCOST, 0)) as thirteenEVALUATIONCOST,
	sum(if(t1.`day` = '14',t1.EVALUATIONCOST, 0)) as fourteenEVALUATIONCOST,
	sum(if(t1.`day` = '15',t1.EVALUATIONCOST, 0)) as fifteenEVALUATIONCOST,
	sum(if(t1.`day` = '16',t1.EVALUATIONCOST, 0)) as sixteenEVALUATIONCOST,
	sum(if(t1.`day` = '17',t1.EVALUATIONCOST, 0)) as seventeenEVALUATIONCOST,
	sum(if(t1.`day` = '18',t1.EVALUATIONCOST, 0)) as eighteenEVALUATIONCOST,
	sum(if(t1.`day` = '19',t1.EVALUATIONCOST, 0)) as nineteenEVALUATIONCOST,
	sum(if(t1.`day` = '20',t1.EVALUATIONCOST, 0)) as twentyEVALUATIONCOST,
	sum(if(t1.`day` = '21',t1.EVALUATIONCOST, 0)) as twentyoneEVALUATIONCOST,
	sum(if(t1.`day` = '22',t1.EVALUATIONCOST, 0)) as twentytwoEVALUATIONCOST,
	sum(if(t1.`day` = '23',t1.EVALUATIONCOST, 0)) as twentythreeEVALUATIONCOST,
	sum(if(t1.`day` = '24',t1.EVALUATIONCOST, 0)) as twentyfourEVALUATIONCOST,
	sum(if(t1.`day` = '25',t1.EVALUATIONCOST, 0)) as twentyfiveEVALUATIONCOST,
	sum(if(t1.`day` = '26',t1.EVALUATIONCOST, 0)) as twentysixEVALUATIONCOST,
	sum(if(t1.`day` = '27',t1.EVALUATIONCOST, 0)) as twentysevenEVALUATIONCOST,
	sum(if(t1.`day` = '28',t1.EVALUATIONCOST, 0)) as twentyeightEVALUATIONCOST,
	sum(if(t1.`day` = '29',t1.EVALUATIONCOST, 0)) as twentynineEVALUATIONCOST,
	sum(if(t1.`day` = '30',t1.EVALUATIONCOST, 0)) as thirtyEVALUATIONCOST,
	sum(if(t1.`day` = '31',t1.EVALUATIONCOST, 0)) as thirtyoneEVALUATIONCOST,
	SUM(T1.consumed) AS consumed,SUM(T1.EVALUATIONCOST) AS EVALUATIONCOST, SUM(T1.INPUTCOST) AS INPUTCOST, SUM(T1.EVALUATIONTIME) AS EVALUATIONTIME
FROM
	(
SELECT YEAR
	( t1.date ) AS `year`,
	Right(100 + MONTH ( t1.date ), 2) AS `month`,
	Right(100 + day ( t1.date ), 2) AS `day`,
	t1.account,
	t1.date,
	ROUND( sum( t1.consumed ), 2 ) AS consumed,
	ROUND( sum( t1.EVALUATIONCOST ), 2 ) AS EVALUATIONCOST,
	ROUND( sum( t1.INPUTCOST ), 2 ) AS INPUTCOST,
	ROUND( sum( t1.EVALUATIONTIME ), 2 ) AS EVALUATIONTIME
FROM
	`zt_taskestimate` t1
	LEFT JOIN `zt_task` t11 ON t1.`TASK` = t11.`ID`
WHERE
	t11.project IS NOT NULL 
	AND t11.project <> '0' 
	AND t1.date <> '0000-00-00' 
GROUP BY
	t1.account,
	t1.date 
	) t1 GROUP BY t1.account, t1.`YEAR`,t1.`MONTH`) T1
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
SELECT T1.* FROM (SELECT
	t1.account,t1.`YEAR`,concat(t1.`YEAR`, t1.`MONTH`) as `MONTH`,
	sum(if(t1.`day` = '01',t1.consumed, 0)) as oneconsumed,
	sum(if(t1.`day` = '02',t1.consumed, 0)) as twoconsumed,
	sum(if(t1.`day` = '03',t1.consumed, 0)) as threeconsumed,
	sum(if(t1.`day` = '04',t1.consumed, 0)) as FOURONSUMED,
	sum(if(t1.`day` = '05',t1.consumed, 0)) as fiveconsumed,
	sum(if(t1.`day` = '06',t1.consumed, 0)) as sixconsumed,
	sum(if(t1.`day` = '07',t1.consumed, 0)) as sevenconsumed,
	sum(if(t1.`day` = '08',t1.consumed, 0)) as eightconsumed,
	sum(if(t1.`day` = '09',t1.consumed, 0)) as nineconsumed,
	sum(if(t1.`day` = '10',t1.consumed, 0)) as tenconsumed,
	sum(if(t1.`day` = '11',t1.consumed, 0)) as elevenconsumed,
	sum(if(t1.`day` = '12',t1.consumed, 0)) as twelveconsumed,
	sum(if(t1.`day` = '13',t1.consumed, 0)) as thirteenconsumed,
	sum(if(t1.`day` = '14',t1.consumed, 0)) as fourteenconsumed,
	sum(if(t1.`day` = '15',t1.consumed, 0)) as fifteenconsumed,
	sum(if(t1.`day` = '16',t1.consumed, 0)) as sixteenconsumed,
	sum(if(t1.`day` = '17',t1.consumed, 0)) as seventeenconsumed,
	sum(if(t1.`day` = '18',t1.consumed, 0)) as eighteenconsumed,
	sum(if(t1.`day` = '19',t1.consumed, 0)) as nineteenconsumed,
	sum(if(t1.`day` = '20',t1.consumed, 0)) as twentyconsumed,
	sum(if(t1.`day` = '21',t1.consumed, 0)) as twentyoneconsumed,
	sum(if(t1.`day` = '22',t1.consumed, 0)) as twentytwoconsumed,
	sum(if(t1.`day` = '23',t1.consumed, 0)) as twentythreeconsumed,
	sum(if(t1.`day` = '24',t1.consumed, 0)) as twentyfourconsumed,
	sum(if(t1.`day` = '25',t1.consumed, 0)) as twentyfiveconsumed,
	sum(if(t1.`day` = '26',t1.consumed, 0)) as twentysixconsumed,
	sum(if(t1.`day` = '27',t1.consumed, 0)) as twentysevenconsumed,
	sum(if(t1.`day` = '28',t1.consumed, 0)) as twentyeightconsumed,
	sum(if(t1.`day` = '29',t1.consumed, 0)) as twentynineconsumed,
	sum(if(t1.`day` = '30',t1.consumed, 0)) as thirtyconsumed,
	sum(if(t1.`day` = '31',t1.consumed, 0)) as thirtyoneconsumed,
	sum(if(t1.`day` = '01',t1.EVALUATIONTIME, 0)) as oneEVALUATIONTIME,
	sum(if(t1.`day` = '02',t1.EVALUATIONTIME, 0)) as twoEVALUATIONTIME,
	sum(if(t1.`day` = '03',t1.EVALUATIONTIME, 0)) as threeEVALUATIONTIME,
	sum(if(t1.`day` = '04',t1.EVALUATIONTIME, 0)) as fourEVALUATIONTIME,
	sum(if(t1.`day` = '05',t1.EVALUATIONTIME, 0)) as fiveEVALUATIONTIME,
	sum(if(t1.`day` = '06',t1.EVALUATIONTIME, 0)) as sixEVALUATIONTIME,
	sum(if(t1.`day` = '07',t1.EVALUATIONTIME, 0)) as sevenEVALUATIONTIME,
	sum(if(t1.`day` = '08',t1.EVALUATIONTIME, 0)) as eightEVALUATIONTIME,
	sum(if(t1.`day` = '09',t1.EVALUATIONTIME, 0)) as nineEVALUATIONTIME,
	sum(if(t1.`day` = '10',t1.EVALUATIONTIME, 0)) as tenEVALUATIONTIME,
	sum(if(t1.`day` = '11',t1.EVALUATIONTIME, 0)) as elevenEVALUATIONTIME,
	sum(if(t1.`day` = '12',t1.EVALUATIONTIME, 0)) as twelveEVALUATIONTIME,
	sum(if(t1.`day` = '13',t1.EVALUATIONTIME, 0)) as thirteenEVALUATIONTIME,
	sum(if(t1.`day` = '14',t1.EVALUATIONTIME, 0)) as fourteenEVALUATIONTIME,
	sum(if(t1.`day` = '15',t1.EVALUATIONTIME, 0)) as fifteenEVALUATIONTIME,
	sum(if(t1.`day` = '16',t1.EVALUATIONTIME, 0)) as sixteenEVALUATIONTIME,
	sum(if(t1.`day` = '17',t1.EVALUATIONTIME, 0)) as seventeenEVALUATIONTIME,
	sum(if(t1.`day` = '18',t1.EVALUATIONTIME, 0)) as eighteenEVALUATIONTIME,
	sum(if(t1.`day` = '19',t1.EVALUATIONTIME, 0)) as nineteenEVALUATIONTIME,
	sum(if(t1.`day` = '20',t1.EVALUATIONTIME, 0)) as twentyEVALUATIONTIME,
	sum(if(t1.`day` = '21',t1.EVALUATIONTIME, 0)) as twentyoneEVALUATIONTIME,
	sum(if(t1.`day` = '22',t1.EVALUATIONTIME, 0)) as twentytwoEVALUATIONTIME,
	sum(if(t1.`day` = '23',t1.EVALUATIONTIME, 0)) as twentythreeEVALUATIONTIME,
	sum(if(t1.`day` = '24',t1.EVALUATIONTIME, 0)) as twentyfourEVALUATIONTIME,
	sum(if(t1.`day` = '25',t1.EVALUATIONTIME, 0)) as twentyfiveEVALUATIONTIME,
	sum(if(t1.`day` = '26',t1.EVALUATIONTIME, 0)) as twentysixEVALUATIONTIME,
	sum(if(t1.`day` = '27',t1.EVALUATIONTIME, 0)) as twentysevenEVALUATIONTIME,
	sum(if(t1.`day` = '28',t1.EVALUATIONTIME, 0)) as twentyeightEVALUATIONTIME,
	sum(if(t1.`day` = '29',t1.EVALUATIONTIME, 0)) as twentynineEVALUATIONTIME,
	sum(if(t1.`day` = '30',t1.EVALUATIONTIME, 0)) as thirtyEVALUATIONTIME,
	sum(if(t1.`day` = '31',t1.EVALUATIONTIME, 0)) as thirtyoneEVALUATIONTIME,
	sum(if(t1.`day` = '01',t1.EVALUATIONCOST, 0)) as oneEVALUATIONCOST,
	sum(if(t1.`day` = '02',t1.EVALUATIONCOST, 0)) as twoEVALUATIONCOST,
	sum(if(t1.`day` = '03',t1.EVALUATIONCOST, 0)) as threeEVALUATIONCOST,
	sum(if(t1.`day` = '04',t1.EVALUATIONCOST, 0)) as fourEVALUATIONCOST,
	sum(if(t1.`day` = '05',t1.EVALUATIONCOST, 0)) as fiveEVALUATIONCOST,
	sum(if(t1.`day` = '06',t1.EVALUATIONCOST, 0)) as sixEVALUATIONCOST,
	sum(if(t1.`day` = '07',t1.EVALUATIONCOST, 0)) as sevenEVALUATIONCOST,
	sum(if(t1.`day` = '08',t1.EVALUATIONCOST, 0)) as eightEVALUATIONCOST,
	sum(if(t1.`day` = '09',t1.EVALUATIONCOST, 0)) as nineEVALUATIONCOST,
	sum(if(t1.`day` = '10',t1.EVALUATIONCOST, 0)) as tenEVALUATIONCOST,
	sum(if(t1.`day` = '11',t1.EVALUATIONCOST, 0)) as elevenEVALUATIONCOST,
	sum(if(t1.`day` = '12',t1.EVALUATIONCOST, 0)) as twelveEVALUATIONCOST,
	sum(if(t1.`day` = '13',t1.EVALUATIONCOST, 0)) as thirteenEVALUATIONCOST,
	sum(if(t1.`day` = '14',t1.EVALUATIONCOST, 0)) as fourteenEVALUATIONCOST,
	sum(if(t1.`day` = '15',t1.EVALUATIONCOST, 0)) as fifteenEVALUATIONCOST,
	sum(if(t1.`day` = '16',t1.EVALUATIONCOST, 0)) as sixteenEVALUATIONCOST,
	sum(if(t1.`day` = '17',t1.EVALUATIONCOST, 0)) as seventeenEVALUATIONCOST,
	sum(if(t1.`day` = '18',t1.EVALUATIONCOST, 0)) as eighteenEVALUATIONCOST,
	sum(if(t1.`day` = '19',t1.EVALUATIONCOST, 0)) as nineteenEVALUATIONCOST,
	sum(if(t1.`day` = '20',t1.EVALUATIONCOST, 0)) as twentyEVALUATIONCOST,
	sum(if(t1.`day` = '21',t1.EVALUATIONCOST, 0)) as twentyoneEVALUATIONCOST,
	sum(if(t1.`day` = '22',t1.EVALUATIONCOST, 0)) as twentytwoEVALUATIONCOST,
	sum(if(t1.`day` = '23',t1.EVALUATIONCOST, 0)) as twentythreeEVALUATIONCOST,
	sum(if(t1.`day` = '24',t1.EVALUATIONCOST, 0)) as twentyfourEVALUATIONCOST,
	sum(if(t1.`day` = '25',t1.EVALUATIONCOST, 0)) as twentyfiveEVALUATIONCOST,
	sum(if(t1.`day` = '26',t1.EVALUATIONCOST, 0)) as twentysixEVALUATIONCOST,
	sum(if(t1.`day` = '27',t1.EVALUATIONCOST, 0)) as twentysevenEVALUATIONCOST,
	sum(if(t1.`day` = '28',t1.EVALUATIONCOST, 0)) as twentyeightEVALUATIONCOST,
	sum(if(t1.`day` = '29',t1.EVALUATIONCOST, 0)) as twentynineEVALUATIONCOST,
	sum(if(t1.`day` = '30',t1.EVALUATIONCOST, 0)) as thirtyEVALUATIONCOST,
	sum(if(t1.`day` = '31',t1.EVALUATIONCOST, 0)) as thirtyoneEVALUATIONCOST,
	SUM(T1.consumed) AS consumed,SUM(T1.EVALUATIONCOST) AS EVALUATIONCOST, SUM(T1.INPUTCOST) AS INPUTCOST, SUM(T1.EVALUATIONTIME) AS EVALUATIONTIME
FROM
	(
SELECT YEAR
	( t1.date ) AS `year`,
	Right(100 + MONTH ( t1.date ), 2) AS `month`,
	Right(100 + day ( t1.date ), 2) AS `day`,
	t1.account,
	t1.date,
	ROUND( sum( t1.consumed ), 2 ) AS consumed,
	ROUND( sum( t1.EVALUATIONCOST ), 2 ) AS EVALUATIONCOST,
	ROUND( sum( t1.INPUTCOST ), 2 ) AS INPUTCOST,
	ROUND( sum( t1.EVALUATIONTIME ), 2 ) AS EVALUATIONTIME
FROM
	`zt_taskestimate` t1
	LEFT JOIN `zt_task` t11 ON t1.`TASK` = t11.`ID`
WHERE
	t11.project IS NOT NULL 
	AND t11.project <> '0' 
	AND t1.date <> '0000-00-00' 
GROUP BY
	t1.account,
	t1.date 
	) t1 GROUP BY t1.account, t1.`YEAR`,t1.`MONTH`) T1
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
t1.`DATE`,
t1.`EVALUATIONCOST`,
t1.`INPUTCOST`
FROM `zt_taskestimate` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [所有用户工时](#数据集合-所有用户工时（AllAccountEstimate）) | AllAccountEstimate | 否 |
| 2 | [数据集](#数据集合-数据集（Default）) | Default | 是 |

### 数据集合-所有用户工时（AllAccountEstimate）
#### 说明
所有用户工时

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [所有用户工时（AllAccountEstimate）](#数据查询-所有用户工时（AllAccountEstimate）) |
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

