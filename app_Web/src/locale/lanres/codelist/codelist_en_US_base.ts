import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
  const data:any = {
      ActionManner: {
          "story_closed_willnotdo": commonLogic.appcommonhandle("不做",null),
          "story_closed_cancel": commonLogic.appcommonhandle("已取消",null),
          "story_closed_done": commonLogic.appcommonhandle("已完成",null),
          "story_closed_subdivided": commonLogic.appcommonhandle("已细分",null),
          "story_closed_postponed": commonLogic.appcommonhandle("延期",null),
          "story_closed_bydesign": commonLogic.appcommonhandle("设计如此",null),
          "story_closed_duplicate": commonLogic.appcommonhandle("重复",null),
          "bug_resolved_willnotfix": commonLogic.appcommonhandle("不予解决",null),
          "bug_resolved_external": commonLogic.appcommonhandle("外部原因",null),
          "bug_resolved_fixed": commonLogic.appcommonhandle("已解决",null),
          "bug_resolved_postponed": commonLogic.appcommonhandle("延期处理",null),
          "bug_resolved_notrepro": commonLogic.appcommonhandle("无法重现",null),
          "bug_resolved_bydesign": commonLogic.appcommonhandle("设计如此",null),
          "bug_resolved_tostory": commonLogic.appcommonhandle("转为需求",null),
          "bug_resolved_duplicate": commonLogic.appcommonhandle("重复Bug",null),
          "story_reviewed_reject": commonLogic.appcommonhandle("拒绝",null),
          "story_reviewed_revert": commonLogic.appcommonhandle("撤销变更",null),
          "story_reviewed_clarify": commonLogic.appcommonhandle("有待明确",null),
          "story_reviewed_pass": commonLogic.appcommonhandle("确认通过",null),
          " release_changestatus_terminate": commonLogic.appcommonhandle("停止维护",null),
          " release_changestatus_normal": commonLogic.appcommonhandle("正常",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      SQLBuild: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      Testresult__result: {
          "n/a": commonLogic.appcommonhandle("忽略",null),
          "pass": commonLogic.appcommonhandle("通过",null),
          "fail": commonLogic.appcommonhandle("失败",null),
          "blocked": commonLogic.appcommonhandle("阻塞",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Story__closed_reason: {
          "done": commonLogic.appcommonhandle("已完成",null),
          "subdivided": commonLogic.appcommonhandle("已细分",null),
          "duplicate": commonLogic.appcommonhandle("重复",null),
          "postponed": commonLogic.appcommonhandle("延期",null),
          "willnotdo": commonLogic.appcommonhandle("不做",null),
          "cancel": commonLogic.appcommonhandle("已取消",null),
          "bydesign": commonLogic.appcommonhandle("设计如此",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      UserRealNameProject: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      AllBug: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      Task__color: {
          "#3da7f5": commonLogic.appcommonhandle("#3da7f5",null),
          "#75c941": commonLogic.appcommonhandle("#75c941",null),
          "#2dbdb2": commonLogic.appcommonhandle("#2dbdb2",null),
          "#797ec9": commonLogic.appcommonhandle("#797ec9",null),
          "#ffaf38": commonLogic.appcommonhandle("#ffaf38",null),
          "#ff4e3e": commonLogic.appcommonhandle("#ff4e3e",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Pri: {
          "1": commonLogic.appcommonhandle("一般",null),
          "2": commonLogic.appcommonhandle("最高",null),
          "3": commonLogic.appcommonhandle("较高",null),
          "4": commonLogic.appcommonhandle("最低",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      TestTask: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      ProjectProductPlan: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      CodeList25: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      CodeList: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      MyCompleteTask: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      ReportStatus: {
          "0": commonLogic.appcommonhandle("未读",null),
          "1": commonLogic.appcommonhandle("已读",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      CodeList81: {
          "2010": commonLogic.appcommonhandle("2010年",null),
          "2011": commonLogic.appcommonhandle("2011年",null),
          "2012": commonLogic.appcommonhandle("2012年",null),
          "2013": commonLogic.appcommonhandle("2013年",null),
          "2014": commonLogic.appcommonhandle("2014年",null),
          "2015": commonLogic.appcommonhandle("2015年",null),
          "2016": commonLogic.appcommonhandle("2016年",null),
          "2017": commonLogic.appcommonhandle("2017年",null),
          "2018": commonLogic.appcommonhandle("2018年",null),
          "2019": commonLogic.appcommonhandle("2019年",null),
          "2020": commonLogic.appcommonhandle("2020年",null),
          "2021": commonLogic.appcommonhandle("2021年",null),
          "2022": commonLogic.appcommonhandle("2022年",null),
          "2023": commonLogic.appcommonhandle("2023年",null),
          "2024": commonLogic.appcommonhandle("2024年",null),
          "2025": commonLogic.appcommonhandle("2025年",null),
          "2026": commonLogic.appcommonhandle("2026年",null),
          "2027": commonLogic.appcommonhandle("2027年",null),
          "2028": commonLogic.appcommonhandle("2028年",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Project__status: {
          "wait": commonLogic.appcommonhandle("未开始",null),
          "doing": commonLogic.appcommonhandle("进行中",null),
          "suspended": commonLogic.appcommonhandle("已挂起",null),
          "closed": commonLogic.appcommonhandle("已关闭",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      ProductBranch_Cache: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      RELEASE_Type: {
          "DEPLOYPKG": commonLogic.appcommonhandle("部署系统组件到仓库",null),
          "PACKMOBAPP": commonLogic.appcommonhandle("打包移动应用",null),
          "PACKVER": commonLogic.appcommonhandle("打包版本",null),
          "PUBCODE": commonLogic.appcommonhandle("代码发布",null),
          "PUBCODE2": commonLogic.appcommonhandle("代码发布（模板开发）",null),
          "STARTMSAPI": commonLogic.appcommonhandle("启动微服务",null),
          "STARTMSAPP": commonLogic.appcommonhandle("启动微服务应用",null),
          "STARTMSFUNC": commonLogic.appcommonhandle("启动微服务功能",null),
          "STARTX": commonLogic.appcommonhandle("启动系统",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      SYS_UPDATE_BRANCH: {
          "PC": commonLogic.appcommonhandle("PC",null),
          "MOB": commonLogic.appcommonhandle("MOB",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      ProjectQuickpacket: {
          "All": commonLogic.appcommonhandle("所有",null),
          "nowait": commonLogic.appcommonhandle("未完成",null),
          "wait": commonLogic.appcommonhandle("未开始",null),
          "doing": commonLogic.appcommonhandle("进行中",null),
          "suspended": commonLogic.appcommonhandle("已挂起",null),
          "closed": commonLogic.appcommonhandle("已关闭",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      SysOperator: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      SystemAPP: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      StoryPoints: {
          "0": commonLogic.appcommonhandle("0",null),
          "0.5": commonLogic.appcommonhandle("0.5",null),
          "1": commonLogic.appcommonhandle("1",null),
          "2": commonLogic.appcommonhandle("2",null),
          "3": commonLogic.appcommonhandle("3",null),
          "5": commonLogic.appcommonhandle("5",null),
          "8": commonLogic.appcommonhandle("8",null),
          "13": commonLogic.appcommonhandle("13",null),
          "20": commonLogic.appcommonhandle("20",null),
          "40": commonLogic.appcommonhandle("40",null),
          "100": commonLogic.appcommonhandle("100",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Bug__os: {
          "all": commonLogic.appcommonhandle("全部",null),
          "windows": commonLogic.appcommonhandle("Windows",null),
          "win10": commonLogic.appcommonhandle("Windows 10",null),
          "win8": commonLogic.appcommonhandle("Windows 8",null),
          "win7": commonLogic.appcommonhandle("Windows 7",null),
          "vista": commonLogic.appcommonhandle("Windows Vista",null),
          "winxp": commonLogic.appcommonhandle("Windows XP",null),
          "win2012": commonLogic.appcommonhandle("Windows 2012",null),
          "win2008": commonLogic.appcommonhandle("Windows 2008",null),
          "win2003": commonLogic.appcommonhandle("Windows 2003",null),
          "win2000": commonLogic.appcommonhandle("Windows 2000",null),
          "android": commonLogic.appcommonhandle("Android",null),
          "ios": commonLogic.appcommonhandle("IOS",null),
          "wp8": commonLogic.appcommonhandle("WP8",null),
          "wp7": commonLogic.appcommonhandle("WP7",null),
          "symbian": commonLogic.appcommonhandle("Symbian",null),
          "linux": commonLogic.appcommonhandle("Linux",null),
          "freebsd": commonLogic.appcommonhandle("FreeBSD",null),
          "osx": commonLogic.appcommonhandle("OS X",null),
          "unix": commonLogic.appcommonhandle("Unix",null),
          "others": commonLogic.appcommonhandle("其他",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Doc__type: {
          "text": commonLogic.appcommonhandle("文档",null),
          "url": commonLogic.appcommonhandle("链接",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Project_staus: {
          "doing": commonLogic.appcommonhandle("进行中",null),
          "suspended": commonLogic.appcommonhandle("已挂起",null),
          "closed": commonLogic.appcommonhandle("已关闭",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Testreport__object_type: {
          "testtask": commonLogic.appcommonhandle("测试单",null),
          "project": commonLogic.appcommonhandle("项目",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Bug__severity: {
          "1": commonLogic.appcommonhandle("致命",null),
          "2": commonLogic.appcommonhandle("严重",null),
          "3": commonLogic.appcommonhandle("一般",null),
          "4": commonLogic.appcommonhandle("轻微",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Bug__browser: {
          "all": commonLogic.appcommonhandle("全部",null),
          "ie": commonLogic.appcommonhandle("IE系列",null),
          "ie11": commonLogic.appcommonhandle("IE11",null),
          "ie10": commonLogic.appcommonhandle("IE10",null),
          "ie9": commonLogic.appcommonhandle("IE9",null),
          "ie8": commonLogic.appcommonhandle("IE8",null),
          "ie7": commonLogic.appcommonhandle("IE7",null),
          "ie6": commonLogic.appcommonhandle("IE6",null),
          "chrome": commonLogic.appcommonhandle("chrome",null),
          "firefox": commonLogic.appcommonhandle("firefox系列",null),
          "firefox4": commonLogic.appcommonhandle("firefox4",null),
          "firefox3": commonLogic.appcommonhandle("firefox3",null),
          "firefox2": commonLogic.appcommonhandle("firefox2",null),
          "opera": commonLogic.appcommonhandle("opera系列",null),
          "opera11": commonLogic.appcommonhandle("opera11",null),
          "oprea10": commonLogic.appcommonhandle("oprea10",null),
          "opera9": commonLogic.appcommonhandle("opera9",null),
          "safari": commonLogic.appcommonhandle("safari",null),
          "maxthon": commonLogic.appcommonhandle("傲游",null),
          "uc": commonLogic.appcommonhandle("UC",null),
          "others": commonLogic.appcommonhandle("其他",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Todo__status: {
          "wait": commonLogic.appcommonhandle("未开始",null),
          "doing": commonLogic.appcommonhandle("进行中",null),
          "done": commonLogic.appcommonhandle("已完成",null),
          "closed": commonLogic.appcommonhandle("已关闭",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      BugUserRealName: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      Project__type: {
          "sprint": commonLogic.appcommonhandle("短期项目",null),
          "waterfall": commonLogic.appcommonhandle("长期项目",null),
          "ops": commonLogic.appcommonhandle("运维项目",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Story__status: {
          "draft": commonLogic.appcommonhandle("草稿",null),
          "active": commonLogic.appcommonhandle("激活",null),
          "closed": commonLogic.appcommonhandle("已关闭",null),
          "changed": commonLogic.appcommonhandle("已变更",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Action__read: {
          "0": commonLogic.appcommonhandle("0",null),
          "1": commonLogic.appcommonhandle("1",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Project__pri: {
          "1": commonLogic.appcommonhandle("1",null),
          "2": commonLogic.appcommonhandle("2",null),
          "3": commonLogic.appcommonhandle("3",null),
          "4": commonLogic.appcommonhandle("4",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      ConfigGroup: {
          "GROUP": commonLogic.appcommonhandle("分组",null),
          "ITEM": commonLogic.appcommonhandle("配置项",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      ProductActionQuickpacket: {
          "All": commonLogic.appcommonhandle("所有",null),
          "today": commonLogic.appcommonhandle("今天",null),
          "yesterday": commonLogic.appcommonhandle("昨天",null),
          "thisweek": commonLogic.appcommonhandle("本周",null),
          "lastweek": commonLogic.appcommonhandle("上周",null),
          "thismonth": commonLogic.appcommonhandle("本月",null),
          "lastmonth": commonLogic.appcommonhandle("上月",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Doc__acl: {
          "open": commonLogic.appcommonhandle("公开",null),
          "private": commonLogic.appcommonhandle("私有",null),
          "custom": commonLogic.appcommonhandle("自定义",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      ProductBranch: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      ExpiredPlan: {
          "1": commonLogic.appcommonhandle("过期计划",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Testtask__pri: {
          "1": commonLogic.appcommonhandle("1",null),
          "2": commonLogic.appcommonhandle("2",null),
          "3": commonLogic.appcommonhandle("3",null),
          "4": commonLogic.appcommonhandle("4",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Story__pri: {
          "1": commonLogic.appcommonhandle("1",null),
          "2": commonLogic.appcommonhandle("2",null),
          "3": commonLogic.appcommonhandle("3",null),
          "4": commonLogic.appcommonhandle("4",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Story__review_result_draft: {
          "pass": commonLogic.appcommonhandle("确认通过",null),
          "clarify": commonLogic.appcommonhandle("有待明确",null),
          "reject": commonLogic.appcommonhandle("拒绝",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      ProjectQuickpaketMy: {
          "All": commonLogic.appcommonhandle("我的项目",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      PlanAcl: {
          "open": commonLogic.appcommonhandle("公开",null),
          "private": commonLogic.appcommonhandle("私有",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      ProductQuickpacket: {
          "All": commonLogic.appcommonhandle("所有",null),
          "normal": commonLogic.appcommonhandle("未关闭",null),
          "closed": commonLogic.appcommonhandle("已关闭",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      NeedNotReviewNew: {
          "1": commonLogic.appcommonhandle("不需要评审",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Story__type: {
          "requirement": commonLogic.appcommonhandle("用户需求",null),
          "story": commonLogic.appcommonhandle("软件需求",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Testcase__color: {
          "#3da7f5": commonLogic.appcommonhandle("#3da7f5",null),
          "#75c941": commonLogic.appcommonhandle("#75c941",null),
          "#2dbdb2": commonLogic.appcommonhandle("#2dbdb2",null),
          "#797ec9": commonLogic.appcommonhandle("#797ec9",null),
          "#ffaf38": commonLogic.appcommonhandle("#ffaf38",null),
          "#ff4e3e": commonLogic.appcommonhandle("#ff4e3e",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      BurnQuickpacket: {
          "exWeek": commonLogic.appcommonhandle("去除周末",null),
          "Week": commonLogic.appcommonhandle("显示周末",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Testcase__frame: {
          "junit": commonLogic.appcommonhandle("JUnit",null),
          "testng": commonLogic.appcommonhandle("TestNG",null),
          "phpunit": commonLogic.appcommonhandle("PHPUnit",null),
          "pytest": commonLogic.appcommonhandle("Pytest",null),
          "jtest": commonLogic.appcommonhandle("JTest",null),
          "cppunit": commonLogic.appcommonhandle("CppUnit",null),
          "gtest": commonLogic.appcommonhandle("GTest",null),
          "qtest": commonLogic.appcommonhandle("QTest",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Private_choose: {
          "1": commonLogic.appcommonhandle("是",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      AllCase: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      APPBuild: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      Action__object_type: {
          "product": commonLogic.appcommonhandle("产品",null),
          "story": commonLogic.appcommonhandle("需求",null),
          "productplan": commonLogic.appcommonhandle("计划",null),
          "release": commonLogic.appcommonhandle("发布",null),
          "project": commonLogic.appcommonhandle("项目",null),
          "task": commonLogic.appcommonhandle("任务",null),
          "build": commonLogic.appcommonhandle("版本",null),
          "bug": commonLogic.appcommonhandle("Bug",null),
          "case": commonLogic.appcommonhandle("用例",null),
          "caseresult": commonLogic.appcommonhandle("用例结果",null),
          "stepresult": commonLogic.appcommonhandle("用例步骤",null),
          "testtask": commonLogic.appcommonhandle("测试单",null),
          "user": commonLogic.appcommonhandle("用户",null),
          "doc": commonLogic.appcommonhandle("文档",null),
          "doclib": commonLogic.appcommonhandle("文档库",null),
          "todo": commonLogic.appcommonhandle("待办",null),
          "branch": commonLogic.appcommonhandle("分支",null),
          "module": commonLogic.appcommonhandle("模块",null),
          "testsuite": commonLogic.appcommonhandle("套件",null),
          "caselib": commonLogic.appcommonhandle("用例库",null),
          "testreport": commonLogic.appcommonhandle("报告",null),
          "entry": commonLogic.appcommonhandle("应用",null),
          "webhook": commonLogic.appcommonhandle("Webhook",null),
          "daily": commonLogic.appcommonhandle("日报",null),
          "weekly": commonLogic.appcommonhandle("周报",null),
          "monthly": commonLogic.appcommonhandle("月报",null),
          "reportly": commonLogic.appcommonhandle("汇报",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      RELEASE_rebuild: {
          "0": commonLogic.appcommonhandle("无操作",null),
          "1": commonLogic.appcommonhandle("快速（删除本地项目与代码仓库多余文件）",null),
          "4": commonLogic.appcommonhandle("修复模型",null),
          "2": commonLogic.appcommonhandle("完整（完全重建本地项目及代码仓库）",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Task__pri: {
          "1": commonLogic.appcommonhandle("1",null),
          "2": commonLogic.appcommonhandle("2",null),
          "3": commonLogic.appcommonhandle("3",null),
          "4": commonLogic.appcommonhandle("4",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Release__status: {
          "normal": commonLogic.appcommonhandle("正常",null),
          "terminate": commonLogic.appcommonhandle("停止维护",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      AllRole: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      TodoQuickpacketMy: {
          "All": commonLogic.appcommonhandle("所有待办",null),
          "thisyear": commonLogic.appcommonhandle("本年度",null),
          "Unfinished": commonLogic.appcommonhandle("未完",null),
          "BYME": commonLogic.appcommonhandle("待定",null),
          "cycle": commonLogic.appcommonhandle("周期",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      TASK_QuickacketMy: {
          "TOME": commonLogic.appcommonhandle("指派给我",null),
          "CANCELLED": commonLogic.appcommonhandle("由我创建",null),
          "IFINISHED": commonLogic.appcommonhandle("由我完成",null),
          "COMPLETED": commonLogic.appcommonhandle("由我关闭",null),
          "CLOSED": commonLogic.appcommonhandle("由我取消",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Realease_sort: {
          "all": commonLogic.appcommonhandle("所有",null),
          "normal": commonLogic.appcommonhandle("正常",null),
          "terminate": commonLogic.appcommonhandle("停止维护",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      UserTplType: {
          "story": commonLogic.appcommonhandle("需求",null),
          "task": commonLogic.appcommonhandle("任务",null),
          "bug": commonLogic.appcommonhandle("Bug",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      UserTplQuickGroup: {
          "all": commonLogic.appcommonhandle("所有",null),
          "story": commonLogic.appcommonhandle("需求",null),
          "task": commonLogic.appcommonhandle("任务",null),
          "bug": commonLogic.appcommonhandle("Bug",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      TestCaseStatusGrid: {
          "wait": commonLogic.appcommonhandle("未开始",null),
          "normal": commonLogic.appcommonhandle("正常",null),
          "blocked": commonLogic.appcommonhandle("被阻塞",null),
          "investigate": commonLogic.appcommonhandle("研究中",null),
          "done": commonLogic.appcommonhandle("已完成",null),
          "storychange": commonLogic.appcommonhandle("需求变更",null),
          "casechange": commonLogic.appcommonhandle("原用例更新",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Product: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      IsAssigned: {
          "assign": commonLogic.appcommonhandle("已指派",null),
          "noassign": commonLogic.appcommonhandle("未指派",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      UserRealName: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      Zt__delta: {
          "7": commonLogic.appcommonhandle("一星期",null),
          "14": commonLogic.appcommonhandle("两星期",null),
          "31": commonLogic.appcommonhandle("一个月",null),
          "62": commonLogic.appcommonhandle("两个月",null),
          "93": commonLogic.appcommonhandle("三个月",null),
          "186": commonLogic.appcommonhandle("半年",null),
          "365": commonLogic.appcommonhandle("一年",null),
          "empty": commonLogic.appcommonhandle("按时间段",null)
      },
      BugCodeList2: {
          "All": commonLogic.appcommonhandle("所有",null),
          "active": commonLogic.appcommonhandle("未解决",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      BugQuickpacketMy: {
          "TOME": commonLogic.appcommonhandle("指派给我",null),
          "ICREATE": commonLogic.appcommonhandle("由我创建",null),
          "BYME": commonLogic.appcommonhandle("由我解决",null),
          "WAITCLOSED": commonLogic.appcommonhandle("由我关闭",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Date_disable: {
          "on": commonLogic.appcommonhandle("待定",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Story__stage: {
          "wait": commonLogic.appcommonhandle("未开始",null),
          "planned": commonLogic.appcommonhandle("已计划",null),
          "projected": commonLogic.appcommonhandle("已立项",null),
          "developing": commonLogic.appcommonhandle("研发中",null),
          "developed": commonLogic.appcommonhandle("研发完毕",null),
          "testing": commonLogic.appcommonhandle("测试中",null),
          "tested": commonLogic.appcommonhandle("测试完毕",null),
          "verified": commonLogic.appcommonhandle("已验收",null),
          "released": commonLogic.appcommonhandle("已发布",null),
          "closed": commonLogic.appcommonhandle("已关闭",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      MonthlyCompleteTaskChoice: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      Beginend_disable: {
          "on": commonLogic.appcommonhandle("暂时不设定时间",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      UserRealNameW: {
          "empty": commonLogic.appcommonhandle("未指派",null),
      },
      Bug__pri: {
          "1": commonLogic.appcommonhandle("严重",null),
          "2": commonLogic.appcommonhandle("主要",null),
          "3": commonLogic.appcommonhandle("次要",null),
          "4": commonLogic.appcommonhandle("不重要",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      SYS_UPDATE_LOG_TYPE: {
          "10": commonLogic.appcommonhandle("功能增强",null),
          "20": commonLogic.appcommonhandle("优化",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Project__statge: {
          "1": commonLogic.appcommonhandle("1",null),
          "2": commonLogic.appcommonhandle("2",null),
          "3": commonLogic.appcommonhandle("3",null),
          "4": commonLogic.appcommonhandle("4",null),
          "5": commonLogic.appcommonhandle("5",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      UserRealNameProductTeamNotAssign: {
          "empty": commonLogic.appcommonhandle("未指派",null),
      },
      Bug__status: {
          "active": commonLogic.appcommonhandle("激活",null),
          "resolved": commonLogic.appcommonhandle("已解决",null),
          "closed": commonLogic.appcommonhandle("已关闭",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      BugCreateResolve: {
          "1": commonLogic.appcommonhandle("创建",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Testsuite__type: {
          "library": commonLogic.appcommonhandle("用例库",null),
          "private": commonLogic.appcommonhandle("私有",null),
          "public": commonLogic.appcommonhandle("公开",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      TestsuiteTypeNew: {
          "private": commonLogic.appcommonhandle("私有",null),
          "public": commonLogic.appcommonhandle("公开",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      UserRealNameTaskMTeam: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      Testcase__stage: {
          "unittest": commonLogic.appcommonhandle("单元测试阶段",null),
          "feature": commonLogic.appcommonhandle("功能测试阶段",null),
          "intergrate": commonLogic.appcommonhandle("集成测试阶段",null),
          "system": commonLogic.appcommonhandle("系统测试阶段",null),
          "smoke": commonLogic.appcommonhandle("冒烟测试阶段",null),
          "bvt": commonLogic.appcommonhandle("版本验证阶段",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Casestep__type: {
          "step": commonLogic.appcommonhandle("步骤",null),
          "group": commonLogic.appcommonhandle("分组",null),
          "item": commonLogic.appcommonhandle("分组步骤",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Product__acl: {
          "open": commonLogic.appcommonhandle("默认设置(有产品视图权限，即可访问)",null),
          "private": commonLogic.appcommonhandle("私有产品(相关负责人和项目团队成员才能访问)",null),
          "custom": commonLogic.appcommonhandle("自定义白名单(团队成员和白名单的成员可以访问)",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      UserRealNameUnAssignTo_Gird: {
          "empty": commonLogic.appcommonhandle("未指派",null),
      },
      Role: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      CurProductBuild: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      Type: {
          "custom": commonLogic.appcommonhandle("自定义",null),
          "bug": commonLogic.appcommonhandle("Bug",null),
          "task": commonLogic.appcommonhandle("项目任务",null),
          "story": commonLogic.appcommonhandle("项目需求",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Doclib__type: {
          "product": commonLogic.appcommonhandle("产品文档库",null),
          "project": commonLogic.appcommonhandle("项目文档库",null),
          "custom": commonLogic.appcommonhandle("自定义文档库",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Zt__productplan: {
          "All": commonLogic.appcommonhandle("所有",null),
          "UNEXPIRED": commonLogic.appcommonhandle("未过期",null),
          "ISEXPIRED": commonLogic.appcommonhandle("已过期",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      UserRealName_Gird: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      CodeList47: {
          "1": commonLogic.appcommonhandle("1号",null),
          "2": commonLogic.appcommonhandle("2号",null),
          "3": commonLogic.appcommonhandle("3号",null),
          "4": commonLogic.appcommonhandle("4号",null),
          "5": commonLogic.appcommonhandle("5号",null),
          "6": commonLogic.appcommonhandle("6号",null),
          "7": commonLogic.appcommonhandle("7号",null),
          "8": commonLogic.appcommonhandle("8号",null),
          "9": commonLogic.appcommonhandle("9号",null),
          "10": commonLogic.appcommonhandle("10号",null),
          "11": commonLogic.appcommonhandle("11号",null),
          "12": commonLogic.appcommonhandle("12号",null),
          "13": commonLogic.appcommonhandle("13号",null),
          "14": commonLogic.appcommonhandle("14号",null),
          "15": commonLogic.appcommonhandle("15号",null),
          "16": commonLogic.appcommonhandle("16号",null),
          "17": commonLogic.appcommonhandle("17号",null),
          "18": commonLogic.appcommonhandle("18号",null),
          "19": commonLogic.appcommonhandle("19号",null),
          "20": commonLogic.appcommonhandle("20号",null),
          "21": commonLogic.appcommonhandle("21号",null),
          "22": commonLogic.appcommonhandle("22号",null),
          "23": commonLogic.appcommonhandle("23号",null),
          "24": commonLogic.appcommonhandle("24号",null),
          "25": commonLogic.appcommonhandle("25号",null),
          "26": commonLogic.appcommonhandle("26号",null),
          "27": commonLogic.appcommonhandle("27号",null),
          "28": commonLogic.appcommonhandle("28号",null),
          "29": commonLogic.appcommonhandle("29号",null),
          "30": commonLogic.appcommonhandle("30号",null),
          "31": commonLogic.appcommonhandle("31号",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      PlantempletType: {
          "step": commonLogic.appcommonhandle("计划",null),
          "group": commonLogic.appcommonhandle("父计划",null),
          "item": commonLogic.appcommonhandle("子计划",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      YesNo: {
          "1": commonLogic.appcommonhandle("是",null),
          "0": commonLogic.appcommonhandle("否",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      RelatedStory: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      AllEntry: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      CaseTestTaskQuickpachet: {
          "ALL": commonLogic.appcommonhandle("所有用例",null),
          "TOME": commonLogic.appcommonhandle("指派给我",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Product__type: {
          "normal": commonLogic.appcommonhandle("正常",null),
          "branch": commonLogic.appcommonhandle("多分支",null),
          "platform": commonLogic.appcommonhandle("多平台",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      ConfigScope: {
          "sys": commonLogic.appcommonhandle("全局",null),
          "org": commonLogic.appcommonhandle("当前组织",null),
          "dept1": commonLogic.appcommonhandle("当前部门（含子部门）",null),
          "dept2": commonLogic.appcommonhandle("当前部门（不含子部门）",null),
          "user": commonLogic.appcommonhandle("个人",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      PlanCodeList: {
          "empty": commonLogic.appcommonhandle("未计划",null),
      },
      CurProductProject: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      AllRepo: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      Story__review_result: {
          "pass": commonLogic.appcommonhandle("确认通过",null),
          "revert": commonLogic.appcommonhandle("撤销变更",null),
          "clarify": commonLogic.appcommonhandle("有待明确",null),
          "reject": commonLogic.appcommonhandle("拒绝",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      File__object_type: {
          "product": commonLogic.appcommonhandle("产品",null),
          "story": commonLogic.appcommonhandle("需求",null),
          "productplan": commonLogic.appcommonhandle("计划",null),
          "release": commonLogic.appcommonhandle("发布",null),
          "project": commonLogic.appcommonhandle("项目",null),
          "task": commonLogic.appcommonhandle("任务",null),
          "build": commonLogic.appcommonhandle("版本",null),
          "bug": commonLogic.appcommonhandle("Bug",null),
          "case": commonLogic.appcommonhandle("用例",null),
          "caseresult": commonLogic.appcommonhandle("用例结果",null),
          "stepresult": commonLogic.appcommonhandle("用例步骤",null),
          "testtask": commonLogic.appcommonhandle("测试单",null),
          "user": commonLogic.appcommonhandle("用户",null),
          "doc": commonLogic.appcommonhandle("文档",null),
          "doclib": commonLogic.appcommonhandle("文档库",null),
          "todo": commonLogic.appcommonhandle("待办",null),
          "branch": commonLogic.appcommonhandle("分支",null),
          "module": commonLogic.appcommonhandle("模块",null),
          "testsuite": commonLogic.appcommonhandle("套件",null),
          "caselib": commonLogic.appcommonhandle("用例库",null),
          "testreport": commonLogic.appcommonhandle("报告",null),
          "entry": commonLogic.appcommonhandle("应用",null),
          "webhook": commonLogic.appcommonhandle("Webhook",null),
          "daily": commonLogic.appcommonhandle("日报",null),
          "weekly": commonLogic.appcommonhandle("周报",null),
          "monthly": commonLogic.appcommonhandle("月报",null),
          "reportly": commonLogic.appcommonhandle("汇报",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      CurProductPlan: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      UserRealNameProductTeam: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      Module__type: {
          "line": commonLogic.appcommonhandle("产品线",null),
          "story": commonLogic.appcommonhandle("需求",null),
          "task": commonLogic.appcommonhandle("任务",null),
          "doc": commonLogic.appcommonhandle("文档目录",null),
          "case": commonLogic.appcommonhandle("测试用例",null),
          "bug": commonLogic.appcommonhandle("Bug",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Task__status: {
          "wait": commonLogic.appcommonhandle("未开始",null),
          "doing": commonLogic.appcommonhandle("进行中",null),
          "done": commonLogic.appcommonhandle("已完成",null),
          "pause": commonLogic.appcommonhandle("已暂停",null),
          "cancel": commonLogic.appcommonhandle("已取消",null),
          "closed": commonLogic.appcommonhandle("已关闭",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Backendservicesystem: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      Doclib__acl: {
          "default": commonLogic.appcommonhandle("默认",null),
          "custom": commonLogic.appcommonhandle("自定义",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      YesNo2: {
          "1": commonLogic.appcommonhandle("是",null),
          "0": commonLogic.appcommonhandle("否",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      MyPlanTask: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      ProjectCodeList: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      UserRealNameTaskTeam: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      CodeList46: {
          "2": commonLogic.appcommonhandle("星期一",null),
          "3": commonLogic.appcommonhandle("星期二",null),
          "4": commonLogic.appcommonhandle("星期三",null),
          "5": commonLogic.appcommonhandle("星期四",null),
          "6": commonLogic.appcommonhandle("星期五",null),
          "7": commonLogic.appcommonhandle("星期六",null),
          "1": commonLogic.appcommonhandle("星期日",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      TaskStatusCK: {
          "wait": commonLogic.appcommonhandle("未开始",null),
          "doing": commonLogic.appcommonhandle("进行中",null),
          "done": commonLogic.appcommonhandle("已完成",null),
          "pause": commonLogic.appcommonhandle("已暂停",null),
          "cancel": commonLogic.appcommonhandle("已取消",null),
          "closed": commonLogic.appcommonhandle("已关闭",null),
          "storychange": commonLogic.appcommonhandle("需求变更",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Bug__color: {
          "#3da7f5": commonLogic.appcommonhandle("#3da7f5",null),
          "#75c941": commonLogic.appcommonhandle("#75c941",null),
          "#2dbdb2": commonLogic.appcommonhandle("#2dbdb2",null),
          "#797ec9": commonLogic.appcommonhandle("#797ec9",null),
          "#ffaf38": commonLogic.appcommonhandle("#ffaf38",null),
          "#ff4e3e": commonLogic.appcommonhandle("#ff4e3e",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Product__status: {
          "normal": commonLogic.appcommonhandle("正常",null),
          "closed": commonLogic.appcommonhandle("结束",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      CurDocVersion: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      PlanTemplet: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      ConfigManagementstatus: {
          "product_project": commonLogic.appcommonhandle("产品 - 项目",null),
          "product_iteration": commonLogic.appcommonhandle("产品 - 迭代",null),
          "project_iteration": commonLogic.appcommonhandle("项目 - 迭代",null),
          "product_sprint": commonLogic.appcommonhandle("产品 - 冲刺",null),
          "project_sprint": commonLogic.appcommonhandle("项目 - 冲刺",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      ProductTeam: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      CycleType: {
          "day": commonLogic.appcommonhandle("天",null),
          "week": commonLogic.appcommonhandle("周",null),
          "month": commonLogic.appcommonhandle("月度",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      CurStory: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      ProductPlan: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      StoryStageKane: {
          "projected": commonLogic.appcommonhandle("已立项",null),
          "developing": commonLogic.appcommonhandle("研发中",null),
          "developed": commonLogic.appcommonhandle("研发完毕",null),
          "testing": commonLogic.appcommonhandle("测试中",null),
          "tested": commonLogic.appcommonhandle("测试完毕",null),
          "verified": commonLogic.appcommonhandle("已验收",null),
          "released": commonLogic.appcommonhandle("已发布",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      ProjectTeam: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      Task__type: {
          "design": commonLogic.appcommonhandle("设计",null),
          "devel": commonLogic.appcommonhandle("开发",null),
          "test": commonLogic.appcommonhandle("测试",null),
          "study": commonLogic.appcommonhandle("研究",null),
          "discuss": commonLogic.appcommonhandle("讨论",null),
          "ui": commonLogic.appcommonhandle("界面",null),
          "affair": commonLogic.appcommonhandle("事务",null),
          "serve": commonLogic.appcommonhandle("服务",null),
          "misc": commonLogic.appcommonhandle("其他",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      AllStory: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      CurCaseVersion: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      Project__acl: {
          "open": commonLogic.appcommonhandle("默认设置(有项目视图权限，即可访问)",null),
          "private": commonLogic.appcommonhandle("私有项目(只有项目团队成员才能访问)",null),
          "custom": commonLogic.appcommonhandle("自定义白名单(团队成员和白名单的成员可以访问)",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Cycle_enable: {
          "1": commonLogic.appcommonhandle("周期",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Bug__type: {
          "codeerror": commonLogic.appcommonhandle("代码错误",null),
          "config": commonLogic.appcommonhandle("配置相关",null),
          "install": commonLogic.appcommonhandle("安装部署",null),
          "security": commonLogic.appcommonhandle("安全相关",null),
          "performance": commonLogic.appcommonhandle("性能问题",null),
          "standard": commonLogic.appcommonhandle("标准规范",null),
          "automation": commonLogic.appcommonhandle("测试脚本",null),
          "designdefect": commonLogic.appcommonhandle("设计缺陷",null),
          "others": commonLogic.appcommonhandle("其他",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Team__type: {
          "project": commonLogic.appcommonhandle("项目团队",null),
          "task": commonLogic.appcommonhandle("任务团队",null),
          "product": commonLogic.appcommonhandle("产品团队",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      BugModule: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      Burninterval: {
          "1": commonLogic.appcommonhandle("间隔1天",null),
          "2": commonLogic.appcommonhandle("间隔2天",null),
          "3": commonLogic.appcommonhandle("间隔3天",null),
          "4": commonLogic.appcommonhandle("间隔4天",null),
          "5": commonLogic.appcommonhandle("间隔5天",null),
          "6": commonLogic.appcommonhandle("间隔6天",null),
          "7": commonLogic.appcommonhandle("间隔7天",null),
          "8": commonLogic.appcommonhandle("间隔8天",null),
          "9": commonLogic.appcommonhandle("间隔9天",null),
          "10": commonLogic.appcommonhandle("间隔10天",null),
          "11": commonLogic.appcommonhandle("间隔11天",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Action__type: {
          "created": commonLogic.appcommonhandle("创建",null),
          "opened": commonLogic.appcommonhandle("创建",null),
          "changed": commonLogic.appcommonhandle("变更了",null),
          "edited": commonLogic.appcommonhandle("编辑了",null),
          "assigned": commonLogic.appcommonhandle("指派了",null),
          "closed": commonLogic.appcommonhandle("关闭了",null),
          "deleted": commonLogic.appcommonhandle("删除了",null),
          "deletedfile": commonLogic.appcommonhandle("删除附件",null),
          "editfile": commonLogic.appcommonhandle("编辑附件",null),
          "erased": commonLogic.appcommonhandle("删除了",null),
          "undeleted": commonLogic.appcommonhandle("还原了",null),
          "hidden": commonLogic.appcommonhandle("隐藏了",null),
          "commented": commonLogic.appcommonhandle("评论了",null),
          "activated": commonLogic.appcommonhandle("激活了",null),
          "blocked": commonLogic.appcommonhandle("阻塞了",null),
          "resolved": commonLogic.appcommonhandle("解决了",null),
          "reviewed": commonLogic.appcommonhandle("评审了",null),
          "moved": commonLogic.appcommonhandle("移动了",null),
          "confirmed": commonLogic.appcommonhandle("确认了需求",null),
          "bugconfirmed": commonLogic.appcommonhandle("确认了",null),
          "tostory": commonLogic.appcommonhandle("转需求",null),
          "frombug": commonLogic.appcommonhandle("转需求",null),
          "fromlib": commonLogic.appcommonhandle("从用例库导入",null),
          "totask": commonLogic.appcommonhandle("转任务",null),
          "svncommited": commonLogic.appcommonhandle("提交代码",null),
          "gitcommited": commonLogic.appcommonhandle("提交代码",null),
          "linked2plan": commonLogic.appcommonhandle("关联计划",null),
          "unlinkedfromplan": commonLogic.appcommonhandle("移除计划",null),
          "changestatus": commonLogic.appcommonhandle("修改状态",null),
          "marked": commonLogic.appcommonhandle("编辑了",null),
          "linked2project": commonLogic.appcommonhandle("关联项目",null),
          "unlinkedfromproject": commonLogic.appcommonhandle("移除项目",null),
          "unlinkedfrombuild": commonLogic.appcommonhandle("移除版本",null),
          "linked2release": commonLogic.appcommonhandle("关联发布",null),
          "unlinkedfromrelease": commonLogic.appcommonhandle("移除发布",null),
          "linkrelatedbug": commonLogic.appcommonhandle("关联了相关Bug",null),
          "unlinkrelatedbug": commonLogic.appcommonhandle("移除了相关Bug",null),
          "linkrelatedcase": commonLogic.appcommonhandle("关联了相关用例",null),
          "unlinkrelatedcase": commonLogic.appcommonhandle("移除了相关用例",null),
          "linkrelatedstory": commonLogic.appcommonhandle("关联了相关需求",null),
          "unlinkrelatedstory": commonLogic.appcommonhandle("移除了相关需求",null),
          "subdividestory": commonLogic.appcommonhandle("细分了需求",null),
          "unlinkchildstory": commonLogic.appcommonhandle("移除了细分需求",null),
          "started": commonLogic.appcommonhandle("开始了",null),
          "restarted": commonLogic.appcommonhandle("继续了",null),
          "recordestimate": commonLogic.appcommonhandle("记录了工时",null),
          "editestimate": commonLogic.appcommonhandle("编辑了工时",null),
          "canceled": commonLogic.appcommonhandle("取消了",null),
          "finished": commonLogic.appcommonhandle("完成了",null),
          "paused": commonLogic.appcommonhandle("暂停了",null),
          "verified": commonLogic.appcommonhandle("验收了",null),
          "delayed": commonLogic.appcommonhandle("延期",null),
          "suspended": commonLogic.appcommonhandle("挂起",null),
          "login": commonLogic.appcommonhandle("登录系统",null),
          "logout": commonLogic.appcommonhandle("退出登录",null),
          "deleteestimate": commonLogic.appcommonhandle("删除了工时",null),
          "linked2build": commonLogic.appcommonhandle("关联了",null),
          "linked2bug": commonLogic.appcommonhandle("关联了",null),
          "linkchildtask": commonLogic.appcommonhandle("关联子任务",null),
          "unlinkchildrentask": commonLogic.appcommonhandle("取消关联子任务",null),
          "linkparenttask": commonLogic.appcommonhandle("关联到父任务",null),
          "unlinkparenttask": commonLogic.appcommonhandle("从父任务取消关联",null),
          "batchcreate": commonLogic.appcommonhandle("批量创建任务",null),
          "createchildren": commonLogic.appcommonhandle("创建子任务",null),
          "managed": commonLogic.appcommonhandle("维护",null),
          "deletechildrentask": commonLogic.appcommonhandle("删除子任务",null),
          "createchildrenstory": commonLogic.appcommonhandle("创建子需求",null),
          "linkchildstory": commonLogic.appcommonhandle("关联子需求",null),
          "unlinkchildrenstory": commonLogic.appcommonhandle("取消关联子需求",null),
          "linkparentstory": commonLogic.appcommonhandle("关联到父需求",null),
          "unlinkparentstory": commonLogic.appcommonhandle("从父需求取消关联",null),
          "deletechildrenstory": commonLogic.appcommonhandle("删除子需求",null),
          "submit": commonLogic.appcommonhandle("提交",null),
          "read": commonLogic.appcommonhandle("已读了",null),
          "remind": commonLogic.appcommonhandle("提醒",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      User__gender: {
          "f": commonLogic.appcommonhandle("女",null),
          "m": commonLogic.appcommonhandle("男",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      RealDept: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      BeginendDropList: {
          "600": commonLogic.appcommonhandle("06:00",null),
          "610": commonLogic.appcommonhandle("06:10",null),
          "620": commonLogic.appcommonhandle("06:20",null),
          "630": commonLogic.appcommonhandle("06:30",null),
          "640": commonLogic.appcommonhandle("06:40",null),
          "650": commonLogic.appcommonhandle("06:50",null),
          "700": commonLogic.appcommonhandle("07:00",null),
          "710": commonLogic.appcommonhandle("07:10",null),
          "720": commonLogic.appcommonhandle("07:20",null),
          "730": commonLogic.appcommonhandle("07:30",null),
          "740": commonLogic.appcommonhandle("07:40",null),
          "750": commonLogic.appcommonhandle("07:50",null),
          "800": commonLogic.appcommonhandle("08:00",null),
          "810": commonLogic.appcommonhandle("08:10",null),
          "820": commonLogic.appcommonhandle("08:20",null),
          "830": commonLogic.appcommonhandle("08:30",null),
          "840": commonLogic.appcommonhandle("08:40",null),
          "850": commonLogic.appcommonhandle("08:50",null),
          "900": commonLogic.appcommonhandle("09:00",null),
          "910": commonLogic.appcommonhandle("09:10",null),
          "920": commonLogic.appcommonhandle("09:20",null),
          "930": commonLogic.appcommonhandle("09:30",null),
          "940": commonLogic.appcommonhandle("09:40",null),
          "950": commonLogic.appcommonhandle("09:50",null),
          "1000": commonLogic.appcommonhandle("10:00",null),
          "1010": commonLogic.appcommonhandle("10:10",null),
          "1020": commonLogic.appcommonhandle("10:20",null),
          "1030": commonLogic.appcommonhandle("10:30",null),
          "1040": commonLogic.appcommonhandle("10:40",null),
          "1050": commonLogic.appcommonhandle("10:50",null),
          "1100": commonLogic.appcommonhandle("11:00",null),
          "1110": commonLogic.appcommonhandle("11:10",null),
          "1120": commonLogic.appcommonhandle("11:20",null),
          "1130": commonLogic.appcommonhandle("11:30",null),
          "1140": commonLogic.appcommonhandle("11:40",null),
          "1150": commonLogic.appcommonhandle("11:50",null),
          "1200": commonLogic.appcommonhandle("12:00",null),
          "1210": commonLogic.appcommonhandle("12:10",null),
          "1220": commonLogic.appcommonhandle("12:20",null),
          "1230": commonLogic.appcommonhandle("12:30",null),
          "1240": commonLogic.appcommonhandle("12:40",null),
          "1250": commonLogic.appcommonhandle("12:50",null),
          "1300": commonLogic.appcommonhandle("13:00",null),
          "1310": commonLogic.appcommonhandle("13:10",null),
          "1320": commonLogic.appcommonhandle("13:20",null),
          "1330": commonLogic.appcommonhandle("13:30",null),
          "1340": commonLogic.appcommonhandle("13:40",null),
          "1350": commonLogic.appcommonhandle("13:50",null),
          "1400": commonLogic.appcommonhandle("14:00",null),
          "1410": commonLogic.appcommonhandle("14:10",null),
          "1420": commonLogic.appcommonhandle("14:20",null),
          "1430": commonLogic.appcommonhandle("14:30",null),
          "1440": commonLogic.appcommonhandle("14:40",null),
          "1450": commonLogic.appcommonhandle("14:50",null),
          "1500": commonLogic.appcommonhandle("15:00",null),
          "1510": commonLogic.appcommonhandle("15:10",null),
          "1520": commonLogic.appcommonhandle("15:20",null),
          "1530": commonLogic.appcommonhandle("15:30",null),
          "1540": commonLogic.appcommonhandle("15:40",null),
          "1550": commonLogic.appcommonhandle("15:50",null),
          "1600": commonLogic.appcommonhandle("16:00",null),
          "1610": commonLogic.appcommonhandle("16:10",null),
          "1620": commonLogic.appcommonhandle("16:20",null),
          "1630": commonLogic.appcommonhandle("16:30",null),
          "1640": commonLogic.appcommonhandle("16:40",null),
          "1650": commonLogic.appcommonhandle("16:50",null),
          "1700": commonLogic.appcommonhandle("17:00",null),
          "1710": commonLogic.appcommonhandle("17:10",null),
          "1720": commonLogic.appcommonhandle("17:20",null),
          "1730": commonLogic.appcommonhandle("17:30",null),
          "1740": commonLogic.appcommonhandle("17:40",null),
          "1750": commonLogic.appcommonhandle("17:50",null),
          "1800": commonLogic.appcommonhandle("18:00",null),
          "1810": commonLogic.appcommonhandle("18:10",null),
          "1820": commonLogic.appcommonhandle("18:20",null),
          "1830": commonLogic.appcommonhandle("18:30",null),
          "1840": commonLogic.appcommonhandle("18:40",null),
          "1850": commonLogic.appcommonhandle("18:50",null),
          "1900": commonLogic.appcommonhandle("19:00",null),
          "1910": commonLogic.appcommonhandle("19:10",null),
          "1920": commonLogic.appcommonhandle("19:20",null),
          "1930": commonLogic.appcommonhandle("19:30",null),
          "1940": commonLogic.appcommonhandle("19:40",null),
          "1950": commonLogic.appcommonhandle("19:50",null),
          "2000": commonLogic.appcommonhandle("20:00",null),
          "2010": commonLogic.appcommonhandle("20:10",null),
          "2020": commonLogic.appcommonhandle("20:20",null),
          "2030": commonLogic.appcommonhandle("20:30",null),
          "2040": commonLogic.appcommonhandle("20:40",null),
          "2050": commonLogic.appcommonhandle("20:50",null),
          "2100": commonLogic.appcommonhandle("21:00",null),
          "2110": commonLogic.appcommonhandle("21:10",null),
          "2120": commonLogic.appcommonhandle("21:20",null),
          "2130": commonLogic.appcommonhandle("21:30",null),
          "2140": commonLogic.appcommonhandle("21:40",null),
          "2150": commonLogic.appcommonhandle("21:50",null),
          "2200": commonLogic.appcommonhandle("22:00",null),
          "2210": commonLogic.appcommonhandle("22:10",null),
          "2220": commonLogic.appcommonhandle("22:20",null),
          "2230": commonLogic.appcommonhandle("22:30",null),
          "2240": commonLogic.appcommonhandle("22:40",null),
          "2250": commonLogic.appcommonhandle("22:50",null),
          "2300": commonLogic.appcommonhandle("23:00",null),
          "2310": commonLogic.appcommonhandle("23:10",null),
          "2320": commonLogic.appcommonhandle("23:20",null),
          "2330": commonLogic.appcommonhandle("23:30",null),
          "2340": commonLogic.appcommonhandle("23:40",null),
          "2350": commonLogic.appcommonhandle("23:50",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      DOCLIBTYPE: {
          "doc": commonLogic.appcommonhandle("文档",null),
          "file": commonLogic.appcommonhandle("附件",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Task_quickpacket: {
          "All": commonLogic.appcommonhandle("所有",null),
          "UNCLOSED": commonLogic.appcommonhandle("未关闭",null),
          "TOME": commonLogic.appcommonhandle("指派给我",null),
          "storychange": commonLogic.appcommonhandle("需求变更",null),
          "MORE": commonLogic.appcommonhandle("更多",null),
          "NOTSTARTED": commonLogic.appcommonhandle("未开始",null),
          "INPROGRESS": commonLogic.appcommonhandle("进行中",null),
          "UNACCOMPLISHED": commonLogic.appcommonhandle("未完成",null),
          "IFINISHED": commonLogic.appcommonhandle("我完成",null),
          "COMPLETED": commonLogic.appcommonhandle("已完成",null),
          "CLOSED": commonLogic.appcommonhandle("已关闭",null),
          "CANCELLED": commonLogic.appcommonhandle("已取消",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      RunSQL: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      UserRealNameTask: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      CaseQuickpacketMy: {
          "TOME": commonLogic.appcommonhandle("给我的用例",null),
          "ICREATE": commonLogic.appcommonhandle("我建的用例",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      ProjectTeamProduct: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      TaskTeamUserTemp: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      Task__closed_reason: {
          "done": commonLogic.appcommonhandle("已完成",null),
          "cancel": commonLogic.appcommonhandle("已取消",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Testrun__status: {
          "wait": commonLogic.appcommonhandle("未开始",null),
          "doing": commonLogic.appcommonhandle("进行中",null),
          "done": commonLogic.appcommonhandle("已完成",null),
          "blocked": commonLogic.appcommonhandle("被阻塞",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      TestQuickpacket: {
          "ALL": commonLogic.appcommonhandle("全部",null),
          "ICREATE": commonLogic.appcommonhandle("待测测试单",null),
          "IREVIEW": commonLogic.appcommonhandle("测试中测试单",null),
          "ICLOSE": commonLogic.appcommonhandle("被阻塞测试单",null),
          "Tested": commonLogic.appcommonhandle("已测测试单",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Case__frequency: {
          "1": commonLogic.appcommonhandle("1",null),
          "2": commonLogic.appcommonhandle("2",null),
          "3": commonLogic.appcommonhandle("3",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Story__color: {
          "#3da7f5": commonLogic.appcommonhandle("#3da7f5",null),
          "#75c941": commonLogic.appcommonhandle("#75c941",null),
          "#2dbdb2": commonLogic.appcommonhandle("#2dbdb2",null),
          "#797ec9": commonLogic.appcommonhandle("#797ec9",null),
          "#ffaf38": commonLogic.appcommonhandle("#ffaf38",null),
          "#ff4e3e": commonLogic.appcommonhandle("#ff4e3e",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      ReportType: {
          "weekly": commonLogic.appcommonhandle("周报",null),
          "daily": commonLogic.appcommonhandle("日报",null),
          "monthly": commonLogic.appcommonhandle("月报",null),
          "reportly": commonLogic.appcommonhandle("汇报",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Testcase__type: {
          "feature": commonLogic.appcommonhandle("功能测试",null),
          "performance": commonLogic.appcommonhandle("性能测试",null),
          "config": commonLogic.appcommonhandle("配置相关",null),
          "install": commonLogic.appcommonhandle("安装部署",null),
          "security": commonLogic.appcommonhandle("安全相关",null),
          "interface": commonLogic.appcommonhandle("接口测试",null),
          "unit": commonLogic.appcommonhandle("单元测试",null),
          "other": commonLogic.appcommonhandle("其他",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      TypeAll: {
          "custom": commonLogic.appcommonhandle("自定义",null),
          "bug": commonLogic.appcommonhandle("Bug",null),
          "task": commonLogic.appcommonhandle("项目任务",null),
          "story": commonLogic.appcommonhandle("项目需求",null),
          "cycle": commonLogic.appcommonhandle("周期",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Testcase__status: {
          "wait": commonLogic.appcommonhandle("待评审",null),
          "normal": commonLogic.appcommonhandle("正常",null),
          "blocked": commonLogic.appcommonhandle("被阻塞",null),
          "investigate": commonLogic.appcommonhandle("研究中",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Story__quickpacket: {
          "ALL": commonLogic.appcommonhandle("所有",null),
          "UNCLOSED": commonLogic.appcommonhandle("未关闭",null),
          "TOME": commonLogic.appcommonhandle("指给我",null),
          "ICREATE": commonLogic.appcommonhandle("我创建",null),
          "IREVIEW": commonLogic.appcommonhandle("我评审",null),
          "DRAFT": commonLogic.appcommonhandle("草稿",null),
          "MORE": commonLogic.appcommonhandle("更多",null),
          "ICLOSE": commonLogic.appcommonhandle("我关闭",null),
          "ACTIVED": commonLogic.appcommonhandle("激活",null),
          "CHANGED": commonLogic.appcommonhandle("已变更",null),
          "TOBECLOSED": commonLogic.appcommonhandle("待关闭",null),
          "CLOSED": commonLogic.appcommonhandle("已关闭",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Company__guest: {
          "1": commonLogic.appcommonhandle("允许",null),
          "0": commonLogic.appcommonhandle("不允许",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      CloseProduct: {
          "1": commonLogic.appcommonhandle("关闭产品",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Testrun__result: {
          "n/a": commonLogic.appcommonhandle("忽略",null),
          "pass": commonLogic.appcommonhandle("通过",null),
          "fail": commonLogic.appcommonhandle("失败",null),
          "blocked": commonLogic.appcommonhandle("阻塞",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      BackendBuild: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      YesNo3: {
          "yes": commonLogic.appcommonhandle("是",null),
          "no": commonLogic.appcommonhandle("否",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Story__source: {
          "customer": commonLogic.appcommonhandle("客户",null),
          "user": commonLogic.appcommonhandle("用户",null),
          "po": commonLogic.appcommonhandle("产品经理",null),
          "market": commonLogic.appcommonhandle("市场",null),
          "service": commonLogic.appcommonhandle("客服",null),
          "operation": commonLogic.appcommonhandle("运营",null),
          "support": commonLogic.appcommonhandle("技术支持",null),
          "competitor": commonLogic.appcommonhandle("竞争对手",null),
          "partner": commonLogic.appcommonhandle("合作伙伴",null),
          "dev": commonLogic.appcommonhandle("开发人员",null),
          "tester": commonLogic.appcommonhandle("测试人员",null),
          "bug": commonLogic.appcommonhandle("Bug",null),
          "forum": commonLogic.appcommonhandle("论坛",null),
          "other": commonLogic.appcommonhandle("其它",null),
          "iBiz": commonLogic.appcommonhandle("iBiz",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      AllTask: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      AllTestTask: {
          "empty": commonLogic.appcommonhandle("",null),
      },
      IndexType: {
          "bug": commonLogic.appcommonhandle("Bug",null),
          "product": commonLogic.appcommonhandle("产品",null),
          "task": commonLogic.appcommonhandle("任务",null),
          "case": commonLogic.appcommonhandle("功能测试",null),
          "doc": commonLogic.appcommonhandle("文档",null),
          "story": commonLogic.appcommonhandle("需求",null),
          "project": commonLogic.appcommonhandle("项目",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Testcase__pri: {
          "1": commonLogic.appcommonhandle("1",null),
          "2": commonLogic.appcommonhandle("2",null),
          "3": commonLogic.appcommonhandle("3",null),
          "4": commonLogic.appcommonhandle("4",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      CaseQuickpachet: {
          "ALL": commonLogic.appcommonhandle("所有",null),
          "TOME": commonLogic.appcommonhandle("需求变动",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Testcase__result: {
          "n/a": commonLogic.appcommonhandle("忽略",null),
          "pass": commonLogic.appcommonhandle("通过",null),
          "fail": commonLogic.appcommonhandle("失败",null),
          "blocked": commonLogic.appcommonhandle("阻塞",null),
          "empty": commonLogic.appcommonhandle("未执行",null)
      },
      Bug__resolution: {
          "bydesign": commonLogic.appcommonhandle("设计如此",null),
          "duplicate": commonLogic.appcommonhandle("重复Bug",null),
          "external": commonLogic.appcommonhandle("外部原因",null),
          "fixed": commonLogic.appcommonhandle("已解决",null),
          "notrepro": commonLogic.appcommonhandle("无法重现",null),
          "postponed": commonLogic.appcommonhandle("延期处理",null),
          "willnotfix": commonLogic.appcommonhandle("不予解决",null),
          "tostory": commonLogic.appcommonhandle("转为需求",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      StoryQuickpacketMy: {
          "TOME": commonLogic.appcommonhandle("指给我",null),
          "ICREATE": commonLogic.appcommonhandle("由我创建",null),
          "IREVIEW": commonLogic.appcommonhandle("由我评审",null),
          "ICLOSE": commonLogic.appcommonhandle("由我关闭",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Bug__quickpacket: {
          "All": commonLogic.appcommonhandle("所有",null),
          "UNCLOSED": commonLogic.appcommonhandle("未关闭",null),
          "ICREATE": commonLogic.appcommonhandle("由我创建",null),
          "TOME": commonLogic.appcommonhandle("指派给我",null),
          "BYME": commonLogic.appcommonhandle("由我解决",null),
          "WAITCLOSED": commonLogic.appcommonhandle("待关闭",null),
          "UNRESOLVED": commonLogic.appcommonhandle("未解决",null),
          "MORE": commonLogic.appcommonhandle("更多",null),
          "UNCONFIRMED": commonLogic.appcommonhandle("未确认",null),
          "UNASSIGNED": commonLogic.appcommonhandle("未指派",null),
          "EXPIREDBUG": commonLogic.appcommonhandle("过期Bug",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
      Testtask__status: {
          "wait": commonLogic.appcommonhandle("未开始",null),
          "doing": commonLogic.appcommonhandle("进行中",null),
          "done": commonLogic.appcommonhandle("已完成",null),
          "blocked": commonLogic.appcommonhandle("被阻塞",null),
          "empty": commonLogic.appcommonhandle("",null)
      },
  };
  return data;
}
export default getLocaleResourceBase;