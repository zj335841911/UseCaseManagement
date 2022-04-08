
# 实体-用例步骤(ZT_CASESTEP)
## 实体说明
用例步骤

## 所属模块
[基础管理模块](../zentao)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [用例步骤（ZT_CASESTEP）](../zentao/CaseStep) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [测试用例（ZT_CASE）](../zentao/Case) | 嵌套操作 |
| 2 | [用例步骤（ZT_CASESTEP）](../zentao/CaseStep) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [用例步骤类型](#属性-用例步骤类型（TYPE）) | TYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 2 | [编号](#属性-编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 3 | [步骤](#属性-步骤（DESC）) | DESC | 长文本，没有长度限制 | 否 | 否 | 是 |
| 4 | [预期](#属性-预期（EXPECT）) | EXPECT | 长文本，没有长度限制 | 否 | 否 | 是 |
| 5 | [用例版本](#属性-用例版本（VERSION）) | VERSION | 外键值附加数据 | 否 | 是 | 是 |
| 6 | [用例](#属性-用例（CASE）) | CASE | 外键值 | 否 | 是 | 是 |
| 7 | [分组用例步骤的组编号](#属性-分组用例步骤的组编号（PARENT）) | PARENT | 外键值 | 否 | 是 | 是 |
| 8 | [实际情况](#属性-实际情况（REALS）) | REALS | 文本，可指定长度 | 否 | 是 | 是 |
| 9 | [测试结果](#属性-测试结果（STEPS）) | STEPS | 单项选择(文本值) | 否 | 是 | 是 |
| 10 | [附件](#属性-附件（FILES）) | FILES | 文本，可指定长度 | 否 | 是 | 是 |
| 11 | [执行编号](#属性-执行编号（RUNID）) | RUNID | 整型 | 否 | 是 | 是 |
| 12 | [用例步骤编号](#属性-用例步骤编号（CASESTEPID）) | CASESTEPID | 大整型 | 否 | 是 | 是 |

### 属性-用例步骤类型（TYPE）
#### 属性说明
用例步骤类型

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
| 值 | step |

- 取值范围/公式
参照数据字典【[用例步骤类型（Casestep__type）](../../codelist/Casestep__type)】

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
| 关系实体 | [用例步骤（ZT_CASESTEP）](../zentao/CaseStep) |
| 关系属性 | [编号（ID）](../zentao/CaseStep/#属性-编号（ID）) |
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
否

- 搜索条件
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [用例步骤（ZT_CASESTEP）](../zentao/CaseStep) |
| 关系属性 | [编号（ID）](../zentao/CaseStep/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-步骤（DESC）
#### 属性说明
步骤

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
| 关系实体 | [用例步骤（ZT_CASESTEP）](../zentao/CaseStep) |
| 关系属性 | [编号（ID）](../zentao/CaseStep/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-预期（EXPECT）
#### 属性说明
预期

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
是

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `%like%` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [用例步骤（ZT_CASESTEP）](../zentao/CaseStep) |
| 关系属性 | [编号（ID）](../zentao/CaseStep/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-用例版本（VERSION）
#### 属性说明
用例版本

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
外键值附加数据

- Java类型
Integer

- 是否允许为空
是

- 默认值
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 0 |

- 取值范围/公式
参照数据字典【[当前用例版本（动态）（CurCaseVersion）](../../codelist/CurCaseVersion)】

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
| 关系实体 | [测试用例（ZT_CASE）](../zentao/Case) |
| 关系属性 | [用例版本（VERSION）](../zentao/Case/#属性-用例版本（VERSION）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-用例（CASE）
#### 属性说明
用例

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
| 关系实体 | [测试用例（ZT_CASE）](../zentao/Case) |
| 关系属性 | [用例编号（ID）](../zentao/Case/#属性-用例编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-分组用例步骤的组编号（PARENT）
#### 属性说明
分组用例步骤的组编号

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
| 关系实体 | [用例步骤（ZT_CASESTEP）](../zentao/CaseStep) |
| 关系属性 | [编号（ID）](../zentao/CaseStep/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-实际情况（REALS）
#### 属性说明
实际情况

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
| 关系实体 | [用例步骤（ZT_CASESTEP）](../zentao/CaseStep) |
| 关系属性 | [编号（ID）](../zentao/CaseStep/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-测试结果（STEPS）
#### 属性说明
测试结果

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
参照数据字典【[测试结果（Testresult__result）](../../codelist/Testresult__result)】

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
| 关系实体 | [用例步骤（ZT_CASESTEP）](../zentao/CaseStep) |
| 关系属性 | [编号（ID）](../zentao/CaseStep/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [用例步骤（ZT_CASESTEP）](../zentao/CaseStep) |
| 关系属性 | [编号（ID）](../zentao/CaseStep/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-执行编号（RUNID）
#### 属性说明
执行编号

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
| 关系实体 | [用例步骤（ZT_CASESTEP）](../zentao/CaseStep) |
| 关系属性 | [编号（ID）](../zentao/CaseStep/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-用例步骤编号（CASESTEPID）
#### 属性说明
用例步骤编号

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
| 关系实体 | [用例步骤（ZT_CASESTEP）](../zentao/CaseStep) |
| 关系属性 | [编号（ID）](../zentao/CaseStep/#属性-编号（ID）) |
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
| 1 | [预期（EXPECT）](#属性-预期（EXPECT）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [用例步骤类型（TYPE）](#属性-用例步骤类型（TYPE）) | `=` |
| 2 | [预期（EXPECT）](#属性-预期（EXPECT）) | `%like%` |
| 3 | [用例版本（VERSION）](#属性-用例版本（VERSION）) | `=` |
| 4 | [用例（CASE）](#属性-用例（CASE）) | `=` |
| 5 | [分组用例步骤的组编号（PARENT）](#属性-分组用例步骤的组编号（PARENT）) | `=` |
| 6 | [测试结果（STEPS）](#属性-测试结果（STEPS）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [当前测试步骤](#数据查询-当前测试步骤（CurTest）) | CurTest | 否 |
| 2 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 是 |
| 3 | [DEFAULT1](#数据查询-DEFAULT1（Default1）) | Default1 | 否 |
| 4 | [Mob](#数据查询-Mob（Mob）) | Mob | 否 |
| 5 | [版本](#数据查询-版本（Version）) | Version | 否 |
| 6 | [版本1](#数据查询-版本1（Versions）) | Versions | 否 |
| 7 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-当前测试步骤（CurTest）
#### 说明
当前测试步骤

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`CASE`,
t1.`DESC`,
t1.`EXPECT`,
t1.`ID`,
t1.id AS `CASESTEPID`,
t1.`PARENT`,
t1.`TYPE`,
t1.`VERSION`,
t21.stepResults as STEPS
FROM `zt_casestep` t1 
RIGHT JOIN zt_case t11 ON t1.`CASE` = t11.ID 
LEFT OUTER JOIN zt_testresult t21 ON t11.ID = t21.`CASE`  AND t1.version = t21.version

```
### 数据查询-DEFAULT（Default）
#### 说明
DEFAULT

- 默认查询
是

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.`CASE`,
	t1.`DESC`,
	t1.`EXPECT`,
        t1.id AS `CASESTEPID`,
	t1.`ID`,
	@rownum := @rownum + 1 AS RUNID,
	t1.`PARENT`,
	t1.`TYPE`,
	t1.`VERSION` 
FROM
	`zt_casestep` t1, (select @rownum := 0) m 

```
### 数据查询-DEFAULT1（Default1）
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
t1.`CASE`,
t1.id AS `CASESTEPID`,
t1.`DESC`,
t1.`EXPECT`,
t1.`ID`,
t1.`PARENT`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_casestep` t1 

```
### 数据查询-Mob（Mob）
#### 说明
Mob

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.`CASE`,
	t1.`DESC`,
	t1.`EXPECT`,
	t1.`ID`,
        t1.id AS `CASESTEPID`,
	t1.`PARENT`,
	t1.`TYPE`,
	t1.`VERSION` 
FROM
	`zt_casestep` t1
	inner JOIN zt_case t11 ON t1.`case` = t11.id 
	AND t1.version = t11.version
```
### 数据查询-版本（Version）
#### 说明
版本

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT t1.`CASE`,t1.type,t1.parent,t1.expect,t1.`desc`, t1.`ID`, t1.`VERSION` FROM `zt_casestep` t1
```
### 数据查询-版本1（Versions）
#### 说明
版本1

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.ID,t1.`case`,t1.VERSION,CONCAT('#',t1.VERSION) as expect
FROM
	(
SELECT
	t1.`ID`,
	t1.`CASE`,
	t1.`VERSION` 
FROM
	`zt_casestep` t1 where t1.version <> 1 
GROUP BY
	t1.`CASE`,
	t1.`VERSION` UNION ALL
SELECT
	1 AS ID,
	t1.`id` AS `CASE`,
	1 AS `VERSION` 
FROM
	zt_case t1 

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
t1.`CASE`,
t1.id AS `CASESTEPID`,
t1.`DESC`,
t1.`EXPECT`,
t1.`ID`,
t1.`PARENT`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_casestep` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [当前测试步骤](#数据集合-当前测试步骤（CurTest）) | CurTest | 否 |
| 2 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 3 | [DEFAULT1](#数据集合-DEFAULT1（Default1）) | Default1 | 否 |
| 4 | [Mob](#数据集合-Mob（Mob）) | Mob | 否 |
| 5 | [版本](#数据集合-版本（Version）) | Version | 否 |
| 6 | [版本1](#数据集合-版本1（Versions）) | Versions | 否 |

### 数据集合-当前测试步骤（CurTest）
#### 说明
当前测试步骤

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [当前测试步骤（CurTest）](#数据查询-当前测试步骤（CurTest）) |
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
### 数据集合-DEFAULT1（Default1）
#### 说明
DEFAULT1

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [DEFAULT1（Default1）](#数据查询-DEFAULT1（Default1）) |
### 数据集合-Mob（Mob）
#### 说明
Mob

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [Mob（Mob）](#数据查询-Mob（Mob）) |
### 数据集合-版本（Version）
#### 说明
版本

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [版本（Version）](#数据查询-版本（Version）) |
### 数据集合-版本1（Versions）
#### 说明
版本1

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [版本1（Versions）](#数据查询-版本1（Versions）) |

## 数据导入
无

## 数据导出
无

