
# 实体-系统运行会话(PSSYSRUNSESSION)
## 实体说明
系统运行会话

## 所属模块
[iBiz系统模型](../ibizsysmodel)

## 实体关系
### 1:N
无
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [系统应用（PSSYSAPP）](../ibizsysmodel/PSSysApp) | （默认） |
| 2 | [系统应用（PSSYSAPP）](../ibizsysmodel/PSSysApp) | （默认） |
| 3 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [系统运行会话名称](#属性-系统运行会话名称（PSSYSRUNSESSIONNAME）) | PSSYSRUNSESSIONNAME | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [建立时间](#属性-建立时间（CREATEDATE）) | CREATEDATE | 日期时间型 | 否 | 否 | 否 |
| 3 | [系统运行会话标识](#属性-系统运行会话标识（PSSYSRUNSESSIONID）) | PSSYSRUNSESSIONID | 全局唯一标识，文本类型，用户不可见 | 是 | 否 | 否 |
| 4 | [建立人](#属性-建立人（CREATEMAN）) | CREATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 5 | [更新时间](#属性-更新时间（UPDATEDATE）) | UPDATEDATE | 日期时间型 | 否 | 否 | 否 |
| 6 | [更新人](#属性-更新人（UPDATEMAN）) | UPDATEMAN | 文本，可指定长度 | 否 | 否 | 否 |
| 7 | [输出调试信息](#属性-输出调试信息（DEBUGMODE）) | DEBUGMODE | 是否逻辑 | 否 | 否 | 是 |
| 8 | [结束时间](#属性-结束时间（ENDTIME）) | ENDTIME | 日期时间型 | 否 | 否 | 是 |
| 9 | [签入版本库](#属性-签入版本库（ENABLEVC）) | ENABLEVC | 是否逻辑 | 否 | 否 | 是 |
| 10 | [备注](#属性-备注（MEMO）) | MEMO | 长文本，长度1000 | 否 | 否 | 是 |
| 11 | [修复数据结构](#属性-修复数据结构（FIXDBMODEL）) | FIXDBMODEL | 是否逻辑 | 否 | 否 | 是 |
| 12 | [打包模式](#属性-打包模式（PACKMODE）) | PACKMODE | 单项选择(文本值) | 否 | 否 | 是 |
| 13 | [控制台标识](#属性-控制台标识（PSDSCONSOLEID）) | PSDSCONSOLEID | 文本，可指定长度 | 否 | 否 | 是 |
| 14 | [运行模式](#属性-运行模式（RUNMODE）) | RUNMODE | 单项选择(文本值) | 否 | 否 | 是 |
| 15 | [重新构建](#属性-重新构建（REBUILDMODE）) | REBUILDMODE | 单项选择(数值) | 否 | 否 | 是 |
| 16 | [运行参数](#属性-运行参数（RUNPARAM）) | RUNPARAM | 文本，可指定长度 | 否 | 否 | 是 |
| 17 | [运行参数3](#属性-运行参数3（RUNPARAM3）) | RUNPARAM3 | 文本，可指定长度 | 否 | 否 | 是 |
| 18 | [运行参数2](#属性-运行参数2（RUNPARAM2）) | RUNPARAM2 | 文本，可指定长度 | 否 | 否 | 是 |
| 19 | [运行参数4](#属性-运行参数4（RUNPARAM4）) | RUNPARAM4 | 文本，可指定长度 | 否 | 否 | 是 |
| 20 | [运行参数5](#属性-运行参数5（RUNPARAM5）) | RUNPARAM5 | 整型 | 否 | 否 | 是 |
| 21 | [运行状态](#属性-运行状态（RUNSTATE）) | RUNSTATE | 单项选择(数值) | 否 | 否 | 否 |
| 22 | [运行参数6](#属性-运行参数6（RUNPARAM6）) | RUNPARAM6 | 整型 | 否 | 否 | 是 |
| 23 | [开始时间](#属性-开始时间（STARTTIME）) | STARTTIME | 日期时间型 | 否 | 否 | 是 |
| 24 | [模板出错时终止](#属性-模板出错时终止（STOPWHENTEMPLERROR）) | STOPWHENTEMPLERROR | 是否逻辑 | 否 | 否 | 是 |
| 25 | [系统应用2](#属性-系统应用2（PSSYSAPPNAME2）) | PSSYSAPPNAME2 | 外键值文本 | 否 | 是 | 是 |
| 26 | [系统应用2](#属性-系统应用2（PSSYSAPPID2）) | PSSYSAPPID2 | 外键值 | 否 | 是 | 是 |
| 27 | [系统应用](#属性-系统应用（PSSYSAPPNAME）) | PSSYSAPPNAME | 外键值文本 | 否 | 是 | 是 |
| 28 | [系统应用](#属性-系统应用（PSSYSAPPID）) | PSSYSAPPID | 外键值 | 否 | 是 | 是 |
| 29 | [系统服务接口](#属性-系统服务接口（PSSYSSERVICEAPINAME）) | PSSYSSERVICEAPINAME | 外键值文本 | 否 | 是 | 是 |
| 30 | [系统服务接口](#属性-系统服务接口（PSSYSSERVICEAPIID）) | PSSYSSERVICEAPIID | 外键值 | 否 | 是 | 是 |
| 31 | [系统](#属性-系统（PSSYSTEMID）) | PSSYSTEMID | 文本，可指定长度 | 否 | 是 | 是 |
| 32 | [系统](#属性-系统（PSSYSTEMNAME）) | PSSYSTEMNAME | 文本，可指定长度 | 否 | 是 | 是 |
| 33 | [服务体系](#属性-服务体系（PSSYSSFPUBID）) | PSSYSSFPUBID | 文本，可指定长度 | 否 | 是 | 是 |
| 34 | [服务体系](#属性-服务体系（PSSYSSFPUBNAME）) | PSSYSSFPUBNAME | 文本，可指定长度 | 否 | 是 | 是 |
| 35 | [运行数据库](#属性-运行数据库（PSSYSTEMDBCFGID）) | PSSYSTEMDBCFGID | 文本，可指定长度 | 否 | 是 | 是 |
| 36 | [运行数据库](#属性-运行数据库（PSSYSTEMDBCFGNAME）) | PSSYSTEMDBCFGNAME | 文本，可指定长度 | 否 | 是 | 是 |

### 属性-系统运行会话名称（PSSYSRUNSESSIONNAME）
#### 属性说明
系统运行会话名称

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

### 属性-系统运行会话标识（PSSYSRUNSESSIONID）
#### 属性说明
系统运行会话标识

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

### 属性-输出调试信息（DEBUGMODE）
#### 属性说明
输出调试信息

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
| 项目 | 说明 |
| ---- | ---- |
| 类型 |  |
| 值 | 0 |

- 取值范围/公式
参照数据字典【[是否（YESNO）（YesNo3）](../../codelist/YesNo3)】

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

### 属性-结束时间（ENDTIME）
#### 属性说明
结束时间

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-签入版本库（ENABLEVC）
#### 属性说明
签入版本库

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-备注（MEMO）
#### 属性说明
备注

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
长文本，长度1000

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

### 属性-修复数据结构（FIXDBMODEL）
#### 属性说明
修复数据结构

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-打包模式（PACKMODE）
#### 属性说明
打包模式

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

### 属性-控制台标识（PSDSCONSOLEID）
#### 属性说明
控制台标识

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

### 属性-运行模式（RUNMODE）
#### 属性说明
运行模式

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

### 属性-重新构建（REBUILDMODE）
#### 属性说明
重新构建

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
单项选择(数值)

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-运行参数（RUNPARAM）
#### 属性说明
运行参数

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

### 属性-运行参数3（RUNPARAM3）
#### 属性说明
运行参数3

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

### 属性-运行参数2（RUNPARAM2）
#### 属性说明
运行参数2

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

### 属性-运行参数4（RUNPARAM4）
#### 属性说明
运行参数4

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

### 属性-运行参数5（RUNPARAM5）
#### 属性说明
运行参数5

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-运行状态（RUNSTATE）
#### 属性说明
运行状态

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

- 数据类型
单项选择(数值)

- Java类型
Integer

- 是否允许为空
否

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
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-运行参数6（RUNPARAM6）
#### 属性说明
运行参数6

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-开始时间（STARTTIME）
#### 属性说明
开始时间

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-模板出错时终止（STOPWHENTEMPLERROR）
#### 属性说明
模板出错时终止

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [系统服务接口（PSSYSSERVICEAPI）](../ibizsysmodel/PSSysServiceAPI) |
| 关系属性 | [系统服务接口标识（PSSYSSERVICEAPIID）](../ibizsysmodel/PSSysServiceAPI/#属性-系统服务接口标识（PSSYSSERVICEAPIID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统应用2（PSSYSAPPNAME2）
#### 属性说明
系统应用2

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

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
| 关系实体 | [系统应用（PSSYSAPP）](../ibizsysmodel/PSSysApp) |
| 关系属性 | [系统应用名称（PSSYSAPPNAME）](../ibizsysmodel/PSSysApp/#属性-系统应用名称（PSSYSAPPNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统应用2（PSSYSAPPID2）
#### 属性说明
系统应用2

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
| 关系实体 | [系统应用（PSSYSAPP）](../ibizsysmodel/PSSysApp) |
| 关系属性 | [系统应用标识（PSSYSAPPID）](../ibizsysmodel/PSSysApp/#属性-系统应用标识（PSSYSAPPID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统应用（PSSYSAPPNAME）
#### 属性说明
系统应用

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

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
| 关系实体 | [系统应用（PSSYSAPP）](../ibizsysmodel/PSSysApp) |
| 关系属性 | [系统应用名称（PSSYSAPPNAME）](../ibizsysmodel/PSSysApp/#属性-系统应用名称（PSSYSAPPNAME）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统应用（PSSYSAPPID）
#### 属性说明
系统应用

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
| 关系实体 | [系统应用（PSSYSAPP）](../ibizsysmodel/PSSysApp) |
| 关系属性 | [系统应用标识（PSSYSAPPID）](../ibizsysmodel/PSSysApp/#属性-系统应用标识（PSSYSAPPID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-系统服务接口（PSSYSSERVICEAPINAME）
#### 属性说明
系统服务接口

- 是否是主键
否

- 属性类型
物理字段[来自当前实体物理表字段]

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

### 属性-服务体系（PSSYSSFPUBID）
#### 属性说明
服务体系

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

### 属性-服务体系（PSSYSSFPUBNAME）
#### 属性说明
服务体系

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

### 属性-运行数据库（PSSYSTEMDBCFGID）
#### 属性说明
运行数据库

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

### 属性-运行数据库（PSSYSTEMDBCFGNAME）
#### 属性说明
运行数据库

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
| 1 | [系统运行会话名称（PSSYSRUNSESSIONNAME）](#属性-系统运行会话名称（PSSYSRUNSESSIONNAME）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [系统运行会话名称（PSSYSRUNSESSIONNAME）](#属性-系统运行会话名称（PSSYSRUNSESSIONNAME）) | `%like%` |
| 2 | [打包模式（PACKMODE）](#属性-打包模式（PACKMODE）) | `=` |
| 3 | [运行模式（RUNMODE）](#属性-运行模式（RUNMODE）) | `=` |
| 4 | [重新构建（REBUILDMODE）](#属性-重新构建（REBUILDMODE）) | `=` |
| 5 | [运行状态（RUNSTATE）](#属性-运行状态（RUNSTATE）) | `=` |
| 6 | [系统应用2（PSSYSAPPNAME2）](#属性-系统应用2（PSSYSAPPNAME2）) | `=` |
| 7 | [系统应用2（PSSYSAPPNAME2）](#属性-系统应用2（PSSYSAPPNAME2）) | `%like%` |
| 8 | [系统应用2（PSSYSAPPID2）](#属性-系统应用2（PSSYSAPPID2）) | `=` |
| 9 | [系统应用（PSSYSAPPNAME）](#属性-系统应用（PSSYSAPPNAME）) | `=` |
| 10 | [系统应用（PSSYSAPPNAME）](#属性-系统应用（PSSYSAPPNAME）) | `%like%` |
| 11 | [系统应用（PSSYSAPPID）](#属性-系统应用（PSSYSAPPID）) | `=` |
| 12 | [系统服务接口（PSSYSSERVICEAPINAME）](#属性-系统服务接口（PSSYSSERVICEAPINAME）) | `=` |
| 13 | [系统服务接口（PSSYSSERVICEAPINAME）](#属性-系统服务接口（PSSYSSERVICEAPINAME）) | `%like%` |
| 14 | [系统服务接口（PSSYSSERVICEAPIID）](#属性-系统服务接口（PSSYSSERVICEAPIID）) | `=` |

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
t1.`DEBUGMODE`,
t1.`ENABLEVC`,
t1.`ENDTIME`,
t1.`FIXDBMODEL`,
t1.`MEMO`,
t1.`PACKMODE`,
t1.`PSDSCONSOLEID`,
t1.`PSSYSAPPID`,
t1.`PSSYSAPPID2`,
t1.`PSSYSAPPNAME`,
t1.`PSSYSAPPNAME2`,
t1.`PSSYSRUNSESSIONID`,
t1.`PSSYSRUNSESSIONNAME`,
t1.`PSSYSSERVICEAPIID`,
t1.`PSSYSSERVICEAPINAME`,
t1.`PSSYSSFPUBID`,
t1.`PSSYSSFPUBNAME`,
t1.`PSSYSTEMDBCFGID`,
t1.`PSSYSTEMDBCFGNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`REBUILDMODE`,
t1.`RUNMODE`,
t1.`RUNPARAM`,
t1.`RUNPARAM2`,
t1.`RUNPARAM3`,
t1.`RUNPARAM4`,
t1.`RUNPARAM5`,
t1.`RUNPARAM6`,
t1.`RUNSTATE`,
t1.`STARTTIME`,
t1.`STOPWHENTEMPLERROR`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_PSSYSRUNSESSION` t1 

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
t1.`DEBUGMODE`,
t1.`ENABLEVC`,
t1.`ENDTIME`,
t1.`FIXDBMODEL`,
t1.`MEMO`,
t1.`PACKMODE`,
t1.`PSDSCONSOLEID`,
t1.`PSSYSAPPID`,
t1.`PSSYSAPPID2`,
t1.`PSSYSAPPNAME`,
t1.`PSSYSAPPNAME2`,
t1.`PSSYSRUNSESSIONID`,
t1.`PSSYSRUNSESSIONNAME`,
t1.`PSSYSSERVICEAPIID`,
t1.`PSSYSSERVICEAPINAME`,
t1.`PSSYSSFPUBID`,
t1.`PSSYSSFPUBNAME`,
t1.`PSSYSTEMDBCFGID`,
t1.`PSSYSTEMDBCFGNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`REBUILDMODE`,
t1.`RUNMODE`,
t1.`RUNPARAM`,
t1.`RUNPARAM2`,
t1.`RUNPARAM3`,
t1.`RUNPARAM4`,
t1.`RUNPARAM5`,
t1.`RUNPARAM6`,
t1.`RUNSTATE`,
t1.`STARTTIME`,
t1.`STOPWHENTEMPLERROR`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_PSSYSRUNSESSION` t1 

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

