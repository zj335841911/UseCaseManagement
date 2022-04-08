# 服务接口-IBIZPRO_INDEX
## 接口说明
索引检索

## 接口清单
### 新建索引检索
#### 访问路径
/ibizpro_indices

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibizpro_indexdto | [IBIZPRO_INDEXDTO](#IBIZPRO_INDEXDTO) | 索引检索实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IBIZPRO_INDEXDTO](#IBIZPRO_INDEXDTO)：索引检索实体传输对象 |

### 批量新建索引检索
#### 访问路径
/ibizpro_indices/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibizpro_indexdtos | List<[IBIZPRO_INDEXDTO](#IBIZPRO_INDEXDTO)> | 索引检索实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新索引检索
#### 访问路径
/ibizpro_indices/{ibizpro_index_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibizpro_index_id | Long | 索引检索主键ID |
| 2 | ibizpro_indexdto | [IBIZPRO_INDEXDTO](#IBIZPRO_INDEXDTO) | 索引检索实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IBIZPRO_INDEXDTO](#IBIZPRO_INDEXDTO)：索引检索实体传输对象 |

### 批量更新索引检索
#### 访问路径
/ibizpro_indices/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibizpro_indexdtos | List<[IBIZPRO_INDEXDTO](#IBIZPRO_INDEXDTO)> | 索引检索实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除索引检索
#### 访问路径
/ibizpro_indices/{ibizpro_index_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibizpro_index_id | Long | 索引检索主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除索引检索
#### 访问路径
/ibizpro_indices/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ids | List<Long> | 索引检索主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取索引检索
#### 访问路径
/ibizpro_indices/{ibizpro_index_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibizpro_index_id | Long | 索引检索主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IBIZPRO_INDEXDTO](#IBIZPRO_INDEXDTO)：索引检索实体传输对象 |

### 检查索引检索
#### 访问路径
/ibizpro_indices/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibizpro_indexdto | [IBIZPRO_INDEXDTO](#IBIZPRO_INDEXDTO) | 索引检索实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 保存索引检索
#### 访问路径
/ibizpro_indices/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibizpro_indexdto | [IBIZPRO_INDEXDTO](#IBIZPRO_INDEXDTO) | 索引检索实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存索引检索
#### 访问路径
/ibizpro_indices/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibizpro_indexdtos | List<[IBIZPRO_INDEXDTO](#IBIZPRO_INDEXDTO)> | 索引检索实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取数据集
#### 访问路径
/ibizpro_indices/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IBIZPRO_INDEXSearchContext](#IBIZPRO_INDEXSearchContext) | 索引检索查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[IBIZPRO_INDEXDTO](#IBIZPRO_INDEXDTO)>：索引检索实体传输对象列表 |

### 查询数据集
#### 访问路径
/ibizpro_indices/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IBIZPRO_INDEXSearchContext](#IBIZPRO_INDEXSearchContext) | 索引检索查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[IBIZPRO_INDEXDTO](#IBIZPRO_INDEXDTO)>：索引检索实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

### 获取数据集2
#### 访问路径
/ibizpro_indices/fetchindexder

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IBIZPRO_INDEXSearchContext](#IBIZPRO_INDEXSearchContext) | 索引检索查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[IBIZPRO_INDEXDTO](#IBIZPRO_INDEXDTO)>：索引检索实体传输对象列表 |

### 查询数据集2
#### 访问路径
/ibizpro_indices/searchindexder

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [IBIZPRO_INDEXSearchContext](#IBIZPRO_INDEXSearchContext) | 索引检索查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[IBIZPRO_INDEXDTO](#IBIZPRO_INDEXDTO)>：索引检索实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### IBIZPRO_INDEXDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | indextype | String | 允许 | 类型 |
| 2 | indexid | Long | 允许 | 主键 |
| 3 | indexname | String | 允许 | 支持搜索[需求、Bug、任务、项目、产品、文档、用例] |
| 4 | deleted | String | 允许 | 逻辑标识 |
| 5 | orgid | String | 允许 | 组织标识 |
| 6 | mdeptid | String | 允许 | 部门标识 |
| 7 | indexdesc | String | 允许 | 描述 |
| 8 | <动态属性> | Object | 允许 | 支持动态属性 |

#### IBIZPRO_INDEXSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_index_type_eq | String | 允许 | 条件字段：index_type<br>条件组合方式：`=` |
| 2 | n_indexname_like | String | 允许 | 条件字段：indexname<br>条件组合方式：`%like%` |
| 3 | customcond | String | 允许 | 自定义查询条件 |
| 4 | customparams | String | 允许 | 自定义查询参数 |
| 5 | query | String | 允许 | 快速搜索 |
| 6 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 7 | page | int | 允许 | 当前页数<br>默认值0 |
| 8 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 9 | sort | String | 允许 | 排序 |
