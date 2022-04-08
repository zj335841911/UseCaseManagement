
# 实体-产品统计(IBZ_PRODUCTSTATS)
## 实体说明
产品统计

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
| 1 | [产品编号](#属性-产品编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 2 | [已删除](#属性-已删除（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [需求总数](#属性-需求总数（STORYCNT）) | STORYCNT | 整型 | 否 | 否 | 是 |
| 4 | [计划总数](#属性-计划总数（PRODUCTPLANCNT）) | PRODUCTPLANCNT | 整型 | 否 | 否 | 是 |
| 5 | [发布总数](#属性-发布总数（RELEASECNT）) | RELEASECNT | 整型 | 否 | 否 | 是 |
| 6 | [未开始需求数](#属性-未开始需求数（WAITSTORYCNT）) | WAITSTORYCNT | 整型 | 否 | 否 | 是 |
| 7 | [已计划需求数](#属性-已计划需求数（PLANNEDSTORYCNT）) | PLANNEDSTORYCNT | 整型 | 否 | 否 | 是 |
| 8 | [开发中需求数](#属性-开发中需求数（DEVELOPINGSTORYCNT）) | DEVELOPINGSTORYCNT | 整型 | 否 | 否 | 是 |
| 9 | [测试中需求数](#属性-测试中需求数（TESTINGSTORYCNT）) | TESTINGSTORYCNT | 整型 | 否 | 否 | 是 |
| 10 | [已发布需求数](#属性-已发布需求数（RELEASEDSTORYCNT）) | RELEASEDSTORYCNT | 整型 | 否 | 否 | 是 |
| 11 | [未过期计划数](#属性-未过期计划数（UNENDPRODUCTPLANCNT）) | UNENDPRODUCTPLANCNT | 整型 | 否 | 否 | 是 |
| 12 | [关联项目数](#属性-关联项目数（RESPROJECTCNT）) | RESPROJECTCNT | 整型 | 否 | 否 | 是 |
| 13 | [未完成关联项目数](#属性-未完成关联项目数（UNDONERESPROJECTCNT）) | UNDONERESPROJECTCNT | 整型 | 否 | 否 | 是 |
| 14 | [维护中发布数](#属性-维护中发布数（NORMALRELEASECNT）) | NORMALRELEASECNT | 整型 | 否 | 否 | 是 |
| 15 | [激活需求数](#属性-激活需求数（ACTIVESTORYCNT）) | ACTIVESTORYCNT | 整型 | 否 | 否 | 是 |
| 16 | [未解决Bug数](#属性-未解决Bug数（ACTIVEBUGCNT）) | ACTIVEBUGCNT | 整型 | 否 | 否 | 是 |
| 17 | [产品名称](#属性-产品名称（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 否 |
| 18 | [指派给我的Bug数](#属性-指派给我的Bug数（ASSIGNTOMEBUGCNT）) | ASSIGNTOMEBUGCNT | 整型 | 否 | 否 | 是 |
| 19 | [未关闭Bug数](#属性-未关闭Bug数（NOTCLOSEDBUGCNT）) | NOTCLOSEDBUGCNT | 整型 | 否 | 否 | 是 |
| 20 | [所有Bug数](#属性-所有Bug数（BUGCNT）) | BUGCNT | 整型 | 否 | 否 | 是 |
| 21 | [未确认Bug数](#属性-未确认Bug数（UNCONFIRMBUGCNT）) | UNCONFIRMBUGCNT | 整型 | 否 | 否 | 是 |
| 22 | [昨天关闭Bug数](#属性-昨天关闭Bug数（YESTERDAYCLOSEDBUGCNT）) | YESTERDAYCLOSEDBUGCNT | 整型 | 否 | 否 | 是 |
| 23 | [昨天确认Bug数](#属性-昨天确认Bug数（YESTERDAYCONFIRMBUGCNT）) | YESTERDAYCONFIRMBUGCNT | 整型 | 否 | 否 | 是 |
| 24 | [昨天解决Bug数](#属性-昨天解决Bug数（YESTERDAYRESOLVEDBUGCNT）) | YESTERDAYRESOLVEDBUGCNT | 整型 | 否 | 否 | 是 |
| 25 | [已延期](#属性-已延期（POSTPONEDPROJECTCNT）) | POSTPONEDPROJECTCNT | 整型 | 否 | 否 | 是 |
| 26 | [当前项目](#属性-当前项目（CURRPROJECT）) | CURRPROJECT | 文本，可指定长度 | 否 | 否 | 是 |
| 27 | [状态](#属性-状态（STATUS）) | STATUS | 单项选择(文本值) | 否 | 否 | 是 |
| 28 | [产品代号](#属性-产品代号（CODE）) | CODE | 文本，可指定长度 | 否 | 否 | 是 |
| 29 | [产品类型](#属性-产品类型（TYPE）) | TYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 30 | [产品排序](#属性-产品排序（ORDER1）) | ORDER1 | 整型 | 否 | 否 | 是 |
| 31 | [是否置顶](#属性-是否置顶（ISTOP）) | ISTOP | 整型 | 否 | 否 | 是 |
| 32 | [已完成的需求数](#属性-已完成的需求数（FINISHEDSTORYCNT）) | FINISHEDSTORYCNT | 整型 | 否 | 否 | 是 |
| 33 | [解决Bug数](#属性-解决Bug数（RESOLVEDBUGCNT）) | RESOLVEDBUGCNT | 整型 | 否 | 否 | 是 |
| 34 | [重要的Bug数](#属性-重要的Bug数（IMPORTANTBUGCNT）) | IMPORTANTBUGCNT | 整型 | 否 | 否 | 是 |
| 35 | [需求所提bug数](#属性-需求所提bug数（BUGSTORY）) | BUGSTORY | 整型 | 否 | 否 | 是 |
| 36 | [严重bug比](#属性-严重bug比（IMPORTANTBUGPERCENT）) | IMPORTANTBUGPERCENT | 文本，可指定长度 | 否 | 否 | 是 |
| 37 | [已消耗工时](#属性-已消耗工时（HAVECONSUMED）) | HAVECONSUMED | 浮点 | 否 | 否 | 是 |

### 属性-产品编号（ID）
#### 属性说明
产品编号

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
无

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
无

### 属性-需求总数（STORYCNT）
#### 属性说明
需求总数

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-计划总数（PRODUCTPLANCNT）
#### 属性说明
计划总数

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
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= %1$s AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-发布总数（RELEASECNT）
#### 属性说明
发布总数

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
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= %1$s AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-未开始需求数（WAITSTORYCNT）
#### 属性说明
未开始需求数

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND STAGE = 'wait' AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-已计划需求数（PLANNEDSTORYCNT）
#### 属性说明
已计划需求数

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND STAGE = 'planned' AND DELETED ='0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-开发中需求数（DEVELOPINGSTORYCNT）
#### 属性说明
开发中需求数

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND STAGE = 'developing' AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-测试中需求数（TESTINGSTORYCNT）
#### 属性说明
测试中需求数

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND STAGE = 'testing' AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-已发布需求数（RELEASEDSTORYCNT）
#### 属性说明
已发布需求数

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND STAGE = 'released' AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-未过期计划数（UNENDPRODUCTPLANCNT）
#### 属性说明
未过期计划数

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
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= %1$s  AND `END` > CURDATE() AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-关联项目数（RESPROJECTCNT）
#### 属性说明
关联项目数

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
(SELECT COUNT(1) FROM ZT_PROJECT LEFT JOIN ZT_PROJECTPRODUCT ON  ZT_PROJECT.ID = ZT_PROJECTPRODUCT.project WHERE PRODUCT = %1$s AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-未完成关联项目数（UNDONERESPROJECTCNT）
#### 属性说明
未完成关联项目数

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
(SELECT COUNT(1) FROM ZT_PROJECT LEFT JOIN ZT_PROJECTPRODUCT ON  ZT_PROJECT.ID = ZT_PROJECTPRODUCT.project WHERE PRODUCT = %1$s AND `STATUS` <> 'closed' AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-维护中发布数（NORMALRELEASECNT）
#### 属性说明
维护中发布数

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
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= %1$s AND  `STATUS`= 'normal' AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-激活需求数（ACTIVESTORYCNT）
#### 属性说明
激活需求数

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND `STATUS`='active' AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-未解决Bug数（ACTIVEBUGCNT）
#### 属性说明
未解决Bug数

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = %1$s AND `STATUS` = 'active' AND DELETED ='0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

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
无

### 属性-指派给我的Bug数（ASSIGNTOMEBUGCNT）
#### 属性说明
指派给我的Bug数

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
1
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-未关闭Bug数（NOTCLOSEDBUGCNT）
#### 属性说明
未关闭Bug数

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = %1$s AND `STATUS` <> 'closed' AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-所有Bug数（BUGCNT）
#### 属性说明
所有Bug数

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = %1$s AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-未确认Bug数（UNCONFIRMBUGCNT）
#### 属性说明
未确认Bug数

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = %1$s AND `CONFIRMED` = 0 AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-昨天关闭Bug数（YESTERDAYCLOSEDBUGCNT）
#### 属性说明
昨天关闭Bug数

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
(SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID`  AND DELETED = '0' and resolvedDate BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59'))
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-昨天确认Bug数（YESTERDAYCONFIRMBUGCNT）
#### 属性说明
昨天确认Bug数

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
5
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-昨天解决Bug数（YESTERDAYRESOLVEDBUGCNT）
#### 属性说明
昨天解决Bug数

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
(SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'closed' AND DELETED = '0' and CLOSEDDATE BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59'))
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-已延期（POSTPONEDPROJECTCNT）
#### 属性说明
已延期

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
(SELECT COUNT(1) FROM ZT_PROJECT t2 LEFT JOIN ZT_PROJECTPRODUCT t ON t2.ID = t.project WHERE t.PRODUCT = t1.id AND t2.DELETED = '0' and t2.`status` in( 'wait','doing') and t2.`END` < now() )
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-当前项目（CURRPROJECT）
#### 属性说明
当前项目

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
(SELECT t.name FROM zt_project t,zt_projectproduct t2 WHERE t.id=t2.project and t2.product = t1.id limit 1)
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

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
参照数据字典【[产品状态（Product__status）](../../codelist/Product__status)】

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

### 属性-产品代号（CODE）
#### 属性说明
产品代号

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
无

### 属性-产品类型（TYPE）
#### 属性说明
产品类型

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
参照数据字典【[产品类型（Product__type）](../../codelist/Product__type)】

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

### 属性-产品排序（ORDER1）
#### 属性说明
产品排序

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
t1.`order`
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-是否置顶（ISTOP）
#### 属性说明
是否置顶

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

### 属性-已完成的需求数（FINISHEDSTORYCNT）
#### 属性说明
已完成的需求数

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

### 属性-解决Bug数（RESOLVEDBUGCNT）
#### 属性说明
解决Bug数

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

### 属性-重要的Bug数（IMPORTANTBUGCNT）
#### 属性说明
重要的Bug数

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

### 属性-需求所提bug数（BUGSTORY）
#### 属性说明
需求所提bug数

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

### 属性-严重bug比（IMPORTANTBUGPERCENT）
#### 属性说明
严重bug比

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

### 属性-已消耗工时（HAVECONSUMED）
#### 属性说明
已消耗工时

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
| 7 | [获取测试统计详情](#实体行为-获取测试统计详情（GetTestStats）) | GetTestStats | 内置方法 | 后台及前台 |
| 8 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |

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
| 1 | [获取当前用户的Bug数<br>（GetCurUserBugCnt）](#逻辑处理-获取当前用户的Bug数（GetCurUserBugCnt）) | 执行之后 | 是 |  |
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
### 实体行为-获取测试统计详情（GetTestStats）
#### 说明
获取测试统计详情

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
| 序号 | 逻辑 | 逻辑名 | 逻辑持有者 |
| ---- | ---- | ---- | ---- |
| 1 | [获取当前用户的Bug数](#逻辑处理-获取当前用户的Bug数（GetCurUserBugCnt）) | GetCurUserBugCnt | 后台 |

### 逻辑处理-获取当前用户的Bug数（GetCurUserBugCnt）
#### 说明
获取当前用户的Bug数

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 获取bug数 | Rawsqlcall1 | 直接SQL调用 |
| 2 | 开始 | Begin | 开始 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [产品名称（NAME）](#属性-产品名称（NAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [产品名称（NAME）](#属性-产品名称（NAME）) | `%like%` |
| 2 | [状态（STATUS）](#属性-状态（STATUS）) | `=` |
| 3 | [产品类型（TYPE）](#属性-产品类型（TYPE）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 2 | [未关闭产品](#数据查询-未关闭产品（NoOpenProduct）) | NoOpenProduct | 否 |
| 3 | [产品质量表](#数据查询-产品质量表（ProdctQuantiGird）) | ProdctQuantiGird | 否 |
| 4 | [产品投入表](#数据查询-产品投入表（ProductInputTable）) | ProductInputTable | 否 |
| 5 | [产品完成统计表](#数据查询-产品完成统计表（Productcompletionstatistics）) | Productcompletionstatistics | 否 |
| 6 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVEBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVESTORYCNT`,
	1 AS `ASSIGNTOMEBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `BUGCNT`,
	t1.`CODE`,
	(
SELECT
	t.NAME 
FROM
	zt_project t,
	zt_projectproduct t2 
WHERE
	t.id = t2.project 
	AND t2.product = t1.id 
	LIMIT 1 
	) AS `CURRPROJECT`,
	t1.`DELETED`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'developing' AND DELETED = '0' ) AS `DEVELOPINGSTORYCNT`,
	t1.`ID`,
	t1.`NAME`,
	( SELECT COUNT( 1 ) FROM ZT_RELEASE WHERE PRODUCT = t1.`ID` AND `STATUS` = 'normal' AND DELETED = '0' ) AS `NORMALRELEASECNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0' ) AS `NOTCLOSEDBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'planned' AND DELETED = '0' ) AS `PLANNEDSTORYCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_PROJECT t2
	LEFT JOIN ZT_PROJECTPRODUCT t ON t2.ID = t.project 
WHERE
	t.PRODUCT = t1.id 
	AND t2.DELETED = '0' 
	AND t2.`status` IN ( 'wait', 'doing' ) 
	AND t2.`END` < now( ) 
	) AS `POSTPONEDPROJECTCNT`,
	( SELECT COUNT( 1 ) FROM ZT_PRODUCTPLAN WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `PRODUCTPLANCNT`,
	( SELECT COUNT( 1 ) FROM ZT_RELEASE WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `RELEASECNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'released' AND DELETED = '0' ) AS `RELEASEDSTORYCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_PROJECT
	LEFT JOIN ZT_PROJECTPRODUCT ON ZT_PROJECT.ID = ZT_PROJECTPRODUCT.project 
WHERE
	PRODUCT = t1.`ID` 
	AND DELETED = '0' 
	) AS `RESPROJECTCNT`,
	t1.`STATUS`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `STORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'testing' AND DELETED = '0' ) AS `TESTINGSTORYCNT`,
	t1.`TYPE`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0' ) AS `UNCONFIRMBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_PROJECT
	LEFT JOIN ZT_PROJECTPRODUCT ON ZT_PROJECT.ID = ZT_PROJECTPRODUCT.project 
WHERE
	PRODUCT = t1.`ID` 
	AND `STATUS` <> 'closed' 
	AND DELETED = '0' 
	) AS `UNDONERESPROJECTCNT`,
	( SELECT COUNT( 1 ) FROM ZT_PRODUCTPLAN WHERE PRODUCT = t1.`ID` AND `END` > CURDATE( ) AND DELETED = '0' ) AS `UNENDPRODUCTPLANCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'wait' AND DELETED = '0' ) AS `WAITSTORYCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_BUG 
WHERE
	PRODUCT = t1.`ID` 
	AND DELETED = '0' 
	AND resolvedDate BETWEEN CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 00:00:00' 
	) 
	AND CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 23:59:59' 
	) 
	) AS `YESTERDAYCLOSEDBUGCNT`,
	5 AS `YESTERDAYCONFIRMBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_BUG 
WHERE
	PRODUCT = t1.`ID` 
	AND `STATUS` = 'closed' 
	AND DELETED = '0' 
	AND CLOSEDDATE BETWEEN CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 00:00:00' 
	) 
	AND CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 23:59:59' 
	) 
	) AS `YESTERDAYRESOLVEDBUGCNT` ,
		(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN T2.OBJECTORDER ELSE  t1.`ORDER` END) as `ORDER1`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN 1 ELSE 0 END) as `ISTOP`
FROM
	`zt_product` t1
	left join t_ibz_top t2 on t1.id = t2.OBJECTID and t2.type = 'product' and t2.ACCOUNT = #{srf.sessioncontext.srfloginname}
```
### 数据查询-未关闭产品（NoOpenProduct）
#### 说明
未关闭产品

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVEBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVESTORYCNT`,
	1 AS `ASSIGNTOMEBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `BUGCNT`,
	t1.`CODE`,
	(
SELECT
	t.NAME 
FROM
	zt_project t,
	zt_projectproduct t2 
WHERE
	t.id = t2.project 
	AND t2.product = t1.id 
	LIMIT 1 
	) AS `CURRPROJECT`,
	t1.`DELETED`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'developing' AND DELETED = '0' ) AS `DEVELOPINGSTORYCNT`,
	t1.`ID`,
	t1.`NAME`,
	( SELECT COUNT( 1 ) FROM ZT_RELEASE WHERE PRODUCT = t1.`ID` AND `STATUS` = 'normal' AND DELETED = '0' ) AS `NORMALRELEASECNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0' ) AS `NOTCLOSEDBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'planned' AND DELETED = '0' ) AS `PLANNEDSTORYCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_PROJECT t2
	LEFT JOIN ZT_PROJECTPRODUCT t ON t2.ID = t.project 
WHERE
	t.PRODUCT = t1.id 
	AND t2.DELETED = '0' 
	AND t2.`status` IN ( 'wait', 'doing' ) 
	AND t2.`END` < now( ) 
	) AS `POSTPONEDPROJECTCNT`,
	( SELECT COUNT( 1 ) FROM ZT_PRODUCTPLAN WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `PRODUCTPLANCNT`,
	( SELECT COUNT( 1 ) FROM ZT_RELEASE WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `RELEASECNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'released' AND DELETED = '0' ) AS `RELEASEDSTORYCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_PROJECT
	LEFT JOIN ZT_PROJECTPRODUCT ON ZT_PROJECT.ID = ZT_PROJECTPRODUCT.project 
WHERE
	PRODUCT = t1.`ID` 
	AND DELETED = '0' 
	) AS `RESPROJECTCNT`,
	t1.`STATUS`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `STORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'testing' AND DELETED = '0' ) AS `TESTINGSTORYCNT`,
	t1.`TYPE`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0' ) AS `UNCONFIRMBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_PROJECT
	LEFT JOIN ZT_PROJECTPRODUCT ON ZT_PROJECT.ID = ZT_PROJECTPRODUCT.project 
WHERE
	PRODUCT = t1.`ID` 
	AND `STATUS` <> 'closed' 
	AND DELETED = '0' 
	) AS `UNDONERESPROJECTCNT`,
	( SELECT COUNT( 1 ) FROM ZT_PRODUCTPLAN WHERE PRODUCT = t1.`ID` AND `END` > CURDATE( ) AND DELETED = '0' ) AS `UNENDPRODUCTPLANCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'wait' AND DELETED = '0' ) AS `WAITSTORYCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_BUG 
WHERE
	PRODUCT = t1.`ID` 
	AND DELETED = '0' 
	AND resolvedDate BETWEEN CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 00:00:00' 
	) 
	AND CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 23:59:59' 
	) 
	) AS `YESTERDAYCLOSEDBUGCNT`,
	5 AS `YESTERDAYCONFIRMBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_BUG 
WHERE
	PRODUCT = t1.`ID` 
	AND `STATUS` = 'closed' 
	AND DELETED = '0' 
	AND CLOSEDDATE BETWEEN CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 00:00:00' 
	) 
	AND CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 23:59:59' 
	) 
	) AS `YESTERDAYRESOLVEDBUGCNT` ,
		(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN T2.OBJECTORDER ELSE  t1.`ORDER` END) as `ORDER1`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN 1 ELSE 0 END) as `ISTOP`
FROM
	`zt_product` t1
	left join t_ibz_top t2 on t1.id = t2.OBJECTID and t2.type = 'product' and t2.ACCOUNT = #{srf.sessioncontext.srfloginname}
```
### 数据查询-产品质量表（ProdctQuantiGird）
#### 说明
产品质量表

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.id,t1.`name`,IFNULL(t2.storycnt,0) as storycnt,IFNULL(t2.finishedStory,0) as finishedStorycnt,IFNULL(t3.bugcnt,0) as bugcnt,IFNULL(t3.resolvedBugCnt,0) as resolvedBugCnt,IFNULL(t3.importantbugcnt,0) as importantbugcnt,IFNULL(t4.bugstory,0)  as bugstory , CONCAT(IFNULL(ROUND(t3.importantbugcnt/t3.bugcnt,2)*100,0),'%') as ImportantBugpercent
from zt_product t1 LEFT JOIN (
SELECT t1.product,t1.`name`,
IFNULL(COUNT(1),0) as storycnt ,
SUM(IF(t1.stage in ('tested','developing','developed'),t1.num,0)) as finishedStory
from (
select t1.`stage`,t1.closedReason,t1.id as storyid,t1.product,t2.`name`, 1 as num from zt_story t1 LEFT JOIN zt_product t2 on t1.product = t2.id where t2.id <> '0' and t1.deleted = '0' and t2.deleted = '0') t1 GROUP BY t1.product  ) t2 on t1.id = t2.product LEFT JOIN (
SELECT t1.product,t1.`name`,
IFNULL(COUNT(1),0) as bugcnt,
SUM(IF(t1.`STATUS` = 'closed' and t1.resolution in ('fixed'),t1.num,0)) as resolvedBugCnt,
SUM(IF(t1.pri >= 1 and t1.pri <= 3,t1.num,0)) as importantbugcnt from 
 (
SELECT t1.`STATUS`,t1.resolution,t1.pri,t1.id,t1.product,t2.`name`,1 as num from zt_bug t1 LEFT JOIN zt_product t2 on t1.product = t2.id where t2.id <> '0' and t1.deleted = '0' and t2.deleted = '0'
) t1 GROUP BY t1.product) t3 on t1.id = t3.product  LEFT JOIN (
SELECT t2.product,t2.`name`,COUNT(1) as bugstory from (
SELECT t1.story,t1.product,t2.`name`,1 as num from zt_bug t1 LEFT JOIN zt_product t2 on t1.product = t2.id where t1.story <> 0 and t1.deleted = '0' and t2.deleted = '0' ) t2
GROUP BY t2.product ) t4 on t1.id = t4.product where t1.deleted = '0'
```
### 数据查询-产品投入表（ProductInputTable）
#### 说明
产品投入表

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.id,t1.`name`,t1.RESPROJECTCNT,ROUND(IFNULL(t2.haveconsumed,0),2)  as haveconsumed from (
SELECT t1.id,t1.`name`,COUNT(1) as RESPROJECTCNT from zt_product t1 LEFT JOIN zt_projectproduct t2 on t1.id = t2.product LEFT JOIN zt_project t3 on t3.id = t2.project 
where t3.deleted = '0' and t1.deleted = '0'
GROUP BY t1.id) t1 
LEFT JOIN (
SELECT t1.id,t1.`name`,SUM(t4.consumed) as haveconsumed from zt_product t1 LEFT JOIN zt_projectproduct t2 on t1.id = t2.product LEFT JOIN zt_project t3 on t3.id = t2.project LEFT JOIN zt_task 
t4 on t4.project = t3.id 
where t3.deleted = '0' and t1.deleted = '0' and t3.deleted = '0' and t4.parent >= 0
GROUP BY t1.id ) t2 on t1.id = t2.id

```
### 数据查询-产品完成统计表（Productcompletionstatistics）
#### 说明
产品完成统计表

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT *,CONCAT(ROUND(t1.finishedstorycnt/t1.storycnt,2)*100,'%') as ImportantBugpercent from (
SELECT t1.product,t1.`name`,
IFNULL(COUNT(1),0) as storycnt ,
SUM(IF(t1.stage in ('tested','developing','developed'),t1.num,0)) as finishedStorycnt
from (
select t1.`stage`,t1.closedReason,t1.id as storyid,t1.product,t2.`name`, 1 as num from zt_story t1 LEFT JOIN zt_product t2 on t1.product = t2.id where t2.id <> '0' and t1.deleted = '0' and t2.deleted = '0') t1 GROUP BY t1.product   ) t1
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
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED ='0') AS `ACTIVEBUGCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='active' AND DELETED = '0') AS `ACTIVESTORYCNT`,
1 AS `ASSIGNTOMEBUGCNT`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0') AS `BUGCNT`,
t1.`CODE`,
(SELECT t.name FROM zt_project t,zt_projectproduct t2 WHERE t.id=t2.project and t2.product = t1.id limit 1) AS `CURRPROJECT`,
t1.`DELETED`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'developing' AND DELETED = '0') AS `DEVELOPINGSTORYCNT`,
t1.`ID`,
t1.`NAME`,
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= t1.`ID` AND  `STATUS`= 'normal' AND DELETED = '0') AS `NORMALRELEASECNT`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0') AS `NOTCLOSEDBUGCNT`,
t1.`order` AS `ORDER1`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'planned' AND DELETED ='0') AS `PLANNEDSTORYCNT`,
(SELECT COUNT(1) FROM ZT_PROJECT t2 LEFT JOIN ZT_PROJECTPRODUCT t ON t2.ID = t.project WHERE t.PRODUCT = t1.id AND t2.DELETED = '0' and t2.`status` in( 'wait','doing') and t2.`END` < now() ) AS `POSTPONEDPROJECTCNT`,
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `PRODUCTPLANCNT`,
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `RELEASECNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'released' AND DELETED = '0') AS `RELEASEDSTORYCNT`,
(SELECT COUNT(1) FROM ZT_PROJECT LEFT JOIN ZT_PROJECTPRODUCT ON  ZT_PROJECT.ID = ZT_PROJECTPRODUCT.project WHERE PRODUCT = t1.`ID` AND DELETED = '0') AS `RESPROJECTCNT`,
t1.`STATUS`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND DELETED = '0') AS `STORYCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'testing' AND DELETED = '0') AS `TESTINGSTORYCNT`,
t1.`TYPE`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0') AS `UNCONFIRMBUGCNT`,
(SELECT COUNT(1) FROM ZT_PROJECT LEFT JOIN ZT_PROJECTPRODUCT ON  ZT_PROJECT.ID = ZT_PROJECTPRODUCT.project WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0') AS `UNDONERESPROJECTCNT`,
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= t1.`ID`  AND `END` > CURDATE() AND DELETED = '0') AS `UNENDPRODUCTPLANCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'wait' AND DELETED = '0') AS `WAITSTORYCNT`,
(SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID`  AND DELETED = '0' and resolvedDate BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59')) AS `YESTERDAYCLOSEDBUGCNT`,
5 AS `YESTERDAYCONFIRMBUGCNT`,
(SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'closed' AND DELETED = '0' and CLOSEDDATE BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59')) AS `YESTERDAYRESOLVEDBUGCNT`
FROM `zt_product` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 2 | [未关闭产品](#数据集合-未关闭产品（NoOpenProduct）) | NoOpenProduct | 否 |
| 3 | [产品质量表](#数据集合-产品质量表（ProdctQuantiGird）) | ProdctQuantiGird | 否 |
| 4 | [产品投入表](#数据集合-产品投入表（ProductInputTable）) | ProductInputTable | 否 |
| 5 | [产品完成统计表](#数据集合-产品完成统计表（Productcompletionstatistics）) | Productcompletionstatistics | 否 |

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
### 数据集合-未关闭产品（NoOpenProduct）
#### 说明
未关闭产品

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [未关闭产品（NoOpenProduct）](#数据查询-未关闭产品（NoOpenProduct）) |
### 数据集合-产品质量表（ProdctQuantiGird）
#### 说明
产品质量表

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品质量表（ProdctQuantiGird）](#数据查询-产品质量表（ProdctQuantiGird）) |
### 数据集合-产品投入表（ProductInputTable）
#### 说明
产品投入表

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品投入表（ProductInputTable）](#数据查询-产品投入表（ProductInputTable）) |
### 数据集合-产品完成统计表（Productcompletionstatistics）
#### 说明
产品完成统计表

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品完成统计表（Productcompletionstatistics）](#数据查询-产品完成统计表（Productcompletionstatistics）) |

## 数据导入
无

## 数据导出
| 序号 | 数据导出 | 数据导出名 | 最大导出数量 |
| ---- | ---- | ---- | ---- |
| 1 | [产品投入数据导出](#数据导出-产品投入数据导出（ProductInputExport）) | ProductInputExport | 1,000 |
| 2 | [产品质量数据导出](#数据导出-产品质量数据导出（ProductQuantityExport）) | ProductQuantityExport | 1,000 |

### 数据导出-产品投入数据导出（ProductInputExport）
#### 说明
产品投入数据导出

- 最大导出数
1,000

- 行为持有者
后台及前台

| 序号 | 导出标题 | 属性 | 默认值 |
| ---- | ---- | ---- | ---- |
| 1 | 产品名称 | [产品名称（NAME）](#属性-产品名称（NAME）) |  |
| 2 | 关联项目数 | [关联项目数（RESPROJECTCNT）](#属性-关联项目数（RESPROJECTCNT）) |  |
| 3 | 已消耗工时 | [已消耗工时（HAVECONSUMED）](#属性-已消耗工时（HAVECONSUMED）) |  |
### 数据导出-产品质量数据导出（ProductQuantityExport）
#### 说明
产品质量数据导出

- 最大导出数
1,000

- 行为持有者
后台及前台

| 序号 | 导出标题 | 属性 | 默认值 |
| ---- | ---- | ---- | ---- |
| 1 | 产品名称 | [产品名称（NAME）](#属性-产品名称（NAME）) |  |
| 2 | 需求总数 | [需求总数（STORYCNT）](#属性-需求总数（STORYCNT）) |  |
| 3 | 已完成的需求数 | [已完成的需求数（FINISHEDSTORYCNT）](#属性-已完成的需求数（FINISHEDSTORYCNT）) |  |
| 4 | 所有Bug数 | [所有Bug数（BUGCNT）](#属性-所有Bug数（BUGCNT）) |  |
| 5 | 解决Bug数 | [解决Bug数（RESOLVEDBUGCNT）](#属性-解决Bug数（RESOLVEDBUGCNT）) |  |
| 6 | 需求所提bug数 | [需求所提bug数（BUGSTORY）](#属性-需求所提bug数（BUGSTORY）) |  |
| 7 | 重要的Bug数 | [重要的Bug数（IMPORTANTBUGCNT）](#属性-重要的Bug数（IMPORTANTBUGCNT）) |  |
| 8 | 严重bug比 | [严重bug比（IMPORTANTBUGPERCENT）](#属性-严重bug比（IMPORTANTBUGPERCENT）) |  |

