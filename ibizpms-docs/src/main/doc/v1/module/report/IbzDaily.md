
# 实体-日报(IBZ_DAILY)
## 实体说明
日报

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
| 1 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 2 | [日报标识](#属性-日报标识（IBZ_DAILYID）) | IBZ_DAILYID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 3 | [日报名称](#属性-日报名称（IBZ_DAILYNAME）) | IBZ_DAILYNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 4 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | 日期时间型 | 否 | 否 | 否 |
| 5 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | 日期时间型 | 否 | 否 | 否 |
| 6 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 7 | [日期](#属性-日期（DATE）) | DATE | 日期型 | 否 | 否 | 是 |
| 8 | [用户](#属性-用户（ACCOUNT）) | ACCOUNT | 单项选择(文本值) | 否 | 否 | 是 |
| 9 | [今日工作](#属性-今日工作（WORKTODAY）) | WORKTODAY | HTML文本，没有长度限制 | 否 | 否 | 是 |
| 10 | [抄送给](#属性-抄送给（MAILTO）) | MAILTO | 多项选择(文本值) | 否 | 否 | 是 |
| 11 | [附件](#属性-附件（FILES）) | FILES | 文本，可指定长度 | 否 | 否 | 是 |
| 12 | [完成任务](#属性-完成任务（TODAYTASK）) | TODAYTASK | 多项选择(文本值) | 否 | 否 | 是 |
| 13 | [是否提交](#属性-是否提交（ISSUBMIT）) | ISSUBMIT | 单项选择(文本值) | 否 | 否 | 是 |
| 14 | [明日计划](#属性-明日计划（PLANSTOMORROW）) | PLANSTOMORROW | HTML文本，没有长度限制 | 否 | 否 | 是 |
| 15 | [明日计划任务](#属性-明日计划任务（TOMORROWPLANSTASK）) | TOMORROWPLANSTASK | 多项选择(文本值) | 否 | 否 | 是 |
| 16 | [汇报给](#属性-汇报给（REPORTTO）) | REPORTTO | 单项选择(文本值) | 否 | 否 | 是 |
| 17 | [其他事项](#属性-其他事项（COMMENT）) | COMMENT | HTML文本，没有长度限制 | 否 | 否 | 是 |
| 18 | [建立人名称](#属性-建立人名称（CREATEMANNAME）) | CREATEMANNAME | 文本，可指定长度 | 否 | 否 | 否 |
| 19 | [更新人名称](#属性-更新人名称（UPDATEMANNAME）) | UPDATEMANNAME | 文本，可指定长度 | 否 | 否 | 否 |
| 20 | [状态](#属性-状态（REPORTSTATUS）) | REPORTSTATUS | 单项选择(文本值) | 否 | 否 | 是 |
| 21 | [提交时间](#属性-提交时间（SUBMITTIME）) | SUBMITTIME | 时间型 | 否 | 否 | 是 |
| 22 | [汇报给（选择）](#属性-汇报给（选择）（REPORTTOPK）) | REPORTTOPK | 文本，可指定长度 | 否 | 否 | 是 |
| 23 | [抄送给（选择）](#属性-抄送给（选择）（MAILTOPK）) | MAILTOPK | 文本，可指定长度 | 否 | 否 | 是 |

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

### 属性-日报标识（IBZ_DAILYID）
#### 属性说明
日报标识

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

### 属性-日报名称（IBZ_DAILYNAME）
#### 属性说明
日报名称

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
| 2 | `>=` |
| 3 | `<=` |

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

### 属性-今日工作（WORKTODAY）
#### 属性说明
今日工作

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
参照数据字典【[用户真实名称（动态-表格）（UserRealName_Gird）](../../codelist/UserRealName_Gird)】

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
参照数据字典【[我完成的任务（汇报）（MyCompleteTask）](../../codelist/MyCompleteTask)】

- 数据格式
无

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

### 属性-明日计划（PLANSTOMORROW）
#### 属性说明
明日计划

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

### 属性-明日计划任务（TOMORROWPLANSTASK）
#### 属性说明
明日计划任务

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
参照数据字典【[我计划参与的任务（汇报）（MyPlanTask）](../../codelist/MyPlanTask)】

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

### 属性-提交时间（SUBMITTIME）
#### 属性说明
提交时间

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
时间型

- Java类型
Timestamp

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
无

- 数据格式
HH:mm:ss

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-汇报给（选择）（REPORTTOPK）
#### 属性说明
汇报给（选择）

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
t1.REPORTTO
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-抄送给（选择）（MAILTOPK）
#### 属性说明
抄送给（选择）

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
t1.MAILTO
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无


## 业务状态
| 序号 | 状态名称 | [是否提交](#属性-是否提交（ISSUBMIT）)<br>（ISSUBMIT） | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [已提交](#业务状态-已提交（hasSubmit）) | 1 |  |  | 否 |
| 2 | [未提交](#业务状态-未提交（notSubmit）) | 0 |  |  | 否 |
### 业务状态-已提交（hasSubmit）
#### 状态说明
已提交

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [是否提交](#属性-是否提交（ISSUBMIT）)<br>（ISSUBMIT） | 1 |



- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [日报提交](#操作权限-日报提交（SRFUR__DAILY_SUBMIT_BUT）)<br>（SRFUR__DAILY_SUBMIT_BUT） |
### 业务状态-未提交（notSubmit）
#### 状态说明
未提交

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [是否提交](#属性-是否提交（ISSUBMIT）)<br>（ISSUBMIT） | 0 |



- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无

## 实体行为
| 序号 | 行为 | 行为名 | 行为类型 | 行为持有者 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [Create](#实体行为-Create（Create）) | Create | 内置方法 | 后台及前台 |
| 2 | [Update](#实体行为-Update（Update）) | Update | 内置方法 | 后台及前台 |
| 3 | [Remove](#实体行为-Remove（Remove）) | Remove | 内置方法 | 后台及前台 |
| 4 | [Get](#实体行为-Get（Get）) | Get | 内置方法 | 后台及前台 |
| 5 | [GetDraft](#实体行为-GetDraft（GetDraft）) | GetDraft | 内置方法 | 后台及前台 |
| 6 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 7 | [定时生成用户日报](#实体行为-定时生成用户日报（CreateUserDaily）) | CreateUserDaily | 用户自定义 | 后台及前台 |
| 8 | [获取前一天日报计划参与任务（编辑）](#实体行为-获取前一天日报计划参与任务（编辑）（GetYeaterdayDailyPlansTaskEdit）) | getYeaterdayDailyPlansTaskEdit | 用户自定义 | 后台及前台 |
| 9 | [获取前一天日报计划参与任务（新建）](#实体行为-获取前一天日报计划参与任务（新建）（GetYesterdayDailyPlansTask）) | getYesterdayDailyPlansTask | 用户自定义 | 后台及前台 |
| 10 | [已读](#实体行为-已读（HaveRead）) | HaveRead | 用户自定义 | 后台及前台 |
| 11 | [关联完成任务](#实体行为-关联完成任务（LinkCompleteTask）) | LinkCompleteTask | 用户自定义 | 后台及前台 |
| 12 | [定时推送待阅提醒用户日报](#实体行为-定时推送待阅提醒用户日报（PushUserDaily）) | PushUserDaily | 用户自定义 | 后台及前台 |
| 13 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |
| 14 | [提交](#实体行为-提交（Submit）) | submit | 用户自定义 | 后台及前台 |

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
### 实体行为-定时生成用户日报（CreateUserDaily）
#### 说明
定时生成用户日报

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-获取前一天日报计划参与任务（编辑）（GetYeaterdayDailyPlansTaskEdit）
#### 说明
获取前一天日报计划参与任务（编辑）

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-获取前一天日报计划参与任务（新建）（GetYesterdayDailyPlansTask）
#### 说明
获取前一天日报计划参与任务（新建）

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-已读（HaveRead）
#### 说明
已读

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-关联完成任务（LinkCompleteTask）
#### 说明
关联完成任务

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-定时推送待阅提醒用户日报（PushUserDaily）
#### 说明
定时推送待阅提醒用户日报

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
### 实体行为-提交（Submit）
#### 说明
提交

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
| 1 | [日报名称（IBZ_DAILYNAME）](#属性-日报名称（IBZ_DAILYNAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [日报名称（IBZ_DAILYNAME）](#属性-日报名称（IBZ_DAILYNAME）) | `%like%` |
| 2 | [日期（DATE）](#属性-日期（DATE）) | `=` |
| 3 | [日期（DATE）](#属性-日期（DATE）) | `>=` |
| 4 | [日期（DATE）](#属性-日期（DATE）) | `<=` |
| 5 | [用户（ACCOUNT）](#属性-用户（ACCOUNT）) | `=` |
| 6 | [是否提交（ISSUBMIT）](#属性-是否提交（ISSUBMIT）) | `=` |
| 7 | [汇报给（REPORTTO）](#属性-汇报给（REPORTTO）) | `=` |
| 8 | [状态（REPORTSTATUS）](#属性-状态（REPORTSTATUS）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 2 | [我的日报（已提交和未提交）](#数据查询-我的日报（已提交和未提交）（MyAllDaily）) | MyAllDaily | 否 |
| 3 | [我收到的日报](#数据查询-我收到的日报（MyDaily）) | MyDaily | 否 |
| 4 | [我的日报](#数据查询-我的日报（MyNotSubmit）) | MyNotSubmit | 否 |
| 5 | [我提交的日报](#数据查询-我提交的日报（MySubmitDaily）) | MySubmitDaily | 否 |
| 6 | [产品日报](#数据查询-产品日报（ProductDaily）) | ProductDaily | 否 |
| 7 | [项目日报](#数据查询-项目日报（ProjectDaily）) | ProjectDaily | 否 |
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
t1.MAILTO AS `MAILTOPK`,
t1.`REPORTSTATUS`,
t1.`REPORTTO`,
t1.REPORTTO AS `REPORTTOPK`,
t1.`SUBMITTIME`,
t1.`TODAYTASK`,
t1.`TOMORROWPLANSTASK`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEMANNAME`
FROM `T_IBZ_DAILY` t1 

```
### 数据查询-我的日报（已提交和未提交）（MyAllDaily）
#### 说明
我的日报（已提交和未提交）

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
		t1.MAILTO AS `MAILTOPK`,
		( CASE WHEN t11.id IS NOT NULL THEN '1' ELSE '0' END ) AS `REPORTSTATUS`,
		t1.`REPORTTO`,
		t1.REPORTTO AS `REPORTTOPK`,
		t1.`SUBMITTIME`,
		t1.`TODAYTASK`,
		t1.`TOMORROWPLANSTASK`,
		t1.`UPDATEDATE`,
		t1.`UPDATEMAN`,
		t1.`UPDATEMANNAME` 
	FROM
		`T_IBZ_DAILY` t1
		LEFT JOIN zt_action t11 ON t11.objectID = t1.IBZ_DAILYID 
		AND t11.objectType = 'daily' 
		AND t11.action = 'read' 
		AND t11.actor = #{srf.sessioncontext.srfloginname}
```
### 数据查询-我收到的日报（MyDaily）
#### 说明
我收到的日报

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
(case when t11.id is not null then '1' else '0' end ) as `REPORTSTATUS`,
t1.`REPORTTO`,
t1.`TODAYTASK`,
t1.`TOMORROWPLANSTASK`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEMANNAME`
FROM `T_IBZ_DAILY` t1 left join zt_action t11 on t11.objectID = t1.IBZ_DAILYID and t11.objectType = 'daily' and t11.action = 'read' and t11.actor = #{srf.sessioncontext.srfloginname}
```
### 数据查询-我的日报（MyNotSubmit）
#### 说明
我的日报

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
DATE_FORMAT(t1.DATE,'%Y-%m-%d') as `DATE`,
t1.`IBZ_DAILYID`,
t1.`IBZ_DAILYNAME`,
t1.`ISSUBMIT`,
t1.`MAILTO`,
'1' as `REPORTSTATUS`,
t1.`REPORTTO`,
t1.SUBMITTIME as `SUBMITTIME`,
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
```
### 数据查询-我提交的日报（MySubmitDaily）
#### 说明
我提交的日报

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1. IBZ_DAILYID,
	t1.IBZ_DAILYNAME,
	t1.ACCOUNT,
	t1.DATE,
	t1.ISSUBMIT,
	t1.REPORTTO,
	t1.REPORTSTATUS
FROM
	t_ibz_daily t1 


```
### 数据查询-产品日报（ProductDaily）
#### 说明
产品日报

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
t1.MAILTO AS `MAILTOPK`,
t1.`REPORTSTATUS`,
t1.`REPORTTO`,
t1.REPORTTO AS `REPORTTOPK`,
t1.`SUBMITTIME`,
t1.`TODAYTASK`,
t1.`TOMORROWPLANSTASK`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEMANNAME`
FROM `T_IBZ_DAILY` t1 
where
t1.`ISSUBMIT` = '1' 
AND exists(select 1 from zt_team t2 where t2.account = t1.`ACCOUNT` and t2.type = 'product' and t2.root = ${srfdatacontext('curproduct')}) 
AND DATE_FORMAT(t1.date,'%Y-%m-%d') = DATE_FORMAT(${srfdatacontext('date')},'%Y-%m-%d')
```
### 数据查询-项目日报（ProjectDaily）
#### 说明
项目日报

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
t1.MAILTO AS `MAILTOPK`,
t1.`REPORTSTATUS`,
t1.`REPORTTO`,
t1.REPORTTO AS `REPORTTOPK`,
t1.`SUBMITTIME`,
t1.`TODAYTASK`,
t1.`TOMORROWPLANSTASK`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEMANNAME`
FROM `T_IBZ_DAILY` t1 

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
t1.MAILTO AS `MAILTOPK`,
t1.`PLANSTOMORROW`,
t1.`REPORTSTATUS`,
t1.`REPORTTO`,
t1.REPORTTO AS `REPORTTOPK`,
t1.`SUBMITTIME`,
t1.`TODAYTASK`,
t1.`TOMORROWPLANSTASK`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEMANNAME`,
t1.`WORKTODAY`
FROM `T_IBZ_DAILY` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据集](#数据集合-数据集（Default）) | Default | 是 |
| 2 | [我的日报（已提交和未提交）](#数据集合-我的日报（已提交和未提交）（MyAllDaily）) | MyAllDaily | 否 |
| 3 | [我收到的日报](#数据集合-我收到的日报（MyDaily）) | MyDaily | 否 |
| 4 | [我的日报](#数据集合-我的日报（MyNotSubmit）) | MyNotSubmit | 否 |
| 5 | [我提交的日报](#数据集合-我提交的日报（MySubmitDaily）) | MySubmitDaily | 否 |
| 6 | [产品日报](#数据集合-产品日报（ProductDaily）) | ProductDaily | 否 |
| 7 | [项目日报](#数据集合-项目日报（ProjectDaily）) | ProjectDaily | 否 |

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
### 数据集合-我的日报（已提交和未提交）（MyAllDaily）
#### 说明
我的日报（已提交和未提交）

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我的日报（已提交和未提交）（MyAllDaily）](#数据查询-我的日报（已提交和未提交）（MyAllDaily）) |
### 数据集合-我收到的日报（MyDaily）
#### 说明
我收到的日报

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我收到的日报（MyDaily）](#数据查询-我收到的日报（MyDaily）) |
### 数据集合-我的日报（MyNotSubmit）
#### 说明
我的日报

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我的日报（MyNotSubmit）](#数据查询-我的日报（MyNotSubmit）) |
### 数据集合-我提交的日报（MySubmitDaily）
#### 说明
我提交的日报

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我提交的日报（MySubmitDaily）](#数据查询-我提交的日报（MySubmitDaily）) |
### 数据集合-产品日报（ProductDaily）
#### 说明
产品日报

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品日报（ProductDaily）](#数据查询-产品日报（ProductDaily）) |
### 数据集合-项目日报（ProjectDaily）
#### 说明
项目日报

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目日报（ProjectDaily）](#数据查询-项目日报（ProjectDaily）) |

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
| 1 | 日报标识 | [日报标识（IBZ_DAILYID）](#属性-日报标识（IBZ_DAILYID）) |  |
| 2 | 日报名称 | [日报名称（IBZ_DAILYNAME）](#属性-日报名称（IBZ_DAILYNAME）) |  |
| 3 | 用户 | [用户（ACCOUNT）](#属性-用户（ACCOUNT）) |  |
| 4 | 日期 | [日期（DATE）](#属性-日期（DATE）) |  |
| 5 | 汇报给 | [汇报给（REPORTTO）](#属性-汇报给（REPORTTO）) |  |
| 6 | 是否提交 | [是否提交（ISSUBMIT）](#属性-是否提交（ISSUBMIT）) |  |

