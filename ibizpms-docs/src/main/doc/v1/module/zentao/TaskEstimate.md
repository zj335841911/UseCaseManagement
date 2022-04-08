
# 实体-任务预计(ZT_TASKESTIMATE)
## 实体说明
任务预计

## 所属模块
[基础管理模块](../zentao)

## 实体关系
### 1:N
无
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [任务（ZT_TASK）](../zentao/Task) | 嵌套操作 |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [用户](#属性-用户（ACCOUNT）) | ACCOUNT | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [预计剩余](#属性-预计剩余（LEFT）) | LEFT | 浮点 | 否 | 否 | 是 |
| 3 | [总计消耗](#属性-总计消耗（CONSUMED）) | CONSUMED | 浮点 | 否 | 否 | 是 |
| 4 | [编号](#属性-编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 5 | [日期](#属性-日期（DATE）) | DATE | 日期型 | 否 | 否 | 是 |
| 6 | [work](#属性-work（WORK）) | WORK | 长文本，没有长度限制 | 否 | 否 | 是 |
| 7 | [任务](#属性-任务（TASK）) | TASK | 外键值 | 否 | 是 | 是 |
| 8 | [日期](#属性-日期（DATES）) | DATES | 日期型 | 否 | 是 | 是 |
| 9 | [评估状态](#属性-评估状态（EVALUATIONSTATUS）) | EVALUATIONSTATUS | 文本，可指定长度 | 否 | 是 | 是 |
| 10 | [评估成本](#属性-评估成本（EVALUATIONCOST）) | EVALUATIONCOST | 浮点 | 否 | 是 | 是 |
| 11 | [评估工时](#属性-评估工时（EVALUATIONTIME）) | EVALUATIONTIME | 浮点 | 否 | 是 | 是 |
| 12 | [投入成本](#属性-投入成本（INPUTCOST）) | INPUTCOST | 浮点 | 否 | 是 | 是 |
| 13 | [评估说明](#属性-评估说明（EVALUATIONDESC）) | EVALUATIONDESC | 长文本，没有长度限制 | 否 | 是 | 是 |
| 14 | [任务名称](#属性-任务名称（TASKNAME）) | TASKNAME | 外键值文本 | 否 | 是 | 是 |
| 15 | [项目](#属性-项目（PROJECT）) | PROJECT | 外键值附加数据 | 否 | 是 | 是 |
| 16 | [所属项目](#属性-所属项目（PROJECTNAME）) | PROJECTNAME | 外键值附加数据 | 否 | 是 | 是 |
| 17 | [任务种别](#属性-任务种别（TASKSPECIES）) | TASKSPECIES | 外键值附加数据 | 否 | 是 | 是 |
| 18 | [任务类型](#属性-任务类型（TYPE）) | TYPE | 外键值附加数据 | 否 | 是 | 是 |
| 19 | [年](#属性-年（YEAR）) | YEAR | 文本，可指定长度 | 否 | 是 | 是 |
| 20 | [年（显示）](#属性-年（显示）（YEARNAME）) | YEARNAME | 文本，可指定长度 | 否 | 是 | 是 |
| 21 | [月](#属性-月（MONTH）) | MONTH | 文本，可指定长度 | 否 | 是 | 是 |
| 22 | [月（显示）](#属性-月（显示）（MONTHNAME）) | MONTHNAME | 文本，可指定长度 | 否 | 是 | 是 |
| 23 | [月（排序）](#属性-月（排序）（MONTHORDER）) | MONTHORDER | 整型 | 否 | 是 | 是 |

### 属性-用户（ACCOUNT）
#### 属性说明
用户

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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [任务类型（TYPE）](../zentao/Task/#属性-任务类型（TYPE）) |
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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [任务类型（TYPE）](../zentao/Task/#属性-任务类型（TYPE）) |
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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [任务类型（TYPE）](../zentao/Task/#属性-任务类型（TYPE）) |
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
| 1 | `%like%` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [任务类型（TYPE）](../zentao/Task/#属性-任务类型（TYPE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-日期（DATE）
#### 属性说明
完成日期（指任务人的，不是任务的）

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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [任务类型（TYPE）](../zentao/Task/#属性-任务类型（TYPE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-work（WORK）
#### 属性说明
暂时还不知道做什么用的，没有任何处理的代码

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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [任务类型（TYPE）](../zentao/Task/#属性-任务类型（TYPE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-任务（TASK）
#### 属性说明
任务

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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [编号（ID）](../zentao/Task/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-日期（DATES）
#### 属性说明
日期

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
t1.`date`
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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [编号（ID）](../zentao/Task/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-评估状态（EVALUATIONSTATUS）
#### 属性说明
评估状态

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
| 值 | no |

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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [编号（ID）](../zentao/Task/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [编号（ID）](../zentao/Task/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-评估工时（EVALUATIONTIME）
#### 属性说明
评估工时

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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [编号（ID）](../zentao/Task/#属性-编号（ID）) |
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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [编号（ID）](../zentao/Task/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-评估说明（EVALUATIONDESC）
#### 属性说明
评估说明

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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [编号（ID）](../zentao/Task/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-任务名称（TASKNAME）
#### 属性说明
任务名称

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

### 属性-项目（PROJECT）
#### 属性说明
项目

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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [所属项目（PROJECT）](../zentao/Task/#属性-所属项目（PROJECT）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-所属项目（PROJECTNAME）
#### 属性说明
所属项目

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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [所属项目（PROJECTNAME）](../zentao/Task/#属性-所属项目（PROJECTNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-任务种别（TASKSPECIES）
#### 属性说明
任务种别

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
参照数据字典【[任务种别（TaskSpecies）](../../codelist/TaskSpecies)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [任务种别（TASKSPECIES）](../zentao/Task/#属性-任务种别（TASKSPECIES）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-任务类型（TYPE）
#### 属性说明
任务类型

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
参照数据字典【[任务类型（Task__type）](../../codelist/Task__type)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [任务类型（TYPE）](../zentao/Task/#属性-任务类型（TYPE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [任务类型（TYPE）](../zentao/Task/#属性-任务类型（TYPE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-年（显示）（YEARNAME）
#### 属性说明
年（显示）

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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [任务类型（TYPE）](../zentao/Task/#属性-任务类型（TYPE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [任务类型（TYPE）](../zentao/Task/#属性-任务类型（TYPE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-月（显示）（MONTHNAME）
#### 属性说明
月（显示）

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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [任务类型（TYPE）](../zentao/Task/#属性-任务类型（TYPE）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-月（排序）（MONTHORDER）
#### 属性说明
月（排序）

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
| 关系实体 | [任务（ZT_TASK）](../zentao/Task) |
| 关系属性 | [任务类型（TYPE）](../zentao/Task/#属性-任务类型（TYPE）) |
| 关系类型 | 关系实体 1:N 当前实体 |


## 业务状态
无

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
| 16 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 17 | [项目经理评估](#实体行为-项目经理评估（PMEvaluation）) | PMEvaluation | 用户自定义 | 后台及前台 |
| 18 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |

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
无
### 实体行为-UpdateTemp（UpdateTemp）
#### 说明
UpdateTemp

- 行为类型
内置方法

- 行为持有者
前台

#### 逻辑附加
无
### 实体行为-UpdateTempMajor（UpdateTempMajor）
#### 说明
UpdateTempMajor

- 行为类型
内置方法

- 行为持有者
前台

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
### 实体行为-RemoveTemp（RemoveTemp）
#### 说明
RemoveTemp

- 行为类型
内置方法

- 行为持有者
前台

#### 逻辑附加
无
### 实体行为-RemoveTempMajor（RemoveTempMajor）
#### 说明
RemoveTempMajor

- 行为类型
内置方法

- 行为持有者
前台

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
无
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
### 实体行为-CheckKey（CheckKey）
#### 说明
CheckKey

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-项目经理评估（PMEvaluation）
#### 说明
项目经理评估

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
无

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [编号（ID）](#属性-编号（ID）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [编号（ID）](#属性-编号（ID）) | `%like%` |
| 2 | [任务（TASK）](#属性-任务（TASK）) | `=` |
| 3 | [任务名称（TASKNAME）](#属性-任务名称（TASKNAME）) | `=` |
| 4 | [任务名称（TASKNAME）](#属性-任务名称（TASKNAME）) | `%like%` |
| 5 | [项目（PROJECT）](#属性-项目（PROJECT）) | `=` |
| 6 | [年（YEAR）](#属性-年（YEAR）) | `=` |
| 7 | [月（MONTH）](#属性-月（MONTH）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [日志月](#数据查询-日志月（ActionMonth）) | ActionMonth | 否 |
| 2 | [日志年](#数据查询-日志年（ActionYear）) | ActionYear | 否 |
| 3 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 4 | [DEFAULT1](#数据查询-DEFAULT1（Defaults）) | Defaults | 否 |
| 5 | [日志月（项目）](#数据查询-日志月（项目）（ProjectActionMonth）) | ProjectActionMonth | 否 |
| 6 | [日志年（项目）](#数据查询-日志年（项目）（ProjectActionYear）) | ProjectActionYear | 否 |
| 7 | [项目日志](#数据查询-项目日志（ProjectTaskEstimate）) | ProjectTaskEstimate | 否 |
| 8 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-日志月（ActionMonth）
#### 说明
日志月

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.`YEAR`,
	concat( t1.`YEAR`, RIGHT ( 100+ t1.`MONTH`, 2 ) ) AS `MONTH`,
	t1.`MONTH` as monthorder,
	concat( t1.`MONTH`, '月' ) AS monthname 
FROM
	(
SELECT DISTINCT YEAR
	( t1.date ) AS `year`,
	MONTH ( t1.date ) AS `MONTH` 
FROM
	zt_taskestimate t1 
WHERE
	t1.date <> '0000-00-00' 
	) t1
```
### 数据查询-日志年（ActionYear）
#### 说明
日志年

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.`YEAR`,concat(t1.`year`, '年') as yearname from (select DISTINCT year( t1.date ) AS `year` from zt_taskestimate t1 where t1.date <> '0000-00-00' ) t1
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
t1.`ACCOUNT`,
t1.`CONSUMED`,
t1.`DATE`,
t1.`date` AS `DATES`,
t1.`EVALUATIONCOST`,
t1.`EVALUATIONSTATUS`,
t1.`EVALUATIONTIME`,
t1.`ID`,
t1.`INPUTCOST`,
t1.`LEFT`,
t1.`MONTHNAME`,
t11.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`TASK`,
t11.`NAME` AS `TASKNAME`,
t11.`TASKSPECIES`,
t11.`TYPE`
FROM `zt_taskestimate` t1 
LEFT JOIN `zt_task` t11 ON t1.`TASK` = t11.`ID` 
LEFT JOIN `zt_project` t21 ON t11.`PROJECT` = t21.`ID` 

```
### 数据查询-DEFAULT1（Defaults）
#### 说明
DEFAULT1

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACCOUNT`,
t1.`CONSUMED`,
t1.`DATE`,
t1.`date` AS `DATES`,
t1.`EVALUATIONCOST`,
t1.`EVALUATIONSTATUS`,
t1.`EVALUATIONTIME`,
t1.`ID`,
t1.`INPUTCOST`,
t1.`LEFT`,
t1.`MONTHNAME`,
t11.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`TASK`,
t11.`NAME` AS `TASKNAME`,
t11.`TASKSPECIES`,
t11.`TYPE`
FROM `zt_taskestimate` t1 
LEFT JOIN `zt_task` t11 ON t1.`TASK` = t11.`ID` 
LEFT JOIN `zt_project` t21 ON t11.`PROJECT` = t21.`ID` 

```
### 数据查询-日志月（项目）（ProjectActionMonth）
#### 说明
日志月（项目）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.`YEAR`,
	concat( t1.`YEAR`, RIGHT ( 100+ t1.`MONTH`, 2 ) ) AS `MONTH`,
	t1.`MONTH` as monthorder,
	concat( t1.`MONTH`, '月' ) AS monthname ,
	t1.project
FROM
	(
SELECT DISTINCT YEAR
	( t1.date ) AS `year`,
	MONTH ( t1.date ) AS `MONTH` ,
	t.project
FROM
	zt_taskestimate t1 left join zt_task t on t.id = t1.task
WHERE
	t1.date <> '0000-00-00' 
	) t1
```
### 数据查询-日志年（项目）（ProjectActionYear）
#### 说明
日志年（项目）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.`YEAR`,
	concat( t1.`year`, '年' ) AS yearname ,
	t1.project
FROM
	( SELECT DISTINCT YEAR ( t1.date ) AS `year`,t.project FROM zt_taskestimate t1 left join zt_task t on t.id = t1.task WHERE t1.date <> '0000-00-00'  ) t1
```
### 数据查询-项目日志（ProjectTaskEstimate）
#### 说明
项目日志

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACCOUNT`,
t1.`CONSUMED`,
t1.`DATE`,
t1.`date` AS `DATES`,
t1.`EVALUATIONCOST`,
t1.`EVALUATIONSTATUS`,
t1.`EVALUATIONTIME`,
t1.`ID`,
t1.`INPUTCOST`,
t1.`LEFT`,
t1.`MONTHNAME`,
t11.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`TASK`,
t11.`NAME` AS `TASKNAME`,
t11.`TASKSPECIES`,
t11.`TYPE`
FROM `zt_taskestimate` t1 
LEFT JOIN `zt_task` t11 ON t1.`TASK` = t11.`ID` 
LEFT JOIN `zt_project` t21 ON t11.`PROJECT` = t21.`ID` 

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
t1.`ACCOUNT`,
t1.`CONSUMED`,
t1.`DATE`,
t1.`date` AS `DATES`,
t1.`EVALUATIONCOST`,
t1.`EVALUATIONDESC`,
t1.`EVALUATIONSTATUS`,
t1.`EVALUATIONTIME`,
t1.`ID`,
t1.`INPUTCOST`,
t1.`LEFT`,
t1.`MONTHNAME`,
t11.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`TASK`,
t11.`NAME` AS `TASKNAME`,
t11.`TASKSPECIES`,
t11.`TYPE`,
t1.`WORK`
FROM `zt_taskestimate` t1 
LEFT JOIN `zt_task` t11 ON t1.`TASK` = t11.`ID` 
LEFT JOIN `zt_project` t21 ON t11.`PROJECT` = t21.`ID` 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [日志月](#数据集合-日志月（ActionMonth）) | ActionMonth | 否 |
| 2 | [日志年](#数据集合-日志年（ActionYear）) | ActionYear | 否 |
| 3 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 4 | [DEFAULT1](#数据集合-DEFAULT1（Defaults）) | Defaults | 否 |
| 5 | [日志月（项目）](#数据集合-日志月（项目）（ProjectActionMonth）) | ProjectActionMonth | 否 |
| 6 | [日志年（项目）](#数据集合-日志年（项目）（ProjectActionYear）) | ProjectActionYear | 否 |
| 7 | [项目日志](#数据集合-项目日志（ProjectTaskEstimate）) | ProjectTaskEstimate | 否 |

### 数据集合-日志月（ActionMonth）
#### 说明
日志月

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [日志月（ActionMonth）](#数据查询-日志月（ActionMonth）) |
### 数据集合-日志年（ActionYear）
#### 说明
日志年

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [日志年（ActionYear）](#数据查询-日志年（ActionYear）) |
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
### 数据集合-DEFAULT1（Defaults）
#### 说明
DEFAULT1

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [DEFAULT1（Defaults）](#数据查询-DEFAULT1（Defaults）) |
### 数据集合-日志月（项目）（ProjectActionMonth）
#### 说明
日志月（项目）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [日志月（项目）（ProjectActionMonth）](#数据查询-日志月（项目）（ProjectActionMonth）) |
### 数据集合-日志年（项目）（ProjectActionYear）
#### 说明
日志年（项目）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [日志年（项目）（ProjectActionYear）](#数据查询-日志年（项目）（ProjectActionYear）) |
### 数据集合-项目日志（ProjectTaskEstimate）
#### 说明
项目日志

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目日志（ProjectTaskEstimate）](#数据查询-项目日志（ProjectTaskEstimate）) |

## 数据导入
无

## 数据导出
无

