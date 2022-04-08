
# 实体-汇报(IBZ_REPORTLY)
## 实体说明
汇报

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
| 1 | [汇报标识](#属性-汇报标识（IBZ_REPORTLYID）) | IBZ_REPORTLYID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 2 | [汇报名称](#属性-汇报名称（IBZ_REPORTLYNAME）) | IBZ_REPORTLYNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 4 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | 日期时间型 | 否 | 否 | 否 |
| 5 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 6 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | 日期时间型 | 否 | 否 | 否 |
| 7 | [工作内容](#属性-工作内容（CONTENT）) | CONTENT | HTML文本，没有长度限制 | 否 | 否 | 是 |
| 8 | [附件](#属性-附件（FILES）) | FILES | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [汇报给](#属性-汇报给（REPORTTO）) | REPORTTO | 单项选择(文本值) | 否 | 否 | 是 |
| 10 | [抄送给](#属性-抄送给（MAILTO）) | MAILTO | 多项选择(文本值) | 否 | 否 | 是 |
| 11 | [汇报日期](#属性-汇报日期（DATE）) | DATE | 日期型 | 否 | 否 | 是 |
| 12 | [是否提交](#属性-是否提交（ISSUBMIT）) | ISSUBMIT | 单项选择(文本值) | 否 | 否 | 是 |
| 13 | [提交时间](#属性-提交时间（SUBMITTIME）) | SUBMITTIME | 时间型 | 否 | 否 | 是 |
| 14 | [用户](#属性-用户（ACCOUNT）) | ACCOUNT | 单项选择(文本值) | 否 | 否 | 是 |
| 15 | [状态](#属性-状态（REPORTSTATUS）) | REPORTSTATUS | 单项选择(文本值) | 否 | 否 | 是 |
| 16 | [汇报给（选择）](#属性-汇报给（选择）（REPORTTOPK）) | REPORTTOPK | 文本，可指定长度 | 否 | 否 | 是 |
| 17 | [抄送给（选择）](#属性-抄送给（选择）（MAILTOPK）) | MAILTOPK | 文本，可指定长度 | 否 | 否 | 是 |

### 属性-汇报标识（IBZ_REPORTLYID）
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

### 属性-汇报名称（IBZ_REPORTLYNAME）
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

### 属性-工作内容（CONTENT）
#### 属性说明
工作内容

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

### 属性-汇报日期（DATE）
#### 属性说明
汇报日期

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
| 1 | [未提交](#业务状态-未提交（nsubmit）) | 0 |  |  | 否 |
| 2 | [已提交](#业务状态-已提交（submit）) | 1 |  |  | 否 |
### 业务状态-未提交（nsubmit）
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
### 业务状态-已提交（submit）
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
| 1 | [汇报编辑](#操作权限-汇报编辑（SRFUR__REPORTLY_EDIT_BUT）)<br>（SRFUR__REPORTLY_EDIT_BUT） |
| 2 | [汇报提交](#操作权限-汇报提交（SRFUR__REPORTLY_SUBMIT_BUT）)<br>（SRFUR__REPORTLY_SUBMIT_BUT） |

## 实体行为
| 序号 | 行为 | 行为名 | 行为类型 | 行为持有者 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [Create](#实体行为-Create（Create）) | Create | 内置方法 | 后台及前台 |
| 2 | [Update](#实体行为-Update（Update）) | Update | 内置方法 | 后台及前台 |
| 3 | [Remove](#实体行为-Remove（Remove）) | Remove | 内置方法 | 后台及前台 |
| 4 | [Get](#实体行为-Get（Get）) | Get | 内置方法 | 后台及前台 |
| 5 | [GetDraft](#实体行为-GetDraft（GetDraft）) | GetDraft | 内置方法 | 后台及前台 |
| 6 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 7 | [已读](#实体行为-已读（HaveRead）) | HaveRead | 用户自定义 | 后台及前台 |
| 8 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |
| 9 | [提交](#实体行为-提交（Submit）) | Submit | 用户自定义 | 后台及前台 |

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
### 实体行为-已读（HaveRead）
#### 说明
已读

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
| 1 | [汇报名称（IBZ_REPORTLYNAME）](#属性-汇报名称（IBZ_REPORTLYNAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [汇报名称（IBZ_REPORTLYNAME）](#属性-汇报名称（IBZ_REPORTLYNAME）) | `%like%` |
| 2 | [是否提交（ISSUBMIT）](#属性-是否提交（ISSUBMIT）) | `=` |
| 3 | [用户（ACCOUNT）](#属性-用户（ACCOUNT）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 2 | [我所有的汇报](#数据查询-我所有的汇报（MyAllReportly）) | MyAllReportly | 否 |
| 3 | [我收到的汇报](#数据查询-我收到的汇报（MyReceived）) | MyReceived | 否 |
| 4 | [我的未提交汇报](#数据查询-我的未提交汇报（MyReportlyMob）) | MyReportlyMob | 否 |
| 5 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
t1.`DATE`,
t1.`IBZ_REPORTLYID`,
t1.`IBZ_REPORTLYNAME`,
t1.`ISSUBMIT`,
t1.`MAILTO`,
t1.mailto AS `MAILTOPK`,
t1.`REPORTSTATUS`,
t1.`REPORTTO`,
t1.reportto AS `REPORTTOPK`,
t1.`SUBMITTIME`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_IBZ_REPORTLY` t1 

```
### 数据查询-我所有的汇报（MyAllReportly）
#### 说明
我所有的汇报

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
t1.`DATE`,
t1.`IBZ_REPORTLYID`,
t1.`IBZ_REPORTLYNAME`,
t1.`ISSUBMIT`,
t1.`MAILTO`,
t1.`REPORTSTATUS`,
t1.`REPORTTO`,
t1.`SUBMITTIME`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_IBZ_REPORTLY` t1
```
### 数据查询-我收到的汇报（MyReceived）
#### 说明
我收到的汇报

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.`ACCOUNT`,
	t1.`CONTENT`,
	t1.`CREATEDATE`,
	t1.`CREATEMAN`,
	t1.`DATE`,
	t1.`IBZ_REPORTLYID`,
	t1.`IBZ_REPORTLYNAME`,
	t1.`ISSUBMIT`,
	t1.`MAILTO`,
	( CASE WHEN t11.id IS NOT NULL THEN '1' ELSE '0' END ) AS `REPORTSTATUS`,
	t1.`REPORTTO`,
	t1.`SUBMITTIME`,
	t1.`UPDATEDATE`,
	t1.`UPDATEMAN` 
FROM
	`t_ibz_reportly` t1
	LEFT JOIN zt_action t11 ON t11.objectID = t1.IBZ_REPORTLYID 
	AND t11.objectType = 'reportly' 
	AND t11.action = 'read' 
	AND t11.actor = #{srf.sessioncontext.srfloginname}
```
### 数据查询-我的未提交汇报（MyReportlyMob）
#### 说明
我的未提交汇报

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
DATE_FORMAT(t1.DATE,'%Y-%m-%d') as `DATE`,
t1.`IBZ_REPORTLYID`,
t1.`IBZ_REPORTLYNAME`,
t1.`ISSUBMIT`,
CONCAT_WS('','工作内容：',case when t1.CONTENT is null then '无' else t1.CONTENT end)  as `CONTENT`,
t1.`MAILTO`,
'1' as `REPORTSTATUS`,
t1.`REPORTTO`,
t1.`SUBMITTIME`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`, 
'reportly' as type 
FROM `T_IBZ_REPORTLY` t1
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
t1.`CONTENT`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DATE`,
t1.`IBZ_REPORTLYID`,
t1.`IBZ_REPORTLYNAME`,
t1.`ISSUBMIT`,
t1.`MAILTO`,
t1.mailto AS `MAILTOPK`,
t1.`REPORTSTATUS`,
t1.`REPORTTO`,
t1.reportto AS `REPORTTOPK`,
t1.`SUBMITTIME`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_IBZ_REPORTLY` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据集](#数据集合-数据集（Default）) | Default | 是 |
| 2 | [我所有的汇报](#数据集合-我所有的汇报（MyAllReportly）) | MyAllReportly | 否 |
| 3 | [我收到的汇报](#数据集合-我收到的汇报（MyReceived）) | MyReceived | 否 |
| 4 | [我的未提交汇报](#数据集合-我的未提交汇报（MyReportlyMob）) | MyReportlyMob | 否 |

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
### 数据集合-我所有的汇报（MyAllReportly）
#### 说明
我所有的汇报

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我所有的汇报（MyAllReportly）](#数据查询-我所有的汇报（MyAllReportly）) |
### 数据集合-我收到的汇报（MyReceived）
#### 说明
我收到的汇报

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我收到的汇报（MyReceived）](#数据查询-我收到的汇报（MyReceived）) |
### 数据集合-我的未提交汇报（MyReportlyMob）
#### 说明
我的未提交汇报

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [我的未提交汇报（MyReportlyMob）](#数据查询-我的未提交汇报（MyReportlyMob）) |

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
| 1 | 汇报标识 | [汇报标识（IBZ_REPORTLYID）](#属性-汇报标识（IBZ_REPORTLYID）) |  |
| 2 | 汇报名称 | [汇报名称（IBZ_REPORTLYNAME）](#属性-汇报名称（IBZ_REPORTLYNAME）) |  |
| 3 | 用户 | [用户（ACCOUNT）](#属性-用户（ACCOUNT）) |  |
| 4 | 日期 | [汇报日期（DATE）](#属性-汇报日期（DATE）) |  |
| 5 | 汇报给 | [汇报给（REPORTTO）](#属性-汇报给（REPORTTO）) |  |
| 6 | 是否提交 | [是否提交（ISSUBMIT）](#属性-是否提交（ISSUBMIT）) |  |

