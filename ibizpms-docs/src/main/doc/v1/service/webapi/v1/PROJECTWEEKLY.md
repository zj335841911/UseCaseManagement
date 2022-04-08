# 服务接口-IBIZPRO_PROJECTWEEKLY
## 接口说明
项目周报

## 接口清单
## 附录
### 数据类型说明
#### PROJECTWEEKLYDTO
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | projectweeklyname | String | 允许 | 项目周报名称 |
| 2 | projectweeklyid | String | 不可 | 项目周报标识 |
| 3 | createdate | Timestamp | 不可 | 建立时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 4 | updateman | String | 不可 | 更新人 |
| 5 | createman | String | 不可 | 建立人 |
| 6 | updatedate | Timestamp | 不可 | 更新时间<br>时间格式：yyyy-MM-dd HH:mm:ss |
| 7 | pm | String | 允许 | 项目负责人 |
| 8 | totalestimates | Double | 允许 | 总工时 |
| 9 | tasks | String | 允许 | 任务 |
| 10 | date | Timestamp | 允许 | 日期<br>时间格式：yyyy-MM-dd |
| 11 | project | Long | 允许 | 项目编号 |
| 12 | projectname | String | 允许 | 项目名称 |
| 13 | week | String | 允许 | 周 |
| 14 | year | String | 允许 | 年 |
| 15 | <动态属性> | Object | 允许 | 支持动态属性 |

#### PROJECTWEEKLYSearchContext
| 序号 | 属性名 | 属性类型 | 是否可以为空 | 说明 |
| ---- | ---- | ---- | ---- | ---- |
| 1 | n_ibzpro_projectweeklyname_like | String | 允许 | 条件字段：ibzpro_projectweeklyname<br>条件组合方式：`%like%` |
| 2 | n_project_eq | Long | 允许 | 条件字段：project<br>条件组合方式：`=` |
| 3 | customcond | String | 允许 | 自定义查询条件 |
| 4 | customparams | String | 允许 | 自定义查询参数 |
| 5 | query | String | 允许 | 快速搜索 |
| 6 | filter | QueryFilter | 允许 | 条件表达式<br>参照`cn.ibizlab.pms.util.filter.QueryFilter` |
| 7 | page | int | 允许 | 当前页数<br>默认值0 |
| 8 | size | int | 允许 | 每页显示条数<br>默认值20 |
| 9 | sort | String | 允许 | 排序 |
