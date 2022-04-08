
# 实体-任务模块(IBZ_PROJECTMODULE)
## 实体说明
项目任务模块

## 所属模块
[iBiz增强模块](../ibiz)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) | （默认） |
| 2 | [任务（ZT_TASK）](../zentao/Task) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) | （默认） |
| 2 | [项目（ZT_PROJECT）](../zentao/Project) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [类型（task）](#属性-类型（task）（TYPE）) | TYPE | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [collector](#属性-collector（COLLECTOR）) | COLLECTOR | 长文本，没有长度限制 | 否 | 否 | 是 |
| 3 | [id](#属性-id（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 4 | [逻辑删除标志](#属性-逻辑删除标志（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 5 | [叶子模块](#属性-叶子模块（ISLEAF）) | ISLEAF | 文本，可指定长度 | 否 | 否 | 是 |
| 6 | [path](#属性-path（PATH）) | PATH | 文本，可指定长度 | 否 | 否 | 是 |
| 7 | [owner](#属性-owner（OWNER）) | OWNER | 文本，可指定长度 | 否 | 否 | 是 |
| 8 | [简称](#属性-简称（SHORT）) | SHORT | 文本，可指定长度 | 否 | 否 | 是 |
| 9 | [名称](#属性-名称（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 否 |
| 10 | [grade](#属性-grade（GRADE）) | GRADE | 整型 | 否 | 否 | 是 |
| 11 | [排序值](#属性-排序值（ORDER）) | ORDER | 整型 | 否 | 否 | 是 |
| 12 | [branch](#属性-branch（BRANCH）) | BRANCH | 整型 | 否 | 否 | 是 |
| 13 | [id](#属性-id（PARENT）) | PARENT | 外键值 | 否 | 是 | 是 |
| 14 | [项目](#属性-项目（ROOT）) | ROOT | 外键值 | 否 | 是 | 是 |
| 15 | [所属项目](#属性-所属项目（ROOTNAME）) | ROOTNAME | 外键值文本 | 否 | 是 | 是 |
| 16 | [上级模块](#属性-上级模块（PARENTNAME）) | PARENTNAME | 外键值文本 | 否 | 是 | 是 |
| 17 | [数据选择排序](#属性-数据选择排序（ORDERPK）) | ORDERPK | 文本，可指定长度 | 否 | 是 | 是 |

### 属性-类型（task）（TYPE）
#### 属性说明
类型（task）

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
| 值 | task |

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-叶子模块（ISLEAF）
#### 属性说明
叶子模块

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
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = %1$s) THEN FALSE ELSE TRUE  END )
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-path（PATH）
#### 属性说明
path

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-grade（GRADE）
#### 属性说明
grade

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-排序值（ORDER）
#### 属性说明
排序值

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-branch（BRANCH）
#### 属性说明
branch

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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [id（ID）](../ibiz/ProjectModule/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-项目（ROOT）
#### 属性说明
项目

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目编号（ID）](../zentao/Project/#属性-项目编号（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-所属项目（ROOTNAME）
#### 属性说明
所属项目

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
| 关系实体 | [项目（ZT_PROJECT）](../zentao/Project) |
| 关系属性 | [项目名称（NAME）](../zentao/Project/#属性-项目名称（NAME）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
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
| 关系实体 | [任务模块（IBZ_PROJECTMODULE）](../ibiz/ProjectModule) |
| 关系属性 | [名称（NAME）](../ibiz/ProjectModule/#属性-名称（NAME）) |
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
| 7 | [重建模块路径](#实体行为-重建模块路径（Fix）) | Fix | 实体处理逻辑 | 后台 |
| 8 | [删除模块](#实体行为-删除模块（RemoveModule）) | RemoveModule | 实体处理逻辑 | 后台 |
| 9 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |

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
### 实体行为-重建模块路径（Fix）
#### 说明
前台行为

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-删除模块（RemoveModule）
#### 说明
删除模块

- 行为类型
实体处理逻辑

- 行为持有者
后台

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
| 序号 | 逻辑 | 逻辑名 | 逻辑持有者 |
| ---- | ---- | ---- | ---- |
| 1 | [重建模块路径](#逻辑处理-重建模块路径（FixPath）) | FixPath | 后台 |
| 2 | [删除模块](#逻辑处理-删除模块（RemoveModule）) | RemoveModule | 后台 |

### 逻辑处理-重建模块路径（FixPath）
#### 说明
重建模块路径

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 准备参数 | Prepareparam1 | 准备参数 |
| 2 | 执行重建模块路径行为 | Deaction1 | 实体行为 |
| 3 | 开始 | Begin | 开始 |
### 逻辑处理-删除模块（RemoveModule）
#### 说明
删除模块

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 模块删除 | Deaction1 | 实体行为 |
| 2 | 设置模块参数 | Prepareparam1 | 准备参数 |
| 3 | 开始 | Begin | 开始 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [名称（NAME）](#属性-名称（NAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [类型（task）（TYPE）](#属性-类型（task）（TYPE）) | `=` |
| 2 | [名称（NAME）](#属性-名称（NAME）) | `%like%` |
| 3 | [id（PARENT）](#属性-id（PARENT）) | `=` |
| 4 | [项目（ROOT）](#属性-项目（ROOT）) | `=` |
| 5 | [所属项目（ROOTNAME）](#属性-所属项目（ROOTNAME）) | `=` |
| 6 | [所属项目（ROOTNAME）](#属性-所属项目（ROOTNAME）) | `%like%` |
| 7 | [上级模块（PARENTNAME）](#属性-上级模块（PARENTNAME）) | `=` |
| 8 | [上级模块（PARENTNAME）](#属性-上级模块（PARENTNAME）) | `%like%` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [BYPATH](#数据查询-BYPATH（ByPath）) | ByPath | 否 |
| 2 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 3 | [父模块](#数据查询-父模块（ParentModule）) | ParentModule | 否 |
| 4 | [根需求模块](#数据查询-根需求模块（Root）) | Root | 否 |
| 5 | [根需求模块_无分支](#数据查询-根需求模块_无分支（Root_NoBranch）) | Root_NoBranch | 否 |
| 6 | [根任务模块](#数据查询-根任务模块（Root_Task）) | Root_Task | 否 |
| 7 | [任务模块](#数据查询-任务模块（TaskModules）) | TaskModules | 否 |
| 8 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-BYPATH（ByPath）
#### 说明
通过模块路径包含查询

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
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 

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
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t21.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t11.`NAME` AS `ROOTNAME`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_project t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

```
### 数据查询-父模块（ParentModule）
#### 说明
父模块

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
	( CASE WHEN EXISTS ( SELECT 1 FROM ZT_MODULE WHERE PARENT = t1.`ID` ) THEN FALSE ELSE TRUE END ) AS `ISLEAF`,
	CONCAT(
	'/',
	(
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t1.path ) 
	AND tt.type = 'task' 
GROUP BY
	tt.root 
	) 
	) AS `NAME`,
	t1.`ORDER`,
	t1.`OWNER`,
	t1.`PARENT`,
	t21.`NAME` AS `PARENTNAME`,
	t1.`PATH`,
	t1.`ROOT`,
	t11.`NAME` AS `ROOTNAME`,
	t1.`SHORT`,
	t1.`TYPE` 
FROM
	`zt_module` t1
	LEFT JOIN zt_project t11 ON t1.ROOT = t11.ID
	LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID
```
### 数据查询-根需求模块（Root）
#### 说明
含任务的产品需求及项目需求的模块

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
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t21.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t11.`NAME` AS `ROOTNAME`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_project t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

```
### 数据查询-根需求模块_无分支（Root_NoBranch）
#### 说明
含任务的产品需求及项目需求的模块

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
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t21.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t11.`NAME` AS `ROOTNAME`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_project t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

```
### 数据查询-根任务模块（Root_Task）
#### 说明
根任务模块

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
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t21.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t11.`NAME` AS `ROOTNAME`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_project t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

```
### 数据查询-任务模块（TaskModules）
#### 说明
任务选择所有模块时，模块为当前项目+产品模块

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t1.* from (select t1.* from (SELECT
	t1.`BRANCH`,
	t1.`DELETED`,
	t1.`ID`,
	CONCAT(
	'/', case when t1.parent > 0 then
	(
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t1.path ) 
	AND tt.type = 'story' 
GROUP BY
	tt.root 
	) else t1.`name` end
	) AS `NAME`,
	(CONCAT_ws(
	'', 
 case when t1.parent > 0 then (
SELECT
	GROUP_CONCAT( tt.`ORDER` SEPARATOR '-' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t1.path ) 
	AND tt.type = 'story' 
GROUP BY
	tt.root 
	LIMIT 0,1
	) else t1.`ORDER` end)) as ORDERPK,
	t1.`ORDER`,
	t1.`PARENT`,
	t1.`PATH`,
	t1.`ROOT`,
	t1.`TYPE` 
FROM
	`zt_module` t1
	LEFT JOIN zt_product t11 ON t1.ROOT = t11.ID
	LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID
	where t1.type = 'story' and t1.deleted = '0' order by t1.path asc) t1
	UNION
	select t1.* from (SELECT
	t1.`BRANCH`,
	t1.`DELETED`,
	t1.`ID`,
	CONCAT(
	'/', case when t1.parent > 0 then
	(
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t1.path ) 
	AND tt.type = 'task' 
GROUP BY
	tt.root 
	) else t1.`name` end 
	) AS `NAME`,
		(CONCAT_WS(
	'', case when t1.parent > 0 then
	(
SELECT
	GROUP_CONCAT( tt.`order` SEPARATOR '-' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t1.path ) 
	AND tt.type = 'task' 
GROUP BY
	tt.root
LIMIT 0,1 
	) else t1.`order` end
	)) AS `ORDERPK`,
	t1.`ORDER`,
	t1.`PARENT`,
	t1.`PATH`,
	t1.`ROOT`,
	t1.`TYPE` 
FROM
	`zt_module` t1
	LEFT JOIN zt_product t11 ON t1.ROOT = t11.ID
	LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID
	where t1.type = 'task' and t1.deleted = '0' order by t1.path asc) t1
	UNION
	select 
	0 as branch,
	'0' as deleted,
	0 as id,
	'/' as `name`,
	'0' as ORDERPK,
	0 as `order`,
  0 as parent,
  ',0,' as path,
 #{srf.webcontext.project} as root,
  'task' as type	
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
t1.`BRANCH`,
t1.`COLLECTOR`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t21.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t11.`NAME` AS `ROOTNAME`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_project t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [BYPATH](#数据集合-BYPATH（ByPath）) | ByPath | 否 |
| 2 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 3 | [父模块](#数据集合-父模块（ParentModule）) | ParentModule | 否 |
| 4 | [根模块](#数据集合-根模块（Root）) | Root | 否 |
| 5 | [根模块_无分支](#数据集合-根模块_无分支（Root_NoBranch）) | Root_NoBranch | 否 |
| 6 | [根模块](#数据集合-根模块（Root_Task）) | Root_Task | 否 |
| 7 | [任务模块](#数据集合-任务模块（TaskModules）) | TaskModules | 否 |

### 数据集合-BYPATH（ByPath）
#### 说明
BYPATH

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [BYPATH（ByPath）](#数据查询-BYPATH（ByPath）) |
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
### 数据集合-父模块（ParentModule）
#### 说明
父模块

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [父模块（ParentModule）](#数据查询-父模块（ParentModule）) |
### 数据集合-根模块（Root）
#### 说明
根模块

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [根需求模块（Root）](#数据查询-根需求模块（Root）) |
### 数据集合-根模块_无分支（Root_NoBranch）
#### 说明
根模块_无分支

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [根需求模块_无分支（Root_NoBranch）](#数据查询-根需求模块_无分支（Root_NoBranch）) |
### 数据集合-根模块（Root_Task）
#### 说明
根模块

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [根任务模块（Root_Task）](#数据查询-根任务模块（Root_Task）) |
### 数据集合-任务模块（TaskModules）
#### 说明
任务模块

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [任务模块（TaskModules）](#数据查询-任务模块（TaskModules）) |

## 数据导入
无

## 数据导出
无

