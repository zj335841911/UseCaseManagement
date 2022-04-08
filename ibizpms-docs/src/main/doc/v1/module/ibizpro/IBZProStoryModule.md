
# 实体-需求模块(IBZPRO_STORYMODULE)
## 实体说明
需求模块

## 所属模块
[iBizPro模块](../ibizpro)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [需求模块（IBZPRO_STORYMODULE）](../ibizpro/IBZProStoryModule) | （默认） |
| 2 | [需求（IBZPRO_STORY）](../ibizpro/IBZProStory) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) | （默认） |
| 2 | [需求模块（IBZPRO_STORYMODULE）](../ibizpro/IBZProStoryModule) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [id](#属性-id（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 2 | [名称](#属性-名称（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 否 |
| 3 | [编号](#属性-编号（ROOT）) | ROOT | 外键值 | 否 | 是 | 是 |
| 4 | [IBIZ标识](#属性-IBIZ标识（IBIZ_ID）) | IBIZ_ID | 文本，可指定长度 | 否 | 是 | 是 |
| 5 | [类型](#属性-类型（TYPE）) | TYPE | 单项选择(文本值) | 否 | 是 | 是 |
| 6 | [级别](#属性-级别（GRADE）) | GRADE | 整型 | 否 | 是 | 是 |
| 7 | [路径](#属性-路径（PATH）) | PATH | 文本，可指定长度 | 否 | 是 | 是 |
| 8 | [简称](#属性-简称（SHORT）) | SHORT | 文本，可指定长度 | 否 | 是 | 是 |
| 9 | [id](#属性-id（PARENT）) | PARENT | 外键值 | 否 | 是 | 是 |
| 10 | [产品](#属性-产品（PRODUCTNAME）) | PRODUCTNAME | 外键值文本 | 否 | 是 | 是 |
| 11 | [owner](#属性-owner（OWNER）) | OWNER | 文本，可指定长度 | 否 | 是 | 是 |
| 12 | [collector](#属性-collector（COLLECTOR）) | COLLECTOR | 长文本，没有长度限制 | 否 | 是 | 是 |
| 13 | [已删除](#属性-已删除（DELETED）) | DELETED | 文本，可指定长度 | 否 | 是 | 是 |
| 14 | [需求模块类型](#属性-需求模块类型（IBIZ_STORYTYPE）) | IBIZ_STORYTYPE | 单项选择(文本值) | 否 | 是 | 是 |

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [产品名称（NAME）](../ibizpro/IBZProProduct/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-名称（NAME）
#### 属性说明
名称

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [产品名称（NAME）](../ibizpro/IBZProProduct/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-编号（ROOT）
#### 属性说明
编号

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-IBIZ标识（IBIZ_ID）
#### 属性说明
IBIZ标识

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
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
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | story |

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
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
| 值 | ， |

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [编号（ID）](../ibizpro/IBZProProduct/#属性-编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-id（PARENT）
#### 属性说明
id

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
| 关系实体 | [需求模块（IBZPRO_STORYMODULE）](../ibizpro/IBZProStoryModule) |
| 关系属性 | [id（ID）](../ibizpro/IBZProStoryModule/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-产品（PRODUCTNAME）
#### 属性说明
产品

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [产品名称（NAME）](../ibizpro/IBZProProduct/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-owner（OWNER）
#### 属性说明
owner

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [产品名称（NAME）](../ibizpro/IBZProProduct/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-collector（COLLECTOR）
#### 属性说明
collector

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [产品名称（NAME）](../ibizpro/IBZProProduct/#属性-产品名称（NAME）) |
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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [产品名称（NAME）](../ibizpro/IBZProProduct/#属性-产品名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-需求模块类型（IBIZ_STORYTYPE）
#### 属性说明
需求模块类型

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
参照数据字典【[需求模块类型（Ibizpro_storymodule__type）](../../codelist/Ibizpro_storymodule__type)】

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
| 关系实体 | [平台产品（IBZPRO_PRODUCT）](../ibizpro/IBZProProduct) |
| 关系属性 | [产品名称（NAME）](../ibizpro/IBZProProduct/#属性-产品名称（NAME）) |
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
| 8 | [同步Ibz平台模块](#实体行为-同步Ibz平台模块（SyncFromIBIZ）) | SyncFromIBIZ | 用户自定义 | 后台及前台 |

### 实体行为-Create（Create）
#### 说明
Create

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [重建模块路径<br>（FixPath）](#逻辑处理-重建模块路径（FixPath）) | 执行之后 | 是 |  |
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
| 1 | [重建模块路径<br>（FixPath）](#逻辑处理-重建模块路径（FixPath）) | 执行之后 | 是 |  |
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
### 实体行为-同步Ibz平台模块（SyncFromIBIZ）
#### 说明
同步Ibz平台模块

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无

## 逻辑处理
| 序号 | 逻辑 | 逻辑名 | 逻辑持有者 |
| ---- | ---- | ---- | ---- |
| 1 | [重建模块路径](#逻辑处理-重建模块路径（FixPath）) | FixPath | 后台 |

### 逻辑处理-重建模块路径（FixPath）
#### 说明
重建模块路径

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 准备参数 | Prepareparam1 | 准备参数 |
| 3 | 执行重建模块路径行为 | Deaction1 | 实体行为 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [名称（NAME）](#属性-名称（NAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [名称（NAME）](#属性-名称（NAME）) | `%like%` |
| 2 | [编号（ROOT）](#属性-编号（ROOT）) | `=` |
| 3 | [IBIZ标识（IBIZ_ID）](#属性-IBIZ标识（IBIZ_ID）) | `=` |
| 4 | [类型（TYPE）](#属性-类型（TYPE）) | `=` |
| 5 | [id（PARENT）](#属性-id（PARENT）) | `=` |
| 6 | [产品（PRODUCTNAME）](#属性-产品（PRODUCTNAME）) | `=` |
| 7 | [产品（PRODUCTNAME）](#属性-产品（PRODUCTNAME）) | `%like%` |
| 8 | [需求模块类型（IBIZ_STORYTYPE）](#属性-需求模块类型（IBIZ_STORYTYPE）) | `=` |

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
t1.`DELETED`,
t1.`GRADE`,
t1.`IBIZ_ID`,
t1.`IBIZ_STORYTYPE`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER`,
t1.`PARENT`,
t1.`PATH`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_product t11 ON t1.ROOT = t11.ID 

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
t1.`COLLECTOR`,
t1.`DELETED`,
t1.`GRADE`,
t1.`IBIZ_ID`,
t1.`IBIZ_STORYTYPE`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER`,
t1.`PARENT`,
t1.`PATH`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_product t11 ON t1.ROOT = t11.ID 

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

