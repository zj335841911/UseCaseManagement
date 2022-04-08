# effort(ZT_EFFORT)

  

## 关系
无

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|user|USER|TEXT|&nbsp;|
|idvalue|IDVALUE|INT|&nbsp;|
|status|STATUS|SSCODELIST|&nbsp;|
|end|END|DATETIME|&nbsp;|
|date|DATE|DATE|&nbsp;|
|name|NAME|TEXT|&nbsp;|
|desc|DESC|TEXT|&nbsp;|
|todo|TODO|SSCODELIST|&nbsp;|
|type|TYPE|SSCODELIST|&nbsp;|
|id|ID|ACID|&nbsp;|
|begin|BEGIN|DATETIME|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|user|默认规则|内容长度必须小于等于[30]|
|idvalue|默认规则|默认规则|
|status|默认规则|内容长度必须小于等于[1]|
|end|默认规则|默认规则|
|date|默认规则|默认规则|
|name|默认规则|内容长度必须小于等于[30]|
|desc|默认规则|内容长度必须小于等于[255]|
|todo|默认规则|内容长度必须小于等于[1]|
|type|默认规则|内容长度必须小于等于[1]|
|id|默认规则|默认规则|
|begin|默认规则|默认规则|

## 状态控制

无


## 行为
| 行为    | 类型    |  说明  |
| --------   |------------| ----- | 
|Create|内置方法|&nbsp;|
|Update|内置方法|&nbsp;|
|Remove|内置方法|&nbsp;|
|Get|内置方法|&nbsp;|
|GetDraft|内置方法|&nbsp;|
|CheckKey|内置方法|&nbsp;|
|Save|内置方法|&nbsp;|

## 处理逻辑
无

## 查询集合

* **查询**

| 查询编号 | 查询名称       | 默认查询 |   备注|
| --------  | --------   | --------   | ----- |
|DEFAULT|DEFAULT([MYSQL5](../../appendix/query_MYSQL5.md#Effort_Default))|是|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#Effort_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|DEFAULT|DEFAULT|是|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|status(STATUS)|EQ|
|name(NAME)|LIKE|
|todo(TODO)|EQ|
|type(TYPE)|EQ|

## 导入模式
无


## 导出模式
无
