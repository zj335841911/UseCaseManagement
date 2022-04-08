
# 实体-系统日志(ZT_ACTION)
## 实体说明
系统日志

## 所属模块
[基础管理模块](../zentao)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [操作历史（ZT_HISTORY）](../zentao/History) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [项目（ZT_PROJECT）](../zentao/Project) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [附加值](#属性-附加值（EXTRA）) | EXTRA | 长文本，没有长度限制 | 否 | 否 | 是 |
| 2 | [对象类型](#属性-对象类型（OBJECTTYPE）) | OBJECTTYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 3 | [id](#属性-id（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 4 | [备注](#属性-备注（COMMENT）) | COMMENT | 长文本，没有长度限制 | 否 | 否 | 是 |
| 5 | [已读](#属性-已读（READ）) | READ | 单项选择(文本值) | 否 | 否 | 是 |
| 6 | [动作](#属性-动作（ACTION）) | ACTION | 单项选择(文本值) | 否 | 否 | 是 |
| 7 | [日期](#属性-日期（DATE）) | DATE | 日期时间型 | 否 | 否 | 是 |
| 8 | [产品](#属性-产品（PRODUCT）) | PRODUCT | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [对象ID](#属性-对象ID（OBJECTID）) | OBJECTID | 大整型 | 否 | 否 | 是 |
| 10 | [操作者](#属性-操作者（ACTOR）) | ACTOR | 文本，可指定长度 | 否 | 否 | 是 |
| 11 | [项目](#属性-项目（PROJECT）) | PROJECT | 外键值 | 否 | 是 | 是 |
| 12 | [备注](#属性-备注（LASTCOMMENT）) | LASTCOMMENT | HTML文本，没有长度限制 | 否 | 是 | 是 |
| 13 | [操作方式](#属性-操作方式（ACTIONMANNER）) | ACTIONMANNER | 单项选择(文本值) | 否 | 是 | 是 |
| 14 | [当前用户](#属性-当前用户（ISACTORSS）) | ISACTORSS | 大整型 | 否 | 是 | 是 |
| 15 | [显示日期](#属性-显示日期（DATE1）) | DATE1 | 文本，可指定长度 | 否 | 是 | 是 |
| 16 | [今天](#属性-今天（TODAY）) | TODAY | 文本，可指定长度 | 否 | 是 | 是 |
| 17 | [昨天](#属性-昨天（YESTERDAY）) | YESTERDAY | 文本，可指定长度 | 否 | 是 | 是 |
| 18 | [本周](#属性-本周（THISWEEK）) | THISWEEK | 文本，可指定长度 | 否 | 是 | 是 |
| 19 | [上周](#属性-上周（LASTWEEK）) | LASTWEEK | 文本，可指定长度 | 否 | 是 | 是 |
| 20 | [本月](#属性-本月（THISMONTH）) | THISMONTH | 文本，可指定长度 | 否 | 是 | 是 |
| 21 | [上月](#属性-上月（LASTMONTH）) | LASTMONTH | 文本，可指定长度 | 否 | 是 | 是 |
| 22 | [前端键值](#属性-前端键值（SRFKEY）) | SRFKEY | 大整型 | 否 | 是 | 是 |
| 23 | [消息通知用户](#属性-消息通知用户（NOTICEUSERS）) | NOTICEUSERS | 文本，可指定长度 | 否 | 是 | 是 |
| 24 | [文件](#属性-文件（FILES）) | FILES | 长文本，没有长度限制 | 否 | 是 | 是 |

### 属性-附加值（EXTRA）
#### 属性说明
细分需求、任务。任务再次分配

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
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
无

- 取值范围/公式
参照数据字典【[系统日志对象类型（Action__object_type）](../../codelist/Action__object_type)】

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-备注（COMMENT）
#### 属性说明
备注

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `%like%` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-已读（READ）
#### 属性说明
发生变更之后的确认行为

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
| 值 | 0 |

- 取值范围/公式
参照数据字典【[ZT_ACTION__READ（Action__read）](../../codelist/Action__read)】

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

### 属性-动作（ACTION）
#### 属性说明
动作

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
参照数据字典【[系统日志操作类型（Action__type）](../../codelist/Action__type)】

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

### 属性-日期（DATE）
#### 属性说明
日期

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
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-产品（PRODUCT）
#### 属性说明
产品

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-对象ID（OBJECTID）
#### 属性说明
对象ID

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-操作者（ACTOR）
#### 属性说明
操作者

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

- 数据格式
无

- 是否支持快速搜索
是

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-项目（PROJECT）
#### 属性说明
项目

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

### 属性-备注（LASTCOMMENT）
#### 属性说明
备注

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

- 数据类型
HTML文本，没有长度限制

- Java类型
String

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
```SQL
t1.`comment`
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

### 属性-操作方式（ACTIONMANNER）
#### 属性说明
操作方式

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
参照数据字典【[系统日志操作方式（ActionManner）](../../codelist/ActionManner)】

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

### 属性-当前用户（ISACTORSS）
#### 属性说明
当前用户

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

### 属性-显示日期（DATE1）
#### 属性说明
显示日期

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
DATE_FORMAT(t1.date,'%m月%d日 %H:%i')
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

### 属性-今天（TODAY）
#### 属性说明
今天

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
(case when DATE_FORMAT(t1.date,'%Y-%m-%d') = DATE_FORMAT(now(),'%Y-%m-%d') then '1' end)
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-昨天（YESTERDAY）
#### 属性说明
昨天

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
(case when DATE_FORMAT(t1.date,'%Y-%m-%d') = DATE_FORMAT(DATE_ADD(now(),INTERVAL -1 DAY),'%Y-%m-%d') then '1' end)
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-本周（THISWEEK）
#### 属性说明
本周

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
(case when YEARWEEK(now()) = YEARWEEK(t1.date) then '1' end)
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-上周（LASTWEEK）
#### 属性说明
上周

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
(case when YEARWEEK(DATE_ADD(now(),INTERVAL -1 WEEK)) = YEARWEEK(t1.date) then '1' end)
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-本月（THISMONTH）
#### 属性说明
本月

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
(case when DATE_FORMAT(t1.date,'%Y-%m') = DATE_FORMAT(now(),'%Y-%m') then '1' end)
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-上月（LASTMONTH）
#### 属性说明
上月

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
(case when DATE_FORMAT(t1.date,'%Y-%m') = DATE_FORMAT(DATE_ADD(now(),INTERVAL -1 MONTH),'%Y-%m') then '1' end)
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-前端键值（SRFKEY）
#### 属性说明
前端键值

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
```SQL
t1.id
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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文件（FILES）
#### 属性说明
文件

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
| 7 | [添加备注](#实体行为-添加备注（Comment）) | Comment | 实体处理逻辑 | 后台 |
| 8 | [编辑备注信息](#实体行为-编辑备注信息（EditComment）) | editComment | 用户自定义 | 后台及前台 |
| 9 | [Pms企业专用](#实体行为-Pms企业专用（ManagePmsEe）) | ManagePmsEe | 用户自定义 | 后台 |
| 10 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |

### 实体行为-Create（Create）
#### 说明
Create

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [Comment<br>（Comment）](#逻辑处理-Comment（Comment）) | 执行之前 | 是 |  |
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
### 实体行为-添加备注（Comment）
#### 说明
添加备注

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-编辑备注信息（EditComment）
#### 说明
编辑备注信息

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-Pms企业专用（ManagePmsEe）
#### 说明
Pms企业专用

- 行为类型
用户自定义

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
| 1 | [Comment](#逻辑处理-Comment（Comment）) | Comment | 后台 |

### 逻辑处理-Comment（Comment）
#### 说明
Comment

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 设置默认参数 | Prepareparam1 | 准备参数 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [操作者（ACTOR）](#属性-操作者（ACTOR）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [对象类型（OBJECTTYPE）](#属性-对象类型（OBJECTTYPE）) | `=` |
| 2 | [备注（COMMENT）](#属性-备注（COMMENT）) | `%like%` |
| 3 | [已读（READ）](#属性-已读（READ）) | `=` |
| 4 | [动作（ACTION）](#属性-动作（ACTION）) | `=` |
| 5 | [对象ID（OBJECTID）](#属性-对象ID（OBJECTID）) | `=` |
| 6 | [项目（PROJECT）](#属性-项目（PROJECT）) | `=` |
| 7 | [操作方式（ACTIONMANNER）](#属性-操作方式（ACTIONMANNER）) | `=` |
| 8 | [今天（TODAY）](#属性-今天（TODAY）) | `=` |
| 9 | [昨天（YESTERDAY）](#属性-昨天（YESTERDAY）) | `=` |
| 10 | [本周（THISWEEK）](#属性-本周（THISWEEK）) | `=` |
| 11 | [上周（LASTWEEK）](#属性-上周（LASTWEEK）) | `=` |
| 12 | [本月（THISMONTH）](#属性-本月（THISMONTH）) | `=` |
| 13 | [上月（LASTMONTH）](#属性-上月（LASTMONTH）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 2 | [动态(根据类型过滤)](#数据查询-动态(根据类型过滤)（MobType）) | MobType | 否 |
| 3 | [项目动态(我的)](#数据查询-项目动态(我的)（MyTrends）) | MyTrends | 否 |
| 4 | [产品动态(产品相关所有)](#数据查询-产品动态(产品相关所有)（ProductTrends）) | ProductTrends | 否 |
| 5 | [项目动态(项目相关所有)](#数据查询-项目动态(项目相关所有)（ProjectTrends）) | ProjectTrends | 否 |
| 6 | [查询用户使用年](#数据查询-查询用户使用年（QueryUserYEAR）) | QueryUserYEAR | 否 |
| 7 | [动态(根据类型过滤)](#数据查询-动态(根据类型过滤)（Type）) | Type | 否 |
| 8 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
t1.`ACTION`,
(case when t1.objectType in ('bug','story','release') and t1.action in ('changestatus','resolved','closed', 'reviewed') and t1.extra <> '' then CONCAT_WS('_',t1.objectType,t1.action,t1.extra) else '' end) AS `ACTIONMANNER`,
t1.ACTOR AS `ACTOR`,
t1.`COMMENT`,
t1.`DATE`,
DATE_FORMAT(t1.date,'%m月%d日 %H:%i') as `date1`,
t1.`ID`,
t1.id as srfkey,
0 AS `ISACTORSS`,
t1.`comment` AS `LASTCOMMENT`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`PRODUCT`,
t1.`PROJECT`,
t1.`READ`
FROM `zt_action` t1
```
### 数据查询-动态(根据类型过滤)（MobType）
#### 说明
动态(根据类型过滤)

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ACTION`, t1.`actor` as actor, t1.`DATE`, t1.`ID`, t1.`OBJECTID`, t1.id as srfkey,(case when t1.`OBJECTTYPE` in ('daily','weekly','monthly') then CONCAT_WS('','ibz',t1.objectType) else t1.objectType end ) as OBJECTTYPE, t1.`PRODUCT`, t1.`PROJECT`, t1.`READ`, t1.`comment`, t1.extra, case when t1.objectType in ('bug','story','release') and t1.action in ('changestatus','resolved','closed', 'reviewed') and t1.extra <> '' then CONCAT_WS('_',t1.objectType,t1.action,t1.extra) else '' end as ActionManner FROM `zt_action` t1  WHERE ( t1.`OBJECTID` = ${srfdatacontext('srfparentkey','{"defname":"OBJECTID","dename":"ZT_ACTION"}')} AND t1.`OBJECTTYPE` = ${srfdatacontext('objecttype','{"defname":"OBJECTTYPE","dename":"ZT_ACTION"}')} )
```
### 数据查询-项目动态(我的)（MyTrends）
#### 说明
项目动态(我的)

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.* 
FROM
	(
SELECT
	t1.`ACTION`,
	t1.actor AS actor,
	t1.`DATE`,
	t1.`ID`,
	t1.`OBJECTID`,
	t1.`OBJECTTYPE`,
	t1.`PRODUCT`,
	t1.`PROJECT`,
	t1.`READ`,
	t1.extra,
CASE
	
	WHEN t1.objectType IN ( 'bug', 'story', 'release' ) 
	AND t1.action IN ( 'changestatus', 'resolved', 'closed', 'reviewed' ) 
	AND t1.extra <> '' THEN
		CONCAT_WS( '_', t1.objectType, t1.action, t1.extra ) ELSE '' 
	END AS ActionManner,
	( CASE WHEN DATE_FORMAT( t1.date, '%Y-%m-%d' ) = DATE_FORMAT( now( ), '%Y-%m-%d' ) THEN '1' END ) AS Today,
	t1.id AS srfkey,
	(
	CASE
			
			WHEN DATE_FORMAT( t1.date, '%Y-%m-%d' ) = DATE_FORMAT( DATE_ADD( now( ), INTERVAL - 1 DAY ), '%Y-%m-%d' ) THEN
			'1' 
		END 
		) AS yesterday,
		( CASE WHEN YEARWEEK( now( ) ) = YEARWEEK( t1.date ) THEN '1' END ) AS thisweek,
		(
		CASE
				
				WHEN YEARWEEK( DATE_ADD( now( ), INTERVAL - 1 WEEK ) ) = YEARWEEK( t1.date ) THEN
				'1' 
			END 
			) AS lastweek,
			( CASE WHEN DATE_FORMAT( t1.date, '%Y-%m' ) = DATE_FORMAT( now( ), '%Y-%m' ) THEN '1' END ) AS thismonth,
			(
			CASE
					
					WHEN DATE_FORMAT( t1.date, '%Y-%m' ) = DATE_FORMAT( DATE_ADD( now( ), INTERVAL - 1 MONTH ), '%Y-%m' ) THEN
					'1' 
				END 
				) AS lastmonth 
			FROM
				`zt_action` t1
) t1
```
### 数据查询-产品动态(产品相关所有)（ProductTrends）
#### 说明
产品动态(产品相关所有)

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.* from (SELECT
t1.`ACTION`,
t1.actor as actor,
t1.`DATE`,
t1.`ID`,
t1.id as srfkey,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`PRODUCT`,
t1.`PROJECT`,
t1.`READ`,
t1.extra,
case when t1.objectType in ('bug','story','release') and t1.action in ('changestatus','resolved','closed', 'reviewed') and t1.extra <> '' then CONCAT_WS('_',t1.objectType,t1.action,t1.extra) else '' end as ActionManner,
(case when DATE_FORMAT(t1.date,'%Y-%m-%d') = DATE_FORMAT(now(),'%Y-%m-%d') then '1' end) as Today,
(case when DATE_FORMAT(t1.date,'%Y-%m-%d') = DATE_FORMAT(DATE_ADD(now(),INTERVAL -1 DAY),'%Y-%m-%d') then '1' end) as yesterday,
(case when YEARWEEK(now()) = YEARWEEK(t1.date) then '1' end) as thisweek,
(case when YEARWEEK(DATE_ADD(now(),INTERVAL -1 WEEK)) = YEARWEEK(t1.date) then '1' end) as lastweek,
(case when DATE_FORMAT(t1.date,'%Y-%m') = DATE_FORMAT(now(),'%Y-%m') then '1' end) as thismonth,
(case when DATE_FORMAT(t1.date,'%Y-%m') = DATE_FORMAT(DATE_ADD(now(),INTERVAL -1 MONTH),'%Y-%m') then '1' end) as lastmonth
FROM `zt_action` t1 
) t1

```
### 数据查询-项目动态(项目相关所有)（ProjectTrends）
#### 说明
项目动态(项目相关所有)

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.* 
FROM
	(
SELECT
	t1.`ACTION`,
	t1.actor AS actor,
	t1.`DATE`,
	t1.`ID`,
	t1.`OBJECTID`,
	t1.`OBJECTTYPE`,
	t1.`PRODUCT`,
	t1.`PROJECT`,
	t1.`READ`,
	t1.extra,
CASE
	
	WHEN t1.objectType IN ( 'bug', 'story', 'release' ) 
	AND t1.action IN ( 'changestatus', 'resolved', 'closed', 'reviewed' ) 
	AND t1.extra <> '' THEN
		CONCAT_WS( '_', t1.objectType, t1.action, t1.extra ) ELSE '' 
	END AS ActionManner,
	( CASE WHEN DATE_FORMAT( t1.date, '%Y-%m-%d' ) = DATE_FORMAT( now( ), '%Y-%m-%d' ) THEN '1' END ) AS Today,
	t1.id AS srfkey,
	(
	CASE
			
			WHEN DATE_FORMAT( t1.date, '%Y-%m-%d' ) = DATE_FORMAT( DATE_ADD( now( ), INTERVAL - 1 DAY ), '%Y-%m-%d' ) THEN
			'1' 
		END 
		) AS yesterday,
		( CASE WHEN YEARWEEK( now( ) ) = YEARWEEK( t1.date ) THEN '1' END ) AS thisweek,
		(
		CASE
				
				WHEN YEARWEEK( DATE_ADD( now( ), INTERVAL - 1 WEEK ) ) = YEARWEEK( t1.date ) THEN
				'1' 
			END 
			) AS lastweek,
			( CASE WHEN DATE_FORMAT( t1.date, '%Y-%m' ) = DATE_FORMAT( now( ), '%Y-%m' ) THEN '1' END ) AS thismonth,
			(
			CASE
					
					WHEN DATE_FORMAT( t1.date, '%Y-%m' ) = DATE_FORMAT( DATE_ADD( now( ), INTERVAL - 1 MONTH ), '%Y-%m' ) THEN
					'1' 
				END 
				) AS lastmonth 
			FROM
				`zt_action` t1
) t1
```
### 数据查询-查询用户使用年（QueryUserYEAR）
#### 说明
查询用户使用年

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select DISTINCT DATE_FORMAT(t1.date,'%Y') as date1 from zt_action t1
```
### 数据查询-动态(根据类型过滤)（Type）
#### 说明
动态(根据类型过滤)

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACTION`,
t1.`actor` as actor,
t1.`DATE`,
t1.`ID`,
t1.id as srfkey,
t1.`OBJECTID`,
(case when t1.`OBJECTTYPE` in ('daily','weekly','monthly') then CONCAT_WS('','ibz',t1.objectType) else t1.objectType end ) as OBJECTTYPE,
t1.`PRODUCT`,
t1.`PROJECT`,
t1.`READ`,
t1.`comment`,
t1.extra,
(case when t1.actor =  #{srf.sessioncontext.srfloginname} then 1 else 0 end) as ISACTORSS,
case when t1.objectType in ('bug','story','release') and t1.action in ('changestatus','resolved','closed', 'reviewed') and t1.extra <> '' then CONCAT_WS('_',t1.objectType,t1.action,t1.extra) else '' end as ActionManner
FROM `zt_action` t1 
WHERE 
( t1.`OBJECTID` = ${srfdatacontext('srfparentkey','{"defname":"OBJECTID","dename":"ZT_ACTION"}')}  AND  t1.`OBJECTTYPE` =  ${srfdatacontext('objecttype','{"defname":"OBJECTTYPE","dename":"ZT_ACTION"}')} )
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
t1.`ACTION`,
(case when t1.objectType in ('bug','story','release') and t1.action in ('changestatus','resolved','closed', 'reviewed') and t1.extra <> '' then CONCAT_WS('_',t1.objectType,t1.action,t1.extra) else '' end) AS `ACTIONMANNER`,
t1.`ACTOR`,
t1.`COMMENT`,
t1.`DATE`,
DATE_FORMAT(t1.date,'%m月%d日 %H:%i') AS `DATE1`,
t1.`EXTRA`,
t1.`ID`,
0 AS `ISACTORSS`,
t1.`comment` AS `LASTCOMMENT`,
(case when DATE_FORMAT(t1.date,'%Y-%m') = DATE_FORMAT(DATE_ADD(now(),INTERVAL -1 MONTH),'%Y-%m') then '1' end) AS `LASTMONTH`,
(case when YEARWEEK(DATE_ADD(now(),INTERVAL -1 WEEK)) = YEARWEEK(t1.date) then '1' end) AS `LASTWEEK`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`PRODUCT`,
t1.`PROJECT`,
t1.`READ`,
t1.id AS `SRFKEY`,
(case when DATE_FORMAT(t1.date,'%Y-%m') = DATE_FORMAT(now(),'%Y-%m') then '1' end) AS `THISMONTH`,
(case when YEARWEEK(now()) = YEARWEEK(t1.date) then '1' end) AS `THISWEEK`,
(case when DATE_FORMAT(t1.date,'%Y-%m-%d') = DATE_FORMAT(now(),'%Y-%m-%d') then '1' end) AS `TODAY`,
(case when DATE_FORMAT(t1.date,'%Y-%m-%d') = DATE_FORMAT(DATE_ADD(now(),INTERVAL -1 DAY),'%Y-%m-%d') then '1' end) AS `YESTERDAY`
FROM `zt_action` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 2 | [MobType](#数据集合-MobType（MobType）) | MobType | 否 |
| 3 | [项目动态(我的)](#数据集合-项目动态(我的)（MyTrends）) | MyTrends | 否 |
| 4 | [ProductTrends](#数据集合-ProductTrends（ProductTrends）) | ProductTrends | 否 |
| 5 | [项目动态(项目相关所有)](#数据集合-项目动态(项目相关所有)（ProjectTrends）) | ProjectTrends | 否 |
| 6 | [查询用户使用年](#数据集合-查询用户使用年（QueryUserYEAR）) | QueryUserYEAR | 否 |
| 7 | [Type](#数据集合-Type（Type）) | Type | 否 |

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
### 数据集合-MobType（MobType）
#### 说明
MobType

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [动态(根据类型过滤)（MobType）](#数据查询-动态(根据类型过滤)（MobType）) |
### 数据集合-项目动态(我的)（MyTrends）
#### 说明
项目动态(我的)

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目动态(我的)（MyTrends）](#数据查询-项目动态(我的)（MyTrends）) |
### 数据集合-ProductTrends（ProductTrends）
#### 说明
ProductTrends

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品动态(产品相关所有)（ProductTrends）](#数据查询-产品动态(产品相关所有)（ProductTrends）) |
### 数据集合-项目动态(项目相关所有)（ProjectTrends）
#### 说明
项目动态(项目相关所有)

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目动态(项目相关所有)（ProjectTrends）](#数据查询-项目动态(项目相关所有)（ProjectTrends）) |
### 数据集合-查询用户使用年（QueryUserYEAR）
#### 说明
查询用户使用年

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [查询用户使用年（QueryUserYEAR）](#数据查询-查询用户使用年（QueryUserYEAR）) |
### 数据集合-Type（Type）
#### 说明
Type

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [动态(根据类型过滤)（Type）](#数据查询-动态(根据类型过滤)（Type）) |

## 数据导入
无

## 数据导出
无

