# iBiz软件生产管理（iBizPMS）

<p style="float:left;">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen"/>
</p>


<p style="float:left;">
    <img src="https://img.shields.io/badge/JDK-1.8%2B-blue"/>
    <img src="https://img.shields.io/badge/Spring%20Cloud%20Alibaba-2.2.1.RELEASE-blue"/>
    <img src="https://img.shields.io/badge/Vue.js-v2.6%2B-blue"/>
    <img src="https://img.shields.io/badge/Node.js-v10.15%2B-blue"/>
</p>


> 文档资料：
>
>- [iBizPMS快速上手指南](https://gitee.com/ibizlab/iBizPMS/wikis/iBizPMS快速上手指南)
>- [iBizPMS移动端快速上手指南](https://gitee.com/ibizlab/iBizPMS/wikis/iBizPMS移动端快速上手指南)
>- [iBizPMS开发手册](https://gitee.com/ibizlab/iBizPMS/wikis/iBizPMS开发手册)
>- [iBizPMS部署手册](https://gitee.com/ibizlab/iBizPMS/wikis/Docker-Compose一键部署)
>- [iBizPMS系统报告](https://gitee.com/ibizlab/iBizPMS/tree/master/ibizpms-docs/src/main/doc)

## 介绍

iBiz软件生产管理（iBiz Production Management System，简称iBizPMS）为软件生产提供了完善的管理方案。它从软件生产的开始到结束，再到新的开始，往复循环，管理着每一个节点的进程与数据，协调着各个生产系统之间的交互与联系。它让整个生产过程井然有序，不仅帮助生产者高效协作和提升生产效率，另外对于管理者而言数据透明公开，随时随地知晓生产进程，了解各个生产者的情况，更早预知风险。

iBizPMS是iBiz生态的重要组成部分，它与iBiz生产运行系统群（统一用户、统一认证、统一工作流等）、商业套件系统群（OA、CRM、EAM、EHR等）有效地进行配合，完成与各系统/服务之间的数据交换，共通构建了iBiz一体化软件生态系统。当然，iBizPMS不仅仅只是支持与iBiz生态中的各个系统/服务的接通，同样可以通过iBiz强大的定制化能力完成与其它系统的接通。

iBizPMS采用了先进的软件技术架构（中台模式，Spring Boot/Cloud、Vue前后台分离，界面使用多种VSCode主题风格），采用了MIT开源协议，可以完全免费获取并修改的同时，也提供了多种有效途径（模型开发--iBizSys 6.0、插件开发、微应用开发）去定制化符合各自团队的生产规则与管理方式。

> 进入[**iBizPMS官方网站**]()（待开放）了解更多详情和动态。

## iBizPMS特性

- **移动办公全搞定**：移动端拥有与PC端完全匹配的全部功能，只要拥有一部移动设备，就可以随时随地完成办公。
- **移动端协同**：同时目前已与钉钉实现应用集成，未来也将支持企业微信等其他主流协同办公类app。
- **完全开源**：采用了MIT开源协议，使用了主流框架技术，代码完全免费获取。
- **插件中心**：提供插件开发模式，可以以插件方式对系统进行扩展与升级。可以在插件中心中获取想要的插件。
- **应用中心**：开放标准Restful服务接口，基于这些服务接口，可进行扩展开发，提供扩展应用（现在已有iBizTODO，专注于轻量级任务管理），这些应用往往目的性更强、更符合使用者的习惯。可以在应用中心获取想要的应用。
- **业务定制化**：支持使用iBizSys 6.0对业务模型进行二次开发，更快更有效地完成界面、组件、流程、业务逻辑的定制，使其更加符合各自团队的生产规则与管理方式。
- **中台服务化**：根据业务、能力、数据等模型的积累与整合，沉淀出标准的中台服务，各个功能交给更专业的中台服务去完成，做到真正意义上的协同办公。
- **iBiz生态的强有力支持**
  - [iBizRuntime（微服务运行时）](https://gitee.com/ibizlab/ibizlab-runtime)提供了基础运行的中台服务 （统一认证授权、组织人事管理、 通知等）。
  - [埃毕致开源商业套件](https://gitee.com/ibizlab)提供了完善的日常办公数据支持，并通过iBizPMS将各个系统有效地进行串联。
  - iBizSys为iBizPMS提供了软件研发的数据支持，iBizPMS也为iBizSys提供了完善研发管理方案。
- **完善的项目管理功能**：提供了完善详细的管理流程，适配多类型团队的使用。
- **丰富的组件**：各类图表、统计报表以及标准化组件

## iBizPMS生态

### 运行生态

![flow3](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/flow3_v5.png)

### 生产管理

![flow1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/flow1_v4.png)

### 系统组成

![flow4](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/flow4_v5.png)

## 插件中心（待开放）

iBizPMS提供了插件开发模式，可以以插件方式对系统进行扩展与升级。可以在插件中心中获取想要的插件。

**安装**

- 在线插件：iBizPMS运行时，可通过插件中心，安装插件中心所开放的插件。

- 本地插件：引入插件包，通过配置安装插件；也可以通过插件中心，导入本地插件。

**卸载**

- 在线插件：iBizPMS运行时，可通过插件中心，卸载已安装的插件。
- 本地插件：移除相关配置，移除引入的插件包；也可以通过插件中心，移除本地插件。

**官方插件**

暂未开放。

## 应用中心（待开放）

iBiz开放了标准Restful服务接口，基于这些服务接口，可进行二次扩展开发，提供扩展应用，这些应用往往目的性更强、更符合使用者的习惯。

**安装**

- 在线应用：iBizPMS运行时，可通过应用中心，下载并安装应用中心所开放的应用。

- 本地应用：引入应用包，通过配置安装应用；也可以通过应用中心，导入本地应用。

**卸载**

- 在线应用：iBizPMS运行时，可通过应用中心，卸载已安装的应用。
- 本地应用：移除相关pom配置，移除引入的应用包；也可以通过应用中心，移除本地应用。

**官方应用**

| 应用                                           | 说明                                                         | 演示地址                                   |
| ---------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------ |
| [iBizTODO](https://gitee.com/ibizlab/iBizTODO) | iBizTODO是基于 [iBizPMS（iBiz软件生产管理）](https://gitee.com/ibizlab/iBizPMS) 提供的项目任务相关业务操作接口，面向项目任务管理的特定场景，参考 **[tower](https://tower.im/)** ，**[Jira](https://www.atlassian.com/software/jira)** 等成熟系统任务管理的前端交互方式，实现的一套专注于项目任务管理的应用级系统，目标是通过扁平化的项目任务管理，让用户对于任务的相关操作尽量方便、简单、直观、易于上手。 | http://todo.ibizlab.cn/<br>ibzadmin/123456 |

## 技术框架

iBizPMS使用了现代化软件架构，采取中台模式，前端技术使用Vue，后端技术使用Spring Boot/Cloud，界面提供了多种VSCode主题风格。

**架构图**

![framework](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/framework_v2.png)

**后端技术框架：[iBiz4j Spring R7](http://demo.ibizlab.cn/ibizr7sfstdtempl/ibiz4jr7)**

- 核心框架：Spring Boot
- 持久层框架: Mybatis-plus
- 服务发现：Nacos
- 日志管理：Logback
- 项目管理框架: Maven

**前端（PC端）技术框架：[iBiz-Vue-R7](https://gitee.com/ibizr7pfstdtempl/iBiz-Vue-Studio)**

- 前端框架：vue.js
- 路由：vue-router
- 状态管理：vuex
- 国际化：vue-i18n
- 数据交互：axios
- UI框架：element-ui, view-design
- 工具库：
  1. qs - BSD 3
  2. path-to-regexp
  3. rxjs - Apache-2.0
  4. interactjs
  5. moment
  6. xlsx - Apache-2.0
  7. file-saver
- 图标库：font-awesome
- 引用组件：
  1. tinymce - LGPL-2.1
  2. fullcalendar
  3. echarts - Apache-2.0
  4. ibiz-vue-lib
  5. ibiz-gantt-elastic

**前端（移动端）技术框架：[Vue_Mobile_R7](https://gitee.com/kk_ah/ibiz-vue-mobr7)**

- 前端MVVM框架：`vue.js ^2.6.11`
- 路由：`vue-router ^3.1.5`
- 状态管理：`vuex ^3.1.2`
- 国际化：`vue-i18n ^8.15.5`
- 数据交互：`axios ^0.19.2`
- UI框架：`@ionic/core ^5.0.5`, `vant ^2.5.4`
- 工具库：`qs ^6.9.1`, `path-to-regexp ^6.1.0`, `rxjs ^6.5.4`,`moment ^2.24.0`,`async-validator^3.3.0`
- 图标库：`font-awesome 4.7.0`, `ionicons ^5.0.1`
- 引入组件： `echarts ^4.6.0`，`ibiz-mobile-components`
- 代码风格检测：`tslint`

## 演示地址

演示Demo地址：http://pms.ibizlab.cn/

演示移动端地址：http://pms.ibizlab.cn/mob/

演示账号/密码：gitee/gitee@123，pms_guest/guest@123

> 统一认证、用户组织、权限、消息通知都连接了微服务，演示系统并未包含。

## 系统展示

### PC端

**产品**

- 产品--主页

  ![show15](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show15.png)

- 产品--概况

  ![show16](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show16.png)

- 产品--路线图

  ![show17](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show17.png)
  
- 产品-需求看板

  ![show46](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show46.png)

**项目**

- 项目--主页

  ![show18](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show18.png)

- 项目--概况

  ![show19](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show19.png)

- 项目--看板

  ![show20](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show20.png)

- 项目--燃尽图

  ![show21](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show21.png)

- 项目--甘特图

  ![show22](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show22.png)

- 项目-团队成员

  ![show48](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show48.png)


**测试**

- 测试--主页

  ![show23](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show23.png)

- 测试-看板

  ![show47](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show47.png)

- 测试--测试结果

  ![show24](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show24.png)

- 测试-测试报告

  ![show42](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show42.png)

  ![show43](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show43.png)

**我的地盘**

- 我的地盘--主页

  ![show25](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show25.png)

- 我的地盘-汇报

  ![show45](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show45.png)

**我的收藏**

- 我的收藏--需求

  ![show30](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show30.png)

**统计报表**

- 统计报表-列表

  ![show44](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show44.png)

**文档库**

- 文档库-树视图

  ![show49](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show49.png)

- 文档库-详细视图

  ![show50](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show50.png)

### 移动端

**产品**

- 产品-产品列表

![show31](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show31.png)

- 产品-主页

![show32](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show32.png)

**项目**

- 项目-项目列表

![show33](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show33.png)

- 项目-主页

![show34](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show34.png)

**测试**

- 测试-测试列表

![show35](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show35.png)

- 测试-主页

![show36](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show36.png)

**我的地盘**

- 我的地盘-我的待办

![show37](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show37.png)

- 我的地盘-自定义仪表盘

![show38](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show38.png)

![show39](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show39.png)

- 我的地盘-我的工作

![show40](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show40.png)

**设置**

- 设置-首页

![show41](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/show41.png)

### 接口

参照[接口文档](https://gitee.com/ibizlab/iBizPMS/tree/master/ibizpms-docs/src/main/doc/v1/service/webapi/webapi_v1.md)。

## 附录

### 里程碑

| No.  | 日期       | 事件与版本         | 备注说明                                                     |
| ---- | ---------- | ------------------ | ------------------------------------------------------------ |
| 1    | 2020-05-06 | 选型预研           | 国内外项目管理软件整理和对比                                 |
| 2    | 2020-05-11 | 业务分析、技术预研 | 业务分析、场景分析，用户画像                                 |
| 3    | 2020-05-18 | **项目启动**       | 项目正式启动                                                 |
| 4    | 2020-05-18 | 业务模型与界面整理 | 业务模型整理：梳理管理业务数据模型以及模型关系<br>禅道界面、组件参照：梳理界面表现和组件模型 |
| 5    | 2020-05-25 | 禅道API整理        | 梳理禅道API，抽象共通性                                      |
| 6    | 2020-06-01 | V0.0.1.20200601    | 新增：<br>1. iBizPMS 连接禅道 API                            |
| 7    | 2020-07-07 | V0.0.2.20200707    | 新增：<br>1. 项目管理功能：产品、项目、测试功能              |
| 8    | 2020-08-03 | V0.0.3.20200803    | 新增：<br>1. 我的地盘<br>2. 定制化首页<br>3. 集成LDAP用户（微服务iBizRuntime） |
| 9    | 2020-08-22 | V0.0.4.20200822    | 新增：<br>1. 统一认证（微服务iBizRuntime）<br>2. 统一用户（微服务iBizRuntime）<br>3. 统一角色权限（微服务iBizRuntime）<br>4. 移动端H5，支持我的地盘、产品、项目、测试、待办<br>5. 集成进钉钉应用 |
| 10   | 2020-08-30 | V0.0.5.20200830    | 新增：<br>1. 我的收藏                                        |
| 10   | 2020-09-20 | V0.0.6.20200920    | 新增：<br>1. 与iBiz生产系统连接：需求、代码发布、系统部署<br>2. 移动端首页定制化（个人仪表盘）<br>3. 移动端个人办公日历（任务、BUG、待办）<br>4. 移动端主题<br>5. 钉钉待办、消息集成 |
| 11   | 2020-09-30 | V0.0.7.20200930    | 新增：<br>1. 测试报告<br>2. 统计列表（匹配禅道开源版）       |
| 12   | 2020-10-18 | V0.0.8.20201018    | 新增：<br>1. 禅道接口移除<br>2. 统计视图（年度统计）         |
| 13   | 2020-11-16 | V0.0.9.20201116    | 新增：<br>1. 我的地盘-日历视图<br>2. 管理员模式，提供人员、组织的管理功能<br>3. 组织权限<br>4. 文档库<br>5. 系统报告（实体、数据字典、外部接口）<br>6. 系统SQL提供 |
| 14   | 2020-12-6  | V0.0.10.20201206   | 新增：<br/>1. 我的地盘-汇报-日报、周报、月报<br/>2. 文档内容模板独立维护<br>3. 需求看板<br>4. 测试看板<br>5. 任务分组视图、树视图<br>6. 项目团队成员卡片视图 |
| 15   | 2020-12-31 | V0.0.11.20201231   | 新增：<br/>1. 产品日报、周报、月报<br/>2. 项目日报、周报、月报<br/>3. 支持简易管理模式切换<br/>4. 全局搜索（数据库版） |
| 16   | 2021-01-07 | V0.0.12.20210107   | 新增：<br/>1. 全局搜索（ES）                                 |

### 即将到来

- 企业微信
- 插件开发：iBizPMS会开放出可实现的插件接口，开发者便可以以插件方式对系统进行补充与升级。

### 开发历程

iBiz生产体系渐进式战略三步走，将iBiz开源系统构建划分为3个阶段，根据iBiz生产体系模型化快速开发的特性，广泛吸纳互联网开源项目数据模型与界面业务组织，完成无侵入的服务能力导入与模型化的界面开发的第一阶段，以此为基础进行业务的二次编排与扩展的第二阶段，最终借助iBiz强大的业务模型设计能力进行业务逻辑的完全接管实现第三阶段。

| 阶段             | 研发周期                                                     | 投入团队                 |
| ---------------- | ------------------------------------------------------------ | ------------------------ |
| 阶段一：无入侵   | 周期Ⅰ：项目启动                                              | 系统结构团队<br>先导孵化团队 |
| 阶段二：扩展     | 周期Ⅱ：规模化开发期<br>周期Ⅲ：移交开发期（中前期）           | 先导孵化团队<br>标准研发团队 |
| 阶段三：完全掌握 | 周期Ⅲ：移交开发期（中后期）<br>周期Ⅳ：稳定开发期<br>周期Ⅴ：研发收敛期 | 标准研发团队<br>研发收敛团队 |

![devstage](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/devstage_v1.png)

Git提交记录统计（截止2020-10-18）

| 周期                  | 提交总数<br>(有效数) | 机器代码提交数<br>(有效数) | 机器代码提交比例 | 机器代码日均提交数 |
| --------------------- | -------------------- | -------------------------- | ---------------- | ------------------ |
| 周期Ⅰ<br>5/24 ~ 5/31  | 230                  | 217                        | 94.34%           | 27.12              |
| 周期Ⅱ<br>6/1 ~ 7/7    | 873(804)             | 721(665)                   | 82.71%           | 17.97              |
| 周期Ⅲ<br>7/8 ~ 8/3    | 1678(874)            | 1411(703)                  | 80.43%           | 27.03              |
| 周期Ⅳ<br>8/4 ~ 9/20   | 2073(1920)           | 1717 (1576)                | 82.83%           | 32.83              |
| 周期Ⅴ<br>9/21 ~ 10/18 | 816                  | 684                        | 83.82%           | 23.14              |
| 总计/平均             | 5670(4644)           | 4750(3845)                 | 82.79%           | 25.97              |

> 有效数：由于代码提交过程中发现仓库用户变动导致有部分代码记录了双份的提交记录，有效数据即为排除这些干扰数据统计而成，机器代码提交比例均使用有效数据计算。

### 快速建立issue

在运行系统的任意一个界面上，敲下“Ctrl+F12”或者点击右下角“显示Debug栏”，便会呈现“新建issues”的操作，点击便可以快速建立issue。

![issue1](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/issue1.png)

![issue2](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/issue2.png)

### 开发说明

iBizPMS使用的是微服务架构模式，因此在项目运行中，存在一部分功能需要依赖其它系统提供的微服务能力，因此在本地开发时，在没有微服务的前提下，iBizPMS提供了单机开发模式：

只需要启动ibizpms-boot模块下DevBootApplication即可。

然而在使用本地开发模式时，相关微服务的功能也无法使用，具体微服务请参照[iBizPMS使用到的其它系统微服务](#iBizPMS使用到的其它系统微服务)。

### 引用的微服务

iBizPMS使用了 [埃毕致开源商业套件](https://gitee.com/ibizlab)下  [iBizRuntime（微服务运行时）](https://gitee.com/ibizlab/ibizlab-runtime)的相关运行支撑服务。

目前使用到的微服务：

| 序号 | 微服务     | 说明                                 | iBizPMS应用说明          |
| ---- | ---------- | ------------------------------------ | ------------------------ |
| 1    | ibz-uaa    | 统一认证授权微服务（支持第三方认证） | 统一认证，角色、权限管理 |
| 2    | ibz-ou     | 组织人事管理微服务                   | 用户、组织管理           |
| 3    | ibz-notify | 通知微服务                           | 钉钉待办与消息通知       |

### 开发过程现场直播

想了解iBizPMS是如何开发的，[点击](http://mos.ibizlab.cn/mos/?#/common_mosindex/srfkeys=3A921F6B-613D-4975-ACD6-79565D82E1DE )进入观看吧。 

同样在iBizPMS运行系统的任意一个界面上，敲下“Ctrl+F12”或者点击右下角“显示Debug栏”，点击“配置”的操作，也可以进入观看。

![fl001](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/fl001.png)

![fl002](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/fl002.png)

### 了解更多

- 欢迎各位小伙伴了解和体验iBiz的开发模式：**[iBiz开源社区](https://www.ibizlab.cn/)** 。
- 深度开发内测申请：**[iBiz建模平台内测申请通道](https://gitee.com/ibizlab/iBizEHR/wikis/建模平台内测须知?sort_id=2992220)**。 
- 对于iBizPMS学习、开发参与、插件开发有兴趣的小伙伴们，欢迎加入iBizPMS交流QQ群：1067434627

![QQ](https://xtemplcdn.oss-cn-shanghai.aliyuncs.com/pms/QQ.png)

### 感谢

最后对以下参与的小伙伴发出衷心的感谢。

@Unidentified、@Yuzuriha_Inori、@crimson777、@huwei_031588 、@nancygitee 、@xignzi、前端模板团队、后端模板团队、CI/CD团队
