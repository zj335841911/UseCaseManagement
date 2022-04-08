
# 实体-外部服务接口(PSSUBSYSSERVICEAPI)
## 实体说明
外部服务接口

## 所属模块
[iBiz系统模型](../ibizsysmodel)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [实体（PSDATAENTITY）](../ibizsysmodel/PSDataEntity) | （默认） |
| 2 | [外部接口实体（PSSUBSYSSADE）](../ibizsysmodel/PSSubSysSADE) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) | （默认） |
| 2 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [外部服务接口名称](#属性-外部服务接口名称（PSSUBSYSSERVICEAPINAME）) | PSSUBSYSSERVICEAPINAME | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 3 | [外部服务接口标识](#属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）) | PSSUBSYSSERVICEAPIID | 全局唯一标识，文本类型，用户不可见 | 是 | 否 | 否 |
| 4 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | 日期时间型 | 否 | 否 | 否 |
| 5 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | 日期时间型 | 否 | 否 | 否 |
| 6 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 7 | [系统模块](#属性-系统模块（PSMODULENAME）) | PSMODULENAME | 外键值文本 | 否 | 是 | 是 |
| 8 | [系统模块](#属性-系统模块（PSMODULEID）) | PSMODULEID | 外键值 | 否 | 是 | 是 |
| 9 | [系统服务接口](#属性-系统服务接口（PSSYSSERVICEAPINAME）) | PSSYSSERVICEAPINAME | 外键值文本 | 否 | 是 | 是 |
| 10 | [系统服务接口](#属性-系统服务接口（PSSYSSERVICEAPIID）) | PSSYSSERVICEAPIID | 外键值 | 否 | 是 | 是 |
| 11 | [系统](#属性-系统（PSSYSTEMID）) | PSSYSTEMID | 文本，可指定长度 | 否 | 是 | 是 |
| 12 | [系统](#属性-系统（PSSYSTEMNAME）) | PSSYSTEMNAME | 文本，可指定长度 | 否 | 是 | 是 |

### 属性-外部服务接口名称（PSSUBSYSSERVICEAPINAME）
#### 属性说明
外部服务接口名称

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-外部服务接口标识（PSSUBSYSSERVICEAPIID）
#### 属性说明
外部服务接口标识

- 是否是主键
是

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
全局唯一标识，文本类型，用户不可见

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统模块（PSMODULENAME）
#### 属性说明
系统模块

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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块名称（PSMODULENAME）](../ibizsysmodel/PSModule/#属性-系统模块名称（PSMODULENAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统模块（PSMODULEID）
#### 属性说明
系统模块

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值

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
| 关系实体 | [系统模块（PSMODULE）](../ibizsysmodel/PSModule) |
| 关系属性 | [系统模块标识（PSMODULEID）](../ibizsysmodel/PSModule/#属性-系统模块标识（PSMODULEID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统服务接口（PSSYSSERVICEAPINAME）
#### 属性说明
系统服务接口

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口名称（PSSYSSERVICEAPINAME）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口名称（PSSYSSERVICEAPINAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统服务接口（PSSYSSERVICEAPIID）
#### 属性说明
系统服务接口

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统（PSSYSTEMID）
#### 属性说明
系统

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统（PSSYSTEMNAME）
#### 属性说明
系统

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
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
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
| 1 | [外部服务接口名称（PSSUBSYSSERVICEAPINAME）](#属性-外部服务接口名称（PSSUBSYSSERVICEAPINAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [外部服务接口名称（PSSUBSYSSERVICEAPINAME）](#属性-外部服务接口名称（PSSUBSYSSERVICEAPINAME）) | `%like%` |
| 2 | [系统模块（PSMODULENAME）](#属性-系统模块（PSMODULENAME）) | `=` |
| 3 | [系统模块（PSMODULENAME）](#属性-系统模块（PSMODULENAME）) | `%like%` |
| 4 | [系统模块（PSMODULEID）](#属性-系统模块（PSMODULEID）) | `=` |
| 5 | [系统服务接口（PSSYSSERVICEAPINAME）](#属性-系统服务接口（PSSYSSERVICEAPINAME）) | `=` |
| 6 | [系统服务接口（PSSYSSERVICEAPINAME）](#属性-系统服务接口（PSSYSSERVICEAPINAME）) | `%like%` |
| 7 | [系统服务接口（PSSYSSERVICEAPIID）](#属性-系统服务接口（PSSYSSERVICEAPIID）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 2 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`PSMODULEID`,
t11.`PSMODULENAME`,
t1.`PSSUBSYSSERVICEAPIID`,
t1.`PSSUBSYSSERVICEAPINAME`,
t1.`PSSYSSERVICEAPIID`,
t21.`PSSYSSERVICEAPINAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_PSSUBSYSSERVICEAPI` t1 
LEFT JOIN T_PSMODULE t11 ON t1.PSMODULEID = t11.PSMODULEID 
LEFT JOIN T_PSSYSSERVICEAPI t21 ON t1.PSSYSSERVICEAPIID = t21.PSSYSSERVICEAPIID 

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
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`PSMODULEID`,
t11.`PSMODULENAME`,
t1.`PSSUBSYSSERVICEAPIID`,
t1.`PSSUBSYSSERVICEAPINAME`,
t1.`PSSYSSERVICEAPIID`,
t21.`PSSYSSERVICEAPINAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_PSSUBSYSSERVICEAPI` t1 
LEFT JOIN T_PSMODULE t11 ON t1.PSMODULEID = t11.PSMODULEID 
LEFT JOIN T_PSSYSSERVICEAPI t21 ON t1.PSSYSSERVICEAPIID = t21.PSSYSSERVICEAPIID 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据集](#数据集合-数据集（Default）) | Default | 是 |

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

## 数据导入
无

## 数据导出
无

