# 索引检索(IBIZPRO_INDEX)

  

## 关系
{% plantuml %}
索引检索 <|-- Bug 
索引检索 <|-- 测试用例 
索引检索 <|-- 产品 
索引检索 <|-- 项目 
索引检索 <|-- 需求 
索引检索 <|-- 任务 
hide members
{% endplantuml %}

## 属性

| 属性名称        |    中文名称    | 类型     |  备注  |
| --------   |------------| -----   |  -------- | 
|类型|INDEX_TYPE|SSCODELIST|&nbsp;|
|主键|INDEXID|BIGINT|&nbsp;|
|支持搜索[需求、Bug、任务、项目、产品、文档、用例]|INDEXNAME|TEXT|&nbsp;|
|逻辑标识|DELETED|YESNO|&nbsp;|
|组织标识|ORGID|TEXT|&nbsp;|
|部门标识|MDEPTID|TEXT|&nbsp;|
|描述|INDEXDESC|LONGTEXT|&nbsp;|

## 值规则
| 属性名称    | 规则    |  说明  |
| --------   |------------| ----- | 
|类型|默认规则|内容长度必须小于等于[200]|
|主键|默认规则|默认规则|
|支持搜索[需求、Bug、任务、项目、产品、文档、用例]|默认规则|内容长度必须小于等于[200]|
|逻辑标识|默认规则|内容长度必须小于等于[200]|
|组织标识|默认规则|内容长度必须小于等于[200]|
|部门标识|默认规则|内容长度必须小于等于[200]|
|描述|默认规则|内容长度必须小于等于[200]|

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
|DEFAULT|数据查询([MYSQL5](../../appendix/query_MYSQL5.md#IBIZPRO_INDEX_Default))|否|&nbsp;|
|VIEW|默认（全部数据）([MYSQL5](../../appendix/query_MYSQL5.md#IBIZPRO_INDEX_View))|否|&nbsp;|

* **数据集合**

| 集合编号 | 集合名称   |  包含查询  | 默认集合 |   备注|
| --------  | --------   | -------- | --------   | ----- |
|DEFAULT|数据集|DEFAULT|是|&nbsp;|
|IndexDER|数据集2||否|&nbsp;|

## 查询模式
| 属性      |    搜索模式     |
| --------   |------------|
|类型(INDEX_TYPE)|EQ|
|支持搜索[需求、Bug、任务、项目、产品、文档、用例](INDEXNAME)|LIKE|

## 导入模式
无


## 导出模式
无
