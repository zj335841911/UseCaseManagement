
# 实体-模块(ZT_MODULE)
## 实体说明
模块

## 所属模块
[基础管理模块](../zentao)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [测试用例统计（IBZ_CASESTATS）](../ibiz/CaseStats) | （默认） |
| 2 | [Bug（ZT_BUG）](../zentao/Bug) | （默认） |
| 3 | [测试用例（ZT_CASE）](../zentao/Case) | （默认） |
| 4 | [文档（ZT_DOC）](../zentao/Doc) | （默认） |
| 5 | [产品（ZT_PRODUCT）](../zentao/Product) | （默认） |
| 6 | [模块（ZT_MODULE）](../zentao/Module) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) | （默认） |
| 2 | [模块（ZT_MODULE）](../zentao/Module) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [所属根](#属性-所属根（ROOT）) | ROOT | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [级别](#属性-级别（GRADE）) | GRADE | 整型 | 否 | 否 | 是 |
| 3 | [类型](#属性-类型（TYPE）) | TYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 4 | [模块名称](#属性-模块名称（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 否 |
| 5 | [排序](#属性-排序（ORDER）) | ORDER | 整型 | 否 | 否 | 是 |
| 6 | [负责人](#属性-负责人（OWNER）) | OWNER | 文本，可指定长度 | 否 | 否 | 是 |
| 7 | [id](#属性-id（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 8 | [收藏者](#属性-收藏者（COLLECTOR）) | COLLECTOR | 长文本，没有长度限制 | 否 | 否 | 是 |
| 9 | [简称](#属性-简称（SHORT）) | SHORT | 文本，可指定长度 | 否 | 否 | 是 |
| 10 | [路径](#属性-路径（PATH）) | PATH | 文本，可指定长度 | 否 | 否 | 是 |
| 11 | [已删除](#属性-已删除（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 12 | [上级模块](#属性-上级模块（PARENTNAME）) | PARENTNAME | 外键值文本 | 否 | 是 | 是 |
| 13 | [平台/分支](#属性-平台/分支（BRANCH）) | BRANCH | 外键值 | 否 | 是 | 是 |
| 14 | [上级模块](#属性-上级模块（PARENT）) | PARENT | 外键值 | 否 | 是 | 是 |
| 15 | [部门标识](#属性-部门标识（MDEPTID）) | MDEPTID | 文本，可指定长度 | 否 | 是 | 是 |
| 16 | [组织标识](#属性-组织标识（ORGID）) | ORGID | 文本，可指定长度 | 否 | 是 | 是 |
| 17 | [数据选择排序](#属性-数据选择排序（ORDERPK）) | ORDERPK | 文本，可指定长度 | 否 | 是 | 是 |

### 属性-所属根（ROOT）
#### 属性说明
所属根

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-级别（GRADE）
#### 属性说明
级别

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
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
参照数据字典【[模块类型（Module__type）](../../codelist/Module__type)】

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

### 属性-模块名称（NAME）
#### 属性说明
模块名称

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-负责人（OWNER）
#### 属性说明
负责人

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
| 值 | / |

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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-收藏者（COLLECTOR）
#### 属性说明
收藏者

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
| 值 | / |

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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-简称（SHORT）
#### 属性说明
简称

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
| 值 | / |

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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-路径（PATH）
#### 属性说明
从根到自己

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
| 值 | , |

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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-已删除（DELETED）
#### 属性说明
已删除

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-上级模块（PARENTNAME）
#### 属性说明
上级模块

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [模块名称（NAME）](../zentao/Module/#属性-模块名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-平台/分支（BRANCH）
#### 属性说明
平台/分支

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
| 关系实体 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) |
| 关系属性 | [编号（ID）](../zentao/Branch/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-上级模块（PARENT）
#### 属性说明
上级模块

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

### 属性-部门标识（MDEPTID）
#### 属性说明
部门标识

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-组织标识（ORGID）
#### 属性说明
组织标识

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-数据选择排序（ORDERPK）
#### 属性说明
数据选择排序

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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
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
| 7 | [重建模块路径](#实体行为-重建模块路径（Fix）) | Fix | 用户自定义 | 后台及前台 |
| 8 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |

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
### 实体行为-重建模块路径（Fix）
#### 说明
重建模块路径

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

## 逻辑处理
无

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [模块名称（NAME）](#属性-模块名称（NAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [所属根（ROOT）](#属性-所属根（ROOT）) | `=` |
| 2 | [类型（TYPE）](#属性-类型（TYPE）) | `=` |
| 3 | [模块名称（NAME）](#属性-模块名称（NAME）) | `%like%` |
| 4 | [上级模块（PARENTNAME）](#属性-上级模块（PARENTNAME）) | `=` |
| 5 | [上级模块（PARENTNAME）](#属性-上级模块（PARENTNAME）) | `%like%` |
| 6 | [平台/分支（BRANCH）](#属性-平台/分支（BRANCH）) | `=` |
| 7 | [上级模块（PARENT）](#属性-上级模块（PARENT）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [BugModule](#数据查询-BugModule（BugModule）) | BugModule | 否 |
| 2 | [数据查询](#数据查询-数据查询（BugModuleCodeList）) | BugModuleCodeList | 否 |
| 3 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 4 | [文档目录查询](#数据查询-文档目录查询（DocModule）) | DocModule | 否 |
| 5 | [产品线](#数据查询-产品线（Line）) | Line | 否 |
| 6 | [需求模块](#数据查询-需求模块（StoryModule）) | StoryModule | 否 |
| 7 | [任务模块](#数据查询-任务模块（TaskModule）) | TaskModule | 否 |
| 8 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-BugModule（BugModule）
#### 说明
BugModule

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.`BRANCH`,
	t1.`DELETED`,
	t1.`GRADE`,
	t1.`ID`,
	CONCAT(
		'/',
	CASE
			
			WHEN t1.parent > 0 THEN
			(
			SELECT
				GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
			FROM
				zt_module tt 
			WHERE
				tt.type = 'story' 
				AND FIND_IN_SET( tt.id, t1.path ) 
			) ELSE t1.`name` 
		END 
		) AS `NAME`,
		(
			CONCAT_ws(
				'',
			CASE
					
					WHEN t1.parent > 0 THEN
					(
					SELECT
						GROUP_CONCAT( tt.`ORDER` SEPARATOR '-' ) 
					FROM
						zt_module tt 
					WHERE
						tt.type = 'story' 
					AND FIND_IN_SET( tt.id, t1.path )) ELSE t1.`ORDER` 
				END 
				)) AS ORDERPK,
			t1.`ORDER`,
			t1.`OWNER`,
		CASE
				
				WHEN t1.`PARENT` = 0 THEN
				NULL ELSE t1.parent 
			END AS parent,
			t11.`NAME` AS `PARENTNAME`,
			t1.`PATH`,
			t1.`ROOT`,
			t1.`SHORT`,
			t1.`TYPE` 
		FROM
			`zt_module` t1
			LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID
```
### 数据查询-数据查询（BugModuleCodeList）
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
	t1.`BRANCH`,
	t1.`DELETED`,
	t1.`GRADE`,
	t1.`ID`,
	CONCAT( '/', t1.`name` ) AS `NAME`,
	t1.`ORDER`,
	t1.`OWNER`,
	case when t1.`PARENT` = 0 then null else t1.parent end as parent ,
	t11.`NAME` AS `PARENTNAME`,
	t1.`PATH`,
	t1.`ROOT`,
	t1.`SHORT`,
	t1.`TYPE`
FROM
	`zt_module` t1
	LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID
```
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
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
t1.`MDEPTID`,
t1.`NAME`,
t1.`ORDER`,
t1.`ORGID`,
t1.`OWNER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID 

```
### 数据查询-文档目录查询（DocModule）
#### 说明
文档目录查询

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.* 
FROM
	(
	SELECT
		'0' AS DELETED,
		0 AS ID,
		'/' AS NAME,
		0 AS PARENT,
		',0,' AS path,
		$ { srfdatacontext ( 'doclib', '{"defname":"ROOT","dename":"ZT_MODULE"}' )} AS root,
		'doc' AS type UNION
	SELECT
		t1.`DELETED`,
		t1.`ID`,
		CONCAT(
			'/',
		CASE
				
				WHEN (
				SELECT
					GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
				FROM
					zt_module tt 
				WHERE
					FIND_IN_SET( tt.id, t1.path ) 
					AND tt.type = 'doc' 
				GROUP BY
					tt.root 
					LIMIT 0,
					1 
					) IS NOT NULL THEN
					(
					SELECT
						GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
					FROM
						zt_module tt 
					WHERE
						FIND_IN_SET( tt.id, t1.path ) 
						AND tt.type = 'doc' 
					GROUP BY
						tt.root 
						LIMIT 0,
						1 
					) ELSE t1.`name` 
				END 
				) AS `NAME`,
				t1.`PARENT`,
				t1.`PATH`,
				t1.`ROOT`,
				t1.`TYPE` 
			FROM
				`zt_module` t1
			LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID 
	) t1
```
### 数据查询-产品线（Line）
#### 说明
产品线

- 默认查询
否

- 查询权限使用
是

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
t1.`MDEPTID`,
t1.`NAME`,
t1.`ORDER`,
t1.`ORGID`,
t1.`OWNER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID 

```
### 数据查询-需求模块（StoryModule）
#### 说明
需求模块

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
t1.`MDEPTID`,
t1.`NAME`,
t1.`ORDER`,
t1.`ORGID`,
t1.`OWNER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID 

```
### 数据查询-任务模块（TaskModule）
#### 说明
任务模块

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
t1.`MDEPTID`,
t1.`NAME`,
t1.`ORDER`,
t1.`ORGID`,
t1.`OWNER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID 

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
t1.`BRANCH`,
t1.`COLLECTOR`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
t1.`MDEPTID`,
t1.`NAME`,
t1.`ORDER`,
t1.`ORGID`,
t1.`OWNER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [BugModule](#数据集合-BugModule（BugModule）) | BugModule | 否 |
| 2 | [数据集](#数据集合-数据集（BugModuleCodeList）) | BugModuleCodeList | 否 |
| 3 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 4 | [文档目录](#数据集合-文档目录（DocModule）) | DocModule | 否 |
| 5 | [产品线](#数据集合-产品线（Line）) | Line | 否 |
| 6 | [需求模块](#数据集合-需求模块（StoryModule）) | StoryModule | 否 |
| 7 | [任务模块](#数据集合-任务模块（TaskModule）) | TaskModule | 否 |

### 数据集合-BugModule（BugModule）
#### 说明
BugModule

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [BugModule（BugModule）](#数据查询-BugModule（BugModule）) |
### 数据集合-数据集（BugModuleCodeList）
#### 说明
数据集

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [数据查询（BugModuleCodeList）](#数据查询-数据查询（BugModuleCodeList）) |
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
### 数据集合-文档目录（DocModule）
#### 说明
文档目录

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [文档目录查询（DocModule）](#数据查询-文档目录查询（DocModule）) |
### 数据集合-产品线（Line）
#### 说明
产品线

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品线（Line）](#数据查询-产品线（Line）) |
### 数据集合-需求模块（StoryModule）
#### 说明
需求模块

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [需求模块（StoryModule）](#数据查询-需求模块（StoryModule）) |
### 数据集合-任务模块（TaskModule）
#### 说明
任务模块

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [任务模块（TaskModule）](#数据查询-任务模块（TaskModule）) |

## 数据导入
无

## 数据导出
无

