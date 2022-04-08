
# 实体-产品汇总表(IBZ_PRODUCTSUM)
## 实体说明
产品汇总表

## 所属模块
[iBiz增强模块](../ibiz)

## 实体关系
### 1:N
无
### N:1
无


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [主键标识](#属性-主键标识（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 是 |
| 2 | [产品名称](#属性-产品名称（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [产品负责人](#属性-产品负责人（PO）) | PO | 单项选择(文本值) | 否 | 否 | 是 |
| 4 | [计划](#属性-计划（PLAN）) | PLAN | 大整型 | 否 | 否 | 是 |
| 5 | [开始日期](#属性-开始日期（BEGIN）) | BEGIN | 文本，可指定长度 | 否 | 否 | 是 |
| 6 | [结束日期](#属性-结束日期（END）) | END | 文本，可指定长度 | 否 | 否 | 是 |
| 7 | [草稿](#属性-草稿（WAITSTORYCNT）) | WAITSTORYCNT | 整型 | 否 | 否 | 是 |
| 8 | [激活](#属性-激活（ACTIVESTORYCNT）) | ACTIVESTORYCNT | 整型 | 否 | 否 | 是 |
| 9 | [已变更](#属性-已变更（CHANGEDSTORYCNT）) | CHANGEDSTORYCNT | 整型 | 否 | 否 | 是 |
| 10 | [已关闭](#属性-已关闭（CLOSEDSTORYCNT）) | CLOSEDSTORYCNT | 整型 | 否 | 否 | 是 |
| 11 | [总计](#属性-总计（STORYCNT）) | STORYCNT | 整型 | 否 | 否 | 是 |
| 12 | [Bug数](#属性-Bug数（BUGCNT）) | BUGCNT | 整型 | 否 | 否 | 是 |
| 13 | [未开始阶段需求数量](#属性-未开始阶段需求数量（WAITSTAGESTORYCNT）) | WAITSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 14 | [已计划阶段需求数量](#属性-已计划阶段需求数量（PLANEDSTAGESTORYCNT）) | PLANEDSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 15 | [已立项阶段需求数量](#属性-已立项阶段需求数量（PROJECTEDSTAGESTORYCNT）) | PROJECTEDSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 16 | [研发中阶段需求数量](#属性-研发中阶段需求数量（DEVELOPINGSTAGESTORYCNT）) | DEVELOPINGSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 17 | [研发完毕阶段需求数量](#属性-研发完毕阶段需求数量（DEVELOPEDSTAGESTORYCNT）) | DEVELOPEDSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 18 | [测试中阶段需求数量](#属性-测试中阶段需求数量（TESTINGSTAGESTORYCNT）) | TESTINGSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 19 | [测试完毕阶段需求数量](#属性-测试完毕阶段需求数量（TESTEDSTAGESTORYCNT）) | TESTEDSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 20 | [已验收阶段需求数量](#属性-已验收阶段需求数量（VERIFIEDSTAGESTORYCNT）) | VERIFIEDSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 21 | [已发布阶段需求数量](#属性-已发布阶段需求数量（RELEASEDSTAGESTORYCNT）) | RELEASEDSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 22 | [已关闭阶段需求数量](#属性-已关闭阶段需求数量（CLOSEDSTAGESTORYCNT）) | CLOSEDSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 23 | [未开始阶段需求工时](#属性-未开始阶段需求工时（WAITSTAGESTORYHOURS）) | WAITSTAGESTORYHOURS | 整型 | 否 | 否 | 是 |
| 24 | [已关闭阶段需求工时](#属性-已关闭阶段需求工时（CLOSEDSTAGESTORYHOURS）) | CLOSEDSTAGESTORYHOURS | 整型 | 否 | 否 | 是 |
| 25 | [已发布阶段需求工时](#属性-已发布阶段需求工时（RELEASEDSTAGESTORYHOURS）) | RELEASEDSTAGESTORYHOURS | 整型 | 否 | 否 | 是 |
| 26 | [已验收阶段需求工时](#属性-已验收阶段需求工时（VERIFIEDSTAGESTORYHOURS）) | VERIFIEDSTAGESTORYHOURS | 整型 | 否 | 否 | 是 |
| 27 | [测试完毕阶段需求工时](#属性-测试完毕阶段需求工时（TESTEDSTAGESTORYHOURS）) | TESTEDSTAGESTORYHOURS | 整型 | 否 | 否 | 是 |
| 28 | [测试中阶段需求工时](#属性-测试中阶段需求工时（TESTINGSTAGESTORYHOURS）) | TESTINGSTAGESTORYHOURS | 整型 | 否 | 否 | 是 |
| 29 | [研发完毕阶段需求工时](#属性-研发完毕阶段需求工时（DEVELOPEDSTAGESTORYHOURS）) | DEVELOPEDSTAGESTORYHOURS | 整型 | 否 | 否 | 是 |
| 30 | [研发中阶段需求工时](#属性-研发中阶段需求工时（DEVELOPINGSTAGESTORYHOURS）) | DEVELOPINGSTAGESTORYHOURS | 整型 | 否 | 否 | 是 |
| 31 | [已立项阶段需求工时](#属性-已立项阶段需求工时（PROJECTEDSTAGESTORYHOURS）) | PROJECTEDSTAGESTORYHOURS | 整型 | 否 | 否 | 是 |
| 32 | [已计划阶段需求工时](#属性-已计划阶段需求工时（PLANEDSTAGESTORYHOURS）) | PLANEDSTAGESTORYHOURS | 整型 | 否 | 否 | 是 |
| 33 | [总工时](#属性-总工时（TOTALHOURS）) | TOTALHOURS | 整型 | 否 | 否 | 是 |
| 34 | [代码错误](#属性-代码错误（CODEERROR）) | CODEERROR | 整型 | 否 | 否 | 是 |
| 35 | [配置相关](#属性-配置相关（CONFIG）) | CONFIG | 整型 | 否 | 否 | 是 |
| 36 | [安装部署](#属性-安装部署（INSTALL）) | INSTALL | 整型 | 否 | 否 | 是 |
| 37 | [安全相关](#属性-安全相关（SECURITY）) | SECURITY | 整型 | 否 | 否 | 是 |
| 38 | [性能问题](#属性-性能问题（PERFORMANCE）) | PERFORMANCE | 整型 | 否 | 否 | 是 |
| 39 | [标准规范](#属性-标准规范（STANDARD）) | STANDARD | 整型 | 否 | 否 | 是 |
| 40 | [测试脚本](#属性-测试脚本（AUTOMATION）) | AUTOMATION | 整型 | 否 | 否 | 是 |
| 41 | [设计缺陷](#属性-设计缺陷（DESIGNDEFECT）) | DESIGNDEFECT | 整型 | 否 | 否 | 是 |
| 42 | [其他](#属性-其他（OTHERS）) | OTHERS | 整型 | 否 | 否 | 是 |
| 43 | [bug总计](#属性-bug总计（BUGSUM）) | BUGSUM | 整型 | 否 | 否 | 是 |

### 属性-主键标识（ID）
#### 属性说明
主键标识

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
无

### 属性-产品名称（NAME）
#### 属性说明
产品名称

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
无

#### 关系属性
无

### 属性-产品负责人（PO）
#### 属性说明
产品负责人

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
无

### 属性-计划（PLAN）
#### 属性说明
计划

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
大整型

- Java类型
Long

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[计划（动态）（PlanCodeList）](../../codelist/PlanCodeList)】

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

### 属性-开始日期（BEGIN）
#### 属性说明
开始日期

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

### 属性-结束日期（END）
#### 属性说明
结束日期

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

### 属性-草稿（WAITSTORYCNT）
#### 属性说明
草稿

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
无

### 属性-激活（ACTIVESTORYCNT）
#### 属性说明
激活

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
无

### 属性-已变更（CHANGEDSTORYCNT）
#### 属性说明
已变更

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
无

### 属性-已关闭（CLOSEDSTORYCNT）
#### 属性说明
已关闭

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
无

### 属性-总计（STORYCNT）
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
无

### 属性-Bug数（BUGCNT）
#### 属性说明
Bug数

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
无

### 属性-未开始阶段需求数量（WAITSTAGESTORYCNT）
#### 属性说明
未开始阶段需求数量

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
无

### 属性-已计划阶段需求数量（PLANEDSTAGESTORYCNT）
#### 属性说明
已计划阶段需求数量

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
无

### 属性-已立项阶段需求数量（PROJECTEDSTAGESTORYCNT）
#### 属性说明
已立项阶段需求数量

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
无

### 属性-研发中阶段需求数量（DEVELOPINGSTAGESTORYCNT）
#### 属性说明
研发中阶段需求数量

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
无

### 属性-研发完毕阶段需求数量（DEVELOPEDSTAGESTORYCNT）
#### 属性说明
研发完毕阶段需求数量

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
无

### 属性-测试中阶段需求数量（TESTINGSTAGESTORYCNT）
#### 属性说明
测试中阶段需求数量

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
无

### 属性-测试完毕阶段需求数量（TESTEDSTAGESTORYCNT）
#### 属性说明
测试完毕阶段需求数量

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
无

### 属性-已验收阶段需求数量（VERIFIEDSTAGESTORYCNT）
#### 属性说明
已验收阶段需求数量

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
无

### 属性-已发布阶段需求数量（RELEASEDSTAGESTORYCNT）
#### 属性说明
已发布阶段需求数量

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
无

### 属性-已关闭阶段需求数量（CLOSEDSTAGESTORYCNT）
#### 属性说明
已关闭阶段需求数量

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
无

### 属性-未开始阶段需求工时（WAITSTAGESTORYHOURS）
#### 属性说明
未开始阶段需求工时

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
无

### 属性-已关闭阶段需求工时（CLOSEDSTAGESTORYHOURS）
#### 属性说明
已关闭阶段需求工时

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
无

### 属性-已发布阶段需求工时（RELEASEDSTAGESTORYHOURS）
#### 属性说明
已发布阶段需求工时

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
无

### 属性-已验收阶段需求工时（VERIFIEDSTAGESTORYHOURS）
#### 属性说明
已验收阶段需求工时

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
无

### 属性-测试完毕阶段需求工时（TESTEDSTAGESTORYHOURS）
#### 属性说明
测试完毕阶段需求工时

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
无

### 属性-测试中阶段需求工时（TESTINGSTAGESTORYHOURS）
#### 属性说明
测试中阶段需求工时

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
无

### 属性-研发完毕阶段需求工时（DEVELOPEDSTAGESTORYHOURS）
#### 属性说明
研发完毕阶段需求工时

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
无

### 属性-研发中阶段需求工时（DEVELOPINGSTAGESTORYHOURS）
#### 属性说明
研发中阶段需求工时

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
无

### 属性-已立项阶段需求工时（PROJECTEDSTAGESTORYHOURS）
#### 属性说明
已立项阶段需求工时

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
无

### 属性-已计划阶段需求工时（PLANEDSTAGESTORYHOURS）
#### 属性说明
已计划阶段需求工时

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
无

### 属性-总工时（TOTALHOURS）
#### 属性说明
总工时

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
无

### 属性-代码错误（CODEERROR）
#### 属性说明
代码错误

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
无

### 属性-配置相关（CONFIG）
#### 属性说明
配置相关

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
无

### 属性-安装部署（INSTALL）
#### 属性说明
安装部署

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
无

### 属性-安全相关（SECURITY）
#### 属性说明
安全相关

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
无

### 属性-性能问题（PERFORMANCE）
#### 属性说明
性能问题

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
无

### 属性-标准规范（STANDARD）
#### 属性说明
标准规范

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
无

### 属性-测试脚本（AUTOMATION）
#### 属性说明
测试脚本

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
无

### 属性-设计缺陷（DESIGNDEFECT）
#### 属性说明
设计缺陷

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
无

### 属性-其他（OTHERS）
#### 属性说明
其他

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
无

### 属性-bug总计（BUGSUM）
#### 属性说明
bug总计

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
| 序号 | 属性 |
| ---- | ---- |
| 1 | [产品名称（NAME）](#属性-产品名称（NAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [主键标识（ID）](#属性-主键标识（ID）) | `=` |
| 2 | [产品负责人（PO）](#属性-产品负责人（PO）) | `=` |
| 3 | [计划（PLAN）](#属性-计划（PLAN）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 2 | [产品创建bug数_测试人员](#数据查询-产品创建bug数_测试人员（ProductBugcnt_QA）) | ProductBugcnt_QA | 否 |
| 3 | [产品创建需求占比](#数据查询-产品创建需求占比（ProductCreateStory）) | ProductCreateStory | 否 |
| 4 | [产品计划数和需求数_产品经理](#数据查询-产品计划数和需求数_产品经理（ProductPlancntAndStorycnt_PO）) | ProductPlancntAndStorycnt_PO | 否 |
| 5 | [产品需求工时汇总](#数据查询-产品需求工时汇总（ProductStoryHoursSum）) | ProductStoryHoursSum | 否 |
| 6 | [产品需求汇总查询](#数据查询-产品需求汇总查询（ProductStorySum）) | ProductStorySum | 否 |
| 7 | [产品Bug类型统计](#数据查询-产品Bug类型统计（ProductSumBugType）) | ProductSumBugType | 否 |
| 8 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
select t1.*  from(select 
t1.id,t1.`NAME`,t1.po,t1.PLAN, case when t1.`begin` = '2030-01-01' then '待定' else t1.`begin` end as `begin`,case when t1.`end` = '2030-01-01' then '待定' else t1.`end` end as `end`,
	sum( IF ( t1.`status` = 'draft', t1.rowcnt, 0 ) ) AS WAITSTORYCNT,
	SUM( IF ( t1.`status` = 'active', t1.rowcnt, 0 ) ) AS ACTIVESTORYCNT,
	SUM( IF ( t1.`status` = 'changed', t1.rowcnt, 0 ) ) AS CHANGEDSTORYCNT,
	SUM( IF ( t1.`status` = 'closed', t1.rowcnt, 0 ) ) AS CLOSEDSTORYCNT,
	sum( IF ( t1.`deleted` = '0',  t1.rowcnt, 0) ) AS STORYCNT 
FROM
	(
	SELECT
		1 AS rowcnt,
	t41.id as plan,
		t31.`NAME` AS `NAME`,
		t31.id AS id,
		t1.`status`,
		t31.po,
		t41.`begin`,
		t41.`end` ,
		t1.deleted
	FROM
		zt_product t31
		LEFT JOIN ZT_PRODUCTPLAN t41 ON t41.PRODUCT = t31.ID
		LEFT JOIN  `zt_story` t1  ON t41.id = t1.plan 
where t31.deleted = '0' and  (
			( ( t31.`status` = 'normal' ) OR ( t31.`status` = 'closed' AND #{srf.datacontext.closed} = '1' ) ) 
			and ( t41.id is null or
				( t41.`end` >= now( ) ) 
				OR ( t41.`end` <= now( ) AND #{srf.datacontext.expired} = '1' ) 
			) 
		)
) t1 GROUP BY t1.id,t1.`NAME`,t1.po,t1.PLAN,t1.`begin`,t1.`end`) t1
```
### 数据查询-产品创建bug数_测试人员（ProductBugcnt_QA）
#### 说明
产品创建bug数_测试人员

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.productid as id,t1.productname as `name`,t1.createbugcnt as bugcnt,t1.createbugcnt as storycnt,t2.productallbug, CONCAT(ROUND(t1.createbugcnt/(case when t2.productallbug = 0 or t2.productallbug is null then 1 else t2.productallbug end)*100,1),'%') as zhanbi, t1.openedBy from (
SELECT t1.openedBy,t1.productid,t1.productname,COUNT(1) as createbugcnt from (
SELECT t1.id ,t1.openedBy,t2.id as productid,t1.product,t2.`name` as productname from zt_bug t1
LEFT JOIN zt_product t2 on t2.id = t1.product where YEAR(t2.createdDate) = #{srf.webcontext.curyear}
) t1 GROUP BY t1.openedBy,t1.productid  )t1
LEFT JOIN ( select t1.productid,t1.productname,count(1) as productallbug from (
SELECT t1.id ,t1.openedBy,t2.id as productid,t1.product,t2.`name` as productname from zt_bug t1
LEFT JOIN zt_product t2 on t2.id = t1.product
) t1 GROUP BY t1.productid ) t2 on t2.productid = t1.productid HAVING t1.openedBy = 
 #{srf.sessioncontext.srfloginname}
```
### 数据查询-产品创建需求占比（ProductCreateStory）
#### 说明
产品创建需求占比

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
	SELECT
0 AS `ACTIVESTORYCNT`,
0 AS `CHANGEDSTORYCNT`,
0 AS `CLOSEDSTORYCNT`,
t1.`ID`,
t1.`NAME`,
0 AS `PLAN`,
t1.`PO`,
t2.storycnt AS `STORYCNT`,
0 AS `WAITSTORYCNT`,
t2.zhanbi
FROM `zt_product` t1

INNER JOIN (
SELECT t1.*,IFNULL(t2.storycnt,0) as storycnt,IFNULL(t2.allstorycnt,0) as allstorycnt,IFNULL(t2.zhanbi,0) as zhanbi from (
SELECT t1.id,t1.`name`,t1.`status` from zt_product t1 where t1.id in (SELECT t1.id from zt_product t1 where YEAR(t1.createddate) =   #{srf.webcontext.curyear} 
and (t1.createdBy =  #{srf.sessioncontext.srfloginname} 
or t1.po =  #{srf.sessioncontext.srfloginname} 
or t1.QD =  #{srf.sessioncontext.srfloginname} 
or t1.RD =  #{srf.sessioncontext.srfloginname} )) 
or t1.id in (SELECT DISTINCT t1.product from zt_story t1 where t1.openedBy =  #{srf.sessioncontext.srfloginname} 
and YEAR(t1.openeddate) =   #{srf.webcontext.curyear}) 
or t1.id in (SELECT DISTINCT t1.product from zt_productplan t1 LEFT JOIN zt_action t2 on t1.id = t2.OBJECTID and t2.objectType = 'productplan' where YEAR(t2.date) =   #{srf.webcontext.curyear} 
and t2.actor =  #{srf.sessioncontext.srfloginname} 
and t2.action = 'opened' ) ) t1

LEFT JOIN (
select t1.*,t2.allstorycnt , CONCAT(ROUND(t1.storycnt/(case when t2.allstorycnt = 0 or t2.allstorycnt is null then 1 else t2.allstorycnt end)*100,1),'%') as zhanbi from
(SELECT t1.openedBy,t1.productid,t1.productname,COUNT(1) as storycnt from (
SELECT t1.id,t1.openedBy,t2.id as productid ,t2.`name` as productname from zt_story t1 LEFT JOIN zt_product t2 on t2.id = t1.product) t1 GROUP BY t1.openedBy,t1.productid ) t1
LEFT JOIN (select t1.productid,t1.productname,COUNT(1) as allstorycnt from (
SELECT t1.id,t1.openedBy,t2.id as productid ,t2.`name` as productname from zt_story t1 LEFT JOIN zt_product t2 on t2.id = t1.product ) t1 GROUP BY t1.productid) t2 on t2.productid = t1.productid

having t1.openedBy =  #{srf.sessioncontext.srfloginname}
) t2 on t1.id = t2.productid
) t2 on t1.id = t2.id
```
### 数据查询-产品计划数和需求数_产品经理（ProductPlancntAndStorycnt_PO）
#### 说明
产品计划数和需求数_产品经理

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT 0 AS `ACTIVESTORYCNT`, 0 AS `CHANGEDSTORYCNT`, 0 AS `CLOSEDSTORYCNT`, t1.`ID`, t1.`NAME`, t2.plan AS `PLAN`, t1.`PO`, t2.storycnt AS `STORYCNT`, t2.plan AS `WAITSTORYCNT`, t2.zhanbi FROM `zt_product` t1 INNER JOIN ( SELECT t1.*,IFNULL(t2.storycnt,0) as storycnt,IFNULL(t2.allstorycnt,0) as allstorycnt,IFNULL(t2.zhanbi,0) as zhanbi,IFNULL(t3.plancnt,0) as plan from ( SELECT t1.id,t1.`name`,t1.`status` from zt_product t1 where t1.id in (SELECT t1.id from zt_product t1 where YEAR(t1.createddate) =   #{srf.webcontext.curyear}  and (t1.createdBy = #{srf.sessioncontext.srfloginname} or t1.po = #{srf.sessioncontext.srfloginname} or t1.QD = #{srf.sessioncontext.srfloginname} or t1.RD = #{srf.sessioncontext.srfloginname} )) or t1.id in (SELECT DISTINCT t1.product from zt_story t1 where t1.openedBy = #{srf.sessioncontext.srfloginname} and YEAR(t1.openeddate) =   #{srf.webcontext.curyear} ) or t1.id in (SELECT DISTINCT t1.product from zt_productplan t1 LEFT JOIN zt_action t2 on t1.id = t2.OBJECTID and t2.objectType = 'productplan' where YEAR(t2.date) =   
#{srf.webcontext.curyear}  and t2.actor = #{srf.sessioncontext.srfloginname} and t2.action = 'opened' ) ) t1 LEFT JOIN ( select t1.*,t2.allstorycnt , CONCAT(ROUND(t1.storycnt/(case when t2.allstorycnt = 0 or t2.allstorycnt is null then 1 else t2.allstorycnt end)*100,1),'%') as zhanbi from (SELECT t1.openedBy,t1.productid,t1.productname,COUNT(1) as storycnt from ( SELECT t1.id,t1.openedBy,t2.id as productid ,t2.`name` as productname from zt_story t1 LEFT JOIN zt_product t2 on t2.id = t1.product) t1 GROUP BY t1.openedBy,t1.productid ) t1 LEFT JOIN (select t1.productid,t1.productname,COUNT(1) as allstorycnt from ( SELECT t1.id,t1.openedBy,t2.id as productid ,t2.`name` as productname from zt_story t1 LEFT JOIN zt_product t2 on t2.id = t1.product ) t1 GROUP BY t1.productid) t2 on t2.productid = t1.productid having t1.openedBy = #{srf.sessioncontext.srfloginname} ) t2 on t1.id = t2.productid LEFT JOIN ( SELECT t1.productid,t1.productname,count(1) as plancnt from ( select t1.id,t2.id as productid,t2.`name` as productname from zt_productplan t1 LEFT JOIN zt_product t2 on t2.id = t1.product where t1.parent >= 0 and t1.`begin` >= (CONCAT( YEAR(NOW()),'-01-01',' 00:00:00')) and t1.`end` <= (CONCAT( YEAR(NOW()),'-12-31',' 23:59:59')) and t1.parent >= '0' ) t1 GROUP BY t1.productid ) t3 on t3.productid = t1.id ) t2 on t2.id = t1.id
```
### 数据查询-产品需求工时汇总（ProductStoryHoursSum）
#### 说明
产品需求工时汇总

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.`id`, t1.`name`, t1.`po`, 
sum( IF ( t1.`stage` = 'closed' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`estimate`, 0 ) ) AS `CLOSEDSTAGESTORYHOURS`, 
sum( IF ( t1.`stage` = 'released' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`estimate`, 0 ) ) AS `RELEASEDSTAGESTORYHOURS`, 
sum( IF ( t1.`stage` = 'verified' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`estimate`, 0 ) ) AS `VERIFIEDSTAGESTORYHOURS`, 
sum( IF ( t1.`stage` = 'tested' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`estimate`, 0 ) ) AS `TESTEDSTAGESTORYHOURS`, 
sum( IF ( t1.`stage` = 'testing' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`estimate`, 0 ) ) AS `TESTINGSTAGESTORYHOURS`, 
sum( IF ( t1.`stage` = 'developed' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`estimate`, 0 ) ) AS `DEVELOPEDSTAGESTORYHOURS`, 
sum( IF ( t1.`stage` = 'developing' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`estimate`, 0 ) ) AS `DEVELOPINGSTAGESTORYHOURS`, 
sum( IF ( t1.`stage` = 'projected' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`estimate`, 0 ) ) AS `PROJECTEDSTAGESTORYHOURS`, 
sum( IF ( t1.`stage` = 'planed' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`estimate`, 0 ) ) AS `PLANEDSTAGESTORYHOURS`, 
sum( IF ( t1.`stage` = 'wait' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`estimate`, 0 ) ) AS `WAITSTAGESTORYHOURS`, 
sum( IF ( t1.`deleted` = '0' and t1.`parent` <> -1, t1.`estimate`, 0 ) ) AS `TOTALHOURS` 
from (select t1.`id`, t1.`name`, t1.`po`, t1.`status`, t2.`parent`, t2.`stage`, t2.`estimate`, t2.`deleted` from zt_product t1 left join zt_story t2 on t1.`id` = t2.`product` where t1.`deleted`= '0') t1
where t1.`status` = 'normal' or (t1.`status` = 'closed' and #{srf.datacontext.closed} = '1')
group by t1.`id`
```
### 数据查询-产品需求汇总查询（ProductStorySum）
#### 说明
产品需求汇总查询

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.`id`, t1.`name`, t1.`po`, 
sum( IF ( t1.`stage` = 'closed' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`rowcnt`, 0 ) ) AS `CLOSEDSTAGESTORYCNT`, 
sum( IF ( t1.`stage` = 'released' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`rowcnt`, 0 ) ) AS `RELEASEDSTAGESTORYCNT`, 
sum( IF ( t1.`stage` = 'verified' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`rowcnt`, 0 ) ) AS `VERIFIEDSTAGESTORYCNT`, 
sum( IF ( t1.`stage` = 'tested' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`rowcnt`, 0 ) ) AS `TESTEDSTAGESTORYCNT`, 
sum( IF ( t1.`stage` = 'testing' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`rowcnt`, 0 ) ) AS `TESTINGSTAGESTORYCNT`, 
sum( IF ( t1.`stage` = 'developed' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`rowcnt`, 0 ) ) AS `DEVELOPEDSTAGESTORYCNT`, 
sum( IF ( t1.`stage` = 'developing' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`rowcnt`, 0 ) ) AS `DEVELOPINGSTAGESTORYCNT`, 
sum( IF ( t1.`stage` = 'projected' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`rowcnt`, 0 ) ) AS `PROJECTEDSTAGESTORYCNT`, 
sum( IF ( t1.`stage` = 'planed' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`rowcnt`, 0 ) ) AS `PLANEDSTAGESTORYCNT`, 
sum( IF ( t1.`stage` = 'wait' and t1.`parent` <> -1 and t1.`deleted` = '0', t1.`rowcnt`, 0 ) ) AS `WAITSTAGESTORYCNT`, 
sum( IF ( t1.`deleted` = '0' and t1.`parent` <> -1, t1.`rowcnt`, 0 ) ) AS `STORYCNT` 
from (select t1.`id`, t1.`name`, t1.`po`, t1.`status`, t2.`parent`, t2.`stage`, t2.`deleted`, 1 as `rowcnt` from zt_product t1 left join zt_story t2 on t1.`id` = t2.`product` where t1.`deleted` = '0') t1 
where t1.`status` = 'normal' or (t1.`status` = 'closed' and #{srf.datacontext.closed} = '1')
group by t1.`id`
```
### 数据查询-产品Bug类型统计（ProductSumBugType）
#### 说明
产品Bug类型统计

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.*,
	SUM(
	IFNULL(t1.codeerror,0)  + IFNULL(t1.config,0) + IFNULL(t1.designdefect,0) +IFNULL(t1.standard,0)  + IFNULL(t1.performance,0) + IFNULL(t1.others,0) +IFNULL(t1.INSTALL,0)  + IFNULL(t1.automation,0) +IFNULL(t1.SECURITY ,0)
	) AS bugsum 
FROM
	(
SELECT
	t1.id,
	t1.NAME,
	t1.po,
	sum( IF ( t1.type = 'codeerror' AND t1.deleted = '0', t1.rowcnt, 0 ) ) AS 'codeerror',
	sum( IF ( t1.type = 'config' AND t1.deleted = '0', t1.rowcnt, 0 ) ) AS 'config',
	sum( IF ( t1.type = 'designdefect' AND t1.deleted = '0', t1.rowcnt, 0 ) ) AS 'designdefect',
	sum( IF ( t1.type = 'standard' AND t1.deleted = '0', t1.rowcnt, 0 ) ) AS 'standard',
	sum( IF ( t1.type = 'performance' AND t1.deleted = '0', t1.rowcnt, 0 ) ) AS 'performance',
	sum( IF ( t1.type = 'others' AND t1.deleted = '0', t1.rowcnt, 0 ) ) AS 'others',
	sum( IF ( t1.type = 'install' AND t1.deleted = '0', t1.rowcnt, 0 ) ) AS 'install',
	sum( IF ( t1.type = 'automation' AND t1.deleted = '0', t1.rowcnt, 0 ) ) AS 'automation',
	sum( IF ( t1.type = 'security' AND t1.deleted = '0', t1.rowcnt, 0 ) ) AS 'security' 
FROM
	(
SELECT
	t1.`id`,
	t1.`name`,
	t1.`po`,
	t1.`status`,
	t2.`type`,
	t2.`title`,
	t2.`deleted`,
	1 AS `rowcnt` 
FROM
	zt_product t1
	LEFT JOIN zt_bug t2 ON t1.`id` = t2.`product` 
WHERE
	t1.`deleted` = '0' 
	) t1 
WHERE
	t1.`status` = 'normal' 
	OR ( t1.`status` = 'closed' AND #{srf.datacontext.closed} = '1' ) 
GROUP BY
	t1.id 
	) t1 
GROUP BY
	t1.id
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
0 AS `ACTIVESTORYCNT`,
0 AS `BUGCNT`,
0 AS `CHANGEDSTORYCNT`,
0 AS `CLOSEDSTAGESTORYCNT`,
0 AS `CLOSEDSTAGESTORYHOURS`,
0 AS `CLOSEDSTORYCNT`,
0 AS `DEVELOPEDSTAGESTORYCNT`,
0 AS `DEVELOPEDSTAGESTORYHOURS`,
0 AS `DEVELOPINGSTAGESTORYCNT`,
0 AS `DEVELOPINGSTAGESTORYHOURS`,
t1.`ID`,
t1.`NAME`,
0 AS `PLAN`,
0 AS `PLANEDSTAGESTORYCNT`,
0 AS `PLANEDSTAGESTORYHOURS`,
t1.`PO`,
0 AS `PROJECTEDSTAGESTORYCNT`,
0 AS `PROJECTEDSTAGESTORYHOURS`,
0 AS `RELEASEDSTAGESTORYCNT`,
0 AS `RELEASEDSTAGESTORYHOURS`,
0 AS `STORYCNT`,
0 AS `TESTEDSTAGESTORYCNT`,
0 AS `TESTEDSTAGESTORYHOURS`,
0 AS `TESTINGSTAGESTORYCNT`,
0 AS `TESTINGSTAGESTORYHOURS`,
0 AS `TOTALHOURS`,
0 AS `VERIFIEDSTAGESTORYCNT`,
0 AS `VERIFIEDSTAGESTORYHOURS`,
0 AS `WAITSTAGESTORYCNT`,
0 AS `WAITSTAGESTORYHOURS`,
0 AS `WAITSTORYCNT`
FROM `zt_product` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据集](#数据集合-数据集（Default）) | Default | 是 |
| 2 | [产品创建bug数及占比](#数据集合-产品创建bug数及占比（ProductBugcnt_QA）) | ProductBugcnt_QA | 否 |
| 3 | [产品创建需求占比](#数据集合-产品创建需求占比（ProductCreateStory）) | ProductCreateStory | 否 |
| 4 | [产品需求工时汇总](#数据集合-产品需求工时汇总（ProductStoryHoursSum）) | ProductStoryHoursSum | 否 |
| 5 | [产品需求汇总查询](#数据集合-产品需求汇总查询（ProductStorySum）) | ProductStorySum | 否 |
| 6 | [产品计划数和需求数](#数据集合-产品计划数和需求数（ProductStorycntAndPlancnt）) | ProductStorycntAndPlancnt | 否 |
| 7 | [产品Bug类型统计](#数据集合-产品Bug类型统计（ProductSumBugType）) | ProductSumBugType | 否 |

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
### 数据集合-产品创建bug数及占比（ProductBugcnt_QA）
#### 说明
产品创建bug数及占比

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品创建bug数_测试人员（ProductBugcnt_QA）](#数据查询-产品创建bug数_测试人员（ProductBugcnt_QA）) |
### 数据集合-产品创建需求占比（ProductCreateStory）
#### 说明
产品创建需求占比

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品创建需求占比（ProductCreateStory）](#数据查询-产品创建需求占比（ProductCreateStory）) |
### 数据集合-产品需求工时汇总（ProductStoryHoursSum）
#### 说明
产品需求工时汇总

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品需求工时汇总（ProductStoryHoursSum）](#数据查询-产品需求工时汇总（ProductStoryHoursSum）) |
### 数据集合-产品需求汇总查询（ProductStorySum）
#### 说明
产品需求汇总查询

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品需求汇总查询（ProductStorySum）](#数据查询-产品需求汇总查询（ProductStorySum）) |
### 数据集合-产品计划数和需求数（ProductStorycntAndPlancnt）
#### 说明
产品计划数和需求数

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品计划数和需求数_产品经理（ProductPlancntAndStorycnt_PO）](#数据查询-产品计划数和需求数_产品经理（ProductPlancntAndStorycnt_PO）) |
### 数据集合-产品Bug类型统计（ProductSumBugType）
#### 说明
产品Bug类型统计

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品Bug类型统计（ProductSumBugType）](#数据查询-产品Bug类型统计（ProductSumBugType）) |

## 数据导入
无

## 数据导出
无

