
# 实体-job(ZT_JOB)
## 实体说明
job

## 所属模块
[基础管理模块](../zentao)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [测试结果（ZT_TESTRESULT）](../zentao/TestResult) | （默认） |
### N:1
无


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [逻辑删除标志](#属性-逻辑删除标志（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [editedDate](#属性-editedDate（EDITEDDATE）) | EDITEDDATE | 日期时间型 | 否 | 否 | 是 |
| 3 | [product](#属性-product（PRODUCT）) | PRODUCT | 整型 | 否 | 否 | 是 |
| 4 | [lastStatus](#属性-lastStatus（LASTSTATUS）) | LASTSTATUS | 文本，可指定长度 | 否 | 否 | 是 |
| 5 | [createdDate](#属性-createdDate（CREATEDDATE）) | CREATEDDATE | 日期时间型 | 否 | 否 | 是 |
| 6 | [createdBy](#属性-createdBy（CREATEDBY）) | CREATEDBY | 文本，可指定长度 | 否 | 否 | 是 |
| 7 | [triggerType](#属性-triggerType（TRIGGERTYPE）) | TRIGGERTYPE | 文本，可指定长度 | 否 | 否 | 是 |
| 8 | [comment](#属性-comment（COMMENT）) | COMMENT | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [lastExec](#属性-lastExec（LASTEXEC）) | LASTEXEC | 日期时间型 | 否 | 否 | 是 |
| 10 | [jkHost](#属性-jkHost（JKHOST）) | JKHOST | 整型 | 否 | 否 | 是 |
| 11 | [frame](#属性-frame（FRAME）) | FRAME | 文本，可指定长度 | 否 | 否 | 是 |
| 12 | [atDay](#属性-atDay（ATDAY）) | ATDAY | 文本，可指定长度 | 否 | 否 | 是 |
| 13 | [jkJob](#属性-jkJob（JKJOB）) | JKJOB | 文本，可指定长度 | 否 | 否 | 是 |
| 14 | [svnDir](#属性-svnDir（SVNDIR）) | SVNDIR | 文本，可指定长度 | 否 | 否 | 是 |
| 15 | [repo](#属性-repo（REPO）) | REPO | 整型 | 否 | 否 | 是 |
| 16 | [name](#属性-name（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 否 |
| 17 | [id](#属性-id（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 18 | [lastTag](#属性-lastTag（LASTTAG）) | LASTTAG | 文本，可指定长度 | 否 | 否 | 是 |
| 19 | [atTime](#属性-atTime（ATTIME）) | ATTIME | 文本，可指定长度 | 否 | 否 | 是 |
| 20 | [editedBy](#属性-editedBy（EDITEDBY）) | EDITEDBY | 文本，可指定长度 | 否 | 否 | 是 |

### 属性-逻辑删除标志（DELETED）
#### 属性说明
逻辑删除标志

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

### 属性-editedDate（EDITEDDATE）
#### 属性说明
editedDate

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
无

### 属性-product（PRODUCT）
#### 属性说明
product

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
无

### 属性-lastStatus（LASTSTATUS）
#### 属性说明
lastStatus

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

### 属性-createdDate（CREATEDDATE）
#### 属性说明
createdDate

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
无

### 属性-createdBy（CREATEDBY）
#### 属性说明
createdBy

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

### 属性-triggerType（TRIGGERTYPE）
#### 属性说明
triggerType

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

### 属性-comment（COMMENT）
#### 属性说明
comment

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

### 属性-lastExec（LASTEXEC）
#### 属性说明
lastExec

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
无

### 属性-jkHost（JKHOST）
#### 属性说明
jkHost

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
无

### 属性-frame（FRAME）
#### 属性说明
frame

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

### 属性-atDay（ATDAY）
#### 属性说明
atDay

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

### 属性-jkJob（JKJOB）
#### 属性说明
jkJob

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

### 属性-svnDir（SVNDIR）
#### 属性说明
svnDir

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

### 属性-repo（REPO）
#### 属性说明
repo

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
无

### 属性-name（NAME）
#### 属性说明
name

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
无

### 属性-lastTag（LASTTAG）
#### 属性说明
lastTag

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

### 属性-atTime（ATTIME）
#### 属性说明
atTime

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

### 属性-editedBy（EDITEDBY）
#### 属性说明
editedBy

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
| 1 | [name（NAME）](#属性-name（NAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [name（NAME）](#属性-name（NAME）) | `%like%` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 2 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
t1.`ATDAY`,
t1.`ATTIME`,
t1.`COMMENT`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DELETED`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`FRAME`,
t1.`ID`,
t1.`JKHOST`,
t1.`JKJOB`,
t1.`LASTEXEC`,
t1.`LASTSTATUS`,
t1.`LASTTAG`,
t1.`NAME`,
t1.`PRODUCT`,
t1.`REPO`,
t1.`SVNDIR`,
t1.`TRIGGERTYPE`
FROM `zt_job` t1 

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
t1.`ATDAY`,
t1.`ATTIME`,
t1.`COMMENT`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DELETED`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`FRAME`,
t1.`ID`,
t1.`JKHOST`,
t1.`JKJOB`,
t1.`LASTEXEC`,
t1.`LASTSTATUS`,
t1.`LASTTAG`,
t1.`NAME`,
t1.`PRODUCT`,
t1.`REPO`,
t1.`SVNDIR`,
t1.`TRIGGERTYPE`
FROM `zt_job` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |

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

## 数据导入
无

## 数据导出
无

