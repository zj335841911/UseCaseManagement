# 服务接口-DYNADASHBOARD
## 接口说明
动态数据看板

## 接口清单
### 新建动态数据看板
#### 访问路径
/dynadashboards

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | dynadashboarddto | [DynaDashboardDTO](#DynaDashboardDTO) | 动态数据看板实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [DynaDashboardDTO](#DynaDashboardDTO)：动态数据看板实体传输对象 |

### 批量新建动态数据看板
#### 访问路径
/dynadashboards/batch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | dynadashboarddtos | List<[DynaDashboardDTO](#DynaDashboardDTO)> | 动态数据看板实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 更新动态数据看板
#### 访问路径
/dynadashboards/{dynadashboard_id}

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | dynadashboard_id | String | 动态数据看板主键ID |
| 2 | dynadashboarddto | [DynaDashboardDTO](#DynaDashboardDTO) | 动态数据看板实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [DynaDashboardDTO](#DynaDashboardDTO)：动态数据看板实体传输对象 |

### 批量更新动态数据看板
#### 访问路径
/dynadashboards/batch

#### 请求方法
PUT

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | dynadashboarddtos | List<[DynaDashboardDTO](#DynaDashboardDTO)> | 动态数据看板实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 删除动态数据看板
#### 访问路径
/dynadashboards/{dynadashboard_id}

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | dynadashboard_id | String | 动态数据看板主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量删除动态数据看板
#### 访问路径
/dynadashboards/batch

#### 请求方法
DELETE

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ids | List<String> | 动态数据看板主键ID列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取动态数据看板
#### 访问路径
/dynadashboards/{dynadashboard_id}

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | dynadashboard_id | String | 动态数据看板主键ID |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [DynaDashboardDTO](#DynaDashboardDTO)：动态数据看板实体传输对象 |

### 检查动态数据看板
#### 访问路径
/dynadashboards/checkkey

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | dynadashboarddto | [DynaDashboardDTO](#DynaDashboardDTO) | 动态数据看板实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 保存动态数据看板
#### 访问路径
/dynadashboards/save

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | dynadashboarddto | [DynaDashboardDTO](#DynaDashboardDTO) | 动态数据看板实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 批量保存动态数据看板
#### 访问路径
/dynadashboards/savebatch

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | dynadashboarddtos | List<[DynaDashboardDTO](#DynaDashboardDTO)> | 动态数据看板实体传输对象列表 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | true：处理成功。false：处理失败。 |

### 获取DEFAULT
#### 访问路径
/dynadashboards/fetchdefault

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [DynaDashboardSearchContext](#DynaDashboardSearchContext) | 动态数据看板查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | List<[DynaDashboardDTO](#DynaDashboardDTO)>：动态数据看板实体传输对象列表 |

### 查询DEFAULT
#### 访问路径
/dynadashboards/searchdefault

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | context | [DynaDashboardSearchContext](#DynaDashboardSearchContext) | 动态数据看板查询条件对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | Page<[DynaDashboardDTO](#DynaDashboardDTO)>：动态数据看板实体传输对象分页对象<br>分页对象为`org.springframework.data.domain.Page` |

## 附录
### 数据类型说明
#### DynaDashboardDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | userid | String | 允许 | 用户标识 |
| 2 | dynadashboardid | String | 不可 | 动态数据看板标识 |
| 3 | dynadashboardname | String | 允许 | 动态数据看板名称 |
| 4 | createman | String | 不可 | 建立人 |
| 5 | updateman | String | 不可 | 更新人 |
| 6 | modelid | String | 允许 | 模型标识 |
| 7 | updatedate | Timestamp | 不可 | 更新时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 8 | appid | String | 允许 | 应用标识 |
| 9 | createdate | Timestamp | 不可 | 建立时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 10 | model | String | 允许 | 模型 |
| 11 | <动态属性> | Object | 允许 | 支持动态属性 |

#### DynaDashboardSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_dynadashboardname_like | String | 允许 | 条件字段：dynadashboardname<br>条件组合方式：`%like%` |
| 2 | customcond | String | 允许 | 自定义查询条件 |
| 3 | customparams | String | 允许 | 自定义查询参数 |
| 4 | query | String | 允许 | 快速搜索 |
| 5 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 6 | page | int | 允许 | 当前页数<br>默认值0 |
| 7 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 8 | sort | String | 允许 | 排序 |
