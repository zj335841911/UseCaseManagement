# 服务接口-IBZ_LOGIN
## 接口说明
实体

## 接口清单
### 获取ZT账户登录信息
#### 访问路径
/ibz_logins/{ibz_login_id}/getuser

#### 请求方法
GET

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibz_login_id | Long | 实体主键ID |
| 2 | ibz_logindto | [IBZ_LOGINDTO](#IBZ_LOGINDTO) | 实体实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IBZ_LOGINDTO](#IBZ_LOGINDTO)：实体实体传输对象 |

### ZT登录
#### 访问路径
/ibz_logins/{ibz_login_id}/ztlogin

#### 请求方法
POST

#### 参数说明
| 序号 | 参数名 | 参数类型 | 说明 |
| ---- | ---- | ---- | ---- |
| 1 | ibz_login_id | Long | 实体主键ID |
| 2 | ibz_logindto | [IBZ_LOGINDTO](#IBZ_LOGINDTO) | 实体实体传输对象 |

#### 返回说明
| 项目 | 说明 |
| ---- | ---- |
| 返回状态 | 200：请求成功。<br>401：用户未认证。<br>500：服务异常。 |
| 返回类型 | [IBZ_LOGINDTO](#IBZ_LOGINDTO)：实体实体传输对象 |

## 附录
### 数据类型说明
#### IBZ_LOGINDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | realname | String | 允许 | 真实姓名 |
| 2 | id | Long | 不可 | ID |
| 3 | account | String | 允许 | 账户 |
| 4 | commiter | String | 允许 | 源代码账户 |
| 5 | token | String | 允许 | token |
| 6 | <动态属性> | Object | 允许 | 支持动态属性 |

#### IBZ_LOGINSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_realname_like | String | 允许 | 条件字段：realname<br>条件组合方式：`%like%` |
| 2 | customcond | String | 允许 | 自定义查询条件 |
| 3 | customparams | String | 允许 | 自定义查询参数 |
| 4 | query | String | 允许 | 快速搜索 |
| 5 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 6 | page | int | 允许 | 当前页数<br>默认值0 |
| 7 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 8 | sort | String | 允许 | 排序 |
