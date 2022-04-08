# 服务接口-PRoductWeekly
## 接口说明
产品周报

## 接口清单
## 附录
### 数据类型说明
#### IBIZPRO_PRODUCTWEEKLYDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | totalestimates | Double | 允许 | 总工时 |
| 2 | tasks | String | 允许 | 任务 |
| 3 | po | String | 允许 | 产品负责人 |
| 4 | date | Timestamp | 允许 | 日期<br>时间格式：yyyy-MM-dd |
| 5 | updatedate | Timestamp | 不可 | 更新时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 6 | updateman | String | 不可 | 更新人 |
| 7 | createman | String | 不可 | 建立人 |
| 8 | createdate | Timestamp | 不可 | 建立时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 9 | ibizproproductweeklyname | String | 允许 | 产品周报名称 |
| 10 | ibizpro_productweeklyid | Long | 不可 | 产品周报标识 |
| 11 | product | Long | 允许 | 编号 |
| 12 | productname | String | 允许 | 产品名称 |
| 13 | <动态属性> | Object | 允许 | 支持动态属性 |

#### IBIZPRO_PRODUCTWEEKLYSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_ibizpro_productdailyname_like | String | 允许 | 条件字段：ibizpro_productdailyname<br>条件组合方式：`%like%` |
| 2 | n_product_eq | Long | 允许 | 条件字段：product<br>条件组合方式：`=` |
| 3 | n_productname_eq | String | 允许 | 条件字段：productname<br>条件组合方式：`=` |
| 4 | n_productname_like | String | 允许 | 条件字段：productname<br>条件组合方式：`%like%` |
| 5 | customcond | String | 允许 | 自定义查询条件 |
| 6 | customparams | String | 允许 | 自定义查询参数 |
| 7 | query | String | 允许 | 快速搜索 |
| 8 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 9 | page | int | 允许 | 当前页数<br>默认值0 |
| 10 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 11 | sort | String | 允许 | 排序 |
