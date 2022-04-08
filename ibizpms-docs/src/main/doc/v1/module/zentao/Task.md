
# 实体-任务(ZT_TASK)
## 实体说明
任务

## 所属模块
[基础管理模块](../zentao)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [任务团队（IBZ_TASKTEAM）](../ibiz/TaskTeam) | 嵌套操作 |
| 2 | [Bug（ZT_BUG）](../zentao/Bug) | （默认） |
| 3 | [Bug（ZT_BUG）](../zentao/Bug) | （默认） |
| 4 | [burn（ZT_BURN）](../zentao/Burn) | （默认） |
| 5 | [任务预计（ZT_TASKESTIMATE）](../zentao/TaskEstimate) | 嵌套操作 |
| 6 | [任务（ZT_TASK）](../zentao/Task) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) | （默认） |
| 2 | [Bug（ZT_BUG）](../zentao/Bug) | （默认） |
| 3 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) | （默认） |
| 4 | [项目（ZT_PROJECT）](../zentao/Project) | （默认） |
| 5 | [需求（ZT_STORY）](../zentao/Story) | （默认） |
| 6 | [任务（ZT_TASK）](../zentao/Task) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [由谁取消](#属性-由谁取消（CANCELEDBY）) | CANCELEDBY | 单项选择(文本值) | 否 | 否 | 是 |
| 2 | [预计剩余](#属性-预计剩余（LEFT）) | LEFT | 浮点 | 否 | 否 | 是 |
| 3 | [创建日期](#属性-创建日期（OPENEDDATE）) | OPENEDDATE | 日期时间型 | 否 | 否 | 是 |
| 4 | [标题颜色](#属性-标题颜色（COLOR）) | COLOR | 单项选择(文本值) | 否 | 否 | 是 |
| 5 | [编号](#属性-编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 6 | [由谁完成](#属性-由谁完成（FINISHEDBY）) | FINISHEDBY | 单项选择(文本值) | 否 | 否 | 是 |
| 7 | [完成者列表](#属性-完成者列表（FINISHEDLIST）) | FINISHEDLIST | 长文本，没有长度限制 | 否 | 否 | 是 |
| 8 | [实际开始](#属性-实际开始（REALSTARTED）) | REALSTARTED | 日期型 | 否 | 否 | 是 |
| 9 | [由谁关闭](#属性-由谁关闭（CLOSEDBY）) | CLOSEDBY | 单项选择(文本值) | 否 | 否 | 是 |
| 10 | [子状态](#属性-子状态（SUBSTATUS）) | SUBSTATUS | 文本，可指定长度 | 否 | 否 | 是 |
| 11 | [关闭原因](#属性-关闭原因（CLOSEDREASON）) | CLOSEDREASON | 单项选择(文本值) | 否 | 否 | 是 |
| 12 | [最后修改日期](#属性-最后修改日期（LASTEDITEDDATE）) | LASTEDITEDDATE | 日期时间型 | 否 | 否 | 是 |
| 13 | [指派日期](#属性-指派日期（ASSIGNEDDATE）) | ASSIGNEDDATE | 日期时间型 | 否 | 否 | 是 |
| 14 | [优先级](#属性-优先级（PRI）) | PRI | 单项选择(数值) | 否 | 否 | 是 |
| 15 | [最后修改](#属性-最后修改（LASTEDITEDBY）) | LASTEDITEDBY | 单项选择(文本值) | 否 | 否 | 是 |
| 16 | [任务状态](#属性-任务状态（STATUS）) | STATUS | 单项选择(文本值) | 否 | 否 | 是 |
| 17 | [任务名称](#属性-任务名称（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 否 |
| 18 | [关闭时间](#属性-关闭时间（CLOSEDDATE）) | CLOSEDDATE | 日期时间型 | 否 | 否 | 是 |
| 19 | [任务类型](#属性-任务类型（TYPE）) | TYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 20 | [指派给](#属性-指派给（ASSIGNEDTO）) | ASSIGNEDTO | 文本，可指定长度 | 否 | 否 | 是 |
| 21 | [任务描述](#属性-任务描述（DESC）) | DESC | 长文本，没有长度限制 | 否 | 否 | 是 |
| 22 | [预计开始](#属性-预计开始（ESTSTARTED）) | ESTSTARTED | 日期型 | 否 | 否 | 是 |
| 23 | [截止日期](#属性-截止日期（DEADLINE）) | DEADLINE | 日期型 | 否 | 否 | 是 |
| 24 | [已删除](#属性-已删除（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 25 | [抄送给](#属性-抄送给（MAILTO）) | MAILTO | 多项选择(文本值) | 否 | 否 | 是 |
| 26 | [总计消耗](#属性-总计消耗（CONSUMED）) | CONSUMED | 浮点 | 否 | 否 | 是 |
| 27 | [最初预计](#属性-最初预计（ESTIMATE）) | ESTIMATE | 浮点 | 否 | 否 | 是 |
| 28 | [由谁创建](#属性-由谁创建（OPENEDBY）) | OPENEDBY | 单项选择(文本值) | 否 | 否 | 是 |
| 29 | [取消时间](#属性-取消时间（CANCELEDDATE）) | CANCELEDDATE | 日期时间型 | 否 | 否 | 是 |
| 30 | [实际完成](#属性-实际完成（FINISHEDDATE）) | FINISHEDDATE | 日期型 | 否 | 否 | 是 |
| 31 | [所属模块](#属性-所属模块（MODULENAME）) | MODULENAME | 外键值文本 | 否 | 是 | 是 |
| 32 | [相关需求](#属性-相关需求（STORYNAME）) | STORYNAME | 外键值文本 | 否 | 是 | 是 |
| 33 | [所属项目](#属性-所属项目（PROJECTNAME）) | PROJECTNAME | 外键值文本 | 否 | 是 | 是 |
| 34 | [产品](#属性-产品（PRODUCT）) | PRODUCT | 外键值附加数据 | 否 | 是 | 是 |
| 35 | [需求版本](#属性-需求版本（STORYVERSION）) | STORYVERSION | 外键值附加数据 | 否 | 是 | 是 |
| 36 | [产品](#属性-产品（PRODUCTNAME）) | PRODUCTNAME | 外键值附加数据 | 否 | 是 | 是 |
| 37 | [父任务](#属性-父任务（PARENTNAME）) | PARENTNAME | 外键值文本 | 否 | 是 | 是 |
| 38 | [所属项目](#属性-所属项目（PROJECT）) | PROJECT | 外键值 | 否 | 是 | 是 |
| 39 | [相关需求](#属性-相关需求（STORY）) | STORY | 外键值 | 否 | 是 | 是 |
| 40 | [父任务](#属性-父任务（PARENT）) | PARENT | 外键值 | 否 | 是 | 是 |
| 41 | [来源Bug](#属性-来源Bug（FROMBUG）) | FROMBUG | 外键值 | 否 | 是 | 是 |
| 42 | [持续时间](#属性-持续时间（DURATION）) | DURATION | 文本，可指定长度 | 否 | 是 | 是 |
| 43 | [模块](#属性-模块（MODULE）) | MODULE | 外键值 | 否 | 是 | 是 |
| 44 | [模块路径](#属性-模块路径（PATH）) | PATH | 外键值附加数据 | 否 | 是 | 是 |
| 45 | [备注](#属性-备注（COMMENT）) | COMMENT | HTML文本，没有长度限制 | 否 | 是 | 是 |
| 46 | [本次消耗](#属性-本次消耗（CURRENTCONSUMED）) | CURRENTCONSUMED | 浮点 | 否 | 是 | 是 |
| 47 | [总计耗时](#属性-总计耗时（TOTALTIME）) | TOTALTIME | 浮点 | 否 | 是 | 是 |
| 48 | [是否子任务](#属性-是否子任务（ISLEAF）) | ISLEAF | 文本，可指定长度 | 否 | 是 | 是 |
| 49 | [所有模块](#属性-所有模块（ALLMODULES）) | ALLMODULES | 文本，可指定长度 | 否 | 是 | 是 |
| 50 | [多人任务](#属性-多人任务（MULTIPLE）) | MULTIPLE | 文本，可指定长度 | 否 | 是 | 是 |
| 51 | [项目团队成员](#属性-项目团队成员（TASKTEAMS）) | TASKTEAMS | 一对多关系数据集合 | 否 | 是 | 是 |
| 52 | [所属模块](#属性-所属模块（MODULENAME1）) | MODULENAME1 | 文本，可指定长度 | 否 | 是 | 是 |
| 53 | [工时](#属性-工时（IBZTASKESTIMATES）) | IBZTASKESTIMATES | 一对多关系数据集合 | 否 | 是 | 是 |
| 54 | [是否收藏](#属性-是否收藏（ISFAVORITES）) | ISFAVORITES | 文本，可指定长度 | 否 | 是 | 是 |
| 55 | [任务状态](#属性-任务状态（STATUS1）) | STATUS1 | 单项选择(文本值) | 否 | 是 | 是 |
| 56 | [任务类型](#属性-任务类型（TASKTYPE）) | TASKTYPE | 单项选择(文本值) | 否 | 是 | 是 |
| 57 | [附件](#属性-附件（FILES）) | FILES | 文本，可指定长度 | 否 | 是 | 是 |
| 58 | [团队用户](#属性-团队用户（USERNAMES）) | USERNAMES | 文本，可指定长度 | 否 | 是 | 是 |
| 59 | [是否完成](#属性-是否完成（ISFINISHED）) | ISFINISHED | 文本，可指定长度 | 否 | 是 | 是 |
| 60 | [回复数量](#属性-回复数量（REPLYCOUNT）) | REPLYCOUNT | 整型 | 否 | 是 | 是 |
| 61 | [是否填写描述](#属性-是否填写描述（HASDETAIL）) | HASDETAIL | 文本，可指定长度 | 否 | 是 | 是 |
| 62 | [最后的更新日期](#属性-最后的更新日期（UPDATEDATE）) | UPDATEDATE | 日期型 | 否 | 是 | 是 |
| 63 | [消息通知用户](#属性-消息通知用户（NOTICEUSERS）) | NOTICEUSERS | 文本，可指定长度 | 否 | 是 | 是 |
| 64 | [进度](#属性-进度（PROGRESSRATE）) | PROGRESSRATE | 文本，可指定长度 | 否 | 是 | 是 |
| 65 | [延期](#属性-延期（DELAY）) | DELAY | 文本，可指定长度 | 否 | 是 | 是 |
| 66 | [抄送给](#属性-抄送给（MAILTOPK）) | MAILTOPK | 多项选择(文本值) | 否 | 是 | 是 |
| 67 | [联系人](#属性-联系人（MAILTOCONACT）) | MAILTOCONACT | 文本，可指定长度 | 否 | 是 | 是 |
| 68 | [排序](#属性-排序（STATUSORDER）) | STATUSORDER | 整型 | 否 | 是 | 是 |
| 69 | [之前消耗](#属性-之前消耗（MYCONSUMED）) | MYCONSUMED | 浮点 | 否 | 是 | 是 |
| 70 | [我的总消耗](#属性-我的总消耗（MYTOTALTIME）) | MYTOTALTIME | 浮点 | 否 | 是 | 是 |
| 71 | [转交给](#属性-转交给（ASSIGNEDTOZJ）) | ASSIGNEDTOZJ | 文本，可指定长度 | 否 | 是 | 是 |
| 72 | [编号](#属性-编号（PLAN）) | PLAN | 外键值 | 否 | 是 | 是 |
| 73 | [任务种别](#属性-任务种别（TASKSPECIES）) | TASKSPECIES | 单项选择(文本值) | 否 | 是 | 是 |
| 74 | [周期设置周几](#属性-周期设置周几（CONFIG_WEEK）) | CONFIG_WEEK | 多项选择(文本值) | 否 | 是 | 是 |
| 75 | [周期设置月](#属性-周期设置月（CONFIG_MONTH）) | CONFIG_MONTH | 多项选择(文本值) | 否 | 是 | 是 |
| 76 | [周期类型](#属性-周期类型（CONFIG_TYPE）) | CONFIG_TYPE | 单项选择(文本值) | 否 | 是 | 是 |
| 77 | [提前天数](#属性-提前天数（CONFIG_BEFOREDAYS）) | CONFIG_BEFOREDAYS | 整型 | 否 | 是 | 是 |
| 78 | [间隔天数](#属性-间隔天数（CONFIG_DAY）) | CONFIG_DAY | 整型 | 否 | 是 | 是 |
| 79 | [过期日期](#属性-过期日期（CONFIG_END）) | CONFIG_END | 日期型 | 否 | 是 | 是 |
| 80 | [开始日期](#属性-开始日期（CONFIG_BEGIN）) | CONFIG_BEGIN | 日期型 | 否 | 是 | 是 |
| 81 | [所属计划](#属性-所属计划（PLANNAME）) | PLANNAME | 外键值文本 | 否 | 是 | 是 |
| 82 | [关联编号](#属性-关联编号（IDVALUE）) | IDVALUE | 大整型 | 否 | 是 | 是 |
| 83 | [周期](#属性-周期（CYCLE）) | CYCLE | 整型 | 否 | 是 | 是 |
| 84 | [是否指派](#属性-是否指派（ASSIGN）) | ASSIGN | 文本，可指定长度 | 否 | 是 | 是 |
| 85 | [投入成本](#属性-投入成本（INPUTCOST）) | INPUTCOST | 浮点 | 否 | 是 | 是 |

### 属性-由谁取消（CANCELEDBY）
#### 属性说明
由谁取消

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-预计剩余（LEFT）
#### 属性说明
预计剩余

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-标题颜色（COLOR）
#### 属性说明
标题颜色

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
参照数据字典【[任务颜色（Task__color）](../../codelist/Task__color)】

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
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
是

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `!=`或者`<>` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-由谁完成（FINISHEDBY）
#### 属性说明
由谁完成

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-完成者列表（FINISHEDLIST）
#### 属性说明
完成者列表

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-实际开始（REALSTARTED）
#### 属性说明
实际开始

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-由谁关闭（CLOSEDBY）
#### 属性说明
由谁关闭

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-关闭原因（CLOSEDREASON）
#### 属性说明
关闭原因

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
参照数据字典【[任务关闭原因（Task__closed_reason）](../../codelist/Task__closed_reason)】

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `>=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-优先级（PRI）
#### 属性说明
此处默认值从0修改为3

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
单项选择(数值)

- Java类型
Integer

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 3 |

- 取值范围/公式
参照数据字典【[任务优先级（Task__pri）](../../codelist/Task__pri)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |
| 2 | `in(...)` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-最后修改（LASTEDITEDBY）
#### 属性说明
最后修改

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-任务状态（STATUS）
#### 属性说明
任务状态

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
| 值 | wait |

- 取值范围/公式
参照数据字典【[任务状态（Task__status）](../../codelist/Task__status)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |
| 2 | `in(...)` |
| 3 | `!=`或者`<>` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-任务名称（NAME）
#### 属性说明
任务名称

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-关闭时间（CLOSEDDATE）
#### 属性说明
关闭时间

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `<=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-任务类型（TYPE）
#### 属性说明
任务类型

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
| 值 | devel |

- 取值范围/公式
参照数据字典【[任务类型（Task__type）](../../codelist/Task__type)】

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
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
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 |  |

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
| 2 | `in(...)` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-任务描述（DESC）
#### 属性说明
任务描述

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-预计开始（ESTSTARTED）
#### 属性说明
预计开始

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
| 2 | `<=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-截止日期（DEADLINE）
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
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-抄送给（MAILTO）
#### 属性说明
抄送给

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
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 |  |

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-总计消耗（CONSUMED）
#### 属性说明
总计消耗

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-最初预计（ESTIMATE）
#### 属性说明
最初预计

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-取消时间（CANCELEDDATE）
#### 属性说明
取消时间

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-实际完成（FINISHEDDATE）
#### 属性说明
实际完成

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-所属模块（MODULENAME）
#### 属性说明
所属模块

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-相关需求（STORYNAME）
#### 属性说明
相关需求

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
| 关系实体 | [需求（ZT_STORY）](../zentao/Story) |
| 关系属性 | [需求名称（TITLE）](../zentao/Story/#属性-需求名称（TITLE）) |
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

### 属性-产品（PRODUCT）
#### 属性说明
产品

- 是否是主键
否

- 属性类型
链接字段[来自关系实体字段]

- 数据类型
外键值附加数据

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
| 关系实体 | [需求（ZT_STORY）](../zentao/Story) |
| 关系属性 | [所属产品（PRODUCT）](../zentao/Story/#属性-所属产品（PRODUCT）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-需求版本（STORYVERSION）
#### 属性说明
半物理字段，且通过确认需求变更操作进行变动

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值附加数据

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
| 关系实体 | [需求（ZT_STORY）](../zentao/Story) |
| 关系属性 | [版本号（VERSION）](../zentao/Story/#属性-版本号（VERSION）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-产品（PRODUCTNAME）
#### 属性说明
产品

- 是否是主键
否

- 属性类型
链接字段[来自关系实体字段]

- 数据类型
外键值附加数据

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
| 关系实体 | [需求（ZT_STORY）](../zentao/Story) |
| 关系属性 | [产品名称（PRODOCTNAME）](../zentao/Story/#属性-产品名称（PRODOCTNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-父任务（PARENTNAME）
#### 属性说明
父任务

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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [任务名称（NAME）](../zentao/Task/#属性-任务名称（NAME）) |
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
| 2 | `in(...)` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-相关需求（STORY）
#### 属性说明
相关需求

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
| 关系实体 | [需求（ZT_STORY）](../zentao/Story) |
| 关系属性 | [编号（ID）](../zentao/Story/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-父任务（PARENT）
#### 属性说明
父任务

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
| 2 | `>=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [编号（ID）](../zentao/Task/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-来源Bug（FROMBUG）
#### 属性说明
来源Bug

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
| 关系实体 | [Bug（ZT_BUG）](../zentao/Bug) |
| 关系属性 | [Bug编号（ID）](../zentao/Bug/#属性-Bug编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-持续时间（DURATION）
#### 属性说明
持续时间

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
(To_Days(%1$s)-To_Days(%2$s))
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
| 关系实体 | [Bug（ZT_BUG）](../zentao/Bug) |
| 关系属性 | [Bug编号（ID）](../zentao/Bug/#属性-Bug编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-模块（MODULE）
#### 属性说明
模块

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [id（ID）](../ibiz/ProjectModule/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-模块路径（PATH）
#### 属性说明
模块路径

- 是否是主键
否

- 属性类型
链接字段[来自关系实体字段]

- 数据类型
外键值附加数据

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-本次消耗（CURRENTCONSUMED）
#### 属性说明
本次消耗

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-总计耗时（TOTALTIME）
#### 属性说明
完成界面，临时界面属性

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-是否子任务（ISLEAF）
#### 属性说明
是否子任务

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
( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END )
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-所有模块（ALLMODULES）
#### 属性说明
所有模块

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
| 值 | 1 |

- 取值范围/公式
参照数据字典【[是否（YesNo）](../../codelist/YesNo)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-多人任务（MULTIPLE）
#### 属性说明
多人任务

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
( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` )
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-项目团队成员（TASKTEAMS）
#### 属性说明
项目团队成员

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
一对多关系数据集合

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-所属模块（MODULENAME1）
#### 属性说明
所属模块

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
(case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end)
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-工时（IBZTASKESTIMATES）
#### 属性说明
工时

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

- 数据类型
一对多关系数据集合

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-是否收藏（ISFAVORITES）
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-任务状态（STATUS1）
#### 属性说明
任务状态

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
参照数据字典【[任务状态（查看）（TaskStatusCK）](../../codelist/TaskStatusCK)】

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-任务类型（TASKTYPE）
#### 属性说明
任务类型

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
```SQL
( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END)
```

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-团队用户（USERNAMES）
#### 属性说明
团队用户

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-是否完成（ISFINISHED）
#### 属性说明
是否完成

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-回复数量（REPLYCOUNT）
#### 属性说明
回复数量

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-是否填写描述（HASDETAIL）
#### 属性说明
是否填写描述

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-最后的更新日期（UPDATEDATE）
#### 属性说明
最后的更新日期

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
日期型

- Java类型
Timestamp

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d')
```

- 数据格式
yyyy-MM-dd

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-进度（PROGRESSRATE）
#### 属性说明
进度

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
CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%')
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-延期（DELAY）
#### 属性说明
延期

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
(case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end)
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-抄送给（MAILTOPK）
#### 属性说明
抄送给

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
多项选择(文本值)

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
''
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-联系人（MAILTOCONACT）
#### 属性说明
联系人

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-排序（STATUSORDER）
#### 属性说明
排序

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
case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-之前消耗（MYCONSUMED）
#### 属性说明
之前消耗

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
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 0 |

- 取值范围/公式
```SQL
t1.CONSUMED
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-我的总消耗（MYTOTALTIME）
#### 属性说明
完成界面，临时界面属性

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-转交给（ASSIGNEDTOZJ）
#### 属性说明
转交给

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [path（PATH）](../ibiz/ProjectModule/#属性-path（PATH）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-编号（PLAN）
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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [编号（ID）](../zentao/ProductPlan/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-任务种别（TASKSPECIES）
#### 属性说明
任务种别

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
参照数据字典【[任务种别（TaskSpecies）](../../codelist/TaskSpecies)】

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [编号（ID）](../zentao/ProductPlan/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-周期设置周几（CONFIG_WEEK）
#### 属性说明
周期设置周几

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
参照数据字典【[星期（1～7）（CodeList46）](../../codelist/CodeList46)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [编号（ID）](../zentao/ProductPlan/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-周期设置月（CONFIG_MONTH）
#### 属性说明
周期设置月

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
参照数据字典【[月（1～31）（CodeList47）](../../codelist/CodeList47)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [编号（ID）](../zentao/ProductPlan/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-周期类型（CONFIG_TYPE）
#### 属性说明
周期类型

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
参照数据字典【[周期类型（CycleType）](../../codelist/CycleType)】

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [编号（ID）](../zentao/ProductPlan/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-提前天数（CONFIG_BEFOREDAYS）
#### 属性说明
提前天数

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [编号（ID）](../zentao/ProductPlan/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-间隔天数（CONFIG_DAY）
#### 属性说明
间隔天数

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [编号（ID）](../zentao/ProductPlan/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-过期日期（CONFIG_END）
#### 属性说明
过期日期

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [编号（ID）](../zentao/ProductPlan/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-开始日期（CONFIG_BEGIN）
#### 属性说明
开始日期

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [编号（ID）](../zentao/ProductPlan/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-所属计划（PLANNAME）
#### 属性说明
所属计划

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-关联编号（IDVALUE）
#### 属性说明
关联编号

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
大整型

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
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-周期（CYCLE）
#### 属性说明
周期

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-是否指派（ASSIGN）
#### 属性说明
是否指派

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
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) |
| 关系属性 | [名称（TITLE）](../zentao/ProductPlan/#属性-名称（TITLE）) |
| 关系类型 | 关系实体 1:N 当前实体 |


## 业务状态
| 序号 | 状态名称 | [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 默认 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [已取消_未收藏_多人任务](#业务状态-已取消_未收藏_多人任务（cancel_0_10）) | cancel | 0 | 10 | 否 |
| 2 | [已取消_未收藏_父任务](#业务状态-已取消_未收藏_父任务（cancel_0_20）) | cancel | 0 | 20 | 否 |
| 3 | [已取消_未收藏_常规任务](#业务状态-已取消_未收藏_常规任务（cancel_0_30）) | cancel | 0 | 30 | 否 |
| 4 | [已取消_未收藏_子任务](#业务状态-已取消_未收藏_子任务（cancel_0_40）) | cancel | 0 | 40 | 否 |
| 5 | [已取消_已收藏_多人任务](#业务状态-已取消_已收藏_多人任务（cancel_1_10）) | cancel | 1 | 10 | 否 |
| 6 | [已取消_已收藏_父任务](#业务状态-已取消_已收藏_父任务（cancel_1_20）) | cancel | 1 | 20 | 否 |
| 7 | [已取消_已收藏_常规任务](#业务状态-已取消_已收藏_常规任务（cancel_1_30）) | cancel | 1 | 30 | 否 |
| 8 | [已取消_已收藏_子任务](#业务状态-已取消_已收藏_子任务（cancel_1_40）) | cancel | 1 | 40 | 否 |
| 9 | [已关闭_未收藏_多人任务](#业务状态-已关闭_未收藏_多人任务（closed_0_10）) | closed | 0 | 10 | 否 |
| 10 | [已关闭_未收藏_父任务](#业务状态-已关闭_未收藏_父任务（closed_0_20）) | closed | 0 | 20 | 否 |
| 11 | [已关闭_未收藏_常规任务](#业务状态-已关闭_未收藏_常规任务（closed_0_30）) | closed | 0 | 30 | 否 |
| 12 | [已关闭_未收藏_子任务](#业务状态-已关闭_未收藏_子任务（closed_0_40）) | closed | 0 | 40 | 否 |
| 13 | [已关闭_已收藏_多人任务](#业务状态-已关闭_已收藏_多人任务（closed_1_10）) | closed | 1 | 10 | 否 |
| 14 | [已关闭_已收藏_父任务](#业务状态-已关闭_已收藏_父任务（closed_1_20）) | closed | 1 | 20 | 否 |
| 15 | [已关闭_已收藏_常规任务](#业务状态-已关闭_已收藏_常规任务（closed_1_30）) | closed | 1 | 30 | 否 |
| 16 | [已关闭_已收藏_子任务](#业务状态-已关闭_已收藏_子任务（closed_1_40）) | closed | 1 | 40 | 否 |
| 17 | [进行中_未收藏_多人任务](#业务状态-进行中_未收藏_多人任务（doing_0_10）) | doing | 0 | 10 | 否 |
| 18 | [进行中_未收藏_父任务](#业务状态-进行中_未收藏_父任务（doing_0_20）) | doing | 0 | 20 | 否 |
| 19 | [进行中_未收藏_常规任务](#业务状态-进行中_未收藏_常规任务（doing_0_30）) | doing | 0 | 30 | 否 |
| 20 | [进行中_未收藏_子任务](#业务状态-进行中_未收藏_子任务（doing_0_40）) | doing | 0 | 40 | 否 |
| 21 | [进行中_已收藏_多人任务](#业务状态-进行中_已收藏_多人任务（doing_1_10）) | doing | 1 | 10 | 否 |
| 22 | [进行中_已收藏_父任务](#业务状态-进行中_已收藏_父任务（doing_1_20）) | doing | 1 | 20 | 否 |
| 23 | [进行中_已收藏_常规任务](#业务状态-进行中_已收藏_常规任务（doing_1_30）) | doing | 1 | 30 | 否 |
| 24 | [进行中_已收藏_子任务](#业务状态-进行中_已收藏_子任务（doing_1_40）) | doing | 1 | 40 | 否 |
| 25 | [已完成_未收藏_多人任务](#业务状态-已完成_未收藏_多人任务（done_0_10）) | done | 0 | 10 | 否 |
| 26 | [已完成_未收藏_父任务](#业务状态-已完成_未收藏_父任务（done_0_20）) | done | 0 | 20 | 否 |
| 27 | [已完成_未收藏_常规任务](#业务状态-已完成_未收藏_常规任务（done_0_30）) | done | 0 | 30 | 否 |
| 28 | [已完成_未收藏_子任务](#业务状态-已完成_未收藏_子任务（done_0_40）) | done | 0 | 40 | 否 |
| 29 | [已完成_已收藏_多人任务](#业务状态-已完成_已收藏_多人任务（done_1_10）) | done | 1 | 10 | 否 |
| 30 | [已完成_已收藏_父任务](#业务状态-已完成_已收藏_父任务（done_1_20）) | done | 1 | 20 | 否 |
| 31 | [已完成_已收藏_常规任务](#业务状态-已完成_已收藏_常规任务（done_1_30）) | done | 1 | 30 | 否 |
| 32 | [已完成_已收藏_子任务](#业务状态-已完成_已收藏_子任务（done_1_40）) | done | 1 | 40 | 否 |
| 33 | [已暂停_未收藏_多人任务](#业务状态-已暂停_未收藏_多人任务（pause_0_10）) | pause | 0 | 10 | 否 |
| 34 | [已暂停_未收藏_父任务](#业务状态-已暂停_未收藏_父任务（pause_0_20）) | pause | 0 | 20 | 否 |
| 35 | [已暂停_未收藏_常规任务](#业务状态-已暂停_未收藏_常规任务（pause_0_30）) | pause | 0 | 30 | 否 |
| 36 | [已暂停_未收藏_子任务](#业务状态-已暂停_未收藏_子任务（pause_0_40）) | pause | 0 | 40 | 否 |
| 37 | [已暂停_已收藏_多人任务](#业务状态-已暂停_已收藏_多人任务（pause_1_10）) | pause | 1 | 10 | 否 |
| 38 | [已暂停_已收藏_父任务](#业务状态-已暂停_已收藏_父任务（pause_1_20）) | pause | 1 | 20 | 否 |
| 39 | [已暂停_已收藏_常规任务](#业务状态-已暂停_已收藏_常规任务（pause_1_30）) | pause | 1 | 30 | 否 |
| 40 | [已暂停_已收藏_子任务](#业务状态-已暂停_已收藏_子任务（pause_1_40）) | pause | 1 | 40 | 否 |
| 41 | [需求变更_未收藏_多人任务](#业务状态-需求变更_未收藏_多人任务（storychange_0_10）) | storychange | 0 | 10 | 否 |
| 42 | [需求变更_未收藏_父任务](#业务状态-需求变更_未收藏_父任务（storychange_0_20）) | storychange | 0 | 20 | 否 |
| 43 | [需求变更_未收藏_常规任务](#业务状态-需求变更_未收藏_常规任务（storychange_0_30）) | storychange | 0 | 30 | 否 |
| 44 | [需求变更_未收藏_子任务](#业务状态-需求变更_未收藏_子任务（storychange_0_40）) | storychange | 0 | 40 | 否 |
| 45 | [需求变更_已收藏_多人任务](#业务状态-需求变更_已收藏_多人任务（storychange_1_10）) | storychange | 1 | 10 | 否 |
| 46 | [需求变更_已收藏_父任务](#业务状态-需求变更_已收藏_父任务（storychange_1_20）) | storychange | 1 | 20 | 否 |
| 47 | [需求变更_已收藏_常规任务](#业务状态-需求变更_已收藏_常规任务（storychange_1_30）) | storychange | 1 | 30 | 否 |
| 48 | [需求变更_已收藏_子任务](#业务状态-需求变更_已收藏_子任务（storychange_1_40）) | storychange | 1 | 40 | 否 |
| 49 | [未进行_未收藏_多人任务](#业务状态-未进行_未收藏_多人任务（wait_0_10）) | wait | 0 | 10 | 否 |
| 50 | [未进行_未收藏_父任务](#业务状态-未进行_未收藏_父任务（wait_0_20）) | wait | 0 | 20 | 否 |
| 51 | [未进行_未收藏_常规任务](#业务状态-未进行_未收藏_常规任务（wait_0_30）) | wait | 0 | 30 | 否 |
| 52 | [未进行_未收藏_子任务](#业务状态-未进行_未收藏_子任务（wait_0_40）) | wait | 0 | 40 | 否 |
| 53 | [未进行_已收藏_多人任务](#业务状态-未进行_已收藏_多人任务（wait_1_10）) | wait | 1 | 10 | 否 |
| 54 | [未进行_已收藏_父任务](#业务状态-未进行_已收藏_父任务（wait_1_20）) | wait | 1 | 20 | 否 |
| 55 | [未进行_已收藏_常规任务](#业务状态-未进行_已收藏_常规任务（wait_1_30）) | wait | 1 | 30 | 否 |
| 56 | [未进行_已收藏_子任务](#业务状态-未进行_已收藏_子任务（wait_1_40）) | wait | 1 | 40 | 否 |
### 业务状态-已取消_未收藏_多人任务（cancel_0_10）
#### 状态说明
已取消_未收藏_多人任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | cancel |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 2 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 3 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 4 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 5 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 6 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 7 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 8 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 9 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
### 业务状态-已取消_未收藏_父任务（cancel_0_20）
#### 状态说明
已取消_未收藏_父任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | cancel |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 2 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 3 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 4 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 5 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 6 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 7 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 8 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 9 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 10 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 11 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 12 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 13 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
### 业务状态-已取消_未收藏_常规任务（cancel_0_30）
#### 状态说明
已取消_未收藏_常规任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | cancel |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| ---- | ---- |
| 1 | [GetDraft（GetDraft）](#实体行为-GetDraft（GetDraft）) |
| 2 | [Create（Create）](#实体行为-Create（Create）) |
| 3 | [计算总耗时（CalcTime）](#实体行为-计算总耗时（CalcTime）) |
| 4 | [删除工时（DeleteEstimate）](#实体行为-删除工时（DeleteEstimate）) |
| 5 | [编辑工时（EditEstimate）](#实体行为-编辑工时（EditEstimate）) |
| 6 | [工时录入（RecordEstimate）](#实体行为-工时录入（RecordEstimate）) |
| 7 | [关闭（Close）](#实体行为-关闭（Close）) |
| 8 | [Save（Save）](#实体行为-Save（Save）) |
| 9 | [UpdateTemp（UpdateTemp）](#实体行为-UpdateTemp（UpdateTemp）) |
| 10 | [GetDraftTempMajor（GetDraftTempMajor）](#实体行为-GetDraftTempMajor（GetDraftTempMajor）) |
| 11 | [GetTemp（GetTemp）](#实体行为-GetTemp（GetTemp）) |
| 12 | [RemoveTemp（RemoveTemp）](#实体行为-RemoveTemp（RemoveTemp）) |
| 13 | [Remove（Remove）](#实体行为-Remove（Remove）) |
| 14 | [继续（Restart）](#实体行为-继续（Restart）) |
| 15 | [Update（Update）](#实体行为-Update（Update）) |
| 16 | [激活（Activate）](#实体行为-激活（Activate）) |
| 17 | [Get（Get）](#实体行为-Get（Get）) |
| 18 | [指派/转交（AssignTo）](#实体行为-指派/转交（AssignTo）) |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 2 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 3 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 4 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 5 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 6 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 7 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 9 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
### 业务状态-已取消_未收藏_子任务（cancel_0_40）
#### 状态说明
已取消_未收藏_子任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | cancel |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 2 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 3 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 4 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 5 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 6 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 7 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 8 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 9 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 10 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
### 业务状态-已取消_已收藏_多人任务（cancel_1_10）
#### 状态说明
已取消_已收藏_多人任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | cancel |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 2 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 3 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 4 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 5 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 6 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 7 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 8 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 9 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
### 业务状态-已取消_已收藏_父任务（cancel_1_20）
#### 状态说明
已取消_已收藏_父任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | cancel |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 2 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 3 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 4 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 5 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 6 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 7 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 8 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 9 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 10 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 11 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 12 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 13 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
### 业务状态-已取消_已收藏_常规任务（cancel_1_30）
#### 状态说明
已取消_已收藏_常规任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | cancel |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 2 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 3 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 4 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 5 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 6 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 7 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 8 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 9 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
### 业务状态-已取消_已收藏_子任务（cancel_1_40）
#### 状态说明
已取消_已收藏_子任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | cancel |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 2 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 3 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 4 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 5 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 6 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 7 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 8 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 9 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 10 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
### 业务状态-已关闭_未收藏_多人任务（closed_0_10）
#### 状态说明
已关闭_未收藏_多人任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 2 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 3 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 4 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 5 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 6 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 7 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 8 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 9 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 10 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 11 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
### 业务状态-已关闭_未收藏_父任务（closed_0_20）
#### 状态说明
已关闭_未收藏_父任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 2 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 3 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 4 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 5 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 6 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 7 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 8 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 9 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 10 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 11 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 12 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 13 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
### 业务状态-已关闭_未收藏_常规任务（closed_0_30）
#### 状态说明
已关闭_未收藏_常规任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| ---- | ---- |
| 1 | [激活（Activate）](#实体行为-激活（Activate）) |
| 2 | [编辑工时（EditEstimate）](#实体行为-编辑工时（EditEstimate）) |
| 3 | [删除工时（DeleteEstimate）](#实体行为-删除工时（DeleteEstimate）) |
| 4 | [工时录入（RecordEstimate）](#实体行为-工时录入（RecordEstimate）) |
| 5 | [指派/转交（AssignTo）](#实体行为-指派/转交（AssignTo）) |
| 6 | [GetTemp（GetTemp）](#实体行为-GetTemp（GetTemp）) |
| 7 | [Remove（Remove）](#实体行为-Remove（Remove）) |
| 8 | [Get（Get）](#实体行为-Get（Get）) |
| 9 | [GetDraftTempMajor（GetDraftTempMajor）](#实体行为-GetDraftTempMajor（GetDraftTempMajor）) |
| 10 | [Update（Update）](#实体行为-Update（Update）) |
| 11 | [RemoveTemp（RemoveTemp）](#实体行为-RemoveTemp（RemoveTemp）) |
| 12 | [GetDraft（GetDraft）](#实体行为-GetDraft（GetDraft）) |
| 13 | [计算总耗时（CalcTime）](#实体行为-计算总耗时（CalcTime）) |
| 14 | [Create（Create）](#实体行为-Create（Create）) |
| 15 | [继续（Restart）](#实体行为-继续（Restart）) |
| 16 | [Save（Save）](#实体行为-Save（Save）) |
| 17 | [UpdateTemp（UpdateTemp）](#实体行为-UpdateTemp（UpdateTemp）) |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 2 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 3 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 4 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 5 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 6 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 7 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 9 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 10 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
### 业务状态-已关闭_未收藏_子任务（closed_0_40）
#### 状态说明
已关闭_未收藏_子任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 2 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 3 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 4 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 5 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 6 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 7 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 8 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 9 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 10 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 11 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
### 业务状态-已关闭_已收藏_多人任务（closed_1_10）
#### 状态说明
已关闭_已收藏_多人任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 2 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 3 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 4 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 5 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 6 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 7 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 8 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 9 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 10 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 11 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
### 业务状态-已关闭_已收藏_父任务（closed_1_20）
#### 状态说明
已关闭_已收藏_父任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 2 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 3 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 4 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 5 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 6 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 7 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 8 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 9 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 10 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 11 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 12 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 13 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
### 业务状态-已关闭_已收藏_常规任务（closed_1_30）
#### 状态说明
已关闭_已收藏_常规任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 2 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 3 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 4 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 5 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 6 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 7 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 8 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 9 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 10 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
### 业务状态-已关闭_已收藏_子任务（closed_1_40）
#### 状态说明
已关闭_已收藏_子任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | closed |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 2 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 3 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 4 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 5 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 6 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 7 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 8 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 9 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 10 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 11 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
### 业务状态-进行中_未收藏_多人任务（doing_0_10）
#### 状态说明
进行中_未收藏_多人任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | doing |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 2 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 3 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 4 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 5 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 6 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 7 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 8 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
### 业务状态-进行中_未收藏_父任务（doing_0_20）
#### 状态说明
进行中_未收藏_父任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | doing |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 2 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 3 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 4 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 5 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 6 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 7 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 8 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 9 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 10 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 11 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 12 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 13 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
### 业务状态-进行中_未收藏_常规任务（doing_0_30）
#### 状态说明
进行中_未收藏_常规任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | doing |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| ---- | ---- |
| 1 | [Get（Get）](#实体行为-Get（Get）) |
| 2 | [暂停（Pause）](#实体行为-暂停（Pause）) |
| 3 | [Update（Update）](#实体行为-Update（Update）) |
| 4 | [指派/转交（AssignTo）](#实体行为-指派/转交（AssignTo）) |
| 5 | [Save（Save）](#实体行为-Save（Save）) |
| 6 | [UpdateTemp（UpdateTemp）](#实体行为-UpdateTemp（UpdateTemp）) |
| 7 | [计算总耗时（CalcTime）](#实体行为-计算总耗时（CalcTime）) |
| 8 | [GetTemp（GetTemp）](#实体行为-GetTemp（GetTemp）) |
| 9 | [继续（Restart）](#实体行为-继续（Restart）) |
| 10 | [Create（Create）](#实体行为-Create（Create）) |
| 11 | [工时录入（RecordEstimate）](#实体行为-工时录入（RecordEstimate）) |
| 12 | [关闭（Close）](#实体行为-关闭（Close）) |
| 13 | [RemoveTemp（RemoveTemp）](#实体行为-RemoveTemp（RemoveTemp）) |
| 14 | [取消（Cancel）](#实体行为-取消（Cancel）) |
| 15 | [删除工时（DeleteEstimate）](#实体行为-删除工时（DeleteEstimate）) |
| 16 | [GetDraftTempMajor（GetDraftTempMajor）](#实体行为-GetDraftTempMajor（GetDraftTempMajor）) |
| 17 | [完成（Finish）](#实体行为-完成（Finish）) |
| 18 | [Remove（Remove）](#实体行为-Remove（Remove）) |
| 19 | [GetDraft（GetDraft）](#实体行为-GetDraft（GetDraft）) |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 2 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 3 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 4 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 5 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 6 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 7 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
### 业务状态-进行中_未收藏_子任务（doing_0_40）
#### 状态说明
进行中_未收藏_子任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | doing |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 2 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 3 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 4 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 5 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 6 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 7 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 8 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
### 业务状态-进行中_已收藏_多人任务（doing_1_10）
#### 状态说明
进行中_已收藏_多人任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | doing |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 2 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 3 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 4 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 5 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 6 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 7 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 8 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
### 业务状态-进行中_已收藏_父任务（doing_1_20）
#### 状态说明
进行中_已收藏_父任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | doing |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 2 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 3 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 4 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 5 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 6 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 7 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 8 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 9 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 10 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 11 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 12 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 13 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
### 业务状态-进行中_已收藏_常规任务（doing_1_30）
#### 状态说明
进行中_已收藏_常规任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | doing |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 2 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 3 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 4 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 5 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 6 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 7 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
### 业务状态-进行中_已收藏_子任务（doing_1_40）
#### 状态说明
进行中_已收藏_子任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | doing |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 2 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 3 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 4 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 5 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 6 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 7 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 8 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
### 业务状态-已完成_未收藏_多人任务（done_0_10）
#### 状态说明
已完成_未收藏_多人任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | done |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 2 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 3 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 4 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 5 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 6 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 7 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 9 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
### 业务状态-已完成_未收藏_父任务（done_0_20）
#### 状态说明
已完成_未收藏_父任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | done |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 2 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 3 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 4 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 5 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 6 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 7 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 8 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 9 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 10 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 11 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 12 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 13 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
### 业务状态-已完成_未收藏_常规任务（done_0_30）
#### 状态说明
已完成_未收藏_常规任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | done |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| ---- | ---- |
| 1 | [RemoveTemp（RemoveTemp）](#实体行为-RemoveTemp（RemoveTemp）) |
| 2 | [指派/转交（AssignTo）](#实体行为-指派/转交（AssignTo）) |
| 3 | [删除工时（DeleteEstimate）](#实体行为-删除工时（DeleteEstimate）) |
| 4 | [激活（Activate）](#实体行为-激活（Activate）) |
| 5 | [Get（Get）](#实体行为-Get（Get）) |
| 6 | [GetDraft（GetDraft）](#实体行为-GetDraft（GetDraft）) |
| 7 | [继续（Restart）](#实体行为-继续（Restart）) |
| 8 | [GetTemp（GetTemp）](#实体行为-GetTemp（GetTemp）) |
| 9 | [Save（Save）](#实体行为-Save（Save）) |
| 10 | [Remove（Remove）](#实体行为-Remove（Remove）) |
| 11 | [Update（Update）](#实体行为-Update（Update）) |
| 12 | [编辑工时（EditEstimate）](#实体行为-编辑工时（EditEstimate）) |
| 13 | [工时录入（RecordEstimate）](#实体行为-工时录入（RecordEstimate）) |
| 14 | [Create（Create）](#实体行为-Create（Create）) |
| 15 | [关闭（Close）](#实体行为-关闭（Close）) |
| 16 | [GetDraftTempMajor（GetDraftTempMajor）](#实体行为-GetDraftTempMajor（GetDraftTempMajor）) |
| 17 | [UpdateTemp（UpdateTemp）](#实体行为-UpdateTemp（UpdateTemp）) |
| 18 | [计算总耗时（CalcTime）](#实体行为-计算总耗时（CalcTime）) |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 2 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 3 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 4 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 5 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 6 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 7 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 8 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
### 业务状态-已完成_未收藏_子任务（done_0_40）
#### 状态说明
已完成_未收藏_子任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | done |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 2 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 3 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 4 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 5 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 6 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 7 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 8 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 9 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
### 业务状态-已完成_已收藏_多人任务（done_1_10）
#### 状态说明
已完成_已收藏_多人任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | done |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 2 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 3 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 4 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 5 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 6 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 7 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 9 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
### 业务状态-已完成_已收藏_父任务（done_1_20）
#### 状态说明
已完成_已收藏_父任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | done |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 2 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 3 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 4 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 5 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 6 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 7 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 9 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 10 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 11 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 12 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 13 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
### 业务状态-已完成_已收藏_常规任务（done_1_30）
#### 状态说明
已完成_已收藏_常规任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | done |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 2 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 3 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 4 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 5 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 6 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 7 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
### 业务状态-已完成_已收藏_子任务（done_1_40）
#### 状态说明
已完成_已收藏_子任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | done |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 2 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 3 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 4 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 5 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 6 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 7 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 8 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 9 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
### 业务状态-已暂停_未收藏_多人任务（pause_0_10）
#### 状态说明
已暂停_未收藏_多人任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | pause |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 2 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 3 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 4 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 5 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 6 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 7 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 8 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
### 业务状态-已暂停_未收藏_父任务（pause_0_20）
#### 状态说明
已暂停_未收藏_父任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | pause |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 2 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 3 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 4 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 5 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 6 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 7 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 8 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 9 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 10 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 11 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 12 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 13 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
### 业务状态-已暂停_未收藏_常规任务（pause_0_30）
#### 状态说明
已暂停_未收藏_常规任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | pause |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| ---- | ---- |
| 1 | [GetTemp（GetTemp）](#实体行为-GetTemp（GetTemp）) |
| 2 | [编辑工时（EditEstimate）](#实体行为-编辑工时（EditEstimate）) |
| 3 | [工时录入（RecordEstimate）](#实体行为-工时录入（RecordEstimate）) |
| 4 | [GetDraft（GetDraft）](#实体行为-GetDraft（GetDraft）) |
| 5 | [Create（Create）](#实体行为-Create（Create）) |
| 6 | [关闭（Close）](#实体行为-关闭（Close）) |
| 7 | [Get（Get）](#实体行为-Get（Get）) |
| 8 | [GetDraftTempMajor（GetDraftTempMajor）](#实体行为-GetDraftTempMajor（GetDraftTempMajor）) |
| 9 | [继续（Restart）](#实体行为-继续（Restart）) |
| 10 | [取消（Cancel）](#实体行为-取消（Cancel）) |
| 11 | [完成（Finish）](#实体行为-完成（Finish）) |
| 12 | [Remove（Remove）](#实体行为-Remove（Remove）) |
| 13 | [RemoveTemp（RemoveTemp）](#实体行为-RemoveTemp（RemoveTemp）) |
| 14 | [Save（Save）](#实体行为-Save（Save）) |
| 15 | [UpdateTemp（UpdateTemp）](#实体行为-UpdateTemp（UpdateTemp）) |
| 16 | [Update（Update）](#实体行为-Update（Update）) |
| 17 | [计算总耗时（CalcTime）](#实体行为-计算总耗时（CalcTime）) |
| 18 | [删除工时（DeleteEstimate）](#实体行为-删除工时（DeleteEstimate）) |
| 19 | [指派/转交（AssignTo）](#实体行为-指派/转交（AssignTo）) |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 2 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 3 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 4 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 5 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 6 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 7 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
### 业务状态-已暂停_未收藏_子任务（pause_0_40）
#### 状态说明
已暂停_未收藏_子任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | pause |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 2 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 3 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 4 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 5 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 6 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 7 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 8 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
### 业务状态-已暂停_已收藏_多人任务（pause_1_10）
#### 状态说明
已暂停_已收藏_多人任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | pause |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 2 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 3 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 4 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 5 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 6 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 7 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 8 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
### 业务状态-已暂停_已收藏_父任务（pause_1_20）
#### 状态说明
已暂停_已收藏_父任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | pause |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 2 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 3 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 4 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 5 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 6 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 7 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 8 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 9 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 10 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 11 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 12 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 13 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
### 业务状态-已暂停_已收藏_常规任务（pause_1_30）
#### 状态说明
已暂停_已收藏_常规任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | pause |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 2 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 3 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 4 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 5 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 6 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 7 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
### 业务状态-已暂停_已收藏_子任务（pause_1_40）
#### 状态说明
已暂停_已收藏_子任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | pause |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 2 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 3 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 4 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 5 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 6 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 7 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 8 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
### 业务状态-需求变更_未收藏_多人任务（storychange_0_10）
#### 状态说明
需求变更_未收藏_多人任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | storychange |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 2 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 3 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 4 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 5 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 6 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 7 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 8 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 9 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 10 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 11 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 12 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
### 业务状态-需求变更_未收藏_父任务（storychange_0_20）
#### 状态说明
需求变更_未收藏_父任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | storychange |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 2 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 3 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 4 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 5 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 6 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 7 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 8 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 9 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 10 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 11 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 12 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 13 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 14 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
### 业务状态-需求变更_未收藏_常规任务（storychange_0_30）
#### 状态说明
需求变更_未收藏_常规任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | storychange |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 2 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 3 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 4 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 5 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 6 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 7 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 9 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 10 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 11 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 12 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
### 业务状态-需求变更_未收藏_子任务（storychange_0_40）
#### 状态说明
需求变更_未收藏_子任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | storychange |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 2 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 3 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 4 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 5 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 6 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 7 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 8 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 9 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 10 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 11 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 12 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
### 业务状态-需求变更_已收藏_多人任务（storychange_1_10）
#### 状态说明
需求变更_已收藏_多人任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | storychange |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 2 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 3 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 4 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 5 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 6 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 7 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 8 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 9 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 10 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 11 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 12 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
### 业务状态-需求变更_已收藏_父任务（storychange_1_20）
#### 状态说明
需求变更_已收藏_父任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | storychange |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 2 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 3 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 4 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 5 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 6 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 7 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 9 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 10 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 11 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 12 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 13 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 14 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
### 业务状态-需求变更_已收藏_常规任务（storychange_1_30）
#### 状态说明
需求变更_已收藏_常规任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | storychange |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 2 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 3 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 4 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 5 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 6 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 7 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 8 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 9 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 10 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 11 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 12 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
### 业务状态-需求变更_已收藏_子任务（storychange_1_40）
#### 状态说明
需求变更_已收藏_子任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | storychange |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 2 | [任务取消](#操作权限-任务取消（SRFUR__TASK_CANCEL_BUT）)<br>（SRFUR__TASK_CANCEL_BUT） |
| 3 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 4 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 5 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 6 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 7 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 9 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 10 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 11 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 12 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
### 业务状态-未进行_未收藏_多人任务（wait_0_10）
#### 状态说明
未进行_未收藏_多人任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | wait |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 2 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 3 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 4 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 5 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 6 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 7 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 8 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
### 业务状态-未进行_未收藏_父任务（wait_0_20）
#### 状态说明
未进行_未收藏_父任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | wait |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 2 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 3 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 4 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 5 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 6 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 7 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 8 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 9 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 10 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 11 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 12 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 13 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
### 业务状态-未进行_未收藏_常规任务（wait_0_30）
#### 状态说明
未进行_未收藏_常规任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | wait |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| ---- | ---- |
| 1 | [工时录入（RecordEstimate）](#实体行为-工时录入（RecordEstimate）) |
| 2 | [UpdateTemp（UpdateTemp）](#实体行为-UpdateTemp（UpdateTemp）) |
| 3 | [RemoveTemp（RemoveTemp）](#实体行为-RemoveTemp（RemoveTemp）) |
| 4 | [Update（Update）](#实体行为-Update（Update）) |
| 5 | [GetDraftTempMajor（GetDraftTempMajor）](#实体行为-GetDraftTempMajor（GetDraftTempMajor）) |
| 6 | [编辑工时（EditEstimate）](#实体行为-编辑工时（EditEstimate）) |
| 7 | [计算总耗时（CalcTime）](#实体行为-计算总耗时（CalcTime）) |
| 8 | [Remove（Remove）](#实体行为-Remove（Remove）) |
| 9 | [Create（Create）](#实体行为-Create（Create）) |
| 10 | [激活（Activate）](#实体行为-激活（Activate）) |
| 11 | [继续（Restart）](#实体行为-继续（Restart）) |
| 12 | [GetDraft（GetDraft）](#实体行为-GetDraft（GetDraft）) |
| 13 | [Save（Save）](#实体行为-Save（Save）) |
| 14 | [取消（Cancel）](#实体行为-取消（Cancel）) |
| 15 | [开始（Start）](#实体行为-开始（Start）) |
| 16 | [关闭（Close）](#实体行为-关闭（Close）) |
| 17 | [删除工时（DeleteEstimate）](#实体行为-删除工时（DeleteEstimate）) |
| 18 | [Get（Get）](#实体行为-Get（Get）) |
| 19 | [GetTemp（GetTemp）](#实体行为-GetTemp（GetTemp）) |
| 20 | [指派/转交（AssignTo）](#实体行为-指派/转交（AssignTo）) |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 2 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 3 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 4 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 5 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 6 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 7 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
### 业务状态-未进行_未收藏_子任务（wait_0_40）
#### 状态说明
未进行_未收藏_子任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | wait |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 0 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 2 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 3 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 4 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 5 | [任务已收藏](#操作权限-任务已收藏（SRFUR__TASK_FAVOR_BUT）)<br>（SRFUR__TASK_FAVOR_BUT） |
| 6 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 7 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 8 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
### 业务状态-未进行_已收藏_多人任务（wait_1_10）
#### 状态说明
未进行_已收藏_多人任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | wait |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 10 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 2 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 3 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 4 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 5 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 6 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 7 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 8 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
### 业务状态-未进行_已收藏_父任务（wait_1_20）
#### 状态说明
未进行_已收藏_父任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | wait |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 20 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务删除](#操作权限-任务删除（SRFUR__TASK_DELETE_BUT）)<br>（SRFUR__TASK_DELETE_BUT） |
| 2 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 3 | [任务指派](#操作权限-任务指派（SRFUR__TASK_ASSIGN_BUT）)<br>（SRFUR__TASK_ASSIGN_BUT） |
| 4 | [任务工时](#操作权限-任务工时（SRFUR__TASK_CONSUM_BUT）)<br>（SRFUR__TASK_CONSUM_BUT） |
| 5 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 6 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 7 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 8 | [任务完成](#操作权限-任务完成（SRFUR__TASK_COMPLETE_BUT）)<br>（SRFUR__TASK_COMPLETE_BUT） |
| 9 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 10 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 11 | [需求分解任务](#操作权限-需求分解任务（SRFUR__STORY_FJTASK_BUT）)<br>（SRFUR__STORY_FJTASK_BUT） |
| 12 | [任务开始](#操作权限-任务开始（SRFUR__TASK_START_BUT）)<br>（SRFUR__TASK_START_BUT） |
| 13 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
### 业务状态-未进行_已收藏_常规任务（wait_1_30）
#### 状态说明
未进行_已收藏_常规任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | wait |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 30 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 2 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 3 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 4 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 5 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 6 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |
| 7 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
### 业务状态-未进行_已收藏_子任务（wait_1_40）
#### 状态说明
未进行_已收藏_子任务

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [任务状态](#属性-任务状态（STATUS1）)<br>（STATUS1） | wait |
| [是否收藏](#属性-是否收藏（ISFAVORITES）)<br>（ISFAVORITES） | 1 |
| [任务类型](#属性-任务类型（TASKTYPE）)<br>（TASKTYPE） | 40 |

- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [任务激活](#操作权限-任务激活（SRFUR__TASK_ACTIVATION_BUT）)<br>（SRFUR__TASK_ACTIVATION_BUT） |
| 2 | [任务子任务](#操作权限-任务子任务（SRFUR__TASK_SUBTASKS_BUT）)<br>（SRFUR__TASK_SUBTASKS_BUT） |
| 3 | [任务确认需求变更](#操作权限-任务确认需求变更（SRFUR__TASK_XQCHANGE_BUT）)<br>（SRFUR__TASK_XQCHANGE_BUT） |
| 4 | [任务暂停](#操作权限-任务暂停（SRFUR__TASK_PAUSE_BUT）)<br>（SRFUR__TASK_PAUSE_BUT） |
| 5 | [任务继续](#操作权限-任务继续（SRFUR__TASK_PROCEED_BUT）)<br>（SRFUR__TASK_PROCEED_BUT） |
| 6 | [任务待收藏](#操作权限-任务待收藏（SRFUR__TASK_NFAVOR_BUT）)<br>（SRFUR__TASK_NFAVOR_BUT） |
| 7 | [任务转交](#操作权限-任务转交（SRFUR__TASK_FORWARD_BUT）)<br>（SRFUR__TASK_FORWARD_BUT） |
| 8 | [任务关闭](#操作权限-任务关闭（SRFUR__TASK_CLOSE_BUT）)<br>（SRFUR__TASK_CLOSE_BUT） |

## 实体行为
| 序号 | 行为 | 行为名 | 行为类型 | 行为持有者 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [Create](#实体行为-Create（Create）) | Create | 内置方法 | 后台及前台 |
| 2 | [CreateTemp](#实体行为-CreateTemp（CreateTemp）) | CreateTemp | 内置方法 | 前台 |
| 3 | [CreateTempMajor](#实体行为-CreateTempMajor（CreateTempMajor）) | CreateTempMajor | 内置方法 | 前台 |
| 4 | [Update](#实体行为-Update（Update）) | Update | 内置方法 | 后台及前台 |
| 5 | [UpdateTemp](#实体行为-UpdateTemp（UpdateTemp）) | UpdateTemp | 内置方法 | 前台 |
| 6 | [UpdateTempMajor](#实体行为-UpdateTempMajor（UpdateTempMajor）) | UpdateTempMajor | 内置方法 | 前台 |
| 7 | [Remove](#实体行为-Remove（Remove）) | Remove | 内置方法 | 后台及前台 |
| 8 | [RemoveTemp](#实体行为-RemoveTemp（RemoveTemp）) | RemoveTemp | 内置方法 | 前台 |
| 9 | [RemoveTempMajor](#实体行为-RemoveTempMajor（RemoveTempMajor）) | RemoveTempMajor | 内置方法 | 前台 |
| 10 | [Get](#实体行为-Get（Get）) | Get | 内置方法 | 后台及前台 |
| 11 | [GetTemp](#实体行为-GetTemp（GetTemp）) | GetTemp | 内置方法 | 前台 |
| 12 | [GetTempMajor](#实体行为-GetTempMajor（GetTempMajor）) | GetTempMajor | 内置方法 | 前台 |
| 13 | [GetDraft](#实体行为-GetDraft（GetDraft）) | GetDraft | 内置方法 | 后台及前台 |
| 14 | [GetDraftTemp](#实体行为-GetDraftTemp（GetDraftTemp）) | GetDraftTemp | 内置方法 | 前台 |
| 15 | [GetDraftTempMajor](#实体行为-GetDraftTempMajor（GetDraftTempMajor）) | GetDraftTempMajor | 内置方法 | 前台 |
| 16 | [激活](#实体行为-激活（Activate）) | Activate | 用户自定义 | 后台及前台 |
| 17 | [指派/转交](#实体行为-指派/转交（AssignTo）) | AssignTo | 用户自定义 | 后台及前台 |
| 18 | [计算总耗时](#实体行为-计算总耗时（CalcTime）) | CalcTime | 用户自定义 | 前台 |
| 19 | [取消](#实体行为-取消（Cancel）) | Cancel | 用户自定义 | 后台及前台 |
| 20 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 21 | [关闭](#实体行为-关闭（Close）) | Close | 用户自定义 | 后台及前台 |
| 22 | [需求变更确认](#实体行为-需求变更确认（ConfirmStoryChange）) | ConfirmStoryChange | 用户自定义 | 后台及前台 |
| 23 | [创建周期任务](#实体行为-创建周期任务（CreateCycleTasks）) | CreateCycleTasks | 用户自定义 | 后台 |
| 24 | [删除工时](#实体行为-删除工时（DeleteEstimate）) | DeleteEstimate | 用户自定义 | 后台及前台 |
| 25 | [编辑工时](#实体行为-编辑工时（EditEstimate）) | EditEstimate | 用户自定义 | 后台及前台 |
| 26 | [完成](#实体行为-完成（Finish）) | Finish | 用户自定义 | 后台及前台 |
| 27 | [获取下一个团队成员(完成)](#实体行为-获取下一个团队成员(完成)（GetNextTeamUser）) | GetNextTeamUserFinish | 用户自定义 | 后台及前台 |
| 28 | [获取团队成员剩余工时（激活）](#实体行为-获取团队成员剩余工时（激活）（GetTeamUserLeftActivity）) | GetTeamUserLeftActivity | 用户自定义 | 后台及前台 |
| 29 | [获取团队成员剩余工时（开始或继续）](#实体行为-获取团队成员剩余工时（开始或继续）（GetTeamUserLeftStart）) | GetTeamUserLeftStart | 用户自定义 | 后台及前台 |
| 30 | [获取联系人](#实体行为-获取联系人（GetUserConcat）) | GetUserConcat | 实体处理逻辑 | 前台 |
| 31 | [获取团队成员](#实体行为-获取团队成员（GetUsernames）) | getUsernames | 实体处理逻辑 | 后台 |
| 32 | [关联计划](#实体行为-关联计划（LinkPlan）) | LinkPlan | 用户自定义 | 后台 |
| 33 | [其他更新](#实体行为-其他更新（OtherUpdate）) | OtherUpdate | 用户自定义 | 后台及前台 |
| 34 | [暂停](#实体行为-暂停（Pause）) | Pause | 用户自定义 | 后台及前台 |
| 35 | [工时录入](#实体行为-工时录入（RecordEstimate）) | RecordEstimate | 用户自定义 | 后台及前台 |
| 36 | [继续](#实体行为-继续（Restart）) | Restart | 用户自定义 | 后台及前台 |
| 37 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |
| 38 | [行为](#实体行为-行为（SendMessage）) | sendMessage | 用户自定义 | 后台及前台 |
| 39 | [发送消息前置处理](#实体行为-发送消息前置处理（SendMsgPreProcess）) | sendMsgPreProcess | 用户自定义 | 后台及前台 |
| 40 | [开始](#实体行为-开始（Start）) | Start | 用户自定义 | 后台及前台 |
| 41 | [任务收藏](#实体行为-任务收藏（TaskFavorites）) | TaskFavorites | 实体处理逻辑 | 后台 |
| 42 | [检查多人任务操作权限](#实体行为-检查多人任务操作权限（TaskForward）) | taskForward | 用户自定义 | 后台及前台 |
| 43 | [任务收藏](#实体行为-任务收藏（TaskNFavorites）) | TaskNFavorites | 实体处理逻辑 | 后台 |
| 44 | [更新需求版本](#实体行为-更新需求版本（UpdateStoryVersion）) | updateStoryVersion | 实体处理逻辑 | 后台 |

### 实体行为-Create（Create）
#### 说明
Create

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-CreateTemp（CreateTemp）
#### 说明
CreateTemp

- 行为类型
内置方法

- 行为持有者
前台

#### 逻辑附加
无
### 实体行为-CreateTempMajor（CreateTempMajor）
#### 说明
CreateTempMajor

- 行为类型
内置方法

- 行为持有者
前台

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
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [行为[Update]主状态拒绝逻辑<br>（Update__MSDeny）](#逻辑处理-行为[Update]主状态拒绝逻辑（Update__MSDeny）) | 检查 | 是 |  |
### 实体行为-UpdateTemp（UpdateTemp）
#### 说明
UpdateTemp

- 行为类型
内置方法

- 行为持有者
前台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [行为[UpdateTemp]主状态拒绝逻辑<br>（UpdateTemp__MSDeny）](#逻辑处理-行为[UpdateTemp]主状态拒绝逻辑（UpdateTemp__MSDeny）) | 检查 | 是 |  |
### 实体行为-UpdateTempMajor（UpdateTempMajor）
#### 说明
UpdateTempMajor

- 行为类型
内置方法

- 行为持有者
前台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [行为[UpdateTempMajor]主状态拒绝逻辑<br>（UpdateTempMajor__MSDeny）](#逻辑处理-行为[UpdateTempMajor]主状态拒绝逻辑（UpdateTempMajor__MSDeny）) | 检查 | 是 |  |
### 实体行为-Remove（Remove）
#### 说明
Remove

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [行为[Remove]主状态拒绝逻辑<br>（Remove__MSDeny）](#逻辑处理-行为[Remove]主状态拒绝逻辑（Remove__MSDeny）) | 检查 | 是 |  |
### 实体行为-RemoveTemp（RemoveTemp）
#### 说明
RemoveTemp

- 行为类型
内置方法

- 行为持有者
前台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [行为[RemoveTemp]主状态拒绝逻辑<br>（RemoveTemp__MSDeny）](#逻辑处理-行为[RemoveTemp]主状态拒绝逻辑（RemoveTemp__MSDeny）) | 检查 | 是 |  |
### 实体行为-RemoveTempMajor（RemoveTempMajor）
#### 说明
RemoveTempMajor

- 行为类型
内置方法

- 行为持有者
前台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [行为[RemoveTempMajor]主状态拒绝逻辑<br>（RemoveTempMajor__MSDeny）](#逻辑处理-行为[RemoveTempMajor]主状态拒绝逻辑（RemoveTempMajor__MSDeny）) | 检查 | 是 |  |
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
| 1 | [重置工时统计值<br>（ResetTaskestimate）](#逻辑处理-重置工时统计值（ResetTaskestimate）) | 执行之后 | 是 | 填写工时时重置已有工时 |
### 实体行为-GetTemp（GetTemp）
#### 说明
GetTemp

- 行为类型
内置方法

- 行为持有者
前台

#### 逻辑附加
无
### 实体行为-GetTempMajor（GetTempMajor）
#### 说明
GetTempMajor

- 行为类型
内置方法

- 行为持有者
前台

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
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [根据计划获取相关项目<br>（getProjectByPlan）](#逻辑处理-根据计划获取相关项目（getProjectByPlan）) | 执行之后 | 是 |  |
### 实体行为-GetDraftTemp（GetDraftTemp）
#### 说明
GetDraftTemp

- 行为类型
内置方法

- 行为持有者
前台

#### 逻辑附加
无
### 实体行为-GetDraftTempMajor（GetDraftTempMajor）
#### 说明
GetDraftTempMajor

- 行为类型
内置方法

- 行为持有者
前台

#### 逻辑附加
无
### 实体行为-激活（Activate）
#### 说明
激活完成、取消、关闭的任务

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-指派/转交（AssignTo）
#### 说明
单人任务指派任务 & 多人任务时转交任务

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-计算总耗时（CalcTime）
#### 说明
之前消耗：consumed + 本次消耗：currentConsumed = 总耗时：totalTime

- 行为类型
用户自定义

- 行为持有者
前台

#### 逻辑附加
无
### 实体行为-取消（Cancel）
#### 说明
取消

- 行为类型
用户自定义

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
### 实体行为-关闭（Close）
#### 说明
关闭

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-需求变更确认（ConfirmStoryChange）
#### 说明
需求变更确认

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-创建周期任务（CreateCycleTasks）
#### 说明
创建周期任务

- 行为类型
用户自定义

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-删除工时（DeleteEstimate）
#### 说明
删除工时

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-编辑工时（EditEstimate）
#### 说明
编辑工时

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-完成（Finish）
#### 说明
完成

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-获取下一个团队成员(完成)（GetNextTeamUser）
#### 说明
获取下一个团队成员(完成)

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-获取团队成员剩余工时（激活）（GetTeamUserLeftActivity）
#### 说明
获取团队成员剩余工时（激活）

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-获取团队成员剩余工时（开始或继续）（GetTeamUserLeftStart）
#### 说明
获取团队成员剩余工时（开始或继续）

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-获取联系人（GetUserConcat）
#### 说明
获取联系人

- 行为类型
实体处理逻辑

- 行为持有者
前台

#### 逻辑附加
无
### 实体行为-获取团队成员（GetUsernames）
#### 说明
获取团队成员

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-关联计划（LinkPlan）
#### 说明
关联计划

- 行为类型
用户自定义

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-其他更新（OtherUpdate）
#### 说明
其他更新

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-暂停（Pause）
#### 说明
暂停

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-工时录入（RecordEstimate）
#### 说明
工时录入

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-继续（Restart）
#### 说明
重启挂起的任务

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
### 实体行为-行为（SendMessage）
#### 说明
行为

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-发送消息前置处理（SendMsgPreProcess）
#### 说明
发送消息前置处理

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-开始（Start）
#### 说明
开始

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-任务收藏（TaskFavorites）
#### 说明
FAVORITES

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-检查多人任务操作权限（TaskForward）
#### 说明
检查多人任务操作权限

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-任务收藏（TaskNFavorites）
#### 说明
FAVORITES

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-更新需求版本（UpdateStoryVersion）
#### 说明
更新需求版本

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [行为[updateStoryVersion]主状态拒绝逻辑<br>（UpdateStoryVersion__MSDeny）](#逻辑处理-行为[updateStoryVersion]主状态拒绝逻辑（UpdateStoryVersion__MSDeny）) | 检查 | 是 |  |

## 逻辑处理
| 序号 | 逻辑 | 逻辑名 | 逻辑持有者 |
| ---- | ---- | ---- | ---- |
| 1 | [获取联系人](#逻辑处理-获取联系人（GetUserConcat）) | GetUserConcat | 前台 |
| 2 | [重置工时统计值](#逻辑处理-重置工时统计值（ResetTaskestimate）) | ResetTaskestimate | 后台 |
| 3 | [任务取消收藏](#逻辑处理-任务取消收藏（TaskCancleFavorites）) | TaskCancleFavorites | 后台 |
| 4 | [任务收藏](#逻辑处理-任务收藏（TaskFavorites）) | TaskFavorites | 后台 |
| 5 | [更新需求版本](#逻辑处理-更新需求版本（UpdateStoryVersion）) | UpdateStoryVersion | 后台 |
| 6 | [根据计划获取相关项目](#逻辑处理-根据计划获取相关项目（getProjectByPlan）) | getProjectByPlan | 后台 |
| 7 | [获取团队成员](#逻辑处理-获取团队成员（getUsernames）) | getUsernames | 后台 |
| 8 | [获取团队成员（草稿）](#逻辑处理-获取团队成员（草稿）（getUsernamesDraft）) | getUsernamesDraft | 后台 |
| 9 | [行为[Update]主状态拒绝逻辑](#逻辑处理-行为[Update]主状态拒绝逻辑（Update__MSDeny）) | Update__MSDeny | 后台 |
| 10 | [行为[UpdateTemp]主状态拒绝逻辑](#逻辑处理-行为[UpdateTemp]主状态拒绝逻辑（UpdateTemp__MSDeny）) | UpdateTemp__MSDeny | 后台 |
| 11 | [行为[UpdateTempMajor]主状态拒绝逻辑](#逻辑处理-行为[UpdateTempMajor]主状态拒绝逻辑（UpdateTempMajor__MSDeny）) | UpdateTempMajor__MSDeny | 后台 |
| 12 | [行为[Remove]主状态拒绝逻辑](#逻辑处理-行为[Remove]主状态拒绝逻辑（Remove__MSDeny）) | Remove__MSDeny | 后台 |
| 13 | [行为[RemoveTemp]主状态拒绝逻辑](#逻辑处理-行为[RemoveTemp]主状态拒绝逻辑（RemoveTemp__MSDeny）) | RemoveTemp__MSDeny | 后台 |
| 14 | [行为[RemoveTempMajor]主状态拒绝逻辑](#逻辑处理-行为[RemoveTempMajor]主状态拒绝逻辑（RemoveTempMajor__MSDeny）) | RemoveTempMajor__MSDeny | 后台 |
| 15 | [行为[updateStoryVersion]主状态拒绝逻辑](#逻辑处理-行为[updateStoryVersion]主状态拒绝逻辑（UpdateStoryVersion__MSDeny）) | UpdateStoryVersion__MSDeny | 后台 |

### 逻辑处理-获取联系人（GetUserConcat）
#### 说明
获取联系人

- 逻辑持有者
前台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 准备参数 | Prepareparam1 | 准备参数 |
| 2 | 开始 | Begin | 开始 |
### 逻辑处理-重置工时统计值（ResetTaskestimate）
#### 说明
重置工时统计值

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 重置工时统计 | Prepareparam1 | 准备参数 |
### 逻辑处理-任务取消收藏（TaskCancleFavorites）
#### 说明
当前用户收藏相关任务信息

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 取消收藏 | Rawsqlcall1 | 直接SQL调用 |
### 逻辑处理-任务收藏（TaskFavorites）
#### 说明
当前用户收藏相关任务信息

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 设置收藏参数 | Prepareparam1 | 准备参数 |
| 3 | 创建收藏信息 | Deaction1 | 实体行为 |
### 逻辑处理-更新需求版本（UpdateStoryVersion）
#### 说明
更新需求版本

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 获取需求版本 | Rawsqlcall1 | 直接SQL调用 |
| 3 | 重置需求版本 | Prepareparam1 | 准备参数 |
### 逻辑处理-根据计划获取相关项目（getProjectByPlan）
#### 说明
根据计划获取相关项目

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 设置常规参数 | Prepareparam1 | 准备参数 |
| 2 | 获取项目 | Rawsqlcall2 | 直接SQL调用 |
| 3 | 开始 | Begin | 开始 |
### 逻辑处理-获取团队成员（getUsernames）
#### 说明
获取团队成员

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 项目团队 | Rawsqlcall2 | 直接SQL调用 |
| 2 | 任务团队 | Rawsqlcall1 | 直接SQL调用 |
| 3 | 开始 | Begin | 开始 |
### 逻辑处理-获取团队成员（草稿）（getUsernamesDraft）
#### 说明
获取团队成员（草稿）

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 项目团队 | Rawsqlcall2 | 直接SQL调用 |
### 逻辑处理-行为[Update]主状态拒绝逻辑（Update__MSDeny）
#### 说明
行为[Update]主状态拒绝逻辑

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 状态[已暂停_已收藏_多人任务]拒绝[Update]操作 | DenyBypause_1_10 | 抛出异常 |
| 2 | 状态[进行中_未收藏_父任务]拒绝[Update]操作 | DenyBydoing_0_20 | 抛出异常 |
| 3 | 状态[已完成_已收藏_常规任务]拒绝[Update]操作 | DenyBydone_1_30 | 抛出异常 |
| 4 | 状态[已取消_已收藏_常规任务]拒绝[Update]操作 | DenyBycancel_1_30 | 抛出异常 |
| 5 | 状态[未进行_已收藏_子任务]拒绝[Update]操作 | DenyBywait_1_40 | 抛出异常 |
| 6 | 状态[已暂停_未收藏_子任务]拒绝[Update]操作 | DenyBypause_0_40 | 抛出异常 |
| 7 | 状态[未进行_未收藏_父任务]拒绝[Update]操作 | DenyBywait_0_20 | 抛出异常 |
| 8 | 状态[已取消_未收藏_子任务]拒绝[Update]操作 | DenyBycancel_0_40 | 抛出异常 |
| 9 | 状态[需求变更_已收藏_父任务]拒绝[Update]操作 | DenyBystorychange_1_20 | 抛出异常 |
| 10 | 状态[已关闭_已收藏_多人任务]拒绝[Update]操作 | DenyByclosed_1_10 | 抛出异常 |
| 11 | 获取数据 | Get | 实体行为 |
| 12 | 状态[已完成_未收藏_父任务]拒绝[Update]操作 | DenyBydone_0_20 | 抛出异常 |
| 13 | 状态[进行中_已收藏_常规任务]拒绝[Update]操作 | DenyBydoing_1_30 | 抛出异常 |
| 14 | 状态[需求变更_未收藏_常规任务]拒绝[Update]操作 | DenyBystorychange_0_30 | 抛出异常 |
| 15 | 状态[需求变更_未收藏_子任务]拒绝[Update]操作 | DenyBystorychange_0_40 | 抛出异常 |
| 16 | 状态[已暂停_未收藏_多人任务]拒绝[Update]操作 | DenyBypause_0_10 | 抛出异常 |
| 17 | 状态[进行中_未收藏_多人任务]拒绝[Update]操作 | DenyBydoing_0_10 | 抛出异常 |
| 18 | 状态[已完成_已收藏_父任务]拒绝[Update]操作 | DenyBydone_1_20 | 抛出异常 |
| 19 | 状态[已暂停_已收藏_父任务]拒绝[Update]操作 | DenyBypause_1_20 | 抛出异常 |
| 20 | 状态[未进行_已收藏_常规任务]拒绝[Update]操作 | DenyBywait_1_30 | 抛出异常 |
| 21 | 状态[已关闭_未收藏_子任务]拒绝[Update]操作 | DenyByclosed_0_40 | 抛出异常 |
| 22 | 状态[已取消_已收藏_父任务]拒绝[Update]操作 | DenyBycancel_1_20 | 抛出异常 |
| 23 | 状态[已关闭_已收藏_子任务]拒绝[Update]操作 | DenyByclosed_1_40 | 抛出异常 |
| 24 | 状态[需求变更_已收藏_多人任务]拒绝[Update]操作 | DenyBystorychange_1_10 | 抛出异常 |
| 25 | 状态[需求变更_未收藏_父任务]拒绝[Update]操作 | DenyBystorychange_0_20 | 抛出异常 |
| 26 | 状态[进行中_已收藏_父任务]拒绝[Update]操作 | DenyBydoing_1_20 | 抛出异常 |
| 27 | 状态[已完成_未收藏_多人任务]拒绝[Update]操作 | DenyBydone_0_10 | 抛出异常 |
| 28 | 状态[已关闭_未收藏_多人任务]拒绝[Update]操作 | DenyByclosed_0_10 | 抛出异常 |
| 29 | 状态[进行中_未收藏_子任务]拒绝[Update]操作 | DenyBydoing_0_40 | 抛出异常 |
| 30 | 状态[未进行_已收藏_父任务]拒绝[Update]操作 | DenyBywait_1_20 | 抛出异常 |
| 31 | 状态[已完成_已收藏_多人任务]拒绝[Update]操作 | DenyBydone_1_10 | 抛出异常 |
| 32 | 状态[已取消_已收藏_多人任务]拒绝[Update]操作 | DenyBycancel_1_10 | 抛出异常 |
| 33 | 状态[已暂停_未收藏_父任务]拒绝[Update]操作 | DenyBypause_0_20 | 抛出异常 |
| 34 | 状态[已取消_未收藏_父任务]拒绝[Update]操作 | DenyBycancel_0_20 | 抛出异常 |
| 35 | 状态[需求变更_已收藏_子任务]拒绝[Update]操作 | DenyBystorychange_1_40 | 抛出异常 |
| 36 | 状态[未进行_未收藏_子任务]拒绝[Update]操作 | DenyBywait_0_40 | 抛出异常 |
| 37 | 状态[已关闭_已收藏_常规任务]拒绝[Update]操作 | DenyByclosed_1_30 | 抛出异常 |
| 38 | 状态[需求变更_未收藏_多人任务]拒绝[Update]操作 | DenyBystorychange_0_10 | 抛出异常 |
| 39 | 状态[已完成_未收藏_子任务]拒绝[Update]操作 | DenyBydone_0_40 | 抛出异常 |
| 40 | 状态[已暂停_已收藏_常规任务]拒绝[Update]操作 | DenyBypause_1_30 | 抛出异常 |
| 41 | 状态[进行中_已收藏_多人任务]拒绝[Update]操作 | DenyBydoing_1_10 | 抛出异常 |
| 42 | 状态[已完成_已收藏_子任务]拒绝[Update]操作 | DenyBydone_1_40 | 抛出异常 |
| 43 | 状态[已关闭_未收藏_父任务]拒绝[Update]操作 | DenyByclosed_0_20 | 抛出异常 |
| 44 | 状态[已取消_已收藏_子任务]拒绝[Update]操作 | DenyBycancel_1_40 | 抛出异常 |
| 45 | 准备临时参数 | PrepareTemp | 准备参数 |
| 46 | 状态[未进行_未收藏_多人任务]拒绝[Update]操作 | DenyBywait_0_10 | 抛出异常 |
| 47 | 开始 | Begin | 开始 |
| 48 | 状态[已取消_未收藏_多人任务]拒绝[Update]操作 | DenyBycancel_0_10 | 抛出异常 |
| 49 | 状态[需求变更_已收藏_常规任务]拒绝[Update]操作 | DenyBystorychange_1_30 | 抛出异常 |
| 50 | 状态[进行中_已收藏_子任务]拒绝[Update]操作 | DenyBydoing_1_40 | 抛出异常 |
| 51 | 状态[未进行_已收藏_多人任务]拒绝[Update]操作 | DenyBywait_1_10 | 抛出异常 |
| 52 | 状态[已关闭_已收藏_父任务]拒绝[Update]操作 | DenyByclosed_1_20 | 抛出异常 |
| 53 | 状态[已暂停_已收藏_子任务]拒绝[Update]操作 | DenyBypause_1_40 | 抛出异常 |
### 逻辑处理-行为[UpdateTemp]主状态拒绝逻辑（UpdateTemp__MSDeny）
#### 说明
行为[UpdateTemp]主状态拒绝逻辑

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 状态[已关闭_已收藏_父任务]拒绝[UpdateTemp]操作 | DenyByclosed_1_20 | 抛出异常 |
| 2 | 状态[已关闭_已收藏_常规任务]拒绝[UpdateTemp]操作 | DenyByclosed_1_30 | 抛出异常 |
| 3 | 状态[进行中_已收藏_子任务]拒绝[UpdateTemp]操作 | DenyBydoing_1_40 | 抛出异常 |
| 4 | 状态[已取消_已收藏_多人任务]拒绝[UpdateTemp]操作 | DenyBycancel_1_10 | 抛出异常 |
| 5 | 状态[已关闭_未收藏_多人任务]拒绝[UpdateTemp]操作 | DenyByclosed_0_10 | 抛出异常 |
| 6 | 状态[已取消_未收藏_多人任务]拒绝[UpdateTemp]操作 | DenyBycancel_0_10 | 抛出异常 |
| 7 | 状态[进行中_已收藏_父任务]拒绝[UpdateTemp]操作 | DenyBydoing_1_20 | 抛出异常 |
| 8 | 状态[需求变更_已收藏_常规任务]拒绝[UpdateTemp]操作 | DenyBystorychange_1_30 | 抛出异常 |
| 9 | 状态[已暂停_已收藏_常规任务]拒绝[UpdateTemp]操作 | DenyBypause_1_30 | 抛出异常 |
| 10 | 状态[已暂停_已收藏_父任务]拒绝[UpdateTemp]操作 | DenyBypause_1_20 | 抛出异常 |
| 11 | 状态[进行中_未收藏_父任务]拒绝[UpdateTemp]操作 | DenyBydoing_0_20 | 抛出异常 |
| 12 | 状态[已暂停_未收藏_子任务]拒绝[UpdateTemp]操作 | DenyBypause_0_40 | 抛出异常 |
| 13 | 状态[已完成_已收藏_多人任务]拒绝[UpdateTemp]操作 | DenyBydone_1_10 | 抛出异常 |
| 14 | 状态[需求变更_未收藏_父任务]拒绝[UpdateTemp]操作 | DenyBystorychange_0_20 | 抛出异常 |
| 15 | 状态[未进行_未收藏_子任务]拒绝[UpdateTemp]操作 | DenyBywait_0_40 | 抛出异常 |
| 16 | 状态[未进行_未收藏_父任务]拒绝[UpdateTemp]操作 | DenyBywait_0_20 | 抛出异常 |
| 17 | 状态[需求变更_已收藏_多人任务]拒绝[UpdateTemp]操作 | DenyBystorychange_1_10 | 抛出异常 |
| 18 | 状态[进行中_未收藏_子任务]拒绝[UpdateTemp]操作 | DenyBydoing_0_40 | 抛出异常 |
| 19 | 状态[已暂停_未收藏_父任务]拒绝[UpdateTemp]操作 | DenyBypause_0_20 | 抛出异常 |
| 20 | 状态[已完成_已收藏_常规任务]拒绝[UpdateTemp]操作 | DenyBydone_1_30 | 抛出异常 |
| 21 | 状态[需求变更_未收藏_子任务]拒绝[UpdateTemp]操作 | DenyBystorychange_0_40 | 抛出异常 |
| 22 | 状态[已完成_未收藏_多人任务]拒绝[UpdateTemp]操作 | DenyBydone_0_10 | 抛出异常 |
| 23 | 状态[已取消_已收藏_常规任务]拒绝[UpdateTemp]操作 | DenyBycancel_1_30 | 抛出异常 |
| 24 | 状态[未进行_已收藏_子任务]拒绝[UpdateTemp]操作 | DenyBywait_1_40 | 抛出异常 |
| 25 | 状态[未进行_已收藏_父任务]拒绝[UpdateTemp]操作 | DenyBywait_1_20 | 抛出异常 |
| 26 | 状态[已取消_未收藏_父任务]拒绝[UpdateTemp]操作 | DenyBycancel_0_20 | 抛出异常 |
| 27 | 状态[已关闭_已收藏_多人任务]拒绝[UpdateTemp]操作 | DenyByclosed_1_10 | 抛出异常 |
| 28 | 状态[未进行_已收藏_多人任务]拒绝[UpdateTemp]操作 | DenyBywait_1_10 | 抛出异常 |
| 29 | 状态[需求变更_已收藏_子任务]拒绝[UpdateTemp]操作 | DenyBystorychange_1_40 | 抛出异常 |
| 30 | 状态[已关闭_已收藏_子任务]拒绝[UpdateTemp]操作 | DenyByclosed_1_40 | 抛出异常 |
| 31 | 状态[进行中_已收藏_常规任务]拒绝[UpdateTemp]操作 | DenyBydoing_1_30 | 抛出异常 |
| 32 | 状态[已暂停_已收藏_子任务]拒绝[UpdateTemp]操作 | DenyBypause_1_40 | 抛出异常 |
| 33 | 准备临时参数 | PrepareTemp | 准备参数 |
| 34 | 状态[已关闭_未收藏_父任务]拒绝[UpdateTemp]操作 | DenyByclosed_0_20 | 抛出异常 |
| 35 | 获取数据 | Get | 实体行为 |
| 36 | 状态[已关闭_未收藏_子任务]拒绝[UpdateTemp]操作 | DenyByclosed_0_40 | 抛出异常 |
| 37 | 状态[已完成_未收藏_子任务]拒绝[UpdateTemp]操作 | DenyBydone_0_40 | 抛出异常 |
| 38 | 状态[需求变更_未收藏_常规任务]拒绝[UpdateTemp]操作 | DenyBystorychange_0_30 | 抛出异常 |
| 39 | 状态[已取消_未收藏_子任务]拒绝[UpdateTemp]操作 | DenyBycancel_0_40 | 抛出异常 |
| 40 | 状态[需求变更_已收藏_父任务]拒绝[UpdateTemp]操作 | DenyBystorychange_1_20 | 抛出异常 |
| 41 | 开始 | Begin | 开始 |
| 42 | 状态[已暂停_未收藏_多人任务]拒绝[UpdateTemp]操作 | DenyBypause_0_10 | 抛出异常 |
| 43 | 状态[未进行_未收藏_多人任务]拒绝[UpdateTemp]操作 | DenyBywait_0_10 | 抛出异常 |
| 44 | 状态[已取消_已收藏_子任务]拒绝[UpdateTemp]操作 | DenyBycancel_1_40 | 抛出异常 |
| 45 | 状态[已完成_已收藏_子任务]拒绝[UpdateTemp]操作 | DenyBydone_1_40 | 抛出异常 |
| 46 | 状态[进行中_已收藏_多人任务]拒绝[UpdateTemp]操作 | DenyBydoing_1_10 | 抛出异常 |
| 47 | 状态[未进行_已收藏_常规任务]拒绝[UpdateTemp]操作 | DenyBywait_1_30 | 抛出异常 |
| 48 | 状态[已暂停_已收藏_多人任务]拒绝[UpdateTemp]操作 | DenyBypause_1_10 | 抛出异常 |
| 49 | 状态[进行中_未收藏_多人任务]拒绝[UpdateTemp]操作 | DenyBydoing_0_10 | 抛出异常 |
| 50 | 状态[已完成_未收藏_父任务]拒绝[UpdateTemp]操作 | DenyBydone_0_20 | 抛出异常 |
| 51 | 状态[已取消_已收藏_父任务]拒绝[UpdateTemp]操作 | DenyBycancel_1_20 | 抛出异常 |
| 52 | 状态[需求变更_未收藏_多人任务]拒绝[UpdateTemp]操作 | DenyBystorychange_0_10 | 抛出异常 |
| 53 | 状态[已完成_已收藏_父任务]拒绝[UpdateTemp]操作 | DenyBydone_1_20 | 抛出异常 |
### 逻辑处理-行为[UpdateTempMajor]主状态拒绝逻辑（UpdateTempMajor__MSDeny）
#### 说明
行为[UpdateTempMajor]主状态拒绝逻辑

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 状态[已完成_未收藏_常规任务]拒绝[UpdateTempMajor]操作 | DenyBydone_0_30 | 抛出异常 |
| 2 | 状态[已关闭_未收藏_子任务]拒绝[UpdateTempMajor]操作 | DenyByclosed_0_40 | 抛出异常 |
| 3 | 状态[已取消_已收藏_常规任务]拒绝[UpdateTempMajor]操作 | DenyBycancel_1_30 | 抛出异常 |
| 4 | 状态[需求变更_已收藏_多人任务]拒绝[UpdateTempMajor]操作 | DenyBystorychange_1_10 | 抛出异常 |
| 5 | 状态[已暂停_已收藏_父任务]拒绝[UpdateTempMajor]操作 | DenyBypause_1_20 | 抛出异常 |
| 6 | 状态[已取消_未收藏_多人任务]拒绝[UpdateTempMajor]操作 | DenyBycancel_0_10 | 抛出异常 |
| 7 | 状态[未进行_未收藏_多人任务]拒绝[UpdateTempMajor]操作 | DenyBywait_0_10 | 抛出异常 |
| 8 | 状态[需求变更_未收藏_多人任务]拒绝[UpdateTempMajor]操作 | DenyBystorychange_0_10 | 抛出异常 |
| 9 | 状态[已完成_已收藏_父任务]拒绝[UpdateTempMajor]操作 | DenyBydone_1_20 | 抛出异常 |
| 10 | 状态[未进行_已收藏_子任务]拒绝[UpdateTempMajor]操作 | DenyBywait_1_40 | 抛出异常 |
| 11 | 状态[已关闭_已收藏_父任务]拒绝[UpdateTempMajor]操作 | DenyByclosed_1_20 | 抛出异常 |
| 12 | 状态[已暂停_未收藏_父任务]拒绝[UpdateTempMajor]操作 | DenyBypause_0_20 | 抛出异常 |
| 13 | 状态[进行中_已收藏_常规任务]拒绝[UpdateTempMajor]操作 | DenyBydoing_1_30 | 抛出异常 |
| 14 | 状态[已完成_未收藏_子任务]拒绝[UpdateTempMajor]操作 | DenyBydone_0_40 | 抛出异常 |
| 15 | 状态[进行中_未收藏_多人任务]拒绝[UpdateTempMajor]操作 | DenyBydoing_0_10 | 抛出异常 |
| 16 | 获取数据 | Get | 实体行为 |
| 17 | 状态[需求变更_已收藏_子任务]拒绝[UpdateTempMajor]操作 | DenyBystorychange_1_40 | 抛出异常 |
| 18 | 状态[已关闭_未收藏_常规任务]拒绝[UpdateTempMajor]操作 | DenyByclosed_0_30 | 抛出异常 |
| 19 | 状态[需求变更_未收藏_父任务]拒绝[UpdateTempMajor]操作 | DenyBystorychange_0_20 | 抛出异常 |
| 20 | 状态[已取消_已收藏_父任务]拒绝[UpdateTempMajor]操作 | DenyBycancel_1_20 | 抛出异常 |
| 21 | 状态[已完成_已收藏_子任务]拒绝[UpdateTempMajor]操作 | DenyBydone_1_40 | 抛出异常 |
| 22 | 状态[已取消_未收藏_父任务]拒绝[UpdateTempMajor]操作 | DenyBycancel_0_20 | 抛出异常 |
| 23 | 状态[已暂停_已收藏_常规任务]拒绝[UpdateTempMajor]操作 | DenyBypause_1_30 | 抛出异常 |
| 24 | 状态[未进行_未收藏_子任务]拒绝[UpdateTempMajor]操作 | DenyBywait_0_40 | 抛出异常 |
| 25 | 开始 | Begin | 开始 |
| 26 | 状态[未进行_已收藏_常规任务]拒绝[UpdateTempMajor]操作 | DenyBywait_1_30 | 抛出异常 |
| 27 | 状态[已完成_已收藏_常规任务]拒绝[UpdateTempMajor]操作 | DenyBydone_1_30 | 抛出异常 |
| 28 | 状态[已暂停_未收藏_多人任务]拒绝[UpdateTempMajor]操作 | DenyBypause_0_10 | 抛出异常 |
| 29 | 状态[已关闭_已收藏_常规任务]拒绝[UpdateTempMajor]操作 | DenyByclosed_1_30 | 抛出异常 |
| 30 | 状态[进行中_未收藏_子任务]拒绝[UpdateTempMajor]操作 | DenyBydoing_0_40 | 抛出异常 |
| 31 | 状态[进行中_已收藏_子任务]拒绝[UpdateTempMajor]操作 | DenyBydoing_1_40 | 抛出异常 |
| 32 | 状态[需求变更_已收藏_常规任务]拒绝[UpdateTempMajor]操作 | DenyBystorychange_1_30 | 抛出异常 |
| 33 | 状态[进行中_未收藏_父任务]拒绝[UpdateTempMajor]操作 | DenyBydoing_0_20 | 抛出异常 |
| 34 | 准备临时参数 | PrepareTemp | 准备参数 |
| 35 | 状态[已取消_已收藏_多人任务]拒绝[UpdateTempMajor]操作 | DenyBycancel_1_10 | 抛出异常 |
| 36 | 状态[已暂停_已收藏_子任务]拒绝[UpdateTempMajor]操作 | DenyBypause_1_40 | 抛出异常 |
| 37 | 状态[已关闭_未收藏_父任务]拒绝[UpdateTempMajor]操作 | DenyByclosed_0_20 | 抛出异常 |
| 38 | 状态[未进行_未收藏_常规任务]拒绝[UpdateTempMajor]操作 | DenyBywait_0_30 | 抛出异常 |
| 39 | 状态[需求变更_未收藏_常规任务]拒绝[UpdateTempMajor]操作 | DenyBystorychange_0_30 | 抛出异常 |
| 40 | 状态[未进行_已收藏_父任务]拒绝[UpdateTempMajor]操作 | DenyBywait_1_20 | 抛出异常 |
| 41 | 状态[已取消_未收藏_常规任务]拒绝[UpdateTempMajor]操作 | DenyBycancel_0_30 | 抛出异常 |
| 42 | 状态[进行中_已收藏_多人任务]拒绝[UpdateTempMajor]操作 | DenyBydoing_1_10 | 抛出异常 |
| 43 | 状态[已暂停_未收藏_子任务]拒绝[UpdateTempMajor]操作 | DenyBypause_0_40 | 抛出异常 |
| 44 | 状态[已关闭_已收藏_子任务]拒绝[UpdateTempMajor]操作 | DenyByclosed_1_40 | 抛出异常 |
| 45 | 状态[已完成_未收藏_多人任务]拒绝[UpdateTempMajor]操作 | DenyBydone_0_10 | 抛出异常 |
| 46 | 状态[需求变更_已收藏_父任务]拒绝[UpdateTempMajor]操作 | DenyBystorychange_1_20 | 抛出异常 |
| 47 | 状态[进行中_未收藏_常规任务]拒绝[UpdateTempMajor]操作 | DenyBydoing_0_30 | 抛出异常 |
| 48 | 状态[已取消_已收藏_子任务]拒绝[UpdateTempMajor]操作 | DenyBycancel_1_40 | 抛出异常 |
| 49 | 状态[未进行_未收藏_父任务]拒绝[UpdateTempMajor]操作 | DenyBywait_0_20 | 抛出异常 |
| 50 | 状态[已关闭_未收藏_多人任务]拒绝[UpdateTempMajor]操作 | DenyByclosed_0_10 | 抛出异常 |
| 51 | 状态[需求变更_未收藏_子任务]拒绝[UpdateTempMajor]操作 | DenyBystorychange_0_40 | 抛出异常 |
| 52 | 状态[已暂停_已收藏_多人任务]拒绝[UpdateTempMajor]操作 | DenyBypause_1_10 | 抛出异常 |
| 53 | 状态[已取消_未收藏_子任务]拒绝[UpdateTempMajor]操作 | DenyBycancel_0_40 | 抛出异常 |
| 54 | 状态[未进行_已收藏_多人任务]拒绝[UpdateTempMajor]操作 | DenyBywait_1_10 | 抛出异常 |
| 55 | 状态[已完成_已收藏_多人任务]拒绝[UpdateTempMajor]操作 | DenyBydone_1_10 | 抛出异常 |
| 56 | 状态[已关闭_已收藏_多人任务]拒绝[UpdateTempMajor]操作 | DenyByclosed_1_10 | 抛出异常 |
| 57 | 状态[已完成_未收藏_父任务]拒绝[UpdateTempMajor]操作 | DenyBydone_0_20 | 抛出异常 |
| 58 | 状态[进行中_已收藏_父任务]拒绝[UpdateTempMajor]操作 | DenyBydoing_1_20 | 抛出异常 |
| 59 | 状态[已暂停_未收藏_常规任务]拒绝[UpdateTempMajor]操作 | DenyBypause_0_30 | 抛出异常 |
### 逻辑处理-行为[Remove]主状态拒绝逻辑（Remove__MSDeny）
#### 说明
行为[Remove]主状态拒绝逻辑

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 状态[未进行_已收藏_常规任务]拒绝[Remove]操作 | DenyBywait_1_30 | 抛出异常 |
| 2 | 状态[已取消_未收藏_父任务]拒绝[Remove]操作 | DenyBycancel_0_20 | 抛出异常 |
| 3 | 状态[已完成_未收藏_子任务]拒绝[Remove]操作 | DenyBydone_0_40 | 抛出异常 |
| 4 | 状态[进行中_已收藏_父任务]拒绝[Remove]操作 | DenyBydoing_1_20 | 抛出异常 |
| 5 | 状态[未进行_未收藏_子任务]拒绝[Remove]操作 | DenyBywait_0_40 | 抛出异常 |
| 6 | 状态[已关闭_已收藏_常规任务]拒绝[Remove]操作 | DenyByclosed_1_30 | 抛出异常 |
| 7 | 状态[已暂停_已收藏_常规任务]拒绝[Remove]操作 | DenyBypause_1_30 | 抛出异常 |
| 8 | 状态[已完成_已收藏_常规任务]拒绝[Remove]操作 | DenyBydone_1_30 | 抛出异常 |
| 9 | 状态[需求变更_未收藏_多人任务]拒绝[Remove]操作 | DenyBystorychange_0_10 | 抛出异常 |
| 10 | 状态[进行中_未收藏_父任务]拒绝[Remove]操作 | DenyBydoing_0_20 | 抛出异常 |
| 11 | 状态[需求变更_已收藏_多人任务]拒绝[Remove]操作 | DenyBystorychange_1_10 | 抛出异常 |
| 12 | 状态[已取消_已收藏_常规任务]拒绝[Remove]操作 | DenyBycancel_1_30 | 抛出异常 |
| 13 | 开始 | Begin | 开始 |
| 14 | 状态[未进行_已收藏_父任务]拒绝[Remove]操作 | DenyBywait_1_20 | 抛出异常 |
| 15 | 状态[已完成_未收藏_多人任务]拒绝[Remove]操作 | DenyBydone_0_10 | 抛出异常 |
| 16 | 状态[已暂停_已收藏_父任务]拒绝[Remove]操作 | DenyBypause_1_20 | 抛出异常 |
| 17 | 状态[进行中_已收藏_多人任务]拒绝[Remove]操作 | DenyBydoing_1_10 | 抛出异常 |
| 18 | 状态[已暂停_未收藏_子任务]拒绝[Remove]操作 | DenyBypause_0_40 | 抛出异常 |
| 19 | 状态[已关闭_已收藏_子任务]拒绝[Remove]操作 | DenyByclosed_1_40 | 抛出异常 |
| 20 | 状态[需求变更_已收藏_子任务]拒绝[Remove]操作 | DenyBystorychange_1_40 | 抛出异常 |
| 21 | 状态[已完成_已收藏_子任务]拒绝[Remove]操作 | DenyBydone_1_40 | 抛出异常 |
| 22 | 状态[需求变更_未收藏_父任务]拒绝[Remove]操作 | DenyBystorychange_0_20 | 抛出异常 |
| 23 | 状态[已关闭_未收藏_父任务]拒绝[Remove]操作 | DenyByclosed_0_20 | 抛出异常 |
| 24 | 状态[已取消_已收藏_子任务]拒绝[Remove]操作 | DenyBycancel_1_40 | 抛出异常 |
| 25 | 状态[进行中_已收藏_子任务]拒绝[Remove]操作 | DenyBydoing_1_40 | 抛出异常 |
| 26 | 状态[已取消_未收藏_子任务]拒绝[Remove]操作 | DenyBycancel_0_40 | 抛出异常 |
| 27 | 状态[已暂停_已收藏_多人任务]拒绝[Remove]操作 | DenyBypause_1_10 | 抛出异常 |
| 28 | 状态[已取消_未收藏_多人任务]拒绝[Remove]操作 | DenyBycancel_0_10 | 抛出异常 |
| 29 | 状态[未进行_已收藏_多人任务]拒绝[Remove]操作 | DenyBywait_1_10 | 抛出异常 |
| 30 | 状态[进行中_未收藏_多人任务]拒绝[Remove]操作 | DenyBydoing_0_10 | 抛出异常 |
| 31 | 状态[已完成_未收藏_父任务]拒绝[Remove]操作 | DenyBydone_0_20 | 抛出异常 |
| 32 | 状态[已关闭_已收藏_多人任务]拒绝[Remove]操作 | DenyByclosed_1_10 | 抛出异常 |
| 33 | 状态[未进行_未收藏_父任务]拒绝[Remove]操作 | DenyBywait_0_20 | 抛出异常 |
| 34 | 状态[已取消_已收藏_多人任务]拒绝[Remove]操作 | DenyBycancel_1_10 | 抛出异常 |
| 35 | 状态[已关闭_未收藏_多人任务]拒绝[Remove]操作 | DenyByclosed_0_10 | 抛出异常 |
| 36 | 状态[已完成_已收藏_多人任务]拒绝[Remove]操作 | DenyBydone_1_10 | 抛出异常 |
| 37 | 状态[需求变更_未收藏_常规任务]拒绝[Remove]操作 | DenyBystorychange_0_30 | 抛出异常 |
| 38 | 状态[进行中_未收藏_子任务]拒绝[Remove]操作 | DenyBydoing_0_40 | 抛出异常 |
| 39 | 状态[已暂停_未收藏_多人任务]拒绝[Remove]操作 | DenyBypause_0_10 | 抛出异常 |
| 40 | 状态[需求变更_已收藏_常规任务]拒绝[Remove]操作 | DenyBystorychange_1_30 | 抛出异常 |
| 41 | 状态[已暂停_已收藏_子任务]拒绝[Remove]操作 | DenyBypause_1_40 | 抛出异常 |
| 42 | 状态[未进行_已收藏_子任务]拒绝[Remove]操作 | DenyBywait_1_40 | 抛出异常 |
| 43 | 状态[进行中_已收藏_常规任务]拒绝[Remove]操作 | DenyBydoing_1_30 | 抛出异常 |
| 44 | 获取数据 | Get | 实体行为 |
| 45 | 状态[未进行_未收藏_多人任务]拒绝[Remove]操作 | DenyBywait_0_10 | 抛出异常 |
| 46 | 状态[已关闭_已收藏_父任务]拒绝[Remove]操作 | DenyByclosed_1_20 | 抛出异常 |
| 47 | 准备临时参数 | PrepareTemp | 准备参数 |
| 48 | 状态[已取消_已收藏_父任务]拒绝[Remove]操作 | DenyBycancel_1_20 | 抛出异常 |
| 49 | 状态[已完成_已收藏_父任务]拒绝[Remove]操作 | DenyBydone_1_20 | 抛出异常 |
| 50 | 状态[需求变更_未收藏_子任务]拒绝[Remove]操作 | DenyBystorychange_0_40 | 抛出异常 |
| 51 | 状态[已暂停_未收藏_父任务]拒绝[Remove]操作 | DenyBypause_0_20 | 抛出异常 |
| 52 | 状态[需求变更_已收藏_父任务]拒绝[Remove]操作 | DenyBystorychange_1_20 | 抛出异常 |
| 53 | 状态[已关闭_未收藏_子任务]拒绝[Remove]操作 | DenyByclosed_0_40 | 抛出异常 |
### 逻辑处理-行为[RemoveTemp]主状态拒绝逻辑（RemoveTemp__MSDeny）
#### 说明
行为[RemoveTemp]主状态拒绝逻辑

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 状态[进行中_已收藏_多人任务]拒绝[RemoveTemp]操作 | DenyBydoing_1_10 | 抛出异常 |
| 2 | 状态[已关闭_未收藏_多人任务]拒绝[RemoveTemp]操作 | DenyByclosed_0_10 | 抛出异常 |
| 3 | 状态[已取消_已收藏_常规任务]拒绝[RemoveTemp]操作 | DenyBycancel_1_30 | 抛出异常 |
| 4 | 状态[已关闭_已收藏_常规任务]拒绝[RemoveTemp]操作 | DenyByclosed_1_30 | 抛出异常 |
| 5 | 状态[已暂停_已收藏_子任务]拒绝[RemoveTemp]操作 | DenyBypause_1_40 | 抛出异常 |
| 6 | 状态[需求变更_未收藏_多人任务]拒绝[RemoveTemp]操作 | DenyBystorychange_0_10 | 抛出异常 |
| 7 | 状态[进行中_未收藏_父任务]拒绝[RemoveTemp]操作 | DenyBydoing_0_20 | 抛出异常 |
| 8 | 状态[已完成_已收藏_父任务]拒绝[RemoveTemp]操作 | DenyBydone_1_20 | 抛出异常 |
| 9 | 状态[已取消_未收藏_多人任务]拒绝[RemoveTemp]操作 | DenyBycancel_0_10 | 抛出异常 |
| 10 | 开始 | Begin | 开始 |
| 11 | 状态[已暂停_未收藏_父任务]拒绝[RemoveTemp]操作 | DenyBypause_0_20 | 抛出异常 |
| 12 | 状态[未进行_已收藏_父任务]拒绝[RemoveTemp]操作 | DenyBywait_1_20 | 抛出异常 |
| 13 | 状态[未进行_未收藏_子任务]拒绝[RemoveTemp]操作 | DenyBywait_0_40 | 抛出异常 |
| 14 | 状态[已取消_未收藏_父任务]拒绝[RemoveTemp]操作 | DenyBycancel_0_20 | 抛出异常 |
| 15 | 状态[需求变更_已收藏_子任务]拒绝[RemoveTemp]操作 | DenyBystorychange_1_40 | 抛出异常 |
| 16 | 状态[已关闭_已收藏_子任务]拒绝[RemoveTemp]操作 | DenyByclosed_1_40 | 抛出异常 |
| 17 | 状态[已暂停_已收藏_常规任务]拒绝[RemoveTemp]操作 | DenyBypause_1_30 | 抛出异常 |
| 18 | 状态[已取消_已收藏_父任务]拒绝[RemoveTemp]操作 | DenyBycancel_1_20 | 抛出异常 |
| 19 | 状态[进行中_未收藏_多人任务]拒绝[RemoveTemp]操作 | DenyBydoing_0_10 | 抛出异常 |
| 20 | 状态[已关闭_未收藏_子任务]拒绝[RemoveTemp]操作 | DenyByclosed_0_40 | 抛出异常 |
| 21 | 状态[已完成_已收藏_常规任务]拒绝[RemoveTemp]操作 | DenyBydone_1_30 | 抛出异常 |
| 22 | 状态[需求变更_未收藏_子任务]拒绝[RemoveTemp]操作 | DenyBystorychange_0_40 | 抛出异常 |
| 23 | 状态[未进行_未收藏_多人任务]拒绝[RemoveTemp]操作 | DenyBywait_0_10 | 抛出异常 |
| 24 | 状态[未进行_已收藏_多人任务]拒绝[RemoveTemp]操作 | DenyBywait_1_10 | 抛出异常 |
| 25 | 状态[进行中_已收藏_子任务]拒绝[RemoveTemp]操作 | DenyBydoing_1_40 | 抛出异常 |
| 26 | 状态[已完成_未收藏_子任务]拒绝[RemoveTemp]操作 | DenyBydone_0_40 | 抛出异常 |
| 27 | 状态[需求变更_已收藏_常规任务]拒绝[RemoveTemp]操作 | DenyBystorychange_1_30 | 抛出异常 |
| 28 | 状态[已完成_未收藏_多人任务]拒绝[RemoveTemp]操作 | DenyBydone_0_10 | 抛出异常 |
| 29 | 状态[已取消_已收藏_多人任务]拒绝[RemoveTemp]操作 | DenyBycancel_1_10 | 抛出异常 |
| 30 | 状态[已暂停_未收藏_子任务]拒绝[RemoveTemp]操作 | DenyBypause_0_40 | 抛出异常 |
| 31 | 状态[需求变更_已收藏_父任务]拒绝[RemoveTemp]操作 | DenyBystorychange_1_20 | 抛出异常 |
| 32 | 状态[已完成_已收藏_子任务]拒绝[RemoveTemp]操作 | DenyBydone_1_40 | 抛出异常 |
| 33 | 状态[未进行_已收藏_子任务]拒绝[RemoveTemp]操作 | DenyBywait_1_40 | 抛出异常 |
| 34 | 状态[需求变更_未收藏_常规任务]拒绝[RemoveTemp]操作 | DenyBystorychange_0_30 | 抛出异常 |
| 35 | 状态[未进行_未收藏_父任务]拒绝[RemoveTemp]操作 | DenyBywait_0_20 | 抛出异常 |
| 36 | 状态[已关闭_已收藏_父任务]拒绝[RemoveTemp]操作 | DenyByclosed_1_20 | 抛出异常 |
| 37 | 获取数据 | Get | 实体行为 |
| 38 | 状态[进行中_已收藏_常规任务]拒绝[RemoveTemp]操作 | DenyBydoing_1_30 | 抛出异常 |
| 39 | 状态[已暂停_已收藏_父任务]拒绝[RemoveTemp]操作 | DenyBypause_1_20 | 抛出异常 |
| 40 | 状态[已取消_已收藏_子任务]拒绝[RemoveTemp]操作 | DenyBycancel_1_40 | 抛出异常 |
| 41 | 状态[已取消_未收藏_子任务]拒绝[RemoveTemp]操作 | DenyBycancel_0_40 | 抛出异常 |
| 42 | 状态[已暂停_未收藏_多人任务]拒绝[RemoveTemp]操作 | DenyBypause_0_10 | 抛出异常 |
| 43 | 准备临时参数 | PrepareTemp | 准备参数 |
| 44 | 状态[已完成_已收藏_多人任务]拒绝[RemoveTemp]操作 | DenyBydone_1_10 | 抛出异常 |
| 45 | 状态[进行中_未收藏_子任务]拒绝[RemoveTemp]操作 | DenyBydoing_0_40 | 抛出异常 |
| 46 | 状态[已关闭_未收藏_父任务]拒绝[RemoveTemp]操作 | DenyByclosed_0_20 | 抛出异常 |
| 47 | 状态[需求变更_已收藏_多人任务]拒绝[RemoveTemp]操作 | DenyBystorychange_1_10 | 抛出异常 |
| 48 | 状态[需求变更_未收藏_父任务]拒绝[RemoveTemp]操作 | DenyBystorychange_0_20 | 抛出异常 |
| 49 | 状态[未进行_已收藏_常规任务]拒绝[RemoveTemp]操作 | DenyBywait_1_30 | 抛出异常 |
| 50 | 状态[已完成_未收藏_父任务]拒绝[RemoveTemp]操作 | DenyBydone_0_20 | 抛出异常 |
| 51 | 状态[进行中_已收藏_父任务]拒绝[RemoveTemp]操作 | DenyBydoing_1_20 | 抛出异常 |
| 52 | 状态[已关闭_已收藏_多人任务]拒绝[RemoveTemp]操作 | DenyByclosed_1_10 | 抛出异常 |
| 53 | 状态[已暂停_已收藏_多人任务]拒绝[RemoveTemp]操作 | DenyBypause_1_10 | 抛出异常 |
### 逻辑处理-行为[RemoveTempMajor]主状态拒绝逻辑（RemoveTempMajor__MSDeny）
#### 说明
行为[RemoveTempMajor]主状态拒绝逻辑

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 状态[未进行_未收藏_多人任务]拒绝[RemoveTempMajor]操作 | DenyBywait_0_10 | 抛出异常 |
| 2 | 状态[已取消_未收藏_多人任务]拒绝[RemoveTempMajor]操作 | DenyBycancel_0_10 | 抛出异常 |
| 3 | 状态[已取消_已收藏_子任务]拒绝[RemoveTempMajor]操作 | DenyBycancel_1_40 | 抛出异常 |
| 4 | 状态[需求变更_未收藏_常规任务]拒绝[RemoveTempMajor]操作 | DenyBystorychange_0_30 | 抛出异常 |
| 5 | 状态[未进行_已收藏_常规任务]拒绝[RemoveTempMajor]操作 | DenyBywait_1_30 | 抛出异常 |
| 6 | 状态[需求变更_已收藏_多人任务]拒绝[RemoveTempMajor]操作 | DenyBystorychange_1_10 | 抛出异常 |
| 7 | 状态[已完成_未收藏_父任务]拒绝[RemoveTempMajor]操作 | DenyBydone_0_20 | 抛出异常 |
| 8 | 状态[进行中_未收藏_子任务]拒绝[RemoveTempMajor]操作 | DenyBydoing_0_40 | 抛出异常 |
| 9 | 状态[已取消_已收藏_常规任务]拒绝[RemoveTempMajor]操作 | DenyBycancel_1_30 | 抛出异常 |
| 10 | 状态[已完成_已收藏_多人任务]拒绝[RemoveTempMajor]操作 | DenyBydone_1_10 | 抛出异常 |
| 11 | 开始 | Begin | 开始 |
| 12 | 状态[进行中_已收藏_子任务]拒绝[RemoveTempMajor]操作 | DenyBydoing_1_40 | 抛出异常 |
| 13 | 状态[已关闭_已收藏_常规任务]拒绝[RemoveTempMajor]操作 | DenyByclosed_1_30 | 抛出异常 |
| 14 | 状态[已关闭_未收藏_父任务]拒绝[RemoveTempMajor]操作 | DenyByclosed_0_20 | 抛出异常 |
| 15 | 状态[已暂停_未收藏_父任务]拒绝[RemoveTempMajor]操作 | DenyBypause_0_20 | 抛出异常 |
| 16 | 状态[未进行_未收藏_父任务]拒绝[RemoveTempMajor]操作 | DenyBywait_0_20 | 抛出异常 |
| 17 | 状态[需求变更_未收藏_父任务]拒绝[RemoveTempMajor]操作 | DenyBystorychange_0_20 | 抛出异常 |
| 18 | 状态[已取消_未收藏_父任务]拒绝[RemoveTempMajor]操作 | DenyBycancel_0_20 | 抛出异常 |
| 19 | 状态[已取消_已收藏_父任务]拒绝[RemoveTempMajor]操作 | DenyBycancel_1_20 | 抛出异常 |
| 20 | 状态[已完成_已收藏_子任务]拒绝[RemoveTempMajor]操作 | DenyBydone_1_40 | 抛出异常 |
| 21 | 状态[未进行_已收藏_父任务]拒绝[RemoveTempMajor]操作 | DenyBywait_1_20 | 抛出异常 |
| 22 | 状态[已完成_未收藏_多人任务]拒绝[RemoveTempMajor]操作 | DenyBydone_0_10 | 抛出异常 |
| 23 | 状态[需求变更_已收藏_父任务]拒绝[RemoveTempMajor]操作 | DenyBystorychange_1_20 | 抛出异常 |
| 24 | 状态[已暂停_已收藏_子任务]拒绝[RemoveTempMajor]操作 | DenyBypause_1_40 | 抛出异常 |
| 25 | 状态[进行中_未收藏_多人任务]拒绝[RemoveTempMajor]操作 | DenyBydoing_0_10 | 抛出异常 |
| 26 | 状态[已关闭_未收藏_子任务]拒绝[RemoveTempMajor]操作 | DenyByclosed_0_40 | 抛出异常 |
| 27 | 状态[已关闭_未收藏_常规任务]拒绝[RemoveTempMajor]操作 | DenyByclosed_0_30 | 抛出异常 |
| 28 | 状态[进行中_已收藏_常规任务]拒绝[RemoveTempMajor]操作 | DenyBydoing_1_30 | 抛出异常 |
| 29 | 状态[已暂停_未收藏_多人任务]拒绝[RemoveTempMajor]操作 | DenyBypause_0_10 | 抛出异常 |
| 30 | 状态[已关闭_已收藏_子任务]拒绝[RemoveTempMajor]操作 | DenyByclosed_1_40 | 抛出异常 |
| 31 | 状态[已完成_未收藏_子任务]拒绝[RemoveTempMajor]操作 | DenyBydone_0_40 | 抛出异常 |
| 32 | 状态[需求变更_已收藏_常规任务]拒绝[RemoveTempMajor]操作 | DenyBystorychange_1_30 | 抛出异常 |
| 33 | 状态[已取消_未收藏_常规任务]拒绝[RemoveTempMajor]操作 | DenyBycancel_0_30 | 抛出异常 |
| 34 | 状态[已取消_已收藏_多人任务]拒绝[RemoveTempMajor]操作 | DenyBycancel_1_10 | 抛出异常 |
| 35 | 状态[未进行_已收藏_多人任务]拒绝[RemoveTempMajor]操作 | DenyBywait_1_10 | 抛出异常 |
| 36 | 状态[未进行_未收藏_常规任务]拒绝[RemoveTempMajor]操作 | DenyBywait_0_30 | 抛出异常 |
| 37 | 状态[进行中_已收藏_父任务]拒绝[RemoveTempMajor]操作 | DenyBydoing_1_20 | 抛出异常 |
| 38 | 状态[需求变更_未收藏_多人任务]拒绝[RemoveTempMajor]操作 | DenyBystorychange_0_10 | 抛出异常 |
| 39 | 状态[已完成_已收藏_常规任务]拒绝[RemoveTempMajor]操作 | DenyBydone_1_30 | 抛出异常 |
| 40 | 状态[已暂停_未收藏_子任务]拒绝[RemoveTempMajor]操作 | DenyBypause_0_40 | 抛出异常 |
| 41 | 状态[已暂停_已收藏_常规任务]拒绝[RemoveTempMajor]操作 | DenyBypause_1_30 | 抛出异常 |
| 42 | 状态[已关闭_已收藏_多人任务]拒绝[RemoveTempMajor]操作 | DenyByclosed_1_10 | 抛出异常 |
| 43 | 状态[进行中_未收藏_父任务]拒绝[RemoveTempMajor]操作 | DenyBydoing_0_20 | 抛出异常 |
| 44 | 状态[需求变更_已收藏_子任务]拒绝[RemoveTempMajor]操作 | DenyBystorychange_1_40 | 抛出异常 |
| 45 | 状态[已完成_未收藏_常规任务]拒绝[RemoveTempMajor]操作 | DenyBydone_0_30 | 抛出异常 |
| 46 | 状态[已取消_未收藏_子任务]拒绝[RemoveTempMajor]操作 | DenyBycancel_0_40 | 抛出异常 |
| 47 | 状态[未进行_未收藏_子任务]拒绝[RemoveTempMajor]操作 | DenyBywait_0_40 | 抛出异常 |
| 48 | 准备临时参数 | PrepareTemp | 准备参数 |
| 49 | 状态[需求变更_未收藏_子任务]拒绝[RemoveTempMajor]操作 | DenyBystorychange_0_40 | 抛出异常 |
| 50 | 状态[未进行_已收藏_子任务]拒绝[RemoveTempMajor]操作 | DenyBywait_1_40 | 抛出异常 |
| 51 | 状态[进行中_已收藏_多人任务]拒绝[RemoveTempMajor]操作 | DenyBydoing_1_10 | 抛出异常 |
| 52 | 状态[已完成_已收藏_父任务]拒绝[RemoveTempMajor]操作 | DenyBydone_1_20 | 抛出异常 |
| 53 | 状态[已关闭_已收藏_父任务]拒绝[RemoveTempMajor]操作 | DenyByclosed_1_20 | 抛出异常 |
| 54 | 获取数据 | Get | 实体行为 |
| 55 | 状态[已关闭_未收藏_多人任务]拒绝[RemoveTempMajor]操作 | DenyByclosed_0_10 | 抛出异常 |
| 56 | 状态[已暂停_已收藏_多人任务]拒绝[RemoveTempMajor]操作 | DenyBypause_1_10 | 抛出异常 |
| 57 | 状态[已暂停_未收藏_常规任务]拒绝[RemoveTempMajor]操作 | DenyBypause_0_30 | 抛出异常 |
| 58 | 状态[已暂停_已收藏_父任务]拒绝[RemoveTempMajor]操作 | DenyBypause_1_20 | 抛出异常 |
| 59 | 状态[进行中_未收藏_常规任务]拒绝[RemoveTempMajor]操作 | DenyBydoing_0_30 | 抛出异常 |
### 逻辑处理-行为[updateStoryVersion]主状态拒绝逻辑（UpdateStoryVersion__MSDeny）
#### 说明
行为[updateStoryVersion]主状态拒绝逻辑

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 状态[未进行_未收藏_常规任务]拒绝[更新需求版本]操作 | DenyBywait_0_30 | 抛出异常 |
| 2 | 状态[需求变更_未收藏_多人任务]拒绝[更新需求版本]操作 | DenyBystorychange_0_10 | 抛出异常 |
| 3 | 状态[已完成_已收藏_子任务]拒绝[更新需求版本]操作 | DenyBydone_1_40 | 抛出异常 |
| 4 | 状态[已完成_未收藏_父任务]拒绝[更新需求版本]操作 | DenyBydone_0_20 | 抛出异常 |
| 5 | 状态[已关闭_未收藏_父任务]拒绝[更新需求版本]操作 | DenyByclosed_0_20 | 抛出异常 |
| 6 | 状态[进行中_已收藏_多人任务]拒绝[更新需求版本]操作 | DenyBydoing_1_10 | 抛出异常 |
| 7 | 状态[需求变更_已收藏_子任务]拒绝[更新需求版本]操作 | DenyBystorychange_1_40 | 抛出异常 |
| 8 | 状态[已暂停_已收藏_常规任务]拒绝[更新需求版本]操作 | DenyBypause_1_30 | 抛出异常 |
| 9 | 状态[未进行_已收藏_父任务]拒绝[更新需求版本]操作 | DenyBywait_1_20 | 抛出异常 |
| 10 | 状态[已暂停_未收藏_父任务]拒绝[更新需求版本]操作 | DenyBypause_0_20 | 抛出异常 |
| 11 | 状态[已关闭_已收藏_多人任务]拒绝[更新需求版本]操作 | DenyByclosed_1_10 | 抛出异常 |
| 12 | 状态[已取消_未收藏_父任务]拒绝[更新需求版本]操作 | DenyBycancel_0_20 | 抛出异常 |
| 13 | 状态[进行中_未收藏_父任务]拒绝[更新需求版本]操作 | DenyBydoing_0_20 | 抛出异常 |
| 14 | 获取数据 | Get | 实体行为 |
| 15 | 状态[已取消_已收藏_父任务]拒绝[更新需求版本]操作 | DenyBycancel_1_20 | 抛出异常 |
| 16 | 状态[需求变更_未收藏_父任务]拒绝[更新需求版本]操作 | DenyBystorychange_0_20 | 抛出异常 |
| 17 | 状态[未进行_未收藏_子任务]拒绝[更新需求版本]操作 | DenyBywait_0_40 | 抛出异常 |
| 18 | 状态[已关闭_已收藏_子任务]拒绝[更新需求版本]操作 | DenyByclosed_1_40 | 抛出异常 |
| 19 | 状态[需求变更_已收藏_多人任务]拒绝[更新需求版本]操作 | DenyBystorychange_1_10 | 抛出异常 |
| 20 | 状态[已完成_未收藏_常规任务]拒绝[更新需求版本]操作 | DenyBydone_0_30 | 抛出异常 |
| 21 | 状态[已暂停_已收藏_子任务]拒绝[更新需求版本]操作 | DenyBypause_1_40 | 抛出异常 |
| 22 | 状态[已关闭_未收藏_多人任务]拒绝[更新需求版本]操作 | DenyByclosed_0_10 | 抛出异常 |
| 23 | 状态[进行中_已收藏_子任务]拒绝[更新需求版本]操作 | DenyBydoing_1_40 | 抛出异常 |
| 24 | 状态[未进行_已收藏_常规任务]拒绝[更新需求版本]操作 | DenyBywait_1_30 | 抛出异常 |
| 25 | 开始 | Begin | 开始 |
| 26 | 状态[已暂停_未收藏_常规任务]拒绝[更新需求版本]操作 | DenyBypause_0_30 | 抛出异常 |
| 27 | 状态[已取消_未收藏_常规任务]拒绝[更新需求版本]操作 | DenyBycancel_0_30 | 抛出异常 |
| 28 | 状态[进行中_未收藏_多人任务]拒绝[更新需求版本]操作 | DenyBydoing_0_10 | 抛出异常 |
| 29 | 状态[已完成_已收藏_常规任务]拒绝[更新需求版本]操作 | DenyBydone_1_30 | 抛出异常 |
| 30 | 状态[已取消_已收藏_多人任务]拒绝[更新需求版本]操作 | DenyBycancel_1_10 | 抛出异常 |
| 31 | 状态[已取消_未收藏_多人任务]拒绝[更新需求版本]操作 | DenyBycancel_0_10 | 抛出异常 |
| 32 | 状态[已完成_未收藏_子任务]拒绝[更新需求版本]操作 | DenyBydone_0_40 | 抛出异常 |
| 33 | 状态[需求变更_已收藏_父任务]拒绝[更新需求版本]操作 | DenyBystorychange_1_20 | 抛出异常 |
| 34 | 状态[未进行_未收藏_多人任务]拒绝[更新需求版本]操作 | DenyBywait_0_10 | 抛出异常 |
| 35 | 状态[需求变更_未收藏_常规任务]拒绝[更新需求版本]操作 | DenyBystorychange_0_30 | 抛出异常 |
| 36 | 状态[已关闭_未收藏_子任务]拒绝[更新需求版本]操作 | DenyByclosed_0_40 | 抛出异常 |
| 37 | 状态[已完成_已收藏_父任务]拒绝[更新需求版本]操作 | DenyBydone_1_20 | 抛出异常 |
| 38 | 状态[已暂停_未收藏_子任务]拒绝[更新需求版本]操作 | DenyBypause_0_40 | 抛出异常 |
| 39 | 状态[进行中_已收藏_常规任务]拒绝[更新需求版本]操作 | DenyBydoing_1_30 | 抛出异常 |
| 40 | 状态[已暂停_已收藏_父任务]拒绝[更新需求版本]操作 | DenyBypause_1_20 | 抛出异常 |
| 41 | 状态[未进行_未收藏_父任务]拒绝[更新需求版本]操作 | DenyBywait_0_20 | 抛出异常 |
| 42 | 状态[未进行_已收藏_子任务]拒绝[更新需求版本]操作 | DenyBywait_1_40 | 抛出异常 |
| 43 | 状态[已关闭_已收藏_常规任务]拒绝[更新需求版本]操作 | DenyByclosed_1_30 | 抛出异常 |
| 44 | 状态[已取消_已收藏_子任务]拒绝[更新需求版本]操作 | DenyBycancel_1_40 | 抛出异常 |
| 45 | 状态[进行中_未收藏_子任务]拒绝[更新需求版本]操作 | DenyBydoing_0_40 | 抛出异常 |
| 46 | 状态[已取消_未收藏_子任务]拒绝[更新需求版本]操作 | DenyBycancel_0_40 | 抛出异常 |
| 47 | 状态[需求变更_已收藏_常规任务]拒绝[更新需求版本]操作 | DenyBystorychange_1_30 | 抛出异常 |
| 48 | 准备临时参数 | PrepareTemp | 准备参数 |
| 49 | 状态[已完成_未收藏_多人任务]拒绝[更新需求版本]操作 | DenyBydone_0_10 | 抛出异常 |
| 50 | 状态[需求变更_未收藏_子任务]拒绝[更新需求版本]操作 | DenyBystorychange_0_40 | 抛出异常 |
| 51 | 状态[已关闭_未收藏_常规任务]拒绝[更新需求版本]操作 | DenyByclosed_0_30 | 抛出异常 |
| 52 | 状态[已取消_已收藏_常规任务]拒绝[更新需求版本]操作 | DenyBycancel_1_30 | 抛出异常 |
| 53 | 状态[未进行_已收藏_多人任务]拒绝[更新需求版本]操作 | DenyBywait_1_10 | 抛出异常 |
| 54 | 状态[已完成_已收藏_多人任务]拒绝[更新需求版本]操作 | DenyBydone_1_10 | 抛出异常 |
| 55 | 状态[已暂停_已收藏_多人任务]拒绝[更新需求版本]操作 | DenyBypause_1_10 | 抛出异常 |
| 56 | 状态[进行中_已收藏_父任务]拒绝[更新需求版本]操作 | DenyBydoing_1_20 | 抛出异常 |
| 57 | 状态[已暂停_未收藏_多人任务]拒绝[更新需求版本]操作 | DenyBypause_0_10 | 抛出异常 |
| 58 | 状态[进行中_未收藏_常规任务]拒绝[更新需求版本]操作 | DenyBydoing_0_30 | 抛出异常 |
| 59 | 状态[已关闭_已收藏_父任务]拒绝[更新需求版本]操作 | DenyByclosed_1_20 | 抛出异常 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [编号（ID）](#属性-编号（ID）) |
| 2 | [任务名称（NAME）](#属性-任务名称（NAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [由谁取消（CANCELEDBY）](#属性-由谁取消（CANCELEDBY）) | `=` |
| 2 | [标题颜色（COLOR）](#属性-标题颜色（COLOR）) | `=` |
| 3 | [编号（ID）](#属性-编号（ID）) | `!=`或者`<>` |
| 4 | [由谁完成（FINISHEDBY）](#属性-由谁完成（FINISHEDBY）) | `=` |
| 5 | [由谁关闭（CLOSEDBY）](#属性-由谁关闭（CLOSEDBY）) | `=` |
| 6 | [关闭原因（CLOSEDREASON）](#属性-关闭原因（CLOSEDREASON）) | `=` |
| 7 | [指派日期（ASSIGNEDDATE）](#属性-指派日期（ASSIGNEDDATE）) | `>=` |
| 8 | [优先级（PRI）](#属性-优先级（PRI）) | `=` |
| 9 | [优先级（PRI）](#属性-优先级（PRI）) | `in(...)` |
| 10 | [最后修改（LASTEDITEDBY）](#属性-最后修改（LASTEDITEDBY）) | `=` |
| 11 | [任务状态（STATUS）](#属性-任务状态（STATUS）) | `=` |
| 12 | [任务状态（STATUS）](#属性-任务状态（STATUS）) | `in(...)` |
| 13 | [任务状态（STATUS）](#属性-任务状态（STATUS）) | `!=`或者`<>` |
| 14 | [任务名称（NAME）](#属性-任务名称（NAME）) | `%like%` |
| 15 | [关闭时间（CLOSEDDATE）](#属性-关闭时间（CLOSEDDATE）) | `<=` |
| 16 | [任务类型（TYPE）](#属性-任务类型（TYPE）) | `=` |
| 17 | [指派给（ASSIGNEDTO）](#属性-指派给（ASSIGNEDTO）) | `=` |
| 18 | [指派给（ASSIGNEDTO）](#属性-指派给（ASSIGNEDTO）) | `in(...)` |
| 19 | [预计开始（ESTSTARTED）](#属性-预计开始（ESTSTARTED）) | `>=` |
| 20 | [预计开始（ESTSTARTED）](#属性-预计开始（ESTSTARTED）) | `<=` |
| 21 | [由谁创建（OPENEDBY）](#属性-由谁创建（OPENEDBY）) | `=` |
| 22 | [实际完成（FINISHEDDATE）](#属性-实际完成（FINISHEDDATE）) | `<=` |
| 23 | [所属模块（MODULENAME）](#属性-所属模块（MODULENAME）) | `=` |
| 24 | [所属模块（MODULENAME）](#属性-所属模块（MODULENAME）) | `%like%` |
| 25 | [相关需求（STORYNAME）](#属性-相关需求（STORYNAME）) | `=` |
| 26 | [相关需求（STORYNAME）](#属性-相关需求（STORYNAME）) | `%like%` |
| 27 | [所属项目（PROJECTNAME）](#属性-所属项目（PROJECTNAME）) | `=` |
| 28 | [所属项目（PROJECTNAME）](#属性-所属项目（PROJECTNAME）) | `%like%` |
| 29 | [产品（PRODUCT）](#属性-产品（PRODUCT）) | `=` |
| 30 | [父任务（PARENTNAME）](#属性-父任务（PARENTNAME）) | `=` |
| 31 | [父任务（PARENTNAME）](#属性-父任务（PARENTNAME）) | `%like%` |
| 32 | [所属项目（PROJECT）](#属性-所属项目（PROJECT）) | `=` |
| 33 | [所属项目（PROJECT）](#属性-所属项目（PROJECT）) | `in(...)` |
| 34 | [相关需求（STORY）](#属性-相关需求（STORY）) | `=` |
| 35 | [父任务（PARENT）](#属性-父任务（PARENT）) | `=` |
| 36 | [父任务（PARENT）](#属性-父任务（PARENT）) | `>=` |
| 37 | [来源Bug（FROMBUG）](#属性-来源Bug（FROMBUG）) | `=` |
| 38 | [模块（MODULE）](#属性-模块（MODULE）) | `=` |
| 39 | [模块路径（PATH）](#属性-模块路径（PATH）) | `%like%` |
| 40 | [任务状态（STATUS1）](#属性-任务状态（STATUS1）) | `=` |
| 41 | [任务类型（TASKTYPE）](#属性-任务类型（TASKTYPE）) | `=` |
| 42 | [编号（PLAN）](#属性-编号（PLAN）) | `=` |
| 43 | [任务种别（TASKSPECIES）](#属性-任务种别（TASKSPECIES）) | `=` |
| 44 | [周期类型（CONFIG_TYPE）](#属性-周期类型（CONFIG_TYPE）) | `=` |
| 45 | [所属计划（PLANNAME）](#属性-所属计划（PLANNAME）) | `=` |
| 46 | [所属计划（PLANNAME）](#属性-所属计划（PLANNAME）) | `%like%` |
| 47 | [周期（CYCLE）](#属性-周期（CYCLE）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [指派给我任务](#数据查询-指派给我任务（AssignedToMyTask）) | AssignedToMyTask | 否 |
| 2 | [指派给我任务（PC）](#数据查询-指派给我任务（PC）（AssignedToMyTaskPc）) | AssignedToMyTaskPc | 否 |
| 3 | [Bug相关任务](#数据查询-Bug相关任务（BugTask）) | BugTask | 否 |
| 4 | [通过模块查询](#数据查询-通过模块查询（ByModule）) | ByModule | 否 |
| 5 | [子任务](#数据查询-子任务（ChildTask）) | ChildTask | 否 |
| 6 | [子任务（树）](#数据查询-子任务（树）（ChildTaskTree）) | ChildTaskTree | 否 |
| 7 | [用户年度完成任务](#数据查询-用户年度完成任务（CurFinishTask）) | CurFinishTask | 否 |
| 8 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 9 | [DefaultRow](#数据查询-DefaultRow（DefaultRow）) | DefaultRow | 否 |
| 10 | [ES批量的导入](#数据查询-ES批量的导入（ESBulk）) | ESBulk | 否 |
| 11 | [我代理的任务](#数据查询-我代理的任务（MyAgentTask）) | MyAgentTask | 否 |
| 12 | [我相关的任务](#数据查询-我相关的任务（MyAllTask）) | MyAllTask | 否 |
| 13 | [我完成的任务（汇报）](#数据查询-我完成的任务（汇报）（MyCompleteTask）) | MyCompleteTask | 否 |
| 14 | [我完成的任务（移动端日报）](#数据查询-我完成的任务（移动端日报）（MyCompleteTaskMobDaily）) | MyCompleteTaskMobDaily | 否 |
| 15 | [我完成的任务（移动端月报）](#数据查询-我完成的任务（移动端月报）（MyCompleteTaskMobMonthly）) | MyCompleteTaskMobMonthly | 否 |
| 16 | [我完成的任务（月报展示）](#数据查询-我完成的任务（月报展示）（MyCompleteTaskMonthlyZS）) | MyCompleteTaskMonthlyZS | 否 |
| 17 | [我完成的任务（汇报）](#数据查询-我完成的任务（汇报）（MyCompleteTaskZS）) | MyCompleteTaskZS | 否 |
| 18 | [我的收藏](#数据查询-我的收藏（MyFavorites）) | MyFavorites | 否 |
| 19 | [我计划参与的任务（移动端月报）](#数据查询-我计划参与的任务（移动端月报）（MyPlansTaskMobMonthly）) | MyPlansTaskMobMonthly | 否 |
| 20 | [我计划参与的任务（汇报）](#数据查询-我计划参与的任务（汇报）（MyTomorrowPlanTask）) | MyTomorrowPlanTask | 否 |
| 21 | [我计划参与的任务（汇报）](#数据查询-我计划参与的任务（汇报）（MyTomorrowPlanTaskMobDaily）) | MyTomorrowPlanTaskMobDaily | 否 |
| 22 | [移动端下周计划参与(汇报)](#数据查询-移动端下周计划参与(汇报)（NextWeekCompleteTaskMobZS）) | NextWeekCompleteTaskMobZS | 否 |
| 23 | [本周完成的任务(汇报)](#数据查询-本周完成的任务(汇报)（NextWeekCompleteTaskZS）) | NextWeekCompleteTaskZS | 否 |
| 24 | [下周计划完成任务(汇报)](#数据查询-下周计划完成任务(汇报)（NextWeekPlanCompleteTask）) | NextWeekPlanCompleteTask | 否 |
| 25 | [相关任务（计划）](#数据查询-相关任务（计划）（PlanTask）) | PlanTask | 否 |
| 26 | [项目任务（项目立项）](#数据查询-项目任务（项目立项）（ProjectAppTask）) | ProjectAppTask | 否 |
| 27 | [项目任务](#数据查询-项目任务（ProjectTask）) | ProjectTask | 否 |
| 28 | [根任务](#数据查询-根任务（RootTask）) | RootTask | 否 |
| 29 | [关联计划（当前项目未关联）](#数据查询-关联计划（当前项目未关联）（TaskLinkPlan）) | TaskLinkPlan | 否 |
| 30 | [我本月完成的任务（下拉列表框）](#数据查询-我本月完成的任务（下拉列表框）（ThisMonthCompleteTaskChoice）) | ThisMonthCompleteTaskChoice | 否 |
| 31 | [本周完成的任务(汇报)](#数据查询-本周完成的任务(汇报)（ThisWeekCompleteTask）) | ThisWeekCompleteTask | 否 |
| 32 | [本周已完成任务(下拉框选择)](#数据查询-本周已完成任务(下拉框选择)（ThisWeekCompleteTaskChoice）) | ThisWeekCompleteTaskChoice | 否 |
| 33 | [移动端本周已完成任务(汇报)](#数据查询-移动端本周已完成任务(汇报)（ThisWeekCompleteTaskMobZS）) | ThisWeekCompleteTaskMobZS | 否 |
| 34 | [本周完成的任务(汇报)](#数据查询-本周完成的任务(汇报)（ThisWeekCompleteTaskZS）) | ThisWeekCompleteTaskZS | 否 |
| 35 | [todo列表查询](#数据查询-todo列表查询（TodoListTask）) | TodoListTask | 否 |
| 36 | [任务类型分组](#数据查询-任务类型分组（TypeGroup）) | TypeGroup | 否 |
| 37 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-指派给我任务（AssignedToMyTask）
#### 说明
指派给我任务

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, (select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'task' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, t1.`TYPE`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`, (case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when t1.`status` = 'done' then 30 when t1.`status` = 'closed' then 40 when t1.`status` = 'cancel' then 50 else 60 end) as statusorder ,
t1.`PLAN`,
t1.`TASKSPECIES`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-指派给我任务（PC）（AssignedToMyTaskPc）
#### 说明
指派给我任务（PC）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, (select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'task' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, t1.`TYPE`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`, (case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when t1.`status` = 'done' then 30 when t1.`status` = 'closed' then 40 when t1.`status` = 'cancel' then 50 else 60 end) as statusorder ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID  LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-Bug相关任务（BugTask）
#### 说明
Bug相关任务

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, CONCAT_WS(':',t1.id,t61.realname,t1.`name`) as `NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, t1.`TYPE`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`, (case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when t1.`status` = 'done' then 30 when t1.`status` = 'closed' then 40 when t1.`status` = 'cancel' then 50 else 60 end) as statusorder ,
t1.`PLAN`,
t71.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN zt_user t61 on t61.account = t1.assignedTo  LEFT JOIN `zt_productplan` t71 ON t1.`PLAN` = t71.`ID`
```
### 数据查询-通过模块查询（ByModule）
#### 说明
通过模块查询

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, t1.`DELETED`, (select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'task' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) as DELAY, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, t1.`TYPE`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') as progressrate, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`, (case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when t1.`status` = 'done' then 30 when t1.`status` = 'closed' then 40 when t1.`status` = 'cancel' then 50 else 60 end) as statusorder ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-子任务（ChildTask）
#### 说明
子任务

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MAILTO`, '' AS `MAILTOPK`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.CONSUMED AS `MYCONSUMED`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`, case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, t1.`TYPE`, DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE` ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-子任务（树）（ChildTaskTree）
#### 说明
子任务（树）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t61.`REALNAME`  AS `ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`))  AS `DURATION`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, CONCAT_WS('','子任务-',t1.`name`,'-',t1.assignedTo,'-',t1.id) as `NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, t1.`TYPE`, '40' AS `TASKTYPE`, t1.`status` as `STATUS1`, (case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when t1.`status` = 'done' then 30 when t1.`status` = 'closed' then 40 when t1.`status` = 'cancel' then 50 else 60 end) as statusorder  ,
t1.`PLAN`,
t71.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID  LEFT JOIN zt_user t61 on t1.ASSIGNEDTO =  t61.ACCOUNT
LEFT JOIN `zt_productplan` t71 ON t1.`PLAN` = t71.`ID`
```
### 数据查询-用户年度完成任务（CurFinishTask）
#### 说明
用户年度完成任务

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MAILTO`, '' AS `MAILTOPK`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.CONSUMED AS `MYCONSUMED`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`, case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, t1.`TYPE`, DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE` ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
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
t1.`ASSIGNEDDATE`,
case when exists (select 1 from zt_team t where t.type = 'task' and t1.id = t.root) then (select GROUP_CONCAT(t.account) from zt_team t where t.type = 'task' and t1.id = t.root) else t1.assignedTo end as `ASSIGNEDTO`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`CONSUMED`,
t1.`DEADLINE`,
t1.`DELETED`,
case when ( To_Days( t1.`DEADLINE` ) - To_Days( t1.`ESTSTARTED` ) ) is null then null else ( To_Days( t1.`DEADLINE` ) - To_Days( t1.`ESTSTARTED` ) ) + 1 end  AS `DURATION`,
t1.`ESTIMATE`,
t1.`ESTSTARTED`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`FROMBUG`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'task' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LEFT`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) AS `MODULENAME1`,
(case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`,
( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t51.`NAME` AS `PARENTNAME`,
t11.`PATH`,
t1.`PRI`,
t21.`PRODUCT`,
t41.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t31.`NAME` AS `PROJECTNAME`,
t1.`REALSTARTED`,
t1.`STATUS`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TYPE`,
	( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`,
CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') as progressrate,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`,
(case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when t1.`status` = 'done' then 30 when t1.`status` = 'closed' then 40 when t1.`status` = 'cancel' then 50 else 60 end)
as statusorder,
t1.`PLAN`,
t1.`TASKSPECIES`,
t61.`TITLE` AS `PLANNAME`
FROM `zt_task` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID 
LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID 
LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID
LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-DefaultRow（DefaultRow）
#### 说明
DefaultRow

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, (select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'task' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1 ) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, t1.`TYPE`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, t1.`desc`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`, (case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when t1.`status` = 'done' then 30 when t1.`status` = 'closed' then 40 when t1.`status` = 'cancel' then 50 else 60 end) as statusorder ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-ES批量的导入（ESBulk）
#### 说明
ES批量的导入

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.id, t1.`name`, t1.desc, t1.deleted FROM zt_task t1
```
### 数据查询-我代理的任务（MyAgentTask）
#### 说明
我代理的任务

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, case when t61.AGENTUSER = #{srf.sessioncontext.srfloginname} then t61.AGENTUSER else t1.assignedTo end as `ASSIGNEDTO`,  t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, (select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'task' and t.ACCOUNT = #{srf.sessioncontext.srfloginname}) AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) AS `MODULENAME1`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, t1.`TYPE`, 	( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') as progressrate, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`, (case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when t1.`status` = 'done' then 30 when t1.`status` = 'closed' then 40 when t1.`status` = 'cancel' then 50 else 60 end) as statusorder  ,
t1.`PLAN`,
t71.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN t_ibz_agent t61 ON t1.assignedTo = t61.CREATEMANNAME and DATE_FORMAT(now(), '%Y-%m-%d') >= t61.AGENTBEGIN and DATE_FORMAT(now(), '%Y-%m-%d') <= t61.AGENTEND LEFT JOIN `zt_productplan` t71 ON t1.`PLAN` = t71.`ID`
```
### 数据查询-我相关的任务（MyAllTask）
#### 说明
我相关的任务

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, (select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'task' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, t1.`TYPE`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`, (case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when t1.`status` = 'done' then 30 when t1.`status` = 'closed' then 40 when t1.`status` = 'cancel' then 50 else 60 end) as statusorder ,
t1.`PLAN`,
t1.`TASKSPECIES`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-我完成的任务（汇报）（MyCompleteTask）
#### 说明
我完成的任务（汇报）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, (SELECT sum(tt.consumed) from zt_taskestimate tt where tt.task = t1.id and tt.date = DATE_FORMAT(#{srf.datacontext.date}, '%Y-%m-%d' ) and tt.account =#{srf.sessioncontext.srfloginname}) as 'consumed', t1.`DEADLINE`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MAILTO`, '' AS `MAILTOPK`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.CONSUMED AS `MYCONSUMED`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`, case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, t1.`TYPE`, DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE` ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-我完成的任务（移动端日报）（MyCompleteTaskMobDaily）
#### 说明
我完成的任务（移动端日报）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MAILTO`, '' AS `MAILTOPK`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.CONSUMED AS `MYCONSUMED`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`, case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, t1.`TYPE`, DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE` ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-我完成的任务（移动端月报）（MyCompleteTaskMobMonthly）
#### 说明
我完成的任务（移动端月报）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MAILTO`, '' AS `MAILTOPK`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.CONSUMED AS `MYCONSUMED`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`, case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, t1.`TYPE`, DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE` ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-我完成的任务（月报展示）（MyCompleteTaskMonthlyZS）
#### 说明
我完成的任务（月报展示）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, (select IFNULL(SUM(consumed),0) from zt_taskestimate where task = t1.id and account = #{srf.sessioncontext.srfloginname} and DATE_FORMAT(date,'%Y-%m') = DATE_FORMAT(#{srf.datacontext.date},'%Y-%m')) as `CONSUMED`, t1.`DEADLINE`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MAILTO`, '' AS `MAILTOPK`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.CONSUMED AS `MYCONSUMED`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`, case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, t1.`TYPE`, DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE` ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID  LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-我完成的任务（汇报）（MyCompleteTaskZS）
#### 说明
我完成的任务（汇报）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, (SELECT sum(tt.consumed) from zt_taskestimate tt where tt.task = t1.id and tt.date = DATE_FORMAT(#{srf.datacontext.date}, '%Y-%m-%d' ) and tt.account =#{srf.sessioncontext.srfloginname}) as 'consumed', t1.`DEADLINE`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MAILTO`, '' AS `MAILTOPK`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.CONSUMED AS `MYCONSUMED`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`, case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, t1.`TYPE`, DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE` ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-我的收藏（MyFavorites）
#### 说明
我的收藏

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, (select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'task' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, t1.`TYPE`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') as progressrate, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`, (case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when t1.`status` = 'done' then 30 when t1.`status` = 'closed' then 40 when t1.`status` = 'cancel' then 50 else 60 end) as statusorder ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-我计划参与的任务（移动端月报）（MyPlansTaskMobMonthly）
#### 说明
我计划参与的任务（移动端月报）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MAILTO`, '' AS `MAILTOPK`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.CONSUMED AS `MYCONSUMED`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`, case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, t1.`TYPE`, DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE` ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-我计划参与的任务（汇报）（MyTomorrowPlanTask）
#### 说明
我计划参与的任务（汇报）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MAILTO`, '' AS `MAILTOPK`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.CONSUMED AS `MYCONSUMED`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`, case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, t1.`TYPE`, DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE` ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-我计划参与的任务（汇报）（MyTomorrowPlanTaskMobDaily）
#### 说明
我计划参与的任务（汇报）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MAILTO`, '' AS `MAILTOPK`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.CONSUMED AS `MYCONSUMED`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`, case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, t1.`TYPE`, DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE` ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID
LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-移动端下周计划参与(汇报)（NextWeekCompleteTaskMobZS）
#### 说明
移动端下周计划参与(汇报)

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MAILTO`, '' AS `MAILTOPK`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.CONSUMED AS `MYCONSUMED`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`, case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, t1.`TYPE`, DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE` ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-本周完成的任务(汇报)（NextWeekCompleteTaskZS）
#### 说明
本周完成的任务(汇报)

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MAILTO`, '' AS `MAILTOPK`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.CONSUMED AS `MYCONSUMED`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`, case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, t1.`TYPE`, DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE` ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-下周计划完成任务(汇报)（NextWeekPlanCompleteTask）
#### 说明
下周计划完成任务(汇报)

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MAILTO`, '' AS `MAILTOPK`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.CONSUMED AS `MYCONSUMED`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`, case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, t1.`TYPE`, DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE` ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-相关任务（计划）（PlanTask）
#### 说明
相关任务（计划）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ASSIGNEDDATE`,
case when exists (select 1 from zt_team t where t.type = 'task' and t1.id = t.root) then (select GROUP_CONCAT(t.account) from zt_team t where t.type = 'task' and t1.id = t.root) else t1.assignedTo end as `ASSIGNEDTO`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`CONSUMED`,
t1.`DEADLINE`,
t1.`DELETED`,
(To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`,
t1.`ESTIMATE`,
t1.`ESTSTARTED`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`FROMBUG`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'task' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LEFT`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) AS `MODULENAME1`,
(case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`,
( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t51.`NAME` AS `PARENTNAME`,
t11.`PATH`,
t1.`PRI`,
t21.`PRODUCT`,
t41.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t31.`NAME` AS `PROJECTNAME`,
t1.`REALSTARTED`,
t1.`STATUS`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TYPE`,
	( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`,
CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') as progressrate,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`,
(case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when t1.`status` = 'done' then 30 when t1.`status` = 'closed' then 40 when t1.`status` = 'cancel' then 50 else 60 end)
as statusorder,
t1.`PLAN`,
t1.`TASKSPECIES`,
t61.`TITLE` AS `PLANNAME`
FROM `zt_task` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID 
LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID 
LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID
LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-项目任务（项目立项）（ProjectAppTask）
#### 说明
项目任务（项目立项）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) as DELAY, (select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'task' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root LIMIT 0,1) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, t1.`TYPE`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') as progressrate, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`, (case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when t1.`status` = 'done' then 30 when t1.`status` = 'closed' then 40 when t1.`status` = 'cancel' then 50 else 60 end) as statusorder ,
t1.`PLAN`,
t1.`TASKSPECIES`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-项目任务（ProjectTask）
#### 说明
项目任务

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) as DELAY, (select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'task' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root LIMIT 0,1) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, t1.`TYPE`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') as progressrate, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`, (case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when t1.`status` = 'done' then 30 when t1.`status` = 'closed' then 40 when t1.`status` = 'cancel' then 50 else 60 end) as statusorder ,
t1.`PLAN`,
t1.`TASKSPECIES`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-根任务（RootTask）
#### 说明
根任务

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.`ASSIGNEDDATE`,
	t61.`REALNAME` AS `ASSIGNEDTO`,
	t1.`CANCELEDBY`,
	t1.`CANCELEDDATE`,
	t1.`CLOSEDBY`,
	t1.`CLOSEDDATE`,
	t1.`CLOSEDREASON`,
	t1.`COLOR`,
	t1.`CONSUMED`,
	t1.`DEADLINE`,
	t1.`DELETED`,
	case when ( To_Days( t1.`DEADLINE` ) - To_Days( t1.`ESTSTARTED` ) ) is null then null else ( To_Days( t1.`DEADLINE` ) - To_Days( t1.`ESTSTARTED` ) ) + 1 end  AS `DURATION`,
	0 AS `ISFAVORITES`,
	( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`,
	t1.`ESTIMATE`,
	t1.`ESTSTARTED`,
	t1.`FINISHEDBY`,
	t1.`FINISHEDDATE`,
	t1.`FROMBUG`,
	t1.`ID`,
	t1.`LASTEDITEDBY`,
	t1.`LASTEDITEDDATE`,
	t1.`LEFT`,
	t1.`MODULE`,
	t11.`NAME` AS `MODULENAME`,
	CONCAT_WS( '', '任务-', t1.`name`, '-', t1.assignedTo, '-', t1.id ) AS `NAME`,
	t1.`OPENEDBY`,
	t1.`OPENEDDATE`,
	t1.`PARENT`,
	t51.`NAME` AS `PARENTNAME`,
	t1.`PRI`,
	t21.`PRODUCT`,
	t41.`NAME` AS `PRODUCTNAME`,
	t1.`PROJECT`,
	t31.`NAME` AS `PROJECTNAME`,
	t1.`REALSTARTED`,
	t1.`STATUS`,
	t1.`STORY`,
	t21.`TITLE` AS `STORYNAME`,
	t1.`STORYVERSION`,
	t1.`SUBSTATUS`,
	t1.`TYPE`,
	'40' AS `TASKTYPE`,
	t1.`status` AS `STATUS1`,
	(
CASE
	
	WHEN t1.`status` = 'wait' THEN
	10 
	WHEN t1.`status` = 'doing' THEN
	20 
	WHEN t1.`status` = 'done' THEN
	30 
	WHEN t1.`status` = 'closed' THEN
	40 
	WHEN t1.`status` = 'cancel' THEN
	50 ELSE 60 
END 
	) AS statusorder,
t1.`PLAN`,
t71.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID  LEFT JOIN zt_user t61 on t1.ASSIGNEDTO =  t61.ACCOUNT 
LEFT JOIN `zt_productplan` t71 ON t1.`PLAN` = t71.`ID`
```
### 数据查询-关联计划（当前项目未关联）（TaskLinkPlan）
#### 说明
关联计划（当前项目未关联）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ASSIGN`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`CONFIG_BEFOREDAYS`,
t1.`CONFIG_BEGIN`,
t1.`CONFIG_DAY`,
t1.`CONFIG_END`,
t1.`CONFIG_MONTH`,
t1.`CONFIG_TYPE`,
t1.`CONFIG_WEEK`,
t1.`CONSUMED`,
t1.`CYCLE`,
t1.`DEADLINE`,
(case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`,
t1.`DELETED`,
(To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`,
t1.`ESTIMATE`,
t1.`ESTSTARTED`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`FROMBUG`,
t1.`ID`,
t1.`IDVALUE`,
t1.`INPUTCOST`,
0 AS `ISFAVORITES`,
( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LEFT`,
t1.`MAILTO`,
'' AS `MAILTOPK`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`,
( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`,
t1.CONSUMED AS `MYCONSUMED`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t51.`NAME` AS `PARENTNAME`,
t11.`PATH`,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME`,
t1.`PRI`,
t21.`PRODUCT`,
t41.`NAME` AS `PRODUCTNAME`,
CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`,
t1.`PROJECT`,
t31.`NAME` AS `PROJECTNAME`,
t1.`REALSTARTED`,
t1.`STATUS`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`,
case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASKSPECIES`,
( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`,
t1.`TYPE`,
DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE`
FROM `zt_task` t1 
LEFT JOIN `zt_module` t11 ON t1.`MODULE` = t11.`ID` 
LEFT JOIN `zt_story` t21 ON t1.`STORY` = t21.`ID` 
LEFT JOIN `zt_project` t31 ON t1.`PROJECT` = t31.`ID` 
LEFT JOIN `zt_product` t41 ON t21.`PRODUCT` = t41.`ID` 
LEFT JOIN `zt_task` t51 ON t1.`PARENT` = t51.`ID` 
LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID` 

```
### 数据查询-我本月完成的任务（下拉列表框）（ThisMonthCompleteTaskChoice）
#### 说明
我本月完成的任务（下拉列表框）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MAILTO`, '' AS `MAILTOPK`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.CONSUMED AS `MYCONSUMED`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`, case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, t1.`TYPE`, DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE` ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID 
LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-本周完成的任务(汇报)（ThisWeekCompleteTask）
#### 说明
本周完成的任务(汇报)

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MAILTO`, '' AS `MAILTOPK`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.CONSUMED AS `MYCONSUMED`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`, case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, t1.`TYPE`, DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE` ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-本周已完成任务(下拉框选择)（ThisWeekCompleteTaskChoice）
#### 说明
本周已完成任务(下拉框选择)

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MAILTO`, '' AS `MAILTOPK`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.CONSUMED AS `MYCONSUMED`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`, case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, t1.`TYPE`, DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE` ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-移动端本周已完成任务(汇报)（ThisWeekCompleteTaskMobZS）
#### 说明
移动端本周已完成任务(汇报)

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DEADLINE`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MAILTO`, '' AS `MAILTOPK`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.CONSUMED AS `MYCONSUMED`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`, case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, t1.`TYPE`, DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE` ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-本周完成的任务(汇报)（ThisWeekCompleteTaskZS）
#### 说明
本周完成的任务(汇报)

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, (select IFNULL(SUM(t.consumed),0) from zt_taskestimate t where t.task = t1.id and t.account = #{srf.sessioncontext.srfloginname} and YEARWEEK(t.date,1) = YEARWEEK(#{srf.datacontext.date},1) ) as `consumed`, t1.`DEADLINE`, (case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`, t1.`DELETED`, (To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`, t1.`ESTIMATE`, t1.`ESTSTARTED`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, 0 AS `ISFAVORITES`, ( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MAILTO`, '' AS `MAILTOPK`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, (case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`, ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`, t1.CONSUMED AS `MYCONSUMED`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t51.`NAME` AS `PARENTNAME`, t11.`PATH`, t1.`PRI`, t21.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`, t1.`PROJECT`, t31.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, (case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`, case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`, t1.`STORY`, t21.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, t1.`TYPE`, DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE` ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID  LEFT JOIN zt_story t21 ON t1.STORY = t21.ID  LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID  LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID  LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`
```
### 数据查询-todo列表查询（TodoListTask）
#### 说明
todo列表查询

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT 	t1.*  FROM 	( SELECT 	t1.id, 	t1.`name`, 	t1.pri, 	t1.assignedTo, 	t1.finishedBy, 	t1.finishedDate, 	t1.estStarted, CASE 	 	WHEN t1.`status` IN ( 'done', 'closed' ) THEN 	'1' ELSE '0'  	END AS isfinished, 	( SELECT count( 1 ) FROM zt_action WHERE objectType = 'task' AND action = 'commented' AND objectid = t1.id ) AS ReplyCount, CASE 		 		WHEN t1.`desc` IS NULL  		OR t1.`desc` = '' THEN 			'0' ELSE '1'  		END AS hasDetail, 		t1.project, 		t1.`TYPE`, 		t1.`status`, 		t1.deleted, 		t1.openeddate, 		t1.closeddate, 		t1.assigneddate,                 t1.consumed, 		t1.deadline, 		t11.`name` AS projectname, 		t1.canceleddate, 		t1.lastediteddate,                 DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') as updatedate, 		t1.lasteditedby, 		t1.openedby, 		t1.closedby, 		t1.canceledby  	FROM 		`zt_task` t1 	LEFT JOIN zt_project t11 ON t1.project = t11.id  ) t1
```
### 数据查询-任务类型分组（TypeGroup）
#### 说明
任务类型分组

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`CANCELEDBY`, t1.`CANCELEDDATE`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`CONSUMED`, t1.`DELETED`, t1.`ESTIMATE`, (SELECT MIN(ESTSTARTED) FROM `zt_task` WHERE DELETED = '0' AND TYPE = t1.`TYPE` AND PROJECT = t1.`PROJECT` and ESTSTARTED <> '0000-00-00'  and estStarted <> '0002-11-30'  and estStarted <> '1970-01-01') AS `ESTSTARTED`, (SELECT MAX(DEADLINE) FROM `zt_task` WHERE DELETED = '0' AND TYPE = t1.`TYPE` AND PROJECT = t1.`PROJECT` and DEADLINE <> '0000-00-00'  and estStarted <> '0002-11-30'  and estStarted <> '1970-01-01') AS `DEADLINE`, (SELECT DATEDIFF(MAX(DEADLINE),MIN(ESTSTARTED))  + 1 FROM `zt_task` WHERE DELETED = '0' AND TYPE = t1.`TYPE` AND PROJECT = t1.`PROJECT` and ESTSTARTED <> '0000-00-00' AND DEADLINE <> '0000-00-00'  and estStarted <> '0002-11-30'  and estStarted <> '1970-01-01') AS `DURATION`, t1.`FINISHEDBY`, t1.`FINISHEDDATE`, t1.`FROMBUG`, t1.`ID`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LEFT`, t1.`MODULE`, t21.`NAME` AS `MODULENAME`, t1.`NAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t11.`NAME` AS `PARENTNAME`, t1.`PRI`, t31.`PRODUCT`, t41.`NAME` AS `PRODUCTNAME`, t1.`PROJECT`, t51.`NAME` AS `PROJECTNAME`, t1.`REALSTARTED`, t1.`STATUS`, t1.`STORY`, t31.`TITLE` AS `STORYNAME`, t1.`STORYVERSION`, t1.`SUBSTATUS`, t1.`TYPE`, ( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`, (case when t1.storyVersion < t31.version and t31.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`, (case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when t1.`status` = 'done' then 30 when t1.`status` = 'closed' then 40 when t1.`status` = 'cancel' then 50 else 60 end) as statusorder ,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME` FROM `zt_task` t1  LEFT JOIN zt_task t11 ON t1.PARENT = t11.ID  LEFT JOIN zt_module t21 ON t1.MODULE = t21.ID  LEFT JOIN zt_story t31 ON t1.STORY = t31.ID  LEFT JOIN zt_product t41 ON t31.PRODUCT = t41.ID  LEFT JOIN zt_project t51 ON t1.PROJECT = t51.ID  LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID`   WHERE  t1.DELETED = '0'
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
t1.`ASSIGN`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`CONFIG_BEFOREDAYS`,
t1.`CONFIG_BEGIN`,
t1.`CONFIG_DAY`,
t1.`CONFIG_END`,
t1.`CONFIG_MONTH`,
t1.`CONFIG_TYPE`,
t1.`CONFIG_WEEK`,
t1.`CONSUMED`,
t1.`CYCLE`,
t1.`DEADLINE`,
(case when t1.deadline is null or t1.deadline = '0000-00-00' or t1.deadline = '1970-01-01' then '' when t1.`status` in ('wait','doing') and t1.deadline <DATE_FORMAT(now(),'%y-%m-%d')  then CONCAT_WS('','延期',TIMESTAMPDIFF(DAY, t1.deadline, now()),'天') else '' end) AS `DELAY`,
t1.`DELETED`,
t1.`DESC`,
(To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`,
t1.`ESTIMATE`,
t1.`ESTSTARTED`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`FINISHEDLIST`,
t1.`FROMBUG`,
t1.`ID`,
t1.`IDVALUE`,
t1.`INPUTCOST`,
0 AS `ISFAVORITES`,
( CASE WHEN t1.parent > 0 THEN TRUE ELSE FALSE END ) AS `ISLEAF`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LEFT`,
t1.`MAILTO`,
'' AS `MAILTOPK`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`,
( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`,
t1.CONSUMED AS `MYCONSUMED`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t51.`NAME` AS `PARENTNAME`,
t11.`PATH`,
t1.`PLAN`,
t61.`TITLE` AS `PLANNAME`,
t1.`PRI`,
t21.`PRODUCT`,
t41.`NAME` AS `PRODUCTNAME`,
CONCAT_WS('',case when t1.consumed = 0 or t1.consumed is null then '0' when t1.`left` = 0 or t1.`left` is null then '100' else ROUND((ROUND(t1.`consumed`/(t1.`left` + t1.consumed),2)) * 100) end ,'%') AS `PROGRESSRATE`,
t1.`PROJECT`,
t31.`NAME` AS `PROJECTNAME`,
t1.`REALSTARTED`,
t1.`STATUS`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`,
case when t1.`status` = 'wait' then 10 when t1.`status` = 'doing' then 20 when  t1.`status` = 'done' then 30 when  t1.`status` = 'closed' then 40 when  t1.`status` = 'cancel' then 50  else 60 end AS `STATUSORDER`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASKSPECIES`,
( CASE WHEN ( SELECT CASE	 WHEN count( t.`id` ) > 0 THEN 1 ELSE 0  END  FROM `zt_team` t  WHERE t.`type` = 'task'  AND t.`root` = t1.`id`  ) = 1 THEN '10'  WHEN t1.parent = - 1 THEN'20'   WHEN t1.parent = 0 THEN '30' ELSE '40' END) AS `TASKTYPE`,
t1.`TYPE`,
DATE_FORMAT(t1.lastediteddate,'%Y-%m-%d') AS `UPDATEDATE`
FROM `zt_task` t1 
LEFT JOIN `zt_module` t11 ON t1.`MODULE` = t11.`ID` 
LEFT JOIN `zt_story` t21 ON t1.`STORY` = t21.`ID` 
LEFT JOIN `zt_project` t31 ON t1.`PROJECT` = t31.`ID` 
LEFT JOIN `zt_product` t41 ON t21.`PRODUCT` = t41.`ID` 
LEFT JOIN `zt_task` t51 ON t1.`PARENT` = t51.`ID` 
LEFT JOIN `zt_productplan` t61 ON t1.`PLAN` = t61.`ID` 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [指派给我任务](#数据集合-指派给我任务（AssignedToMyTask）) | AssignedToMyTask | 否 |
| 2 | [指派给我任务（PC）](#数据集合-指派给我任务（PC）（AssignedToMyTaskPc）) | AssignedToMyTaskPc | 否 |
| 3 | [Bug相关任务](#数据集合-Bug相关任务（BugTask）) | BugTask | 否 |
| 4 | [通过模块查询](#数据集合-通过模块查询（ByModule）) | ByModule | 否 |
| 5 | [子任务](#数据集合-子任务（ChildTask）) | ChildTask | 否 |
| 6 | [子任务（树）](#数据集合-子任务（树）（ChildTaskTree）) | ChildTaskTree | 否 |
| 7 | [用户年度完成任务](#数据集合-用户年度完成任务（CurFinishTask）) | CurFinishTask | 否 |
| 8 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 9 | [DefaultRow](#数据集合-DefaultRow（DefaultRow）) | DefaultRow | 否 |
| 10 | [ES批量的导入](#数据集合-ES批量的导入（ESBulk）) | ESBulk | 否 |
| 11 | [我代理的任务](#数据集合-我代理的任务（MyAgentTask）) | MyAgentTask | 否 |
| 12 | [我相关的任务](#数据集合-我相关的任务（MyAllTask）) | MyAllTask | 否 |
| 13 | [我完成的任务（汇报）](#数据集合-我完成的任务（汇报）（MyCompleteTask）) | MyCompleteTask | 否 |
| 14 | [我完成的任务（移动端日报）](#数据集合-我完成的任务（移动端日报）（MyCompleteTaskMobDaily）) | MyCompleteTaskMobDaily | 否 |
| 15 | [我完成的任务（移动端月报）](#数据集合-我完成的任务（移动端月报）（MyCompleteTaskMobMonthly）) | MyCompleteTaskMobMonthly | 否 |
| 16 | [我完成的任务（月报展示）](#数据集合-我完成的任务（月报展示）（MyCompleteTaskMonthlyZS）) | MyCompleteTaskMonthlyZS | 否 |
| 17 | [我完成的任务（汇报）](#数据集合-我完成的任务（汇报）（MyCompleteTaskZS）) | MyCompleteTaskZS | 否 |
| 18 | [我的收藏](#数据集合-我的收藏（MyFavorites）) | MyFavorites | 否 |
| 19 | [我计划参与的任务（移动端月报）](#数据集合-我计划参与的任务（移动端月报）（MyPlansTaskMobMonthly）) | MyPlansTaskMobMonthly | 否 |
| 20 | [我计划参与的任务（汇报）](#数据集合-我计划参与的任务（汇报）（MyTomorrowPlanTask）) | MyTomorrowPlanTask | 否 |
| 21 | [我计划参与的任务（汇报）](#数据集合-我计划参与的任务（汇报）（MyTomorrowPlanTaskMobDaily）) | MyTomorrowPlanTaskMobDaily | 否 |
| 22 | [移动端下周计划参与(汇报)](#数据集合-移动端下周计划参与(汇报)（NextWeekCompleteTaskMobZS）) | NextWeekCompleteTaskMobZS | 否 |
| 23 | [本周完成的任务(汇报)](#数据集合-本周完成的任务(汇报)（NextWeekCompleteTaskZS）) | NextWeekCompleteTaskZS | 否 |
| 24 | [下周计划完成任务(汇报)](#数据集合-下周计划完成任务(汇报)（NextWeekPlanCompleteTask）) | NextWeekPlanCompleteTask | 否 |
| 25 | [相关任务（计划）](#数据集合-相关任务（计划）（PlanTask）) | PlanTask | 否 |
| 26 | [项目任务（项目立项）](#数据集合-项目任务（项目立项）（ProjectAppTask）) | ProjectAppTask | 否 |
| 27 | [项目任务](#数据集合-项目任务（ProjectTask）) | ProjectTask | 否 |
| 28 | [根任务](#数据集合-根任务（RootTask）) | RootTask | 否 |
| 29 | [关联计划（当前项目未关联）](#数据集合-关联计划（当前项目未关联）（TaskLinkPlan）) | TaskLinkPlan | 否 |
| 30 | [我本月完成的任务（下拉列表框）](#数据集合-我本月完成的任务（下拉列表框）（ThisMonthCompleteTaskChoice）) | ThisMonthCompleteTaskChoice | 否 |
| 31 | [本周完成的任务(汇报)](#数据集合-本周完成的任务(汇报)（ThisWeekCompleteTask）) | ThisWeekCompleteTask | 否 |
| 32 | [本周已完成任务(下拉框选择)](#数据集合-本周已完成任务(下拉框选择)（ThisWeekCompleteTaskChoice）) | ThisWeekCompleteTaskChoice | 否 |
| 33 | [移动端本周已完成任务(汇报)](#数据集合-移动端本周已完成任务(汇报)（ThisWeekCompleteTaskMobZS）) | ThisWeekCompleteTaskMobZS | 否 |
| 34 | [本周完成的任务(汇报)](#数据集合-本周完成的任务(汇报)（ThisWeekCompleteTaskZS）) | ThisWeekCompleteTaskZS | 否 |
| 35 | [todo列表查询](#数据集合-todo列表查询（TodoListTask）) | TodoListTask | 否 |
| 36 | [任务类型分组](#数据集合-任务类型分组（TypeGroup）) | TypeGroup | 否 |

### 数据集合-指派给我任务（AssignedToMyTask）
#### 说明
指派给我任务

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [指派给我任务（AssignedToMyTask）](#数据查询-指派给我任务（AssignedToMyTask）) |
### 数据集合-指派给我任务（PC）（AssignedToMyTaskPc）
#### 说明
指派给我任务（PC）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [指派给我任务（PC）（AssignedToMyTaskPc）](#数据查询-指派给我任务（PC）（AssignedToMyTaskPc）) |
### 数据集合-Bug相关任务（BugTask）
#### 说明
Bug相关任务

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [Bug相关任务（BugTask）](#数据查询-Bug相关任务（BugTask）) |
### 数据集合-通过模块查询（ByModule）
#### 说明
通过模块查询

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [通过模块查询（ByModule）](#数据查询-通过模块查询（ByModule）) |
### 数据集合-子任务（ChildTask）
#### 说明
子任务

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [子任务（ChildTask）](#数据查询-子任务（ChildTask）) |
### 数据集合-子任务（树）（ChildTaskTree）
#### 说明
子任务（树）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [子任务（树）（ChildTaskTree）](#数据查询-子任务（树）（ChildTaskTree）) |
### 数据集合-用户年度完成任务（CurFinishTask）
#### 说明
用户年度完成任务

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [用户年度完成任务（CurFinishTask）](#数据查询-用户年度完成任务（CurFinishTask）) |
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
### 数据集合-DefaultRow（DefaultRow）
#### 说明
DefaultRow

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [DefaultRow（DefaultRow）](#数据查询-DefaultRow（DefaultRow）) |
### 数据集合-ES批量的导入（ESBulk）
#### 说明
ES批量的导入

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [ES批量的导入（ESBulk）](#数据查询-ES批量的导入（ESBulk）) |
### 数据集合-我代理的任务（MyAgentTask）
#### 说明
我代理的任务

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我代理的任务（MyAgentTask）](#数据查询-我代理的任务（MyAgentTask）) |
### 数据集合-我相关的任务（MyAllTask）
#### 说明
我相关的任务

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我相关的任务（MyAllTask）](#数据查询-我相关的任务（MyAllTask）) |
### 数据集合-我完成的任务（汇报）（MyCompleteTask）
#### 说明
我完成的任务（汇报）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我完成的任务（汇报）（MyCompleteTask）](#数据查询-我完成的任务（汇报）（MyCompleteTask）) |
### 数据集合-我完成的任务（移动端日报）（MyCompleteTaskMobDaily）
#### 说明
我完成的任务（移动端日报）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我完成的任务（移动端日报）（MyCompleteTaskMobDaily）](#数据查询-我完成的任务（移动端日报）（MyCompleteTaskMobDaily）) |
### 数据集合-我完成的任务（移动端月报）（MyCompleteTaskMobMonthly）
#### 说明
我完成的任务（移动端月报）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我完成的任务（移动端月报）（MyCompleteTaskMobMonthly）](#数据查询-我完成的任务（移动端月报）（MyCompleteTaskMobMonthly）) |
### 数据集合-我完成的任务（月报展示）（MyCompleteTaskMonthlyZS）
#### 说明
我完成的任务（月报展示）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我完成的任务（月报展示）（MyCompleteTaskMonthlyZS）](#数据查询-我完成的任务（月报展示）（MyCompleteTaskMonthlyZS）) |
### 数据集合-我完成的任务（汇报）（MyCompleteTaskZS）
#### 说明
我完成的任务（汇报）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我完成的任务（汇报）（MyCompleteTaskZS）](#数据查询-我完成的任务（汇报）（MyCompleteTaskZS）) |
### 数据集合-我的收藏（MyFavorites）
#### 说明
我的收藏

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我的收藏（MyFavorites）](#数据查询-我的收藏（MyFavorites）) |
### 数据集合-我计划参与的任务（移动端月报）（MyPlansTaskMobMonthly）
#### 说明
我计划参与的任务（移动端月报）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我计划参与的任务（移动端月报）（MyPlansTaskMobMonthly）](#数据查询-我计划参与的任务（移动端月报）（MyPlansTaskMobMonthly）) |
### 数据集合-我计划参与的任务（汇报）（MyTomorrowPlanTask）
#### 说明
我计划参与的任务（汇报）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我计划参与的任务（汇报）（MyTomorrowPlanTask）](#数据查询-我计划参与的任务（汇报）（MyTomorrowPlanTask）) |
### 数据集合-我计划参与的任务（汇报）（MyTomorrowPlanTaskMobDaily）
#### 说明
我计划参与的任务（汇报）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我计划参与的任务（汇报）（MyTomorrowPlanTaskMobDaily）](#数据查询-我计划参与的任务（汇报）（MyTomorrowPlanTaskMobDaily）) |
### 数据集合-移动端下周计划参与(汇报)（NextWeekCompleteTaskMobZS）
#### 说明
移动端下周计划参与(汇报)

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [移动端下周计划参与(汇报)（NextWeekCompleteTaskMobZS）](#数据查询-移动端下周计划参与(汇报)（NextWeekCompleteTaskMobZS）) |
### 数据集合-本周完成的任务(汇报)（NextWeekCompleteTaskZS）
#### 说明
本周完成的任务(汇报)

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [本周完成的任务(汇报)（NextWeekCompleteTaskZS）](#数据查询-本周完成的任务(汇报)（NextWeekCompleteTaskZS）) |
### 数据集合-下周计划完成任务(汇报)（NextWeekPlanCompleteTask）
#### 说明
下周计划完成任务(汇报)

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [下周计划完成任务(汇报)（NextWeekPlanCompleteTask）](#数据查询-下周计划完成任务(汇报)（NextWeekPlanCompleteTask）) |
### 数据集合-相关任务（计划）（PlanTask）
#### 说明
相关任务（计划）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [相关任务（计划）（PlanTask）](#数据查询-相关任务（计划）（PlanTask）) |
### 数据集合-项目任务（项目立项）（ProjectAppTask）
#### 说明
项目任务（项目立项）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目任务（项目立项）（ProjectAppTask）](#数据查询-项目任务（项目立项）（ProjectAppTask）) |
### 数据集合-项目任务（ProjectTask）
#### 说明
项目任务

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目任务（ProjectTask）](#数据查询-项目任务（ProjectTask）) |
### 数据集合-根任务（RootTask）
#### 说明
根任务

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [根任务（RootTask）](#数据查询-根任务（RootTask）) |
### 数据集合-关联计划（当前项目未关联）（TaskLinkPlan）
#### 说明
关联计划（当前项目未关联）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [关联计划（当前项目未关联）（TaskLinkPlan）](#数据查询-关联计划（当前项目未关联）（TaskLinkPlan）) |
### 数据集合-我本月完成的任务（下拉列表框）（ThisMonthCompleteTaskChoice）
#### 说明
我本月完成的任务（下拉列表框）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我本月完成的任务（下拉列表框）（ThisMonthCompleteTaskChoice）](#数据查询-我本月完成的任务（下拉列表框）（ThisMonthCompleteTaskChoice）) |
### 数据集合-本周完成的任务(汇报)（ThisWeekCompleteTask）
#### 说明
本周完成的任务(汇报)

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [本周完成的任务(汇报)（ThisWeekCompleteTask）](#数据查询-本周完成的任务(汇报)（ThisWeekCompleteTask）) |
### 数据集合-本周已完成任务(下拉框选择)（ThisWeekCompleteTaskChoice）
#### 说明
本周已完成任务(下拉框选择)

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [本周已完成任务(下拉框选择)（ThisWeekCompleteTaskChoice）](#数据查询-本周已完成任务(下拉框选择)（ThisWeekCompleteTaskChoice）) |
### 数据集合-移动端本周已完成任务(汇报)（ThisWeekCompleteTaskMobZS）
#### 说明
移动端本周已完成任务(汇报)

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [移动端本周已完成任务(汇报)（ThisWeekCompleteTaskMobZS）](#数据查询-移动端本周已完成任务(汇报)（ThisWeekCompleteTaskMobZS）) |
### 数据集合-本周完成的任务(汇报)（ThisWeekCompleteTaskZS）
#### 说明
本周完成的任务(汇报)

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [本周完成的任务(汇报)（ThisWeekCompleteTaskZS）](#数据查询-本周完成的任务(汇报)（ThisWeekCompleteTaskZS）) |
### 数据集合-todo列表查询（TodoListTask）
#### 说明
todo列表查询

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [todo列表查询（TodoListTask）](#数据查询-todo列表查询（TodoListTask）) |
### 数据集合-任务类型分组（TypeGroup）
#### 说明
任务类型分组

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [任务类型分组（TypeGroup）](#数据查询-任务类型分组（TypeGroup）) |

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
| 2 | P | [优先级（PRI）](#属性-优先级（PRI）) |  |
| 3 | 任务名称 | [任务名称（NAME）](#属性-任务名称（NAME）) |  |
| 4 | 任务状态 | [任务状态（STATUS）](#属性-任务状态（STATUS）) |  |
| 5 | 任务状态 | [任务状态（STATUS1）](#属性-任务状态（STATUS1）) |  |
| 6 | 指派给 | [指派给（ASSIGNEDTO）](#属性-指派给（ASSIGNEDTO）) |  |
| 7 | 完成者 | [由谁完成（FINISHEDBY）](#属性-由谁完成（FINISHEDBY）) |  |
| 8 | 预计 | [最初预计（ESTIMATE）](#属性-最初预计（ESTIMATE）) |  |
| 9 | 消耗 | [总计消耗（CONSUMED）](#属性-总计消耗（CONSUMED）) |  |
| 10 | 剩余 | [预计剩余（LEFT）](#属性-预计剩余（LEFT）) |  |
| 11 | 截止日期 | [截止日期（DEADLINE）](#属性-截止日期（DEADLINE）) |  |
| 12 | 是否收藏 | [是否收藏（ISFAVORITES）](#属性-是否收藏（ISFAVORITES）) |  |
| 13 | 任务类型 | [任务类型（TASKTYPE）](#属性-任务类型（TASKTYPE）) |  |
| 14 | 产品 | [产品（PRODUCT）](#属性-产品（PRODUCT）) |  |
| 15 | 所属项目 | [所属项目（PROJECTNAME）](#属性-所属项目（PROJECTNAME）) |  |

