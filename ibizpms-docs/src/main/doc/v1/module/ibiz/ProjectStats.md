
# 实体-项目统计(IBZ_PROJECTSTATS)
## 实体说明
项目统计

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
| 1 | [项目编号](#属性-项目编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 2 | [需求总数](#属性-需求总数（STORYCNT）) | STORYCNT | 整型 | 否 | 否 | 是 |
| 3 | [任务总数](#属性-任务总数（TASKCNT）) | TASKCNT | 整型 | 否 | 否 | 是 |
| 4 | [任务最初预计总工时](#属性-任务最初预计总工时（TOTALESTIMATE）) | TOTALESTIMATE | 浮点 | 否 | 否 | 是 |
| 5 | [任务消耗总工时](#属性-任务消耗总工时（TOTALCONSUMED）) | TOTALCONSUMED | 浮点 | 否 | 否 | 是 |
| 6 | [任务预计剩余总工时](#属性-任务预计剩余总工时（TOTALLEFT）) | TOTALLEFT | 浮点 | 否 | 否 | 是 |
| 7 | [未完成任务总数](#属性-未完成任务总数（UNDONETASKCNT）) | UNDONETASKCNT | 整型 | 否 | 否 | 是 |
| 8 | [关闭需求总数](#属性-关闭需求总数（CLOSEDSTORYCNT）) | CLOSEDSTORYCNT | 整型 | 否 | 否 | 是 |
| 9 | [Bug总数](#属性-Bug总数（BUGCNT）) | BUGCNT | 整型 | 否 | 否 | 是 |
| 10 | [未解决Bug总数](#属性-未解决Bug总数（ACTIVEBUGCNT）) | ACTIVEBUGCNT | 整型 | 否 | 否 | 是 |
| 11 | [未关闭需求总数](#属性-未关闭需求总数（UNCLOSEDSTORYCNT）) | UNCLOSEDSTORYCNT | 整型 | 否 | 否 | 是 |
| 12 | [已结束任务总数](#属性-已结束任务总数（FINISHTASKCNT）) | FINISHTASKCNT | 整型 | 否 | 否 | 是 |
| 13 | [已解决Bug总数](#属性-已解决Bug总数（FINISHBUGCNT）) | FINISHBUGCNT | 整型 | 否 | 否 | 是 |
| 14 | [已删除](#属性-已删除（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 15 | [工时](#属性-工时（TIME）) | TIME | 浮点 | 否 | 否 | 是 |
| 16 | [工时类型](#属性-工时类型（TYPE）) | TYPE | 文本，可指定长度 | 否 | 否 | 是 |
| 17 | [项目名称](#属性-项目名称（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 否 |
| 18 | [未确认Bug总数](#属性-未确认Bug总数（UNCONFIRMEDBUGCNT）) | UNCONFIRMEDBUGCNT | 整型 | 否 | 否 | 是 |
| 19 | [未关闭Bug总数](#属性-未关闭Bug总数（UNCLOSEDBUGCNT）) | UNCLOSEDBUGCNT | 整型 | 否 | 否 | 是 |
| 20 | [总工时](#属性-总工时（TOTALWH）) | TOTALWH | 整型 | 否 | 否 | 是 |
| 21 | [已发布需求数](#属性-已发布需求数（RELEASEDSTORYCNT）) | RELEASEDSTORYCNT | 整型 | 否 | 否 | 是 |
| 22 | [昨日完成任务数](#属性-昨日完成任务数（YESTERDAYCTASKCNT）) | YESTERDAYCTASKCNT | 整型 | 否 | 否 | 是 |
| 23 | [昨天解决Bug数](#属性-昨天解决Bug数（YESTERDAYRBUGCNT）) | YESTERDAYRBUGCNT | 整型 | 否 | 否 | 是 |
| 24 | [截止日期](#属性-截止日期（END）) | END | 日期型 | 否 | 否 | 是 |
| 25 | [状态](#属性-状态（STATUS）) | STATUS | 文本，可指定长度 | 否 | 否 | 是 |
| 26 | [项目排序](#属性-项目排序（ORDER1）) | ORDER1 | 整型 | 否 | 否 | 是 |
| 27 | [是否置顶](#属性-是否置顶（ISTOP）) | ISTOP | 整型 | 否 | 否 | 是 |
| 28 | [已关闭任务数](#属性-已关闭任务数（CLOSEDTASKCNT）) | CLOSEDTASKCNT | 整型 | 否 | 否 | 是 |
| 29 | [已取消任务数](#属性-已取消任务数（CANCELTASKCNT）) | CANCELTASKCNT | 整型 | 否 | 否 | 是 |
| 30 | [已暂停任务数](#属性-已暂停任务数（PAUSETASKCNT）) | PAUSETASKCNT | 整型 | 否 | 否 | 是 |
| 31 | [未开始任务数](#属性-未开始任务数（WAITTASKCNT）) | WAITTASKCNT | 整型 | 否 | 否 | 是 |
| 32 | [进行中任务数](#属性-进行中任务数（DOINGTASKCNT）) | DOINGTASKCNT | 整型 | 否 | 否 | 是 |
| 33 | [已完成任务数](#属性-已完成任务数（DONETASKCNT）) | DONETASKCNT | 整型 | 否 | 否 | 是 |
| 34 | [设计类型任务](#属性-设计类型任务（DESIGNTASKCNT）) | DESIGNTASKCNT | 整型 | 否 | 否 | 是 |
| 35 | [讨论类型任务](#属性-讨论类型任务（DISCUSSTASKCNT）) | DISCUSSTASKCNT | 整型 | 否 | 否 | 是 |
| 36 | [研究类型任务](#属性-研究类型任务（STUDYTASKCNT）) | STUDYTASKCNT | 整型 | 否 | 否 | 是 |
| 37 | [界面类型任务](#属性-界面类型任务（UITASKCNT）) | UITASKCNT | 整型 | 否 | 否 | 是 |
| 38 | [测试类型任务](#属性-测试类型任务（TESTTASKCNT）) | TESTTASKCNT | 整型 | 否 | 否 | 是 |
| 39 | [服务类型任务](#属性-服务类型任务（SERVETASKCNT）) | SERVETASKCNT | 整型 | 否 | 否 | 是 |
| 40 | [开发类型任务](#属性-开发类型任务（DEVELTASKCNT）) | DEVELTASKCNT | 整型 | 否 | 否 | 是 |
| 41 | [其他类型任务](#属性-其他类型任务（MISCTASKCNT）) | MISCTASKCNT | 整型 | 否 | 否 | 是 |
| 42 | [事务类型任务](#属性-事务类型任务（AFFAIRTASKCNT）) | AFFAIRTASKCNT | 整型 | 否 | 否 | 是 |
| 43 | [完成需求数](#属性-完成需求数（COMPLETESTORYCNT）) | COMPLETESTORYCNT | 整型 | 否 | 否 | 是 |
| 44 | [完成任务数](#属性-完成任务数（COMPLETETASKCNT）) | COMPLETETASKCNT | 整型 | 否 | 否 | 是 |
| 45 | [Bug/完成需求](#属性-Bug/完成需求（BUGSTORY）) | BUGSTORY | 整型 | 否 | 否 | 是 |
| 46 | [Bug/完成任务](#属性-Bug/完成任务（BUGTASK）) | BUGTASK | 整型 | 否 | 否 | 是 |
| 47 | [重要Bug数](#属性-重要Bug数（IMPORTANTBUGCNT）) | IMPORTANTBUGCNT | 整型 | 否 | 否 | 是 |
| 48 | [严重Bug比率](#属性-严重Bug比率（SERIOUSBUGPROPORTION）) | SERIOUSBUGPROPORTION | 文本，可指定长度 | 否 | 否 | 是 |
| 49 | [代码错误](#属性-代码错误（CODEERROR）) | CODEERROR | 整型 | 否 | 否 | 是 |
| 50 | [配置相关](#属性-配置相关（CONFIG）) | CONFIG | 整型 | 否 | 否 | 是 |
| 51 | [安装部署](#属性-安装部署（INSTALL）) | INSTALL | 整型 | 否 | 否 | 是 |
| 52 | [安全相关](#属性-安全相关（SECURITY）) | SECURITY | 整型 | 否 | 否 | 是 |
| 53 | [性能问题](#属性-性能问题（PERFORMANCE）) | PERFORMANCE | 整型 | 否 | 否 | 是 |
| 54 | [标准规范](#属性-标准规范（STANDARD）) | STANDARD | 整型 | 否 | 否 | 是 |
| 55 | [测试脚本](#属性-测试脚本（AUTOMATION）) | AUTOMATION | 整型 | 否 | 否 | 是 |
| 56 | [人数](#属性-人数（MEMBERCNT）) | MEMBERCNT | 整型 | 否 | 否 | 是 |
| 57 | [设计缺陷](#属性-设计缺陷（DESIGNDEFECT）) | DESIGNDEFECT | 整型 | 否 | 否 | 是 |
| 58 | [其他](#属性-其他（OTHERS）) | OTHERS | 整型 | 否 | 否 | 是 |
| 59 | [项目消耗总工时](#属性-项目消耗总工时（PROJECTTOTALCONSUMED）) | PROJECTTOTALCONSUMED | 浮点 | 否 | 否 | 是 |
| 60 | [工期](#属性-工期（TIMESCALE）) | TIMESCALE | 文本，可指定长度 | 否 | 否 | 是 |
| 61 | [剩余需求数](#属性-剩余需求数（LEFTSTORYCNT）) | LEFTSTORYCNT | 整型 | 否 | 否 | 是 |
| 62 | [空需求](#属性-空需求（EMPTYSTORY）) | EMPTYSTORY | 整型 | 否 | 否 | 是 |
| 63 | [草稿需求](#属性-草稿需求（DRAFTSTORY）) | DRAFTSTORY | 整型 | 否 | 否 | 是 |
| 64 | [激活需求](#属性-激活需求（ACTIVESTORY）) | ACTIVESTORY | 整型 | 否 | 否 | 是 |
| 65 | [已关闭需求](#属性-已关闭需求（CLOSEDSTORY）) | CLOSEDSTORY | 整型 | 否 | 否 | 是 |
| 66 | [已变更需求](#属性-已变更需求（CHANGEDSTORY）) | CHANGEDSTORY | 整型 | 否 | 否 | 是 |
| 67 | [空阶段需求数](#属性-空阶段需求数（EMPTYSTAGESTORYCNT）) | EMPTYSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 68 | [未开始阶段需求数](#属性-未开始阶段需求数（WAITSTAGESTORYCNT）) | WAITSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 69 | [已计划阶段需求数](#属性-已计划阶段需求数（PLANNEDSTAGESTORYCNT）) | PLANNEDSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 70 | [已立项阶段需求数](#属性-已立项阶段需求数（PROJECTEDSTAGESTORYCNT）) | PROJECTEDSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 71 | [研发中阶段需求数](#属性-研发中阶段需求数（DEVELOPINGSTAGESTORYCNT）) | DEVELOPINGSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 72 | [研发完毕阶段需求数](#属性-研发完毕阶段需求数（DEVELOPEDSTAGESTORYCNT）) | DEVELOPEDSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 73 | [测试中阶段需求数](#属性-测试中阶段需求数（TESTINGSTAGESTORYCNT）) | TESTINGSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 74 | [测试完毕阶段需求数](#属性-测试完毕阶段需求数（TESTEDSTAGESTORYCNT）) | TESTEDSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 75 | [已验收阶段需求数](#属性-已验收阶段需求数（VERIFIEDSTAGESTORYCNT）) | VERIFIEDSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 76 | [已发布阶段需求数](#属性-已发布阶段需求数（RELEASEDSTAGESTORYCNT）) | RELEASEDSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 77 | [已关闭阶段需求数](#属性-已关闭阶段需求数（CLOSEDSTAGESTORYCNT）) | CLOSEDSTAGESTORYCNT | 整型 | 否 | 否 | 是 |
| 78 | [进度](#属性-进度（PROGRESS）) | PROGRESS | 文本，可指定长度 | 否 | 否 | 是 |
| 79 | [开始时间](#属性-开始时间（BEGIN）) | BEGIN | 日期型 | 否 | 否 | 是 |

### 属性-项目编号（ID）
#### 属性说明
项目编号

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
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE PROJECT = %1$s AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-任务总数（TASKCNT）
#### 属性说明
任务总数

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
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = %1$s AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-任务最初预计总工时（TOTALESTIMATE）
#### 属性说明
任务最初预计总工时

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
浮点

- Java类型
Double

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(SELECT round(SUM(ESTIMATE),0) FROM ZT_TASK WHERE PROJECT = %1$s AND DELETED =  '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1'))
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-任务消耗总工时（TOTALCONSUMED）
#### 属性说明
任务消耗总工时

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
浮点

- Java类型
Double

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(SELECT round(SUM(CONSUMED),0) FROM ZT_TASK WHERE PROJECT = %1$s AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1'))
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-任务预计剩余总工时（TOTALLEFT）
#### 属性说明
任务预计剩余总工时

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
浮点

- Java类型
Double

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
(SELECT round(SUM(`LEFT`),0) FROM ZT_TASK WHERE PROJECT = %1$s AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1'))
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-未完成任务总数（UNDONETASKCNT）
#### 属性说明
未完成任务总数

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
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = %1$s AND `STATUS` NOT IN ('done','cancel','closed') AND DELETED =  '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-关闭需求总数（CLOSEDSTORYCNT）
#### 属性说明
关闭需求总数

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
(SELECT COUNT(1) FROM ZT_STORY WHERE `STATUS` =  'closed' AND FIND_IN_SET (PRODUCT, (SELECT GROUP_CONCAT(PRODUCT) FROM ZT_PROJECTPRODUCT WHERE PROJECT= %1$s)) AND DELETED = '0' )
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-Bug总数（BUGCNT）
#### 属性说明
Bug总数

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = %1$s AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-未解决Bug总数（ACTIVEBUGCNT）
#### 属性说明
未解决Bug总数

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = %1$s AND `STATUS` = 'active' AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-未关闭需求总数（UNCLOSEDSTORYCNT）
#### 属性说明
未关闭需求总数

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
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE `STATUS` <>  'closed' AND PROJECT = %1$s AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-已结束任务总数（FINISHTASKCNT）
#### 属性说明
已结束任务总数

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
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = %1$s AND `STATUS` IN ('done','cancel','closed') AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-已解决Bug总数（FINISHBUGCNT）
#### 属性说明
已解决Bug总数

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = %1$s AND `STATUS` <> 'active' AND DELETED = '0')
```

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

### 属性-工时（TIME）
#### 属性说明
界面使用

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

### 属性-工时类型（TYPE）
#### 属性说明
界面使用

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

### 属性-项目名称（NAME）
#### 属性说明
项目名称

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

### 属性-未确认Bug总数（UNCONFIRMEDBUGCNT）
#### 属性说明
未确认Bug总数

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = %1$s AND `CONFIRMED` = 0 AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-未关闭Bug总数（UNCLOSEDBUGCNT）
#### 属性说明
未关闭Bug总数

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = %1$s AND `STATUS` <> 'closed' AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-总工时（TOTALWH）
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
((SELECT round(SUM( `LEFT` ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) ) + (SELECT round(SUM( CONSUMED ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) ))
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
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE stage = 'released' AND PROJECT = t1.id AND DELETED = '0')
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-昨日完成任务数（YESTERDAYCTASKCNT）
#### 属性说明
昨日完成任务数

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
(select COUNT(1) from zt_task t where t.deleted = '0' and t.project = t1.id and t.`status` = 'closed' and t.closedDate BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59') )
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-昨天解决Bug数（YESTERDAYRBUGCNT）
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
(SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` = 'resolved' AND DELETED = '0' and RESOLVEDDATE BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59'))
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-截止日期（END）
#### 属性说明
截止日期

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
无

### 属性-状态（STATUS）
#### 属性说明
状态

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
参照数据字典【[项目状态（Project__status）](../../codelist/Project__status)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |
| 2 | `!=`或者`<>` |

#### 关系属性
无

### 属性-项目排序（ORDER1）
#### 属性说明
项目排序

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

### 属性-已关闭任务数（CLOSEDTASKCNT）
#### 属性说明
已关闭任务数

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

### 属性-已取消任务数（CANCELTASKCNT）
#### 属性说明
已取消任务数

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

### 属性-已暂停任务数（PAUSETASKCNT）
#### 属性说明
已暂停任务数

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

### 属性-未开始任务数（WAITTASKCNT）
#### 属性说明
未开始任务数

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

### 属性-进行中任务数（DOINGTASKCNT）
#### 属性说明
进行中任务数

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

### 属性-已完成任务数（DONETASKCNT）
#### 属性说明
已完成任务数

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

### 属性-设计类型任务（DESIGNTASKCNT）
#### 属性说明
设计类型任务

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

### 属性-讨论类型任务（DISCUSSTASKCNT）
#### 属性说明
讨论类型任务

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

### 属性-研究类型任务（STUDYTASKCNT）
#### 属性说明
研究类型任务

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

### 属性-界面类型任务（UITASKCNT）
#### 属性说明
界面类型任务

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

### 属性-测试类型任务（TESTTASKCNT）
#### 属性说明
测试类型任务

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

### 属性-服务类型任务（SERVETASKCNT）
#### 属性说明
服务类型任务

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

### 属性-开发类型任务（DEVELTASKCNT）
#### 属性说明
开发类型任务

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

### 属性-其他类型任务（MISCTASKCNT）
#### 属性说明
其他类型任务

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

### 属性-事务类型任务（AFFAIRTASKCNT）
#### 属性说明
事务类型任务

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

### 属性-完成需求数（COMPLETESTORYCNT）
#### 属性说明
完成需求数

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

### 属性-完成任务数（COMPLETETASKCNT）
#### 属性说明
完成任务数

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

### 属性-Bug/完成需求（BUGSTORY）
#### 属性说明
Bug/完成需求

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

### 属性-Bug/完成任务（BUGTASK）
#### 属性说明
Bug/完成任务

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

### 属性-重要Bug数（IMPORTANTBUGCNT）
#### 属性说明
重要Bug数

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

### 属性-严重Bug比率（SERIOUSBUGPROPORTION）
#### 属性说明
严重Bug比率

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
null
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

### 属性-人数（MEMBERCNT）
#### 属性说明
人数

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

### 属性-项目消耗总工时（PROJECTTOTALCONSUMED）
#### 属性说明
项目消耗总工时

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
浮点

- Java类型
Double

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

### 属性-工期（TIMESCALE）
#### 属性说明
工期

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

### 属性-剩余需求数（LEFTSTORYCNT）
#### 属性说明
剩余需求数

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

### 属性-空需求（EMPTYSTORY）
#### 属性说明
空需求

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

### 属性-草稿需求（DRAFTSTORY）
#### 属性说明
草稿需求

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

### 属性-激活需求（ACTIVESTORY）
#### 属性说明
激活需求

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

### 属性-已关闭需求（CLOSEDSTORY）
#### 属性说明
已关闭需求

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

### 属性-已变更需求（CHANGEDSTORY）
#### 属性说明
已变更需求

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

### 属性-空阶段需求数（EMPTYSTAGESTORYCNT）
#### 属性说明
空阶段需求数

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

### 属性-未开始阶段需求数（WAITSTAGESTORYCNT）
#### 属性说明
未开始阶段需求数

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

### 属性-已计划阶段需求数（PLANNEDSTAGESTORYCNT）
#### 属性说明
已计划阶段需求数

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

### 属性-已立项阶段需求数（PROJECTEDSTAGESTORYCNT）
#### 属性说明
已立项阶段需求数

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

### 属性-研发中阶段需求数（DEVELOPINGSTAGESTORYCNT）
#### 属性说明
研发中阶段需求数

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

### 属性-研发完毕阶段需求数（DEVELOPEDSTAGESTORYCNT）
#### 属性说明
研发完毕阶段需求数

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

### 属性-测试中阶段需求数（TESTINGSTAGESTORYCNT）
#### 属性说明
测试中阶段需求数

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

### 属性-测试完毕阶段需求数（TESTEDSTAGESTORYCNT）
#### 属性说明
测试完毕阶段需求数

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

### 属性-已验收阶段需求数（VERIFIEDSTAGESTORYCNT）
#### 属性说明
已验收阶段需求数

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

### 属性-已发布阶段需求数（RELEASEDSTAGESTORYCNT）
#### 属性说明
已发布阶段需求数

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

### 属性-已关闭阶段需求数（CLOSEDSTAGESTORYCNT）
#### 属性说明
已关闭阶段需求数

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

### 属性-进度（PROGRESS）
#### 属性说明
进度

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
| 7 | [项目质量表聚合逻辑](#实体行为-项目质量表聚合逻辑（ProjectQualitySum）) | ProjectQualitySum | 实体处理逻辑 | 后台 |
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
### 实体行为-项目质量表聚合逻辑（ProjectQualitySum）
#### 说明
项目质量表聚合逻辑

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
| 1 | [项目质量表聚合逻辑](#逻辑处理-项目质量表聚合逻辑（ProjectQualitySum）) | ProjectQualitySum | 后台 |

### 逻辑处理-项目质量表聚合逻辑（ProjectQualitySum）
#### 说明
项目质量表聚合逻辑

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 获取聚合数 | Rawsqlcall1 | 直接SQL调用 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [项目名称（NAME）](#属性-项目名称（NAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [项目名称（NAME）](#属性-项目名称（NAME）) | `%like%` |
| 2 | [截止日期（END）](#属性-截止日期（END）) | `<=` |
| 3 | [状态（STATUS）](#属性-状态（STATUS）) | `=` |
| 4 | [状态（STATUS）](#属性-状态（STATUS）) | `!=`或者`<>` |
| 5 | [开始时间（BEGIN）](#属性-开始时间（BEGIN）) | `>=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 2 | [未关闭产品](#数据查询-未关闭产品（NoOpenProduct）) | NoOpenProduct | 否 |
| 3 | [项目bug类型](#数据查询-项目bug类型（ProjectBugType）) | ProjectBugType | 否 |
| 4 | [项目投入统计](#数据查询-项目投入统计（ProjectInputStats）) | ProjectInputStats | 否 |
| 5 | [项目进度](#数据查询-项目进度（ProjectProgress）) | ProjectProgress | 否 |
| 6 | [项目质量表查询](#数据查询-项目质量表查询（ProjectQuality）) | ProjectQuality | 否 |
| 7 | [项目需求阶段统计](#数据查询-项目需求阶段统计（ProjectStoryStageStats）) | ProjectStoryStageStats | 否 |
| 8 | [项目需求状态统计](#数据查询-项目需求状态统计（ProjectStoryStatusStats）) | ProjectStoryStatusStats | 否 |
| 9 | [项目任务统计(任务状态)](#数据查询-项目任务统计(任务状态)（ProjectTaskCountByTaskStatus）) | ProjectTaskCountByTaskStatus | 否 |
| 10 | [项目任务类型统计](#数据查询-项目任务类型统计（ProjectTaskCountByType）) | ProjectTaskCountByType | 否 |
| 11 | [任务工时消耗剩余查询](#数据查询-任务工时消耗剩余查询（TaskTime）) | TaskTime | 否 |
| 12 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVEBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0' ) AS `BUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY 
WHERE
	`STATUS` = 'closed' 
	AND FIND_IN_SET ( PRODUCT, ( SELECT GROUP_CONCAT( PRODUCT ) FROM ZT_PROJECTPRODUCT WHERE PROJECT = t1.`ID` ) ) 
	AND DELETED = '0' 
	) AS `CLOSEDSTORYCNT`,
	t1.`DELETED`,
	t1.`END`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'active' AND DELETED = '0' ) AS `FINISHBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND `STATUS` IN ( 'done', 'cancel', 'closed' ) 
	AND DELETED = '0' 
	) AS `FINISHTASKCNT`,
	t1.`ID`,
	t1.`NAME`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	stage = 'released' 
	AND PROJECT = t1.id 
	AND DELETED = '0' 
	) AS `RELEASEDSTORYCNT`,
	t1.`STATUS`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	) AS `STORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' ) AS `TASKCNT`,
	(
SELECT
	round( SUM( CONSUMED ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) AS `TOTALCONSUMED`,
	(
SELECT
	round( SUM( ESTIMATE ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) AS `TOTALESTIMATE`,
	(
SELECT
	round( SUM( `LEFT` ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) AS `TOTALLEFT`,
	(
	(
SELECT
	round( SUM( `LEFT` ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) + (
SELECT
	round( SUM( CONSUMED ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) 
	) AS `TOTALWH`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0' ) AS `UNCLOSEDBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	`STATUS` <> 'closed' 
	AND PROJECT = t1.`ID` 
	AND DELETED = '0' 
	) AS `UNCLOSEDSTORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0' ) AS `UNCONFIRMEDBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND `STATUS` NOT IN ( 'done', 'cancel', 'closed' ) 
	AND DELETED = '0' 
	) AS `UNDONETASKCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	zt_task t 
WHERE
	t.deleted = '0' 
	AND t.project = t1.id 
	AND t.`status` = 'closed' 
	AND t.closedDate BETWEEN CONCAT(
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
	) AS `YESTERDAYCTASKCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_BUG 
WHERE
	PROJECT = t1.`ID` 
	AND `STATUS` = 'resolved' 
	AND DELETED = '0' 
	AND RESOLVEDDATE BETWEEN CONCAT(
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
	) AS `YESTERDAYRBUGCNT` ,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN T2.OBJECTORDER ELSE  t1.`ORDER` END) as `ORDER1`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN 1 ELSE 0 END) as `ISTOP`
FROM
	`zt_project` t1
	left join t_ibz_top t2 on t1.id = t2.OBJECTID and t2.type = 'project' and t2.ACCOUNT = #{srf.sessioncontext.srfloginname}
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
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVEBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0' ) AS `BUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY 
WHERE
	`STATUS` = 'closed' 
	AND FIND_IN_SET ( PRODUCT, ( SELECT GROUP_CONCAT( PRODUCT ) FROM ZT_PROJECTPRODUCT WHERE PROJECT = t1.`ID` ) ) 
	AND DELETED = '0' 
	) AS `CLOSEDSTORYCNT`,
	t1.`DELETED`,
	t1.`END`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'active' AND DELETED = '0' ) AS `FINISHBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND `STATUS` IN ( 'done', 'cancel', 'closed' ) 
	AND DELETED = '0' 
	) AS `FINISHTASKCNT`,
	t1.`ID`,
	t1.`NAME`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	stage = 'released' 
	AND PROJECT = t1.id 
	AND DELETED = '0' 
	) AS `RELEASEDSTORYCNT`,
	t1.`STATUS`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	) AS `STORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' ) AS `TASKCNT`,
	(
SELECT
	round( SUM( CONSUMED ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) AS `TOTALCONSUMED`,
	(
SELECT
	round( SUM( ESTIMATE ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) AS `TOTALESTIMATE`,
	(
SELECT
	round( SUM( `LEFT` ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) AS `TOTALLEFT`,
	(
	(
SELECT
	round( SUM( `LEFT` ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) + (
SELECT
	round( SUM( CONSUMED ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) 
	) AS `TOTALWH`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0' ) AS `UNCLOSEDBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	`STATUS` <> 'closed' 
	AND PROJECT = t1.`ID` 
	AND DELETED = '0' 
	) AS `UNCLOSEDSTORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0' ) AS `UNCONFIRMEDBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND `STATUS` NOT IN ( 'done', 'cancel', 'closed' ) 
	AND DELETED = '0' 
	) AS `UNDONETASKCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	zt_task t 
WHERE
	t.deleted = '0' 
	AND t.project = t1.id 
	AND t.`status` = 'closed' 
	AND t.closedDate BETWEEN CONCAT(
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
	) AS `YESTERDAYCTASKCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_BUG 
WHERE
	PROJECT = t1.`ID` 
	AND `STATUS` = 'resolved' 
	AND DELETED = '0' 
	AND RESOLVEDDATE BETWEEN CONCAT(
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
	) AS `YESTERDAYRBUGCNT` ,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN T2.OBJECTORDER ELSE  t1.`ORDER` END) as `ORDER1`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN 1 ELSE 0 END) as `ISTOP`
FROM
	`zt_project` t1
	left join t_ibz_top t2 on t1.id = t2.OBJECTID and t2.type = 'project' and t2.ACCOUNT = #{srf.sessioncontext.srfloginname}
```
### 数据查询-项目bug类型（ProjectBugType）
#### 说明
项目bug类型

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
	IFNULL( t1.codeerror, 0 ) + IFNULL( t1.config, 0 ) + IFNULL( t1.designdefect, 0 ) + IFNULL( t1.standard, 0 ) + IFNULL( t1.performance, 0 ) + IFNULL( t1.others, 0 ) + IFNULL( t1.INSTALL, 0 ) + IFNULL( t1.automation, 0 ) + IFNULL( t1.SECURITY, 0 ) 
	) AS bugcnt 
FROM
(
SELECT
	t1.id,
	t1.po,
	t1.`status`,
	t1.NAME,
	sum( IF ( t1.type = 'codeerror' AND t1.deleted = '0', t1.rowcnt, 0 ) ) AS 'codeerror',
	sum( IF ( t1.type = 'config' AND t1.deleted = '0', t1.rowcnt, 0 ) ) AS 'config',
	sum( IF ( t1.type = 'designdefect' AND t1.deleted = '0', t1.rowcnt, 0 ) ) AS 'designdefect',
	sum( IF ( t1.type = 'standard' AND t1.deleted = '0', t1.rowcnt, 0 ) ) AS 'standard',
	sum( IF ( t1.type = 'performance' AND t1.deleted = '0', t1.rowcnt, 0 ) ) AS 'performance',
	sum( IF ( t1.type = 'others' AND t1.deleted = '0', t1.rowcnt, 0 ) ) AS 'others',
	sum( IF ( t1.type = 'install' AND t1.deleted = '0', t1.rowcnt, 0 ) ) AS 'install',
	sum( IF ( t1.type = 'automation' AND t1.deleted = '0', t1.rowcnt, 0 ) ) AS 'automation',
	sum( IF ( t1.type = 'security' AND t1.deleted = '0', t1.rowcnt, 0 ) ) AS 'security' 
	from 
	(SELECT
	t1.`id`,
	t1.`name`,
	t1.`po`,
	t1.`status`,
	t2.`type`,
	t2.`title`,
	t2.`deleted`,
	1 AS `rowcnt` 
FROM
	zt_project t1
	LEFT JOIN zt_bug t2 ON t1.`id` = t2.`project` 
WHERE
	t1.`deleted` = '0'
)t1 
 GROUP BY t1.id )t1 GROUP BY t1.id
```
### 数据查询-项目投入统计（ProjectInputStats）
#### 说明
项目投入统计

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select
t1.id, 
t1.`name`, 
CONCAT(t1.`begin`, ' ~ ', t1.`end`) as `timescale`, 
t1.`begin`, 
t1.`end`, 
t1.`status`, 
(select count(1) from zt_task t2 where t1.id = t2.project and t2.deleted = '0') as `taskcnt`,
(select count(1) from zt_projectstory t2 where t1.id = t2.project and exists(select 1 from zt_story t3 where t2.story = t3.id and t3.deleted = '0')) as `storycnt`,
(select count(1) from zt_team t2 where t2.type = 'project' and t1.id = t2.root) as `membercnt`, 
IFNULL((select sum(t2.consumed) from zt_taskestimate t2 where exists(select 1 from zt_task t3 where t3.project = t1.id and t3.id = t2.task and t3.deleted = '0')), 0) as `projecttotalconsumed` 
from zt_project t1
```
### 数据查询-项目进度（ProjectProgress）
#### 说明
项目进度

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.*,
	CONCAT(
	IFNULL( ROUND( ( t1.TOTALCONSUMED / ( t1.TOTALCONSUMED + t1.TOTALLEFT ) )*100, 2 ), 0 ),
	'%' 
	) AS progress 
FROM
	(
SELECT
	IFNULL(
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY 
WHERE
	`STAGE` IN ( 'projected', 'developing' ) 
	AND FIND_IN_SET ( PRODUCT, ( SELECT GROUP_CONCAT( PRODUCT ) FROM ZT_PROJECTPRODUCT WHERE PROJECT = t1.`ID` ) ) 
	AND DELETED = '0' 
	),
	0 
	) AS `LEFTSTORYCNT`,
	t1.`DELETED`,
	t1.`ID`,
	t1.`NAME`,
	t1.`STATUS`,
	IFNULL(
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY 
WHERE
	 FIND_IN_SET ( PRODUCT, ( SELECT GROUP_CONCAT( PRODUCT ) FROM ZT_PROJECTPRODUCT WHERE PROJECT = t1.`ID` ) ) 
	AND DELETED = '0'
	),
	0 
	) AS `STORYCNT`,
	IFNULL( ( SELECT COUNT( 1 ) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' ), 0 ) AS `TASKCNT`,
	IFNULL(
	(
SELECT
	round( SUM( CONSUMED ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	),
	0 
	) AS `TOTALCONSUMED`,
	IFNULL(
	(
SELECT
	round( SUM( `LEFT` ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	),
	0 
	) AS `TOTALLEFT`,
	IFNULL(
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND `STATUS` NOT IN ( 'done', 'cancel', 'closed' ) 
	AND DELETED = '0' 
	),
	0 
	) AS `UNDONETASKCNT`,
	( CASE WHEN T2.OBJECTORDER IS NOT NULL THEN T2.OBJECTORDER ELSE t1.`ORDER` END ) AS `ORDER1`,
	( CASE WHEN T2.OBJECTORDER IS NOT NULL THEN 1 ELSE 0 END ) AS `ISTOP` 
FROM
	`zt_project` t1
	LEFT JOIN t_ibz_top t2 ON t1.id = t2.OBJECTID 
	AND t2.type = 'project' 
	AND t2.ACCOUNT = #{srf.sessioncontext.srfloginname} 
WHERE
	t1.DELETED = '0' 
	AND (
	(
	t1.acl = 'private' 
	AND t1.id IN ( SELECT t3.root FROM zt_team t3 WHERE t3.account = #{srf.sessioncontext.srfloginname} AND t3.type = 'project' ) 
	) 
	OR t1.acl = 'open' 
	) 
	) t1
```
### 数据查询-项目质量表查询（ProjectQuality）
#### 说明
项目质量表查询

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.bugcnt,t1.completetaskcnt,t1.completestorycnt,t1.name,t1.storycnt,t1.FINISHBUGCNT,t1.taskcnt,t1.bugstory,t1.bugtask,IFNULL(t4.IMPORTANTBUGCNT,0) as IMPORTANTBUGCNT ,CONCAT(round(IFNULL((IMPORTANTBUGCNT/t1.bugcnt),0),2)*100,'%')  as SERIOUSBUGPROPORTION from (
SELECT
	t1.*,
	IFNULL( t3.bugtask, 0 ) AS bugtask 
FROM
	(
SELECT
	t1.*,
	IFNULL( t22.bugstory, 0 ) AS bugstory 
FROM
	(
SELECT
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0' ) AS `BUGCNT`,
	t1.`DELETED`,
	t1.`END`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'active' AND DELETED = '0' ) AS `FINISHBUGCNT`,
	(SELECT count(1) from zt_task where PROJECT = t1.`ID` AND `STATUS`='done' AND DELETED = '0')as completetaskcnt,
	(SELECT count( 1 ) FROM (SELECT t1.project,t1.story from zt_projectstory t1 left join zt_story t2 on t1.story = t2.id where t2.stage in ('verified','released','closed') and t2.deleted='0'
)t2 WHERE t1.id = t2.project) as completestorycnt,
	t1.`ID`,
	t1.`NAME`,
	t1.`STATUS`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	) AS `STORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' ) AS `TASKCNT` 
FROM
	`zt_project` t1
	LEFT JOIN t_ibz_top t2 ON t1.id = t2.OBJECTID 
	AND t2.type = 'project' 
	AND t2.ACCOUNT = 'csd123_123' 
WHERE
	t1.DELETED = '0' 
	AND (
	(
	t1.acl = 'private' 
	AND t1.id IN ( SELECT t3.root FROM zt_team t3 WHERE t3.account = 'csd123_123' AND t3.type = 'project' ) 
	) 
	OR t1.acl = 'open' 
	) 
	) t1
	LEFT JOIN (
SELECT
	t1.project,
	count( 1 ) AS bugstory 
FROM
	(
SELECT
	t1.project,
	t1.story,
	t2.title 
FROM
	zt_bug t1
	LEFT JOIN zt_story t2 ON t1.story = t2.id
	LEFT JOIN zt_project t22 ON t1.project = t22.id 
WHERE
	t1.deleted = '0' 
	AND t1.project <> '0' 
	AND t1.story <> '0' 
	AND t22.deleted = '0' 
	) t1 
GROUP BY
	t1.project 
	) t22 ON t1.id = t22.project 
	) t1
	LEFT JOIN (
SELECT
	t1.project,
	count( 1 ) AS bugtask 
FROM
	(
SELECT
	t1.project,
	t1.task,
	t1.title,
	t2.NAME 
FROM
	zt_bug t1
	LEFT JOIN zt_task t2 ON t1.task = t2.id
	LEFT JOIN zt_project t22 ON t1.project = t22.id 
WHERE
	t1.deleted = '0' 
	AND t1.project <> '0' 
	AND t1.task <> '0' 
	AND t22.deleted = '0' 
	) t1 
GROUP BY
	t1.project 
	) t3 ON t1.id = t3.project
	)t1 Left join (SELECT t1.project, count(1) as IMPORTANTBUGCNT from zt_bug t1 where t1.severity <=3 and t1.deleted='0' and t1.project <> '0' GROUP BY t1.project)t4 on t1.id=t4.project
```
### 数据查询-项目需求阶段统计（ProjectStoryStageStats）
#### 说明
项目需求阶段统计

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select 
t1.id, 
t1.`name`, 
t1.`status`, 
sum(case when t3.`stage` = '' then 1 else 0 end) as `EmptyStageStoryCNT`, 
sum(case when t3.`stage` = 'wait' then 1 else 0 end) as `WaitStageStoryCNT`, 
sum(case when t3.`stage` = 'planned' then 1 else 0 end) as `PlannedStageStoryCNT`, 
sum(case when t3.`stage` = 'projected' then 1 else 0 end) as `ProjectedStageStoryCNT`, 
sum(case when t3.`stage` = 'developing' then 1 else 0 end) as `DevelopingStageStoryCNT`, 
sum(case when t3.`stage` = 'developed' then 1 else 0 end) as `DevelopedStageStoryCNT`, 
sum(case when t3.`stage` = 'testing' then 1 else 0 end) as `TestingStageStoryCNT`, 
sum(case when t3.`stage` = 'tested' then 1 else 0 end) as `TestedStageStoryCNT`, 
sum(case when t3.`stage` = 'verified' then 1 else 0 end) as `VerifiedStageStoryCNT`, 
sum(case when t3.`stage` = 'released' then 1 else 0 end) as `ReleasedStageStoryCNT`, 
sum(case when t3.`stage` = 'closed' then 1 else 0 end) as `ClosedStageStoryCNT`, 
sum(case when t3.`stage` is not null then 1 else 0 end) as `StoryCNT` 
from 
zt_project t1 
left join zt_projectstory t2 on t1.id = t2.project 
left join zt_story t3 on t2.story = t3.id and t3.deleted = '0' 
where t1.deleted = '0' 
group by t1.id
```
### 数据查询-项目需求状态统计（ProjectStoryStatusStats）
#### 说明
项目需求状态统计

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select 
t1.id, 
t1.`name`, 
t1.`status`, 
sum(case when t3.`status` = '' then 1 else 0 end) as `EmptyStory`, 
sum(case when t3.`status` = 'draft' then 1 else 0 end) as `DraftStory`, 
sum(case when t3.`status` = 'active' then 1 else 0 end) as `ActiveStory`, 
sum(case when t3.`status` = 'closed' then 1 else 0 end) as `ClosedStory`, 
sum(case when t3.`status` = 'changed' then 1 else 0 end) as `ChangedStory`, 
sum(case when t3.`status` is not null then 1 else 0 end) as `StoryCNT` 
from 
zt_project t1 
left join zt_projectstory t2 on t1.id = t2.project 
left join zt_story t3 on t2.story = t3.id and t3.deleted = '0' 
where t1.deleted = '0' 
group by t1.id
```
### 数据查询-项目任务统计(任务状态)（ProjectTaskCountByTaskStatus）
#### 说明
项目任务统计(任务状态)

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.project,t1.projectname  as name,
SUM(IF(t1.`status` = 'closed',t1.ss,0)) as closedtaskcnt,
SUM(IF(t1.`status` = 'cancel',t1.ss,0)) as cancelTaskcnt,
SUM(IF(t1.`status` = 'done',t1.ss,0)) as doneTaskcnt,
SUM(IF(t1.`status` = 'pause',t1.ss,0)) as pauseTaskcnt,
SUM(IF(t1.`status` = 'wait',t1.ss,0)) as waitTaskcnt,
SUM(IF(t1.`status` = 'doing',t1.ss,0)) as doingTaskcnt,
COUNT(1) as taskcnt,
t1.deleted
from (
select t1.`status`,t1.project,t2.`name` as projectname, 1 as ss,t2.deleted from zt_task t1 LEFT JOIN zt_project t2 on t1.project = t2.id where t1.deleted = '0' and t1.project <> '0' ) t1 GROUP BY t1.project
```
### 数据查询-项目任务类型统计（ProjectTaskCountByType）
#### 说明
项目任务类型统计

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t2.id,t2.`name`,IFNULL(t1.designtaskcnt,0) as designtaskcnt,IFNULL(t1.discusstaskcnt,0) as discusstaskcnt, IFNULL(t1.studytaskcnt,0) as studytaskcnt,IFNULL(t1.uitaskcnt,0) as uitaskcnt, IFNULL(t1.testtaskcnt,0) as testtaskcnt,IFNULL(t1.servetaskcnt,0) as servetaskcnt,IFNULL(t1.develtaskcnt,0) as develtaskcnt,IFNULL(t1.misctaskcnt,0) as misctaskcnt,IFNULL(t1.affairtaskcnt,0) as affairtaskcnt,IFNULL(t1.taskcnt,0) as taskcnt ,t1.`status`,t1.`begin`,t1.closedDate as `end`

from (
SELECT t1.project,t1.`name`,t1.`status`,t1.`begin`,t1.closedDate,
SUM(IF(t1.type = 'design',t1.num,0)) as designtaskcnt,
SUM(IF(t1.type = 'discuss',t1.num,0)) as discusstaskcnt,
SUM(IF(t1.type = 'study',t1.num,0)) as studytaskcnt,
SUM(IF(t1.type = 'ui',t1.num,0)) as uitaskcnt,
SUM(IF(t1.type = 'test',t1.num,0)) as testtaskcnt,
SUM(IF(t1.type = 'serve',t1.num,0)) as servetaskcnt,
SUM(IF(t1.type = 'devel',t1.num,0)) as develtaskcnt,
SUM(IF(t1.type = 'misc',t1.num,0)) as misctaskcnt,
SUM(IF(t1.type = 'affair',t1.num,0)) as affairtaskcnt,
COUNT(1) as taskcnt
from(
select t1.type,t1.project,t2.`name`,t2.`status`,t2.`begin`,t2.closedDate,1 as num from zt_task t1 LEFT JOIN zt_project t2 on t1.project = t2.id where t1.deleted = '0' and t2.id <> '0' and t2.deleted = '0') t1
GROUP BY t1.project ) t1 RIGHT JOIN zt_project t2 on t1.project = t2.id where t2.deleted = '0' and (t1.`status` = #{srf.datacontext.status} or #{srf.datacontext.status} is null)
and (DATE_FORMAT(t1.`begin`,'%Y-%m-%d') >=  #{srf.datacontext.begin} or #{srf.datacontext.begin} is null)
and (DATE_FORMAT(t1.`closedDate`,'%Y-%m-%d') >=  #{srf.datacontext.end} or #{srf.datacontext.end} is null)

```
### 数据查询-任务工时消耗剩余查询（TaskTime）
#### 说明
该查询主要供统计图表使用

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ID`,
(SELECT SUM(CONSUMED) FROM ZT_TASK WHERE PROJECT = t1.`ID`) AS `TIME`,
'CONSUMED' AS `TYPE`
FROM `zt_project` t1 WHERE t1.`ID` =  ${srfdatacontext('srfparentkey','{"defname":"PROJECTSTATS","dename":"IBZ_PROJECTSTATS"}')} AND t1.DELETED = 0
UNION ALL 
SELECT
t2.`ID`,
(SELECT SUM(`LEFT`) FROM ZT_TASK WHERE PROJECT = t2.`ID` AND t1.DELETED = 0) AS `TIME`,
'LEFT' AS `TYPE`
FROM `zt_project` t2 WHERE t2.`ID` = ${srfdatacontext('srfparentkey','{"defname":"PROJECTSTATS","dename":"IBZ_PROJECTSTATS"}')}  AND t1.DELETED = 0

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0') AS `ACTIVEBUGCNT`,
0 AS `ACTIVESTORY`,
t1.`BEGIN`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `BUGCNT`,
0 AS `CHANGEDSTORY`,
0 AS `CLOSEDSTAGESTORYCNT`,
0 AS `CLOSEDSTORY`,
(SELECT COUNT(1) FROM ZT_STORY WHERE `STATUS` =  'closed' AND FIND_IN_SET (PRODUCT, (SELECT GROUP_CONCAT(PRODUCT) FROM ZT_PROJECTPRODUCT WHERE PROJECT= t1.`ID`)) AND DELETED = '0' ) AS `CLOSEDSTORYCNT`,
t1.`DELETED`,
0 AS `DEVELOPEDSTAGESTORYCNT`,
0 AS `DEVELOPINGSTAGESTORYCNT`,
0 AS `DRAFTSTORY`,
0 AS `EMPTYSTAGESTORYCNT`,
0 AS `EMPTYSTORY`,
t1.`END`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'active' AND DELETED = '0') AS `FINISHBUGCNT`,
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND `STATUS` IN ('done','cancel','closed') AND DELETED = '0') AS `FINISHTASKCNT`,
t1.`ID`,
0 AS `MEMBERCNT`,
t1.`NAME`,
t1.`order` AS `ORDER1`,
0 AS `PLANNEDSTAGESTORYCNT`,
0 AS `PROJECTEDSTAGESTORYCNT`,
0 AS `PROJECTTOTALCONSUMED`,
0 AS `RELEASEDSTAGESTORYCNT`,
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE stage = 'released' AND PROJECT = t1.id AND DELETED = '0') AS `RELEASEDSTORYCNT`,
null AS `SERIOUSBUGPROPORTION`,
t1.`STATUS`,
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `STORYCNT`,
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `TASKCNT`,
0 AS `TESTEDSTAGESTORYCNT`,
0 AS `TESTINGSTAGESTORYCNT`,
(SELECT round(SUM(CONSUMED),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALCONSUMED`,
(SELECT round(SUM(ESTIMATE),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED =  '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALESTIMATE`,
(SELECT round(SUM(`LEFT`),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALLEFT`,
((SELECT round(SUM( `LEFT` ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) ) + (SELECT round(SUM( CONSUMED ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) )) AS `TOTALWH`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0') AS `UNCLOSEDBUGCNT`,
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE `STATUS` <>  'closed' AND PROJECT = t1.`ID` AND DELETED = '0') AS `UNCLOSEDSTORYCNT`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0') AS `UNCONFIRMEDBUGCNT`,
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND `STATUS` NOT IN ('done','cancel','closed') AND DELETED =  '0') AS `UNDONETASKCNT`,
0 AS `VERIFIEDSTAGESTORYCNT`,
0 AS `WAITSTAGESTORYCNT`,
(select COUNT(1) from zt_task t where t.deleted = '0' and t.project = t1.id and t.`status` = 'closed' and t.closedDate BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59') ) AS `YESTERDAYCTASKCNT`,
(SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` = 'resolved' AND DELETED = '0' and RESOLVEDDATE BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59')) AS `YESTERDAYRBUGCNT`
FROM `zt_project` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 2 | [未关闭产品](#数据集合-未关闭产品（NoOpenProduct）) | NoOpenProduct | 否 |
| 3 | [项目bug类型统计](#数据集合-项目bug类型统计（ProjectBugType）) | ProjectBugType | 否 |
| 4 | [项目投入统计](#数据集合-项目投入统计（ProjectInputStats）) | ProjectInputStats | 否 |
| 5 | [项目进度](#数据集合-项目进度（ProjectProgress）) | ProjectProgress | 否 |
| 6 | [项目质量](#数据集合-项目质量（ProjectQuality）) | ProjectQuality | 否 |
| 7 | [项目需求阶段统计](#数据集合-项目需求阶段统计（ProjectStoryStageStats）) | ProjectStoryStageStats | 否 |
| 8 | [项目需求状态统计](#数据集合-项目需求状态统计（ProjectStoryStatusStats）) | ProjectStoryStatusStats | 否 |
| 9 | [项目任务统计(任务状态)](#数据集合-项目任务统计(任务状态)（ProjectTaskCountByTaskStatus）) | ProjectTaskCountByTaskStatus | 否 |
| 10 | [项目任务类型统计](#数据集合-项目任务类型统计（ProjectTaskCountByType）) | ProjectTaskCountByType | 否 |
| 11 | [任务工时消耗剩余查询](#数据集合-任务工时消耗剩余查询（TaskTime）) | TaskTime | 否 |

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
### 数据集合-项目bug类型统计（ProjectBugType）
#### 说明
项目bug类型统计

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目bug类型（ProjectBugType）](#数据查询-项目bug类型（ProjectBugType）) |
### 数据集合-项目投入统计（ProjectInputStats）
#### 说明
项目投入统计

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目投入统计（ProjectInputStats）](#数据查询-项目投入统计（ProjectInputStats）) |
### 数据集合-项目进度（ProjectProgress）
#### 说明
项目进度

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目进度（ProjectProgress）](#数据查询-项目进度（ProjectProgress）) |
### 数据集合-项目质量（ProjectQuality）
#### 说明
项目质量

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目质量表查询（ProjectQuality）](#数据查询-项目质量表查询（ProjectQuality）) |
### 数据集合-项目需求阶段统计（ProjectStoryStageStats）
#### 说明
项目需求阶段统计

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目需求阶段统计（ProjectStoryStageStats）](#数据查询-项目需求阶段统计（ProjectStoryStageStats）) |
### 数据集合-项目需求状态统计（ProjectStoryStatusStats）
#### 说明
项目需求状态统计

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目需求状态统计（ProjectStoryStatusStats）](#数据查询-项目需求状态统计（ProjectStoryStatusStats）) |
### 数据集合-项目任务统计(任务状态)（ProjectTaskCountByTaskStatus）
#### 说明
项目任务统计(任务状态)

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目任务统计(任务状态)（ProjectTaskCountByTaskStatus）](#数据查询-项目任务统计(任务状态)（ProjectTaskCountByTaskStatus）) |
### 数据集合-项目任务类型统计（ProjectTaskCountByType）
#### 说明
项目任务类型统计

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目任务类型统计（ProjectTaskCountByType）](#数据查询-项目任务类型统计（ProjectTaskCountByType）) |
### 数据集合-任务工时消耗剩余查询（TaskTime）
#### 说明
任务工时消耗剩余查询

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [任务工时消耗剩余查询（TaskTime）](#数据查询-任务工时消耗剩余查询（TaskTime）) |

## 数据导入
无

## 数据导出
| 序号 | 数据导出 | 数据导出名 | 最大导出数量 |
| ---- | ---- | ---- | ---- |
| 1 | [项目任务类型统计-数据导出](#数据导出-项目任务类型统计-数据导出（ProjectTaskType）) | ProjectTaskType | 1,000 |

### 数据导出-项目任务类型统计-数据导出（ProjectTaskType）
#### 说明
项目任务类型统计-数据导出

- 最大导出数
1,000

- 行为持有者
后台及前台

| 序号 | 导出标题 | 属性 | 默认值 |
| ---- | ---- | ---- | ---- |
| 1 | 项目名称 | [项目名称（NAME）](#属性-项目名称（NAME）) |  |
| 2 | 设计 | [设计类型任务（DESIGNTASKCNT）](#属性-设计类型任务（DESIGNTASKCNT）) |  |
| 3 | 开发 | [开发类型任务（DEVELTASKCNT）](#属性-开发类型任务（DEVELTASKCNT）) |  |
| 4 | 测试 | [测试类型任务（TESTTASKCNT）](#属性-测试类型任务（TESTTASKCNT）) |  |
| 5 | 研究 | [研究类型任务（STUDYTASKCNT）](#属性-研究类型任务（STUDYTASKCNT）) |  |
| 6 | 讨论 | [讨论类型任务（DISCUSSTASKCNT）](#属性-讨论类型任务（DISCUSSTASKCNT）) |  |
| 7 | 界面 | [界面类型任务（UITASKCNT）](#属性-界面类型任务（UITASKCNT）) |  |
| 8 | 事务 | [事务类型任务（AFFAIRTASKCNT）](#属性-事务类型任务（AFFAIRTASKCNT）) |  |
| 9 | 服务 | [服务类型任务（SERVETASKCNT）](#属性-服务类型任务（SERVETASKCNT）) |  |
| 10 | 其他 | [其他类型任务（MISCTASKCNT）](#属性-其他类型任务（MISCTASKCNT）) |  |
| 11 | 总计 | [任务总数（TASKCNT）](#属性-任务总数（TASKCNT）) |  |

