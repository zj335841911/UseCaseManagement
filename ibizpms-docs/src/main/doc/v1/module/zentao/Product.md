
# 实体-产品(ZT_PRODUCT)
## 实体说明
产品

## 所属模块
[基础管理模块](../zentao)

## 实体关系
### 1:N
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [产品日报（IBIZPRO_PRODUCTDAILY）](../ibizpro/IbizproProductDaily) | （默认） |
| 2 | [产品月报（IBIZPRO_PRODUCTMONTHLY）](../ibizpro/IbizproProductMonthly) | （默认） |
| 3 | [产品周报（IBIZPRO_PRODUCTWEEKLY）](../ibizpro/IbizproProductWeekly) | （默认） |
| 4 | [Bug统计（IBZ_BUGSTATS）](../ibiz/BugStats) | （默认） |
| 5 | [测试用例统计（IBZ_CASESTATS）](../ibiz/CaseStats) | （默认） |
| 6 | [需求模块（IBZ_PRODUCTMODULE）](../ibiz/ProductModule) | （默认） |
| 7 | [产品团队（IBZ_PRODUCTTEAM）](../ibiz/PRODUCTTEAM) | 嵌套操作 |
| 8 | [测试模块（IBZ_TESTMODULE）](../ibiz/TestModule) | （默认） |
| 9 | [产品的分支和平台信息（ZT_BRANCH）](../zentao/Branch) | （默认） |
| 10 | [Bug（ZT_BUG）](../zentao/Bug) | （默认） |
| 11 | [版本（ZT_BUILD）](../zentao/Build) | （默认） |
| 12 | [测试用例（ZT_CASE）](../zentao/Case) | （默认） |
| 13 | [文档库（ZT_DOCLIB）](../zentao/DocLib) | （默认） |
| 14 | [文档（ZT_DOC）](../zentao/Doc) | （默认） |
| 15 | [产品计划（ZT_PRODUCTPLAN）](../zentao/ProductPlan) | （默认） |
| 16 | [项目产品（ZT_PROJECTPRODUCT）](../zentao/ProjectProduct) | （默认） |
| 17 | [项目中需要做的需求（ZT_PROJECTSTORY）](../zentao/ProjectStory) | （默认） |
| 18 | [发布（ZT_RELEASE）](../zentao/Release) | （默认） |
| 19 | [需求（ZT_STORY）](../zentao/Story) | （默认） |
| 20 | [套件用例（ZT_SUITECASE）](../zentao/SuiteCase) | （默认） |
| 21 | [测试报告（ZT_TESTREPORT）](../zentao/TestReport) | （默认） |
| 22 | [测试套件（ZT_TESTSUITE）](../zentao/TestSuite) | （默认） |
| 23 | [测试版本（ZT_TESTTASK）](../zentao/TestTask) | （默认） |
### N:1
| 序号 | 关系实体 | 关系类型 |
| ---- | ---- | ---- |
| 1 | [模块（ZT_MODULE）](../zentao/Module) | （默认） |


## 实体属性
| 序号 | 属性 | 属性名 | 数据类型 | 主键 | 外键 | 允许为空 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 1 | [测试负责人](#属性-测试负责人（QD）) | QD | 文本，可指定长度 | 否 | 否 | 是 |
| 2 | [访问控制](#属性-访问控制（ACL）) | ACL | 单项选择(文本值) | 否 | 否 | 是 |
| 3 | [产品名称](#属性-产品名称（NAME）) | NAME | 文本，可指定长度 | 否 | 否 | 否 |
| 4 | [编号](#属性-编号（ID）) | ID | 自增标识，整数类型，用户不可见 | 是 | 否 | 否 |
| 5 | [已删除](#属性-已删除（DELETED）) | DELETED | 文本，可指定长度 | 否 | 否 | 是 |
| 6 | [分组白名单](#属性-分组白名单（WHITELIST）) | WHITELIST | 长文本，没有长度限制 | 否 | 否 | 是 |
| 7 | [发布负责人](#属性-发布负责人（RD）) | RD | 文本，可指定长度 | 否 | 否 | 是 |
| 8 | [排序](#属性-排序（ORDER）) | ORDER | 整型 | 否 | 否 | 是 |
| 9 | [产品类型](#属性-产品类型（TYPE）) | TYPE | 单项选择(文本值) | 否 | 否 | 是 |
| 10 | [产品负责人](#属性-产品负责人（PO）) | PO | 文本，可指定长度 | 否 | 否 | 是 |
| 11 | [产品描述	](#属性-产品描述	（DESC）) | DESC | 长文本，没有长度限制 | 否 | 否 | 是 |
| 12 | [状态](#属性-状态（STATUS）) | STATUS | 单项选择(文本值) | 否 | 否 | 是 |
| 13 | [由谁创建](#属性-由谁创建（CREATEDBY）) | CREATEDBY | 文本，可指定长度 | 否 | 否 | 是 |
| 14 | [当前系统版本](#属性-当前系统版本（CREATEDVERSION）) | CREATEDVERSION | 文本，可指定长度 | 否 | 否 | 是 |
| 15 | [子状态](#属性-子状态（SUBSTATUS）) | SUBSTATUS | 文本，可指定长度 | 否 | 否 | 是 |
| 16 | [产品代号](#属性-产品代号（CODE）) | CODE | 文本，可指定长度 | 否 | 否 | 是 |
| 17 | [创建日期](#属性-创建日期（CREATEDDATE）) | CREATEDDATE | 日期时间型 | 否 | 否 | 是 |
| 18 | [产品线](#属性-产品线（LINENAME）) | LINENAME | 外键值文本 | 否 | 是 | 是 |
| 19 | [产品线](#属性-产品线（LINE）) | LINE | 外键值 | 否 | 是 | 是 |
| 20 | [未解决Bug数](#属性-未解决Bug数（ACTIVEBUGCNT）) | ACTIVEBUGCNT | 整型 | 否 | 是 | 是 |
| 21 | [计划总数](#属性-计划总数（PRODUCTPLANCNT）) | PRODUCTPLANCNT | 整型 | 否 | 是 | 是 |
| 22 | [发布总数](#属性-发布总数（RELEASECNT）) | RELEASECNT | 整型 | 否 | 是 | 是 |
| 23 | [激活需求数](#属性-激活需求数（ACTIVESTORYCNT）) | ACTIVESTORYCNT | 整型 | 否 | 是 | 是 |
| 24 | [未确认Bug数](#属性-未确认Bug数（UNCONFIRMBUGCNT）) | UNCONFIRMBUGCNT | 整型 | 否 | 是 | 是 |
| 25 | [未关闭Bug数](#属性-未关闭Bug数（NOTCLOSEDBUGCNT）) | NOTCLOSEDBUGCNT | 整型 | 否 | 是 | 是 |
| 26 | [备注](#属性-备注（COMMENT）) | COMMENT | HTML文本，没有长度限制 | 否 | 是 | 是 |
| 27 | [相关Bug数](#属性-相关Bug数（RELATEDBUGCNT）) | RELATEDBUGCNT | 整型 | 否 | 是 | 是 |
| 28 | [已变更需求](#属性-已变更需求（CHANGEDSTORYCNT）) | CHANGEDSTORYCNT | 整型 | 否 | 是 | 是 |
| 29 | [草稿需求](#属性-草稿需求（DRAFTSTORYCNT）) | DRAFTSTORYCNT | 整型 | 否 | 是 | 是 |
| 30 | [已关闭需求](#属性-已关闭需求（CLOSEDSTORYCNT）) | CLOSEDSTORYCNT | 整型 | 否 | 是 | 是 |
| 31 | [关联项目数](#属性-关联项目数（RELATEDPROJECTS）) | RELATEDPROJECTS | 整型 | 否 | 是 | 是 |
| 32 | [文档数](#属性-文档数（DOCCNT）) | DOCCNT | 整型 | 否 | 是 | 是 |
| 33 | [BUILD数](#属性-BUILD数（BUILDCNT）) | BUILDCNT | 整型 | 否 | 是 | 是 |
| 34 | [用例数](#属性-用例数（CASECNT）) | CASECNT | 整型 | 否 | 是 | 是 |
| 35 | [属性](#属性-属性（SRFCOUNT）) | SRFCOUNT | 整型 | 否 | 是 | 是 |
| 36 | [移动端图片](#属性-移动端图片（MOBIMAGE）) | MOBIMAGE | 文本，可指定长度 | 否 | 是 | 是 |
| 37 | [排序](#属性-排序（ORDER1）) | ORDER1 | 整型 | 否 | 是 | 是 |
| 38 | [是否置顶](#属性-是否置顶（ISTOP）) | ISTOP | 整型 | 否 | 是 | 是 |
| 39 | [测试单数](#属性-测试单数（TESTTASKCNT）) | TESTTASKCNT | 整型 | 否 | 是 | 是 |
| 40 | [套件数](#属性-套件数（TESTSUITECNT）) | TESTSUITECNT | 整型 | 否 | 是 | 是 |
| 41 | [产品负责人（选择）](#属性-产品负责人（选择）（POPK）) | POPK | 文本，可指定长度 | 否 | 是 | 是 |
| 42 | [测试负责人（选择）](#属性-测试负责人（选择）（QDPK）) | QDPK | 文本，可指定长度 | 否 | 是 | 是 |
| 43 | [发布负责人（选择）](#属性-发布负责人（选择）（RDPK）) | RDPK | 文本，可指定长度 | 否 | 是 | 是 |
| 44 | [消息通知用户](#属性-消息通知用户（NOTICEUSERS）) | NOTICEUSERS | 文本，可指定长度 | 否 | 是 | 是 |
| 45 | [组织标识](#属性-组织标识（ORGID）) | ORGID | 文本，可指定长度 | 否 | 是 | 是 |
| 46 | [部门标识](#属性-部门标识（MDEPTID）) | MDEPTID | 文本，可指定长度 | 否 | 是 | 是 |
| 47 | [IBIZ标识](#属性-IBIZ标识（IBIZ_ID）) | IBIZ_ID | 文本，可指定长度 | 否 | 是 | 是 |
| 48 | [支持产品汇报](#属性-支持产品汇报（SUPPROREPORT）) | SUPPROREPORT | 单项选择(文本值) | 否 | 是 | 是 |
| 49 | [产品分类](#属性-产品分类（PRODUCTCLASS）) | PRODUCTCLASS | 单项选择(文本值) | 否 | 是 | 是 |

### 属性-测试负责人（QD）
#### 属性说明
测试负责人

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
| 值 |  |

- 取值范围/公式
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

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

### 属性-访问控制（ACL）
#### 属性说明
访问控制

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
| 值 | open |

- 取值范围/公式
参照数据字典【[产品访问控制（Product__acl）](../../codelist/Product__acl)】

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

### 属性-产品名称（NAME）
#### 属性说明
产品名称

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
| 1 | `=` |
| 2 | `%like%` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
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
是

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |
| 2 | `in(...)` |

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

### 属性-分组白名单（WHITELIST）
#### 属性说明
分组白名单

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-发布负责人（RD）
#### 属性说明
发布负责人

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
| 值 |  |

- 取值范围/公式
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

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

### 属性-产品类型（TYPE）
#### 属性说明
产品类型

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
| 值 | normal |

- 取值范围/公式
参照数据字典【[产品类型（Product__type）](../../codelist/Product__type)】

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

### 属性-产品负责人（PO）
#### 属性说明
产品负责人

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
| 值 |  |

- 取值范围/公式
参照数据字典【[用户真实名称（动态）（UserRealName）](../../codelist/UserRealName)】

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

### 属性-产品描述	（DESC）
#### 属性说明
产品描述	

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-状态（STATUS）
#### 属性说明
状态

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
| 值 | normal |

- 取值范围/公式
参照数据字典【[产品状态（Product__status）](../../codelist/Product__status)】

- 数据格式
无

- 是否支持快速搜索
否

- 搜索条件
| 序号 | 组合方式 |
| ---- | ---- |
| 1 | `=` |
| 2 | `is not NULL` |

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-由谁创建（CREATEDBY）
#### 属性说明
由谁创建

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-当前系统版本（CREATEDVERSION）
#### 属性说明
来自系统配置信息

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-子状态（SUBSTATUS）
#### 属性说明
子状态

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

### 属性-产品代号（CODE）
#### 属性说明
产品代号

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
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-创建日期（CREATEDDATE）
#### 属性说明
创建日期

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-产品线（LINENAME）
#### 属性说明
产品线

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

### 属性-产品线（LINE）
#### 属性说明
产品线

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-未解决Bug数（ACTIVEBUGCNT）
#### 属性说明
未解决Bug数

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = %1$s AND `STATUS` = 'active' AND DELETED = '0')
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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-计划总数（PRODUCTPLANCNT）
#### 属性说明
计划总数

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
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= %1$s AND DELETED = '0')
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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-发布总数（RELEASECNT）
#### 属性说明
发布总数

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
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= %1$s AND DELETED = '0')
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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-激活需求数（ACTIVESTORYCNT）
#### 属性说明
激活需求数

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND `STATUS`='active' AND DELETED = '0')
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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-未确认Bug数（UNCONFIRMBUGCNT）
#### 属性说明
未确认Bug数

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = %1$s AND `CONFIRMED` = 0 AND DELETED = '0')
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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-未关闭Bug数（NOTCLOSEDBUGCNT）
#### 属性说明
未关闭Bug数

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = %1$s AND `STATUS` <> 'closed' AND DELETED = '0')
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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-备注（COMMENT）
#### 属性说明
备注

- 是否是主键
否

- 属性类型
应用界面字段[无存储]

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-相关Bug数（RELATEDBUGCNT）
#### 属性说明
相关Bug数

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
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = %1$s AND DELETED = '0')
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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-已变更需求（CHANGEDSTORYCNT）
#### 属性说明
已变更需求

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND `STATUS`='changed' AND DELETED = '0')
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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-草稿需求（DRAFTSTORYCNT）
#### 属性说明
草稿需求

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND `STATUS`='draft' AND DELETED = '0')
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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-已关闭需求（CLOSEDSTORYCNT）
#### 属性说明
已关闭需求

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
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = %1$s AND `STATUS`='closed' AND DELETED = '0')
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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-关联项目数（RELATEDPROJECTS）
#### 属性说明
关联项目数

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
(select count(1) from zt_projectproduct t inner join zt_project t2 on t2.id = t.project where t.product = t1.id and t2.deleted = '0')
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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-文档数（DOCCNT）
#### 属性说明
文档数

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
(select count(1) from zt_doc t where t.product = t1.id and t.deleted = '0')
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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-BUILD数（BUILDCNT）
#### 属性说明
BUILD数

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
(select count(1) from zt_build t where t.product = t1.id and t.deleted = '0')
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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-用例数（CASECNT）
#### 属性说明
用例数

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
(select count(1) from zt_case t where t.product = t1.id and t.deleted = '0')
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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-属性（SRFCOUNT）
#### 属性说明
属性

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-移动端图片（MOBIMAGE）
#### 属性说明
移动端图片

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

### 属性-排序（ORDER1）
#### 属性说明
排序

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
t1.`order`
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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-是否置顶（ISTOP）
#### 属性说明
是否置顶

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
'0'
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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-测试单数（TESTTASKCNT）
#### 属性说明
测试单数

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-套件数（TESTSUITECNT）
#### 属性说明
套件数

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-产品负责人（选择）（POPK）
#### 属性说明
产品负责人（选择）

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
t1.PO
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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-测试负责人（选择）（QDPK）
#### 属性说明
测试负责人（选择）

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
t1.QD
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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-发布负责人（选择）（RDPK）
#### 属性说明
发布负责人（选择）

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
t1.RD
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
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-消息通知用户（NOTICEUSERS）
#### 属性说明
消息通知用户

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
无

#### 关系属性
| 项目 | 说明 |
| ---- | ---- |
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |

### 属性-支持产品汇报（SUPPROREPORT）
#### 属性说明
支持产品汇报

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
参照数据字典【[是否（YesNo）](../../codelist/YesNo)】

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

### 属性-产品分类（PRODUCTCLASS）
#### 属性说明
产品分类

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
| 关系实体 | [模块（ZT_MODULE）](../zentao/Module) |
| 关系属性 | [id（ID）](../zentao/Module/#属性-id（ID）) |
| 关系类型 | 关系实体 1:N 当前实体 |


## 业务状态
| 序号 | 状态名称 | [状态](#属性-状态（STATUS）)<br>（STATUS） | [是否置顶](#属性-是否置顶（ISTOP）)<br>（ISTOP） | 默认 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [关闭_未置顶](#业务状态-关闭_未置顶（closed_0）) | closed | 0 |  | 否 |
| 2 | [关闭_已置顶](#业务状态-关闭_已置顶（closed_1）) | closed | 1 |  | 否 |
| 3 | [正常_未置顶](#业务状态-正常_未置顶（normal_0）) | normal | 0 |  | 否 |
| 4 | [正常_已置顶](#业务状态-正常_已置顶（normal_1）) | normal | 1 |  | 否 |
### 业务状态-关闭_未置顶（closed_0）
#### 状态说明
关闭_未置顶

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [状态](#属性-状态（STATUS）)<br>（STATUS） | closed |
| [是否置顶](#属性-是否置顶（ISTOP）)<br>（ISTOP） | 0 |


- 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| ---- | ---- |
| 1 | [Get（Get）](#实体行为-Get（Get）) |
| 2 | [Update（Update）](#实体行为-Update（Update）) |
| 3 | [Save（Save）](#实体行为-Save（Save）) |
| 4 | [Remove（Remove）](#实体行为-Remove（Remove）) |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [置顶](#操作权限-置顶（TOP）)<br>（TOP） |
| 2 | [产品关闭](#操作权限-产品关闭（SRFUR__PROD_CLOSED_BUT）)<br>（SRFUR__PROD_CLOSED_BUT） |
### 业务状态-关闭_已置顶（closed_1）
#### 状态说明
关闭_已置顶

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [状态](#属性-状态（STATUS）)<br>（STATUS） | closed |
| [是否置顶](#属性-是否置顶（ISTOP）)<br>（ISTOP） | 1 |


- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [未置顶](#操作权限-未置顶（NOTOP）)<br>（NOTOP） |
| 2 | [产品关闭](#操作权限-产品关闭（SRFUR__PROD_CLOSED_BUT）)<br>（SRFUR__PROD_CLOSED_BUT） |
### 业务状态-正常_未置顶（normal_0）
#### 状态说明
正常_未置顶

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [状态](#属性-状态（STATUS）)<br>（STATUS） | normal |
| [是否置顶](#属性-是否置顶（ISTOP）)<br>（ISTOP） | 0 |


- 流程相关状态
无

#### 实体行为控制
允许模式：允许

| 序号 | 实体行为 |
| ---- | ---- |
| 1 | [关闭（Close）](#实体行为-关闭（Close）) |
| 2 | [Update（Update）](#实体行为-Update（Update）) |
| 3 | [Get（Get）](#实体行为-Get（Get）) |
| 4 | [Save（Save）](#实体行为-Save（Save）) |
| 5 | [Remove（Remove）](#实体行为-Remove（Remove）) |

#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [置顶](#操作权限-置顶（TOP）)<br>（TOP） |
### 业务状态-正常_已置顶（normal_1）
#### 状态说明
正常_已置顶

- 是否是默认状态
否

- 状态值
| 属性名 | 状态值 |
| ---- | ---- |
| [状态](#属性-状态（STATUS）)<br>（STATUS） | normal |
| [是否置顶](#属性-是否置顶（ISTOP）)<br>（ISTOP） | 1 |


- 流程相关状态
无

#### 实体行为控制
允许模式：允许


#### 操作权限控制
允许模式：拒绝
拒绝提示信息：无
| 序号 | 操作权限 |
| ---- | ---- |
| 1 | [未置顶](#操作权限-未置顶（NOTOP）)<br>（NOTOP） |

## 实体行为
| 序号 | 行为 | 行为名 | 行为类型 | 行为持有者 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [Create](#实体行为-Create（Create）) | Create | 内置方法 | 后台及前台 |
| 2 | [Update](#实体行为-Update（Update）) | Update | 内置方法 | 后台及前台 |
| 3 | [Remove](#实体行为-Remove（Remove）) | Remove | 内置方法 | 后台及前台 |
| 4 | [Get](#实体行为-Get（Get）) | Get | 内置方法 | 后台及前台 |
| 5 | [GetDraft](#实体行为-GetDraft（GetDraft）) | GetDraft | 内置方法 | 后台及前台 |
| 6 | [取消置顶](#实体行为-取消置顶（CancelProductTop）) | CancelProductTop | 实体处理逻辑 | 后台 |
| 7 | [CheckKey](#实体行为-CheckKey（CheckKey）) | CheckKey | 内置方法 | 后台及前台 |
| 8 | [关闭](#实体行为-关闭（Close）) | Close | 用户自定义 | 后台及前台 |
| 9 | [产品移动端计数器方法](#实体行为-产品移动端计数器方法（MobProductCounter）) | MobProductCounter | 实体处理逻辑 | 后台 |
| 10 | [移动端测试计数器](#实体行为-移动端测试计数器（MobProductTestCounter）) | MobProductTestCounter | 实体处理逻辑 | 后台 |
| 11 | [置顶](#实体行为-置顶（ProductTop）) | ProductTop | 实体处理逻辑 | 后台 |
| 12 | [退出](#实体行为-退出（ReturnEdit）) | ReturnEdit | 用户自定义 | 前台 |
| 13 | [Save](#实体行为-Save（Save）) | Save | 内置方法 | 后台及前台 |
| 14 | [向导使用](#实体行为-向导使用（WizardCreate）) | WizardCreate | 用户自定义 | 前台 |

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
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [行为[Update]主状态拒绝逻辑<br>（Update__MSDeny）](#逻辑处理-行为[Update]主状态拒绝逻辑（Update__MSDeny）) | 检查 | 是 |  |
### 实体行为-Remove（Remove）
#### 说明
Remove

- 行为类型
内置方法

- 行为持有者
后台及前台

#### 逻辑附加
| 序号 | 附加逻辑 | 附加模式 | 内部逻辑 | 备注 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | [行为[Remove]主状态拒绝逻辑<br>（Remove__MSDeny）](#逻辑处理-行为[Remove]主状态拒绝逻辑（Remove__MSDeny）) | 检查 | 是 |  |
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
### 实体行为-取消置顶（CancelProductTop）
#### 说明
取消置顶

- 行为类型
实体处理逻辑

- 行为持有者
后台

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
### 实体行为-关闭（Close）
#### 说明
关闭

- 行为类型
用户自定义

- 行为持有者
后台及前台

#### 逻辑附加
无
### 实体行为-产品移动端计数器方法（MobProductCounter）
#### 说明
产品移动端计数器方法

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-移动端测试计数器（MobProductTestCounter）
#### 说明
移动端测试计数器

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-置顶（ProductTop）
#### 说明
置顶

- 行为类型
实体处理逻辑

- 行为持有者
后台

#### 逻辑附加
无
### 实体行为-退出（ReturnEdit）
#### 说明
退出

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
### 实体行为-向导使用（WizardCreate）
#### 说明
向导使用

- 行为类型
用户自定义

- 行为持有者
前台

#### 逻辑附加
无

## 逻辑处理
| 序号 | 逻辑 | 逻辑名 | 逻辑持有者 |
| ---- | ---- | ---- | ---- |
| 1 | [取消置顶](#逻辑处理-取消置顶（CancelProductTop）) | CancelProductTop | 后台及前台 |
| 2 | [移动端产品计数器](#逻辑处理-移动端产品计数器（MobProductCounter）) | MobProductCounter | 后台 |
| 3 | [移动端测试计数器](#逻辑处理-移动端测试计数器（MobProductTestCounter）) | MobProductTestCounter | 后台 |
| 4 | [置顶](#逻辑处理-置顶（ProductTop）) | ProductTop | 后台及前台 |
| 5 | [行为[Update]主状态拒绝逻辑](#逻辑处理-行为[Update]主状态拒绝逻辑（Update__MSDeny）) | Update__MSDeny | 后台 |
| 6 | [行为[Remove]主状态拒绝逻辑](#逻辑处理-行为[Remove]主状态拒绝逻辑（Remove__MSDeny）) | Remove__MSDeny | 后台 |

### 逻辑处理-取消置顶（CancelProductTop）
#### 说明
取消置顶

- 逻辑持有者
后台及前台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 删除置顶 | Rawsqlcall1 | 直接SQL调用 |
| 2 | 开始 | Begin | 开始 |
### 逻辑处理-移动端产品计数器（MobProductCounter）
#### 说明
移动端产品计数器

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 发布数 | Rawsqlcall4 | 直接SQL调用 |
| 2 | 获取需求数 | Rawsqlcall2 | 直接SQL调用 |
| 3 | 获取相关BUG数 | Rawsqlcall1 | 直接SQL调用 |
| 4 | 开始 | Begin | 开始 |
| 5 | 计划数 | Rawsqlcall3 | 直接SQL调用 |
### 逻辑处理-移动端测试计数器（MobProductTestCounter）
#### 说明
移动端测试计数器

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 套件数 | Rawsqlcall4 | 直接SQL调用 |
| 3 | 获取测试用例数 | Rawsqlcall2 | 直接SQL调用 |
| 4 | 获取相关BUG数 | Rawsqlcall1 | 直接SQL调用 |
| 5 | 测试单数 | Rawsqlcall3 | 直接SQL调用 |
### 逻辑处理-置顶（ProductTop）
#### 说明
置顶

- 逻辑持有者
后台及前台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | save置顶 | Deaction1 | 实体行为 |
| 2 | 设置置顶数据 | Prepareparam1 | 准备参数 |
| 3 | 开始 | Begin | 开始 |
| 4 | 获取置顶最大排序值 | Rawsqlcall1 | 直接SQL调用 |
### 逻辑处理-行为[Update]主状态拒绝逻辑（Update__MSDeny）
#### 说明
行为[Update]主状态拒绝逻辑

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 开始 | Begin | 开始 |
| 2 | 状态[关闭_已置顶]拒绝[Update]操作 | DenyByclosed_1 | 抛出异常 |
| 3 | 准备临时参数 | PrepareTemp | 准备参数 |
| 4 | 获取数据 | Get | 实体行为 |
| 5 | 状态[正常_已置顶]拒绝[Update]操作 | DenyBynormal_1 | 抛出异常 |
### 逻辑处理-行为[Remove]主状态拒绝逻辑（Remove__MSDeny）
#### 说明
行为[Remove]主状态拒绝逻辑

- 逻辑持有者
后台

#### 逻辑节点
| 序号 | 节点 | 节点名 | 节点类型 |
| ---- | ---- | ---- | ---- |
| 1 | 状态[正常_已置顶]拒绝[Remove]操作 | DenyBynormal_1 | 抛出异常 |
| 2 | 获取数据 | Get | 实体行为 |
| 3 | 准备临时参数 | PrepareTemp | 准备参数 |
| 4 | 状态[关闭_已置顶]拒绝[Remove]操作 | DenyByclosed_1 | 抛出异常 |
| 5 | 开始 | Begin | 开始 |

## 实体搜索
### 快速搜索项
| 序号 | 属性 |
| ---- | ---- |
| 1 | [产品名称（NAME）](#属性-产品名称（NAME）) |
| 2 | [编号（ID）](#属性-编号（ID）) |
| 3 | [产品代号（CODE）](#属性-产品代号（CODE）) |

### 搜索条件
| 序号 | 属性 | 组合方式 |
| ---- | ---- | ---- |
| 1 | [访问控制（ACL）](#属性-访问控制（ACL）) | `=` |
| 2 | [产品名称（NAME）](#属性-产品名称（NAME）) | `=` |
| 3 | [产品名称（NAME）](#属性-产品名称（NAME）) | `%like%` |
| 4 | [编号（ID）](#属性-编号（ID）) | `=` |
| 5 | [编号（ID）](#属性-编号（ID）) | `in(...)` |
| 6 | [产品类型（TYPE）](#属性-产品类型（TYPE）) | `=` |
| 7 | [状态（STATUS）](#属性-状态（STATUS）) | `=` |
| 8 | [状态（STATUS）](#属性-状态（STATUS）) | `is not NULL` |
| 9 | [产品线（LINENAME）](#属性-产品线（LINENAME）) | `=` |
| 10 | [产品线（LINENAME）](#属性-产品线（LINENAME）) | `%like%` |
| 11 | [产品线（LINE）](#属性-产品线（LINE）) | `=` |
| 12 | [产品分类（PRODUCTCLASS）](#属性-产品分类（PRODUCTCLASS）) | `=` |

## 数据查询
| 序号 | 查询 | 查询名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [全部产品](#数据查询-全部产品（AllList）) | AllList | 否 |
| 2 | [所有产品](#数据查询-所有产品（AllProduct）) | AllProduct | 否 |
| 3 | [校验产品名称或产品代号是否已经存在](#数据查询-校验产品名称或产品代号是否已经存在（CheckNameOrCode）) | CheckNameOrCode | 否 |
| 4 | [当前项目](#数据查询-当前项目（CurProject）) | CurProject | 否 |
| 5 | [当前用户](#数据查询-当前用户（CurUer）) | CurUer | 否 |
| 6 | [DEFAULT](#数据查询-DEFAULT（Default）) | Default | 否 |
| 7 | [ES批量的导入](#数据查询-ES批量的导入（ESBulk）) | ESBulk | 否 |
| 8 | [产品总览](#数据查询-产品总览（ProductPM）) | ProductPM | 否 |
| 9 | [产品团队](#数据查询-产品团队（ProductTeam）) | ProductTeam | 否 |
| 10 | [当前项目](#数据查询-当前项目（StoryCurProject）) | StoryCurProject | 否 |
| 11 | [默认（全部数据）](#数据查询-默认（全部数据）（View）) | View | 否 |

### 数据查询-全部产品（AllList）
#### 说明
用户（非管理员）相关的全部产品

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACL`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0') AS `ACTIVEBUGCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='active' AND DELETED = '0') AS `ACTIVESTORYCNT`,
(select count(1) from zt_build t where t.product = t1.id and t.deleted = '0') AS `BUILDCNT`,
(select count(1) from zt_case t where t.product = t1.id and t.deleted = '0') AS `CASECNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='changed' AND DELETED = '0') AS `CHANGEDSTORYCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='closed' AND DELETED = '0') AS `CLOSEDSTORYCNT`,
t1.`CODE`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`CREATEDVERSION`,
t1.`DELETED`,
(select count(1) from zt_doc t where t.product = t1.id and t.deleted = '0') AS `DOCCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='draft' AND DELETED = '0') AS `DRAFTSTORYCNT`,
t1.`IBIZ_ID`,
t1.`ID`,
'0' AS `ISTOP`,
t1.`LINE`,
t11.`NAME` AS `LINENAME`,
t1.`MDEPTID`,
t1.`NAME`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0') AS `NOTCLOSEDBUGCNT`,
t1.`ORDER`,
t1.`order` AS `ORDER1`,
t1.`ORGID`,
t1.`PO`,
t1.PO AS `POPK`,
t1.`PRODUCTCLASS`,
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `PRODUCTPLANCNT`,
t1.`QD`,
t1.QD AS `QDPK`,
t1.`RD`,
t1.RD AS `RDPK`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0') AS `RELATEDBUGCNT`,
(select count(1) from zt_projectproduct t inner join zt_project t2 on t2.id = t.project where t.product = t1.id and t2.deleted = '0') AS `RELATEDPROJECTS`,
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `RELEASECNT`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`SUPPROREPORT`,
t1.`TYPE`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0') AS `UNCONFIRMBUGCNT`
FROM `zt_product` t1 
LEFT JOIN zt_module t11 ON t1.LINE = t11.ID 

```
### 数据查询-所有产品（AllProduct）
#### 说明
所有产品

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	id,
	`name`,
	`code`,
	line,
	type,
	`status`,
	subStatus,
	`desc`,
	PO,
	QD,
	RD,
	acl,
	whitelist,
	createdBy,
	createdDate,
	createdVersion,
	`order`,
	deleted,
	IBIZ_ID,
	ORGID,
	MDEPTID 
FROM
	zt_product 
WHERE
	deleted = '0'
```
### 数据查询-校验产品名称或产品代号是否已经存在（CheckNameOrCode）
#### 说明
校验产品名称或产品代号是否已经存在

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.id
FROM `zt_product` t1 

```
### 数据查询-当前项目（CurProject）
#### 说明
当前项目

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACL`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0') AS `ACTIVEBUGCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='active' AND DELETED = '0') AS `ACTIVESTORYCNT`,
(select count(1) from zt_build t where t.product = t1.id and t.deleted = '0') AS `BUILDCNT`,
(select count(1) from zt_case t where t.product = t1.id and t.deleted = '0') AS `CASECNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='changed' AND DELETED = '0') AS `CHANGEDSTORYCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='closed' AND DELETED = '0') AS `CLOSEDSTORYCNT`,
t1.`CODE`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`CREATEDVERSION`,
t1.`DELETED`,
(select count(1) from zt_doc t where t.product = t1.id and t.deleted = '0') AS `DOCCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='draft' AND DELETED = '0') AS `DRAFTSTORYCNT`,
t1.`IBIZ_ID`,
t1.`ID`,
'0' AS `ISTOP`,
t1.`LINE`,
t11.`NAME` AS `LINENAME`,
t1.`MDEPTID`,
t1.`NAME`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0') AS `NOTCLOSEDBUGCNT`,
t1.`ORDER`,
t1.`order` AS `ORDER1`,
t1.`ORGID`,
t1.`PO`,
t1.PO AS `POPK`,
t1.`PRODUCTCLASS`,
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `PRODUCTPLANCNT`,
t1.`QD`,
t1.QD AS `QDPK`,
t1.`RD`,
t1.RD AS `RDPK`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0') AS `RELATEDBUGCNT`,
(select count(1) from zt_projectproduct t inner join zt_project t2 on t2.id = t.project where t.product = t1.id and t2.deleted = '0') AS `RELATEDPROJECTS`,
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `RELEASECNT`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`SUPPROREPORT`,
t1.`TYPE`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0') AS `UNCONFIRMBUGCNT`
FROM `zt_product` t1 
LEFT JOIN zt_module t11 ON t1.LINE = t11.ID 

```
### 数据查询-当前用户（CurUer）
#### 说明
当前用户

- 默认查询
否

- 查询权限使用
是

#### SQL
- MYSQL5
```SQL
SELECT
	t1.* 
FROM
	(
SELECT
        t1.MDEPTID,
        t1.orgid,
	t1.`ACL`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVEBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVESTORYCNT`,
	( SELECT count( 1 ) FROM zt_build t WHERE t.product = t1.id AND t.deleted = '0' ) AS `BUILDCNT`,
	( SELECT count( 1 ) FROM zt_case t WHERE t.product = t1.id AND t.deleted = '0' ) AS `CASECNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'changed' AND DELETED = '0' ) AS `CHANGEDSTORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'closed' AND DELETED = '0' ) AS `CLOSEDSTORYCNT`,
	t1.`CODE`,
	t1.`CREATEDBY`,
	t1.`CREATEDDATE`,
	t1.`CREATEDVERSION`,
	t1.`DELETED`,
	( SELECT count( 1 ) FROM zt_doc t WHERE t.product = t1.id AND t.deleted = '0' ) AS `DOCCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'draft' AND DELETED = '0' ) AS `DRAFTSTORYCNT`,
	t1.`ID`,
	t1.`LINE`,
	t11.`NAME` AS `LINENAME`,
	t1.`NAME`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0' ) AS `NOTCLOSEDBUGCNT`,
	t1.`ORDER`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN T2.OBJECTORDER ELSE  t1.`ORDER` END) as `ORDER1`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN 1 ELSE 0 END) as `ISTOP`,
	t1.`PO`,
	( SELECT COUNT( 1 ) FROM ZT_PRODUCTPLAN WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `PRODUCTPLANCNT`,
	t1.`QD`,
	t1.`RD`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `RELATEDBUGCNT`,
	(
SELECT
	count( 1 ) 
FROM
	zt_projectproduct t
	INNER JOIN zt_project t2 ON t2.id = t.project 
WHERE
	t.product = t1.id 
	AND t2.deleted = '0' 
	) AS `RELATEDPROJECTS`,
	( SELECT COUNT( 1 ) FROM ZT_RELEASE WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `RELEASECNT`,
	t1.`STATUS`,
	t1.`SUBSTATUS`,
	t1.`TYPE`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0' ) AS `UNCONFIRMBUGCNT` 
FROM
	`zt_product` t1
	left join t_ibz_top t2 on t1.id = t2.OBJECTID and t2.type = 'product' and t2.ACCOUNT = #{srf.sessioncontext.srfloginname}
	LEFT JOIN zt_module t11 ON t1.LINE = t11.ID 
WHERE
	t1.deleted = '0' 
	AND (t1.acl = 'open' or  t1.CREATEDBY =  #{srf.sessioncontext.srfloginname} 
	or t1.PO = #{srf.sessioncontext.srfloginname} 
	or t1.RD = #{srf.sessioncontext.srfloginname} 
	or t1.QD =  #{srf.sessioncontext.srfloginname} 
	) 
	UNION
SELECT
       t1.MDEPTID,
        t1.orgid,
	t1.`ACL`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVEBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVESTORYCNT`,
	( SELECT count( 1 ) FROM zt_build t WHERE t.product = t1.id AND t.deleted = '0' ) AS `BUILDCNT`,
	( SELECT count( 1 ) FROM zt_case t WHERE t.product = t1.id AND t.deleted = '0' ) AS `CASECNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'changed' AND DELETED = '0' ) AS `CHANGEDSTORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'closed' AND DELETED = '0' ) AS `CLOSEDSTORYCNT`,
	t1.`CODE`,
	t1.`CREATEDBY`,
	t1.`CREATEDDATE`,
	t1.`CREATEDVERSION`,
	t1.`DELETED`,
	( SELECT count( 1 ) FROM zt_doc t WHERE t.product = t1.id AND t.deleted = '0' ) AS `DOCCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'draft' AND DELETED = '0' ) AS `DRAFTSTORYCNT`,
	t1.`ID`,
	t1.`LINE`,
	t11.`NAME` AS `LINENAME`,
	t1.`NAME`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0' ) AS `NOTCLOSEDBUGCNT`,
	t1.`ORDER`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN T2.OBJECTORDER ELSE  t1.`ORDER` END) as `ORDER1`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN 1 ELSE 0 END) as `ISTOP`,
	t1.`PO`,
	( SELECT COUNT( 1 ) FROM ZT_PRODUCTPLAN WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `PRODUCTPLANCNT`,
	t1.`QD`,
	t1.`RD`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `RELATEDBUGCNT`,
	(
SELECT
	count( 1 ) 
FROM
	zt_projectproduct t
	INNER JOIN zt_project t2 ON t2.id = t.project 
WHERE
	t.product = t1.id 
	AND t2.deleted = '0' 
	) AS `RELATEDPROJECTS`,
	( SELECT COUNT( 1 ) FROM ZT_RELEASE WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `RELEASECNT`,
	t1.`STATUS`,
	t1.`SUBSTATUS`,
	t1.`TYPE`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0' ) AS `UNCONFIRMBUGCNT` 
FROM
	`zt_product` t1
	left join t_ibz_top t2 on t1.id = t2.OBJECTID and t2.type = 'product' and t2.ACCOUNT = #{srf.sessioncontext.srfloginname}
	LEFT JOIN zt_module t11 ON t1.LINE = t11.ID 
WHERE
	t1.deleted = '0' 
	AND t1.id IN (
SELECT t.root from zt_team t
WHERE
	t.account =  #{srf.sessioncontext.srfloginname} 
	AND t.type = 'product' 
	 
	) 
	) t1
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
t1.`ACL`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0') AS `ACTIVEBUGCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='active' AND DELETED = '0') AS `ACTIVESTORYCNT`,
(select count(1) from zt_build t where t.product = t1.id and t.deleted = '0') AS `BUILDCNT`,
(select count(1) from zt_case t where t.product = t1.id and t.deleted = '0') AS `CASECNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='changed' AND DELETED = '0') AS `CHANGEDSTORYCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='closed' AND DELETED = '0') AS `CLOSEDSTORYCNT`,
t1.`CODE`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`CREATEDVERSION`,
t1.`DELETED`,
(select count(1) from zt_doc t where t.product = t1.id and t.deleted = '0') AS `DOCCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='draft' AND DELETED = '0') AS `DRAFTSTORYCNT`,
t1.`IBIZ_ID`,
t1.`ID`,
'0' AS `ISTOP`,
t1.`LINE`,
t11.`NAME` AS `LINENAME`,
t1.`MDEPTID`,
t1.`NAME`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0') AS `NOTCLOSEDBUGCNT`,
t1.`ORDER`,
t1.`order` AS `ORDER1`,
t1.`ORGID`,
t1.`PO`,
t1.PO AS `POPK`,
t1.`PRODUCTCLASS`,
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `PRODUCTPLANCNT`,
t1.`QD`,
t1.QD AS `QDPK`,
t1.`RD`,
t1.RD AS `RDPK`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0') AS `RELATEDBUGCNT`,
(select count(1) from zt_projectproduct t inner join zt_project t2 on t2.id = t.project where t.product = t1.id and t2.deleted = '0') AS `RELATEDPROJECTS`,
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `RELEASECNT`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`SUPPROREPORT`,
t1.`TYPE`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0') AS `UNCONFIRMBUGCNT`
FROM `zt_product` t1 
LEFT JOIN zt_module t11 ON t1.LINE = t11.ID 

```
### 数据查询-ES批量的导入（ESBulk）
#### 说明
ES批量的导入

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
	t1.id,
	t1.`name`,
	t1.desc,
	t1.deleted
FROM
	zt_product t1
```
### 数据查询-产品总览（ProductPM）
#### 说明
产品总览

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
select t.`status`, count(t.id) as SRFCOUNT from zt_product t where t.`status` <> '' and t.`status` is not null and t.deleted = '0' and t.orgid = #{srf.sessioncontext.srforgid} GROUP BY t.`status`
```
### 数据查询-产品团队（ProductTeam）
#### 说明
产品团队

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACL`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0') AS `ACTIVEBUGCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='active' AND DELETED = '0') AS `ACTIVESTORYCNT`,
(select count(1) from zt_build t where t.product = t1.id and t.deleted = '0') AS `BUILDCNT`,
(select count(1) from zt_case t where t.product = t1.id and t.deleted = '0') AS `CASECNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='changed' AND DELETED = '0') AS `CHANGEDSTORYCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='closed' AND DELETED = '0') AS `CLOSEDSTORYCNT`,
t1.`CODE`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`CREATEDVERSION`,
t1.`DELETED`,
(select count(1) from zt_doc t where t.product = t1.id and t.deleted = '0') AS `DOCCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='draft' AND DELETED = '0') AS `DRAFTSTORYCNT`,
t1.`IBIZ_ID`,
t1.`ID`,
'0' AS `ISTOP`,
t1.`LINE`,
t11.`NAME` AS `LINENAME`,
t1.`MDEPTID`,
t1.`NAME`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0') AS `NOTCLOSEDBUGCNT`,
t1.`ORDER`,
t1.`order` AS `ORDER1`,
t1.`ORGID`,
t1.`PO`,
t1.PO AS `POPK`,
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `PRODUCTPLANCNT`,
t1.`QD`,
t1.QD AS `QDPK`,
t1.`RD`,
t1.RD AS `RDPK`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0') AS `RELATEDBUGCNT`,
(select count(1) from zt_projectproduct t inner join zt_project t2 on t2.id = t.project where t.product = t1.id and t2.deleted = '0') AS `RELATEDPROJECTS`,
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `RELEASECNT`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TYPE`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0') AS `UNCONFIRMBUGCNT`
FROM `zt_product` t1 
LEFT JOIN zt_module t11 ON t1.LINE = t11.ID 
LEFT JOIN zt_team t21 on t21.root = t1.id
```
### 数据查询-当前项目（StoryCurProject）
#### 说明
当前项目

- 默认查询
否

- 查询权限使用
否

#### SQL
- MYSQL5
```SQL
SELECT
t1.`ACL`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0') AS `ACTIVEBUGCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='active' AND DELETED = '0') AS `ACTIVESTORYCNT`,
(select count(1) from zt_build t where t.product = t1.id and t.deleted = '0') AS `BUILDCNT`,
(select count(1) from zt_case t where t.product = t1.id and t.deleted = '0') AS `CASECNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='changed' AND DELETED = '0') AS `CHANGEDSTORYCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='closed' AND DELETED = '0') AS `CLOSEDSTORYCNT`,
t1.`CODE`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`CREATEDVERSION`,
t1.`DELETED`,
(select count(1) from zt_doc t where t.product = t1.id and t.deleted = '0') AS `DOCCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='draft' AND DELETED = '0') AS `DRAFTSTORYCNT`,
t1.`IBIZ_ID`,
t1.`ID`,
'0' AS `ISTOP`,
t1.`LINE`,
t11.`NAME` AS `LINENAME`,
t1.`MDEPTID`,
t1.`NAME`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0') AS `NOTCLOSEDBUGCNT`,
t1.`ORDER`,
t1.`order` AS `ORDER1`,
t1.`ORGID`,
t1.`PO`,
t1.PO AS `POPK`,
t1.`PRODUCTCLASS`,
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `PRODUCTPLANCNT`,
t1.`QD`,
t1.QD AS `QDPK`,
t1.`RD`,
t1.RD AS `RDPK`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0') AS `RELATEDBUGCNT`,
(select count(1) from zt_projectproduct t inner join zt_project t2 on t2.id = t.project where t.product = t1.id and t2.deleted = '0') AS `RELATEDPROJECTS`,
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `RELEASECNT`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`SUPPROREPORT`,
t1.`TYPE`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0') AS `UNCONFIRMBUGCNT`
FROM `zt_product` t1 
LEFT JOIN zt_module t11 ON t1.LINE = t11.ID 

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
t1.`ACL`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0') AS `ACTIVEBUGCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='active' AND DELETED = '0') AS `ACTIVESTORYCNT`,
(select count(1) from zt_build t where t.product = t1.id and t.deleted = '0') AS `BUILDCNT`,
(select count(1) from zt_case t where t.product = t1.id and t.deleted = '0') AS `CASECNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='changed' AND DELETED = '0') AS `CHANGEDSTORYCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='closed' AND DELETED = '0') AS `CLOSEDSTORYCNT`,
t1.`CODE`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`CREATEDVERSION`,
t1.`DELETED`,
t1.`DESC`,
(select count(1) from zt_doc t where t.product = t1.id and t.deleted = '0') AS `DOCCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='draft' AND DELETED = '0') AS `DRAFTSTORYCNT`,
t1.`IBIZ_ID`,
t1.`ID`,
'0' AS `ISTOP`,
t1.`LINE`,
t11.`NAME` AS `LINENAME`,
t1.`MDEPTID`,
t1.`NAME`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0') AS `NOTCLOSEDBUGCNT`,
t1.`ORDER`,
t1.`order` AS `ORDER1`,
t1.`ORGID`,
t1.`PO`,
t1.PO AS `POPK`,
t1.`PRODUCTCLASS`,
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `PRODUCTPLANCNT`,
t1.`QD`,
t1.QD AS `QDPK`,
t1.`RD`,
t1.RD AS `RDPK`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0') AS `RELATEDBUGCNT`,
(select count(1) from zt_projectproduct t inner join zt_project t2 on t2.id = t.project where t.product = t1.id and t2.deleted = '0') AS `RELATEDPROJECTS`,
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `RELEASECNT`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`SUPPROREPORT`,
t1.`TYPE`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0') AS `UNCONFIRMBUGCNT`,
t1.`WHITELIST`
FROM `zt_product` t1 
LEFT JOIN zt_module t11 ON t1.LINE = t11.ID 

```

## 数据集合
| 序号 | 集合 | 集合名 | 默认 |
| ---- | ---- | ---- | ---- |
| 1 | [全部产品](#数据集合-全部产品（AllList）) | AllList | 否 |
| 2 | [所有产品](#数据集合-所有产品（AllProduct）) | AllProduct | 否 |
| 3 | [校验产品名称或产品代号是否已经存在](#数据集合-校验产品名称或产品代号是否已经存在（CheckNameOrCode）) | CheckNameOrCode | 否 |
| 4 | [当前项目](#数据集合-当前项目（CurProject）) | CurProject | 否 |
| 5 | [当前用户](#数据集合-当前用户（CurUer）) | CurUer | 否 |
| 6 | [DEFAULT](#数据集合-DEFAULT（Default）) | Default | 是 |
| 7 | [ES批量的导入](#数据集合-ES批量的导入（ESBulk）) | ESBulk | 否 |
| 8 | [产品总览](#数据集合-产品总览（ProductPM）) | ProductPM | 否 |
| 9 | [产品团队](#数据集合-产品团队（ProductTeam）) | ProductTeam | 否 |
| 10 | [当前项目](#数据集合-当前项目（StoryCurProject）) | StoryCurProject | 否 |

### 数据集合-全部产品（AllList）
#### 说明
全部产品

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [全部产品（AllList）](#数据查询-全部产品（AllList）) |
### 数据集合-所有产品（AllProduct）
#### 说明
所有产品

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [所有产品（AllProduct）](#数据查询-所有产品（AllProduct）) |
### 数据集合-校验产品名称或产品代号是否已经存在（CheckNameOrCode）
#### 说明
校验产品名称或产品代号是否已经存在

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [校验产品名称或产品代号是否已经存在（CheckNameOrCode）](#数据查询-校验产品名称或产品代号是否已经存在（CheckNameOrCode）) |
### 数据集合-当前项目（CurProject）
#### 说明
当前项目

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [当前项目（CurProject）](#数据查询-当前项目（CurProject）) |
### 数据集合-当前用户（CurUer）
#### 说明
当前用户

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [当前用户（CurUer）](#数据查询-当前用户（CurUer）) |
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
### 数据集合-ES批量的导入（ESBulk）
#### 说明
ES批量的导入

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [ES批量的导入（ESBulk）](#数据查询-ES批量的导入（ESBulk）) |
### 数据集合-产品总览（ProductPM）
#### 说明
产品总览

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品总览（ProductPM）](#数据查询-产品总览（ProductPM）) |
### 数据集合-产品团队（ProductTeam）
#### 说明
产品团队

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [产品团队（ProductTeam）](#数据查询-产品团队（ProductTeam）) |
### 数据集合-当前项目（StoryCurProject）
#### 说明
当前项目

- 默认集合
否

- 行为持有者
后台及前台

#### 关联的数据查询
| 序号 | 数据查询 |
| ---- | ---- |
| 1 | [当前项目（StoryCurProject）](#数据查询-当前项目（StoryCurProject）) |

## 数据导入
无

## 数据导出
无

