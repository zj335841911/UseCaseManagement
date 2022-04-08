
# 实体-项目相关成员(IBZ_PROJECTMEMBER)
## 实体说明
项目相关成员

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
| 1 | [编号](#属性-编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 是 |
| 2 | [项目名称](#属性-项目名称（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 是 |
| 3 | [发布负责人](#属性-发布负责人（RD）) | RD | 文本，可指定长度 | 否 | 否 | 是 |
| 4 | [产品负责人](#属性-产品负责人（PO）) | PO | 文本，可指定长度 | 否 | 否 | 是 |
| 5 | [项目负责人](#属性-项目负责人（PM）) | PM | 文本，可指定长度 | 否 | 否 | 是 |
| 6 | [测试负责人](#属性-测试负责人（QD）) | QD | 文本，可指定长度 | 否 | 否 | 是 |
| 7 | [团队成员（一）](#属性-团队成员（一）（FRISTMEMBER）) | FRISTMEMBER | 文本，可指定长度 | 否 | 否 | 是 |
| 8 | [团队成员（二）](#属性-团队成员（二）（SECONDMEMBER）) | SECONDMEMBER | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [团队成员（三）](#属性-团队成员（三）（THIRDMEMBER）) | THIRDMEMBER | 文本，可指定长度 | 否 | 否 | 是 |
| 10 | [团队成员（四）](#属性-团队成员（四）（FOURTHMEMBER）) | FOURTHMEMBER | 文本，可指定长度 | 否 | 否 | 是 |
| 11 | [团队成员（五）](#属性-团队成员（五）（FIFTHMEMBER）) | FIFTHMEMBER | 文本，可指定长度 | 否 | 否 | 是 |
| 12 | [团队成员（六）](#属性-团队成员（六）（SIXTHMEMBER）) | SIXTHMEMBER | 文本，可指定长度 | 否 | 否 | 是 |
| 13 | [全部成员](#属性-全部成员（TEAMEMBERS）) | TEAMEMBERS | 多项选择(文本值) | 否 | 否 | 是 |

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

### 属性-项目名称（NAME）
#### 属性说明
项目名称

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
无

#### 关系属性
无

### 属性-发布负责人（RD）
#### 属性说明
发布负责人

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-产品负责人（PO）
#### 属性说明
产品负责人

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-项目负责人（PM）
#### 属性说明
项目负责人

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-测试负责人（QD）
#### 属性说明
测试负责人

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-团队成员（一）（FRISTMEMBER）
#### 属性说明
团队成员（一）

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-团队成员（二）（SECONDMEMBER）
#### 属性说明
团队成员（二）

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-团队成员（三）（THIRDMEMBER）
#### 属性说明
团队成员（三）

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-团队成员（四）（FOURTHMEMBER）
#### 属性说明
团队成员（四）

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-团队成员（五）（FIFTHMEMBER）
#### 属性说明
团队成员（五）

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-团队成员（六）（SIXTHMEMBER）
#### 属性说明
团队成员（六）

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
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
无

#### 关系属性
无

### 属性-全部成员（TEAMEMBERS）
#### 属性说明
全部成员

- 是否是主键
否

- 属性类型
逻辑字段[来自计算式]

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
| 1 | [项目名称（NAME）](#属性-项目名称（NAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |

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
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 4,1) AS `FIFTHMEMBER`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 3,1) AS `FOURTHMEMBER`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 0,1) AS `FRISTMEMBER`,
t1.`ID`,
t1.`NAME`,
t1.PM AS `PM`,
t1.PO AS `PO`,
t1.QD AS `QD`,
t1.RD AS `RD`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 1,1) AS `SECONDMEMBER`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 5,1) AS `SIXTHMEMBER`,
(select GROUP_CONCAT(t.account order by t.`order` asc) from zt_team t where t.type = 'project' and t.root = t1.id GROUP BY t.root) AS `TEAMEMBERS`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 2,1) AS `THIRDMEMBER`
FROM `zt_project` t1 

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
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 4,1) AS `FIFTHMEMBER`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 3,1) AS `FOURTHMEMBER`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 0,1) AS `FRISTMEMBER`,
t1.`ID`,
t1.`NAME`,
t1.PM AS `PM`,
t1.PO AS `PO`,
t1.QD AS `QD`,
t1.RD AS `RD`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 1,1) AS `SECONDMEMBER`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 5,1) AS `SIXTHMEMBER`,
(select GROUP_CONCAT(t.account order by t.`order` asc) from zt_team t where t.type = 'project' and t.root = t1.id GROUP BY t.root) AS `TEAMEMBERS`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 2,1) AS `THIRDMEMBER`
FROM `zt_project` t1 

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

