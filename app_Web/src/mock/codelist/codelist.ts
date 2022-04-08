import { MockAdapter } from '../mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'

// 获取全部数组
mock.onGet('./assets/json/data-dictionary.json').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status, [
        {
        srfkey: "ActionManner",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "story_closed_willnotdo",
                label: "不做",
                text: "不做",
                "data":"",
                "codename":"Story_closed_willnotdo",
                value: "story_closed_willnotdo",
                
                disabled: false,
            },
            {
                id: "story_closed_cancel",
                label: "已取消",
                text: "已取消",
                "data":"",
                "codename":"Story_closed_cancel",
                value: "story_closed_cancel",
                
                disabled: false,
            },
            {
                id: "story_closed_done",
                label: "已完成",
                text: "已完成",
                "data":"",
                "codename":"Story_closed_done",
                value: "story_closed_done",
                
                disabled: false,
            },
            {
                id: "story_closed_subdivided",
                label: "已细分",
                text: "已细分",
                "data":"",
                "codename":"Story_closed_subdivided",
                value: "story_closed_subdivided",
                
                disabled: false,
            },
            {
                id: "story_closed_postponed",
                label: "延期",
                text: "延期",
                "data":"",
                "codename":"Story_closed_postponed",
                value: "story_closed_postponed",
                
                disabled: false,
            },
            {
                id: "story_closed_bydesign",
                label: "设计如此",
                text: "设计如此",
                "data":"",
                "codename":"Story_closed_bydesign",
                value: "story_closed_bydesign",
                
                disabled: false,
            },
            {
                id: "story_closed_duplicate",
                label: "重复",
                text: "重复",
                "data":"",
                "codename":"Story_closed_duplicate",
                value: "story_closed_duplicate",
                
                disabled: false,
            },
            {
                id: "bug_resolved_willnotfix",
                label: "不予解决",
                text: "不予解决",
                "data":"",
                "codename":"Bug_resolved_willnotfix",
                value: "bug_resolved_willnotfix",
                
                disabled: false,
            },
            {
                id: "bug_resolved_external",
                label: "外部原因",
                text: "外部原因",
                "data":"",
                "codename":"Bug_resolved_external",
                value: "bug_resolved_external",
                
                disabled: false,
            },
            {
                id: "bug_resolved_fixed",
                label: "已解决",
                text: "已解决",
                "data":"",
                "codename":"Bug_resolved_fixed",
                value: "bug_resolved_fixed",
                
                disabled: false,
            },
            {
                id: "bug_resolved_postponed",
                label: "延期处理",
                text: "延期处理",
                "data":"",
                "codename":"Bug_resolved_postponed",
                value: "bug_resolved_postponed",
                
                disabled: false,
            },
            {
                id: "bug_resolved_notrepro",
                label: "无法重现",
                text: "无法重现",
                "data":"",
                "codename":"Bug_resolved_notrepro",
                value: "bug_resolved_notrepro",
                
                disabled: false,
            },
            {
                id: "bug_resolved_bydesign",
                label: "设计如此",
                text: "设计如此",
                "data":"",
                "codename":"Bug_resolved_bydesign",
                value: "bug_resolved_bydesign",
                
                disabled: false,
            },
            {
                id: "bug_resolved_tostory",
                label: "转为需求",
                text: "转为需求",
                "data":"",
                "codename":"Bug_resolved_tostory",
                value: "bug_resolved_tostory",
                
                disabled: false,
            },
            {
                id: "bug_resolved_duplicate",
                label: "重复Bug",
                text: "重复Bug",
                "data":"",
                "codename":"Bug_resolved_duplicate",
                value: "bug_resolved_duplicate",
                
                disabled: false,
            },
            {
                id: "story_reviewed_reject",
                label: "拒绝",
                text: "拒绝",
                "data":"",
                "codename":"Story_reviewed_reject",
                value: "story_reviewed_reject",
                
                disabled: false,
            },
            {
                id: "story_reviewed_revert",
                label: "撤销变更",
                text: "撤销变更",
                "data":"",
                "codename":"Story_reviewed_revert",
                value: "story_reviewed_revert",
                
                disabled: false,
            },
            {
                id: "story_reviewed_clarify",
                label: "有待明确",
                text: "有待明确",
                "data":"",
                "codename":"Story_reviewed_clarify",
                value: "story_reviewed_clarify",
                
                disabled: false,
            },
            {
                id: "story_reviewed_pass",
                label: "确认通过",
                text: "确认通过",
                "data":"",
                "codename":"Story_reviewed_pass",
                value: "story_reviewed_pass",
                
                disabled: false,
            },
            {
                id: " release_changestatus_terminate",
                label: "停止维护",
                text: "停止维护",
                "data":"",
                "codename":"_release_changestatus_terminate",
                value: " release_changestatus_terminate",
                
                disabled: false,
            },
            {
                id: " release_changestatus_normal",
                label: "正常",
                text: "正常",
                "data":"",
                "codename":"_release_changestatus_normal",
                value: " release_changestatus_normal",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "SQLBuild",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"PSSystemDBCfg",
        "appdedataset":"FetchBuild",
        "items": []
    },
    {
        srfkey: "Testresult__result",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "n/a",
                label: "忽略",
                text: "忽略",
                "data":"",
                "codename":"N_a",
                "color": "rgba(27, 97, 247, 1)",
                value: "n/a",
                
                disabled: false,
            },
            {
                id: "pass",
                label: "通过",
                text: "通过",
                "data":"",
                "codename":"Pass",
                "color": "rgba(101, 214, 15, 1)",
                value: "pass",
                
                disabled: false,
            },
            {
                id: "fail",
                label: "失败",
                text: "失败",
                "data":"",
                "codename":"Fail",
                "color": "rgba(244, 12, 12, 1)",
                value: "fail",
                
                disabled: false,
            },
            {
                id: "blocked",
                label: "阻塞",
                text: "阻塞",
                "data":"",
                "codename":"Blocked",
                "color": "rgba(234, 187, 17, 1)",
                value: "blocked",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Story__closed_reason",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "done",
                label: "已完成",
                text: "已完成",
                "data":"",
                "codename":"Done",
                value: "done",
                
                disabled: false,
            },
            {
                id: "subdivided",
                label: "已细分",
                text: "已细分",
                "data":"",
                "codename":"Subdivided",
                value: "subdivided",
                
                disabled: false,
            },
            {
                id: "duplicate",
                label: "重复",
                text: "重复",
                "data":"",
                "codename":"Duplicate",
                value: "duplicate",
                
                disabled: false,
            },
            {
                id: "postponed",
                label: "延期",
                text: "延期",
                "data":"",
                "codename":"Postponed",
                value: "postponed",
                
                disabled: false,
            },
            {
                id: "willnotdo",
                label: "不做",
                text: "不做",
                "data":"",
                "codename":"Willnotdo",
                value: "willnotdo",
                
                disabled: false,
            },
            {
                id: "cancel",
                label: "已取消",
                text: "已取消",
                "data":"",
                "codename":"Cancel",
                value: "cancel",
                
                disabled: false,
            },
            {
                id: "bydesign",
                label: "设计如此",
                text: "设计如此",
                "data":"",
                "codename":"Bydesign",
                value: "bydesign",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "UserRealNameProject",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"SysEmployee",
        "appdedataset":"FetchProjectTeamUser",
        "items": []
    },
    {
        "srfkey": "AllBug",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Bug",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        srfkey: "Task__color",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "#3da7f5",
                label: "#3da7f5",
                text: "#3da7f5",
                "data":"",
                "codename":"Item_1",
                "color": "rgba(61, 167, 245, 1)",
                value: "#3da7f5",
                
                disabled: false,
            },
            {
                id: "#75c941",
                label: "#75c941",
                text: "#75c941",
                "data":"",
                "codename":"Item_2",
                "color": "rgba(117, 201, 65, 1)",
                value: "#75c941",
                
                disabled: false,
            },
            {
                id: "#2dbdb2",
                label: "#2dbdb2",
                text: "#2dbdb2",
                "data":"",
                "codename":"Item_3",
                "color": "rgba(45, 189, 178, 1)",
                value: "#2dbdb2",
                
                disabled: false,
            },
            {
                id: "#797ec9",
                label: "#797ec9",
                text: "#797ec9",
                "data":"",
                "codename":"Item_4",
                "color": "rgba(121, 126, 201, 1)",
                value: "#797ec9",
                
                disabled: false,
            },
            {
                id: "#ffaf38",
                label: "#ffaf38",
                text: "#ffaf38",
                "data":"",
                "codename":"Item_5",
                "color": "rgba(255, 175, 56, 1)",
                value: "#ffaf38",
                
                disabled: false,
            },
            {
                id: "#ff4e3e",
                label: "#ff4e3e",
                text: "#ff4e3e",
                "data":"",
                "codename":"Item_6",
                "color": "rgba(255, 78, 62, 1)",
                value: "#ff4e3e",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Pri",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "一般",
                text: "一般",
                "data":"",
                "codename":"Item_1",
                value: 1,
                
                disabled: false,
            },
            {
                id: "2",
                label: "最高",
                text: "最高",
                "data":"",
                "codename":"Item_2",
                value: 2,
                
                disabled: false,
            },
            {
                id: "3",
                label: "较高",
                text: "较高",
                "data":"",
                "codename":"Item_3",
                value: 3,
                
                disabled: false,
            },
            {
                id: "4",
                label: "最低",
                text: "最低",
                "data":"",
                "codename":"Item_4",
                value: 4,
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "TestTask",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"TestTask",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        "srfkey": "ProjectProductPlan",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"ProductPlan",
        "appdedataset":"FetchProjectPlan",
        "items": []
    },
    {
        "srfkey": "CodeList25",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"SysEmployee",
        "appdedataset":"FetchProductTeamM",
        "items": []
    },
    {
        "srfkey": "CodeList",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Task",
        "appdedataset":"FetchThisWeekCompleteTaskChoice",
        "items": []
    },
    {
        "srfkey": "MyCompleteTask",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Task",
        "appdedataset":"FetchMyCompleteTask",
        "items": []
    },
    {
        srfkey: "ReportStatus",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "0",
                label: "未读",
                text: "未读",
                "data":"",
                "codename":"Item_0",
                "color": "rgba(244, 15, 15, 1)",
                value: "0",
                
                disabled: false,
            },
            {
                id: "1",
                label: "已读",
                text: "已读",
                "data":"",
                "codename":"Item_1",
                value: "1",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "CodeList81",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "2010",
                label: "2010年",
                text: "2010年",
                "data":"",
                "codename":"Item_2010",
                value: "2010",
                
                disabled: false,
            },
            {
                id: "2011",
                label: "2011年",
                text: "2011年",
                "data":"",
                "codename":"Item_2011",
                value: "2011",
                
                disabled: false,
            },
            {
                id: "2012",
                label: "2012年",
                text: "2012年",
                "data":"",
                "codename":"Item_2012",
                value: "2012",
                
                disabled: false,
            },
            {
                id: "2013",
                label: "2013年",
                text: "2013年",
                "data":"",
                "codename":"Item_2013",
                value: "2013",
                
                disabled: false,
            },
            {
                id: "2014",
                label: "2014年",
                text: "2014年",
                "data":"",
                "codename":"Item_2014",
                value: "2014",
                
                disabled: false,
            },
            {
                id: "2015",
                label: "2015年",
                text: "2015年",
                "data":"",
                "codename":"Item_2015",
                value: "2015",
                
                disabled: false,
            },
            {
                id: "2016",
                label: "2016年",
                text: "2016年",
                "data":"",
                "codename":"Item_2016",
                value: "2016",
                
                disabled: false,
            },
            {
                id: "2017",
                label: "2017年",
                text: "2017年",
                "data":"",
                "codename":"Item_2017",
                value: "2017",
                
                disabled: false,
            },
            {
                id: "2018",
                label: "2018年",
                text: "2018年",
                "data":"",
                "codename":"Item_2018",
                value: "2018",
                
                disabled: false,
            },
            {
                id: "2019",
                label: "2019年",
                text: "2019年",
                "data":"",
                "codename":"Item_2019",
                value: "2019",
                
                disabled: false,
            },
            {
                id: "2020",
                label: "2020年",
                text: "2020年",
                "data":"",
                "codename":"Item_2020",
                value: "2020",
                
                disabled: false,
            },
            {
                id: "2021",
                label: "2021年",
                text: "2021年",
                "data":"",
                "codename":"Item_2021",
                value: "2021",
                
                disabled: false,
            },
            {
                id: "2022",
                label: "2022年",
                text: "2022年",
                "data":"",
                "codename":"Item_2022",
                value: "2022",
                
                disabled: false,
            },
            {
                id: "2023",
                label: "2023年",
                text: "2023年",
                "data":"",
                "codename":"Item_2023",
                value: "2023",
                
                disabled: false,
            },
            {
                id: "2024",
                label: "2024年",
                text: "2024年",
                "data":"",
                "codename":"Item_2024",
                value: "2024",
                
                disabled: false,
            },
            {
                id: "2025",
                label: "2025年",
                text: "2025年",
                "data":"",
                "codename":"Item_2025",
                value: "2025",
                
                disabled: false,
            },
            {
                id: "2026",
                label: "2026年",
                text: "2026年",
                "data":"",
                "codename":"Item_2026",
                value: "2026",
                
                disabled: false,
            },
            {
                id: "2027",
                label: "2027年",
                text: "2027年",
                "data":"",
                "codename":"Item_2027",
                value: "2027",
                
                disabled: false,
            },
            {
                id: "2028",
                label: "2028年",
                text: "2028年",
                "data":"",
                "codename":"Item_2028",
                value: "2028",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Project__status",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "wait",
                label: "未开始",
                text: "未开始",
                "data":"",
                "codename":"Wait",
                value: "wait",
                
                disabled: false,
            },
            {
                id: "doing",
                label: "进行中",
                text: "进行中",
                "data":"",
                "codename":"Doing",
                value: "doing",
                
                disabled: false,
            },
            {
                id: "suspended",
                label: "已挂起",
                text: "已挂起",
                "data":"",
                "codename":"Suspended",
                value: "suspended",
                
                disabled: false,
            },
            {
                id: "closed",
                label: "已关闭",
                text: "已关闭",
                "data":"",
                "codename":"Closed",
                value: "closed",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "ProductBranch_Cache",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Branch",
        "appdedataset":"FetchCurProduct",
        "items": []
    },
    {
        srfkey: "RELEASE_Type",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "DEPLOYPKG",
                label: "部署系统组件到仓库",
                text: "部署系统组件到仓库",
                "data":"",
                "codename":"Deploypkg",
                value: "DEPLOYPKG",
                
                disabled: false,
            },
            {
                id: "PACKMOBAPP",
                label: "打包移动应用",
                text: "打包移动应用",
                "data":"",
                "codename":"Packmobapp",
                value: "PACKMOBAPP",
                
                disabled: false,
            },
            {
                id: "PACKVER",
                label: "打包版本",
                text: "打包版本",
                "data":"",
                "codename":"Packver",
                value: "PACKVER",
                
                disabled: false,
            },
            {
                id: "PUBCODE",
                label: "代码发布",
                text: "代码发布",
                "data":"",
                "codename":"Pubcode",
                value: "PUBCODE",
                
                disabled: false,
            },
            {
                id: "PUBCODE2",
                label: "代码发布（模板开发）",
                text: "代码发布（模板开发）",
                "data":"",
                "codename":"Pubcode2",
                value: "PUBCODE2",
                
                disabled: false,
            },
            {
                id: "STARTMSAPI",
                label: "启动微服务",
                text: "启动微服务",
                "data":"",
                "codename":"Startmsapi",
                value: "STARTMSAPI",
                
                disabled: false,
            },
            {
                id: "STARTMSAPP",
                label: "启动微服务应用",
                text: "启动微服务应用",
                "data":"",
                "codename":"Startmsapp",
                value: "STARTMSAPP",
                
                disabled: false,
            },
            {
                id: "STARTMSFUNC",
                label: "启动微服务功能",
                text: "启动微服务功能",
                "data":"",
                "codename":"Startmsfunc",
                value: "STARTMSFUNC",
                
                disabled: false,
            },
            {
                id: "STARTX",
                label: "启动系统",
                text: "启动系统",
                "data":"",
                "codename":"Startx",
                value: "STARTX",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "SYS_UPDATE_BRANCH",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "PC",
                label: "PC",
                text: "PC",
                "data":"",
                "codename":"Pc",
                value: "PC",
                
                disabled: false,
            },
            {
                id: "MOB",
                label: "MOB",
                text: "MOB",
                "data":"",
                "codename":"Mob",
                value: "MOB",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "ProjectQuickpacket",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "All",
                label: "所有",
                text: "所有",
                "data":{},
                "codename":"All",
                value: "All",
                
                disabled: false,
            },
            {
                id: "nowait",
                label: "未完成",
                text: "未完成",
                "data":{"n_status_noteq":"closed"},
                "codename":"Nowait",
                value: "nowait",
                
                disabled: false,
            },
            {
                id: "wait",
                label: "未开始",
                text: "未开始",
                "data":{"n_status_eq":"wait"},
                "codename":"Wait",
                value: "wait",
                
                disabled: false,
            },
            {
                id: "doing",
                label: "进行中",
                text: "进行中",
                "data":{"n_status_eq":"doing"},
                "codename":"Doing",
                value: "doing",
                
                disabled: false,
            },
            {
                id: "suspended",
                label: "已挂起",
                text: "已挂起",
                "data":{"n_status_eq":"suspended"},
                "codename":"Suspended",
                value: "suspended",
                
                disabled: false,
            },
            {
                id: "closed",
                label: "已关闭",
                text: "已关闭",
                "data":{"n_status_eq":"closed"},
                "codename":"Closed",
                value: "closed",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "SysOperator",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"",
        "appdedataset":"",
        "items": []
    },
    {
        "srfkey": "SystemAPP",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"PSSysApp",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        srfkey: "StoryPoints",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "0",
                label: "0",
                text: "0",
                "data":"",
                "codename":"Item_0",
                value: "0",
                
                disabled: false,
            },
            {
                id: "0.5",
                label: "0.5",
                text: "0.5",
                "data":"",
                "codename":"Item_05",
                value: "0.5",
                
                disabled: false,
            },
            {
                id: "1",
                label: "1",
                text: "1",
                "data":"",
                "codename":"Item_1",
                value: "1",
                
                disabled: false,
            },
            {
                id: "2",
                label: "2",
                text: "2",
                "data":"",
                "codename":"Item_2",
                value: "2",
                
                disabled: false,
            },
            {
                id: "3",
                label: "3",
                text: "3",
                "data":"",
                "codename":"Item_3",
                value: "3",
                
                disabled: false,
            },
            {
                id: "5",
                label: "5",
                text: "5",
                "data":"",
                "codename":"Item_5",
                value: "5",
                
                disabled: false,
            },
            {
                id: "8",
                label: "8",
                text: "8",
                "data":"",
                "codename":"Item_8",
                value: "8",
                
                disabled: false,
            },
            {
                id: "13",
                label: "13",
                text: "13",
                "data":"",
                "codename":"Item_13",
                value: "13",
                
                disabled: false,
            },
            {
                id: "20",
                label: "20",
                text: "20",
                "data":"",
                "codename":"Item_20",
                value: "20",
                
                disabled: false,
            },
            {
                id: "40",
                label: "40",
                text: "40",
                "data":"",
                "codename":"Item_40",
                value: "40",
                
                disabled: false,
            },
            {
                id: "100",
                label: "100",
                text: "100",
                "data":"",
                "codename":"Item_100",
                value: "100",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Bug__os",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "all",
                label: "全部",
                text: "全部",
                "data":"",
                "codename":"All",
                value: "all",
                
                disabled: false,
            },
            {
                id: "windows",
                label: "Windows",
                text: "Windows",
                "data":"",
                "codename":"Windows",
                value: "windows",
                
                disabled: false,
            },
            {
                id: "win10",
                label: "Windows 10",
                text: "Windows 10",
                "data":"",
                "codename":"Win10",
                value: "win10",
                
                disabled: false,
            },
            {
                id: "win8",
                label: "Windows 8",
                text: "Windows 8",
                "data":"",
                "codename":"Win8",
                value: "win8",
                
                disabled: false,
            },
            {
                id: "win7",
                label: "Windows 7",
                text: "Windows 7",
                "data":"",
                "codename":"Win7",
                value: "win7",
                
                disabled: false,
            },
            {
                id: "vista",
                label: "Windows Vista",
                text: "Windows Vista",
                "data":"",
                "codename":"Vista",
                value: "vista",
                
                disabled: false,
            },
            {
                id: "winxp",
                label: "Windows XP",
                text: "Windows XP",
                "data":"",
                "codename":"Winxp",
                value: "winxp",
                
                disabled: false,
            },
            {
                id: "win2012",
                label: "Windows 2012",
                text: "Windows 2012",
                "data":"",
                "codename":"Win2012",
                value: "win2012",
                
                disabled: false,
            },
            {
                id: "win2008",
                label: "Windows 2008",
                text: "Windows 2008",
                "data":"",
                "codename":"Win2008",
                value: "win2008",
                
                disabled: false,
            },
            {
                id: "win2003",
                label: "Windows 2003",
                text: "Windows 2003",
                "data":"",
                "codename":"Win2003",
                value: "win2003",
                
                disabled: false,
            },
            {
                id: "win2000",
                label: "Windows 2000",
                text: "Windows 2000",
                "data":"",
                "codename":"Win2000",
                value: "win2000",
                
                disabled: false,
            },
            {
                id: "android",
                label: "Android",
                text: "Android",
                "data":"",
                "codename":"Android",
                value: "android",
                
                disabled: false,
            },
            {
                id: "ios",
                label: "IOS",
                text: "IOS",
                "data":"",
                "codename":"Ios",
                value: "ios",
                
                disabled: false,
            },
            {
                id: "wp8",
                label: "WP8",
                text: "WP8",
                "data":"",
                "codename":"Wp8",
                value: "wp8",
                
                disabled: false,
            },
            {
                id: "wp7",
                label: "WP7",
                text: "WP7",
                "data":"",
                "codename":"Wp7",
                value: "wp7",
                
                disabled: false,
            },
            {
                id: "symbian",
                label: "Symbian",
                text: "Symbian",
                "data":"",
                "codename":"Symbian",
                value: "symbian",
                
                disabled: false,
            },
            {
                id: "linux",
                label: "Linux",
                text: "Linux",
                "data":"",
                "codename":"Linux",
                value: "linux",
                
                disabled: false,
            },
            {
                id: "freebsd",
                label: "FreeBSD",
                text: "FreeBSD",
                "data":"",
                "codename":"Freebsd",
                value: "freebsd",
                
                disabled: false,
            },
            {
                id: "osx",
                label: "OS X",
                text: "OS X",
                "data":"",
                "codename":"Osx",
                value: "osx",
                
                disabled: false,
            },
            {
                id: "unix",
                label: "Unix",
                text: "Unix",
                "data":"",
                "codename":"Unix",
                value: "unix",
                
                disabled: false,
            },
            {
                id: "others",
                label: "其他",
                text: "其他",
                "data":"",
                "codename":"Others",
                value: "others",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Doc__type",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "text",
                label: "文档",
                text: "文档",
                "data":"",
                "codename":"Text",
                value: "text",
                
                disabled: false,
            },
            {
                id: "url",
                label: "链接",
                text: "链接",
                "data":"",
                "codename":"Url",
                value: "url",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Project_staus",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "doing",
                label: "进行中",
                text: "进行中",
                "data":"",
                "codename":"Doing",
                value: "doing",
                
                disabled: false,
            },
            {
                id: "suspended",
                label: "已挂起",
                text: "已挂起",
                "data":"",
                "codename":"Suspended",
                value: "suspended",
                
                disabled: false,
            },
            {
                id: "closed",
                label: "已关闭",
                text: "已关闭",
                "data":"",
                "codename":"Closed",
                value: "closed",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Testreport__object_type",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "testtask",
                label: "测试单",
                text: "测试单",
                "data":"",
                "codename":"Testtask",
                value: "testtask",
                
                disabled: false,
            },
            {
                id: "project",
                label: "项目",
                text: "项目",
                "data":"",
                "codename":"Project",
                value: "project",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Bug__severity",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "致命",
                text: "致命",
                "data":"",
                "codename":"Item_1",
                "color": "rgba(241, 11, 11, 1)",
                value: 1,
                
                disabled: false,
            },
            {
                id: "2",
                label: "严重",
                text: "严重",
                "data":"",
                "codename":"Item_2",
                "color": "rgba(239, 155, 18, 1)",
                value: 2,
                
                disabled: false,
            },
            {
                id: "3",
                label: "一般",
                text: "一般",
                "data":"",
                "codename":"Item_3",
                "color": "rgba(58, 149, 247, 1)",
                value: 3,
                
                disabled: false,
            },
            {
                id: "4",
                label: "轻微",
                text: "轻微",
                "data":"",
                "codename":"Item_4",
                "color": "rgba(11, 228, 87, 1)",
                value: 4,
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Bug__browser",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "all",
                label: "全部",
                text: "全部",
                "data":"",
                "codename":"All",
                value: "all",
                
                disabled: false,
            },
            {
                id: "ie",
                label: "IE系列",
                text: "IE系列",
                "data":"",
                "codename":"Ie",
                value: "ie",
                
                disabled: false,
            },
            {
                id: "ie11",
                label: "IE11",
                text: "IE11",
                "data":"",
                "codename":"Ie11",
                value: "ie11",
                
                disabled: false,
            },
            {
                id: "ie10",
                label: "IE10",
                text: "IE10",
                "data":"",
                "codename":"Ie10",
                value: "ie10",
                
                disabled: false,
            },
            {
                id: "ie9",
                label: "IE9",
                text: "IE9",
                "data":"",
                "codename":"Ie9",
                value: "ie9",
                
                disabled: false,
            },
            {
                id: "ie8",
                label: "IE8",
                text: "IE8",
                "data":"",
                "codename":"Ie8",
                value: "ie8",
                
                disabled: false,
            },
            {
                id: "ie7",
                label: "IE7",
                text: "IE7",
                "data":"",
                "codename":"Ie7",
                value: "ie7",
                
                disabled: false,
            },
            {
                id: "ie6",
                label: "IE6",
                text: "IE6",
                "data":"",
                "codename":"Ie6",
                value: "ie6",
                
                disabled: false,
            },
            {
                id: "chrome",
                label: "chrome",
                text: "chrome",
                "data":"",
                "codename":"Chrome",
                value: "chrome",
                
                disabled: false,
            },
            {
                id: "firefox",
                label: "firefox系列",
                text: "firefox系列",
                "data":"",
                "codename":"Firefox",
                value: "firefox",
                
                disabled: false,
            },
            {
                id: "firefox4",
                label: "firefox4",
                text: "firefox4",
                "data":"",
                "codename":"Firefox4",
                value: "firefox4",
                
                disabled: false,
            },
            {
                id: "firefox3",
                label: "firefox3",
                text: "firefox3",
                "data":"",
                "codename":"Firefox3",
                value: "firefox3",
                
                disabled: false,
            },
            {
                id: "firefox2",
                label: "firefox2",
                text: "firefox2",
                "data":"",
                "codename":"Firefox2",
                value: "firefox2",
                
                disabled: false,
            },
            {
                id: "opera",
                label: "opera系列",
                text: "opera系列",
                "data":"",
                "codename":"Opera",
                value: "opera",
                
                disabled: false,
            },
            {
                id: "opera11",
                label: "opera11",
                text: "opera11",
                "data":"",
                "codename":"Opera11",
                value: "opera11",
                
                disabled: false,
            },
            {
                id: "oprea10",
                label: "oprea10",
                text: "oprea10",
                "data":"",
                "codename":"Oprea10",
                value: "oprea10",
                
                disabled: false,
            },
            {
                id: "opera9",
                label: "opera9",
                text: "opera9",
                "data":"",
                "codename":"Opera9",
                value: "opera9",
                
                disabled: false,
            },
            {
                id: "safari",
                label: "safari",
                text: "safari",
                "data":"",
                "codename":"Safari",
                value: "safari",
                
                disabled: false,
            },
            {
                id: "maxthon",
                label: "傲游",
                text: "傲游",
                "data":"",
                "codename":"Maxthon",
                value: "maxthon",
                
                disabled: false,
            },
            {
                id: "uc",
                label: "UC",
                text: "UC",
                "data":"",
                "codename":"Uc",
                value: "uc",
                
                disabled: false,
            },
            {
                id: "others",
                label: "其他",
                text: "其他",
                "data":"",
                "codename":"Others",
                value: "others",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Todo__status",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "wait",
                label: "未开始",
                text: "未开始",
                "data":"",
                "codename":"Wait",
                value: "wait",
                
                disabled: false,
            },
            {
                id: "doing",
                label: "进行中",
                text: "进行中",
                "data":"",
                "codename":"Doing",
                "color": "rgba(245, 18, 18, 1)",
                value: "doing",
                
                disabled: false,
            },
            {
                id: "done",
                label: "已完成",
                text: "已完成",
                "data":"",
                "codename":"Done",
                "color": "rgba(4, 251, 17, 1)",
                value: "done",
                
                disabled: false,
            },
            {
                id: "closed",
                label: "已关闭",
                text: "已关闭",
                "data":"",
                "codename":"Closed",
                value: "closed",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "BugUserRealName",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"SysEmployee",
        "appdedataset":"FetchBugUser",
        "items": []
    },
    {
        srfkey: "Project__type",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "sprint",
                label: "短期项目",
                text: "短期项目",
                "data":"",
                "codename":"Sprint",
                value: "sprint",
                
                disabled: false,
            },
            {
                id: "waterfall",
                label: "长期项目",
                text: "长期项目",
                "data":"",
                "codename":"Waterfall",
                value: "waterfall",
                
                disabled: false,
            },
            {
                id: "ops",
                label: "运维项目",
                text: "运维项目",
                "data":"",
                "codename":"Ops",
                value: "ops",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Story__status",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "draft",
                label: "草稿",
                text: "草稿",
                "data":"",
                "codename":"Draft",
                "color": "rgba(185, 111, 241, 1)",
                value: "draft",
                
                disabled: false,
            },
            {
                id: "active",
                label: "激活",
                text: "激活",
                "data":"",
                "codename":"Active",
                value: "active",
                
                disabled: false,
            },
            {
                id: "closed",
                label: "已关闭",
                text: "已关闭",
                "data":"",
                "codename":"Closed",
                "color": "rgba(203, 198, 198, 0.84)",
                value: "closed",
                
                disabled: false,
            },
            {
                id: "changed",
                label: "已变更",
                text: "已变更",
                "data":"",
                "codename":"Changed",
                "color": "rgba(217, 68, 68, 1)",
                value: "changed",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Action__read",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "0",
                label: "0",
                text: "0",
                "data":"",
                "codename":"Item_0",
                value: "0",
                
                disabled: false,
            },
            {
                id: "1",
                label: "1",
                text: "1",
                "data":"",
                "codename":"Item_1",
                value: "1",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Project__pri",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "1",
                text: "1",
                "data":"",
                "codename":"Item_1",
                value: "1",
                
                disabled: false,
            },
            {
                id: "2",
                label: "2",
                text: "2",
                "data":"",
                "codename":"Item_2",
                value: "2",
                
                disabled: false,
            },
            {
                id: "3",
                label: "3",
                text: "3",
                "data":"",
                "codename":"Item_3",
                value: "3",
                
                disabled: false,
            },
            {
                id: "4",
                label: "4",
                text: "4",
                "data":"",
                "codename":"Item_4",
                value: "4",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "ConfigGroup",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "GROUP",
                label: "分组",
                text: "分组",
                "data":"",
                "codename":"Group",
                value: "GROUP",
                
                disabled: false,
            },
            {
                id: "ITEM",
                label: "配置项",
                text: "配置项",
                "data":"",
                "codename":"Item",
                value: "ITEM",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "ProductActionQuickpacket",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "All",
                label: "所有",
                text: "所有",
                "data":{},
                "codename":"All",
                value: "All",
                
                disabled: false,
            },
            {
                id: "today",
                label: "今天",
                text: "今天",
                "data":{"n_today_eq":1},
                "codename":"Today",
                value: "today",
                
                disabled: false,
            },
            {
                id: "yesterday",
                label: "昨天",
                text: "昨天",
                "data":{"n_yesterday_eq":1},
                "codename":"Yesterday",
                value: "yesterday",
                
                disabled: false,
            },
            {
                id: "thisweek",
                label: "本周",
                text: "本周",
                "data":{"n_thisweek_eq":1},
                "codename":"Thisweek",
                value: "thisweek",
                
                disabled: false,
            },
            {
                id: "lastweek",
                label: "上周",
                text: "上周",
                "data":{"n_lastweek_eq":1},
                "codename":"Lastweek",
                value: "lastweek",
                
                disabled: false,
            },
            {
                id: "thismonth",
                label: "本月",
                text: "本月",
                "data":{"n_thismonth_eq":1},
                "codename":"Thismonth",
                value: "thismonth",
                
                disabled: false,
            },
            {
                id: "lastmonth",
                label: "上月",
                text: "上月",
                "data":{"n_lastmonth_eq":1},
                "codename":"Lastmonth",
                value: "lastmonth",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Doc__acl",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "open",
                label: "公开",
                text: "公开",
                "data":"",
                "codename":"Open",
                value: "open",
                
                disabled: false,
            },
            {
                id: "private",
                label: "私有",
                text: "私有",
                "data":"",
                "codename":"Private",
                value: "private",
                
                disabled: false,
            },
            {
                id: "custom",
                label: "自定义",
                text: "自定义",
                "data":"",
                "codename":"Custom",
                value: "custom",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "ProductBranch",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Branch",
        "appdedataset":"FetchCurProduct",
        "items": []
    },
    {
        srfkey: "ExpiredPlan",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "过期计划",
                text: "过期计划",
                "data":"",
                "codename":"Item_1",
                value: "1",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Testtask__pri",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "1",
                text: "1",
                "data":"",
                "codename":"Item_1",
                value: 1,
                
                disabled: false,
            },
            {
                id: "2",
                label: "2",
                text: "2",
                "data":"",
                "codename":"Item_2",
                value: 2,
                
                disabled: false,
            },
            {
                id: "3",
                label: "3",
                text: "3",
                "data":"",
                "codename":"Item_3",
                value: 3,
                
                disabled: false,
            },
            {
                id: "4",
                label: "4",
                text: "4",
                "data":"",
                "codename":"Item_4",
                value: 4,
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Story__pri",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "1",
                text: "1",
                "data":"",
                "codename":"Item_1",
                "color": "rgba(230, 43, 43, 1)",
                value: 1,
                
                disabled: false,
            },
            {
                id: "2",
                label: "2",
                text: "2",
                "data":"",
                "codename":"Item_2",
                "color": "rgba(225, 228, 33, 1)",
                value: 2,
                
                disabled: false,
            },
            {
                id: "3",
                label: "3",
                text: "3",
                "data":"",
                "codename":"Item_3",
                "color": "rgba(52, 8, 248, 1)",
                value: 3,
                
                disabled: false,
            },
            {
                id: "4",
                label: "4",
                text: "4",
                "data":"",
                "codename":"Item_4",
                "color": "rgba(80, 133, 63, 1)",
                value: 4,
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Story__review_result_draft",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "pass",
                label: "确认通过",
                text: "确认通过",
                "data":"",
                "codename":"Pass",
                value: "pass",
                
                disabled: false,
            },
            {
                id: "clarify",
                label: "有待明确",
                text: "有待明确",
                "data":"",
                "codename":"Clarify",
                "color": "rgba(49, 27, 146, 1)",
                value: "clarify",
                
                disabled: false,
            },
            {
                id: "reject",
                label: "拒绝",
                text: "拒绝",
                "data":"",
                "codename":"Reject",
                value: "reject",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "ProjectQuickpaketMy",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "All",
                label: "我的项目",
                text: "我的项目",
                "data":{"n_account_eq":"%srfloginname%"},
                "codename":"All",
                value: "All",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "PlanAcl",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "open",
                label: "公开",
                text: "公开",
                "data":"",
                "codename":"Open",
                value: "open",
                
                disabled: false,
            },
            {
                id: "private",
                label: "私有",
                text: "私有",
                "data":"",
                "codename":"Private",
                value: "private",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "ProductQuickpacket",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "All",
                label: "所有",
                text: "所有",
                "data":{},
                "codename":"All",
                value: "All",
                
                disabled: false,
            },
            {
                id: "normal",
                label: "未关闭",
                text: "未关闭",
                "data":{"n_status_eq":"normal"},
                "codename":"Normal",
                value: "normal",
                
                disabled: false,
            },
            {
                id: "closed",
                label: "已关闭",
                text: "已关闭",
                "data":{"n_status_eq":"closed"},
                "codename":"Closed",
                value: "closed",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "NeedNotReviewNew",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "不需要评审",
                text: "不需要评审",
                "data":"",
                "codename":"Item_1",
                value: "1",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Story__type",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "requirement",
                label: "用户需求",
                text: "用户需求",
                "data":"",
                "codename":"Requirement",
                value: "requirement",
                
                disabled: false,
            },
            {
                id: "story",
                label: "软件需求",
                text: "软件需求",
                "data":"",
                "codename":"Story",
                value: "story",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Testcase__color",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "#3da7f5",
                label: "#3da7f5",
                text: "#3da7f5",
                "data":"",
                "codename":"Item_1",
                "color": "rgba(61, 167, 245, 1)",
                value: "#3da7f5",
                
                disabled: false,
            },
            {
                id: "#75c941",
                label: "#75c941",
                text: "#75c941",
                "data":"",
                "codename":"Item_2",
                "color": "rgba(117, 201, 65, 1)",
                value: "#75c941",
                
                disabled: false,
            },
            {
                id: "#2dbdb2",
                label: "#2dbdb2",
                text: "#2dbdb2",
                "data":"",
                "codename":"Item_3",
                "color": "rgba(45, 189, 178, 1)",
                value: "#2dbdb2",
                
                disabled: false,
            },
            {
                id: "#797ec9",
                label: "#797ec9",
                text: "#797ec9",
                "data":"",
                "codename":"Item_4",
                "color": "rgba(121, 126, 201, 1)",
                value: "#797ec9",
                
                disabled: false,
            },
            {
                id: "#ffaf38",
                label: "#ffaf38",
                text: "#ffaf38",
                "data":"",
                "codename":"Item_5",
                "color": "rgba(255, 175, 56, 1)",
                value: "#ffaf38",
                
                disabled: false,
            },
            {
                id: "#ff4e3e",
                label: "#ff4e3e",
                text: "#ff4e3e",
                "data":"",
                "codename":"Item_6",
                "color": "rgba(255, 78, 62, 1)",
                value: "#ff4e3e",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "BurnQuickpacket",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "exWeek",
                label: "去除周末",
                text: "去除周末",
                "data":{"n_isweekend_in":"1;2;3;4;5"},
                "codename":"Exweek",
                value: "exWeek",
                
                disabled: false,
            },
            {
                id: "Week",
                label: "显示周末",
                text: "显示周末",
                "data":{},
                "codename":"Week",
                value: "Week",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Testcase__frame",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "junit",
                label: "JUnit",
                text: "JUnit",
                "data":"",
                "codename":"Junit",
                value: "junit",
                
                disabled: false,
            },
            {
                id: "testng",
                label: "TestNG",
                text: "TestNG",
                "data":"",
                "codename":"Testng",
                value: "testng",
                
                disabled: false,
            },
            {
                id: "phpunit",
                label: "PHPUnit",
                text: "PHPUnit",
                "data":"",
                "codename":"Phpunit",
                value: "phpunit",
                
                disabled: false,
            },
            {
                id: "pytest",
                label: "Pytest",
                text: "Pytest",
                "data":"",
                "codename":"Pytest",
                value: "pytest",
                
                disabled: false,
            },
            {
                id: "jtest",
                label: "JTest",
                text: "JTest",
                "data":"",
                "codename":"Jtest",
                value: "jtest",
                
                disabled: false,
            },
            {
                id: "cppunit",
                label: "CppUnit",
                text: "CppUnit",
                "data":"",
                "codename":"Cppunit",
                value: "cppunit",
                
                disabled: false,
            },
            {
                id: "gtest",
                label: "GTest",
                text: "GTest",
                "data":"",
                "codename":"Gtest",
                value: "gtest",
                
                disabled: false,
            },
            {
                id: "qtest",
                label: "QTest",
                text: "QTest",
                "data":"",
                "codename":"Qtest",
                value: "qtest",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Private_choose",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "是",
                text: "是",
                "data":"",
                "codename":"Item_1",
                value: "1",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "AllCase",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Case",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        "srfkey": "APPBuild",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"PSSysApp",
        "appdedataset":"FetchBuild",
        "items": []
    },
    {
        srfkey: "Action__object_type",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "product",
                label: "产品",
                text: "产品",
                "data":"",
                "codename":"Product",
                value: "product",
                
                disabled: false,
            },
            {
                id: "story",
                label: "需求",
                text: "需求",
                "data":"",
                "codename":"Story",
                value: "story",
                
                disabled: false,
            },
            {
                id: "productplan",
                label: "计划",
                text: "计划",
                "data":"",
                "codename":"Productplan",
                value: "productplan",
                
                disabled: false,
            },
            {
                id: "release",
                label: "发布",
                text: "发布",
                "data":"",
                "codename":"Release",
                value: "release",
                
                disabled: false,
            },
            {
                id: "project",
                label: "项目",
                text: "项目",
                "data":"",
                "codename":"Project",
                value: "project",
                
                disabled: false,
            },
            {
                id: "task",
                label: "任务",
                text: "任务",
                "data":"",
                "codename":"Task",
                value: "task",
                
                disabled: false,
            },
            {
                id: "build",
                label: "版本",
                text: "版本",
                "data":"",
                "codename":"Build",
                value: "build",
                
                disabled: false,
            },
            {
                id: "bug",
                label: "Bug",
                text: "Bug",
                "data":"",
                "codename":"Bug",
                value: "bug",
                
                disabled: false,
            },
            {
                id: "case",
                label: "用例",
                text: "用例",
                "data":"",
                "codename":"Case",
                value: "case",
                
                disabled: false,
            },
            {
                id: "caseresult",
                label: "用例结果",
                text: "用例结果",
                "data":"",
                "codename":"Caseresult",
                value: "caseresult",
                
                disabled: false,
            },
            {
                id: "stepresult",
                label: "用例步骤",
                text: "用例步骤",
                "data":"",
                "codename":"Stepresult",
                value: "stepresult",
                
                disabled: false,
            },
            {
                id: "testtask",
                label: "测试单",
                text: "测试单",
                "data":"",
                "codename":"Testtask",
                value: "testtask",
                
                disabled: false,
            },
            {
                id: "user",
                label: "用户",
                text: "用户",
                "data":"",
                "codename":"User",
                value: "user",
                
                disabled: false,
            },
            {
                id: "doc",
                label: "文档",
                text: "文档",
                "data":"",
                "codename":"Doc",
                value: "doc",
                
                disabled: false,
            },
            {
                id: "doclib",
                label: "文档库",
                text: "文档库",
                "data":"",
                "codename":"Doclib",
                value: "doclib",
                
                disabled: false,
            },
            {
                id: "todo",
                label: "待办",
                text: "待办",
                "data":"",
                "codename":"Todo",
                value: "todo",
                
                disabled: false,
            },
            {
                id: "branch",
                label: "分支",
                text: "分支",
                "data":"",
                "codename":"Branch",
                value: "branch",
                
                disabled: false,
            },
            {
                id: "module",
                label: "模块",
                text: "模块",
                "data":"",
                "codename":"Module",
                value: "module",
                
                disabled: false,
            },
            {
                id: "testsuite",
                label: "套件",
                text: "套件",
                "data":"",
                "codename":"Testsuite",
                value: "testsuite",
                
                disabled: false,
            },
            {
                id: "caselib",
                label: "用例库",
                text: "用例库",
                "data":"",
                "codename":"Caselib",
                value: "caselib",
                
                disabled: false,
            },
            {
                id: "testreport",
                label: "报告",
                text: "报告",
                "data":"",
                "codename":"Testreport",
                value: "testreport",
                
                disabled: false,
            },
            {
                id: "entry",
                label: "应用",
                text: "应用",
                "data":"",
                "codename":"Entry",
                value: "entry",
                
                disabled: false,
            },
            {
                id: "webhook",
                label: "Webhook",
                text: "Webhook",
                "data":"",
                "codename":"Webhook",
                value: "webhook",
                
                disabled: false,
            },
            {
                id: "daily",
                label: "日报",
                text: "日报",
                "data":"",
                "codename":"Daily",
                value: "daily",
                
                disabled: false,
            },
            {
                id: "weekly",
                label: "周报",
                text: "周报",
                "data":"",
                "codename":"Weekly",
                value: "weekly",
                
                disabled: false,
            },
            {
                id: "monthly",
                label: "月报",
                text: "月报",
                "data":"",
                "codename":"Monthly",
                value: "monthly",
                
                disabled: false,
            },
            {
                id: "reportly",
                label: "汇报",
                text: "汇报",
                "data":"",
                "codename":"Reportly",
                value: "reportly",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "RELEASE_rebuild",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "0",
                label: "无操作",
                text: "无操作",
                "data":"",
                "codename":"None",
                value: 0,
                
                disabled: false,
            },
            {
                id: "1",
                label: "快速（删除本地项目与代码仓库多余文件）",
                text: "快速（删除本地项目与代码仓库多余文件）",
                "data":"",
                "codename":"Quick",
                value: 1,
                
                disabled: false,
            },
            {
                id: "4",
                label: "修复模型",
                text: "修复模型",
                "data":"",
                "codename":"FixModel",
                value: 4,
                
                disabled: false,
            },
            {
                id: "2",
                label: "完整（完全重建本地项目及代码仓库）",
                text: "完整（完全重建本地项目及代码仓库）",
                "data":"",
                "codename":"Full",
                value: 2,
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Task__pri",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "1",
                text: "1",
                "data":"",
                "codename":"Item_1",
                value: 1,
                
                disabled: false,
            },
            {
                id: "2",
                label: "2",
                text: "2",
                "data":"",
                "codename":"Item_2",
                value: 2,
                
                disabled: false,
            },
            {
                id: "3",
                label: "3",
                text: "3",
                "data":"",
                "codename":"Item_3",
                value: 3,
                
                disabled: false,
            },
            {
                id: "4",
                label: "4",
                text: "4",
                "data":"",
                "codename":"Item_4",
                value: 4,
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Release__status",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "normal",
                label: "正常",
                text: "正常",
                "data":"",
                "codename":"Normal",
                "color": "rgba(13, 255, 0, 1)",
                value: "normal",
                
                disabled: false,
            },
            {
                id: "terminate",
                label: "停止维护",
                text: "停止维护",
                "data":"",
                "codename":"Terminate",
                value: "terminate",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "AllRole",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"SysRole",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        srfkey: "TodoQuickpacketMy",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "All",
                label: "所有待办",
                text: "所有待办",
                "data":{"n_cycle_eq":"0"},
                "codename":"All",
                value: "All",
                
                disabled: false,
            },
            {
                id: "thisyear",
                label: "本年度",
                text: "本年度",
                "data":{"thisyear":"thisyear","n_cycle_eq":"0"},
                "codename":"Thisyear",
                value: "thisyear",
                
                disabled: false,
            },
            {
                id: "Unfinished",
                label: "未完",
                text: "未完",
                "data":{"n_status_eq":"wait","n_cycle_eq":"0","n_date_noteq":"2030-01-01"},
                "codename":"Unfinished",
                value: "Unfinished",
                
                disabled: false,
            },
            {
                id: "BYME",
                label: "待定",
                text: "待定",
                "data":{"n_date_eq":"2030-01-01","n_cycle_eq":"0"},
                "codename":"Byme",
                value: "BYME",
                
                disabled: false,
            },
            {
                id: "cycle",
                label: "周期",
                text: "周期",
                "data":{"n_cycle_eq":"1"},
                "codename":"Cycle",
                value: "cycle",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "TASK_QuickacketMy",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "TOME",
                label: "指派给我",
                text: "指派给我",
                "data":{"n_assignedto_eq":"%srfloginname%"},
                "codename":"Tome",
                value: "TOME",
                
                disabled: false,
            },
            {
                id: "CANCELLED",
                label: "由我创建",
                text: "由我创建",
                "data":{"n_openedby_eq":"%srfloginname%"},
                "codename":"Cancelled",
                value: "CANCELLED",
                
                disabled: false,
            },
            {
                id: "IFINISHED",
                label: "由我完成",
                text: "由我完成",
                "data":{"n_finishedby_eq":"%srfloginname%"},
                "codename":"Ifinished",
                value: "IFINISHED",
                
                disabled: false,
            },
            {
                id: "COMPLETED",
                label: "由我关闭",
                text: "由我关闭",
                "data":{"n_closedby_eq":"%srfloginname%"},
                "codename":"Completed",
                value: "COMPLETED",
                
                disabled: false,
            },
            {
                id: "CLOSED",
                label: "由我取消",
                text: "由我取消",
                "data":{"n_canceledby_eq":"%srfloginname%"},
                "codename":"Closed",
                value: "CLOSED",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Realease_sort",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "all",
                label: "所有",
                text: "所有",
                "data":{},
                "codename":"All",
                value: "all",
                
                disabled: false,
            },
            {
                id: "normal",
                label: "正常",
                text: "正常",
                "data":{"n_status_eq":"normal"},
                "codename":"Normal",
                "color": "rgba(13, 255, 0, 1)",
                value: "normal",
                
                disabled: false,
            },
            {
                id: "terminate",
                label: "停止维护",
                text: "停止维护",
                "data":{"n_status_eq":"terminate"},
                "codename":"Terminate",
                value: "terminate",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "UserTplType",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "story",
                label: "需求",
                text: "需求",
                "data":"",
                "codename":"Story",
                value: "story",
                
                disabled: false,
            },
            {
                id: "task",
                label: "任务",
                text: "任务",
                "data":"",
                "codename":"Task",
                value: "task",
                
                disabled: false,
            },
            {
                id: "bug",
                label: "Bug",
                text: "Bug",
                "data":"",
                "codename":"Bug",
                value: "bug",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "UserTplQuickGroup",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "all",
                label: "所有",
                text: "所有",
                "data":{},
                "codename":"All",
                value: "all",
                
                disabled: false,
            },
            {
                id: "story",
                label: "需求",
                text: "需求",
                "data":{"n_type_eq":"story"},
                "codename":"Story",
                value: "story",
                
                disabled: false,
            },
            {
                id: "task",
                label: "任务",
                text: "任务",
                "data":{"n_type_eq":"task"},
                "codename":"Task",
                value: "task",
                
                disabled: false,
            },
            {
                id: "bug",
                label: "Bug",
                text: "Bug",
                "data":{"n_type_eq":"bug"},
                "codename":"Bug",
                value: "bug",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "TestCaseStatusGrid",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "wait",
                label: "未开始",
                text: "未开始",
                "data":"",
                "codename":"Wait",
                value: "wait",
                
                disabled: false,
            },
            {
                id: "normal",
                label: "正常",
                text: "正常",
                "data":"",
                "codename":"Normal",
                "color": "rgba(84, 238, 19, 1)",
                value: "normal",
                
                disabled: false,
            },
            {
                id: "blocked",
                label: "被阻塞",
                text: "被阻塞",
                "data":"",
                "codename":"Blocked",
                "color": "rgba(230, 242, 3, 0.97)",
                value: "blocked",
                
                disabled: false,
            },
            {
                id: "investigate",
                label: "研究中",
                text: "研究中",
                "data":"",
                "codename":"Investigate",
                "color": "rgba(245, 12, 12, 1)",
                value: "investigate",
                
                disabled: false,
            },
            {
                id: "done",
                label: "已完成",
                text: "已完成",
                "data":"",
                "codename":"Done",
                value: "done",
                
                disabled: false,
            },
            {
                id: "storychange",
                label: "需求变更",
                text: "需求变更",
                "data":"",
                "codename":"Storychange",
                "color": "rgba(254, 8, 8, 1)",
                value: "storychange",
                
                disabled: false,
            },
            {
                id: "casechange",
                label: "原用例更新",
                text: "原用例更新",
                "data":"",
                "codename":"Casechange",
                "color": "rgba(247, 31, 7, 1)",
                value: "casechange",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "Product",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Product",
        "appdedataset":"FetchAllList",
        "items": []
    },
    {
        srfkey: "IsAssigned",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "assign",
                label: "已指派",
                text: "已指派",
                "data":"",
                "codename":"Assign",
                value: "assign",
                
                disabled: false,
            },
            {
                id: "noassign",
                label: "未指派",
                text: "未指派",
                "data":"",
                "codename":"Noassign",
                value: "noassign",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "UserRealName",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"SysEmployee",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        srfkey: "Zt__delta",
        emptytext: "按时间段",
        "codelisttype":"static",
        items: [
            {
                id: "7",
                label: "一星期",
                text: "一星期",
                "data":"",
                "codename":"Item_7",
                value: "7",
                
                disabled: false,
            },
            {
                id: "14",
                label: "两星期",
                text: "两星期",
                "data":"",
                "codename":"Item_14",
                value: "14",
                
                disabled: false,
            },
            {
                id: "31",
                label: "一个月",
                text: "一个月",
                "data":"",
                "codename":"Item_31",
                value: "31",
                
                disabled: false,
            },
            {
                id: "62",
                label: "两个月",
                text: "两个月",
                "data":"",
                "codename":"Item_62",
                value: "62",
                
                disabled: false,
            },
            {
                id: "93",
                label: "三个月",
                text: "三个月",
                "data":"",
                "codename":"Item_93",
                value: "93",
                
                disabled: false,
            },
            {
                id: "186",
                label: "半年",
                text: "半年",
                "data":"",
                "codename":"Item_186",
                value: "186",
                
                disabled: false,
            },
            {
                id: "365",
                label: "一年",
                text: "一年",
                "data":"",
                "codename":"Item_365",
                value: "365",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "BugCodeList2",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "All",
                label: "所有",
                text: "所有",
                "data":{},
                "codename":"All",
                value: "All",
                
                disabled: false,
            },
            {
                id: "active",
                label: "未解决",
                text: "未解决",
                "data":{"n_status_eq":"active"},
                "codename":"Active",
                value: "active",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "BugQuickpacketMy",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "TOME",
                label: "指派给我",
                text: "指派给我",
                "data":{"n_assignedto_eq":"%srfloginname%"},
                "codename":"Tome",
                value: "TOME",
                
                disabled: false,
            },
            {
                id: "ICREATE",
                label: "由我创建",
                text: "由我创建",
                "data":{"n_openedby_eq":"%srfloginname%"},
                "codename":"Icreate",
                value: "ICREATE",
                
                disabled: false,
            },
            {
                id: "BYME",
                label: "由我解决",
                text: "由我解决",
                "data":{"n_resolvedby_eq":"%srfloginname%"},
                "codename":"Byme",
                value: "BYME",
                
                disabled: false,
            },
            {
                id: "WAITCLOSED",
                label: "由我关闭",
                text: "由我关闭",
                "data":{"n_closedby_eq":"%srfloginname%"},
                "codename":"Waitclosed",
                value: "WAITCLOSED",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Date_disable",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "on",
                label: "待定",
                text: "待定",
                "data":"",
                "codename":"On",
                value: "on",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Story__stage",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "wait",
                label: "未开始",
                text: "未开始",
                "data":"",
                "codename":"Wait",
                "color": "rgba(144, 248, 25, 1)",
                value: "wait",
                
                disabled: false,
            },
            {
                id: "planned",
                label: "已计划",
                text: "已计划",
                "data":"",
                "codename":"Planned",
                "color": "rgba(108, 159, 19, 1)",
                value: "planned",
                
                disabled: false,
            },
            {
                id: "projected",
                label: "已立项",
                text: "已立项",
                "data":"",
                "codename":"Projected",
                "color": "rgba(45, 89, 5, 1)",
                value: "projected",
                
                disabled: false,
            },
            {
                id: "developing",
                label: "研发中",
                text: "研发中",
                "data":"",
                "codename":"Developing",
                "color": "rgba(10, 164, 181, 1)",
                value: "developing",
                
                disabled: false,
            },
            {
                id: "developed",
                label: "研发完毕",
                text: "研发完毕",
                "data":"",
                "codename":"Developed",
                "color": "rgba(7, 98, 108, 1)",
                value: "developed",
                
                disabled: false,
            },
            {
                id: "testing",
                label: "测试中",
                text: "测试中",
                "data":"",
                "codename":"Testing",
                "color": "rgba(18, 46, 205, 1)",
                value: "testing",
                
                disabled: false,
            },
            {
                id: "tested",
                label: "测试完毕",
                text: "测试完毕",
                "data":"",
                "codename":"Tested",
                "color": "rgba(8, 56, 115, 1)",
                value: "tested",
                
                disabled: false,
            },
            {
                id: "verified",
                label: "已验收",
                text: "已验收",
                "data":"",
                "codename":"Verified",
                "color": "rgba(85, 7, 137, 1)",
                value: "verified",
                
                disabled: false,
            },
            {
                id: "released",
                label: "已发布",
                text: "已发布",
                "data":"",
                "codename":"Released",
                "color": "rgba(12, 244, 47, 1)",
                value: "released",
                
                disabled: false,
            },
            {
                id: "closed",
                label: "已关闭",
                text: "已关闭",
                "data":"",
                "codename":"Closed",
                "color": "rgba(212, 219, 221, 1)",
                value: "closed",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "MonthlyCompleteTaskChoice",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Task",
        "appdedataset":"FetchThisMonthCompleteTaskChoice",
        "items": []
    },
    {
        srfkey: "Beginend_disable",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "on",
                label: "暂时不设定时间",
                text: "暂时不设定时间",
                "data":"",
                "codename":"On",
                value: "on",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "UserRealNameW",
        "emptytext": "未指派",
        "codelisttype":"dynamic",
        "appdataentity":"SysEmployee",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        srfkey: "Bug__pri",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "严重",
                text: "严重",
                "data":"",
                "codename":"Item_1",
                value: 1,
                
                disabled: false,
            },
            {
                id: "2",
                label: "主要",
                text: "主要",
                "data":"",
                "codename":"Item_2",
                value: 2,
                
                disabled: false,
            },
            {
                id: "3",
                label: "次要",
                text: "次要",
                "data":"",
                "codename":"Item_3",
                value: 3,
                
                disabled: false,
            },
            {
                id: "4",
                label: "不重要",
                text: "不重要",
                "data":"",
                "codename":"Item_4",
                value: 4,
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "SYS_UPDATE_LOG_TYPE",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "10",
                label: "功能增强",
                text: "功能增强",
                "data":"",
                "codename":"Item_10",
                "color": "rgba(217, 4, 4, 1)",
                value: "10",
                
                disabled: false,
            },
            {
                id: "20",
                label: "优化",
                text: "优化",
                "data":"",
                "codename":"Item_20",
                "color": "rgba(97, 207, 13, 1)",
                value: "20",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Project__statge",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "1",
                text: "1",
                "data":"",
                "codename":"Item_1",
                value: "1",
                
                disabled: false,
            },
            {
                id: "2",
                label: "2",
                text: "2",
                "data":"",
                "codename":"Item_2",
                value: "2",
                
                disabled: false,
            },
            {
                id: "3",
                label: "3",
                text: "3",
                "data":"",
                "codename":"Item_3",
                value: "3",
                
                disabled: false,
            },
            {
                id: "4",
                label: "4",
                text: "4",
                "data":"",
                "codename":"Item_4",
                value: "4",
                
                disabled: false,
            },
            {
                id: "5",
                label: "5",
                text: "5",
                "data":"",
                "codename":"Item_5",
                value: "5",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "UserRealNameProductTeamNotAssign",
        "emptytext": "未指派",
        "codelisttype":"dynamic",
        "appdataentity":"SysEmployee",
        "appdedataset":"FetchStoryProductTeamPK",
        "items": []
    },
    {
        srfkey: "Bug__status",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "active",
                label: "激活",
                text: "激活",
                "data":"",
                "codename":"Active",
                "color": "rgba(0, 157, 255, 1)",
                value: "active",
                
                disabled: false,
            },
            {
                id: "resolved",
                label: "已解决",
                text: "已解决",
                "data":"",
                "codename":"Resolved",
                "color": "rgba(1, 217, 19, 1)",
                value: "resolved",
                
                disabled: false,
            },
            {
                id: "closed",
                label: "已关闭",
                text: "已关闭",
                "data":"",
                "codename":"Closed",
                "color": "rgba(151, 152, 141, 1)",
                value: "closed",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "BugCreateResolve",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "创建",
                text: "创建",
                "data":"",
                "codename":"Item_1",
                value: "1",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Testsuite__type",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "library",
                label: "用例库",
                text: "用例库",
                "data":"",
                "codename":"Library",
                value: "library",
                
                disabled: false,
            },
            {
                id: "private",
                label: "私有",
                text: "私有",
                "data":"",
                "codename":"Private",
                value: "private",
                
                disabled: false,
            },
            {
                id: "public",
                label: "公开",
                text: "公开",
                "data":"",
                "codename":"Public",
                value: "public",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "TestsuiteTypeNew",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "private",
                label: "私有",
                text: "私有",
                "data":"",
                "codename":"Private",
                value: "private",
                
                disabled: false,
            },
            {
                id: "public",
                label: "公开",
                text: "公开",
                "data":"",
                "codename":"Public",
                value: "public",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "UserRealNameTaskMTeam",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"SysEmployee",
        "appdedataset":"FetchTaskMTeam",
        "items": []
    },
    {
        srfkey: "Testcase__stage",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "unittest",
                label: "单元测试阶段",
                text: "单元测试阶段",
                "data":"",
                "codename":"Unittest",
                value: "unittest",
                
                disabled: false,
            },
            {
                id: "feature",
                label: "功能测试阶段",
                text: "功能测试阶段",
                "data":"",
                "codename":"Feature",
                value: "feature",
                
                disabled: false,
            },
            {
                id: "intergrate",
                label: "集成测试阶段",
                text: "集成测试阶段",
                "data":"",
                "codename":"Intergrate",
                value: "intergrate",
                
                disabled: false,
            },
            {
                id: "system",
                label: "系统测试阶段",
                text: "系统测试阶段",
                "data":"",
                "codename":"System",
                value: "system",
                
                disabled: false,
            },
            {
                id: "smoke",
                label: "冒烟测试阶段",
                text: "冒烟测试阶段",
                "data":"",
                "codename":"Smoke",
                value: "smoke",
                
                disabled: false,
            },
            {
                id: "bvt",
                label: "版本验证阶段",
                text: "版本验证阶段",
                "data":"",
                "codename":"Bvt",
                value: "bvt",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Casestep__type",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "step",
                label: "步骤",
                text: "步骤",
                "data":"",
                "codename":"Step",
                value: "step",
                
                disabled: false,
            },
            {
                id: "group",
                label: "分组",
                text: "分组",
                "data":"",
                "codename":"Group",
                value: "group",
                
                disabled: false,
            },
            {
                id: "item",
                label: "分组步骤",
                text: "分组步骤",
                "data":"",
                "codename":"Item",
                value: "item",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Product__acl",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "open",
                label: "默认设置(有产品视图权限，即可访问)",
                text: "默认设置(有产品视图权限，即可访问)",
                "data":"",
                "codename":"Open",
                value: "open",
                
                disabled: false,
            },
            {
                id: "private",
                label: "私有产品(相关负责人和项目团队成员才能访问)",
                text: "私有产品(相关负责人和项目团队成员才能访问)",
                "data":"",
                "codename":"Private",
                value: "private",
                
                disabled: false,
            },
            {
                id: "custom",
                label: "自定义白名单(团队成员和白名单的成员可以访问)",
                text: "自定义白名单(团队成员和白名单的成员可以访问)",
                "data":"",
                "codename":"Custom",
                value: "custom",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "UserRealNameUnAssignTo_Gird",
        "emptytext": "未指派",
        "codelisttype":"dynamic",
        "appdataentity":"SysEmployee",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        "srfkey": "Role",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Group",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        "srfkey": "CurProductBuild",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Build",
        "appdedataset":"FetchBugProductBuild",
        "items": []
    },
    {
        srfkey: "Type",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "custom",
                label: "自定义",
                text: "自定义",
                "data":"",
                "codename":"Custom",
                value: "custom",
                
                disabled: false,
            },
            {
                id: "bug",
                label: "Bug",
                text: "Bug",
                "data":"",
                "codename":"Bug",
                value: "bug",
                
                disabled: false,
            },
            {
                id: "task",
                label: "项目任务",
                text: "项目任务",
                "data":"",
                "codename":"Task",
                value: "task",
                
                disabled: false,
            },
            {
                id: "story",
                label: "项目需求",
                text: "项目需求",
                "data":"",
                "codename":"Story",
                value: "story",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Doclib__type",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "product",
                label: "产品文档库",
                text: "产品文档库",
                "data":"",
                "codename":"Product",
                value: "product",
                
                disabled: false,
            },
            {
                id: "project",
                label: "项目文档库",
                text: "项目文档库",
                "data":"",
                "codename":"Project",
                value: "project",
                
                disabled: false,
            },
            {
                id: "custom",
                label: "自定义文档库",
                text: "自定义文档库",
                "data":"",
                "codename":"Custom",
                value: "custom",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Zt__productplan",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "All",
                label: "所有",
                text: "所有",
                "data":{},
                "codename":"All",
                value: "All",
                
                disabled: false,
            },
            {
                id: "UNEXPIRED",
                label: "未过期",
                text: "未过期",
                "data":{"n_isexpired_eq":0},
                "codename":"Unexpired",
                value: "UNEXPIRED",
                
                disabled: false,
            },
            {
                id: "ISEXPIRED",
                label: "已过期",
                text: "已过期",
                "data":{"n_isexpired_eq":1},
                "codename":"Isexpired",
                value: "ISEXPIRED",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "UserRealName_Gird",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"SysEmployee",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        srfkey: "CodeList47",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "1号",
                text: "1号",
                "data":"",
                "codename":"Item_1",
                value: "1",
                
                disabled: false,
            },
            {
                id: "2",
                label: "2号",
                text: "2号",
                "data":"",
                "codename":"Item_2",
                value: "2",
                
                disabled: false,
            },
            {
                id: "3",
                label: "3号",
                text: "3号",
                "data":"",
                "codename":"Item_3",
                value: "3",
                
                disabled: false,
            },
            {
                id: "4",
                label: "4号",
                text: "4号",
                "data":"",
                "codename":"Item_4",
                value: "4",
                
                disabled: false,
            },
            {
                id: "5",
                label: "5号",
                text: "5号",
                "data":"",
                "codename":"Item_5",
                value: "5",
                
                disabled: false,
            },
            {
                id: "6",
                label: "6号",
                text: "6号",
                "data":"",
                "codename":"Item_6",
                value: "6",
                
                disabled: false,
            },
            {
                id: "7",
                label: "7号",
                text: "7号",
                "data":"",
                "codename":"Item_7",
                value: "7",
                
                disabled: false,
            },
            {
                id: "8",
                label: "8号",
                text: "8号",
                "data":"",
                "codename":"Item_8",
                value: "8",
                
                disabled: false,
            },
            {
                id: "9",
                label: "9号",
                text: "9号",
                "data":"",
                "codename":"Item_9",
                value: "9",
                
                disabled: false,
            },
            {
                id: "10",
                label: "10号",
                text: "10号",
                "data":"",
                "codename":"Item_10",
                value: "10",
                
                disabled: false,
            },
            {
                id: "11",
                label: "11号",
                text: "11号",
                "data":"",
                "codename":"Item_11",
                value: "11",
                
                disabled: false,
            },
            {
                id: "12",
                label: "12号",
                text: "12号",
                "data":"",
                "codename":"Item_12",
                value: "12",
                
                disabled: false,
            },
            {
                id: "13",
                label: "13号",
                text: "13号",
                "data":"",
                "codename":"Item_13",
                value: "13",
                
                disabled: false,
            },
            {
                id: "14",
                label: "14号",
                text: "14号",
                "data":"",
                "codename":"Item_14",
                value: "14",
                
                disabled: false,
            },
            {
                id: "15",
                label: "15号",
                text: "15号",
                "data":"",
                "codename":"Item_15",
                value: "15",
                
                disabled: false,
            },
            {
                id: "16",
                label: "16号",
                text: "16号",
                "data":"",
                "codename":"Item_16",
                value: "16",
                
                disabled: false,
            },
            {
                id: "17",
                label: "17号",
                text: "17号",
                "data":"",
                "codename":"Item_17",
                value: "17",
                
                disabled: false,
            },
            {
                id: "18",
                label: "18号",
                text: "18号",
                "data":"",
                "codename":"Item_18",
                value: "18",
                
                disabled: false,
            },
            {
                id: "19",
                label: "19号",
                text: "19号",
                "data":"",
                "codename":"Item_19",
                value: "19",
                
                disabled: false,
            },
            {
                id: "20",
                label: "20号",
                text: "20号",
                "data":"",
                "codename":"Item_20",
                value: "20",
                
                disabled: false,
            },
            {
                id: "21",
                label: "21号",
                text: "21号",
                "data":"",
                "codename":"Item_21",
                value: "21",
                
                disabled: false,
            },
            {
                id: "22",
                label: "22号",
                text: "22号",
                "data":"",
                "codename":"Item_22",
                value: "22",
                
                disabled: false,
            },
            {
                id: "23",
                label: "23号",
                text: "23号",
                "data":"",
                "codename":"Item_23",
                value: "23",
                
                disabled: false,
            },
            {
                id: "24",
                label: "24号",
                text: "24号",
                "data":"",
                "codename":"Item_24",
                value: "24",
                
                disabled: false,
            },
            {
                id: "25",
                label: "25号",
                text: "25号",
                "data":"",
                "codename":"Item_25",
                value: "25",
                
                disabled: false,
            },
            {
                id: "26",
                label: "26号",
                text: "26号",
                "data":"",
                "codename":"Item_26",
                value: "26",
                
                disabled: false,
            },
            {
                id: "27",
                label: "27号",
                text: "27号",
                "data":"",
                "codename":"Item_27",
                value: "27",
                
                disabled: false,
            },
            {
                id: "28",
                label: "28号",
                text: "28号",
                "data":"",
                "codename":"Item_28",
                value: "28",
                
                disabled: false,
            },
            {
                id: "29",
                label: "29号",
                text: "29号",
                "data":"",
                "codename":"Item_29",
                value: "29",
                
                disabled: false,
            },
            {
                id: "30",
                label: "30号",
                text: "30号",
                "data":"",
                "codename":"Item_30",
                value: "30",
                
                disabled: false,
            },
            {
                id: "31",
                label: "31号",
                text: "31号",
                "data":"",
                "codename":"Item_31",
                value: "31",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "PlantempletType",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "step",
                label: "计划",
                text: "计划",
                "data":"",
                "codename":"Step",
                value: "step",
                
                disabled: false,
            },
            {
                id: "group",
                label: "父计划",
                text: "父计划",
                "data":"",
                "codename":"Group",
                value: "group",
                
                disabled: false,
            },
            {
                id: "item",
                label: "子计划",
                text: "子计划",
                "data":"",
                "codename":"Item",
                value: "item",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "YesNo",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "是",
                text: "是",
                "data":"",
                "codename":"Item_1",
                value: "1",
                
                disabled: false,
            },
            {
                id: "0",
                label: "否",
                text: "否",
                "data":"",
                "codename":"Item_0",
                value: "0",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "RelatedStory",
        "emptytext": "",
        "codelisttype":"dynamic",
        "appdataentity":"Story",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        "srfkey": "AllEntry",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"",
        "appdedataset":"",
        "items": []
    },
    {
        srfkey: "CaseTestTaskQuickpachet",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "ALL",
                label: "所有用例",
                text: "所有用例",
                "data":{},
                "codename":"All",
                value: "ALL",
                
                disabled: false,
            },
            {
                id: "TOME",
                label: "指派给我",
                text: "指派给我",
                "data":{"n_assignedto_eq":"%srfloginname%"},
                "codename":"Tome",
                value: "TOME",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Product__type",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "normal",
                label: "正常",
                text: "正常",
                "data":"",
                "codename":"Normal",
                "color": "blue",
                value: "normal",
                
                disabled: false,
            },
            {
                id: "branch",
                label: "多分支",
                text: "多分支",
                "data":"",
                "codename":"Branch",
                value: "branch",
                
                disabled: false,
            },
            {
                id: "platform",
                label: "多平台",
                text: "多平台",
                "data":"",
                "codename":"Platform",
                value: "platform",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "ConfigScope",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "sys",
                label: "全局",
                text: "全局",
                "data":"",
                "codename":"Sys",
                value: "sys",
                
                disabled: false,
            },
            {
                id: "org",
                label: "当前组织",
                text: "当前组织",
                "data":"",
                "codename":"Org",
                value: "org",
                
                disabled: false,
            },
            {
                id: "dept1",
                label: "当前部门（含子部门）",
                text: "当前部门（含子部门）",
                "data":"",
                "codename":"Dept1",
                value: "dept1",
                
                disabled: false,
            },
            {
                id: "dept2",
                label: "当前部门（不含子部门）",
                text: "当前部门（不含子部门）",
                "data":"",
                "codename":"Dept2",
                value: "dept2",
                
                disabled: false,
            },
            {
                id: "user",
                label: "个人",
                text: "个人",
                "data":"",
                "codename":"User",
                value: "user",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "PlanCodeList",
        "emptytext": "未计划",
        "codelisttype":"dynamic",
        "appdataentity":"ProductPlan",
        "appdedataset":"FetchPlanCodeList",
        "items": []
    },
    {
        "srfkey": "CurProductProject",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Project",
        "appdedataset":"FetchCurProduct",
        "items": []
    },
    {
        "srfkey": "AllRepo",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"",
        "appdedataset":"",
        "items": []
    },
    {
        srfkey: "Story__review_result",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "pass",
                label: "确认通过",
                text: "确认通过",
                "data":"",
                "codename":"Pass",
                value: "pass",
                
                disabled: false,
            },
            {
                id: "revert",
                label: "撤销变更",
                text: "撤销变更",
                "data":"",
                "codename":"Revert",
                value: "revert",
                
                disabled: false,
            },
            {
                id: "clarify",
                label: "有待明确",
                text: "有待明确",
                "data":"",
                "codename":"Clarify",
                "color": "rgba(49, 27, 146, 1)",
                value: "clarify",
                
                disabled: false,
            },
            {
                id: "reject",
                label: "拒绝",
                text: "拒绝",
                "data":"",
                "codename":"Reject",
                value: "reject",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "File__object_type",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "product",
                label: "产品",
                text: "产品",
                "data":"",
                "codename":"Product",
                value: "product",
                
                disabled: false,
            },
            {
                id: "story",
                label: "需求",
                text: "需求",
                "data":"",
                "codename":"Story",
                value: "story",
                
                disabled: false,
            },
            {
                id: "productplan",
                label: "计划",
                text: "计划",
                "data":"",
                "codename":"Productplan",
                value: "productplan",
                
                disabled: false,
            },
            {
                id: "release",
                label: "发布",
                text: "发布",
                "data":"",
                "codename":"Release",
                value: "release",
                
                disabled: false,
            },
            {
                id: "project",
                label: "项目",
                text: "项目",
                "data":"",
                "codename":"Project",
                value: "project",
                
                disabled: false,
            },
            {
                id: "task",
                label: "任务",
                text: "任务",
                "data":"",
                "codename":"Task",
                value: "task",
                
                disabled: false,
            },
            {
                id: "build",
                label: "版本",
                text: "版本",
                "data":"",
                "codename":"Build",
                value: "build",
                
                disabled: false,
            },
            {
                id: "bug",
                label: "Bug",
                text: "Bug",
                "data":"",
                "codename":"Bug",
                value: "bug",
                
                disabled: false,
            },
            {
                id: "case",
                label: "用例",
                text: "用例",
                "data":"",
                "codename":"Case",
                value: "case",
                
                disabled: false,
            },
            {
                id: "caseresult",
                label: "用例结果",
                text: "用例结果",
                "data":"",
                "codename":"Caseresult",
                value: "caseresult",
                
                disabled: false,
            },
            {
                id: "stepresult",
                label: "用例步骤",
                text: "用例步骤",
                "data":"",
                "codename":"Stepresult",
                value: "stepresult",
                
                disabled: false,
            },
            {
                id: "testtask",
                label: "测试单",
                text: "测试单",
                "data":"",
                "codename":"Testtask",
                value: "testtask",
                
                disabled: false,
            },
            {
                id: "user",
                label: "用户",
                text: "用户",
                "data":"",
                "codename":"User",
                value: "user",
                
                disabled: false,
            },
            {
                id: "doc",
                label: "文档",
                text: "文档",
                "data":"",
                "codename":"Doc",
                value: "doc",
                
                disabled: false,
            },
            {
                id: "doclib",
                label: "文档库",
                text: "文档库",
                "data":"",
                "codename":"Doclib",
                value: "doclib",
                
                disabled: false,
            },
            {
                id: "todo",
                label: "待办",
                text: "待办",
                "data":"",
                "codename":"Todo",
                value: "todo",
                
                disabled: false,
            },
            {
                id: "branch",
                label: "分支",
                text: "分支",
                "data":"",
                "codename":"Branch",
                value: "branch",
                
                disabled: false,
            },
            {
                id: "module",
                label: "模块",
                text: "模块",
                "data":"",
                "codename":"Module",
                value: "module",
                
                disabled: false,
            },
            {
                id: "testsuite",
                label: "套件",
                text: "套件",
                "data":"",
                "codename":"Testsuite",
                value: "testsuite",
                
                disabled: false,
            },
            {
                id: "caselib",
                label: "用例库",
                text: "用例库",
                "data":"",
                "codename":"Caselib",
                value: "caselib",
                
                disabled: false,
            },
            {
                id: "testreport",
                label: "报告",
                text: "报告",
                "data":"",
                "codename":"Testreport",
                value: "testreport",
                
                disabled: false,
            },
            {
                id: "entry",
                label: "应用",
                text: "应用",
                "data":"",
                "codename":"Entry",
                value: "entry",
                
                disabled: false,
            },
            {
                id: "webhook",
                label: "Webhook",
                text: "Webhook",
                "data":"",
                "codename":"Webhook",
                value: "webhook",
                
                disabled: false,
            },
            {
                id: "daily",
                label: "日报",
                text: "日报",
                "data":"",
                "codename":"Daily",
                value: "daily",
                
                disabled: false,
            },
            {
                id: "weekly",
                label: "周报",
                text: "周报",
                "data":"",
                "codename":"Weekly",
                value: "weekly",
                
                disabled: false,
            },
            {
                id: "monthly",
                label: "月报",
                text: "月报",
                "data":"",
                "codename":"Monthly",
                value: "monthly",
                
                disabled: false,
            },
            {
                id: "reportly",
                label: "汇报",
                text: "汇报",
                "data":"",
                "codename":"Reportly",
                value: "reportly",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "CurProductPlan",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"ProductPlan",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        "srfkey": "UserRealNameProductTeam",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"SysEmployee",
        "appdedataset":"FetchStoryProductTeamPK",
        "items": []
    },
    {
        srfkey: "Module__type",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "line",
                label: "产品线",
                text: "产品线",
                "data":"",
                "codename":"Line",
                value: "line",
                
                disabled: false,
            },
            {
                id: "story",
                label: "需求",
                text: "需求",
                "data":"",
                "codename":"Story",
                value: "story",
                
                disabled: false,
            },
            {
                id: "task",
                label: "任务",
                text: "任务",
                "data":"",
                "codename":"Task",
                value: "task",
                
                disabled: false,
            },
            {
                id: "doc",
                label: "文档目录",
                text: "文档目录",
                "data":"",
                "codename":"Doc",
                value: "doc",
                
                disabled: false,
            },
            {
                id: "case",
                label: "测试用例",
                text: "测试用例",
                "data":"",
                "codename":"Case",
                value: "case",
                
                disabled: false,
            },
            {
                id: "bug",
                label: "Bug",
                text: "Bug",
                "data":"",
                "codename":"Bug",
                value: "bug",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Task__status",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "wait",
                label: "未开始",
                text: "未开始",
                "data":"",
                "codename":"Wait",
                "color": "rgba(131, 138, 157, 1)",
                value: "wait",
                
                disabled: false,
            },
            {
                id: "doing",
                label: "进行中",
                text: "进行中",
                "data":"",
                "codename":"Doing",
                "color": "rgba(255, 93, 93, 1)",
                value: "doing",
                
                disabled: false,
            },
            {
                id: "done",
                label: "已完成",
                text: "已完成",
                "data":"",
                "codename":"Done",
                "color": "rgba(67, 160, 71, 1)",
                value: "done",
                
                disabled: false,
            },
            {
                id: "pause",
                label: "已暂停",
                text: "已暂停",
                "data":"",
                "codename":"Pause",
                "color": "rgba(255, 152, 0, 1)",
                value: "pause",
                
                disabled: false,
            },
            {
                id: "cancel",
                label: "已取消",
                text: "已取消",
                "data":"",
                "codename":"Cancel",
                "color": "rgba(131, 138, 157, 1)",
                value: "cancel",
                
                disabled: false,
            },
            {
                id: "closed",
                label: "已关闭",
                text: "已关闭",
                "data":"",
                "codename":"Closed",
                "color": "rgba(131, 138, 157, 1)",
                value: "closed",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "Backendservicesystem",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"PSSysSFPub",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        srfkey: "Doclib__acl",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "default",
                label: "默认",
                text: "默认",
                "data":"",
                "codename":"Default",
                value: "default",
                
                disabled: false,
            },
            {
                id: "custom",
                label: "自定义",
                text: "自定义",
                "data":"",
                "codename":"Custom",
                value: "custom",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "YesNo2",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "是",
                text: "是",
                "data":"",
                "codename":"Item_1",
                value: 1,
                
                disabled: false,
            },
            {
                id: "0",
                label: "否",
                text: "否",
                "data":"",
                "codename":"Item_0",
                value: 0,
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "MyPlanTask",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Task",
        "appdedataset":"FetchMyTomorrowPlanTask",
        "items": []
    },
    {
        "srfkey": "ProjectCodeList",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Project",
        "appdedataset":"FetchBugProject",
        "items": []
    },
    {
        "srfkey": "UserRealNameTaskTeam",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"SysEmployee",
        "appdedataset":"FetchTaskTeam",
        "items": []
    },
    {
        srfkey: "CodeList46",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "2",
                label: "星期一",
                text: "星期一",
                "data":"",
                "codename":"Item_2",
                value: "2",
                
                disabled: false,
            },
            {
                id: "3",
                label: "星期二",
                text: "星期二",
                "data":"",
                "codename":"Item_3",
                value: "3",
                
                disabled: false,
            },
            {
                id: "4",
                label: "星期三",
                text: "星期三",
                "data":"",
                "codename":"Item_4",
                value: "4",
                
                disabled: false,
            },
            {
                id: "5",
                label: "星期四",
                text: "星期四",
                "data":"",
                "codename":"Item_5",
                value: "5",
                
                disabled: false,
            },
            {
                id: "6",
                label: "星期五",
                text: "星期五",
                "data":"",
                "codename":"Item_6",
                value: "6",
                
                disabled: false,
            },
            {
                id: "7",
                label: "星期六",
                text: "星期六",
                "data":"",
                "codename":"Item_7",
                value: "7",
                
                disabled: false,
            },
            {
                id: "1",
                label: "星期日",
                text: "星期日",
                "data":"",
                "codename":"Item_1",
                value: "1",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "TaskStatusCK",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "wait",
                label: "未开始",
                text: "未开始",
                "data":"",
                "codename":"Wait",
                "color": "rgba(131, 138, 157, 1)",
                value: "wait",
                
                disabled: false,
            },
            {
                id: "doing",
                label: "进行中",
                text: "进行中",
                "data":"",
                "codename":"Doing",
                "color": "rgba(255, 93, 93, 1)",
                value: "doing",
                
                disabled: false,
            },
            {
                id: "done",
                label: "已完成",
                text: "已完成",
                "data":"",
                "codename":"Done",
                "color": "rgba(67, 160, 71, 1)",
                value: "done",
                
                disabled: false,
            },
            {
                id: "pause",
                label: "已暂停",
                text: "已暂停",
                "data":"",
                "codename":"Pause",
                "color": "rgba(255, 152, 0, 1)",
                value: "pause",
                
                disabled: false,
            },
            {
                id: "cancel",
                label: "已取消",
                text: "已取消",
                "data":"",
                "codename":"Cancel",
                "color": "rgba(131, 138, 157, 1)",
                value: "cancel",
                
                disabled: false,
            },
            {
                id: "closed",
                label: "已关闭",
                text: "已关闭",
                "data":"",
                "codename":"Closed",
                "color": "rgba(131, 138, 157, 1)",
                value: "closed",
                
                disabled: false,
            },
            {
                id: "storychange",
                label: "需求变更",
                text: "需求变更",
                "data":"",
                "codename":"Storychange",
                "color": "rgba(245, 8, 8, 1)",
                value: "storychange",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Bug__color",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "#3da7f5",
                label: "#3da7f5",
                text: "#3da7f5",
                "data":"",
                "codename":"Item_1",
                "color": "rgba(61, 167, 245, 1)",
                value: "#3da7f5",
                
                disabled: false,
            },
            {
                id: "#75c941",
                label: "#75c941",
                text: "#75c941",
                "data":"",
                "codename":"Item_2",
                "color": "rgba(117, 201, 65, 1)",
                value: "#75c941",
                
                disabled: false,
            },
            {
                id: "#2dbdb2",
                label: "#2dbdb2",
                text: "#2dbdb2",
                "data":"",
                "codename":"Item_3",
                "color": "rgba(45, 189, 178, 1)",
                value: "#2dbdb2",
                
                disabled: false,
            },
            {
                id: "#797ec9",
                label: "#797ec9",
                text: "#797ec9",
                "data":"",
                "codename":"Item_4",
                "color": "rgba(121, 126, 201, 1)",
                value: "#797ec9",
                
                disabled: false,
            },
            {
                id: "#ffaf38",
                label: "#ffaf38",
                text: "#ffaf38",
                "data":"",
                "codename":"Item_5",
                "color": "rgba(255, 175, 56, 1)",
                value: "#ffaf38",
                
                disabled: false,
            },
            {
                id: "#ff4e3e",
                label: "#ff4e3e",
                text: "#ff4e3e",
                "data":"",
                "codename":"Item_6",
                "color": "rgba(255, 78, 62, 1)",
                value: "#ff4e3e",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Product__status",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "normal",
                label: "正常",
                text: "正常",
                "data":"",
                "codename":"Normal",
                "color": "rgba(13, 255, 0, 1)",
                value: "normal",
                
                disabled: false,
            },
            {
                id: "closed",
                label: "结束",
                text: "结束",
                "data":"",
                "codename":"Closed",
                value: "closed",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "CurDocVersion",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"DocContent",
        "appdedataset":"FetchCurVersion",
        "items": []
    },
    {
        "srfkey": "PlanTemplet",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"IbzPlanTemplet",
        "appdedataset":"FetchCurUserTemplet",
        "items": []
    },
    {
        srfkey: "ConfigManagementstatus",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "product_project",
                label: "产品 - 项目",
                text: "产品 - 项目",
                "data":"",
                "codename":"Product_project",
                value: "product_project",
                
                disabled: false,
            },
            {
                id: "product_iteration",
                label: "产品 - 迭代",
                text: "产品 - 迭代",
                "data":"",
                "codename":"Product_iteration",
                value: "product_iteration",
                
                disabled: false,
            },
            {
                id: "project_iteration",
                label: "项目 - 迭代",
                text: "项目 - 迭代",
                "data":"",
                "codename":"Project_iteration",
                value: "project_iteration",
                
                disabled: false,
            },
            {
                id: "product_sprint",
                label: "产品 - 冲刺",
                text: "产品 - 冲刺",
                "data":"",
                "codename":"Product_sprint",
                value: "product_sprint",
                
                disabled: false,
            },
            {
                id: "project_sprint",
                label: "项目 - 冲刺",
                text: "项目 - 冲刺",
                "data":"",
                "codename":"Project_sprint",
                value: "project_sprint",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "ProductTeam",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Product",
        "appdedataset":"FetchProductTeam",
        "items": []
    },
    {
        srfkey: "CycleType",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "day",
                label: "天",
                text: "天",
                "data":"",
                "codename":"Day",
                value: "day",
                
                disabled: false,
            },
            {
                id: "week",
                label: "周",
                text: "周",
                "data":"",
                "codename":"Week",
                value: "week",
                
                disabled: false,
            },
            {
                id: "month",
                label: "月度",
                text: "月度",
                "data":"",
                "codename":"Month",
                value: "month",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "CurStory",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"StorySpec",
        "appdedataset":"FetchVersion",
        "items": []
    },
    {
        "srfkey": "ProductPlan",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"ProductPlan",
        "appdedataset":"FetchCurProductPlan",
        "items": []
    },
    {
        srfkey: "StoryStageKane",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "projected",
                label: "已立项",
                text: "已立项",
                "data":"",
                "codename":"Projected",
                "color": "rgba(139, 173, 237, 1)",
                value: "projected",
                
                disabled: false,
            },
            {
                id: "developing",
                label: "研发中",
                text: "研发中",
                "data":"",
                "codename":"Developing",
                "color": "rgba(63, 77, 238, 1)",
                value: "developing",
                
                disabled: false,
            },
            {
                id: "developed",
                label: "研发完毕",
                text: "研发完毕",
                "data":"",
                "codename":"Developed",
                "color": "rgba(73, 227, 101, 1)",
                value: "developed",
                
                disabled: false,
            },
            {
                id: "testing",
                label: "测试中",
                text: "测试中",
                "data":"",
                "codename":"Testing",
                "color": "rgba(224, 198, 54, 1)",
                value: "testing",
                
                disabled: false,
            },
            {
                id: "tested",
                label: "测试完毕",
                text: "测试完毕",
                "data":"",
                "codename":"Tested",
                "color": "rgba(234, 233, 237, 1)",
                value: "tested",
                
                disabled: false,
            },
            {
                id: "verified",
                label: "已验收",
                text: "已验收",
                "data":"",
                "codename":"Verified",
                "color": "rgba(109, 108, 108, 1)",
                value: "verified",
                
                disabled: false,
            },
            {
                id: "released",
                label: "已发布",
                text: "已发布",
                "data":"",
                "codename":"Released",
                "color": "rgba(11, 11, 11, 1)",
                value: "released",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "ProjectTeam",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Project",
        "appdedataset":"FetchProjectTeam",
        "items": []
    },
    {
        srfkey: "Task__type",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "design",
                label: "设计",
                text: "设计",
                "data":"",
                "codename":"Design",
                value: "design",
                
                disabled: false,
            },
            {
                id: "devel",
                label: "开发",
                text: "开发",
                "data":"",
                "codename":"Devel",
                value: "devel",
                
                disabled: false,
            },
            {
                id: "test",
                label: "测试",
                text: "测试",
                "data":"",
                "codename":"Test",
                value: "test",
                
                disabled: false,
            },
            {
                id: "study",
                label: "研究",
                text: "研究",
                "data":"",
                "codename":"Study",
                value: "study",
                
                disabled: false,
            },
            {
                id: "discuss",
                label: "讨论",
                text: "讨论",
                "data":"",
                "codename":"Discuss",
                value: "discuss",
                
                disabled: false,
            },
            {
                id: "ui",
                label: "界面",
                text: "界面",
                "data":"",
                "codename":"Ui",
                value: "ui",
                
                disabled: false,
            },
            {
                id: "affair",
                label: "事务",
                text: "事务",
                "data":"",
                "codename":"Affair",
                value: "affair",
                
                disabled: false,
            },
            {
                id: "serve",
                label: "服务",
                text: "服务",
                "data":"",
                "codename":"Serve",
                value: "serve",
                
                disabled: false,
            },
            {
                id: "misc",
                label: "其他",
                text: "其他",
                "data":"",
                "codename":"Misc",
                value: "misc",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "AllStory",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Story",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        "srfkey": "CurCaseVersion",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"CaseStep",
        "appdedataset":"FetchVersions",
        "items": []
    },
    {
        srfkey: "Project__acl",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "open",
                label: "默认设置(有项目视图权限，即可访问)",
                text: "默认设置(有项目视图权限，即可访问)",
                "data":"",
                "codename":"Open",
                value: "open",
                
                disabled: false,
            },
            {
                id: "private",
                label: "私有项目(只有项目团队成员才能访问)",
                text: "私有项目(只有项目团队成员才能访问)",
                "data":"",
                "codename":"Private",
                value: "private",
                
                disabled: false,
            },
            {
                id: "custom",
                label: "自定义白名单(团队成员和白名单的成员可以访问)",
                text: "自定义白名单(团队成员和白名单的成员可以访问)",
                "data":"",
                "codename":"Custom",
                value: "custom",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Cycle_enable",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "周期",
                text: "周期",
                "data":"",
                "codename":"Item_1",
                value: "1",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Bug__type",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "codeerror",
                label: "代码错误",
                text: "代码错误",
                "data":"",
                "codename":"Codeerror",
                value: "codeerror",
                
                disabled: false,
            },
            {
                id: "config",
                label: "配置相关",
                text: "配置相关",
                "data":"",
                "codename":"Config",
                value: "config",
                
                disabled: false,
            },
            {
                id: "install",
                label: "安装部署",
                text: "安装部署",
                "data":"",
                "codename":"Install",
                value: "install",
                
                disabled: false,
            },
            {
                id: "security",
                label: "安全相关",
                text: "安全相关",
                "data":"",
                "codename":"Security",
                value: "security",
                
                disabled: false,
            },
            {
                id: "performance",
                label: "性能问题",
                text: "性能问题",
                "data":"",
                "codename":"Performance",
                value: "performance",
                
                disabled: false,
            },
            {
                id: "standard",
                label: "标准规范",
                text: "标准规范",
                "data":"",
                "codename":"Standard",
                value: "standard",
                
                disabled: false,
            },
            {
                id: "automation",
                label: "测试脚本",
                text: "测试脚本",
                "data":"",
                "codename":"Automation",
                value: "automation",
                
                disabled: false,
            },
            {
                id: "designdefect",
                label: "设计缺陷",
                text: "设计缺陷",
                "data":"",
                "codename":"Designdefect",
                value: "designdefect",
                
                disabled: false,
            },
            {
                id: "others",
                label: "其他",
                text: "其他",
                "data":"",
                "codename":"Others",
                value: "others",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Team__type",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "project",
                label: "项目团队",
                text: "项目团队",
                "data":"",
                "codename":"Project",
                value: "project",
                
                disabled: false,
            },
            {
                id: "task",
                label: "任务团队",
                text: "任务团队",
                "data":"",
                "codename":"Task",
                value: "task",
                
                disabled: false,
            },
            {
                id: "product",
                label: "产品团队",
                text: "产品团队",
                "data":"",
                "codename":"Product",
                value: "product",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "BugModule",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Module",
        "appdedataset":"FetchBugModuleCodeList",
        "items": []
    },
    {
        srfkey: "Burninterval",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "间隔1天",
                text: "间隔1天",
                "data":"",
                "codename":"Item_1",
                value: "1",
                
                disabled: false,
            },
            {
                id: "2",
                label: "间隔2天",
                text: "间隔2天",
                "data":"",
                "codename":"Item_2",
                value: "2",
                
                disabled: false,
            },
            {
                id: "3",
                label: "间隔3天",
                text: "间隔3天",
                "data":"",
                "codename":"Item_3",
                value: "3",
                
                disabled: false,
            },
            {
                id: "4",
                label: "间隔4天",
                text: "间隔4天",
                "data":"",
                "codename":"Item_4",
                value: "4",
                
                disabled: false,
            },
            {
                id: "5",
                label: "间隔5天",
                text: "间隔5天",
                "data":"",
                "codename":"Item_5",
                value: "5",
                
                disabled: false,
            },
            {
                id: "6",
                label: "间隔6天",
                text: "间隔6天",
                "data":"",
                "codename":"Item_6",
                value: "6",
                
                disabled: false,
            },
            {
                id: "7",
                label: "间隔7天",
                text: "间隔7天",
                "data":"",
                "codename":"Item_7",
                value: "7",
                
                disabled: false,
            },
            {
                id: "8",
                label: "间隔8天",
                text: "间隔8天",
                "data":"",
                "codename":"Item_8",
                value: "8",
                
                disabled: false,
            },
            {
                id: "9",
                label: "间隔9天",
                text: "间隔9天",
                "data":"",
                "codename":"Item_9",
                value: "9",
                
                disabled: false,
            },
            {
                id: "10",
                label: "间隔10天",
                text: "间隔10天",
                "data":"",
                "codename":"Item_10",
                value: "10",
                
                disabled: false,
            },
            {
                id: "11",
                label: "间隔11天",
                text: "间隔11天",
                "data":"",
                "codename":"Item_11",
                value: "11",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Action__type",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "created",
                label: "创建",
                text: "创建",
                "data":"",
                "codename":"Created",
                value: "created",
                
                disabled: false,
            },
            {
                id: "opened",
                label: "创建",
                text: "创建",
                "data":"",
                "codename":"Opened",
                value: "opened",
                
                disabled: false,
            },
            {
                id: "changed",
                label: "变更了",
                text: "变更了",
                "data":"",
                "codename":"Changed",
                value: "changed",
                
                disabled: false,
            },
            {
                id: "edited",
                label: "编辑了",
                text: "编辑了",
                "data":"",
                "codename":"Edited",
                value: "edited",
                
                disabled: false,
            },
            {
                id: "assigned",
                label: "指派了",
                text: "指派了",
                "data":"",
                "codename":"Assigned",
                value: "assigned",
                
                disabled: false,
            },
            {
                id: "closed",
                label: "关闭了",
                text: "关闭了",
                "data":"",
                "codename":"Closed",
                value: "closed",
                
                disabled: false,
            },
            {
                id: "deleted",
                label: "删除了",
                text: "删除了",
                "data":"",
                "codename":"Deleted",
                value: "deleted",
                
                disabled: false,
            },
            {
                id: "deletedfile",
                label: "删除附件",
                text: "删除附件",
                "data":"",
                "codename":"Deletedfile",
                value: "deletedfile",
                
                disabled: false,
            },
            {
                id: "editfile",
                label: "编辑附件",
                text: "编辑附件",
                "data":"",
                "codename":"Editfile",
                value: "editfile",
                
                disabled: false,
            },
            {
                id: "erased",
                label: "删除了",
                text: "删除了",
                "data":"",
                "codename":"Erased",
                value: "erased",
                
                disabled: false,
            },
            {
                id: "undeleted",
                label: "还原了",
                text: "还原了",
                "data":"",
                "codename":"Undeleted",
                value: "undeleted",
                
                disabled: false,
            },
            {
                id: "hidden",
                label: "隐藏了",
                text: "隐藏了",
                "data":"",
                "codename":"Hidden",
                value: "hidden",
                
                disabled: false,
            },
            {
                id: "commented",
                label: "评论了",
                text: "评论了",
                "data":"",
                "codename":"Commented",
                value: "commented",
                
                disabled: false,
            },
            {
                id: "activated",
                label: "激活了",
                text: "激活了",
                "data":"",
                "codename":"Activated",
                value: "activated",
                
                disabled: false,
            },
            {
                id: "blocked",
                label: "阻塞了",
                text: "阻塞了",
                "data":"",
                "codename":"Blocked",
                value: "blocked",
                
                disabled: false,
            },
            {
                id: "resolved",
                label: "解决了",
                text: "解决了",
                "data":"",
                "codename":"Resolved",
                value: "resolved",
                
                disabled: false,
            },
            {
                id: "reviewed",
                label: "评审了",
                text: "评审了",
                "data":"",
                "codename":"Reviewed",
                value: "reviewed",
                
                disabled: false,
            },
            {
                id: "moved",
                label: "移动了",
                text: "移动了",
                "data":"",
                "codename":"Moved",
                value: "moved",
                
                disabled: false,
            },
            {
                id: "confirmed",
                label: "确认了需求",
                text: "确认了需求",
                "data":"",
                "codename":"Confirmed",
                value: "confirmed",
                
                disabled: false,
            },
            {
                id: "bugconfirmed",
                label: "确认了",
                text: "确认了",
                "data":"",
                "codename":"Bugconfirmed",
                value: "bugconfirmed",
                
                disabled: false,
            },
            {
                id: "tostory",
                label: "转需求",
                text: "转需求",
                "data":"",
                "codename":"Tostory",
                value: "tostory",
                
                disabled: false,
            },
            {
                id: "frombug",
                label: "转需求",
                text: "转需求",
                "data":"",
                "codename":"Frombug",
                value: "frombug",
                
                disabled: false,
            },
            {
                id: "fromlib",
                label: "从用例库导入",
                text: "从用例库导入",
                "data":"",
                "codename":"Fromlib",
                value: "fromlib",
                
                disabled: false,
            },
            {
                id: "totask",
                label: "转任务",
                text: "转任务",
                "data":"",
                "codename":"Totask",
                value: "totask",
                
                disabled: false,
            },
            {
                id: "svncommited",
                label: "提交代码",
                text: "提交代码",
                "data":"",
                "codename":"Svncommited",
                value: "svncommited",
                
                disabled: false,
            },
            {
                id: "gitcommited",
                label: "提交代码",
                text: "提交代码",
                "data":"",
                "codename":"Gitcommited",
                value: "gitcommited",
                
                disabled: false,
            },
            {
                id: "linked2plan",
                label: "关联计划",
                text: "关联计划",
                "data":"",
                "codename":"Linked2plan",
                value: "linked2plan",
                
                disabled: false,
            },
            {
                id: "unlinkedfromplan",
                label: "移除计划",
                text: "移除计划",
                "data":"",
                "codename":"Unlinkedfromplan",
                value: "unlinkedfromplan",
                
                disabled: false,
            },
            {
                id: "changestatus",
                label: "修改状态",
                text: "修改状态",
                "data":"",
                "codename":"Changestatus",
                value: "changestatus",
                
                disabled: false,
            },
            {
                id: "marked",
                label: "编辑了",
                text: "编辑了",
                "data":"",
                "codename":"Marked",
                value: "marked",
                
                disabled: false,
            },
            {
                id: "linked2project",
                label: "关联项目",
                text: "关联项目",
                "data":"",
                "codename":"Linked2project",
                value: "linked2project",
                
                disabled: false,
            },
            {
                id: "unlinkedfromproject",
                label: "移除项目",
                text: "移除项目",
                "data":"",
                "codename":"Unlinkedfromproject",
                value: "unlinkedfromproject",
                
                disabled: false,
            },
            {
                id: "unlinkedfrombuild",
                label: "移除版本",
                text: "移除版本",
                "data":"",
                "codename":"Unlinkedfrombuild",
                value: "unlinkedfrombuild",
                
                disabled: false,
            },
            {
                id: "linked2release",
                label: "关联发布",
                text: "关联发布",
                "data":"",
                "codename":"Linked2release",
                value: "linked2release",
                
                disabled: false,
            },
            {
                id: "unlinkedfromrelease",
                label: "移除发布",
                text: "移除发布",
                "data":"",
                "codename":"Unlinkedfromrelease",
                value: "unlinkedfromrelease",
                
                disabled: false,
            },
            {
                id: "linkrelatedbug",
                label: "关联了相关Bug",
                text: "关联了相关Bug",
                "data":"",
                "codename":"Linkrelatedbug",
                value: "linkrelatedbug",
                
                disabled: false,
            },
            {
                id: "unlinkrelatedbug",
                label: "移除了相关Bug",
                text: "移除了相关Bug",
                "data":"",
                "codename":"Unlinkrelatedbug",
                value: "unlinkrelatedbug",
                
                disabled: false,
            },
            {
                id: "linkrelatedcase",
                label: "关联了相关用例",
                text: "关联了相关用例",
                "data":"",
                "codename":"Linkrelatedcase",
                value: "linkrelatedcase",
                
                disabled: false,
            },
            {
                id: "unlinkrelatedcase",
                label: "移除了相关用例",
                text: "移除了相关用例",
                "data":"",
                "codename":"Unlinkrelatedcase",
                value: "unlinkrelatedcase",
                
                disabled: false,
            },
            {
                id: "linkrelatedstory",
                label: "关联了相关需求",
                text: "关联了相关需求",
                "data":"",
                "codename":"Linkrelatedstory",
                value: "linkrelatedstory",
                
                disabled: false,
            },
            {
                id: "unlinkrelatedstory",
                label: "移除了相关需求",
                text: "移除了相关需求",
                "data":"",
                "codename":"Unlinkrelatedstory",
                value: "unlinkrelatedstory",
                
                disabled: false,
            },
            {
                id: "subdividestory",
                label: "细分了需求",
                text: "细分了需求",
                "data":"",
                "codename":"Subdividestory",
                value: "subdividestory",
                
                disabled: false,
            },
            {
                id: "unlinkchildstory",
                label: "移除了细分需求",
                text: "移除了细分需求",
                "data":"",
                "codename":"Unlinkchildstory",
                value: "unlinkchildstory",
                
                disabled: false,
            },
            {
                id: "started",
                label: "开始了",
                text: "开始了",
                "data":"",
                "codename":"Started",
                value: "started",
                
                disabled: false,
            },
            {
                id: "restarted",
                label: "继续了",
                text: "继续了",
                "data":"",
                "codename":"Restarted",
                value: "restarted",
                
                disabled: false,
            },
            {
                id: "recordestimate",
                label: "记录了工时",
                text: "记录了工时",
                "data":"",
                "codename":"Recordestimate",
                value: "recordestimate",
                
                disabled: false,
            },
            {
                id: "editestimate",
                label: "编辑了工时",
                text: "编辑了工时",
                "data":"",
                "codename":"Editestimate",
                value: "editestimate",
                
                disabled: false,
            },
            {
                id: "canceled",
                label: "取消了",
                text: "取消了",
                "data":"",
                "codename":"Canceled",
                value: "canceled",
                
                disabled: false,
            },
            {
                id: "finished",
                label: "完成了",
                text: "完成了",
                "data":"",
                "codename":"Finished",
                value: "finished",
                
                disabled: false,
            },
            {
                id: "paused",
                label: "暂停了",
                text: "暂停了",
                "data":"",
                "codename":"Paused",
                value: "paused",
                
                disabled: false,
            },
            {
                id: "verified",
                label: "验收了",
                text: "验收了",
                "data":"",
                "codename":"Verified",
                value: "verified",
                
                disabled: false,
            },
            {
                id: "delayed",
                label: "延期",
                text: "延期",
                "data":"",
                "codename":"Delayed",
                value: "delayed",
                
                disabled: false,
            },
            {
                id: "suspended",
                label: "挂起",
                text: "挂起",
                "data":"",
                "codename":"Suspended",
                value: "suspended",
                
                disabled: false,
            },
            {
                id: "login",
                label: "登录系统",
                text: "登录系统",
                "data":"",
                "codename":"Login",
                value: "login",
                
                disabled: false,
            },
            {
                id: "logout",
                label: "退出登录",
                text: "退出登录",
                "data":"",
                "codename":"Logout",
                value: "logout",
                
                disabled: false,
            },
            {
                id: "deleteestimate",
                label: "删除了工时",
                text: "删除了工时",
                "data":"",
                "codename":"Deleteestimate",
                value: "deleteestimate",
                
                disabled: false,
            },
            {
                id: "linked2build",
                label: "关联了",
                text: "关联了",
                "data":"",
                "codename":"Linked2build",
                value: "linked2build",
                
                disabled: false,
            },
            {
                id: "linked2bug",
                label: "关联了",
                text: "关联了",
                "data":"",
                "codename":"Linked2bug",
                value: "linked2bug",
                
                disabled: false,
            },
            {
                id: "linkchildtask",
                label: "关联子任务",
                text: "关联子任务",
                "data":"",
                "codename":"Linkchildtask",
                value: "linkchildtask",
                
                disabled: false,
            },
            {
                id: "unlinkchildrentask",
                label: "取消关联子任务",
                text: "取消关联子任务",
                "data":"",
                "codename":"Unlinkchildrentask",
                value: "unlinkchildrentask",
                
                disabled: false,
            },
            {
                id: "linkparenttask",
                label: "关联到父任务",
                text: "关联到父任务",
                "data":"",
                "codename":"Linkparenttask",
                value: "linkparenttask",
                
                disabled: false,
            },
            {
                id: "unlinkparenttask",
                label: "从父任务取消关联",
                text: "从父任务取消关联",
                "data":"",
                "codename":"Unlinkparenttask",
                value: "unlinkparenttask",
                
                disabled: false,
            },
            {
                id: "batchcreate",
                label: "批量创建任务",
                text: "批量创建任务",
                "data":"",
                "codename":"Batchcreate",
                value: "batchcreate",
                
                disabled: false,
            },
            {
                id: "createchildren",
                label: "创建子任务",
                text: "创建子任务",
                "data":"",
                "codename":"Createchildren",
                value: "createchildren",
                
                disabled: false,
            },
            {
                id: "managed",
                label: "维护",
                text: "维护",
                "data":"",
                "codename":"Managed",
                value: "managed",
                
                disabled: false,
            },
            {
                id: "deletechildrentask",
                label: "删除子任务",
                text: "删除子任务",
                "data":"",
                "codename":"Deletechildrentask",
                value: "deletechildrentask",
                
                disabled: false,
            },
            {
                id: "createchildrenstory",
                label: "创建子需求",
                text: "创建子需求",
                "data":"",
                "codename":"Createchildrenstory",
                value: "createchildrenstory",
                
                disabled: false,
            },
            {
                id: "linkchildstory",
                label: "关联子需求",
                text: "关联子需求",
                "data":"",
                "codename":"Linkchildstory",
                value: "linkchildstory",
                
                disabled: false,
            },
            {
                id: "unlinkchildrenstory",
                label: "取消关联子需求",
                text: "取消关联子需求",
                "data":"",
                "codename":"Unlinkchildrenstory",
                value: "unlinkchildrenstory",
                
                disabled: false,
            },
            {
                id: "linkparentstory",
                label: "关联到父需求",
                text: "关联到父需求",
                "data":"",
                "codename":"Linkparentstory",
                value: "linkparentstory",
                
                disabled: false,
            },
            {
                id: "unlinkparentstory",
                label: "从父需求取消关联",
                text: "从父需求取消关联",
                "data":"",
                "codename":"Unlinkparentstory",
                value: "unlinkparentstory",
                
                disabled: false,
            },
            {
                id: "deletechildrenstory",
                label: "删除子需求",
                text: "删除子需求",
                "data":"",
                "codename":"Deletechildrenstory",
                value: "deletechildrenstory",
                
                disabled: false,
            },
            {
                id: "submit",
                label: "提交",
                text: "提交",
                "data":"",
                "codename":"Submit",
                value: "submit",
                
                disabled: false,
            },
            {
                id: "read",
                label: "已读了",
                text: "已读了",
                "data":"",
                "codename":"Read",
                value: "read",
                
                disabled: false,
            },
            {
                id: "remind",
                label: "提醒",
                text: "提醒",
                "data":"",
                "codename":"Remind",
                value: "remind",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "User__gender",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "f",
                label: "女",
                text: "女",
                "data":"",
                "codename":"F",
                value: "f",
                
                disabled: false,
            },
            {
                id: "m",
                label: "男",
                text: "男",
                "data":"",
                "codename":"M",
                value: "m",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "RealDept",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"SysDepartment",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        srfkey: "BeginendDropList",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "600",
                label: "06:00",
                text: "06:00",
                "data":"",
                "codename":"Item_600",
                value: 600,
                
                disabled: false,
            },
            {
                id: "610",
                label: "06:10",
                text: "06:10",
                "data":"",
                "codename":"Item_610",
                value: 610,
                
                disabled: false,
            },
            {
                id: "620",
                label: "06:20",
                text: "06:20",
                "data":"",
                "codename":"Item_620",
                value: 620,
                
                disabled: false,
            },
            {
                id: "630",
                label: "06:30",
                text: "06:30",
                "data":"",
                "codename":"Item_630",
                value: 630,
                
                disabled: false,
            },
            {
                id: "640",
                label: "06:40",
                text: "06:40",
                "data":"",
                "codename":"Item_640",
                value: 640,
                
                disabled: false,
            },
            {
                id: "650",
                label: "06:50",
                text: "06:50",
                "data":"",
                "codename":"Item_650",
                value: 650,
                
                disabled: false,
            },
            {
                id: "700",
                label: "07:00",
                text: "07:00",
                "data":"",
                "codename":"Item_700",
                value: 700,
                
                disabled: false,
            },
            {
                id: "710",
                label: "07:10",
                text: "07:10",
                "data":"",
                "codename":"Item_710",
                value: 710,
                
                disabled: false,
            },
            {
                id: "720",
                label: "07:20",
                text: "07:20",
                "data":"",
                "codename":"Item_720",
                value: 720,
                
                disabled: false,
            },
            {
                id: "730",
                label: "07:30",
                text: "07:30",
                "data":"",
                "codename":"Item_730",
                value: 730,
                
                disabled: false,
            },
            {
                id: "740",
                label: "07:40",
                text: "07:40",
                "data":"",
                "codename":"Item_740",
                value: 740,
                
                disabled: false,
            },
            {
                id: "750",
                label: "07:50",
                text: "07:50",
                "data":"",
                "codename":"Item_750",
                value: 750,
                
                disabled: false,
            },
            {
                id: "800",
                label: "08:00",
                text: "08:00",
                "data":"",
                "codename":"Item_800",
                value: 800,
                
                disabled: false,
            },
            {
                id: "810",
                label: "08:10",
                text: "08:10",
                "data":"",
                "codename":"Item_810",
                value: 810,
                
                disabled: false,
            },
            {
                id: "820",
                label: "08:20",
                text: "08:20",
                "data":"",
                "codename":"Item_820",
                value: 820,
                
                disabled: false,
            },
            {
                id: "830",
                label: "08:30",
                text: "08:30",
                "data":"",
                "codename":"Item_830",
                value: 830,
                
                disabled: false,
            },
            {
                id: "840",
                label: "08:40",
                text: "08:40",
                "data":"",
                "codename":"Item_840",
                value: 840,
                
                disabled: false,
            },
            {
                id: "850",
                label: "08:50",
                text: "08:50",
                "data":"",
                "codename":"Item_850",
                value: 850,
                
                disabled: false,
            },
            {
                id: "900",
                label: "09:00",
                text: "09:00",
                "data":"",
                "codename":"Item_900",
                value: 900,
                
                disabled: false,
            },
            {
                id: "910",
                label: "09:10",
                text: "09:10",
                "data":"",
                "codename":"Item_910",
                value: 910,
                
                disabled: false,
            },
            {
                id: "920",
                label: "09:20",
                text: "09:20",
                "data":"",
                "codename":"Item_920",
                value: 920,
                
                disabled: false,
            },
            {
                id: "930",
                label: "09:30",
                text: "09:30",
                "data":"",
                "codename":"Item_930",
                value: 930,
                
                disabled: false,
            },
            {
                id: "940",
                label: "09:40",
                text: "09:40",
                "data":"",
                "codename":"Item_940",
                value: 940,
                
                disabled: false,
            },
            {
                id: "950",
                label: "09:50",
                text: "09:50",
                "data":"",
                "codename":"Item_950",
                value: 950,
                
                disabled: false,
            },
            {
                id: "1000",
                label: "10:00",
                text: "10:00",
                "data":"",
                "codename":"Item_1000",
                value: 1000,
                
                disabled: false,
            },
            {
                id: "1010",
                label: "10:10",
                text: "10:10",
                "data":"",
                "codename":"Item_1010",
                value: 1010,
                
                disabled: false,
            },
            {
                id: "1020",
                label: "10:20",
                text: "10:20",
                "data":"",
                "codename":"Item_1020",
                value: 1020,
                
                disabled: false,
            },
            {
                id: "1030",
                label: "10:30",
                text: "10:30",
                "data":"",
                "codename":"Item_1030",
                value: 1030,
                
                disabled: false,
            },
            {
                id: "1040",
                label: "10:40",
                text: "10:40",
                "data":"",
                "codename":"Item_1040",
                value: 1040,
                
                disabled: false,
            },
            {
                id: "1050",
                label: "10:50",
                text: "10:50",
                "data":"",
                "codename":"Item_1050",
                value: 1050,
                
                disabled: false,
            },
            {
                id: "1100",
                label: "11:00",
                text: "11:00",
                "data":"",
                "codename":"Item_1100",
                value: 1100,
                
                disabled: false,
            },
            {
                id: "1110",
                label: "11:10",
                text: "11:10",
                "data":"",
                "codename":"Item_1110",
                value: 1110,
                
                disabled: false,
            },
            {
                id: "1120",
                label: "11:20",
                text: "11:20",
                "data":"",
                "codename":"Item_1120",
                value: 1120,
                
                disabled: false,
            },
            {
                id: "1130",
                label: "11:30",
                text: "11:30",
                "data":"",
                "codename":"Item_1130",
                value: 1130,
                
                disabled: false,
            },
            {
                id: "1140",
                label: "11:40",
                text: "11:40",
                "data":"",
                "codename":"Item_1140",
                value: 1140,
                
                disabled: false,
            },
            {
                id: "1150",
                label: "11:50",
                text: "11:50",
                "data":"",
                "codename":"Item_1150",
                value: 1150,
                
                disabled: false,
            },
            {
                id: "1200",
                label: "12:00",
                text: "12:00",
                "data":"",
                "codename":"Item_1200",
                value: 1200,
                
                disabled: false,
            },
            {
                id: "1210",
                label: "12:10",
                text: "12:10",
                "data":"",
                "codename":"Item_1210",
                value: 1210,
                
                disabled: false,
            },
            {
                id: "1220",
                label: "12:20",
                text: "12:20",
                "data":"",
                "codename":"Item_1220",
                value: 1220,
                
                disabled: false,
            },
            {
                id: "1230",
                label: "12:30",
                text: "12:30",
                "data":"",
                "codename":"Item_1230",
                value: 1230,
                
                disabled: false,
            },
            {
                id: "1240",
                label: "12:40",
                text: "12:40",
                "data":"",
                "codename":"Item_1240",
                value: 1240,
                
                disabled: false,
            },
            {
                id: "1250",
                label: "12:50",
                text: "12:50",
                "data":"",
                "codename":"Item_1250",
                value: 1250,
                
                disabled: false,
            },
            {
                id: "1300",
                label: "13:00",
                text: "13:00",
                "data":"",
                "codename":"Item_1300",
                value: 1300,
                
                disabled: false,
            },
            {
                id: "1310",
                label: "13:10",
                text: "13:10",
                "data":"",
                "codename":"Item_1310",
                value: 1310,
                
                disabled: false,
            },
            {
                id: "1320",
                label: "13:20",
                text: "13:20",
                "data":"",
                "codename":"Item_1320",
                value: 1320,
                
                disabled: false,
            },
            {
                id: "1330",
                label: "13:30",
                text: "13:30",
                "data":"",
                "codename":"Item_1330",
                value: 1330,
                
                disabled: false,
            },
            {
                id: "1340",
                label: "13:40",
                text: "13:40",
                "data":"",
                "codename":"Item_1340",
                value: 1340,
                
                disabled: false,
            },
            {
                id: "1350",
                label: "13:50",
                text: "13:50",
                "data":"",
                "codename":"Item_1350",
                value: 1350,
                
                disabled: false,
            },
            {
                id: "1400",
                label: "14:00",
                text: "14:00",
                "data":"",
                "codename":"Item_1400",
                value: 1400,
                
                disabled: false,
            },
            {
                id: "1410",
                label: "14:10",
                text: "14:10",
                "data":"",
                "codename":"Item_1410",
                value: 1410,
                
                disabled: false,
            },
            {
                id: "1420",
                label: "14:20",
                text: "14:20",
                "data":"",
                "codename":"Item_1420",
                value: 1420,
                
                disabled: false,
            },
            {
                id: "1430",
                label: "14:30",
                text: "14:30",
                "data":"",
                "codename":"Item_1430",
                value: 1430,
                
                disabled: false,
            },
            {
                id: "1440",
                label: "14:40",
                text: "14:40",
                "data":"",
                "codename":"Item_1440",
                value: 1440,
                
                disabled: false,
            },
            {
                id: "1450",
                label: "14:50",
                text: "14:50",
                "data":"",
                "codename":"Item_1450",
                value: 1450,
                
                disabled: false,
            },
            {
                id: "1500",
                label: "15:00",
                text: "15:00",
                "data":"",
                "codename":"Item_1500",
                value: 1500,
                
                disabled: false,
            },
            {
                id: "1510",
                label: "15:10",
                text: "15:10",
                "data":"",
                "codename":"Item_1510",
                value: 1510,
                
                disabled: false,
            },
            {
                id: "1520",
                label: "15:20",
                text: "15:20",
                "data":"",
                "codename":"Item_1520",
                value: 1520,
                
                disabled: false,
            },
            {
                id: "1530",
                label: "15:30",
                text: "15:30",
                "data":"",
                "codename":"Item_1530",
                value: 1530,
                
                disabled: false,
            },
            {
                id: "1540",
                label: "15:40",
                text: "15:40",
                "data":"",
                "codename":"Item_1540",
                value: 1540,
                
                disabled: false,
            },
            {
                id: "1550",
                label: "15:50",
                text: "15:50",
                "data":"",
                "codename":"Item_1550",
                value: 1550,
                
                disabled: false,
            },
            {
                id: "1600",
                label: "16:00",
                text: "16:00",
                "data":"",
                "codename":"Item_1600",
                value: 1600,
                
                disabled: false,
            },
            {
                id: "1610",
                label: "16:10",
                text: "16:10",
                "data":"",
                "codename":"Item_1610",
                value: 1610,
                
                disabled: false,
            },
            {
                id: "1620",
                label: "16:20",
                text: "16:20",
                "data":"",
                "codename":"Item_1620",
                value: 1620,
                
                disabled: false,
            },
            {
                id: "1630",
                label: "16:30",
                text: "16:30",
                "data":"",
                "codename":"Item_1630",
                value: 1630,
                
                disabled: false,
            },
            {
                id: "1640",
                label: "16:40",
                text: "16:40",
                "data":"",
                "codename":"Item_1640",
                value: 1640,
                
                disabled: false,
            },
            {
                id: "1650",
                label: "16:50",
                text: "16:50",
                "data":"",
                "codename":"Item_1650",
                value: 1650,
                
                disabled: false,
            },
            {
                id: "1700",
                label: "17:00",
                text: "17:00",
                "data":"",
                "codename":"Item_1700",
                value: 1700,
                
                disabled: false,
            },
            {
                id: "1710",
                label: "17:10",
                text: "17:10",
                "data":"",
                "codename":"Item_1710",
                value: 1710,
                
                disabled: false,
            },
            {
                id: "1720",
                label: "17:20",
                text: "17:20",
                "data":"",
                "codename":"Item_1720",
                value: 1720,
                
                disabled: false,
            },
            {
                id: "1730",
                label: "17:30",
                text: "17:30",
                "data":"",
                "codename":"Item_1730",
                value: 1730,
                
                disabled: false,
            },
            {
                id: "1740",
                label: "17:40",
                text: "17:40",
                "data":"",
                "codename":"Item_1740",
                value: 1740,
                
                disabled: false,
            },
            {
                id: "1750",
                label: "17:50",
                text: "17:50",
                "data":"",
                "codename":"Item_1750",
                value: 1750,
                
                disabled: false,
            },
            {
                id: "1800",
                label: "18:00",
                text: "18:00",
                "data":"",
                "codename":"Item_1800",
                value: 1800,
                
                disabled: false,
            },
            {
                id: "1810",
                label: "18:10",
                text: "18:10",
                "data":"",
                "codename":"Item_1810",
                value: 1810,
                
                disabled: false,
            },
            {
                id: "1820",
                label: "18:20",
                text: "18:20",
                "data":"",
                "codename":"Item_1820",
                value: 1820,
                
                disabled: false,
            },
            {
                id: "1830",
                label: "18:30",
                text: "18:30",
                "data":"",
                "codename":"Item_1830",
                value: 1830,
                
                disabled: false,
            },
            {
                id: "1840",
                label: "18:40",
                text: "18:40",
                "data":"",
                "codename":"Item_1840",
                value: 1840,
                
                disabled: false,
            },
            {
                id: "1850",
                label: "18:50",
                text: "18:50",
                "data":"",
                "codename":"Item_1850",
                value: 1850,
                
                disabled: false,
            },
            {
                id: "1900",
                label: "19:00",
                text: "19:00",
                "data":"",
                "codename":"Item_1900",
                value: 1900,
                
                disabled: false,
            },
            {
                id: "1910",
                label: "19:10",
                text: "19:10",
                "data":"",
                "codename":"Item_1910",
                value: 1910,
                
                disabled: false,
            },
            {
                id: "1920",
                label: "19:20",
                text: "19:20",
                "data":"",
                "codename":"Item_1920",
                value: 1920,
                
                disabled: false,
            },
            {
                id: "1930",
                label: "19:30",
                text: "19:30",
                "data":"",
                "codename":"Item_1930",
                value: 1930,
                
                disabled: false,
            },
            {
                id: "1940",
                label: "19:40",
                text: "19:40",
                "data":"",
                "codename":"Item_1940",
                value: 1940,
                
                disabled: false,
            },
            {
                id: "1950",
                label: "19:50",
                text: "19:50",
                "data":"",
                "codename":"Item_1950",
                value: 1950,
                
                disabled: false,
            },
            {
                id: "2000",
                label: "20:00",
                text: "20:00",
                "data":"",
                "codename":"Item_2000",
                value: 2000,
                
                disabled: false,
            },
            {
                id: "2010",
                label: "20:10",
                text: "20:10",
                "data":"",
                "codename":"Item_2010",
                value: 2010,
                
                disabled: false,
            },
            {
                id: "2020",
                label: "20:20",
                text: "20:20",
                "data":"",
                "codename":"Item_2020",
                value: 2020,
                
                disabled: false,
            },
            {
                id: "2030",
                label: "20:30",
                text: "20:30",
                "data":"",
                "codename":"Item_2030",
                value: 2030,
                
                disabled: false,
            },
            {
                id: "2040",
                label: "20:40",
                text: "20:40",
                "data":"",
                "codename":"Item_2040",
                value: 2040,
                
                disabled: false,
            },
            {
                id: "2050",
                label: "20:50",
                text: "20:50",
                "data":"",
                "codename":"Item_2050",
                value: 2050,
                
                disabled: false,
            },
            {
                id: "2100",
                label: "21:00",
                text: "21:00",
                "data":"",
                "codename":"Item_2100",
                value: 2100,
                
                disabled: false,
            },
            {
                id: "2110",
                label: "21:10",
                text: "21:10",
                "data":"",
                "codename":"Item_2110",
                value: 2110,
                
                disabled: false,
            },
            {
                id: "2120",
                label: "21:20",
                text: "21:20",
                "data":"",
                "codename":"Item_2120",
                value: 2120,
                
                disabled: false,
            },
            {
                id: "2130",
                label: "21:30",
                text: "21:30",
                "data":"",
                "codename":"Item_2130",
                value: 2130,
                
                disabled: false,
            },
            {
                id: "2140",
                label: "21:40",
                text: "21:40",
                "data":"",
                "codename":"Item_2140",
                value: 2140,
                
                disabled: false,
            },
            {
                id: "2150",
                label: "21:50",
                text: "21:50",
                "data":"",
                "codename":"Item_2150",
                value: 2150,
                
                disabled: false,
            },
            {
                id: "2200",
                label: "22:00",
                text: "22:00",
                "data":"",
                "codename":"Item_2200",
                value: 2200,
                
                disabled: false,
            },
            {
                id: "2210",
                label: "22:10",
                text: "22:10",
                "data":"",
                "codename":"Item_2210",
                value: 2210,
                
                disabled: false,
            },
            {
                id: "2220",
                label: "22:20",
                text: "22:20",
                "data":"",
                "codename":"Item_2220",
                value: 2220,
                
                disabled: false,
            },
            {
                id: "2230",
                label: "22:30",
                text: "22:30",
                "data":"",
                "codename":"Item_2230",
                value: 2230,
                
                disabled: false,
            },
            {
                id: "2240",
                label: "22:40",
                text: "22:40",
                "data":"",
                "codename":"Item_2240",
                value: 2240,
                
                disabled: false,
            },
            {
                id: "2250",
                label: "22:50",
                text: "22:50",
                "data":"",
                "codename":"Item_2250",
                value: 2250,
                
                disabled: false,
            },
            {
                id: "2300",
                label: "23:00",
                text: "23:00",
                "data":"",
                "codename":"Item_2300",
                value: 2300,
                
                disabled: false,
            },
            {
                id: "2310",
                label: "23:10",
                text: "23:10",
                "data":"",
                "codename":"Item_2310",
                value: 2310,
                
                disabled: false,
            },
            {
                id: "2320",
                label: "23:20",
                text: "23:20",
                "data":"",
                "codename":"Item_2320",
                value: 2320,
                
                disabled: false,
            },
            {
                id: "2330",
                label: "23:30",
                text: "23:30",
                "data":"",
                "codename":"Item_2330",
                value: 2330,
                
                disabled: false,
            },
            {
                id: "2340",
                label: "23:40",
                text: "23:40",
                "data":"",
                "codename":"Item_2340",
                value: 2340,
                
                disabled: false,
            },
            {
                id: "2350",
                label: "23:50",
                text: "23:50",
                "data":"",
                "codename":"Item_2350",
                value: 2350,
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "DOCLIBTYPE",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "doc",
                label: "文档",
                text: "文档",
                "data":"",
                "codename":"Doc",
                value: "doc",
                
                disabled: false,
            },
            {
                id: "file",
                label: "附件",
                text: "附件",
                "data":"",
                "codename":"File",
                value: "file",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Task_quickpacket",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "All",
                label: "所有",
                text: "所有",
                "data":{},
                "codename":"ALLTASKCNT",
                value: "All",
                
                disabled: false,
            },
            {
                id: "UNCLOSED",
                label: "未关闭",
                text: "未关闭",
                "data":{"n_status_noteq":"closed"},
                "codename":"UNCLOSETASKCNT",
                value: "UNCLOSED",
                
                disabled: false,
            },
            {
                id: "TOME",
                label: "指派给我",
                text: "指派给我",
                "data":{"n_assignedto_eq":"%srfloginname%"},
                "codename":"ASSTOMYTASKCNT",
                value: "TOME",
                
                disabled: false,
            },
            {
                id: "storychange",
                label: "需求变更",
                text: "需求变更",
                "data":{"n_status1_eq":"storychange"},
                "codename":"STORYCHANGECNT",
                value: "storychange",
                
                disabled: false,
            },
            {
                id: "MORE",
                label: "更多",
                text: "更多",
                "data":"",
                "codename":"MORETASKCNT",
                value: "MORE",
                
                disabled: false,
            },
            {
                id: "NOTSTARTED",
                label: "未开始",
                text: "未开始",
                "data":{"n_status_eq":"wait"},
                "codename":"UNSTARTTASKCNT",
                value: "NOTSTARTED",
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: "INPROGRESS",
                label: "进行中",
                text: "进行中",
                "data":{"n_status_eq":"doing"},
                "codename":"YSTARTASKCNT",
                value: "INPROGRESS",
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: "UNACCOMPLISHED",
                label: "未完成",
                text: "未完成",
                "data":{"n_status_in":"wait;cancel;doing"},
                "codename":"UNCOMPLETETASKCNT",
                value: "UNACCOMPLISHED",
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: "IFINISHED",
                label: "我完成",
                text: "我完成",
                "data":{"n_finishedby_eq":"%srfloginname%"},
                "codename":"MYCOMPLETETASKCNT",
                value: "IFINISHED",
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: "COMPLETED",
                label: "已完成",
                text: "已完成",
                "data":{"n_status_eq":"done"},
                "codename":"YCOMPLETETASKCNT",
                value: "COMPLETED",
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: "CLOSED",
                label: "已关闭",
                text: "已关闭",
                "data":{"n_status_eq":"closed"},
                "codename":"CLOSETASKCNT",
                value: "CLOSED",
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: "CANCELLED",
                label: "已取消",
                text: "已取消",
                "data":{"n_status_eq":"cancel"},
                "codename":"CANCELTASKCNT",
                value: "CANCELLED",
                "pvalue": "MORE",
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "RunSQL",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"PSSystemDBCfg",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        "srfkey": "UserRealNameTask",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"SysEmployee",
        "appdedataset":"FetchProjectTeamUserTask",
        "items": []
    },
    {
        srfkey: "CaseQuickpacketMy",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "TOME",
                label: "给我的用例",
                text: "给我的用例",
                "data":{"n_lastrunner_eq":"%srfloginname%"},
                "codename":"Tome",
                value: "TOME",
                
                disabled: false,
            },
            {
                id: "ICREATE",
                label: "我建的用例",
                text: "我建的用例",
                "data":{"n_openedby_eq":"%srfloginname%"},
                "codename":"Icreate",
                value: "ICREATE",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "ProjectTeamProduct",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"SysEmployee",
        "appdedataset":"FetchProjectTeamMProduct",
        "items": []
    },
    {
        "srfkey": "TaskTeamUserTemp",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"SysEmployee",
        "appdedataset":"FetchProjectTeamTaskUserTemp",
        "items": []
    },
    {
        srfkey: "Task__closed_reason",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "done",
                label: "已完成",
                text: "已完成",
                "data":"",
                "codename":"Done",
                value: "done",
                
                disabled: false,
            },
            {
                id: "cancel",
                label: "已取消",
                text: "已取消",
                "data":"",
                "codename":"Cancel",
                value: "cancel",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Testrun__status",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "wait",
                label: "未开始",
                text: "未开始",
                "data":"",
                "codename":"Wait",
                value: "wait",
                
                disabled: false,
            },
            {
                id: "doing",
                label: "进行中",
                text: "进行中",
                "data":"",
                "codename":"Doing",
                value: "doing",
                
                disabled: false,
            },
            {
                id: "done",
                label: "已完成",
                text: "已完成",
                "data":"",
                "codename":"Done",
                value: "done",
                
                disabled: false,
            },
            {
                id: "blocked",
                label: "被阻塞",
                text: "被阻塞",
                "data":"",
                "codename":"Blocked",
                value: "blocked",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "TestQuickpacket",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "ALL",
                label: "全部",
                text: "全部",
                "data":{},
                "codename":"All",
                value: "ALL",
                
                disabled: false,
            },
            {
                id: "ICREATE",
                label: "待测测试单",
                text: "待测测试单",
                "data":{"n_status_eq":"wait"},
                "codename":"Icreate",
                value: "ICREATE",
                
                disabled: false,
            },
            {
                id: "IREVIEW",
                label: "测试中测试单",
                text: "测试中测试单",
                "data":{"n_status_eq":"doing"},
                "codename":"Ireview",
                value: "IREVIEW",
                
                disabled: false,
            },
            {
                id: "ICLOSE",
                label: "被阻塞测试单",
                text: "被阻塞测试单",
                "data":{"n_status_eq":"blocked"},
                "codename":"Iclose",
                value: "ICLOSE",
                
                disabled: false,
            },
            {
                id: "Tested",
                label: "已测测试单",
                text: "已测测试单",
                "data":{"n_status_eq":"done"},
                "codename":"Tested",
                value: "Tested",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Case__frequency",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "1",
                text: "1",
                "data":"",
                "codename":"Item_1",
                value: "1",
                
                disabled: false,
            },
            {
                id: "2",
                label: "2",
                text: "2",
                "data":"",
                "codename":"Item_2",
                value: "2",
                
                disabled: false,
            },
            {
                id: "3",
                label: "3",
                text: "3",
                "data":"",
                "codename":"Item_3",
                value: "3",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Story__color",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "#3da7f5",
                label: "#3da7f5",
                text: "#3da7f5",
                "data":"",
                "codename":"Item_1",
                "color": "rgba(61, 167, 245, 1)",
                value: "#3da7f5",
                
                disabled: false,
            },
            {
                id: "#75c941",
                label: "#75c941",
                text: "#75c941",
                "data":"",
                "codename":"Item_2",
                "color": "rgba(117, 201, 65, 1)",
                value: "#75c941",
                
                disabled: false,
            },
            {
                id: "#2dbdb2",
                label: "#2dbdb2",
                text: "#2dbdb2",
                "data":"",
                "codename":"Item_3",
                "color": "rgba(45, 189, 178, 1)",
                value: "#2dbdb2",
                
                disabled: false,
            },
            {
                id: "#797ec9",
                label: "#797ec9",
                text: "#797ec9",
                "data":"",
                "codename":"Item_4",
                "color": "rgba(121, 126, 201, 1)",
                value: "#797ec9",
                
                disabled: false,
            },
            {
                id: "#ffaf38",
                label: "#ffaf38",
                text: "#ffaf38",
                "data":"",
                "codename":"Item_5",
                "color": "rgba(255, 175, 56, 1)",
                value: "#ffaf38",
                
                disabled: false,
            },
            {
                id: "#ff4e3e",
                label: "#ff4e3e",
                text: "#ff4e3e",
                "data":"",
                "codename":"Item_6",
                "color": "rgba(255, 78, 62, 1)",
                value: "#ff4e3e",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "ReportType",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "weekly",
                label: "周报",
                text: "周报",
                "data":"",
                "codename":"Weekly",
                value: "weekly",
                
                disabled: false,
            },
            {
                id: "daily",
                label: "日报",
                text: "日报",
                "data":"",
                "codename":"Daily",
                value: "daily",
                
                disabled: false,
            },
            {
                id: "monthly",
                label: "月报",
                text: "月报",
                "data":"",
                "codename":"Monthly",
                value: "monthly",
                
                disabled: false,
            },
            {
                id: "reportly",
                label: "汇报",
                text: "汇报",
                "data":"",
                "codename":"Reportly",
                value: "reportly",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Testcase__type",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "feature",
                label: "功能测试",
                text: "功能测试",
                "data":"",
                "codename":"Feature",
                value: "feature",
                
                disabled: false,
            },
            {
                id: "performance",
                label: "性能测试",
                text: "性能测试",
                "data":"",
                "codename":"Performance",
                value: "performance",
                
                disabled: false,
            },
            {
                id: "config",
                label: "配置相关",
                text: "配置相关",
                "data":"",
                "codename":"Config",
                value: "config",
                
                disabled: false,
            },
            {
                id: "install",
                label: "安装部署",
                text: "安装部署",
                "data":"",
                "codename":"Install",
                value: "install",
                
                disabled: false,
            },
            {
                id: "security",
                label: "安全相关",
                text: "安全相关",
                "data":"",
                "codename":"Security",
                value: "security",
                
                disabled: false,
            },
            {
                id: "interface",
                label: "接口测试",
                text: "接口测试",
                "data":"",
                "codename":"Interface",
                value: "interface",
                
                disabled: false,
            },
            {
                id: "unit",
                label: "单元测试",
                text: "单元测试",
                "data":"",
                "codename":"Unit",
                value: "unit",
                
                disabled: false,
            },
            {
                id: "other",
                label: "其他",
                text: "其他",
                "data":"",
                "codename":"Other",
                value: "other",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "TypeAll",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "custom",
                label: "自定义",
                text: "自定义",
                "data":"",
                "codename":"Custom",
                value: "custom",
                
                disabled: false,
            },
            {
                id: "bug",
                label: "Bug",
                text: "Bug",
                "data":"",
                "codename":"Bug",
                value: "bug",
                
                disabled: false,
            },
            {
                id: "task",
                label: "项目任务",
                text: "项目任务",
                "data":"",
                "codename":"Task",
                value: "task",
                
                disabled: false,
            },
            {
                id: "story",
                label: "项目需求",
                text: "项目需求",
                "data":"",
                "codename":"Story",
                value: "story",
                
                disabled: false,
            },
            {
                id: "cycle",
                label: "周期",
                text: "周期",
                "data":"",
                "codename":"Cycle",
                value: "cycle",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Testcase__status",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "wait",
                label: "待评审",
                text: "待评审",
                "data":"",
                "codename":"Wait",
                value: "wait",
                
                disabled: false,
            },
            {
                id: "normal",
                label: "正常",
                text: "正常",
                "data":"",
                "codename":"Normal",
                "color": "rgba(84, 238, 19, 1)",
                value: "normal",
                
                disabled: false,
            },
            {
                id: "blocked",
                label: "被阻塞",
                text: "被阻塞",
                "data":"",
                "codename":"Blocked",
                "color": "rgba(242, 238, 7, 1)",
                value: "blocked",
                
                disabled: false,
            },
            {
                id: "investigate",
                label: "研究中",
                text: "研究中",
                "data":"",
                "codename":"Investigate",
                "color": "rgba(245, 12, 12, 1)",
                value: "investigate",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Story__quickpacket",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "ALL",
                label: "所有",
                text: "所有",
                "data":"",
                "codename":"All",
                value: "ALL",
                
                disabled: false,
            },
            {
                id: "UNCLOSED",
                label: "未关闭",
                text: "未关闭",
                "data":{"n_status_noteq":"closed"},
                "codename":"Unclosed",
                value: "UNCLOSED",
                
                disabled: false,
            },
            {
                id: "TOME",
                label: "指给我",
                text: "指给我",
                "data":{"n_assignedto_eq":"%srfloginname%"},
                "codename":"Tome",
                value: "TOME",
                
                disabled: false,
            },
            {
                id: "ICREATE",
                label: "我创建",
                text: "我创建",
                "data":{"n_openedby_eq":"%srfloginname%"},
                "codename":"Icreate",
                value: "ICREATE",
                
                disabled: false,
            },
            {
                id: "IREVIEW",
                label: "我评审",
                text: "我评审",
                "data":{"n_reviewedby_eq":"%srfloginname%"},
                "codename":"Ireview",
                value: "IREVIEW",
                
                disabled: false,
            },
            {
                id: "DRAFT",
                label: "草稿",
                text: "草稿",
                "data":{"n_status_eq":"draft"},
                "codename":"Draft",
                value: "DRAFT",
                
                disabled: false,
            },
            {
                id: "MORE",
                label: "更多",
                text: "更多",
                "data":"",
                "codename":"More",
                value: "MORE",
                
                disabled: false,
            },
            {
                id: "ICLOSE",
                label: "我关闭",
                text: "我关闭",
                "data":{"n_closedby_eq":"%srfloginname%"},
                "codename":"Iclose",
                value: "ICLOSE",
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: "ACTIVED",
                label: "激活",
                text: "激活",
                "data":{"n_status_eq":"active"},
                "codename":"Actived",
                value: "ACTIVED",
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: "CHANGED",
                label: "已变更",
                text: "已变更",
                "data":{"n_status_eq":"changed"},
                "codename":"Changed",
                value: "CHANGED",
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: "TOBECLOSED",
                label: "待关闭",
                text: "待关闭",
                "data":{"n_stage_eq":"released"},
                "codename":"Tobeclosed",
                value: "TOBECLOSED",
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: "CLOSED",
                label: "已关闭",
                text: "已关闭",
                "data":{"n_status_eq":"closed"},
                "codename":"Closed",
                value: "CLOSED",
                "pvalue": "MORE",
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Company__guest",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "允许",
                text: "允许",
                "data":"",
                "codename":"Item_1",
                value: "1",
                
                disabled: false,
            },
            {
                id: "0",
                label: "不允许",
                text: "不允许",
                "data":"",
                "codename":"Item_0",
                value: "0",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "CloseProduct",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "关闭产品",
                text: "关闭产品",
                "data":"",
                "codename":"Item_1",
                value: "1",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Testrun__result",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "n/a",
                label: "忽略",
                text: "忽略",
                "data":"",
                "codename":"N_a",
                value: "n/a",
                
                disabled: false,
            },
            {
                id: "pass",
                label: "通过",
                text: "通过",
                "data":"",
                "codename":"Pass",
                "color": "rgba(126, 222, 16, 1)",
                value: "pass",
                
                disabled: false,
            },
            {
                id: "fail",
                label: "失败",
                text: "失败",
                "data":"",
                "codename":"Fail",
                "color": "rgba(238, 18, 18, 1)",
                value: "fail",
                
                disabled: false,
            },
            {
                id: "blocked",
                label: "阻塞",
                text: "阻塞",
                "data":"",
                "codename":"Blocked",
                "color": "rgba(220, 224, 12, 1)",
                value: "blocked",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "BackendBuild",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"PSSysSFPub",
        "appdedataset":"FetchBuild",
        "items": []
    },
    {
        srfkey: "YesNo3",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "yes",
                label: "是",
                text: "是",
                "data":"",
                "codename":"Yes",
                value: "yes",
                
                disabled: false,
            },
            {
                id: "no",
                label: "否",
                text: "否",
                "data":"",
                "codename":"No",
                value: "no",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Story__source",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "customer",
                label: "客户",
                text: "客户",
                "data":"",
                "codename":"Customer",
                value: "customer",
                
                disabled: false,
            },
            {
                id: "user",
                label: "用户",
                text: "用户",
                "data":"",
                "codename":"User",
                value: "user",
                
                disabled: false,
            },
            {
                id: "po",
                label: "产品经理",
                text: "产品经理",
                "data":"",
                "codename":"Po",
                value: "po",
                
                disabled: false,
            },
            {
                id: "market",
                label: "市场",
                text: "市场",
                "data":"",
                "codename":"Market",
                value: "market",
                
                disabled: false,
            },
            {
                id: "service",
                label: "客服",
                text: "客服",
                "data":"",
                "codename":"Service",
                value: "service",
                
                disabled: false,
            },
            {
                id: "operation",
                label: "运营",
                text: "运营",
                "data":"",
                "codename":"Operation",
                value: "operation",
                
                disabled: false,
            },
            {
                id: "support",
                label: "技术支持",
                text: "技术支持",
                "data":"",
                "codename":"Support",
                value: "support",
                
                disabled: false,
            },
            {
                id: "competitor",
                label: "竞争对手",
                text: "竞争对手",
                "data":"",
                "codename":"Competitor",
                value: "competitor",
                
                disabled: false,
            },
            {
                id: "partner",
                label: "合作伙伴",
                text: "合作伙伴",
                "data":"",
                "codename":"Partner",
                value: "partner",
                
                disabled: false,
            },
            {
                id: "dev",
                label: "开发人员",
                text: "开发人员",
                "data":"",
                "codename":"Dev",
                value: "dev",
                
                disabled: false,
            },
            {
                id: "tester",
                label: "测试人员",
                text: "测试人员",
                "data":"",
                "codename":"Tester",
                value: "tester",
                
                disabled: false,
            },
            {
                id: "bug",
                label: "Bug",
                text: "Bug",
                "data":"",
                "codename":"Bug",
                value: "bug",
                
                disabled: false,
            },
            {
                id: "forum",
                label: "论坛",
                text: "论坛",
                "data":"",
                "codename":"Forum",
                value: "forum",
                
                disabled: false,
            },
            {
                id: "other",
                label: "其它",
                text: "其它",
                "data":"",
                "codename":"Other",
                value: "other",
                
                disabled: false,
            },
            {
                id: "iBiz",
                label: "iBiz",
                text: "iBiz",
                "data":"",
                "codename":"Ibiz",
                value: "iBiz",
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "AllTask",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Task",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        "srfkey": "AllTestTask",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"TestTask",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        srfkey: "IndexType",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "bug",
                label: "Bug",
                text: "Bug",
                "data":"",
                "codename":"Bug",
                value: "bug",
                
                disabled: false,
            },
            {
                id: "product",
                label: "产品",
                text: "产品",
                "data":"",
                "codename":"Product",
                value: "product",
                
                disabled: false,
            },
            {
                id: "task",
                label: "任务",
                text: "任务",
                "data":"",
                "codename":"Task",
                value: "task",
                
                disabled: false,
            },
            {
                id: "case",
                label: "功能测试",
                text: "功能测试",
                "data":"",
                "codename":"Case",
                value: "case",
                
                disabled: false,
            },
            {
                id: "doc",
                label: "文档",
                text: "文档",
                "data":"",
                "codename":"Doc",
                value: "doc",
                
                disabled: false,
            },
            {
                id: "story",
                label: "需求",
                text: "需求",
                "data":"",
                "codename":"Story",
                value: "story",
                
                disabled: false,
            },
            {
                id: "project",
                label: "项目",
                text: "项目",
                "data":"",
                "codename":"Project",
                value: "project",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Testcase__pri",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "1",
                label: "1",
                text: "1",
                "data":"",
                "codename":"Item_1",
                value: 1,
                
                disabled: false,
            },
            {
                id: "2",
                label: "2",
                text: "2",
                "data":"",
                "codename":"Item_2",
                value: 2,
                
                disabled: false,
            },
            {
                id: "3",
                label: "3",
                text: "3",
                "data":"",
                "codename":"Item_3",
                value: 3,
                
                disabled: false,
            },
            {
                id: "4",
                label: "4",
                text: "4",
                "data":"",
                "codename":"Item_4",
                value: 4,
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "CaseQuickpachet",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "ALL",
                label: "所有",
                text: "所有",
                "data":{},
                "codename":"All",
                value: "ALL",
                
                disabled: false,
            },
            {
                id: "TOME",
                label: "需求变动",
                text: "需求变动",
                "data":{"n_status1_eq":"storychange"},
                "codename":"Tome",
                value: "TOME",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Testcase__result",
        emptytext: "未执行",
        "codelisttype":"static",
        items: [
            {
                id: "n/a",
                label: "忽略",
                text: "忽略",
                "data":"",
                "codename":"N_a",
                "color": "rgba(190, 184, 184, 1)",
                value: "n/a",
                
                disabled: false,
            },
            {
                id: "pass",
                label: "通过",
                text: "通过",
                "data":"",
                "codename":"Pass",
                "color": "rgba(93, 238, 9, 1)",
                value: "pass",
                
                disabled: false,
            },
            {
                id: "fail",
                label: "失败",
                text: "失败",
                "data":"",
                "codename":"Fail",
                "color": "rgba(251, 12, 12, 1)",
                value: "fail",
                
                disabled: false,
            },
            {
                id: "blocked",
                label: "阻塞",
                text: "阻塞",
                "data":"",
                "codename":"Blocked",
                "color": "rgba(228, 15, 15, 1)",
                value: "blocked",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Bug__resolution",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "bydesign",
                label: "设计如此",
                text: "设计如此",
                "data":"",
                "codename":"Bydesign",
                value: "bydesign",
                
                disabled: false,
            },
            {
                id: "duplicate",
                label: "重复Bug",
                text: "重复Bug",
                "data":"",
                "codename":"Duplicate",
                value: "duplicate",
                
                disabled: false,
            },
            {
                id: "external",
                label: "外部原因",
                text: "外部原因",
                "data":"",
                "codename":"External",
                value: "external",
                
                disabled: false,
            },
            {
                id: "fixed",
                label: "已解决",
                text: "已解决",
                "data":"",
                "codename":"Fixed",
                value: "fixed",
                
                disabled: false,
            },
            {
                id: "notrepro",
                label: "无法重现",
                text: "无法重现",
                "data":"",
                "codename":"Notrepro",
                value: "notrepro",
                
                disabled: false,
            },
            {
                id: "postponed",
                label: "延期处理",
                text: "延期处理",
                "data":"",
                "codename":"Postponed",
                value: "postponed",
                
                disabled: false,
            },
            {
                id: "willnotfix",
                label: "不予解决",
                text: "不予解决",
                "data":"",
                "codename":"Willnotfix",
                value: "willnotfix",
                
                disabled: false,
            },
            {
                id: "tostory",
                label: "转为需求",
                text: "转为需求",
                "data":"",
                "codename":"Tostory",
                value: "tostory",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "StoryQuickpacketMy",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "TOME",
                label: "指给我",
                text: "指给我",
                "data":{"n_assignedto_eq":"%srfloginname%"},
                "codename":"Tome",
                value: "TOME",
                
                disabled: false,
            },
            {
                id: "ICREATE",
                label: "由我创建",
                text: "由我创建",
                "data":{"n_openedby_eq":"%srfloginname%"},
                "codename":"Icreate",
                value: "ICREATE",
                
                disabled: false,
            },
            {
                id: "IREVIEW",
                label: "由我评审",
                text: "由我评审",
                "data":{"n_reviewedby_eq":"%srfloginname%"},
                "codename":"Ireview",
                value: "IREVIEW",
                
                disabled: false,
            },
            {
                id: "ICLOSE",
                label: "由我关闭",
                text: "由我关闭",
                "data":{"n_closedby_eq":"%srfloginname%"},
                "codename":"Iclose",
                value: "ICLOSE",
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Bug__quickpacket",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "All",
                label: "所有",
                text: "所有",
                "data":{},
                "codename":"All",
                value: "All",
                
                disabled: false,
            },
            {
                id: "UNCLOSED",
                label: "未关闭",
                text: "未关闭",
                "data":{"n_status_noteq":"closed"},
                "codename":"Unclosed",
                value: "UNCLOSED",
                
                disabled: false,
            },
            {
                id: "ICREATE",
                label: "由我创建",
                text: "由我创建",
                "data":{"n_openedby_eq":"%srfloginname%"},
                "codename":"Icreate",
                value: "ICREATE",
                
                disabled: false,
            },
            {
                id: "TOME",
                label: "指派给我",
                text: "指派给我",
                "data":{"n_assignedto_eq":"%srfloginname%"},
                "codename":"Tome",
                value: "TOME",
                
                disabled: false,
            },
            {
                id: "BYME",
                label: "由我解决",
                text: "由我解决",
                "data":{"n_resolvedby_eq":"%srfloginname%"},
                "codename":"Byme",
                value: "BYME",
                
                disabled: false,
            },
            {
                id: "WAITCLOSED",
                label: "待关闭",
                text: "待关闭",
                "data":{"n_status_eq":"resolved"},
                "codename":"Waitclosed",
                value: "WAITCLOSED",
                
                disabled: false,
            },
            {
                id: "UNRESOLVED",
                label: "未解决",
                text: "未解决",
                "data":{"n_status_eq":"active"},
                "codename":"Unresolved",
                value: "UNRESOLVED",
                
                disabled: false,
            },
            {
                id: "MORE",
                label: "更多",
                text: "更多",
                "data":"",
                "codename":"More",
                value: "MORE",
                
                disabled: false,
            },
            {
                id: "UNCONFIRMED",
                label: "未确认",
                text: "未确认",
                "data":{"n_confirmed_eq": 0},
                "codename":"Unconfirmed",
                value: "UNCONFIRMED",
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: "UNASSIGNED",
                label: "未指派",
                text: "未指派",
                "data":{"n_assignedto_eq":" "},
                "codename":"Unassigned",
                value: "UNASSIGNED",
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: "EXPIREDBUG",
                label: "过期Bug",
                text: "过期Bug",
                "data":{"n_overduebugs_lt":  0},
                "codename":"Expiredbug",
                value: "EXPIREDBUG",
                "pvalue": "MORE",
                disabled: false,
            },
        ]
    },
    {
        srfkey: "Testtask__status",
        emptytext: "未定义",
        "codelisttype":"static",
        items: [
            {
                id: "wait",
                label: "未开始",
                text: "未开始",
                "data":"",
                "codename":"Wait",
                "color": "rgba(220, 214, 214, 1)",
                value: "wait",
                
                disabled: false,
            },
            {
                id: "doing",
                label: "进行中",
                text: "进行中",
                "data":"",
                "codename":"Doing",
                "color": "rgba(208, 20, 20, 1)",
                value: "doing",
                
                disabled: false,
            },
            {
                id: "done",
                label: "已完成",
                text: "已完成",
                "data":"",
                "codename":"Done",
                "color": "rgba(30, 234, 12, 1)",
                value: "done",
                
                disabled: false,
            },
            {
                id: "blocked",
                label: "被阻塞",
                text: "被阻塞",
                "data":"",
                "codename":"Blocked",
                "color": "rgba(221, 217, 10, 1)",
                value: "blocked",
                
                disabled: false,
            },
        ]
    }
    ]];
});

