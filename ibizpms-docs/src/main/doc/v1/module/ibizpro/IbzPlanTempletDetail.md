
# 实体-计划模板详情(IBZ_PLANTEMPLETDETAIL)
## 实体说明
计划模板详情

## 所属模块
[iBizPro模块](../ibizpro)

## 实体关系
### 1:N
无
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [计划模板（IBZ_PLANTEMPLET）](../ibizpro/IbzPlanTemplet) | 嵌套操作 |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [计划模板详情标识](#属性-计划模板详情标识（IBZ_PLANTEMPLETDETAILID）) | IBZ_PLANTEMPLETDETAILID | 全局唯一标识，文本类型，用户不可见 | 是 | 否 | 否 |
| 2 | [计划模板详情名称](#属性-计划模板详情名称（IBZ_PLANTEMPLETDETAILNAME）) | IBZ_PLANTEMPLETDETAILNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 4 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | 日期时间型 | 否 | 否 | 否 |
| 5 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 6 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | 日期时间型 | 否 | 否 | 否 |
| 7 | [产品计划模板标识](#属性-产品计划模板标识（PLANTEMPLETID）) | PLANTEMPLETID | 外键值 | 否 | 是 | 是 |
| 8 | [计划编号](#属性-计划编号（PLANCODE）) | PLANCODE | 文本，可指定长度 | 否 | 是 | 是 |
| 9 | [排序](#属性-排序（ORDER）) | ORDER | 整型 | 否 | 是 | 是 |
| 10 | [计划名称](#属性-计划名称（DESC）) | DESC | HTML文本，没有长度限制 | 否 | 是 | 是 |
| 11 | [描述](#属性-描述（EXPECT）) | EXPECT | HTML文本，没有长度限制 | 否 | 是 | 是 |
| 12 | [类型](#属性-类型（TYPE）) | TYPE | 单项选择(文本值) | 否 | 是 | 是 |

### 属性-计划模板详情标识（IBZ_PLANTEMPLETDETAILID）
#### 属性说明
计划模板详情标识

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
| 关系实体 | [计划模板（IBZ_PLANTEMPLET）](../ibizpro/IbzPlanTemplet) |
| 关系属性 | [产品计划模板标识（IBZ_PLANTEMPLETID）](../ibizpro/IbzPlanTemplet/#属性-产品计划模板标识（IBZ_PLANTEMPLETID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-计划模板详情名称（IBZ_PLANTEMPLETDETAILNAME）
#### 属性说明
计划模板详情名称

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
| 关系实体 | [计划模板（IBZ_PLANTEMPLET）](../ibizpro/IbzPlanTemplet) |
| 关系属性 | [产品计划模板标识（IBZ_PLANTEMPLETID）](../ibizpro/IbzPlanTemplet/#属性-产品计划模板标识（IBZ_PLANTEMPLETID）) |
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
| 关系实体 | [计划模板（IBZ_PLANTEMPLET）](../ibizpro/IbzPlanTemplet) |
| 关系属性 | [产品计划模板标识（IBZ_PLANTEMPLETID）](../ibizpro/IbzPlanTemplet/#属性-产品计划模板标识（IBZ_PLANTEMPLETID）) |
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
| 关系实体 | [计划模板（IBZ_PLANTEMPLET）](../ibizpro/IbzPlanTemplet) |
| 关系属性 | [产品计划模板标识（IBZ_PLANTEMPLETID）](../ibizpro/IbzPlanTemplet/#属性-产品计划模板标识（IBZ_PLANTEMPLETID）) |
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
| 关系实体 | [计划模板（IBZ_PLANTEMPLET）](../ibizpro/IbzPlanTemplet) |
| 关系属性 | [产品计划模板标识（IBZ_PLANTEMPLETID）](../ibizpro/IbzPlanTemplet/#属性-产品计划模板标识（IBZ_PLANTEMPLETID）) |
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
| 关系实体 | [计划模板（IBZ_PLANTEMPLET）](../ibizpro/IbzPlanTemplet) |
| 关系属性 | [产品计划模板标识（IBZ_PLANTEMPLETID）](../ibizpro/IbzPlanTemplet/#属性-产品计划模板标识（IBZ_PLANTEMPLETID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-产品计划模板标识（PLANTEMPLETID）
#### 属性说明
产品计划模板标识

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
| 关系实体 | [计划模板（IBZ_PLANTEMPLET）](../ibizpro/IbzPlanTemplet) |
| 关系属性 | [产品计划模板标识（IBZ_PLANTEMPLETID）](../ibizpro/IbzPlanTemplet/#属性-产品计划模板标识（IBZ_PLANTEMPLETID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-计划编号（PLANCODE）
#### 属性说明
计划编号

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
| 关系实体 | [计划模板（IBZ_PLANTEMPLET）](../ibizpro/IbzPlanTemplet) |
| 关系属性 | [产品计划模板标识（IBZ_PLANTEMPLETID）](../ibizpro/IbzPlanTemplet/#属性-产品计划模板标识（IBZ_PLANTEMPLETID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-排序（ORDER）
#### 属性说明
排序

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
| 值 | 10 |

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
| 关系实体 | [计划模板（IBZ_PLANTEMPLET）](../ibizpro/IbzPlanTemplet) |
| 关系属性 | [产品计划模板标识（IBZ_PLANTEMPLETID）](../ibizpro/IbzPlanTemplet/#属性-产品计划模板标识（IBZ_PLANTEMPLETID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-计划名称（DESC）
#### 属性说明
计划名称

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [计划模板（IBZ_PLANTEMPLET）](../ibizpro/IbzPlanTemplet) |
| 关系属性 | [产品计划模板标识（IBZ_PLANTEMPLETID）](../ibizpro/IbzPlanTemplet/#属性-产品计划模板标识（IBZ_PLANTEMPLETID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-描述（EXPECT）
#### 属性说明
描述

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [计划模板（IBZ_PLANTEMPLET）](../ibizpro/IbzPlanTemplet) |
| 关系属性 | [产品计划模板标识（IBZ_PLANTEMPLETID）](../ibizpro/IbzPlanTemplet/#属性-产品计划模板标识（IBZ_PLANTEMPLETID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-类型（TYPE）
#### 属性说明
类型

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
参照数据字典【[计划模板类型（PlantempletType）](../../codelist/PlantempletType)】

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
| 关系实体 | [计划模板（IBZ_PLANTEMPLET）](../ibizpro/IbzPlanTemplet) |
| 关系属性 | [产品计划模板标识（IBZ_PLANTEMPLETID）](../ibizpro/IbzPlanTemplet/#属性-产品计划模板标识（IBZ_PLANTEMPLETID）) |
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
| 17 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |

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
| 1 | [计划模板详情名称（IBZ_PLANTEMPLETDETAILNAME）](#属性-计划模板详情名称（IBZ_PLANTEMPLETDETAILNAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [计划模板详情名称（IBZ_PLANTEMPLETDETAILNAME）](#属性-计划模板详情名称（IBZ_PLANTEMPLETDETAILNAME）) | `%like%` |
| 2 | [产品计划模板标识（PLANTEMPLETID）](#属性-产品计划模板标识（PLANTEMPLETID）) | `=` |
| 3 | [类型（TYPE）](#属性-类型（TYPE）) | `=` |

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
t1.`IBZ_PLANTEMPLETDETAILID`,
t1.`IBZ_PLANTEMPLETDETAILNAME`,
t1.`ORDER`,
t1.`PLANCODE`,
t1.`PLANTEMPLETID`,
t1.`TYPE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`DESC`,
t1.`EXPECT`
FROM `T_IBZ_PLANTEMPLETDETAIL` t1 

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
t1.`DESC`,
t1.`EXPECT`,
t1.`IBZ_PLANTEMPLETDETAILID`,
t1.`IBZ_PLANTEMPLETDETAILNAME`,
t1.`ORDER`,
t1.`PLANCODE`,
t1.`PLANTEMPLETID`,
t1.`TYPE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_IBZ_PLANTEMPLETDETAIL` t1 

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

