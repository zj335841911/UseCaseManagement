
# 实体-汇报汇总(IBZ_REPORT)
## 实体说明
汇报汇总

## 所属模块
[汇报模块](../report)

## 实体关系
### 1:N
无
### N:1
无


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | 日期时间型 | 否 | 否 | 否 |
| 2 | [工作](#属性-工作（WORKTODAY）) | WORKTODAY | HTML文本，没有长度限制 | 否 | 否 | 是 |
| 3 | [完成任务](#属性-完成任务（TODAYTASK）) | TODAYTASK | 多项选择(文本值) | 否 | 否 | 是 |
| 4 | [计划任务](#属性-计划任务（TOMORROWPLANSTASK）) | TOMORROWPLANSTASK | 多项选择(文本值) | 否 | 否 | 是 |
| 5 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 6 | [汇报给](#属性-汇报给（REPORTTO）) | REPORTTO | 单项选择(文本值) | 否 | 否 | 是 |
| 7 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | 日期时间型 | 否 | 否 | 否 |
| 8 | [日期](#属性-日期（DATE）) | DATE | 日期型 | 否 | 否 | 是 |
| 9 | [是否提交](#属性-是否提交（ISSUBMIT）) | ISSUBMIT | 单项选择(文本值) | 否 | 否 | 是 |
| 10 | [更新人名称](#属性-更新人名称（UPDATEMANNAME）) | UPDATEMANNAME | 文本，可指定长度 | 否 | 否 | 否 |
| 11 | [附件](#属性-附件（FILES）) | FILES | 文本，可指定长度 | 否 | 否 | 是 |
| 12 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 13 | [状态](#属性-状态（REPORTSTATUS）) | REPORTSTATUS | 单项选择(文本值) | 否 | 否 | 是 |
| 14 | [其他事项](#属性-其他事项（COMMENT）) | COMMENT | HTML文本，没有长度限制 | 否 | 否 | 是 |
| 15 | [抄送给](#属性-抄送给（MAILTO）) | MAILTO | 多项选择(文本值) | 否 | 否 | 是 |
| 16 | [汇报标识](#属性-汇报标识（IBZ_DAILYID）) | IBZ_DAILYID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 17 | [计划](#属性-计划（PLANSTOMORROW）) | PLANSTOMORROW | HTML文本，没有长度限制 | 否 | 否 | 是 |
| 18 | [用户](#属性-用户（ACCOUNT）) | ACCOUNT | 单项选择(文本值) | 否 | 否 | 是 |
| 19 | [建立人名称](#属性-建立人名称（CREATEMANNAME）) | CREATEMANNAME | 文本，可指定长度 | 否 | 否 | 否 |
| 20 | [汇报名称](#属性-汇报名称（IBZ_DAILYNAME）) | IBZ_DAILYNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 21 | [类型](#属性-类型（TYPE）) | TYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 22 | [未读日报数](#属性-未读日报数（DAILYCNT）) | DAILYCNT | 整型 | 否 | 否 | 是 |
| 23 | [未读月报数](#属性-未读月报数（MONTHLYCNT）) | MONTHLYCNT | 整型 | 否 | 否 | 是 |
| 24 | [提交时间](#属性-提交时间（SUBMITTIME）) | SUBMITTIME | 文本，可指定长度 | 否 | 否 | 是 |
| 25 | [未读汇报数](#属性-未读汇报数（REPORTLYCNT）) | REPORTLYCNT | 整型 | 否 | 否 | 是 |

### 属性-更新时间（UPDATEDATE）
#### 属性说明
更新时间

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
日期时间型

- Java类型
Timestamp

- 是否允许为空
否

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
无

### 属性-工作（WORKTODAY）
#### 属性说明
工作

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

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
无

### 属性-完成任务（TODAYTASK）
#### 属性说明
完成任务

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
参照数据字典【[所有任务（AllTask）](../../codelist/AllTask)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-计划任务（TOMORROWPLANSTASK）
#### 属性说明
计划任务

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
参照数据字典【[所有任务（AllTask）](../../codelist/AllTask)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-建立人（CREATEMAN）
#### 属性说明
建立人

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
参照数据字典【[云系统操作者（SysOperator）](../../codelist/SysOperator)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-汇报给（REPORTTO）
#### 属性说明
汇报给

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
无

### 属性-建立时间（CREATEDATE）
#### 属性说明
建立时间

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
日期时间型

- Java类型
Timestamp

- 是否允许为空
否

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
无

#### 关系属性
无

### 属性-是否提交（ISSUBMIT）
#### 属性说明
是否提交

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
参照数据字典【[是否（YesNo）](../../codelist/YesNo)】

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

### 属性-更新人名称（UPDATEMANNAME）
#### 属性说明
更新人名称

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
否

- 搜索条件
无

#### 关系属性
无

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
无

### 属性-更新人（UPDATEMAN）
#### 属性说明
更新人

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
参照数据字典【[云系统操作者（SysOperator）](../../codelist/SysOperator)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-状态（REPORTSTATUS）
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
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 0 |

- 取值范围/公式
参照数据字典【[汇报状态（ReportStatus）](../../codelist/ReportStatus)】

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

### 属性-其他事项（COMMENT）
#### 属性说明
其他事项

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

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
无

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
无

### 属性-汇报标识（IBZ_DAILYID）
#### 属性说明
汇报标识

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

### 属性-计划（PLANSTOMORROW）
#### 属性说明
计划

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

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
无

### 属性-用户（ACCOUNT）
#### 属性说明
用户

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
无

### 属性-建立人名称（CREATEMANNAME）
#### 属性说明
建立人名称

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
否

- 搜索条件
无

#### 关系属性
无

### 属性-汇报名称（IBZ_DAILYNAME）
#### 属性说明
汇报名称

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
无

### 属性-类型（TYPE）
#### 属性说明
类型

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
参照数据字典【[汇报类型（ReportType）](../../codelist/ReportType)】

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

### 属性-未读日报数（DAILYCNT）
#### 属性说明
未读日报数

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

### 属性-未读月报数（MONTHLYCNT）
#### 属性说明
未读月报数

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

### 属性-提交时间（SUBMITTIME）
#### 属性说明
提交时间

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

### 属性-未读汇报数（REPORTLYCNT）
#### 属性说明
未读汇报数

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
| 序号 | 状态名称 | [类型](#属性-类型（TYPE）)<br>（TYPE） | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [日报](#业务状态-日报（daily）) | daily |  |  | 否 |
| 2 | [月报](#业务状态-月报（monthly）) | monthly |  |  | 否 |
| 3 | [汇报](#业务状态-汇报（reportly）) | reportly |  |  | 否 |
| 4 | [周报](#业务状态-周报（weekly）) | weekly |  |  | 否 |
### 业务状态-日报（daily）
#### 状态说明
日报

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [类型](#属性-类型（TYPE）)<br>（TYPE） | daily |



- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [周报](#操作权限-周报（WEEKLY）)<br>（WEEKLY） |
| 2 | [汇报](#操作权限-汇报（REPORTLY）)<br>（REPORTLY） |
| 3 | [月报](#操作权限-月报（MONTHLY）)<br>（MONTHLY） |
### 业务状态-月报（monthly）
#### 状态说明
月报

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [类型](#属性-类型（TYPE）)<br>（TYPE） | monthly |



- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [汇报](#操作权限-汇报（REPORTLY）)<br>（REPORTLY） |
| 2 | [日报](#操作权限-日报（DAILY）)<br>（DAILY） |
| 3 | [周报](#操作权限-周报（WEEKLY）)<br>（WEEKLY） |
### 业务状态-汇报（reportly）
#### 状态说明
汇报

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [类型](#属性-类型（TYPE）)<br>（TYPE） | reportly |



- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [月报](#操作权限-月报（MONTHLY）)<br>（MONTHLY） |
| 2 | [周报](#操作权限-周报（WEEKLY）)<br>（WEEKLY） |
| 3 | [日报](#操作权限-日报（DAILY）)<br>（DAILY） |
### 业务状态-周报（weekly）
#### 状态说明
周报

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [类型](#属性-类型（TYPE）)<br>（TYPE） | weekly |



- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [日报](#操作权限-日报（DAILY）)<br>（DAILY） |
| 2 | [汇报](#操作权限-汇报（REPORTLY）)<br>（REPORTLY） |
| 3 | [月报](#操作权限-月报（MONTHLY）)<br>（MONTHLY） |

## 实体行为
| 序号 | 行为 | 行为名 | 行为类型 | 行为持有者 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [Create](#实体行为-Create（Create）) | Create | 内置方法 | 后台及前台 |
| 2 | [Update](#实体行为-Update（Update）) | Update | 内置方法 | 后台及前台 |
| 3 | [Remove](#实体行为-Remove（Remove）) | Remove | 内置方法 | 后台及前台 |
| 4 | [Get](#实体行为-Get（Get）) | Get | 内置方法 | 后台及前台 |
| 5 | [GetDraft](#实体行为-GetDraft（GetDraft）) | GetDraft | 内置方法 | 后台及前台 |
| 6 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 7 | [我未提交的（计数器）](#实体行为-我未提交的（计数器）（MyReportINotSubmit）) | MyReportINotSubmit | 实体处理逻辑 | 后台 |
| 8 | [我收到的汇报（计数器）](#实体行为-我收到的汇报（计数器）（ReportIReceived）) | ReportIReceived | 实体处理逻辑 | 后台 |
| 9 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |

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
### 实体行为-我未提交的（计数器）（MyReportINotSubmit）
#### 说明
我未提交的（计数器）

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-我收到的汇报（计数器）（ReportIReceived）
#### 说明
我收到的汇报（计数器）

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
| 1 | [我未提交的（计数器）](#逻辑处理-我未提交的（计数器）（MyReportINotSubmit）) | MyReportINotSubmit | 后台 |
| 2 | [我收到的汇报（计数器）](#逻辑处理-我收到的汇报（计数器）（ReportIReceived）) | ReportIReceived | 后台 |

### 逻辑处理-我未提交的（计数器）（MyReportINotSubmit）
#### 说明
我未提交的（计数器）

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 统计我未提交的汇报数 | Rawsqlcall4 | 直接SQL调用 |
| 2 | 统计我收到的（未读） | MyUnReadCnt | 直接SQL调用 |
| 3 | 统计我未提交的月报 | Rawsqlcall3 | 直接SQL调用 |
| 4 | 统计我未提交的日报数 | Rawsqlcall1 | 直接SQL调用 |
| 5 | 统计我未提交的周报 | Rawsqlcall2 | 直接SQL调用 |
| 6 | 开始 | Begin | 开始 |
### 逻辑处理-我收到的汇报（计数器）（ReportIReceived）
#### 说明
我收到的汇报（计数器）

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 获取未读周报 | Rawsqlcall3 | 直接SQL调用 |
| 2 | 统计我收到的日报数 | Rawsqlcall1 | 直接SQL调用 |
| 3 | 统计我收到的月报数（未读） | Rawsqlcall2 | 直接SQL调用 |
| 4 | 开始 | Begin | 开始 |
| 5 | 统计我收到的汇报数（未读） | Rawsqlcall4 | 直接SQL调用 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [汇报名称（IBZ_DAILYNAME）](#属性-汇报名称（IBZ_DAILYNAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [汇报给（REPORTTO）](#属性-汇报给（REPORTTO）) | `=` |
| 2 | [是否提交（ISSUBMIT）](#属性-是否提交（ISSUBMIT）) | `=` |
| 3 | [状态（REPORTSTATUS）](#属性-状态（REPORTSTATUS）) | `=` |
| 4 | [用户（ACCOUNT）](#属性-用户（ACCOUNT）) | `=` |
| 5 | [汇报名称（IBZ_DAILYNAME）](#属性-汇报名称（IBZ_DAILYNAME）) | `%like%` |
| 6 | [类型（TYPE）](#属性-类型（TYPE）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [汇报汇总](#数据查询-汇报汇总（AllReport）) | AllReport | 否 |
| 2 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 3 | [汇报汇总（我收到的）](#数据查询-汇报汇总（我收到的）（MyReAllReport）) | MyReAllReport | 否 |
| 4 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-汇报汇总（AllReport）
#### 说明
汇报汇总

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.* from (SELECT
t1.`ACCOUNT`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`CREATEMANNAME`,
DATE_FORMAT(t1.DATE,'%Y-%m-%d') as `DATE`,
t1.`IBZ_DAILYID`,
t1.`IBZ_DAILYNAME`,
t1.`ISSUBMIT`,
t1.`MAILTO`,
'1' as `REPORTSTATUS`,
t1.`REPORTTO`,
DATE_FORMAT(t1.SUBMITTIME,'%H:%i') as `SUBMITTIME`,
t1.`TODAYTASK`,
t1.`TOMORROWPLANSTASK`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEMANNAME`,
CONCAT_WS('','今日工作：',case when t1.WORKTODAY is null then '无' else t1.WORKTODAY end) as WORKTODAY,
t1.`COMMENT`,
CONCAT_WS('','明日计划：',case when t1.PLANSTOMORROW is null then '无' else t1.PLANSTOMORROW end) AS PLANSTOMORROW,
'daily' as type 
FROM `T_IBZ_DAILY` t1 
where t1.ISSUBMIT = '1'
UNION
SELECT
t1.`ACCOUNT`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`CREATEMANNAME`,
DATE_FORMAT(t1.DATE,'%Y-%m-%d') as `DATE`,
t1.`IBZ_WEEKLYID` as IBZ_DAILYID,
t1.`IBZ_WEEKLYNAME` as IBZ_DAILYNAME,
t1.`ISSUBMIT`,
t1.`MAILTO`,
'1' as `REPORTSTATUS`,
t1.`REPORTTO`,
DATE_FORMAT(t1.SUBMITTIME,'%H:%i') as `SUBMITTIME`,
t1.`THISWEEKTASK` as TODAYTASK,
t1.`NEXTWEEKTASK` as TOMORROWPLANSTASK,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEMANNAME`,
CONCAT_WS('','本周工作：',case when t1.WORKTHISWEEK is null then '无' else t1.WORKTHISWEEK end)  as WORKTODAY,
t1.`COMMENT`,
CONCAT_WS('','下周计划：',case when t1.PLANNEXTWEEK is null then '无' else t1.PLANNEXTWEEK end) as PLANSTOMORROW,
'weekly' as type 
FROM `T_IBZ_WEEKLY` t1 
where t1.ISSUBMIT = '1'
UNION
SELECT
t1.`ACCOUNT`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`CREATEMANNAME`,
DATE_FORMAT(t1.DATE,'%Y-%m-%d') as `DATE`,
t1.`IBZ_MONTHLYID` AS IBZ_DAILYID,
t1.`IBZ_MONTHLYNAME` AS IBZ_DAILYNAME,
t1.`ISSUBMIT`,
t1.`MAILTO`,
'1' as `REPORTSTATUS`,
t1.`REPORTTO`,
DATE_FORMAT(t1.SUBMITTIME,'%H:%i') as `SUBMITTIME`,
t1.`THISMONTHTASK` AS TODAYTASK,
t1.`NEXTMONTHPLANSTASK` AS TOMORROWPLANSTASK,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEMANNAME`,
CONCAT_WS('','本月工作：',case when t1.WORKTHISMONTH is null then '无' else t1.WORKTHISMONTH end)  as WORKTODAY,
t1.`COMMENT`,
CONCAT_WS('','下月计划：',case when t1.PLANSNEXTMONTH is null then '无' else t1.PLANSNEXTMONTH end) as PLANSTOMORROW,
'monthly' as type 
FROM `T_IBZ_MONTHLY` t1
where t1.ISSUBMIT = '1'
UNION
SELECT
t1.`ACCOUNT`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
null as `CREATEMANNAME`,
DATE_FORMAT(t1.DATE,'%Y-%m-%d') as `DATE`,
t1.`IBZ_REPORTLYID` AS IBZ_DAILYID,
t1.`IBZ_REPORTLYNAME` AS IBZ_DAILYNAME,
t1.`ISSUBMIT`,
t1.`MAILTO`,
'1' as `REPORTSTATUS`,
t1.`REPORTTO`,
DATE_FORMAT(t1.SUBMITTIME,'%H:%i') as `SUBMITTIME`,
null AS TODAYTASK,
null AS TOMORROWPLANSTASK,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
null as `UPDATEMANNAME`,
CONCAT_WS('','工作内容：',case when t1.CONTENT is null then '无' else t1.CONTENT end)  as WORKTODAY,
null as `COMMENT`,
null as PLANSTOMORROW,
'reportly' as type 
FROM `T_IBZ_REPORTLY` t1
where t1.ISSUBMIT = '1'
) t1
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
SELECT
t1.`ACCOUNT`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`CREATEMANNAME`,
t1.`DATE`,
t1.`IBZ_DAILYID`,
t1.`IBZ_DAILYNAME`,
t1.`ISSUBMIT`,
t1.`MAILTO`,
t1.`REPORTSTATUS`,
t1.`REPORTTO`,
t1.`TODAYTASK`,
t1.`TOMORROWPLANSTASK`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEMANNAME`
FROM `t_ibz_daily` t1 

```
### 数据查询-汇报汇总（我收到的）（MyReAllReport）
#### 说明
汇报汇总（我收到的）

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.* from (SELECT
t1.`ACCOUNT`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`CREATEMANNAME`,
DATE_FORMAT(t1.DATE,'%Y-%m-%d') as `DATE`,
t1.`IBZ_DAILYID`,
t1.`IBZ_DAILYNAME`,
t1.`ISSUBMIT`,
t1.`MAILTO`,
(case when t11.id is not null then '1' else '0' end ) as `REPORTSTATUS`,
t1.`REPORTTO`,
DATE_FORMAT(t1.SUBMITTIME,'%H:%i') as `SUBMITTIME`,
t1.`TODAYTASK`,
t1.`TOMORROWPLANSTASK`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEMANNAME`,
CONCAT_WS('','今日工作：',case when t1.WORKTODAY is null then '无' else t1.WORKTODAY end) as WORKTODAY,
t1.`COMMENT`,
CONCAT_WS('','明日计划：',case when t1.PLANSTOMORROW is null then '无' else t1.PLANSTOMORROW end) AS PLANSTOMORROW,
'daily' as type 
FROM `T_IBZ_DAILY` t1 
left join zt_action t11 on t11.objectID = t1.IBZ_DAILYID and t11.objectType = 'daily' and t11.action = 'read' and t11.actor = #{srf.sessioncontext.srfloginname}
where t1.ISSUBMIT = '1'
UNION
SELECT
t1.`ACCOUNT`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`CREATEMANNAME`,
DATE_FORMAT(t1.DATE,'%Y-%m-%d') as `DATE`,
t1.`IBZ_WEEKLYID` as IBZ_DAILYID,
t1.`IBZ_WEEKLYNAME` as IBZ_DAILYNAME,
t1.`ISSUBMIT`,
t1.`MAILTO`,
(case when t11.id is not null then '1' else '0' end ) as `REPORTSTATUS`,
t1.`REPORTTO`,
DATE_FORMAT(t1.SUBMITTIME,'%H:%i') as `SUBMITTIME`,
t1.`THISWEEKTASK` as TODAYTASK,
t1.`NEXTWEEKTASK` as TOMORROWPLANSTASK,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEMANNAME`,
CONCAT_WS('','本周工作：',case when t1.WORKTHISWEEK is null then '无' else t1.WORKTHISWEEK end)  as WORKTODAY,
t1.`COMMENT`,
CONCAT_WS('','下周计划：',case when t1.PLANNEXTWEEK is null then '无' else t1.PLANNEXTWEEK end) as PLANSTOMORROW,
'weekly' as type 
FROM `T_IBZ_WEEKLY` t1 
left join zt_action t11 on t11.objectID = t1.IBZ_WEEKLYID and t11.objectType = 'weekly' and t11.action = 'read' and t11.actor = #{srf.sessioncontext.srfloginname}
where t1.ISSUBMIT = '1'
UNION
SELECT
t1.`ACCOUNT`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`CREATEMANNAME`,
DATE_FORMAT(t1.DATE,'%Y-%m-%d') as `DATE`,
t1.`IBZ_MONTHLYID` AS IBZ_DAILYID,
t1.`IBZ_MONTHLYNAME` AS IBZ_DAILYNAME,
t1.`ISSUBMIT`,
t1.`MAILTO`,
(case when t11.id is not null then '1' else '0' end ) as `REPORTSTATUS`,
t1.`REPORTTO`,
DATE_FORMAT(t1.SUBMITTIME,'%H:%i') as `SUBMITTIME`,
t1.`THISMONTHTASK` AS TODAYTASK,
t1.`NEXTMONTHPLANSTASK` AS TOMORROWPLANSTASK,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEMANNAME`,
CONCAT_WS('','本月工作：',case when t1.WORKTHISMONTH is null then '无' else t1.WORKTHISMONTH end)  as WORKTODAY,
t1.`COMMENT`,
CONCAT_WS('','下月计划：',case when t1.PLANSNEXTMONTH is null then '无' else t1.PLANSNEXTMONTH end) as PLANSTOMORROW,
'monthly' as type 
FROM `T_IBZ_MONTHLY` t1
left join zt_action t11 on t11.objectID = t1.IBZ_MONTHLYID and t11.objectType = 'monthly' and t11.action = 'read' and t11.actor = #{srf.sessioncontext.srfloginname}
where t1.ISSUBMIT = '1'
UNION 
SELECT
t1.`ACCOUNT`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
null as `CREATEMANNAME`,
DATE_FORMAT(t1.DATE,'%Y-%m-%d') as `DATE`,
t1.`IBZ_REPORTLYID` as IBZ_DAILYID,
t1.`IBZ_REPORTLYNAME` as IBZ_DAILYNAME,
t1.`ISSUBMIT`,
t1.`MAILTO`,
(case when t11.id is not null then '1' else '0' end ) as `REPORTSTATUS`,
t1.`REPORTTO`,
DATE_FORMAT(t1.SUBMITTIME,'%H:%i') as `SUBMITTIME`,
null as TODAYTASK,
null as TOMORROWPLANSTASK,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
null as `UPDATEMANNAME`,
CONCAT_WS('','工作内容：',case when t1.CONTENT is null then '无' else t1.CONTENT end) as WORKTODAY,
null as `COMMENT`,
null as PLANSTOMORROW,
'reportly' as type 
FROM `T_IBZ_REPORTLY` t1 
left join zt_action t11 on t11.objectID = t1.IBZ_REPORTLYID and t11.objectType = 'reportly' and t11.action = 'read' and t11.actor = #{srf.sessioncontext.srfloginname}
where t1.ISSUBMIT = '1'
) t1
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
t1.`COMMENT`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`CREATEMANNAME`,
t1.`DATE`,
t1.`IBZ_DAILYID`,
t1.`IBZ_DAILYNAME`,
t1.`ISSUBMIT`,
t1.`MAILTO`,
t1.`PLANSTOMORROW`,
t1.`REPORTSTATUS`,
t1.`REPORTTO`,
t1.`TODAYTASK`,
t1.`TOMORROWPLANSTASK`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEMANNAME`,
t1.`WORKTODAY`
FROM `t_ibz_daily` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [汇报汇总](#数据集合-汇报汇总（AllReport）) | AllReport | 否 |
| 2 | [数据集](#数据集合-数据集（Default）) | Default | 是 |
| 3 | [汇报汇总（我收到的）](#数据集合-汇报汇总（我收到的）（MyReAllReport）) | MyReAllReport | 否 |

### 数据集合-汇报汇总（AllReport）
#### 说明
汇报汇总

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [汇报汇总（AllReport）](#数据查询-汇报汇总（AllReport）) |
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
### 数据集合-汇报汇总（我收到的）（MyReAllReport）
#### 说明
汇报汇总（我收到的）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [汇报汇总（我收到的）（MyReAllReport）](#数据查询-汇报汇总（我收到的）（MyReAllReport）) |

## 数据导入
无

## 数据导出
无

