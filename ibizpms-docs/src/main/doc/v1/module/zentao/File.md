
# 实体-附件(ZT_FILE)
## 实体说明
附件

## 所属模块
[基础管理模块](../zentao)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [系统模板（IBZPRO_SYSTPL）](../ibizpro/IBZProSysTpl) | （默认） |
### N:1
无


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [路径](#属性-路径（PATHNAME）) | PATHNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [对象ID](#属性-对象ID（OBJECTID）) | OBJECTID | 大整型 | 否 | 否 | 是 |
| 3 | [已删除](#属性-已删除（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 4 | [文件类型](#属性-文件类型（EXTENSION）) | EXTENSION | 文本，可指定长度 | 否 | 否 | 是 |
| 5 | [对象类型](#属性-对象类型（OBJECTTYPE）) | OBJECTTYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 6 | [由谁添加](#属性-由谁添加（ADDEDBY）) | ADDEDBY | 文本，可指定长度 | 否 | 否 | 是 |
| 7 | [标题](#属性-标题（TITLE）) | TITLE | 文本，可指定长度 | 否 | 否 | 否 |
| 8 | [添加时间](#属性-添加时间（ADDEDDATE）) | ADDEDDATE | 日期时间型 | 否 | 否 | 是 |
| 9 | [下载次数](#属性-下载次数（DOWNLOADS）) | DOWNLOADS | 整型 | 否 | 否 | 是 |
| 10 | [大小](#属性-大小（SIZE）) | SIZE | 整型 | 否 | 否 | 是 |
| 11 | [id](#属性-id（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 12 | [备注](#属性-备注（EXTRA）) | EXTRA | 文本，可指定长度 | 否 | 否 | 是 |
| 13 | [显示大小](#属性-显示大小（STRSIZE）) | STRSIZE | 文本，可指定长度 | 否 | 否 | 是 |
| 14 | [文档类型](#属性-文档类型（DOCLIBTYPE）) | DOCLIBTYPE | 文本，可指定长度 | 否 | 否 | 是 |

### 属性-路径（PATHNAME）
#### 属性说明
路径

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

### 属性-对象ID（OBJECTID）
#### 属性说明
对象ID

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
大整型

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
无

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
无

### 属性-文件类型（EXTENSION）
#### 属性说明
文件类型

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

### 属性-对象类型（OBJECTTYPE）
#### 属性说明
对象类型

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
参照数据字典【[附件对象类型（File__object_type）](../../codelist/File__object_type)】

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

### 属性-由谁添加（ADDEDBY）
#### 属性说明
由谁添加

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-标题（TITLE）
#### 属性说明
标题

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

### 属性-添加时间（ADDEDDATE）
#### 属性说明
添加时间

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

### 属性-下载次数（DOWNLOADS）
#### 属性说明
下载次数

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
无

### 属性-大小（SIZE）
#### 属性说明
大小

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

### 属性-备注（EXTRA）
#### 属性说明
备注

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
| 2 | `!=`或者`<>` |

#### 关系属性
无

### 属性-显示大小（STRSIZE）
#### 属性说明
显示大小

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
CONCAT_WS('',case when (t1.size/1024) > 1024 then ROUND(t1.size/(1024 * 1024), 1) when (t1.size/1024) > 1 then ROUND(t1.size/1024, 1) else ROUND(t1.size, 1) end, case when (t1.size/1024) > 1024 then 'MB' when (t1.size/1024) > 1 then 'KB' else 'B' end)
```

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-文档类型（DOCLIBTYPE）
#### 属性说明
文档类型

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
| 7 | [下载](#实体行为-下载（Ibzdownload）) | ibzdownload | 用户自定义 | 前台 |
| 8 | [预览](#实体行为-预览（Preview）) | Preview | 用户自定义 | 前台 |
| 9 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |
| 10 | [保存附件](#实体行为-保存附件（UpdateObjectIDForPmsEe）) | updateObjectIDForPmsEe | 用户自定义 | 后台 |

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
### 实体行为-下载（Ibzdownload）
#### 说明
下载

- 行为类型
用户自定义

- 行为持有者
前台

#### 逻辑附加
无
### 实体行为-预览（Preview）
#### 说明
预览

- 行为类型
用户自定义

- 行为持有者
前台

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
### 实体行为-保存附件（UpdateObjectIDForPmsEe）
#### 说明
保存附件

- 行为类型
用户自定义

- 行为持有者
后台

#### 逻辑附加
无

## 逻辑处理
无

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [标题（TITLE）](#属性-标题（TITLE）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [对象ID（OBJECTID）](#属性-对象ID（OBJECTID）) | `=` |
| 2 | [对象类型（OBJECTTYPE）](#属性-对象类型（OBJECTTYPE）) | `=` |
| 3 | [标题（TITLE）](#属性-标题（TITLE）) | `%like%` |
| 4 | [备注（EXTRA）](#属性-备注（EXTRA）) | `=` |
| 5 | [备注（EXTRA）](#属性-备注（EXTRA）) | `!=`或者`<>` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 2 | [文件库查询](#数据查询-文件库查询（DocLibFile）) | DocLibFile | 否 |
| 3 | [文件库查询](#数据查询-文件库查询（ProductDocLibFile）) | ProductDocLibFile | 否 |
| 4 | [动态(根据类型过滤)](#数据查询-动态(根据类型过滤)（Type）) | Type | 否 |
| 5 | [查询附件](#数据查询-查询附件（TypeNotBySrfparentkey）) | TypeNotBySrfparentkey | 否 |
| 6 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

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
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`DOWNLOADS`,
t1.`EXTENSION`,
t1.`EXTRA`,
t1.`ID`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`PATHNAME`,
t1.`SIZE`,
CONCAT_WS('',case when (t1.size/1024) > 1024 then ROUND(t1.size/(1024 * 1024), 1) when (t1.size/1024) > 1 then ROUND(t1.size/1024, 1) else ROUND(t1.size, 1) end, case when (t1.size/1024) > 1024 then 'MB' when (t1.size/1024) > 1 then 'KB' else 'B' end) AS `STRSIZE`,
t1.`TITLE`
FROM `zt_file` t1 

```
### 数据查询-文件库查询（DocLibFile）
#### 说明
文件库查询

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`DOWNLOADS`,
t1.`EXTENSION`,
t1.`EXTRA`,
t1.`ID`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`PATHNAME`,
CONCAT_WS('',case when (t1.size/1024) > 1024 then ROUND(t1.size/(1024 * 1024), 1) when (t1.size/1024) > 1 then ROUND(t1.size/1024, 1) else ROUND(t1.size, 1) end, case when (t1.size/1024) > 1024 then 'MB' when (t1.size/1024) > 1 then 'KB' else 'B' end) as `STRSIZE`,
t1.size,
CONCAT_WS('',t1.`TITLE`,' [',UPPER(t1.objectType),' #',t1.objectID,']') AS `TITLE`,
'file' as doclibtype
FROM `zt_file` t1
```
### 数据查询-文件库查询（ProductDocLibFile）
#### 说明
文件库查询

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`DOWNLOADS`,
t1.`EXTENSION`,
t1.`EXTRA`,
t1.`ID`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`PATHNAME`,
CONCAT_WS('',case when (t1.size/1024) > 1024 then ROUND(t1.size/(1024 * 1024), 1) when (t1.size/1024) > 1 then ROUND(t1.size/1024, 1) else ROUND(t1.size, 1) end, case when (t1.size/1024) > 1024 then 'MB' when (t1.size/1024) > 1 then 'KB' else 'B' end) as `STRSIZE`,
t1.size,
CONCAT_WS('',t1.`TITLE`,' [',UPPER(t1.objectType),' #',t1.objectID,']') AS `TITLE`,
'file' as doclibtype
FROM `zt_file` t1
```
### 数据查询-动态(根据类型过滤)（Type）
#### 说明
过滤编辑器中上传的图片

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`DOWNLOADS`,
t1.`EXTENSION`,
t1.`EXTRA`,
t1.`ID`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`PATHNAME`,
t1.`SIZE`,
CONCAT_WS('',case when (t1.size/1024) > 1024 then ROUND(t1.size/(1024 * 1024), 1) when (t1.size/1024) > 1 then ROUND(t1.size/1024, 1) else ROUND(t1.size, 1) end, case when (t1.size/1024) > 1024 then 'MB' when (t1.size/1024) > 1 then 'KB' else 'B' end) AS `STRSIZE`,
t1.`TITLE`
FROM `zt_file` t1 

```
### 数据查询-查询附件（TypeNotBySrfparentkey）
#### 说明
查询附件

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`DOWNLOADS`,
t1.`EXTENSION`,
t1.`EXTRA`,
t1.`ID`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`PATHNAME`,
t1.`SIZE`,
CONCAT_WS('',case when (t1.size/1024) > 1024 then ROUND(t1.size/(1024 * 1024), 1) when (t1.size/1024) > 1 then ROUND(t1.size/1024, 1) else ROUND(t1.size, 1) end, case when (t1.size/1024) > 1024 then 'MB' when (t1.size/1024) > 1 then 'KB' else 'B' end) AS `STRSIZE`,
t1.`TITLE`
FROM `zt_file` t1 

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
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`DOWNLOADS`,
t1.`EXTENSION`,
t1.`EXTRA`,
t1.`ID`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`PATHNAME`,
t1.`SIZE`,
CONCAT_WS('',case when (t1.size/1024) > 1024 then ROUND(t1.size/(1024 * 1024), 1) when (t1.size/1024) > 1 then ROUND(t1.size/1024, 1) else ROUND(t1.size, 1) end, case when (t1.size/1024) > 1024 then 'MB' when (t1.size/1024) > 1 then 'KB' else 'B' end) AS `STRSIZE`,
t1.`TITLE`
FROM `zt_file` t1 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 2 | [文件库查询](#数据集合-文件库查询（DocLibFile）) | DocLibFile | 否 |
| 3 | [文件库查询](#数据集合-文件库查询（ProductDocLibFile）) | ProductDocLibFile | 否 |
| 4 | [动态(根据类型过滤)](#数据集合-动态(根据类型过滤)（Type）) | Type | 否 |
| 5 | [查询附件](#数据集合-查询附件（TypeNotBySrfparentkey）) | TypeNotBySrfparentkey | 否 |

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
### 数据集合-文件库查询（DocLibFile）
#### 说明
文件库查询

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [文件库查询（DocLibFile）](#数据查询-文件库查询（DocLibFile）) |
### 数据集合-文件库查询（ProductDocLibFile）
#### 说明
文件库查询

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [文件库查询（ProductDocLibFile）](#数据查询-文件库查询（ProductDocLibFile）) |
### 数据集合-动态(根据类型过滤)（Type）
#### 说明
动态(根据类型过滤)

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [动态(根据类型过滤)（Type）](#数据查询-动态(根据类型过滤)（Type）) |
### 数据集合-查询附件（TypeNotBySrfparentkey）
#### 说明
查询附件

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [查询附件（TypeNotBySrfparentkey）](#数据查询-查询附件（TypeNotBySrfparentkey）) |

## 数据导入
无

## 数据导出
无

