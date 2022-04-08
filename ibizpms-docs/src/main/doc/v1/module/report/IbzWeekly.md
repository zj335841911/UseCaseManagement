
# 实体-周报(IBZ_WEEKLY)
## 实体说明
周报

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
| 1 | [周报名称](#属性-周报名称（IBZ_WEEKLYNAME）) | IBZ_WEEKLYNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [周报标识](#属性-周报标识（IBZ_WEEKLYID）) | IBZ_WEEKLYID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 3 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 4 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | 日期时间型 | 否 | 否 | 否 |
| 5 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 6 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | 日期时间型 | 否 | 否 | 否 |
| 7 | [用户](#属性-用户（ACCOUNT）) | ACCOUNT | 单项选择(文本值) | 否 | 否 | 是 |
| 8 | [抄送给](#属性-抄送给（MAILTO）) | MAILTO | 多项选择(文本值) | 否 | 否 | 是 |
| 9 | [附件](#属性-附件（FILES）) | FILES | 文本，可指定长度 | 否 | 否 | 是 |
| 10 | [是否提交](#属性-是否提交（ISSUBMIT）) | ISSUBMIT | 单项选择(文本值) | 否 | 否 | 是 |
| 11 | [汇报给](#属性-汇报给（REPORTTO）) | REPORTTO | 单项选择(文本值) | 否 | 否 | 是 |
| 12 | [其他事项](#属性-其他事项（COMMENT）) | COMMENT | HTML文本，没有长度限制 | 否 | 否 | 是 |
| 13 | [日期](#属性-日期（DATE）) | DATE | 日期型 | 否 | 否 | 是 |
| 14 | [本周工作](#属性-本周工作（WORKTHISWEEK）) | WORKTHISWEEK | HTML文本，没有长度限制 | 否 | 否 | 是 |
| 15 | [下周计划](#属性-下周计划（PLANNEXTWEEK）) | PLANNEXTWEEK | HTML文本，没有长度限制 | 否 | 否 | 是 |
| 16 | [本周完成任务](#属性-本周完成任务（THISWEEKTASK）) | THISWEEKTASK | 多项选择(文本值) | 否 | 否 | 是 |
| 17 | [下周计划任务](#属性-下周计划任务（NEXTWEEKTASK）) | NEXTWEEKTASK | 多项选择(文本值) | 否 | 否 | 是 |
| 18 | [更新人名称](#属性-更新人名称（UPDATEMANNAME）) | UPDATEMANNAME | 文本，可指定长度 | 否 | 否 | 否 |
| 19 | [建立人名称](#属性-建立人名称（CREATEMANNAME）) | CREATEMANNAME | 文本，可指定长度 | 否 | 否 | 否 |
| 20 | [状态](#属性-状态（REPORTSTATUS）) | REPORTSTATUS | 单项选择(文本值) | 否 | 否 | 是 |
| 21 | [提交时间](#属性-提交时间（SUBMITTIME）) | SUBMITTIME | 时间型 | 否 | 否 | 是 |
| 22 | [汇报给(选择)](#属性-汇报给(选择)（REPORTTOPK）) | REPORTTOPK | 文本，可指定长度 | 否 | 否 | 是 |
| 23 | [抄送给(选择)](#属性-抄送给(选择)（MAILTOPK）) | MAILTOPK | 文本，可指定长度 | 否 | 否 | 是 |

### 属性-周报名称（IBZ_WEEKLYNAME）
#### 属性说明
周报名称

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

### 属性-周报标识（IBZ_WEEKLYID）
#### 属性说明
周报标识

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
无

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

### 属性-本周工作（WORKTHISWEEK）
#### 属性说明
本周工作

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

### 属性-下周计划（PLANNEXTWEEK）
#### 属性说明
下周计划

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

### 属性-本周完成任务（THISWEEKTASK）
#### 属性说明
本周完成任务

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
参照数据字典【[周报我完成的任务(下拉框选择)（CodeList）](../../codelist/CodeList)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-下周计划任务（NEXTWEEKTASK）
#### 属性说明
下周计划任务

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

### 属性-汇报给(选择)（REPORTTOPK）
#### 属性说明
汇报给(选择)

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
t1.reportto
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-抄送给(选择)（MAILTOPK）
#### 属性说明
抄送给(选择)

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
t1.mailto
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
| 1 | [未提交](#业务状态-未提交（NSUNBMIT）) | 0 |  |  | 否 |
| 2 | [已提交](#业务状态-已提交（SUBMIT）) | 1 |  |  | 否 |
### 业务状态-未提交（NSUNBMIT）
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
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [周报待提交](#操作权限-周报待提交（SRFUR__WEEKLY_NSUBMIT_BUT）)<br>（SRFUR__WEEKLY_NSUBMIT_BUT） |
### 业务状态-已提交（SUBMIT）
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
| 1 | [周报已提交](#操作权限-周报已提交（SRFUR__WEEKLY_SUBMIT_BUT）)<br>（SRFUR__WEEKLY_SUBMIT_BUT） |

## 实体行为
| 序号 | 行为 | 行为名 | 行为类型 | 行为持有者 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [Create](#实体行为-Create（Create）) | Create | 内置方法 | 后台及前台 |
| 2 | [Update](#实体行为-Update（Update）) | Update | 内置方法 | 后台及前台 |
| 3 | [Remove](#实体行为-Remove（Remove）) | Remove | 内置方法 | 后台及前台 |
| 4 | [Get](#实体行为-Get（Get）) | Get | 内置方法 | 后台及前台 |
| 5 | [GetDraft](#实体行为-GetDraft（GetDraft）) | GetDraft | 内置方法 | 后台及前台 |
| 6 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 7 | [定时生成每周周报](#实体行为-定时生成每周周报（CreateEveryWeekReport）) | createEveryWeekReport | 用户自定义 | 后台及前台 |
| 8 | [获取上周周报的下周计划](#实体行为-获取上周周报的下周计划（CreateGetLastWeekPlanAndWork）) | CreateGetLastWeekPlanAndWork | 用户自定义 | 后台及前台 |
| 9 | [编辑获取上周计划完成任务和本周已完成任务](#实体行为-编辑获取上周计划完成任务和本周已完成任务（EditGetLastWeekTaskAndComTask）) | EditGetLastWeekTaskAndComTask | 用户自定义 | 后台及前台 |
| 10 | [已读](#实体行为-已读（HaveRead）) | haveRead | 用户自定义 | 后台及前台 |
| 11 | [判断本周是否创建过周报](#实体行为-判断本周是否创建过周报（JugThisWeekCreateWeekly）) | JugThisWeekCreateWeekly | 用户自定义 | 后台及前台 |
| 12 | [定时推送待阅提醒用户周报提交](#实体行为-定时推送待阅提醒用户周报提交（PushUserWeekly）) | pushUserWeekly | 用户自定义 | 后台及前台 |
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
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [行为[Update]主状态拒绝逻辑<br>（Update__MSDeny）](#逻辑处理-行为[Update]主状态拒绝逻辑（Update__MSDeny）) | 检查 | 是 |  |
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
### 实体行为-定时生成每周周报（CreateEveryWeekReport）
#### 说明
定时生成每周周报

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-获取上周周报的下周计划（CreateGetLastWeekPlanAndWork）
#### 说明
获取上周周报的下周计划

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-编辑获取上周计划完成任务和本周已完成任务（EditGetLastWeekTaskAndComTask）
#### 说明
编辑获取上周计划完成任务和本周已完成任务

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
### 实体行为-判断本周是否创建过周报（JugThisWeekCreateWeekly）
#### 说明
判断本周是否创建过周报

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-定时推送待阅提醒用户周报提交（PushUserWeekly）
#### 说明
定时推送待阅提醒用户周报提交

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
| 序号 | 逻辑 | 逻辑名 | 逻辑持有者 |
| ---- | ---- | ---- | ---- |
| 1 | [行为[Update]主状态拒绝逻辑](#逻辑处理-行为[Update]主状态拒绝逻辑（Update__MSDeny）) | Update__MSDeny | 后台 |
| 2 | [行为[Remove]主状态拒绝逻辑](#逻辑处理-行为[Remove]主状态拒绝逻辑（Remove__MSDeny）) | Remove__MSDeny | 后台 |

### 逻辑处理-行为[Update]主状态拒绝逻辑（Update__MSDeny）
#### 说明
行为[Update]主状态拒绝逻辑

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 准备临时参数 | PrepareTemp | 准备参数 |
| 2 | 状态[已提交]拒绝[Update]操作 | DenyBySUBMIT | 抛出异常 |
| 3 | 状态[未提交]拒绝[Update]操作 | DenyByNSUNBMIT | 抛出异常 |
| 4 | 获取数据 | Get | 实体行为 |
| 5 | 开始 | Begin | 开始 |
### 逻辑处理-行为[Remove]主状态拒绝逻辑（Remove__MSDeny）
#### 说明
行为[Remove]主状态拒绝逻辑

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 状态[已提交]拒绝[Remove]操作 | DenyBySUBMIT | 抛出异常 |
| 3 | 准备临时参数 | PrepareTemp | 准备参数 |
| 4 | 获取数据 | Get | 实体行为 |
| 5 | 状态[未提交]拒绝[Remove]操作 | DenyByNSUNBMIT | 抛出异常 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [周报名称（IBZ_WEEKLYNAME）](#属性-周报名称（IBZ_WEEKLYNAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [周报名称（IBZ_WEEKLYNAME）](#属性-周报名称（IBZ_WEEKLYNAME）) | `%like%` |
| 2 | [用户（ACCOUNT）](#属性-用户（ACCOUNT）) | `=` |
| 3 | [是否提交（ISSUBMIT）](#属性-是否提交（ISSUBMIT）) | `=` |
| 4 | [汇报给（REPORTTO）](#属性-汇报给（REPORTTO）) | `=` |
| 5 | [状态（REPORTSTATUS）](#属性-状态（REPORTSTATUS）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 2 | [我的周报](#数据查询-我的周报（MyNotSubmit）) | MyNotSubmit | 否 |
| 3 | [我收到的周报](#数据查询-我收到的周报（MyWeekly）) | MyWeekly | 否 |
| 4 | [产品团队成员周报](#数据查询-产品团队成员周报（ProductTeamMemberWeekly）) | ProductTeamMemberWeekly | 否 |
| 5 | [项目周报](#数据查询-项目周报（ProjectWeekly）) | ProjectWeekly | 否 |
| 6 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
t1.`IBZ_WEEKLYID`,
t1.`IBZ_WEEKLYNAME`,
t1.`ISSUBMIT`,
t1.`MAILTO`,
t1.mailto AS `MAILTOPK`,
t1.`NEXTWEEKTASK`,
t1.`REPORTSTATUS`,
t1.`REPORTTO`,
t1.reportto AS `REPORTTOPK`,
t1.`SUBMITTIME`,
t1.`THISWEEKTASK`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEMANNAME`
FROM `T_IBZ_WEEKLY` t1 

```
### 数据查询-我的周报（MyNotSubmit）
#### 说明
我的周报

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
t1.`IBZ_WEEKLYID`,
t1.`IBZ_WEEKLYNAME`,
t1.`ISSUBMIT`,
t1.`MAILTO`,
t1.`NEXTWEEKTASK`,
CONCAT_WS('','下周计划：',case when t1.PLANNEXTWEEK is null then '无' else t1.PLANNEXTWEEK end) AS `PLANNEXTWEEK`,
'1' as `REPORTSTATUS`,
t1.`REPORTTO`,
t1.`SUBMITTIME`,
t1.`THISWEEKTASK`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEMANNAME`,
CONCAT_WS('','本周工作：',case when t1.WORKTHISWEEK is null then '无' else t1.WORKTHISWEEK end)  as WORKTHISWEEK
FROM `T_IBZ_WEEKLY` t1
```
### 数据查询-我收到的周报（MyWeekly）
#### 说明
我收到的周报

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
t1.`IBZ_WEEKLYID`,
t1.`IBZ_WEEKLYNAME`,
t1.`ISSUBMIT`,
t1.`MAILTO`,
t1.`NEXTWEEKTASK`,
t1.`PLANNEXTWEEK`,
(case when t11.id is not null then '1' else '0' end ) as `REPORTSTATUS`,
t1.`REPORTTO`,
t1.`THISWEEKTASK`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEMANNAME`
FROM `T_IBZ_WEEKLY` t1 
left join zt_action t11 on t11.objectID = t1.IBZ_WEEKLYID and t11.objectType = 'weekly' and t11.action = 'read' and t11.actor = #{srf.sessioncontext.srfloginname}
```
### 数据查询-产品团队成员周报（ProductTeamMemberWeekly）
#### 说明
产品团队成员周报

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
t1.`IBZ_WEEKLYID`,
t1.`IBZ_WEEKLYNAME`,
t1.`ISSUBMIT`,
t1.`MAILTO`,
t1.mailto AS `MAILTOPK`,
t1.`NEXTWEEKTASK`,
t1.`REPORTSTATUS`,
t1.`REPORTTO`,
t1.reportto AS `REPORTTOPK`,
t1.`SUBMITTIME`,
t1.`THISWEEKTASK`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEMANNAME`
FROM `T_IBZ_WEEKLY` t1 

```
### 数据查询-项目周报（ProjectWeekly）
#### 说明
项目周报

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`ACCOUNT`, t1.`CREATEDATE`, t1.`CREATEMAN`, t1.`CREATEMANNAME`, t1.`DATE`, t1.`IBZ_WEEKLYID`, t1.`IBZ_WEEKLYNAME`, t1.`ISSUBMIT`, t1.`MAILTO`, t1.MAILTO AS `MAILTOPK`, t1.`REPORTSTATUS`, t1.`REPORTTO`, t1.REPORTTO AS `REPORTTOPK`, t1.`SUBMITTIME`, t1.`THISWEEKTASK`, t1.`NEXTWEEKTASK`, t1.`UPDATEDATE`, t1.`UPDATEMAN`, t1.`UPDATEMANNAME` FROM `T_IBZ_WEEKLY` t1
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
t1.`IBZ_WEEKLYID`,
t1.`IBZ_WEEKLYNAME`,
t1.`ISSUBMIT`,
t1.`MAILTO`,
t1.mailto AS `MAILTOPK`,
t1.`NEXTWEEKTASK`,
t1.`PLANNEXTWEEK`,
t1.`REPORTSTATUS`,
t1.`REPORTTO`,
t1.reportto AS `REPORTTOPK`,
t1.`SUBMITTIME`,
t1.`THISWEEKTASK`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEMANNAME`,
t1.`WORKTHISWEEK`
FROM `T_IBZ_WEEKLY` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据集](#数据集合-数据集（Default）) | Default | 是 |
| 2 | [我的周报](#数据集合-我的周报（MyNotSubmit）) | MyNotSubmit | 否 |
| 3 | [我收到的周报](#数据集合-我收到的周报（MyWeekly）) | MyWeekly | 否 |
| 4 | [产品团队成员周报](#数据集合-产品团队成员周报（ProductTeamMemberWeekly）) | ProductTeamMemberWeekly | 否 |
| 5 | [项目周报](#数据集合-项目周报（ProjectWeekly）) | ProjectWeekly | 否 |

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
### 数据集合-我的周报（MyNotSubmit）
#### 说明
我的周报

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我的周报（MyNotSubmit）](#数据查询-我的周报（MyNotSubmit）) |
### 数据集合-我收到的周报（MyWeekly）
#### 说明
我收到的周报

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我收到的周报（MyWeekly）](#数据查询-我收到的周报（MyWeekly）) |
### 数据集合-产品团队成员周报（ProductTeamMemberWeekly）
#### 说明
产品团队成员周报

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品团队成员周报（ProductTeamMemberWeekly）](#数据查询-产品团队成员周报（ProductTeamMemberWeekly）) |
### 数据集合-项目周报（ProjectWeekly）
#### 说明
项目周报

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [项目周报（ProjectWeekly）](#数据查询-项目周报（ProjectWeekly）) |

## 数据导入
无

## 数据导出
| 序号 | 数据导出 | 数据导出名 | 最大导出数量 |
| ---- | ---- | ---- | ---- |
| 1 | [数据导出（拷贝无操作）](#数据导出-数据导出（拷贝无操作）（DataExport）) | DataExport | 1,000 |

### 数据导出-数据导出（拷贝无操作）（DataExport）
#### 说明
数据导出（拷贝无操作）

- 最大导出数
1,000

- 行为持有者
后台及前台

| 序号 | 导出标题 | 属性 | 默认值 |
| ---- | ---- | ---- | ---- |
| 1 | 周报标识 | [周报标识（IBZ_WEEKLYID）](#属性-周报标识（IBZ_WEEKLYID）) |  |
| 2 | 周报名称 | [周报名称（IBZ_WEEKLYNAME）](#属性-周报名称（IBZ_WEEKLYNAME）) |  |
| 3 | 用户 | [用户（ACCOUNT）](#属性-用户（ACCOUNT）) |  |
| 4 | 日期 | [日期（DATE）](#属性-日期（DATE）) |  |
| 5 | 汇报给 | [汇报给（REPORTTO）](#属性-汇报给（REPORTTO）) |  |
| 6 | 是否提交 | [是否提交（ISSUBMIT）](#属性-是否提交（ISSUBMIT）) |  |

