
# 实体-测试用例统计(IBZ_CASESTATS)
## 实体说明
测试用例统计

## 所属模块
[iBiz增强模块](../ibiz)

## 实体关系
### 1:N
无
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [模块（ZT_MODULE）](../zentao/Module) | （默认） |
| 2 | [产品（ZT_PRODUCT）](../zentao/Product) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [用例编号](#属性-用例编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 是 |
| 2 | [用例标题](#属性-用例标题（TITLE）) | TITLE | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [模块](#属性-模块（MODULE）) | MODULE | 外键值 | 否 | 是 | 是 |
| 4 | [模块名称](#属性-模块名称（MODULENAME）) | MODULENAME | 外键值文本 | 否 | 是 | 是 |
| 5 | [总用例数](#属性-总用例数（TOTALCASE）) | TOTALCASE | 整型 | 否 | 是 | 是 |
| 6 | [通过用例数](#属性-通过用例数（PASSCASE）) | PASSCASE | 整型 | 否 | 是 | 是 |
| 7 | [失败用例数](#属性-失败用例数（FAILCASE）) | FAILCASE | 整型 | 否 | 是 | 是 |
| 8 | [阻塞用例数](#属性-阻塞用例数（BLOCKEDCASE）) | BLOCKEDCASE | 整型 | 否 | 是 | 是 |
| 9 | [总执行数](#属性-总执行数（TOTALRUNCASE）) | TOTALRUNCASE | 整型 | 否 | 是 | 是 |
| 10 | [用例通过率](#属性-用例通过率（PASSRATE）) | PASSRATE | 文本，可指定长度 | 否 | 是 | 是 |
| 11 | [产品](#属性-产品（PRODUCT）) | PRODUCT | 外键值 | 否 | 是 | 是 |

### 属性-用例编号（ID）
#### 属性说明
用例编号

- 是否是主键
是

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
自增标识，整数类型，用户不可见

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
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-用例标题（TITLE）
#### 属性说明
用例标题

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-模块名称（MODULENAME）
#### 属性说明
模块名称

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-总用例数（TOTALCASE）
#### 属性说明
总用例数

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-通过用例数（PASSCASE）
#### 属性说明
通过用例数

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-失败用例数（FAILCASE）
#### 属性说明
失败用例数

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-阻塞用例数（BLOCKEDCASE）
#### 属性说明
阻塞用例数

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-总执行数（TOTALRUNCASE）
#### 属性说明
总执行数

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-用例通过率（PASSRATE）
#### 属性说明
用例通过率

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-产品（PRODUCT）
#### 属性说明
产品

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
| 关系实体 | [产品（ZT_PRODUCT）](../zentao/Product) |
| 关系属性 | [编号（ID）](../zentao/Product/#属性-编号（ID）) |
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
| 1 | [用例标题（TITLE）](#属性-用例标题（TITLE）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [用例标题（TITLE）](#属性-用例标题（TITLE）) | `%like%` |
| 2 | [模块（MODULE）](#属性-模块（MODULE）) | `=` |
| 3 | [模块名称（MODULENAME）](#属性-模块名称（MODULENAME）) | `=` |
| 4 | [模块名称（MODULENAME）](#属性-模块名称（MODULENAME）) | `%like%` |
| 5 | [产品（PRODUCT）](#属性-产品（PRODUCT）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据查询](#数据查询-数据查询（Default）) | Default | 否 |
| 2 | [测试用例统计](#数据查询-测试用例统计（TestCaseStats）) | TestCaseStats | 否 |
| 3 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
0 AS `BLOCKEDCASE`,
0 AS `FAILCASE`,
t1.`ID`,
t1.`MODULE`,
0 AS `PASSCASE`,
t1.`PRODUCT`,
t1.`TITLE`,
0 AS `TOTALCASE`,
0 AS `TOTALRUNCASE`
FROM `zt_case` t1 

```
### 数据查询-测试用例统计（TestCaseStats）
#### 说明
测试用例统计

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select 
* 
from
(select 
0 as Module,
'/' as ModuleName, 
t1.id as Product, 
count(distinct t2.id) as TotalCase, 
sum(case when t3.caseResult = 'pass' then 1 else 0 end) as PassCase, 
sum(case when t3.caseResult = 'fail' then 1 else 0 end) as FailCase,
sum(case when t3.caseResult = 'blocked' then 1 else 0 end) as BlockedCase,
sum(case when t3.caseResult is not null then 1 else 0 end) as TotalRunCase,
case when sum(case when t3.caseResult is not null then 1 else 0 end) = 0 then '0.00%' else CONCAT(FORMAT((sum(case when t3.caseResult = 'pass' then 1 else 0 end) / sum(case when t3.caseResult is not null then 1 else 0 end)) * 100, 2),'%') end as PassRate
from zt_product t1 
left join zt_case t2 on t2.deleted = '0' and t2.module = 0 and t1.id = t2.product 
left join zt_testresult t3 on t2.id = t3.`case`
where t1.deleted = '0'
group by t1.id
union
select
t1.id as Module, 
case when t1.parent > 0 then (SELECT GROUP_CONCAT( tt.`name` SEPARATOR '/' ) FROM zt_module tt WHERE FIND_IN_SET( tt.id, t1.path )) ELSE t1.`name` END as ModuleName, 
t1.root as Product, 
count(distinct t2.id) as TotalCase, 
sum(case when t3.caseResult = 'pass' then 1 else 0 end) as PassCase, 
sum(case when t3.caseResult = 'fail' then 1 else 0 end) as FailCase,
sum(case when t3.caseResult = 'blocked' then 1 else 0 end) as BlockedCase,
sum(case when t3.caseResult is not null then 1 else 0 end) as TotalRunCase,
case when sum(case when t3.caseResult is not null then 1 else 0 end) = 0 then '0.00%' else CONCAT(FORMAT((sum(case when t3.caseResult = 'pass' then 1 else 0 end) / sum(case when t3.caseResult is not null then 1 else 0 end)) * 100, 2),'%') end as PassRate
from
zt_module t1
left join zt_case t2 on t1.id = t2.module and t2.deleted = '0' 
left join zt_testresult t3 on t2.id = t3.`case`
where t1.deleted = '0' and t1.type = 'story'
group by t1.id) t1
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
0 AS `BLOCKEDCASE`,
0 AS `FAILCASE`,
t1.`ID`,
t1.`MODULE`,
0 AS `PASSCASE`,
t1.`PRODUCT`,
t1.`TITLE`,
0 AS `TOTALCASE`,
0 AS `TOTALRUNCASE`
FROM `zt_case` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [数据集](#数据集合-数据集（Default）) | Default | 是 |
| 2 | [测试用例统计](#数据集合-测试用例统计（TestCaseStats）) | TestCaseStats | 否 |

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
### 数据集合-测试用例统计（TestCaseStats）
#### 说明
测试用例统计

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [测试用例统计（TestCaseStats）](#数据查询-测试用例统计（TestCaseStats）) |

## 数据导入
无

## 数据导出
无

