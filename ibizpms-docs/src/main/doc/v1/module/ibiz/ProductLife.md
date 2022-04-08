
# 实体-产品生命周期(IBZ_PRODUCTLIFE)
## 实体说明
产品生命周期

## 所属模块
[iBiz增强模块](../ibiz)

## 实体关系
### 1:N
无
### N:1
无


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [平台/分支](#属性-平台/分支（BRANCH）) | BRANCH | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 3 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | 日期时间型 | 否 | 否 | 否 |
| 4 | [产品生命周期名称](#属性-产品生命周期名称（IBZ_PRODUCTLIFENAME）) | IBZ_PRODUCTLIFENAME | 文本，可指定长度 | 否 | 否 | 是 |
| 5 | [产品](#属性-产品（PRODUCT）) | PRODUCT | 整型 | 否 | 否 | 是 |
| 6 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | 日期时间型 | 否 | 否 | 否 |
| 7 | [父对象](#属性-父对象（PARENT）) | PARENT | 文本，可指定长度 | 否 | 否 | 是 |
| 8 | [年](#属性-年（YEAR）) | YEAR | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 10 | [属性](#属性-属性（TYPE）) | TYPE | 文本，可指定长度 | 否 | 否 | 是 |
| 11 | [里程碑](#属性-里程碑（MARKER）) | MARKER | 是否逻辑 | 否 | 否 | 是 |
| 12 | [开始日期](#属性-开始日期（BEGIN）) | BEGIN | 日期型 | 否 | 否 | 是 |
| 13 | [产品生命周期标识](#属性-产品生命周期标识（IBZ_PRODUCTLIFEID）) | IBZ_PRODUCTLIFEID | 全局唯一标识，文本类型，用户不可见 | 是 | 否 | 否 |
| 14 | [结束日期](#属性-结束日期（END）) | END | 日期型 | 否 | 否 | 是 |

### 属性-平台/分支（BRANCH）
#### 属性说明
平台/分支

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

### 属性-产品生命周期名称（IBZ_PRODUCTLIFENAME）
#### 属性说明
产品生命周期名称

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

### 属性-产品（PRODUCT）
#### 属性说明
产品

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

### 属性-父对象（PARENT）
#### 属性说明
父对象

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

### 属性-年（YEAR）
#### 属性说明
年

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

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

### 属性-属性（TYPE）
#### 属性说明
属性

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

### 属性-里程碑（MARKER）
#### 属性说明
里程碑

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
是否逻辑

- Java类型
Integer

- 是否允许为空
是

- 默认值
无

- 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-开始日期（BEGIN）
#### 属性说明
开始日期

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

### 属性-产品生命周期标识（IBZ_PRODUCTLIFEID）
#### 属性说明
产品生命周期标识

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
无

### 属性-结束日期（END）
#### 属性说明
结束日期

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
| 1 | [产品生命周期名称（IBZ_PRODUCTLIFENAME）](#属性-产品生命周期名称（IBZ_PRODUCTLIFENAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [产品生命周期名称（IBZ_PRODUCTLIFENAME）](#属性-产品生命周期名称（IBZ_PRODUCTLIFENAME）) | `%like%` |
| 2 | [年（YEAR）](#属性-年（YEAR）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 2 | [获取产品路线](#数据查询-获取产品路线（GetRoadmap）) | GetRoadmap | 否 |
| 3 | [获取产品路线](#数据查询-获取产品路线（GetRoadmapS）) | GetRoadmapS | 否 |
| 4 | [获取路线图年份](#数据查询-获取路线图年份（RoadMapYear）) | RoadMapYear | 否 |
| 5 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
t1.`BEGIN`,
t1.`BRANCH`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`END`,
t1.`IBZ_PRODUCTLIFEID`,
t1.`IBZ_PRODUCTLIFENAME`,
t1.`MARKER`,
t1.`PARENT`,
t1.`PRODUCT`,
t1.`TYPE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`YEAR`
FROM `T_IBZ_PRODUCTLIFE` t1 

```
### 数据查询-获取产品路线（GetRoadmap）
#### 说明
获取产品路线

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	*
FROM
	(
		(
			SELECT
				t111.*
			FROM
				(
					SELECT
						CONCAT(
							t1.product,
							'-productplan-',
							t1.id
						) AS ibz_productlifeid,
						CASE
					WHEN t11.title IS NULL THEN
						t1.title
					ELSE
						CONCAT(t11.title, '/', t1.title)
					END AS ibz_productlifename,
					t1.product AS product,
					t1.branch AS branch,
					t1.parent AS parent,
					'productplan' AS type,
					t1.`begin` AS `begin`,
					t1.`end` AS `end`,
					LEFT (t1.`end`, 4) AS `year`,
					null AS marker
				FROM
					zt_productplan t1
				LEFT JOIN zt_productplan t11 ON t1.parent = t11.id
				WHERE
					t1.DELETED = '0'
				AND t1.product = ${srfdatacontext('product','{"defname":"product","dename":"IBZ_PRODUCTLIFE"}')}
				AND t1.parent != '-1'
				AND (#{srf.datacontext.branch} is null or t1.branch =  #{srf.datacontext.branch})
				AND LEFT (t1.`end`, 4) = ${srfdatacontext('year','{"defname":"year","dename":"IBZ_PRODUCTLIFE"}')}
				) t111,
				(
					SELECT
						(
							CASE
							WHEN max(date) IS NULL THEN
								0
							ELSE
								max(date)
							END
						) AS `lastdata`
					FROM
						zt_release
					WHERE
						DELETED = '0'
					AND product = ${srfdatacontext('product','{"defname":"product","dename":"IBZ_PRODUCTLIFE"}')}
					AND (#{srf.datacontext.branch} is null or branch =  #{srf.datacontext.branch})
				) t112
			WHERE
				t111.`end` > t112.lastdata
		)
		UNION
			(
				SELECT
					CONCAT(
						t2.product,
						'-release-',
						t2.id
					) AS ibz_productlifeid,
					t2.`name` AS ibz_productlifename,
					t2.product AS product,
					t2.branch AS branch,
					null AS parent,
					'release' AS type,
					null AS `begin`,
					t2.`date` AS `end`,
					LEFT (t2.`date`, 4) AS `year`,
					t2.marker AS marker
				FROM
					zt_release t2
				WHERE
					t2.DELETED = '0'
				AND t2.product = ${srfdatacontext('product','{"defname":"product","dename":"IBZ_PRODUCTLIFE"}')}
				AND LEFT (t2.`date`, 4) = ${srfdatacontext('year','{"defname":"year","dename":"IBZ_PRODUCTLIFE"}')}
				AND (#{srf.datacontext.branch} is null or t2.branch =  #{srf.datacontext.branch})
			)
	) AS ibz_productlife
ORDER BY
	`end`  ASC
```
### 数据查询-获取产品路线（GetRoadmapS）
#### 说明
获取产品路线

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT * FROM ( ( SELECT t111.* FROM ( SELECT CONCAT( t1.product, '-productplan-', t1.id ) AS ibz_productlifeid, CASE WHEN t11.title IS NULL THEN t1.title ELSE CONCAT(t11.title, '/', t1.title) END AS ibz_productlifename, t1.product AS product, t1.branch AS branch, t1.parent AS parent, 'productplan' AS type, t1.`begin` AS `begin`, t1.`end` AS `end`, LEFT (t1.`end`, 4) AS `year`, null AS marker FROM zt_productplan t1 LEFT JOIN zt_productplan t11 ON t1.parent = t11.id WHERE t1.DELETED = '0' AND t1.product = ${srfdatacontext('product','{"defname":"product","dename":"IBZ_PRODUCTLIFE"}')} AND t1.parent != '-1' AND (#{srf.datacontext.branch} is null or t1.branch = #{srf.datacontext.branch}) AND LEFT (t1.`end`, 4) = ${srfdatacontext('year','{"defname":"year","dename":"IBZ_PRODUCTLIFE"}')} ) t111, ( SELECT ( CASE WHEN max(date) IS NULL THEN 0 ELSE max(date) END ) AS `lastdata` FROM zt_release WHERE DELETED = '0' AND product = ${srfdatacontext('product','{"defname":"product","dename":"IBZ_PRODUCTLIFE"}')} AND (#{srf.datacontext.branch} is null or branch = #{srf.datacontext.branch}) ) t112 WHERE t111.`end` > t112.lastdata ) UNION ( SELECT CONCAT( t2.product, '-release-', t2.id ) AS ibz_productlifeid, t2.`name` AS ibz_productlifename, t2.product AS product, t2.branch AS branch, null AS parent, 'release' AS type, t2.`date` AS `begin`, t2.`date` AS `end`, LEFT (t2.`date`, 4) AS `year`, t2.marker AS marker FROM zt_release t2 WHERE t2.DELETED = '0' AND t2.product = ${srfdatacontext('product','{"defname":"product","dename":"IBZ_PRODUCTLIFE"}')} AND LEFT (t2.`date`, 4) = ${srfdatacontext('year','{"defname":"year","dename":"IBZ_PRODUCTLIFE"}')} AND (#{srf.datacontext.branch} is null or t2.branch = #{srf.datacontext.branch}) ) ) AS ibz_productlife
```
### 数据查询-获取路线图年份（RoadMapYear）
#### 说明
注意，前期因为禅道会将未设置的时间置为2030-01-01，所以针对大于等于2030年的均不作展示处理

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	*
FROM
	(
		(
			SELECT DISTINCT
				LEFT (`end`, 4) AS `year`
			FROM
				zt_productplan,
				(
					SELECT
						(
							CASE
							WHEN MIN(LEFT(`date`, 4)) IS NULL THEN
								0
							ELSE
								MIN(LEFT(`date`, 4))
							END
						) AS `minyear`
					FROM
						zt_release
					WHERE
						deleted = '0'
					AND product = ${srfdatacontext('product','{"defname":"product","dename":"IBZ_PRODUCTLIFE"}')}
					AND (#{srf.datacontext.branch} is null or branch =  #{srf.datacontext.branch})
				) ztr
			WHERE
				deleted = '0'
			AND product = ${srfdatacontext('product','{"defname":"product","dename":"IBZ_PRODUCTLIFE"}')}
			AND (#{srf.datacontext.branch} is null or branch =  #{srf.datacontext.branch})
			AND LEFT (`end`, 4) < '2030'
			AND LEFT (`end`, 4) > `minyear`
		)
		UNION
			(
				SELECT DISTINCT
					LEFT (`date`, 4) AS `year`
				FROM
					zt_release
				WHERE
					deleted = '0'
				AND product = ${srfdatacontext('product','{"defname":"product","dename":"IBZ_PRODUCTLIFE"}')}
				AND (#{srf.datacontext.branch} is null or branch =  #{srf.datacontext.branch})
			)
	) as ibz_productlife
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
t1.`BEGIN`,
t1.`BRANCH`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`END`,
t1.`IBZ_PRODUCTLIFEID`,
t1.`IBZ_PRODUCTLIFENAME`,
t1.`MARKER`,
t1.`PARENT`,
t1.`PRODUCT`,
t1.`TYPE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`YEAR`
FROM `T_IBZ_PRODUCTLIFE` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 2 | [GetRoadmap](#数据集合-GetRoadmap（GetRoadmap）) | GetRoadmap | 否 |
| 3 | [获取产品路线](#数据集合-获取产品路线（GetRoadmapS）) | GetRoadmapS | 否 |
| 4 | [RoadMapYear](#数据集合-RoadMapYear（RoadMapYear）) | RoadMapYear | 否 |

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
### 数据集合-GetRoadmap（GetRoadmap）
#### 说明
GetRoadmap

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [获取产品路线（GetRoadmap）](#数据查询-获取产品路线（GetRoadmap）) |
### 数据集合-获取产品路线（GetRoadmapS）
#### 说明
获取产品路线

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [获取产品路线（GetRoadmapS）](#数据查询-获取产品路线（GetRoadmapS）) |
### 数据集合-RoadMapYear（RoadMapYear）
#### 说明
RoadMapYear

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [获取路线图年份（RoadMapYear）](#数据查询-获取路线图年份（RoadMapYear）) |

## 数据导入
无

## 数据导出
无

