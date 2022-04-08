import { MockAdapter } from '../mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'

// 获取studio链接数据
mock.onGet('./assets/json/view-config.json').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status,{
                "producttesttabexpview": {
            "title": "测试",
            "caption": "测试",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductTestTabExpView",
            "viewtag": "005b0ba30f9e9e982e087961bd50c681"
        },
        "docbasiceditview9": {
            "title": "文档编辑视图（基本信息）",
            "caption": "基本信息",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "DocBasicEditView9",
            "viewtag": "00d6c7c0b8629ec81c0016d542d0f097"
        },
        "ibzfavoritestabexpview": {
            "title": "我的收藏",
            "caption": "我的收藏",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzFavoritesTabExpView",
            "viewtag": "013fb02e5c34165206932c583a1e355f"
        },
        "ibizproprojectmonthlygridview": {
            "title": "项目月报表格视图",
            "caption": "项目月报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproProjectMonthlyGridView",
            "viewtag": "019ddd10ab740d535d2467afc95ce10c"
        },
        "ibzmonthlyeditmonthlyeditview": {
            "title": "月报编辑视图",
            "caption": "月报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzMonthlyEditMonthlyEditView",
            "viewtag": "01c7a883016bed2ddb813c580d3d2e0e"
        },
        "docmyfavouritegridview": {
            "title": "doc表格视图",
            "caption": "我的收藏",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocMyFavouriteGridView",
            "viewtag": "01c894c8e98d69e0f21c6a9eb8ba293f"
        },
        "storymaindashboardview_link": {
            "title": "需求数据看板视图",
            "caption": "需求",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "Storymaindashboardview_link",
            "viewtag": "021e4a7269fe8ec26b9001c39df0e215"
        },
        "taskdailycompletezsgridview": {
            "title": "任务表格视图（展示）",
            "caption": "展示",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "report",
            "viewname": "TaskDailyCompleteZsGridView",
            "viewtag": "0235121fc2b0c27f0be0e06953580a3d"
        },
        "caseeditview": {
            "title": "功能测试编辑视图",
            "caption": "测试用例",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseEditView",
            "viewtag": "02b7ecd8e994b90558a9d6c23705f600"
        },
        "bugtestbugsgridview": {
            "title": "Bug表格视图(遗留的bug)",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugTestBugsGridView",
            "viewtag": "0319874c28d03525dd90e2c2a90fcbc6"
        },
        "ibizprokeywordgridview": {
            "title": "关键字表格视图",
            "caption": "关键字",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "IBIZProKeywordGridView",
            "viewtag": "031f322348f44c7fd48538bd1b66cd28"
        },
        "projectproductplanlistview9": {
            "title": "项目产品列表视图",
            "caption": "关联计划",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectProductPlanListView9",
            "viewtag": "03c110360a714011ed9c30b8207d3703"
        },
        "productsumeditview": {
            "title": "产品汇总表编辑视图",
            "caption": "产品汇总表",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductSumEditView",
            "viewtag": "046ec3c9ae15271f1722ebe378de2017"
        },
        "companymainview9": {
            "title": "公司编辑视图",
            "caption": "公司",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "CompanyMainView9",
            "viewtag": "04b10e3ea5edc927bd5ae537a01fbe7b"
        },
        "employeeloadeditview": {
            "title": "员工负载表编辑视图",
            "caption": "员工负载表",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "EMPLOYEELOADEditView",
            "viewtag": "04f35686909b8baee14970bda69d9dfc"
        },
        "ibzweeklyeditviewedit": {
            "title": "实体2编辑视图",
            "caption": "周报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzWeeklyEditViewEdit",
            "viewtag": "0551f0f5f821e55d9ba9e4e4ed97aae8"
        },
        "bugassingtoview": {
            "title": "指派Bug",
            "caption": "指派Bug",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "BugAssingToView",
            "viewtag": "05653d7e8479a98698d7b2035b10af7a"
        },
        "bugmaindashboardview_link": {
            "title": "Bug数据看板视图",
            "caption": "Bug",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "Bugmaindashboardview_link",
            "viewtag": "05790021067211c1817c27dcb9c203df"
        },
        "ibzdailydailygridview": {
            "title": "日报表格视图",
            "caption": "日报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzDailyDailyGridView",
            "viewtag": "05c89f2ac0ec5594324c342827f1b7d3"
        },
        "modulelinegridview": {
            "title": "产品线",
            "caption": "产品线",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ModuleLineGridView",
            "viewtag": "060fd533b0e7eacaa8e008007d588630"
        },
        "bugmpickupview5": {
            "title": "关联Bug",
            "caption": "关联Bug",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "BugMPickupView5",
            "viewtag": "061236c487f882bb6b17d4e6e44fcc3f"
        },
        "projectstatsusr2gridviewtasktypecount": {
            "title": "项目统计表格视图（任务状态统计）",
            "caption": "任务类型统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectStatsUsr2GridViewTaskTypeCount",
            "viewtag": "0628ebe722ec3a5dd70928a0df4b1b20"
        },
        "doclibusr2treeview": {
            "title": "文档库树视图",
            "caption": "文档库",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibUsr2TreeView",
            "viewtag": "0647a85a1b2f6013ccb63143973c706c"
        },
        "taskpivottableview": {
            "title": "任务表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskPivotTableView",
            "viewtag": "06988296d76338e807e491cc0b987268"
        },
        "productliferoadmaplistview": {
            "title": "路线图",
            "caption": "产品生命周期",
            "viewtype": "DELISTVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductLifeRoadMapListView",
            "viewtag": "07327890c326f9c806b9343f0c660fc1"
        },
        "ibizproproductmonthlygridview": {
            "title": "产品月报表格视图",
            "caption": "产品月报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproProductMonthlyGridView",
            "viewtag": "08342c67823ce8de1f6ae01c82957813"
        },
        "sysuserchangepasswordeditview": {
            "title": "系统用户编辑视图",
            "caption": "修改密码",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "uaa",
            "viewname": "SysUserChangePasswordEditView",
            "viewtag": "08ea7325098704d2da66dba4ad259201"
        },
        "testresulteditview": {
            "title": "testresult编辑视图",
            "caption": "测试结果",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestResultEditView",
            "viewtag": "0946cbeb1bf3dc832384ec4ee62310e8"
        },
        "ibizpms": {
            "title": "iBiz软件生产管理",
            "caption": "iBiz软件生产管理",
            "viewtype": "APPINDEXVIEW",
            "viewmodule": "zentao",
            "viewname": "iBizPMS",
            "viewtag": "09b9ef8ce803717761b940cf3fd0173f"
        },
        "ibzlibcasestepsgridview9": {
            "title": "用例库用例步骤表格视图",
            "caption": "用例库用例步骤",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibiz",
            "viewname": "IbzLibCaseStepsGridView9",
            "viewtag": "09ce67f87a5aab546496ec48bc5a77d7"
        },
        "ibzproproducteditview": {
            "title": "平台产品编辑视图",
            "caption": "平台产品",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IBZProProductEditView",
            "viewtag": "0a777c3662cc011608d04d3c8e61178f"
        },
        "productteamusr2gridview": {
            "title": "产品团队表格视图",
            "caption": "产品团队",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "PRODUCTTEAMUsr2GridView",
            "viewtag": "0a884b42c2e735a2a4cf6a17cee587f4"
        },
        "storypickupgridview3": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryPickupGridView3",
            "viewtag": "0a8b0eaddc63fcbc39d3b7295ca320dd"
        },
        "groupmaingridview": {
            "title": "群组表格视图",
            "caption": "群组",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "GroupMainGridView",
            "viewtag": "0c908b52868ce7ccfaf6f1005a8434db"
        },
        "ibzdailyprojectdailygridview": {
            "title": "日报表格视图",
            "caption": "日报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzDailyProjectDailyGridView",
            "viewtag": "0cdc345ce433b0d36bec67942415280e"
        },
        "bugeditview_4791": {
            "title": "Bug",
            "caption": "Bug",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugEditView_4791",
            "viewtag": "0cf81cd23060369941ea5191d9d88bc9"
        },
        "storystagechartview9": {
            "title": "需求图表视图（累计创建需求-阶段）",
            "caption": "累计创建需求-阶段",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryStageChartView9",
            "viewtag": "0dcfe598ebb18a6e0f3adb9ddc0b40c9"
        },
        "projectteammaingridview": {
            "title": "项目团队表格视图",
            "caption": "项目团队",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectTeamMainGridView",
            "viewtag": "0e5106e528e787511c12f54c7382b832"
        },
        "ibizproproductweeklyeditview": {
            "title": "产品周报编辑视图",
            "caption": "产品周报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproProductWeeklyEditView",
            "viewtag": "0eb68ab324993883fb099dcea3836a51"
        },
        "productsumpochartview9": {
            "title": "产品汇总表图表视图",
            "caption": "产品汇总表",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProductSumPoChartView9",
            "viewtag": "0f46f0ff90c7191fa3d01a2c6989a4ca"
        },
        "ibzdailymaineditview": {
            "title": "日报编辑视图（编辑）",
            "caption": "日报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzDailymainEditView",
            "viewtag": "0f99fa483452685fcfa36df2f6641f35"
        },
        "projecttasktreeexpview": {
            "title": "项目任务导航视图",
            "caption": "项目",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectTaskTreeExpView",
            "viewtag": "103bc77ad54de2476db1d4e9c788cd4e"
        },
        "casemaineditview": {
            "title": "测试用例",
            "caption": "测试用例",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseMainEditView",
            "viewtag": "107f96ecdbdc7d13327ab0c95d68514b"
        },
        "productmodulegridviewbranch": {
            "title": "产品模块表格视图",
            "caption": "需求模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductModuleGridViewBranch",
            "viewtag": "10d6cb2fc147ac7b82b684d94cfa6c9b"
        },
        "doclibproducttreeviewcust": {
            "title": "文档库树视图（自定义文档库）",
            "caption": "自定义文档库",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibProductTreeViewCust",
            "viewtag": "10ebe725710cbb64664e755952f2c0ba"
        },
        "bugbuglifeeditview9": {
            "title": "Bug的一生",
            "caption": "Bug",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "BugBugLifeEditView9",
            "viewtag": "114241c3104f51fe267e9708ba41fe29"
        },
        "buildmaingridview": {
            "title": "版本表格视图",
            "caption": "版本",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BuildMainGridView",
            "viewtag": "118edf7fdb85f90d0ca2fa11e3318f59"
        },
        "sysemployeeeditview": {
            "title": "人员编辑视图",
            "caption": "人员",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "SysEmployeeEditView",
            "viewtag": "119fe650e7efd26bd14bd413cae37ded"
        },
        "releasequickcreateview": {
            "title": "发布编辑视图",
            "caption": "发布",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ReleaseQuickCreateView",
            "viewtag": "120a2786f83e79c901470f9f38c4cd7a"
        },
        "ibzmyterritorylistview9personinfo": {
            "title": "我的工作",
            "caption": "我的工作",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryListView9PersonInfo",
            "viewtag": "12b93621cdf2d44e4bf3d664c17adb44"
        },
        "testreportprojectgridview": {
            "title": "测试报告表格视图",
            "caption": "项目报告",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportProjectGridView",
            "viewtag": "1342a35f73e4fc60b094784cf18338cb"
        },
        "taskworkhoursview": {
            "title": "工时",
            "caption": "工时",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskWorkHoursView",
            "viewtag": "136d70665b22cd3104c5f023d8955e8a"
        },
        "casecursuitgridview": {
            "title": "功能测试",
            "caption": "功能测试",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseCurSuitGridView",
            "viewtag": "138b5a87f88e5bacc7b1629267d44086"
        },
        "casemainmygridview": {
            "title": "功能测试",
            "caption": "功能测试",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseMainMyGridView",
            "viewtag": "13ed9a258da20a9536f8352d0e355583"
        },
        "bugmaindashboardview": {
            "title": "Bug数据看板视图",
            "caption": "Bug",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "BugMainDashboardView",
            "viewtag": "1540523a668e920d831510cfbec2c5e2"
        },
        "taskgridview9_storyrelated": {
            "title": "任务表格视图",
            "caption": "相关任务",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskGridView9_StoryRelated",
            "viewtag": "15770c3ca9c1d80433c99f3a7a69d506"
        },
        "ibzweeklyprojectweeklygridview": {
            "title": "周报表格视图",
            "caption": "周报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzWeeklyProjectWeeklyGridView",
            "viewtag": "164d0925f78aa99e9221cb34d656de93"
        },
        "storyreleasesubgridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryReleaseSubGridView",
            "viewtag": "168e0a500b6f95099eb0bb5b30c0a5e0"
        },
        "storypickupgridview4": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryPickupGridView4",
            "viewtag": "1692c1e5fb7ada4f1b5d2613f0350c16"
        },
        "deptpickupview": {
            "title": "部门数据选择视图",
            "caption": "部门",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "DeptPickupView",
            "viewtag": "16b54862dad958907853dc7eb084a0c0"
        },
        "sysupdatelogeditview": {
            "title": "系统更新日志编辑视图",
            "caption": "更新日志",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateLogEditView",
            "viewtag": "172b7a0413a1bfcf5223f1dc1d3e931c"
        },
        "casecurtesttaskgridview": {
            "title": "功能测试",
            "caption": "功能测试",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseCurTestTaskGridView",
            "viewtag": "178ae3b2e5f30d153fa8a30edace0383"
        },
        "doclibdashboardview": {
            "title": "文档库数据看板视图",
            "caption": "文档主页",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibDashboardView",
            "viewtag": "17cfdc6c0116cf67d29eb46f73a25706"
        },
        "bugpickupgridview5": {
            "title": "bug选择表格视图",
            "caption": "Bug",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugPickupGridView5",
            "viewtag": "17d21dba3426cc5aeb87a177f798cfc5"
        },
        "testreportmainediteditview": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportMainEditEditView",
            "viewtag": "1862fb87e7333882bdf3e54f9fb412cd"
        },
        "producttestdashboardview": {
            "title": "产品测试数据看板视图",
            "caption": "产品",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductTestDashboardView",
            "viewtag": "1884d01229cee824d7577705da288043"
        },
        "productmytesttabexpview": {
            "title": "测试",
            "caption": "测试",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductMyTestTabExpView",
            "viewtag": "192bd3c72259613684edc6fe828196f7"
        },
        "doclibmodulegridview": {
            "title": "文档库分类表格视图",
            "caption": "文档库分类",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibModuleGridView",
            "viewtag": "193caf00d42443dac6ee77b8ace4ff4d"
        },
        "testsuitemaindashboardview": {
            "title": "测试套件数据看板视图",
            "caption": "测试套件",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "TestSuiteMainDashboardView",
            "viewtag": "1992dba2ce6fc9c7457c3a075575f337"
        },
        "bugbuildsubgridview_new_9212": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugBuildSubGridView_New_9212",
            "viewtag": "19a7142c8e8fcb5413c2314ee80dd036"
        },
        "taskwheditview": {
            "title": "工时",
            "caption": "工时",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskWHEditView",
            "viewtag": "1be718d3ac721ec43429bf88c4c4646b"
        },
        "ibizproprojectdailyeditview": {
            "title": "项目日报编辑视图",
            "caption": "项目日报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproProjectDailyEditView",
            "viewtag": "1ce9c1547b9b2ef281d884b93c19f189"
        },
        "producttestgridview": {
            "title": "所有产品",
            "caption": "测试",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductTestGridView",
            "viewtag": "1d697dd8e47a4781be8f690bcc5f7800"
        },
        "ibizprotageditview": {
            "title": "标签编辑视图",
            "caption": "标签",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "IBIZProTagEditView",
            "viewtag": "1dbebd55ab7518c3a31b7cc8af22a1a3"
        },
        "ibzplantempletoptionview": {
            "title": "产品计划模板选项操作视图",
            "caption": "计划模板",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbzPlanTempletOptionView",
            "viewtag": "1e3339b639486a8efcbf7b33cfdd87a7"
        },
        "productstatsallgridview": {
            "title": "所有产品",
            "caption": "所有产品",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductStatsALLGridView",
            "viewtag": "1e6c67c04400850f345e5f804bf8ee50"
        },
        "bugpickupgridview": {
            "title": "bug选择表格视图",
            "caption": "Bug",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugPickupGridView",
            "viewtag": "1e7347f3fffc87077dd7f0156125b918"
        },
        "usercontacteditview": {
            "title": "usercontact编辑视图",
            "caption": "用户联系方式",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "UserContactEditView",
            "viewtag": "1eeb1cc3801fe7d3961fca4b3d753b04"
        },
        "doclibmoduleusr2gridview": {
            "title": "文档库分类表格视图",
            "caption": "文档库分类",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocLibModuleUsr2GridView",
            "viewtag": "1f58c36b426313948746ac301e8716b1"
        },
        "doclibmodulepickupgridview": {
            "title": "文档库分类选择表格视图",
            "caption": "文档库分类",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibModulePickupGridView",
            "viewtag": "1fbc46e004d15ae2b1e3f9775e84377d"
        },
        "ibzcaseopencaseview": {
            "title": "用例库用例数据看板视图",
            "caption": "测试用例",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzCaseOpenCaseView",
            "viewtag": "1ff6245a9d7ed22dd6aa072f149abf65"
        },
        "tasktaskgroupgridview": {
            "title": "任务表格视图（任务分组）",
            "caption": "状态分组",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskTaskGroupGridView",
            "viewtag": "206931400ca59472a0562a5d96898521"
        },
        "taskchartview9": {
            "title": "任务图表视图",
            "caption": "任务",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskChartView9",
            "viewtag": "20becaa9cbc1b01d68aca88855917f79"
        },
        "taskestimategridview9": {
            "title": "任务预计表格视图",
            "caption": "工时",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskEstimateGridView9",
            "viewtag": "214650149c1d7b82e6897e6915b0e2b5"
        },
        "productsumstoryhourssumgridview": {
            "title": "产品汇总表表格视图",
            "caption": "需求工时汇总",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductSumStoryHoursSumGridView",
            "viewtag": "214d20cc72225e59b3f91087c1bff907"
        },
        "productsumusr2gridview": {
            "title": "产品计划数和需求数实体表格视图",
            "caption": "产品汇总表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductSumUsr2GridView",
            "viewtag": "219b52b980e0926e5cc97a911560ba38"
        },
        "bugreleasesubgridview_done": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugReleaseSubGridView_Done",
            "viewtag": "21c207cc92b8484d58a4231ad8053553"
        },
        "casestepgridview9": {
            "title": "用例步骤表格视图",
            "caption": "用例步骤",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseStepGridView9",
            "viewtag": "21c4e5c64f8c35ef32192c3a1c27259d"
        },
        "bugmpickupview": {
            "title": "关联Bug",
            "caption": "关联Bug",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "BugMPickupView",
            "viewtag": "21d716ac12c793af54b112a5a3599674"
        },
        "sysposteditview": {
            "title": "岗位编辑视图",
            "caption": "岗位",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "SysPostEditView",
            "viewtag": "22be3cbaf3e2beeb404f53573f0a917a"
        },
        "taskzsgridview9weeknextweekplan": {
            "title": "任务表格视图（展示）",
            "caption": "展示",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "report",
            "viewname": "TaskZsGridView9WeekNextWeekPlan",
            "viewtag": "22d2c4b67575880b4481b855f652e1b3"
        },
        "ibizproplugineditview": {
            "title": "系统插件编辑视图",
            "caption": "系统插件",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibizplugin",
            "viewname": "IBIZProPluginEditView",
            "viewtag": "2430e10125e60af35cccff589382f71f"
        },
        "casetobugtesteditview": {
            "title": "转BUG",
            "caption": "转BUG",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseToBugTestEditView",
            "viewtag": "2438a896b23dbe05214711a290d0e8e7"
        },
        "docmyfavouritepartgridview": {
            "title": "文档表格视图",
            "caption": "我的收藏",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "DocMyFavouritePartGridView",
            "viewtag": "24690692d976c87e9e6948f81497ff23"
        },
        "ibzproprojectusertaskmonthlygridview": {
            "title": "项目汇报用户任务表格视图",
            "caption": "项目汇报用户任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbzproProjectUserTaskMonthlyGridView",
            "viewtag": "24ce025eb657fc73083eae8a15f9ad32"
        },
        "doclibpickupview": {
            "title": "doclib数据选择视图",
            "caption": "文档库",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibPickupView",
            "viewtag": "25452e386e72c70f03641cc650c1b979"
        },
        "fileproductgridview": {
            "title": "file表格视图",
            "caption": "附件",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "FileProductGridView",
            "viewtag": "25604124fe30ec7cc83066e3e058b0ec"
        },
        "docrecentmoregridview": {
            "title": "doc表格视图",
            "caption": "最近更新",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocRecentMoreGridView",
            "viewtag": "2563d471f99298961b4605f39a5d21c7"
        },
        "productteamproductteamlistview": {
            "title": "产品团队列表视图",
            "caption": "产品团队",
            "viewtype": "DELISTVIEW",
            "viewmodule": "ibiz",
            "viewname": "PRODUCTTEAMProductTeamListView",
            "viewtag": "256de1139e8adce86805c471e5de2db0"
        },
        "taskgrouptreeexpview": {
            "title": "任务树导航视图（分组树）",
            "caption": "分组视图",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskGroupTreeExpView",
            "viewtag": "25ad13bec39a81629f26d442db44d424"
        },
        "moduleeditview": {
            "title": "模块",
            "caption": "模块",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ModuleEditView",
            "viewtag": "2671388d4c12a6f139e6fd806c524dc7"
        },
        "doclibundoneprojecttreeexpview": {
            "title": "文档库树导航视图",
            "caption": "未完成项目",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibUnDoneProjectTreeExpView",
            "viewtag": "268235f326128db6498eb299243b47df"
        },
        "testrunmeditview9": {
            "title": "测试运行多表单编辑视图",
            "caption": "测试运行",
            "viewtype": "DEMEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestRunMEditView9",
            "viewtag": "26a578a923c27361d49dc78fce10a6a8"
        },
        "testtaskeditview_edit": {
            "title": "测试单编辑视图",
            "caption": "测试版本",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskEditView_Edit",
            "viewtag": "26e94c617670fe91c3b3a1caf3726281"
        },
        "projectportalview": {
            "title": "项目主页",
            "caption": "项目主页",
            "viewtype": "APPPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectPortalView",
            "viewtag": "288e324a2c3784f988a64c71508e97ba"
        },
        "projectteammaingridview_editrow": {
            "title": "项目团队表格视图",
            "caption": "项目团队",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectTeamMainGridView_EditRow",
            "viewtag": "29447769aa6216b5f7a881c0a5d81d73"
        },
        "ibzreportlymaingridview": {
            "title": "汇报表格视图",
            "caption": "汇报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzReportlyMainGridView",
            "viewtag": "296712ee7d4af46fb909a47bc7490b78"
        },
        "productplansubplaneditview": {
            "title": "子计划",
            "caption": "子计划",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanSubPlanEditView",
            "viewtag": "2a9a0a1eade053918f2b4497db99cfb8"
        },
        "ibizproproductmonthlyeditview": {
            "title": "产品月报编辑视图",
            "caption": "产品月报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproProductMonthlyEditView",
            "viewtag": "2aa4e8cde53c414bb05ed41f3494f9bb"
        },
        "bugcalendareditview": {
            "title": "Bug编辑视图（日历导航）",
            "caption": "日历导航",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugCalendarEditView",
            "viewtag": "2ac0d76f7c37a269aabc3828c74836f1"
        },
        "testmodulegridview": {
            "title": "测试模块表格视图",
            "caption": "测试模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "TestModuleGridView",
            "viewtag": "2cd7bc56e84d0466d176da964a839727"
        },
        "productsumusr3gridview": {
            "title": "产品汇总表表格视图",
            "caption": "产品汇总表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductSumUsr3GridView",
            "viewtag": "2ce171ae2b8f5fb2ee16e8f176347f23"
        },
        "ibizproproductdailyeditview": {
            "title": "产品日报编辑视图",
            "caption": "产品日报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproProductDailyEditView",
            "viewtag": "2d146e30c5656734a82bd223baf60f3e"
        },
        "testreportprojecttabexpview": {
            "title": "测试报告分页导航视图",
            "caption": "项目报告",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportProjectTabExpView",
            "viewtag": "2dda1b4d7b8bacd3d921f0f0108f2fa1"
        },
        "taskmaingridview9_child": {
            "title": "任务表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskMainGridView9_Child",
            "viewtag": "2e0d4fb0f3e1ba1ba5bea16a5553cc21"
        },
        "productsumqachartview9": {
            "title": "产品汇总表图表视图",
            "caption": "产品汇总表",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProductSumQaChartView9",
            "viewtag": "2e1e24a39d1f1969f411b507d49fc640"
        },
        "ibzcaseneweditview": {
            "title": "用例库用例编辑视图（新建）",
            "caption": "新建",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzCaseNewEditView",
            "viewtag": "2e7fdbe63e181be017c6eb46dc8a9832"
        },
        "testmodulepickupview": {
            "title": "测试模块数据选择视图",
            "caption": "测试模块",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "TestModulePickupView",
            "viewtag": "2e9485ffe7ce86f9fca4beb04b163b62"
        },
        "taskmaingridview_bymodule": {
            "title": "task表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskMainGridView_ByModule",
            "viewtag": "2e9ce660882f17642f1b0b92ae108a2b"
        },
        "ibizprokeywordeditview": {
            "title": "关键字编辑视图",
            "caption": "关键字",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "IBIZProKeywordEditView",
            "viewtag": "2ecaa5fe641c4ba59086980bf0aacdd7"
        },
        "doclibmoduleeditviewmain": {
            "title": "文档库分类编辑视图",
            "caption": "文档库分类",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibModuleEditViewMain",
            "viewtag": "2f404e39010d73a94c75537fcbf4ce97"
        },
        "casemainmynewgridview": {
            "title": "功能测试",
            "caption": "功能测试",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseMainMyNewGridView",
            "viewtag": "301ea541e5179822452ef8d9979e0923"
        },
        "productportalview": {
            "title": "产品主页",
            "caption": "产品主页",
            "viewtype": "APPPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPortalView",
            "viewtag": "305a8f8ecf4dfa714d2e3cbc2e0eecf5"
        },
        "storyprojectpickupgridview": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryProjectPickupGridView",
            "viewtag": "3086284187a791ef3b48de19300c870c"
        },
        "storybuildsubgridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryBuildSubGridView",
            "viewtag": "30b9ee91769537268785ee0a9d1ab250"
        },
        "bugmaineditview": {
            "title": "Bug编辑",
            "caption": "Bug编辑",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugMainEditView",
            "viewtag": "30b9fb87a864a9b67484ea3384cd66fc"
        },
        "storytostoryeditview": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "StorytoStoryEditView",
            "viewtag": "30e5d8c433af27ab7623edb999b6788d"
        },
        "ibzmonthlymonthlymainmsgeditview": {
            "title": "月报编辑视图",
            "caption": "月报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzMonthlyMonthlyMainMsgEditView",
            "viewtag": "310d769f7a26cde669e0d1bc0c614319"
        },
        "docmodulegridview": {
            "title": "doc表格视图",
            "caption": "文档",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DocModuleGridView",
            "viewtag": "319cde921629af8eb0bee825d8e0173f"
        },
        "taskmaininfoview9": {
            "title": "任务编辑视图",
            "caption": "任务",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskMainInfoView9",
            "viewtag": "321ab2e4e87a29fef8eed086e951a006"
        },
        "ibzprojectmembereditview9": {
            "title": "项目相关成员编辑视图（相关成员）",
            "caption": "相关成员",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "IbzProjectMemberEditView9",
            "viewtag": "322b17905b7ba95289eab32f7d4ae4d0"
        },
        "ibzplantempletdetailgridview9": {
            "title": "计划模板详情表格视图",
            "caption": "计划模板详情",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibizpro",
            "viewname": "IbzPlanTempletDetailGridView9",
            "viewtag": "323665023d61b39a6173f364869fd214"
        },
        "storyprichartview9": {
            "title": "需求图表视图（累计创建需求-优先级）",
            "caption": "累计创建需求-优先级",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryPriChartView9",
            "viewtag": "32f6d43e76a7aef929dcfc5a7e261537"
        },
        "ibzlibtabexpview": {
            "title": "用例库",
            "caption": "用例库",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzLibTabExpView",
            "viewtag": "331707f1067ca2792a78285e48607a5d"
        },
        "productsumgridview": {
            "title": "产品汇总表表格视图",
            "caption": "产品汇总表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductSumGridView",
            "viewtag": "33d0e4e9cc6cec4a3ec66805c0e85c1a"
        },
        "buildtestroundsgridview": {
            "title": "版本表格视图（轮次）",
            "caption": "轮次",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BuildTestRoundsGridView",
            "viewtag": "33eb075a8e7a871bfcb7da61bdccb1a2"
        },
        "casemoduleentrygridview": {
            "title": "测试用例表格视图（测试结果条目）",
            "caption": "测试结果条目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseModuleEntryGridView",
            "viewtag": "33fb1d2864a2772bec03c78bae553908"
        },
        "testmoduletreeexpview": {
            "title": "测试模块树导航视图",
            "caption": "测试模块",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "TestModuleTreeExpView",
            "viewtag": "3414a6ef8747f3c0ce2a6ef571dde48e"
        },
        "sysorganizationgridexpview": {
            "title": "单位表格导航视图",
            "caption": "单位",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "ou",
            "viewname": "SysOrganizationGridExpView",
            "viewtag": "349b5cf3162e27893fb220a362576e54"
        },
        "ibzmyterritoryproductsumtreeexpview": {
            "title": "我的地盘树导航视图（产品汇总表）",
            "caption": "产品汇总表",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryProductSumTreeExpView",
            "viewtag": "34f29e60d90fbc39195bdcb82bb0b87b"
        },
        "todocloseview": {
            "title": "关闭",
            "caption": "关闭",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TodoCloseView",
            "viewtag": "350eb8ac832890ae0f531aadd6689dc5"
        },
        "useryearworkstatsdashboardview": {
            "title": "用户年度工作内容统计数据看板视图",
            "caption": "用户年度工作内容统计",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "ibiz",
            "viewname": "UserYearWorkStatsDashboardView",
            "viewtag": "35452fdae20ad8f9a786c708744662b4"
        },
        "ibzreportroleconfiggridview": {
            "title": "汇报角色配置表格视图",
            "caption": "汇报角色配置",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzReportRoleConfigGridView",
            "viewtag": "356dfaec96b208208e3a9febae855a65"
        },
        "ibzreportlymyreceivedreportlydetaileditview": {
            "title": "汇报编辑视图",
            "caption": "汇报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzReportlyMyReceivedReportlyDetailEditView",
            "viewtag": "357e7d9bb60d37a289e5b4ba54db7b80"
        },
        "taskpritaskgroupgridview": {
            "title": "任务表格视图（优先级分组）",
            "caption": "优先级分组",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskPriTaskGroupGridView",
            "viewtag": "359b82fac8790c68593b4127a54aa85e"
        },
        "releaseoptionview": {
            "title": "发布选项操作视图",
            "caption": "发布",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "ReleaseOptionView",
            "viewtag": "35b909720c10aa8ec180785e28b4668e"
        },
        "testresultgridview9": {
            "title": "测试结果表格视图",
            "caption": "测试结果",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestResultGridView9",
            "viewtag": "368216ad8a9f6f4eeeefbff6b64e2140"
        },
        "todoassigntoview": {
            "title": "指派表单视图",
            "caption": "指派给",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TodoAssignToView",
            "viewtag": "375a839817c57466639c0cb40c6a6057"
        },
        "usertplgridview": {
            "title": "usertpl表格视图",
            "caption": "用户模板",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "UserTplGridView",
            "viewtag": "379360eb2f83ea4dc50744144c2878b7"
        },
        "bugresolvechartview": {
            "title": "Bug图表视图（解决Bug）",
            "caption": "解决Bug",
            "viewtype": "DECHARTVIEW",
            "viewmodule": "zentao",
            "viewname": "BugResolveChartView",
            "viewtag": "37bc6d4629a414e5b4b7eb133a5bd0dd"
        },
        "taskassigntaskview": {
            "title": "指派任务",
            "caption": "指派任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskAssignTaskView",
            "viewtag": "3891a34dcc372c6c8fe45dc7941cf290"
        },
        "storygridview9_substory": {
            "title": "子需求",
            "caption": "子需求",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryGridView9_SubStory",
            "viewtag": "389d7b00409ffa4bd014d70d4a21c110"
        },
        "doclibmoduleredirectview": {
            "title": "文档库分类数据重定向视图",
            "caption": "文档库分类",
            "viewtype": "DEREDIRECTVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibModuleRedirectView",
            "viewtag": "38a5f8d860b44f4196b6c47ee47d3ca3"
        },
        "bugusr2gridview": {
            "title": "Bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugUsr2GridView",
            "viewtag": "39207f363dc5118f65d22eeef4c59883"
        },
        "taskreportpickupgridview": {
            "title": "任务选择表格视图（汇报）",
            "caption": "汇报",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskreportPickupGridView",
            "viewtag": "3937d373f94911ff7173162fa6731b8d"
        },
        "productplanoptionview": {
            "title": "导入计划模板",
            "caption": "导入计划模板",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanOptionView",
            "viewtag": "3a8c3a9bd689ed17ac4d40e679d383d2"
        },
        "projectburndownchartview": {
            "title": "燃尽图",
            "caption": "项目",
            "viewtype": "DECHARTVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectBurnDownChartView",
            "viewtag": "3aa4c66089ff40194c7f4ecaf627acb5"
        },
        "projectpickupgridview": {
            "title": "项目选择表格视图",
            "caption": "项目",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectPickupGridView",
            "viewtag": "3b346aee2b79b7b6b59bc870b4c67f72"
        },
        "userinfoeditview": {
            "title": "用户编辑视图",
            "caption": "用户信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "UserINFOEditView",
            "viewtag": "3c20fcadad363f3cd489c026d6638a98"
        },
        "projectstorymeditview9": {
            "title": "项目多表单编辑视图（需求相关）",
            "caption": "需求相关",
            "viewtype": "DEMEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectStoryMEditView9",
            "viewtag": "3cecaa21816a751af38ce2ff1aac25ba"
        },
        "buggridview9_taskrelated": {
            "title": "相关Bug",
            "caption": "相关Bug",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "BugGridView9_TaskRelated",
            "viewtag": "3da1f37a9dc628fb6755d3d9c03fc112"
        },
        "testmoduleeditview": {
            "title": "测试模块编辑视图",
            "caption": "测试模块",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "TestModuleEditView",
            "viewtag": "3e5c30d5401a9d3cf048b40ffc84afda"
        },
        "taskmyfavoritegridview": {
            "title": "task表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "TaskMyFavoriteGridView",
            "viewtag": "3e64fd6ff52a743fc5861c88e4d2da35"
        },
        "storymyfavoritesgridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "Ungroup",
            "viewname": "StoryMyFavoritesGridView",
            "viewtag": "3efc6350b5c81769e497c9da9485ebaf"
        },
        "storymainview": {
            "title": "需求数据看板视图",
            "caption": "需求",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMainView",
            "viewtag": "3f2ca3e560d9082bb56fbf7667a57a66"
        },
        "casecasetypechartview9": {
            "title": "测试用例图表视图（测试类型）",
            "caption": "测试类型",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseCaseTypeChartView9",
            "viewtag": "3fcaa392e52e65dcc42af0fe64b6a1ab"
        },
        "bugmpickupview4": {
            "title": "关联Bug",
            "caption": "关联Bug",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "BugMPickupView4",
            "viewtag": "404fbffbb8a204ad2acce5a4c9aa0f68"
        },
        "projectgridexpview": {
            "title": "项目表格导航视图",
            "caption": "项目",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectGridExpView",
            "viewtag": "407b9d94c4c324b057e3ef37d1b343c8"
        },
        "ibzcasegridview": {
            "title": "用例库用例表格视图",
            "caption": "测试用例",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "IbzCaseGridView",
            "viewtag": "409176d44884e69d4999342ec4c14176"
        },
        "systeammemberusr2gridview": {
            "title": "组成员表格视图",
            "caption": "组成员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamMemberUsr2GridView",
            "viewtag": "40fb48b28c828af32d6662eaf3cbe795"
        },
        "sysemployeegridview": {
            "title": "人员表格视图",
            "caption": "人员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "SysEmployeeGridView",
            "viewtag": "40fe6b28b9f7902341da46bb74a02d59"
        },
        "doclibeditview": {
            "title": "创建文档库",
            "caption": "文档库",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibEditView",
            "viewtag": "41693a4d3b2bd3a7195d31ceae6cdcf3"
        },
        "caseexceditview": {
            "title": "执行结果",
            "caption": "执行结果",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseExcEditView",
            "viewtag": "41f6cc75f6e3b4419a448eebe69aa6ac"
        },
        "bugstatsbugresolvedbygridview": {
            "title": "Bug统计表格视图（Bug完成表）",
            "caption": "Bug完成表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugStatsBugResolvedByGridView",
            "viewtag": "42bcda6d6a7f1b04456c358f942ef63e"
        },
        "ibzmyterritorylistview": {
            "title": "欢迎",
            "caption": "欢迎",
            "viewtype": "DELISTVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryListView",
            "viewtag": "4325d3976077669f84c1e4b27482ae73"
        },
        "buildoptionview": {
            "title": "版本选项操作视图",
            "caption": "版本",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "BuildOptionView",
            "viewtag": "447425cc12894f89203d0e693baf3ee7"
        },
        "productstatsusr2gridviewproductcomplete": {
            "title": "产品统计表格视图",
            "caption": "产品统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductStatsUsr2GridViewPRoductComplete",
            "viewtag": "447e12e8af1b4093ba48f74d18d71c08"
        },
        "docgridview": {
            "title": "doc表格视图",
            "caption": "文档",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DocGridView",
            "viewtag": "4503911318e1f1f26599b68a6c6e681d"
        },
        "sysorganizationeditview": {
            "title": "单位编辑视图",
            "caption": "单位",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "SysOrganizationEditView",
            "viewtag": "456373e5385deb29b6863c5a22c8a29a"
        },
        "bugeditview": {
            "title": "Bug",
            "caption": "Bug",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugEditView",
            "viewtag": "46517a803b2470cd0bef27aeda0dbcaf"
        },
        "sysupdatefeatureseditview": {
            "title": "系统更新功能编辑视图",
            "caption": "系统更新功能",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateFeaturesEditView",
            "viewtag": "46c538b1900cfe9c17255ccbe6a1285b"
        },
        "buildmainview": {
            "title": "版本编辑视图",
            "caption": "版本",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BuildMainView",
            "viewtag": "4754e81c870c007c624c850adffa3de9"
        },
        "testreportgridview": {
            "title": "测试报告表格视图",
            "caption": "测试报告",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportGridView",
            "viewtag": "48600bd551aa923b5fceabcb83f65239"
        },
        "storyeditview": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryEditView",
            "viewtag": "4863a523ac490ebce771717756f0c6a8"
        },
        "taskassignedtotaskgroupgridview": {
            "title": "任务表格视图（指派分组）",
            "caption": "指派分组",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskAssignedtoTaskGroupGridView",
            "viewtag": "4897b52ab790f5ab1425cf59f32cddbe"
        },
        "bugplansubgridview": {
            "title": "Bug",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugPlanSubGridView",
            "viewtag": "489b7ae9d631f1f2d6f52bbefdb99ced"
        },
        "storyprojectplanview": {
            "title": "按照计划关联",
            "caption": "按照计划关联",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryProjectPlanView",
            "viewtag": "48cbb418a5d2a5597a66cd72581bd32c"
        },
        "bugcloseview": {
            "title": "关闭Bug",
            "caption": "关闭Bug",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "BugCloseView",
            "viewtag": "490e98255c18ceb61481b97a9dff940d"
        },
        "releasemaininfoview": {
            "title": "发布编辑视图",
            "caption": "发布",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ReleaseMainInfoView",
            "viewtag": "493784309010796dcd5e4839f7e8934f"
        },
        "projectstatsprojectstorystagestatusgridview": {
            "title": "项目统计表格视图",
            "caption": "项目需求阶段统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsProjectStoryStageStatusGridView",
            "viewtag": "4996bbd9b7bd9c0e80dfdf952308bf9c"
        },
        "usercontactgridexpview": {
            "title": "用户联系方式表格导航视图",
            "caption": "用户联系方式",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "UserContactGridExpView",
            "viewtag": "4a012e784384c1f4ec3b0150e0885018"
        },
        "systeamgridexpview": {
            "title": "组表格导航视图",
            "caption": "组",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamGridExpView",
            "viewtag": "4a861140b27c2972c173b07a4d00b7e1"
        },
        "taskgridview": {
            "title": "任务表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskGridView",
            "viewtag": "4b01c8ae7e7e23b9c67dbca2ee90e41b"
        },
        "doclibmoduleeditview2": {
            "title": "文档库分类编辑视图",
            "caption": "文档库分类",
            "viewtype": "DEEDITVIEW2",
            "viewmodule": "zentao",
            "viewname": "DocLibModuleEditView2",
            "viewtag": "4b13c4efc8fe3e2b2b68c34e7604474e"
        },
        "taskzsgridview9week": {
            "title": "任务表格视图（展示）",
            "caption": "展示",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskZsGridView9Week",
            "viewtag": "4b619aaffc27d96024f58edab6738bdf"
        },
        "projectgridviewemp": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectGridViewEMp",
            "viewtag": "4c2040e690ea12ee2f937e84c448aad2"
        },
        "casemodulechartview9": {
            "title": "测试用例图表视图（模块）",
            "caption": "模块",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseModuleChartView9",
            "viewtag": "4c2ac32b9d6381dd9a3f60c556e5e0f7"
        },
        "testtaskcalendareditview": {
            "title": "测试版本编辑视图（日历导航）",
            "caption": "日历导航",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskCalendarEditView",
            "viewtag": "4ca62d1d57870e4f290ae66f0eff59ac"
        },
        "testtaskmaintabexpview": {
            "title": "测试版本分页导航视图",
            "caption": "测试版本",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskMainTabExpView",
            "viewtag": "4e229fd1de7c3b68c2a18a3d16916d61"
        },
        "bugbugkanbanview": {
            "title": "Bug看板视图",
            "caption": "Bug实体看板视图",
            "viewtype": "DEKANBANVIEW",
            "viewmodule": "zentao",
            "viewname": "BugBugKanbanView",
            "viewtag": "4eab91076167a1215a6cbe746eb8033f"
        },
        "sysemployeeeditviewbasicinfo": {
            "title": "人员编辑视图",
            "caption": "人员",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "SysEmployeeEditViewBasicInfo",
            "viewtag": "4eec8bab9a7a03f86c72ec576cc7a70a"
        },
        "taskmainmygridview": {
            "title": "任务表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskMainMyGridView",
            "viewtag": "4f82827cafa5f802e5109bbcb9efa9f8"
        },
        "tasktodoeditview": {
            "title": "任务编辑视图",
            "caption": "待办转任务",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskTodoEditView",
            "viewtag": "4f94ec3ac2a019aeeca8a8fee6fda464"
        },
        "ibizproindexlistview": {
            "title": "索引检索列表视图",
            "caption": "索引检索",
            "viewtype": "DELISTVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproIndexListView",
            "viewtag": "50f82495ceeaf8439cd7626c264176a4"
        },
        "productstatsgridview9": {
            "title": "产品统计表格视图",
            "caption": "产品统计",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProductStatsGridView9",
            "viewtag": "517ea7e243fcbce57c081f824d5eb013"
        },
        "projectcurproductgridview": {
            "title": "project表格视图",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectCurProductGridView",
            "viewtag": "522b28992d16207a0fc47340589bb2cf"
        },
        "productmodulegridview": {
            "title": "产品模块表格视图",
            "caption": "需求模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductModuleGridView",
            "viewtag": "523abe6eb852ca08fe4a3c140ff47b42"
        },
        "ibizprotaggridview": {
            "title": "标签表格视图",
            "caption": "标签",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "IBIZProTagGridView",
            "viewtag": "526b0387339347f59f40b6ab23e4933f"
        },
        "testreporteditview_r": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportEditView_R",
            "viewtag": "52821aa021e3efa8bc47b4cc4bfc7302"
        },
        "taskstoryneweditview": {
            "title": "任务编辑视图",
            "caption": "任务",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskStoryNewEditView",
            "viewtag": "52a6a2a4e6961e9fe8c7f07df59309d0"
        },
        "useryearworkstatsinfoeditview9": {
            "title": "用户年度工作内容统计编辑视图（基础信息）",
            "caption": "基础信息",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "UserYearWorkStatsInfoEditView9",
            "viewtag": "5385220d8899d656e61e6eee39752bd8"
        },
        "storymainview9_editmode": {
            "title": "需求编辑视图",
            "caption": "需求",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryMainView9_EditMode",
            "viewtag": "538555af88ea31549a5bc7dbf1e6286a"
        },
        "taskestimatelookgridview9": {
            "title": "任务预计表格视图",
            "caption": "工时",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskEstimateLookGridView9",
            "viewtag": "53ea134a9cd9328191b62e355f47c173"
        },
        "bugtasktobugeditview": {
            "title": "Bug",
            "caption": "Bug",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugTaskToBugEditView",
            "viewtag": "54638099445607e6cb16757f25193b2f"
        },
        "bugactivationview": {
            "title": "激活Bug",
            "caption": "激活Bug",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "BugActivationView",
            "viewtag": "54e3465c19bb1859f24cea9b31e3b24a"
        },
        "casestatstestcasestatsgridview": {
            "title": "测试用例统计表格视图",
            "caption": "用例统计表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "CaseStatsTestCaseStatsGridView",
            "viewtag": "551947ec5cc35c89fa33deeac4fd3696"
        },
        "casestepcarryouteditmode": {
            "title": "用例步骤",
            "caption": "用例步骤",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseStepCarryOutEditMode",
            "viewtag": "5547049c1d6358d5b318c5034e1fef13"
        },
        "testtaskmaindashboardview": {
            "title": "测试版本数据看板视图",
            "caption": "测试版本",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskMainDashboardView",
            "viewtag": "55a8c0becc39a06b6b107d1bb4dbdcb9"
        },
        "doclibpickupgridview": {
            "title": "doclib选择表格视图",
            "caption": "文档库",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibPickupGridView",
            "viewtag": "55bd8c58b38da929d22edff6aa724ca0"
        },
        "sysemployeeusr3gridview": {
            "title": "人员表格视图",
            "caption": "人员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysEmployeeUsr3GridView",
            "viewtag": "5650afd43224f6efbe40e5b883d0f0ea"
        },
        "projectmoduletreeexpview": {
            "title": "任务模块树导航视图",
            "caption": "任务模块",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectModuleTreeExpView",
            "viewtag": "568ff596b43788b813249f6aa22443c0"
        },
        "storypickupgridview": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryPickupGridView",
            "viewtag": "569cd532c6b545ffc53cf5fb93427028"
        },
        "ibzmyterritoryproductreporttabexpview": {
            "title": "我的地盘分页导航视图",
            "caption": "产品",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "report",
            "viewname": "IbzMyTerritoryProductReportTabExpView",
            "viewtag": "56d37c4b5c3583dd1197209e46f06873"
        },
        "taskmaindashboardview": {
            "title": "任务主数据看板视图",
            "caption": "任务",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskMainDashboardView",
            "viewtag": "575fecad655143bbd28f17c581725a4e"
        },
        "casegridview9_storyrelated": {
            "title": "相关用例",
            "caption": "相关用例",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseGridView9_StoryRelated",
            "viewtag": "578d2fd4888ee9b9a2d87ff640e786cd"
        },
        "testtaskactiviteoptionview": {
            "title": "激活",
            "caption": "激活",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskActiviteOptionView",
            "viewtag": "57c9e45f8ccb4c4622a567a88e779182"
        },
        "userpickupview": {
            "title": "用户数据选择视图",
            "caption": "用户",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "UserPickupView",
            "viewtag": "57e77f1cea8cff268fbd744f326867fb"
        },
        "productprojectgridview9": {
            "title": "产品表格视图（项目）",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProductProjectGridView9",
            "viewtag": "581084cd753b743ee95f85d6b2ee472c"
        },
        "ibzmonthlymyreceivedgridview": {
            "title": "月报表格视图",
            "caption": "月报实体表格视图",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzMonthlyMyReceivedGridView",
            "viewtag": "581145d8c4bc3c651356a6ef9a4c0da8"
        },
        "testtaskstartoptionview": {
            "title": "开始",
            "caption": "开始",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskStartOptionView",
            "viewtag": "5819d04a7d331ae7399e251d7a35183c"
        },
        "companydeptusertreeexpview": {
            "title": "组织部门人员树导航视图",
            "caption": "公司",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "CompanyDeptUserTreeExpView",
            "viewtag": "589b2861c47f3acccf56c9c2dff633f6"
        },
        "productstorytreeexpview": {
            "title": "产品需求导航视图",
            "caption": "产品",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductStoryTreeExpView",
            "viewtag": "58a943454a652d4f4ce2702d6447c079"
        },
        "buggridview9_storyformbug": {
            "title": "来源Bug",
            "caption": "来源Bug",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "BugGridView9_StoryFormBug",
            "viewtag": "58c48ed7c9b66ea86309ed8ef86a7cc6"
        },
        "testreporteditview_testrange": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportEditView_TestRange",
            "viewtag": "5918176ed83c3a3809e0b822a2823d7d"
        },
        "projectstatsprojectprogressusr2gridview": {
            "title": "项目进度表格视图",
            "caption": "项目统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsProjectProgressUsr2GridView",
            "viewtag": "595377d5c94799083b6ba5d33f2dfcee"
        },
        "doclibgridview": {
            "title": "doclib表格视图",
            "caption": "文档库",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibGridView",
            "viewtag": "599bad7e939d0de2523f0fcf4444f8c7"
        },
        "storympickupview2": {
            "title": "关联需求",
            "caption": "关联需求",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMPickupView2",
            "viewtag": "59c086d1e5ae60bb636bcc1e41d83bc8"
        },
        "bugstatsproductbugresolutiongridview": {
            "title": "Bug统计表格视图",
            "caption": "产品Bug解决方案汇总",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugStatsProductBugResolutionGridView",
            "viewtag": "59f7278a2d42e40c347241347f1c954b"
        },
        "ibzcasenewediteditview9": {
            "title": "用例库用例编辑视图（创建编辑）",
            "caption": "创建编辑",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "IbzCaseNewEditEditView9",
            "viewtag": "5a2461765fd92788e6946206d6baec7e"
        },
        "doclibcustomdoclibroottreeview": {
            "title": "文档库树视图（自定义文档库-根目录）",
            "caption": "自定义文档库-根目录",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibCustomDocLibRootTreeView",
            "viewtag": "5a24e720bd90bc9d623958f13ffff4d8"
        },
        "ibzmyterritorytesttreeexpview": {
            "title": "我的地盘树导航视图（测试统计）",
            "caption": "测试统计",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryTestTreeExpView",
            "viewtag": "5a30c1b325586147f06e65667a7464e9"
        },
        "taskworkinfoeditview9": {
            "title": "工时信息",
            "caption": "工时信息",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskWorkInfoEditView9",
            "viewtag": "5a54fcd3bab135a3c9530a67710c5af7"
        },
        "projectpickupview": {
            "title": "项目数据选择视图",
            "caption": "项目",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectPickupView",
            "viewtag": "5a8a29268a7563b62fc0160233958830"
        },
        "testtaskeditview": {
            "title": "测试单编辑视图",
            "caption": "测试版本",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskEditView",
            "viewtag": "5b139a407fa34f386f3f784f33841184"
        },
        "sysupdatefeatureslastgridview": {
            "title": "系统更新功能表格视图",
            "caption": "系统更新功能",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateFeaturesLastGridView",
            "viewtag": "5b49b6ae358e53f7b16f6d431213aeb1"
        },
        "taskclosetaskview": {
            "title": "关闭任务",
            "caption": "关闭任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskCloseTaskView",
            "viewtag": "5b843e1de0332a77a847782432d7a40d"
        },
        "productgridview_unclosed": {
            "title": "产品表格视图",
            "caption": "未关闭产品",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductGridView_UnClosed",
            "viewtag": "5b8fe24966d2257379bc14443cc9174a"
        },
        "ibzlibmodulegridview": {
            "title": "用例库模块表格视图",
            "caption": "用例库模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzLibModuleGridView",
            "viewtag": "5be102d3e47fd3d8e2a2f43676a48a6f"
        },
        "testreportprojectmainediteditview": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportProjectMainEditEditView",
            "viewtag": "5c35625a01ca63d6e2c2c6c9ac3dd231"
        },
        "taskcalendareditview": {
            "title": "任务编辑视图（日历航显示）",
            "caption": "日历航显示",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskCalendarEditView",
            "viewtag": "5c702098d5b244f7e5f0676c7213f160"
        },
        "ibzmyterritoryprojectreporttabexpview": {
            "title": "我的地盘分页导航视图",
            "caption": "项目",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "report",
            "viewname": "IbzMyTerritoryProjectReportTabExpView",
            "viewtag": "5c9989624fec0b4edbf2619f3692cbcc"
        },
        "storycloseview": {
            "title": "需求关闭",
            "caption": "需求关闭",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryCloseView",
            "viewtag": "5d15dd63b8e4c48a6d5e7cca6b5308cc"
        },
        "doclibmodulepickupview": {
            "title": "文档库分类数据选择视图",
            "caption": "文档库分类",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibModulePickupView",
            "viewtag": "5d20314eb2b9b1bbcd215d534b7886c4"
        },
        "storymainview9_related": {
            "title": "需求编辑视图",
            "caption": "需求",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryMainView9_Related",
            "viewtag": "5d2060546043b483498845da6eb440d9"
        },
        "ibzprostorygridview": {
            "title": "需求表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IBZProStoryGridView",
            "viewtag": "5dd9995bc2f20c5e5cc434cfbcf50c8e"
        },
        "docdocmodulegridview": {
            "title": "doc表格视图",
            "caption": "文档",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DocDocModuleGridView",
            "viewtag": "5e00df2c275207d793755405f24a2c75"
        },
        "testreportdashboardview": {
            "title": "测试报告数据看板视图",
            "caption": "测试报告",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportDashboardView",
            "viewtag": "5ed21dac1de1e5a827be66ffcc061668"
        },
        "buggridview9_storyaffect": {
            "title": "相关Bug",
            "caption": "相关Bug",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "BugGridView9_Storyaffect",
            "viewtag": "5eeecfcd239a98f93fb8f322d3470d76"
        },
        "tasktasktypeganttview": {
            "title": "任务甘特视图",
            "caption": "任务",
            "viewtype": "DEGANTTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskTaskTypeGanttView",
            "viewtag": "5ef23f01b2cffa48351b3272dfeeaf14"
        },
        "systeameditview": {
            "title": "组编辑视图",
            "caption": "组",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamEditView",
            "viewtag": "5f46660051966f3e0b4c377decd638b1"
        },
        "taskpickupview": {
            "title": "task数据选择视图",
            "caption": "任务",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "ibiz",
            "viewname": "TaskPickupView",
            "viewtag": "601588ff1c189387e79d24286c2a242e"
        },
        "projectplanaddeditview": {
            "title": "项目编辑视图（计划添加）",
            "caption": "项目",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectPlanAddEditView",
            "viewtag": "610615b622efc779ffad42a385633be9"
        },
        "casecasefavorite": {
            "title": "case我得收藏",
            "caption": "测试用例",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseCaseFavorite",
            "viewtag": "614186fc9cf2813c6ae2fd99ad3116b9"
        },
        "bugmyfavoritegridview": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugMyFavoriteGridView",
            "viewtag": "614209b95b3f796e655e0532af93b336"
        },
        "tododashboardview": {
            "title": "待办事宜表数据看板视图",
            "caption": "待办",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "TodoDashboardView",
            "viewtag": "61d2ee8616572ff282d832653d6e8461"
        },
        "casetobugeditview": {
            "title": "转BUG",
            "caption": "转BUG",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseToBugEditView",
            "viewtag": "61eeda70f76acc759232dae5b6e56324"
        },
        "sysupdateloggridview": {
            "title": "系统更新日志表格视图",
            "caption": "更新日志",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateLogGridView",
            "viewtag": "629dda75fa1c847582f36c3e496785f2"
        },
        "bugreleasesubgridview_undone": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugReleaseSubGridView_Undone",
            "viewtag": "62d336dafb3ab2022a6f61fa06d7a1ef"
        },
        "actionhistorylistview": {
            "title": "历史记录",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionHistoryListView",
            "viewtag": "63a73a2e80dc47c05dd3ead4f03ae3c3"
        },
        "bugstepsinfoeditview": {
            "title": "Bug编辑视图",
            "caption": "重现步骤",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugStepsInfoEditView",
            "viewtag": "64c5e35f0b058ff8108bbbbd22efc684"
        },
        "sysorganizationgridview": {
            "title": "单位表格视图",
            "caption": "单位",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysOrganizationGridView",
            "viewtag": "64f014192d8afcee483c623ee8a2b07b"
        },
        "testmodulegridviewbranch": {
            "title": "产品模块表格视图",
            "caption": "测试模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "TestModuleGridViewBranch",
            "viewtag": "65129e5f76f96cbb1d2d1c9e9bb2afed"
        },
        "docmianbeditview9": {
            "title": "文档编辑视图（正文）",
            "caption": "正文",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "DocMianBEditView9",
            "viewtag": "6524537caa86877c2028a06c2665617e"
        },
        "ibzprostorymodulegridview": {
            "title": "需求模块表格视图",
            "caption": "需求模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IBZProStoryModuleGridView",
            "viewtag": "6755a09a663758198e6cf5db0c606549"
        },
        "casemaingridview": {
            "title": "功能测试",
            "caption": "功能测试",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseMainGridView",
            "viewtag": "67e563d0c1aa847ce14c4bb6be664dbb"
        },
        "storygridview9_assignedtome": {
            "title": "需求表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryGridView9_AssignedToMe",
            "viewtag": "680d5889e78ea2e379d1601c7ed66711"
        },
        "projectmoreundoneprogridview": {
            "title": "项目表格视图",
            "caption": "未完成项目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectMoreUndoneProGridView",
            "viewtag": "6810a2dbf9b6a59442db47f67088448c"
        },
        "casetestoptionview": {
            "title": "执行",
            "caption": "执行",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseTestOptionView",
            "viewtag": "6895fea07a2489f404d895d6746ae7b8"
        },
        "ibzplantempleteditview": {
            "title": "产品计划模板编辑视图",
            "caption": "计划模板",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbzPlanTempletEditView",
            "viewtag": "69072c07c875fb2f422378235b85ba69"
        },
        "productwizardview": {
            "title": "产品向导视图",
            "caption": "产品",
            "viewtype": "DEWIZARDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductWizardView",
            "viewtag": "69d993ce839b524a02ed3af4ab24fea4"
        },
        "sysupdatefeaturesinfoeditview": {
            "title": "系统更新功能编辑视图",
            "caption": "系统更新功能",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateFeaturesInfoEditView",
            "viewtag": "69f603bbdaf1463452fe56bbd20aefcc"
        },
        "bugstatsbugresolvetion": {
            "title": "每个解决方案的Bug数统计表格视图",
            "caption": "Bug统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugStatsBUGRESOLVETION",
            "viewtag": "6a091692c083aec8a848440842aa2343"
        },
        "doclibprojecttreeview": {
            "title": "文档库树视图",
            "caption": "项目",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibProjectTreeView",
            "viewtag": "6a15e6815011030492acf5fa6d8dd3af"
        },
        "taskstorysubtasknewview": {
            "title": "需求批量分解",
            "caption": "需求批量分解",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskStorySubTaskNewView",
            "viewtag": "6a189c117bb2ba89148b30630a785736"
        },
        "ibzweeklyusr2editview": {
            "title": "周报编辑视图",
            "caption": "周报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzWeeklyUsr2EditView",
            "viewtag": "6a298e81fa0ad8687b47f7e2f99ff4a0"
        },
        "producttestlistexpview": {
            "title": "测试统计",
            "caption": "产品",
            "viewtype": "DELISTEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductTestListExpView",
            "viewtag": "6b595fd11428565335f1d1bbd66911bb"
        },
        "projectgridview9": {
            "title": "项目表格视图",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectGridView9",
            "viewtag": "6c2a0306865904de97c8482291e72235"
        },
        "productmaintabexpview": {
            "title": "产品",
            "caption": "产品",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductMainTabExpView",
            "viewtag": "6c7b582273d0726bcf77214807cfe40c"
        },
        "storyassigntoview": {
            "title": "指派",
            "caption": "指派",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryAssignToView",
            "viewtag": "6c8c8b96f11e8906ae6b5ab3e029f5d4"
        },
        "actionaddcommenthistorylistview": {
            "title": "历史记录",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionAddCommentHistoryListView",
            "viewtag": "6cc53210af0a1b521a3fbf7263c94a7b"
        },
        "systeammembergridexpview": {
            "title": "组成员表格导航视图",
            "caption": "组成员",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamMemberGridExpView",
            "viewtag": "6cd4488bcc889f01236d20be8d2f5786"
        },
        "testtaskprojectgridview": {
            "title": "测试单表格视图（项目）",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskProjectGridView",
            "viewtag": "6d4f6fec471305827d450bf4f55406ae"
        },
        "ibizproindexindexpickupview": {
            "title": "索引检索数据选择视图",
            "caption": "索引检索",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproIndexIndexPickupView",
            "viewtag": "6dec69ecabb41af1b4fffe82c077724a"
        },
        "useryearworkstatspodashboardview": {
            "title": "用户年度工作内容统计数据看板视图",
            "caption": "用户年度工作内容统计",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "ibiz",
            "viewname": "UserYearWorkStatsPODashboardView",
            "viewtag": "6e0ad417e9fe2138d57f5e9e6a2e3b32"
        },
        "taskcanceltaskview": {
            "title": "取消任务",
            "caption": "取消任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskCancelTaskView",
            "viewtag": "6e1e2145a5e4622fb1936fe37f6d07e7"
        },
        "docmoremyfavouritestreeview": {
            "title": "文档树视图",
            "caption": "我的收藏",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocMoreMyFavouritesTreeView",
            "viewtag": "6e45dce2ca6fc6fe33d488f8fd03ed69"
        },
        "storymainmygridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMainMyGridView",
            "viewtag": "6e8547a8df9f3446ba50dd979cc05a36"
        },
        "casemainnewview": {
            "title": "功能测试",
            "caption": "功能测试",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseMainNewView",
            "viewtag": "6e8645d9fed039c0d242e50504074fb8"
        },
        "testtaskprojectneweditview": {
            "title": "测试单编辑视图",
            "caption": "提交测试",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskProjectNewEditView",
            "viewtag": "6f5b8ebffda0c9f3f83f5f59b5b80d81"
        },
        "bugtestreportsubgridview": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugTestReportSubGridView",
            "viewtag": "6f90a9ed63f9dcec5758480a76e2680c"
        },
        "storytabexpview": {
            "title": "需求分页导航视图",
            "caption": "需求",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryTabExpView",
            "viewtag": "70bca4903c16f4c15bb3b73b570ce8a2"
        },
        "testtaskeditview9_info": {
            "title": "测试版本编辑视图",
            "caption": "测试版本",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestTaskEditView9_Info",
            "viewtag": "70c1b45e198da89f71004066e0b148ac"
        },
        "doclibmoduleeditview": {
            "title": "文档库分类编辑视图",
            "caption": "文档库分类",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibModuleEditView",
            "viewtag": "70c256f328fb14ef9f4bbbe8158d2053"
        },
        "actionalltrendslistview": {
            "title": "系统日志列表视图",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionAllTrendsListView",
            "viewtag": "70e2ee8b5984efea86c2fe570a24918c"
        },
        "productplansubplangridview": {
            "title": "子计划",
            "caption": "子计划",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanSubPlanGridView",
            "viewtag": "71144df81858a48d4b9bdf84990bd663"
        },
        "companystatscompanydynamicstatsgridview": {
            "title": "公司动态汇总表格视图",
            "caption": "公司动态统计表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "CompanyStatsCompanyDynamicStatsGridView",
            "viewtag": "711be2d831ff79f103294323c3389346"
        },
        "testmodulepickupgridview": {
            "title": "测试模块选择表格视图",
            "caption": "测试模块",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TestModulePickupGridView",
            "viewtag": "71301b58b287ea40f5bf08232b7465ed"
        },
        "productplanmaintabexp": {
            "title": "计划",
            "caption": "产品计划",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanMainTabExp",
            "viewtag": "71783da0ead01eb923f1fc52b99946de"
        },
        "storyreviewview": {
            "title": "需求评审",
            "caption": "需求评审",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryRevIewView",
            "viewtag": "721471752350ebaf6b7c6019341a9960"
        },
        "sysemployeegridexpviewprojectmember": {
            "title": "人员表格导航视图",
            "caption": "人员",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "SysEmployeeGridExpViewProjectMember",
            "viewtag": "725bda9b64e41595bdb7bca3385b73d5"
        },
        "productplansubplancreateview": {
            "title": "计划",
            "caption": "产品计划",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanSubPlanCreateView",
            "viewtag": "727ff5c540998137c588dff49ca7f17b"
        },
        "syspostusr2gridview": {
            "title": "岗位表格视图",
            "caption": "岗位",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysPostUsr2GridView",
            "viewtag": "732b44cbc53ba765decbfa3866f1751b"
        },
        "taskactivationtaskview": {
            "title": "激活任务",
            "caption": "激活任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskActivationTaskView",
            "viewtag": "739a21af264eba875d924856436a293a"
        },
        "productstatsgridviewproducntinputtable": {
            "title": "产品统计表格视图",
            "caption": "产品统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductStatsGridViewProducntInputTable",
            "viewtag": "73ac6f2f21fd9611866285bc798ec57f"
        },
        "useryearworkstatsqadashboardview": {
            "title": "用户年度工作内容统计数据看板视图",
            "caption": "用户年度工作内容统计",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "ibiz",
            "viewname": "UserYearWorkStatsQADashboardView",
            "viewtag": "73c630ad73ee5b10d79c36c91df91b39"
        },
        "testresulteditview9": {
            "title": "测试结果编辑视图",
            "caption": "测试结果",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestResultEditView9",
            "viewtag": "741948bde940303ad18fe33ff1727894"
        },
        "projectteamlistview": {
            "title": "项目团队列表视图",
            "caption": "项目团队",
            "viewtype": "DELISTVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectTeamListView",
            "viewtag": "753d59ea09ed63ba3e2aebe7d463abe7"
        },
        "ibzmyterritoryusersumtreeexpview": {
            "title": "我的地盘树导航视图",
            "caption": "用户汇总表",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryUserSumTreeExpView",
            "viewtag": "754505eb2d18f5f8cfa4e41911ce79ef"
        },
        "productchartview": {
            "title": "产品图表视图",
            "caption": "产品",
            "viewtype": "DECHARTVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductChartView",
            "viewtag": "7588ac8608220bbc97176e29408dab9d"
        },
        "storyusr2mpickupview": {
            "title": "发布下属需求数据多项选择视图",
            "caption": "需求",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryUsr2MPickupView",
            "viewtag": "75ae15f558d6ead18f9a0ec0a86ac74c"
        },
        "testreportmaintabexpview": {
            "title": "测试报告分页导航视图",
            "caption": "测试报告",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportMainTabExpView",
            "viewtag": "75ed4f97abd716a65004e1e71eba3071"
        },
        "ibzdailydailyinfocalendareditview": {
            "title": "日报编辑视图(日历显示)",
            "caption": "日报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzDailyDailyInfoCalendarEditView",
            "viewtag": "76003f5bfdaf10f360db4f5931c37916"
        },
        "projecteditview_close": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectEditView_Close",
            "viewtag": "765ac84633091fcfae4526324ff4ebac"
        },
        "storymaingridview_bymodule": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMainGridView_ByModule",
            "viewtag": "76f44a934f683dcca5a9e57f2a027670"
        },
        "doclibmodulempickupview": {
            "title": "文档库分类数据多项选择视图",
            "caption": "文档库分类",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibModuleMPickupView",
            "viewtag": "772183dd8b56726a9330fe9e71b52d14"
        },
        "branchpmgridview": {
            "title": "平台管理",
            "caption": "平台管理",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BranchPMGridView",
            "viewtag": "776ea44ea05316c9c6cb9d5948e993f9"
        },
        "storygridview9_related": {
            "title": "相关需求",
            "caption": "相关需求",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryGridView9_Related",
            "viewtag": "78095af71f8ae9c432f8a6f3656f90b9"
        },
        "testtaskmyygridview": {
            "title": "测试单表格视图",
            "caption": "测试版本",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskMyYGridView",
            "viewtag": "781cd3123dfa8904727b8e9f3b0ff064"
        },
        "storymainview9_storyspec": {
            "title": "需求编辑视图",
            "caption": "需求",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryMainView9_StorySpec",
            "viewtag": "78b241110616763b80cdedfcf64d16ee"
        },
        "docgridview10": {
            "title": "文档表格视图",
            "caption": "最近更新",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibiz",
            "viewname": "DocGridView10",
            "viewtag": "797826f1129aa16855df1cb92ffe106d"
        },
        "testtaskcloseoptionview": {
            "title": "关闭",
            "caption": "关闭",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskCloseOptionView",
            "viewtag": "797e02cfcd15005ee6bc427b2860e845"
        },
        "ibzweeklyeditviewmainmyweekly": {
            "title": "实体2编辑视图",
            "caption": "周报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzWeeklyEditViewMainMyweekly",
            "viewtag": "7985d4cefde824cfff112697b07b60c6"
        },
        "ibzmonthlynewmonthlyeditview": {
            "title": "月报编辑视图",
            "caption": "月报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzMonthlyNewMonthlyEditView",
            "viewtag": "7a308a89605e16def8311de4ffa7a3eb"
        },
        "testsuiteeditview": {
            "title": "测试套件编辑视图",
            "caption": "测试套件",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestSuiteEditView",
            "viewtag": "7a983ef690626958a9897f58efe15e58"
        },
        "todocalendareditview": {
            "title": "待办编辑视图（日历导航）",
            "caption": "待办",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TodoCalendarEditView",
            "viewtag": "7b10b27b6654a0d42897b8df0025989d"
        },
        "caselinkcasegridview": {
            "title": "测试用例表格视图（关联用例）",
            "caption": "关联用例",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseLinkCaseGridView",
            "viewtag": "7b7e9a3fb6ab91e52db487e8ec9b8987"
        },
        "modulegridview": {
            "title": "模块",
            "caption": "模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ModuleGridView",
            "viewtag": "7bbf35767e7763b69ad6acd4b06c06d1"
        },
        "moduletreeexpview": {
            "title": "所有产品",
            "caption": "所有产品",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ModuleTreeExpView",
            "viewtag": "7bc0775a369022d32b5cc9ffc603c54e"
        },
        "projecteditview_putoff": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectEditView_Putoff",
            "viewtag": "7c19182192fc3a1406b9cfcad17706cc"
        },
        "ibzmonthlymainmonthlygridview": {
            "title": "月报表格视图",
            "caption": "月报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzMonthlyMainMonthlyGridView",
            "viewtag": "7c509954bcc0516db88536ea91442adf"
        },
        "projectleftsidebarlistview": {
            "title": "所有项目",
            "caption": "项目",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectLeftSidebarListView",
            "viewtag": "7c79a923d0cdd1a5bc41a34367809077"
        },
        "caserunerentrygridview": {
            "title": "测试用例表格视图（测试结果条目）",
            "caption": "测试结果条目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseRUNEREntryGridView",
            "viewtag": "7c7a3780d5bf116e9f92a177fc612dcb"
        },
        "doclibbyprojecttreeexpview": {
            "title": "文档库树导航视图（项目下属）",
            "caption": "项目下属文档库",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocLibByProjectTreeExpView",
            "viewtag": "7c9b36b546bad33d8acff71657cf73a0"
        },
        "productgridview": {
            "title": "所有产品",
            "caption": "所有产品",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductGridView",
            "viewtag": "7caeaef893043533e8f388d25523328c"
        },
        "taskreportmpickupview": {
            "title": "任务数据多项选择视图（汇报）",
            "caption": "汇报",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskreportMPickupView",
            "viewtag": "7cbf93562fd10b1449bfd339e0c51344"
        },
        "caseresultentrygridview": {
            "title": "测试用例表格视图（测试结果条目）",
            "caption": "测试结果条目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseresultEntryGridView",
            "viewtag": "7cf8a2ac77466f9315cc774713908630"
        },
        "docliblibtabexpview": {
            "title": "文档库分页导航视图（文档）",
            "caption": "文档库主页",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibLibTabExpView",
            "viewtag": "7cfc48856417e4a8740c3d82334f88c9"
        },
        "actionprojecttrendslistview": {
            "title": "系统日志列表视图",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionProjectTrendsListView",
            "viewtag": "7d34636d1c24d613abf8d3fdc64ec7ba"
        },
        "ibizproindexredirectview": {
            "title": "索引检索数据重定向视图",
            "caption": "索引检索",
            "viewtype": "DEREDIRECTVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproIndexRedirectView",
            "viewtag": "7d853e570eb4eba3bc754fa77bf75844"
        },
        "productpickupview": {
            "title": "产品数据选择视图",
            "caption": "产品",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPickupView",
            "viewtag": "7df0f0deee91304e0350f00baa8a92d6"
        },
        "storymainview_editmode": {
            "title": "需求数据看板视图",
            "caption": "需求",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMainView_EditMode",
            "viewtag": "7e14015af219d302f7d81ff40cdcc418"
        },
        "fileprojectgridviewfile": {
            "title": "file表格视图",
            "caption": "附件",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "FileProjectGridViewFile",
            "viewtag": "7ef300c01cce979e53218b74c8243d2a"
        },
        "buildmaintabexpview": {
            "title": "版本分页导航视图",
            "caption": "版本",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "BuildMainTabExpView",
            "viewtag": "7f78aec6820c14e08caf8fa56087866f"
        },
        "sysupdateloglasttabexpview": {
            "title": "系统更新日志分页导航视图",
            "caption": "更新日志",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateLogLastTabExpView",
            "viewtag": "7fe32344f7079d3359213223f8c3f63f"
        },
        "doclibusr2editview": {
            "title": "文档库编辑视图",
            "caption": "文档库",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibUsr2EditView",
            "viewtag": "80df4b7b0e149f1b3d38d4cf9df1b81c"
        },
        "casetestmaindetaileditview9": {
            "title": "测试用例编辑视图",
            "caption": "测试用例",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseTestMainDetailEditView9",
            "viewtag": "8135f7f81658710c74efc351f8d01237"
        },
        "productplangridview": {
            "title": "产品计划表格视图",
            "caption": "产品计划",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanGridView",
            "viewtag": "81b0cee2fedff8f4902c0d735714e5af"
        },
        "deptinfoeditview": {
            "title": "部门编辑视图",
            "caption": "部门信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "DeptInfoEditView",
            "viewtag": "81cae02de02ebceae718304aba49c78a"
        },
        "ibzagentcreateeditview": {
            "title": "代理编辑视图",
            "caption": "代理编辑视图",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzAgentCreateEditView",
            "viewtag": "821253e790f5c38ff3e995117cf457bc"
        },
        "storycurprojectwgridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryCurProjectWGridView",
            "viewtag": "8263c5b2f9a9e0cbbbdf2f72e194a5a8"
        },
        "storympickupview3": {
            "title": "关联需求",
            "caption": "关联需求",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMPickupView3",
            "viewtag": "82bee6f0e3c563cc77e6e915c3c30336"
        },
        "dockeditview9": {
            "title": "文档编辑视图（关键字）",
            "caption": "关键字",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "DocKEditView9",
            "viewtag": "82c6ad02ac6082c71d742df0460a93e2"
        },
        "bugstatsbugresolvedbygridviewzuzhi": {
            "title": "Bug统计表格视图（Bug完成表）",
            "caption": "Bug完成表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugStatsBugResolvedByGridViewZuZhi",
            "viewtag": "838418f4bdaceeadc25d9d2bd45e68c1"
        },
        "storyprojecteditview": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryProjectEditView",
            "viewtag": "838cac8f8359eeecc2b7cab4beb3653e"
        },
        "taskzsgridview9": {
            "title": "任务表格视图（展示）",
            "caption": "展示",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskZsGridView9",
            "viewtag": "83a5deec3e454787f7a9744c860a163f"
        },
        "usereditview": {
            "title": "用户编辑视图",
            "caption": "用户信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "UserEditView",
            "viewtag": "83b1f6c353e9383e36b8d58eec845267"
        },
        "ibzprostoryeditview": {
            "title": "需求编辑视图",
            "caption": "需求",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IBZProStoryEditView",
            "viewtag": "83d5cd0a5edac4d615523595e7907ea2"
        },
        "ibzdailydailyeditview": {
            "title": "日报编辑视图",
            "caption": "日报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzDailyDailyEditView",
            "viewtag": "83de2f22eaa4faf59cf7f38e7c448bf9"
        },
        "projectgridview": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectGridView",
            "viewtag": "846ddf8e555650608d4f75c4595c1270"
        },
        "bugresolveview": {
            "title": "解决Bug",
            "caption": "解决Bug",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "BugResolveView",
            "viewtag": "84a5000983bdbd576fba530e78e8f50d"
        },
        "syspostgridexpview": {
            "title": "岗位表格导航视图",
            "caption": "岗位",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "ou",
            "viewname": "SysPostGridExpView",
            "viewtag": "84ad1f110ad2f5100d78d5a23c67fd02"
        },
        "storygridview9_child": {
            "title": "细分需求",
            "caption": "细分需求",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryGridView9_Child",
            "viewtag": "8505c429c9deb51e3e1ef8b911fa83c2"
        },
        "taskstatsuserfinishtaskgridview": {
            "title": "任务统计表格视图",
            "caption": "用户完成任务汇总",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "TaskStatsUserFinishTaskGridView",
            "viewtag": "8582ea1e2990a679847b6933cc5211eb"
        },
        "storysubgridview": {
            "title": "需求细分",
            "caption": "需求细分",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StorySubGridView",
            "viewtag": "85897eeca4e1fb9fd7e7fe5c4fa28fa0"
        },
        "projectmaindashboardview": {
            "title": "项目数据看板视图",
            "caption": "项目",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectMainDashboardView",
            "viewtag": "85ee867b09a2d6303c061d91374ec975"
        },
        "taskestimateeditgridview9": {
            "title": "任务预计表格视图",
            "caption": "工时",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskEstimateEditGridView9",
            "viewtag": "85f2ffedf65fdd109559fbbbb33badd6"
        },
        "doclibmodulechildweihuitreeexpview": {
            "title": "文档库分类树导航视图",
            "caption": "文档库分类实体树导航视图",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocLibModuleChildWeiHuiTreeExpView",
            "viewtag": "864b0541f7ef09dabcaed9cff697b5a9"
        },
        "docdashboardview": {
            "title": "文档数据看板视图",
            "caption": "文档",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "DocDashboardView",
            "viewtag": "86e1fc6d46d804998a58ab21982c2874"
        },
        "ibzlibmodulecasetreeexpview": {
            "title": "用例",
            "caption": "用例",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzLibModuleCaseTreeExpView",
            "viewtag": "870bc0de83b0395b5977daca546eed1e"
        },
        "ibzlibeditview9": {
            "title": "用例库编辑视图",
            "caption": "用例库",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "IbzLibEditView9",
            "viewtag": "88905fc742e5cee96069f28b5a76f22b"
        },
        "bugpickupgridview4": {
            "title": "bug选择表格视图",
            "caption": "Bug",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugPickupGridView4",
            "viewtag": "88a2e4ac2ac010f7ec3f5b256e955207"
        },
        "systeammembergridview": {
            "title": "组成员表格视图",
            "caption": "组成员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamMemberGridView",
            "viewtag": "89ff98e46167a4688e63362931496818"
        },
        "ibizproproductdailygridview": {
            "title": "产品日报表格视图",
            "caption": "产品日报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproProductDailyGridView",
            "viewtag": "8a56ab62d6ae84149615df43ea132fcb"
        },
        "projectmainmygridview": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectMainMyGridView",
            "viewtag": "8a836afd6e08fa458fd83bb013fb0c7d"
        },
        "systeamusr2gridview": {
            "title": "组表格视图",
            "caption": "组",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamUsr2GridView",
            "viewtag": "8b8f4b1c69b4e1b8cbd9d001ade0ca63"
        },
        "productmodulequickcfgview": {
            "title": "需求模块",
            "caption": "需求模块",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductModuleQuickCfgView",
            "viewtag": "8bcbd6c2b7e3d93270529da796425a5b"
        },
        "productplanmaineditview": {
            "title": "计划详情",
            "caption": "产品计划",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanMainEditView",
            "viewtag": "8bdd83100ba1d5cfb08a720d4f525512"
        },
        "storyprojectmpickupview3": {
            "title": "关联需求",
            "caption": "关联需求",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryProjectMPickupView3",
            "viewtag": "8bfb46334946f52f856a6a54b9d49d89"
        },
        "usertpleditview": {
            "title": "usertpl编辑视图",
            "caption": "用户模板",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "UserTplEditView",
            "viewtag": "8c08fcf2db47efba2ca50d8feed5e52c"
        },
        "storyeditview9": {
            "title": "关联需求",
            "caption": "关联需求",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryEditView9",
            "viewtag": "8c3bd17ea668e9cf5802751378c3a378"
        },
        "testtaskblockoptionview": {
            "title": "阻塞",
            "caption": "阻塞",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskBlockOptionView",
            "viewtag": "8c583872d1a8ff04bcde60d303eb0786"
        },
        "productleftsidebarlistview": {
            "title": "所有产品",
            "caption": "产品",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductLeftSidebarListView",
            "viewtag": "8ca39819b87c5e3e8669fcd7409cf9a2"
        },
        "ibzmonthlyprojectmonthlygridview_": {
            "title": "月报表格视图",
            "caption": "月报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzMonthlyProjectMonthlyGridView_",
            "viewtag": "8cce08a0293cb9a5eb3b1df32a85c340"
        },
        "sysupdatefeaturesgridview": {
            "title": "系统更新功能表格视图",
            "caption": "系统更新功能",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateFeaturesGridView",
            "viewtag": "8cee8f79bfe729f53121904e9ebd7422"
        },
        "sysemployeegridexpview": {
            "title": "人员表格导航视图",
            "caption": "人员",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "ou",
            "viewname": "SysEmployeeGridExpView",
            "viewtag": "8d065762f9a42000dcacecc196aabb7b"
        },
        "testtaskeditview9_detail": {
            "title": "测试版本编辑视图",
            "caption": "测试版本",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestTaskEditView9_Detail",
            "viewtag": "8d24f12656d8f0d0f21cde986d90249d"
        },
        "productpickupgridview": {
            "title": "产品选择表格视图",
            "caption": "产品",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPickupGridView",
            "viewtag": "8d53a973712c13f448efb8e2182ccc0b"
        },
        "doclibundoneprojectgridview": {
            "title": "doclib表格视图",
            "caption": "文档库",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocLibUndoneProjectGridView",
            "viewtag": "8d564d1a66bb96ca561524aa9a0087de"
        },
        "casegridview9_storyaffect": {
            "title": "相关用例",
            "caption": "相关用例",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseGridView9_Storyaffect",
            "viewtag": "8e459cffb6ebdb4d255f59fb72be4470"
        },
        "buggridview9_myassignedtome": {
            "title": "Bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "BugGridView9_MyAssignedToMe",
            "viewtag": "8e637d967d51f005c958f8ee56a17979"
        },
        "taskteamgridview9_edit": {
            "title": "团队",
            "caption": "团队",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibiz",
            "viewname": "TaskTeamGridView9_Edit",
            "viewtag": "8fd7110e7d2b7d0fc9ea812d59d94f58"
        },
        "ibzlibopenlibview": {
            "title": "用例库数据看板视图",
            "caption": "用例库",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzLibOpenLibView",
            "viewtag": "90b86f20a267e8dc7352eff044a34691"
        },
        "taskpausetaskview": {
            "title": "暂停任务",
            "caption": "暂停任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskPauseTaskView",
            "viewtag": "9155179040bdf9819f076428450667b0"
        },
        "productmoduletreeexpview": {
            "title": "需求模块树导航视图",
            "caption": "需求模块",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductModuleTreeExpView",
            "viewtag": "91d3e67caa36efe3f59590d8531a7e0b"
        },
        "useryearworkstatseditview": {
            "title": "用户年度工作内容统计编辑视图",
            "caption": "用户年度工作内容统计",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "UserYearWorkStatsEditView",
            "viewtag": "92828782339ab18470626ac28292615a"
        },
        "sysdepartmentgridexpview": {
            "title": "部门表格导航视图",
            "caption": "部门",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "ou",
            "viewname": "SysDepartmentGridExpView",
            "viewtag": "92ea2f270b6525a85636e8631640718d"
        },
        "ibzmyterritoryusr3tabexpview": {
            "title": "管理",
            "caption": "我的地盘",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryUsr3TabExpView",
            "viewtag": "9322aeb3d46b7e14022de0e611088cae"
        },
        "testreporteditview_tosumup": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportEditView_tosumup",
            "viewtag": "93df0cb379fd2c516ae1ee95901b5eb2"
        },
        "storyeditview_storychange": {
            "title": "需求编辑视图",
            "caption": "变更",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryEditView_StoryChange",
            "viewtag": "93f8d8d0a5d396d446a454490c33b9b4"
        },
        "casetesttaskexceditview": {
            "title": "执行结果",
            "caption": "执行结果",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseTestTaskExcEditView",
            "viewtag": "946ccf2f81dab9bfaf2bd841df90f209"
        },
        "casesuitelinkcasegridview": {
            "title": "测试用例表格视图（关联用例）",
            "caption": "关联用例",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CasesuiteLinkCaseGridView",
            "viewtag": "947384eec213c6134ff26412515d0938"
        },
        "storymainview9": {
            "title": "需求编辑视图",
            "caption": "需求",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryMainView9",
            "viewtag": "94e0ee1a97736ff4d28b88a46cd395b7"
        },
        "casetypeentrygridview": {
            "title": "测试用例表格视图（测试结果条目）",
            "caption": "测试结果条目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseTypeEntryGridView",
            "viewtag": "94e7c578a4f0e54516db3c9ce4a18a2e"
        },
        "projectmodulemaingridview": {
            "title": "实体表格视图",
            "caption": "任务模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectModuleMainGridView",
            "viewtag": "95320a98383e165118979cd27997f20e"
        },
        "projecteditview_suspend": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectEditView_Suspend",
            "viewtag": "9669d3f350b532bb8acd60be74038748"
        },
        "ibizproprojectdailygridview": {
            "title": "项目日报表格视图",
            "caption": "项目日报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproProjectDailyGridView",
            "viewtag": "9682c1d45f5c4aa7868b241dc74f0e0b"
        },
        "todomaindashboardview_link": {
            "title": "待办事宜表数据看板视图",
            "caption": "待办",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "Todomaindashboardview_link",
            "viewtag": "9683a2348afcd552208200ff81e3ff8a"
        },
        "sysemployeeusr2gridview": {
            "title": "人员表格视图人员实体表格视图(组织下所有人员)",
            "caption": "人员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysEmployeeUsr2GridView",
            "viewtag": "9699f9ed30b502008f2a5302443453ee"
        },
        "actionprojecttrendslistview9": {
            "title": "产品动态",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "zentao",
            "viewname": "ActionProjectTrendsListView9",
            "viewtag": "96ec3f978c1cc22acc532331d5dc2a41"
        },
        "caseprojectreportlinkgridview": {
            "title": "测试用例表格视图（报告关联用例）",
            "caption": "关联用例",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseProjectReportLinkGridView",
            "viewtag": "9702df74499bfcf7b127558ebe7f1779"
        },
        "projectmgeditview": {
            "title": "项目编辑视图（团队管理）",
            "caption": "团队管理",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectMGEditView",
            "viewtag": "978f1388b789fd2cc90885750c5b66bb"
        },
        "storyplaneditview": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryPlanEditView",
            "viewtag": "978f3a4696f6fb43bd590afaa9fa8b90"
        },
        "ibzweeklyeditview": {
            "title": "实体2编辑视图",
            "caption": "周报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "IbzWeeklyEditView",
            "viewtag": "9797244d6639cc723b05c3d6d6cffc41"
        },
        "actionproducttrendslistview9": {
            "title": "产品动态",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "zentao",
            "viewname": "ActionProductTrendsListView9",
            "viewtag": "97af408e6a6cb088c824cacd1807f353"
        },
        "productliferoadmaplistview9": {
            "title": "路线图",
            "caption": "产品生命周期",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProductLifeRoadMapListView9",
            "viewtag": "985c8eb7591e5e00de8e3cda638d5727"
        },
        "ibzlibgridview": {
            "title": "用例库",
            "caption": "用例库",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzLibGridView",
            "viewtag": "98fbf9b19456193cf4893a27a7eaa66b"
        },
        "releasegridview": {
            "title": "发布表格视图",
            "caption": "发布",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ReleaseGridView",
            "viewtag": "9ae49b10ec96e8f7b063be2ed4172247"
        },
        "doclibproductgridview": {
            "title": "doclib表格视图",
            "caption": "文档库",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibProductGridView",
            "viewtag": "9b2c4bc59d56b5abf9cf7df794591bf3"
        },
        "projectstatsprojectqualityusr2gridview": {
            "title": "项目质量表",
            "caption": "项目质量表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsProjectQualityUsr2GridView",
            "viewtag": "9b3a564353515fdd9103f25db991a1a7"
        },
        "doclibtreeview": {
            "title": "文档库树视图",
            "caption": "文档库",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibTreeView",
            "viewtag": "9bbb63a4a36369d6d14471da8a742eb9"
        },
        "taskmonthlycompletezsgridview": {
            "title": "任务表格视图（展示）",
            "caption": "展示",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibiz",
            "viewname": "TaskMonthlyCompleteZsGridView",
            "viewtag": "9be426255f9bdea95b9adf237b278782"
        },
        "ibzproproductusertaskproductpartgridviewproductweekly": {
            "title": "产品汇报用户任务表格视图",
            "caption": "产品日报",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibizpro",
            "viewname": "IbzproProductUserTaskProductPartGridViewProductWeekly",
            "viewtag": "9c05690154dbe71f2c7505c22ec8419c"
        },
        "ibzprostorymoduleoptionview": {
            "title": "需求模块选项操作视图同步",
            "caption": "同步",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IBZProStoryModuleOptionView",
            "viewtag": "9c4be21935530b7d0df465e3b691ce37"
        },
        "taskstatsuserfinishtasksumgridview": {
            "title": "任务统计表格视图",
            "caption": "用户完成任务汇总",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "TaskStatsUserFinishTaskSumGridView",
            "viewtag": "9c718f75d8c130ae7c44ba1c18edcc62"
        },
        "docdocsumeditview9": {
            "title": "文档编辑视图（文档摘要）",
            "caption": "文档摘要",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "DocDocSumEditView9",
            "viewtag": "9c8008d7bfae29c3af0c64991337b7f8"
        },
        "storycalendareditview": {
            "title": "需求编辑视图（日历）",
            "caption": "日历",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryCalendarEditView",
            "viewtag": "9c99ca56cf2ea7a4d2c20575e71311dd"
        },
        "projectstatsusr2gridviewtaskstatuscount": {
            "title": "项目统计表格视图（任务状态统计）",
            "caption": "任务状态统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsUsr2GridViewTaskStatusCount",
            "viewtag": "9c9b61019d1d14a1e56cd9ed0af85640"
        },
        "productsumproductbugtypesumusr4gridview": {
            "title": "产品Bug类型统计表格视图",
            "caption": "产品汇总表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductSumProductBugTypeSumUsr4GridView",
            "viewtag": "9ca10f6c70b556f095cfca06c1132f5a"
        },
        "productmoduleeditview": {
            "title": "产品模块编辑视图",
            "caption": "需求模块",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductModuleEditView",
            "viewtag": "9d2da90e3480c3bd1e1c58a6484356c5"
        },
        "taskteamgridview9_look": {
            "title": "团队",
            "caption": "团队",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibiz",
            "viewname": "TaskTeamGridView9_Look",
            "viewtag": "9d6b43cf5d65cb414cbccc84237178b7"
        },
        "releaseeditview": {
            "title": "发布编辑视图",
            "caption": "发布",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ReleaseEditView",
            "viewtag": "9ddace1c12afee8da3f0254a05ba141a"
        },
        "bugprojectgridview": {
            "title": "bug表格视图（项目）",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugProjectGridView",
            "viewtag": "9dfcc6cbfe4f53722baff0120924a35c"
        },
        "ibzmyterritoryeditview": {
            "title": "我的地盘编辑视图",
            "caption": "我的地盘",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "IbzMyTerritoryEditView",
            "viewtag": "9e3f0f058bc5ca96158337dca705009c"
        },
        "storyactiviteview": {
            "title": "需求激活",
            "caption": "需求激活",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryActiviteView",
            "viewtag": "9fb9c6b9baf7e8e9647041b8d7e13dd4"
        },
        "sysemployeepickupview": {
            "title": "人员数据选择视图",
            "caption": "人员",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "SysEmployeePickupView",
            "viewtag": "9ffa35efe3d70cf4b9fa4e83dd1979c6"
        },
        "releasemaintabexpview": {
            "title": "发布分页导航视图",
            "caption": "产品发布",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ReleaseMainTabExpView",
            "viewtag": "9ffdec79c2fcb400382cc454c396e918"
        },
        "docgridviewlookdoc": {
            "title": "doc表格视图",
            "caption": "文档",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocGridViewLookDoc",
            "viewtag": "a05f7dc942dc1a26c4d20a8c5da75f21"
        },
        "bugcasetobugeditview": {
            "title": "Bug",
            "caption": "Bug",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugCaseToBugEditView",
            "viewtag": "a0fc84298809f2371ecccfeae95ccdcd"
        },
        "productteameditview": {
            "title": "产品团队编辑视图",
            "caption": "产品团队",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "PRODUCTTEAMEditView",
            "viewtag": "a139999da375ad637cf0b9d455734b21"
        },
        "systeammemberusr2gridviewpostmembers": {
            "title": "组成员表格视图",
            "caption": "组成员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamMemberUsr2GridViewPostMembers",
            "viewtag": "a142a7615794267864e6b67cb1bcba3a"
        },
        "casetestmaindashboardview": {
            "title": "功能测试",
            "caption": "功能测试",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseTestMainDashboardView",
            "viewtag": "a20bfffd7d83da0f48e7f8c1702b64b5"
        },
        "testresulttesttaskmeditview9": {
            "title": "测试结果多表单编辑视图",
            "caption": "测试结果",
            "viewtype": "DEMEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestResultTestTaskMEditView9",
            "viewtag": "a2162c6851a15e4ca36932de99bce8ad"
        },
        "bugstatsusr2gridviewprojectbugstatuscount": {
            "title": "Bug统计表格视图(bug状态统计)",
            "caption": "bug状态统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugStatsUsr2GridViewProjectBugStatusCount",
            "viewtag": "a221748339db5b72f65a2803d6372fe5"
        },
        "storymaingridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMainGridView",
            "viewtag": "a2c585e16c82b5dec03db7146b9a6fa4"
        },
        "ibzdailymydailygridview": {
            "title": "日报表格视图",
            "caption": "日报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzDailyMyDailyGridView",
            "viewtag": "a302ac33e3faf1f7a735721d5a96f738"
        },
        "ibzmyterritorytreeexpviewprojectstats": {
            "title": "我的地盘我的地盘实体树导航视图（项目汇总表）导航视图",
            "caption": "项目汇总表",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryTreeExpViewProjectStats",
            "viewtag": "a3b159cf729cdf7d77b32ff9d0b4fbbd"
        },
        "testsuitegridview": {
            "title": "测试套件表格视图",
            "caption": "测试套件",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TestSuiteGridView",
            "viewtag": "a3bd82ec712d2e3ad12e716655e960fc"
        },
        "doclibmoduletreeexpview": {
            "title": "文档库分类树导航视图",
            "caption": "文档库分类",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocLibModuleTreeExpView",
            "viewtag": "a421ac5dc338340c0a86e58a9abedafd"
        },
        "projectgridview9_unclosed": {
            "title": "项目表格视图",
            "caption": "未关闭的项目",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectGridView9_UnClosed",
            "viewtag": "a42480ce1db6598e383c740e7698d9d8"
        },
        "bugbuildsubgridview_done": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugBuildSubGridView_Done",
            "viewtag": "a4808ebf1f78b25ee53d8638079082dc"
        },
        "usercontactusr2gridview": {
            "title": "用户联系方式表格视图",
            "caption": "用户联系方式",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "UserContactUsr2GridView",
            "viewtag": "a486140991fa432e84d721479bebfd4b"
        },
        "taskmaingridview": {
            "title": "task表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskMainGridView",
            "viewtag": "a4af2d93ae66c9877ee99bfe7b93d22c"
        },
        "doclibtreeviewproductroot": {
            "title": "文档库树视图",
            "caption": "文档库",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibTreeViewProductRoot",
            "viewtag": "a4d2ca556b880ddc8ee21ddac6adcf60"
        },
        "doclibproductgridexpview": {
            "title": "文档库表格导航视图（产品文档库导航视图）",
            "caption": "产品文档库导航视图",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibProductGridExpView",
            "viewtag": "a53c40aac05dc376d8fb26e320ba4efb"
        },
        "taskpickupgridview": {
            "title": "task选择表格视图",
            "caption": "任务",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "TaskPickupGridView",
            "viewtag": "a567636558c349902507ef69b9c510e5"
        },
        "storypickupgridview2": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryPickupGridView2",
            "viewtag": "a589d1134a8833b43471339d131a329b"
        },
        "ibzmyterritoryallreporttabexpview": {
            "title": "我的地盘分页导航视图",
            "caption": "汇报",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "report",
            "viewname": "IbzMyTerritoryALLReportTabExpView",
            "viewtag": "a5d09b7f598eadecc23c66d3109f84e0"
        },
        "companydepttreeexpview": {
            "title": "组织部门树导航视图",
            "caption": "公司",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "CompanyDeptTreeExpView",
            "viewtag": "a5d4b15e7801d61357c56c91136faed7"
        },
        "systeampickupgridview": {
            "title": "组选择表格视图",
            "caption": "组",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamPickupGridView",
            "viewtag": "a617de20593eca90c4003bf177ebcaa3"
        },
        "bugprojectbugsgridview": {
            "title": "Bug实体表格视图(项目遗留得Bug)",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugProjectBugsGridView",
            "viewtag": "a6d0c7cd71bd7d0878151cb7635e7967"
        },
        "taskmaindashboardview_link": {
            "title": "任务主数据看板视图",
            "caption": "任务",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "Taskmaindashboardview_link",
            "viewtag": "a6e14baa45e0c99165384f7ef510d605"
        },
        "ibzcaseediteditview": {
            "title": "用例库用例编辑视图（编辑）",
            "caption": "测试用例",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzCaseEditEditView",
            "viewtag": "a700be196d10a93df649a9c80678ac25"
        },
        "ibzproprojectusertaskgridview": {
            "title": "项目汇报用户任务表格视图",
            "caption": "项目汇报用户任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbzproProjectUserTaskGridView",
            "viewtag": "a719a6f3bc54e86c42f44c2350b6227d"
        },
        "testruneditview9": {
            "title": "测试运行编辑视图",
            "caption": "测试运行",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestRunEditView9",
            "viewtag": "a7aa0594a12412726e223a2d12f26045"
        },
        "productlistexpview": {
            "title": "产品列表导航视图",
            "caption": "产品统计",
            "viewtype": "DELISTEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductListExpView",
            "viewtag": "a84a543c155b01389bc12eb1c27624b5"
        },
        "ibizproprojectmonthlyeditview": {
            "title": "项目月报编辑视图",
            "caption": "项目月报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproProjectMonthlyEditView",
            "viewtag": "a94ed0bf755673ee7dde89bbfac6d619"
        },
        "bugconfirmview": {
            "title": "确认Bug",
            "caption": "确认Bug",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "BugConfirmView",
            "viewtag": "a961234e69c08b88317a02874a23edb6"
        },
        "buildeditformeditview": {
            "title": "版本编辑视图",
            "caption": "版本",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BuildEditFormEditView",
            "viewtag": "a975d49b15bcfdfade2a8b537c0b6763"
        },
        "ibizproproductweeklyusr2gridview": {
            "title": "产品周报表格视图",
            "caption": "产品周报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproProductWeeklyUsr2GridView",
            "viewtag": "a9e57ee9f6a952acfd2e990fed573260"
        },
        "ibzagentmaininfoeditview": {
            "title": "代理编辑视图",
            "caption": "代理",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzAgentMainInfoEditView",
            "viewtag": "aa5d52066660b94e42ba0e4213af8de9"
        },
        "projectundoneprojectgridview": {
            "title": "项目表格视图",
            "caption": "未完成项目",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectUndoneProjectGridView",
            "viewtag": "aa9214c2a8a4216cc83f9f24c106f41c"
        },
        "productplaneditview": {
            "title": "计划",
            "caption": "产品计划",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanEditView",
            "viewtag": "aad9a5713d6828d3119b811b26915215"
        },
        "testtaskgridview": {
            "title": "测试单表格视图",
            "caption": "测试版本",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskGridView",
            "viewtag": "aae1ade339fe6a2ebe367489f6393db1"
        },
        "ibzweeklygridview": {
            "title": "实体2表格视图",
            "caption": "周报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "IbzWeeklyGridView",
            "viewtag": "ab7631914540ecd6c90ee344bfe70ba2"
        },
        "sysorganizationusr2gridview": {
            "title": "单位单位实体表格视图(通讯录所有组织)",
            "caption": "单位",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysOrganizationUsr2GridView",
            "viewtag": "ac62ba030f3151a3cddb8a9ea6484a32"
        },
        "sysupdateloglastgridview": {
            "title": "系统更新日志表格视图",
            "caption": "更新日志",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateLogLastGridView",
            "viewtag": "ad6ccd8aea1ed8f9c39d5e684300ff7e"
        },
        "testreportprojectdashboardview": {
            "title": "测试报告数据看板视图",
            "caption": "项目报告",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportprojectDashboardView",
            "viewtag": "ae03acf710d901c5b781d7b9615c2dc4"
        },
        "producttestleftsidebarlistview": {
            "title": "所有测试",
            "caption": "测试",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductTestLeftSidebarListView",
            "viewtag": "ae1ea68f418b4b37b773adca6b349679"
        },
        "productsumstorysumgridview": {
            "title": "产品汇总表表格视图",
            "caption": "需求汇总",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductSumStorySumGridView",
            "viewtag": "ae280d70f2ed0232df0d011af22a5746"
        },
        "projecteditview_activate": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectEditView_Activate",
            "viewtag": "aec9ceba0aff871b8e084cd681b49281"
        },
        "ibzlibcasestepsinfogridview9": {
            "title": "用例库用例步骤表格视图（主数据）",
            "caption": "用例库用例步骤",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibiz",
            "viewname": "IbzLibCaseStepsInfoGridView9",
            "viewtag": "af3275f3703097da101b0c1a0c01024c"
        },
        "projecttesttabexpview": {
            "title": "项目分页导航视图（测试）",
            "caption": "测试",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectTestTabExpView",
            "viewtag": "af8185573a2daae5897a2291bea9a9d3"
        },
        "ibzcaseeditview": {
            "title": "用例库用例编辑视图",
            "caption": "测试用例",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "IbzCaseEditView",
            "viewtag": "af9a5d7bdd79139c2f4be0d2b9b1c698"
        },
        "ibzweeklyproductweeklygridview": {
            "title": "周报表格视图",
            "caption": "周报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzWeeklyProductWeeklyGridView",
            "viewtag": "afd21c80572647a21662bcb2bcd66ab4"
        },
        "productstatsgridview": {
            "title": "产品统计表格视图",
            "caption": "产品统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductStatsGridView",
            "viewtag": "afe580bf35a93bd398c71148fd082a7c"
        },
        "testportalview": {
            "title": "测试主页",
            "caption": "测试主页",
            "viewtype": "APPPORTALVIEW",
            "viewmodule": "Ungroup",
            "viewname": "TestPortalView",
            "viewtag": "b127362083d624afe84ed1e8f674223e"
        },
        "ibzlibmoduletreeexpview": {
            "title": "模块维护",
            "caption": "模块维护",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzLibModuleTreeExpView",
            "viewtag": "b191a1a53f2f77ad0df1027d376e83ee"
        },
        "branchpminfoeditview": {
            "title": "平台管理",
            "caption": "产品的分支和平台信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BranchPMInfoEditView",
            "viewtag": "b281875cc25dc5ace73c1fe5bf383ad0"
        },
        "companymainview": {
            "title": "公司数据看板视图",
            "caption": "公司信息",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "CompanyMainView",
            "viewtag": "b293e263c81ae9f040fd871f38287bca"
        },
        "systeammembereditview": {
            "title": "组成员编辑视图",
            "caption": "组成员",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamMemberEditView",
            "viewtag": "b2d81cb8d4121eb95c848e5b1cbfddd8"
        },
        "ibzproproductusertaskproductdailypartgridview": {
            "title": "产品汇报用户任务表格视图",
            "caption": "产品日报",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibizpro",
            "viewname": "IbzproProductUserTaskProductDailyPartGridView",
            "viewtag": "b3328135c614fd3d2a68b8eb01d3e008"
        },
        "ibzmyterritorydashboardview": {
            "title": "首页",
            "caption": "首页",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryDashboardView",
            "viewtag": "b33906a0a4a273e8e0da622206d8905d"
        },
        "companyeditview": {
            "title": "公司编辑视图",
            "caption": "公司信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "CompanyEditView",
            "viewtag": "b39a7a76c2175803831235ae3aeef05b"
        },
        "ibzproproductgridview": {
            "title": "平台产品表格视图",
            "caption": "平台产品",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IBZProProductGridView",
            "viewtag": "b4621a68e3a18dd57acab3bf7689ef34"
        },
        "ibzmyterritorystatstabexpview": {
            "title": "我的地盘分页导航视图（统计）",
            "caption": "统计",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryStatsTabExpView",
            "viewtag": "b4989339e1dc575a45c15699a325122a"
        },
        "actionmyalltrendslistview": {
            "title": "系统日志列表视图",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionMyAllTrendsListView",
            "viewtag": "b4e9c97f4ba0a08e4f916933fc97b522"
        },
        "ibzagentmaingridview": {
            "title": "代理表格视图",
            "caption": "代理",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzAgentMainGridView",
            "viewtag": "b5017ec4e41b5f494f6613b7a3bd43f3"
        },
        "projectusr2gridview": {
            "title": "项目实体表格视图(参与项目)",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectUsr2GridView",
            "viewtag": "b54fec9cedcbc7ad183d19a681d71d0d"
        },
        "productdashboardinfomainview9": {
            "title": "产品信息",
            "caption": "产品",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProductDashboardInfoMainView9",
            "viewtag": "b5d2389c0dd12ae614b319090ecc2361"
        },
        "caseoptionview": {
            "title": "执行",
            "caption": "执行",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseOptionView",
            "viewtag": "b61fe96397bb463004f549f334b7f363"
        },
        "testtaskmydgridview": {
            "title": "测试单表格视图",
            "caption": "测试版本",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskMyDGridView",
            "viewtag": "b63655c51b126d38d1f021c528f664ad"
        },
        "producthtmlview": {
            "title": "iBiz软件生产管理",
            "caption": "iBiz软件生产管理",
            "viewtype": "DEHTMLVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductHtmlView",
            "viewtag": "b6969f6aea9c131d0c2144d88472ba6a"
        },
        "ibzprostorymoduleeditview": {
            "title": "需求模块编辑视图",
            "caption": "需求模块",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IBZProStoryModuleEditView",
            "viewtag": "b6cf31aeca8993a7c3e6962ad30cc6eb"
        },
        "doceditview": {
            "title": "doc编辑视图",
            "caption": "文档",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "DocEditView",
            "viewtag": "b6e02216d1e5c69d79b32342d8b67c7a"
        },
        "ibzdailymymaineditview": {
            "title": "日报编辑视图（主数据）",
            "caption": "日报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzDailyMymainEditView",
            "viewtag": "b7371a2f9b532503a94b797c4861a738"
        },
        "ibizproindexindexpickupdataview": {
            "title": "索引检索索引关系选择数据视图",
            "caption": "索引检索",
            "viewtype": "DEINDEXPICKUPDATAVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproIndexIndexPickupDataView",
            "viewtag": "b73c533bd0b7c0813dc5fa85f2b3549f"
        },
        "docmymoregridview": {
            "title": "doc表格视图",
            "caption": "我的文档",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocMyMoreGridView",
            "viewtag": "b7647731f4f4224519c4018a79884b64"
        },
        "ibzproproductusertaskproductmonthlypartgridview": {
            "title": "产品汇报用户任务表格视图",
            "caption": "产品日报",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibizpro",
            "viewname": "IbzproProductUserTaskProductMonthlyPartGridView",
            "viewtag": "b79e544c576248b65fc915ac23b2b960"
        },
        "tasktreeexpview": {
            "title": "任务树导航视图",
            "caption": "任务",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskTreeExpView",
            "viewtag": "b7d214b8cee231d989382f37ef2e8e27"
        },
        "usercontacttreeexpview": {
            "title": "用户联系方式树导航视图",
            "caption": "用户联系方式",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "UserContactTreeExpView",
            "viewtag": "b801497fba39749da0bf99e9cda2ff06"
        },
        "tasktypetaskgroupgridview": {
            "title": "任务表格视图（类型分组）",
            "caption": "类型分组",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskTypeTaskGroupGridView",
            "viewtag": "b81f0d050f0ec13741f177f26fcb4bd8"
        },
        "productstatseditview": {
            "title": "产品统计编辑视图",
            "caption": "产品统计",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProductStatsEditView",
            "viewtag": "b8aa2b91fff3152c42b9e6fd679be2bc"
        },
        "ibzproprojectusertaskeditview": {
            "title": "项目汇报用户任务编辑视图",
            "caption": "项目汇报用户任务",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbzproProjectUserTaskEditView",
            "viewtag": "b92ece30dcfe04edd190f452807e350d"
        },
        "bugdashboardmaineditview9": {
            "title": "主信息",
            "caption": "Bug",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "BugDashboardMainEditView9",
            "viewtag": "b95339c9dec370542f978bcd17224d48"
        },
        "storympickupview": {
            "title": "关联需求",
            "caption": "关联需求",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMPickupView",
            "viewtag": "b9bdfc0e33d333ade00934745d9dc0ad"
        },
        "casebatchnewgridview": {
            "title": "测试用例",
            "caption": "测试用例",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseBatchNewGridView",
            "viewtag": "b9f80b05db8cff3e0ef8352519149b2c"
        },
        "systeampickupview": {
            "title": "组数据选择视图",
            "caption": "组",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamPickupView",
            "viewtag": "ba705e3050275c47ecea6130886a1d5b"
        },
        "taskopentaskview": {
            "title": "开始任务",
            "caption": "开始任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskOpenTaskView",
            "viewtag": "ba8ec48472c6227a226844baee25ae28"
        },
        "bugpickupgridview_buildlinkresolvedbugs": {
            "title": "bug选择表格视图",
            "caption": "Bug",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugPickupGridView_buildLinkResolvedBugs",
            "viewtag": "bac5adafbb8a97547509d6ad3ec16a86"
        },
        "depteditview": {
            "title": "部门编辑视图",
            "caption": "部门信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "DeptEditView",
            "viewtag": "bae11f9447355ecc9e2cdff2490e6d11"
        },
        "bugstatsproductbugstatusgridview": {
            "title": "Bug统计表格视图",
            "caption": "产品Bug状态汇总",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugStatsProductBugStatusGridView",
            "viewtag": "bb58aa381b47b6ad9eec3a694ad6f7d1"
        },
        "burnchartview": {
            "title": "燃尽图",
            "caption": "燃尽图",
            "viewtype": "DECHARTVIEW",
            "viewmodule": "zentao",
            "viewname": "BurnChartView",
            "viewtag": "bba3204a7f64b5eafe512a6b63658910"
        },
        "todogridview9": {
            "title": "我的待办",
            "caption": "我的待办",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TodoGridView9",
            "viewtag": "bc2507cdd677c5e56d209fbab236dfc2"
        },
        "productmaindashboardview": {
            "title": "产品数据看板视图",
            "caption": "产品",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductMainDashboardView",
            "viewtag": "bc36be2ee4a78e69c13665a8ad03ab6a"
        },
        "ibzdailyproductdailygridview": {
            "title": "日报表格视图",
            "caption": "日报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzDailyProductDailyGridView",
            "viewtag": "bc70c3a504112ece6f376e5bf942ff06"
        },
        "projectstatsprojectinputstatsgridview": {
            "title": "项目统计表格视图",
            "caption": "项目投入统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsProjectInputStatsGridView",
            "viewtag": "bce59928b92a1f25e057c220060a4a09"
        },
        "userpickupgridview": {
            "title": "用户选择表格视图",
            "caption": "用户",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "UserPickupGridView",
            "viewtag": "bd3043a0eb4bed8abd005228a4e729af"
        },
        "modulepickupgridview": {
            "title": "模块选择",
            "caption": "模块",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "ModulePickupGridView",
            "viewtag": "bda78773fabbeee54079951afb35f954"
        },
        "todogridview": {
            "title": "待办事宜表格视图",
            "caption": "待办",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TodoGridView",
            "viewtag": "bedf1f50199b74a65c2e17771144329c"
        },
        "bugbuildsubgridview_new": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugBuildSubGridView_New",
            "viewtag": "bf3b8cd2c94a53aa318a4067e6e486e3"
        },
        "casemaindashboardview": {
            "title": "功能测试",
            "caption": "功能测试",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseMainDashboardView",
            "viewtag": "bf84dbcdd77fd96f9b831316d7f969fd"
        },
        "storyproductstagekanbanview": {
            "title": "需求看板视图",
            "caption": "需求",
            "viewtype": "DEKANBANVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryProductStageKanbanView",
            "viewtag": "bfa6b267c1c868a41b419be350e681e9"
        },
        "sysupdatelogtabexpview": {
            "title": "系统更新日志分页导航视图",
            "caption": "更新日志",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateLogTabExpView",
            "viewtag": "c02fd7282430ea240e80829edd7f7898"
        },
        "taskrestarttaskview": {
            "title": "继续任务",
            "caption": "继续任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskRestartTaskView",
            "viewtag": "c03ec72932f1e7c0badcb0434257d547"
        },
        "ibzweeklyusr3gridview": {
            "title": "周报表格视图",
            "caption": "周报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzWeeklyUsr3GridView",
            "viewtag": "c08179f473e762df0e80e82aa14c7a51"
        },
        "bugtodoeditview": {
            "title": "待办提交",
            "caption": "待办提交",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugTodoEditView",
            "viewtag": "c0c12f14e7745eda77a80da04527a26e"
        },
        "storyreleasesubeditview": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryReleaseSubEditView",
            "viewtag": "c0f0cf52489e90899fc76ed262ed907b"
        },
        "projectstatseditview": {
            "title": "项目统计编辑视图",
            "caption": "项目统计",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectStatsEditView",
            "viewtag": "c22d776245f0f05aa54112b0dc27aa9e"
        },
        "doclibusr3treeview": {
            "title": "文档库树视图",
            "caption": "文档库",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibUsr3TreeView",
            "viewtag": "c24564db2a7ca9f2322928be41c5f16d"
        },
        "productmainview_edit": {
            "title": "产品编辑视图",
            "caption": "产品基本信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductMainView_Edit",
            "viewtag": "c279b2ea8245d900a0b405d4d87e2f9f"
        },
        "sysemployeetreeexpview": {
            "title": "人员树导航视图",
            "caption": "人员",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ou",
            "viewname": "SysEmployeeTreeExpView",
            "viewtag": "c311fbb0b39f9771f7d71d4d61f57f31"
        },
        "ibzcaseinfoeditview9": {
            "title": "用例库用例编辑视图（基本信息）",
            "caption": "基本信息",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "IbzCaseInfoEditView9",
            "viewtag": "c3ffc5a78a56f5f422921c92d687e02e"
        },
        "docgridview9": {
            "title": "文档表格视图",
            "caption": "最近更新",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "DocGridView9",
            "viewtag": "c497466bcf53f80ce1a8a16860bff528"
        },
        "ibzproconfigeditview": {
            "title": "系统配置表编辑视图",
            "caption": "系统配置表",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbzproConfigEditView",
            "viewtag": "c4eda443b150028cdcefd6cd1a7f272c"
        },
        "taskforwardview": {
            "title": "转交任务",
            "caption": "转交任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskForwardView",
            "viewtag": "c52533db80ff130d23150b9bb3c3ae0b"
        },
        "deptmaingridview": {
            "title": "部门",
            "caption": "部门",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DeptMainGridView",
            "viewtag": "c575cffc65c6704ddaea7f5e16235cbe"
        },
        "storyreportsubgridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryReportSubGridView",
            "viewtag": "c7344b0a55eadb587f401c2ea5a4d01f"
        },
        "ibzreportlymyreceivedgridview": {
            "title": "汇报表格视图",
            "caption": "汇报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzReportlyMyReceivedGridView",
            "viewtag": "c75ccc4e9ef8edf618efd83174c11e47"
        },
        "sysemployeepickupgridview": {
            "title": "人员选择表格视图",
            "caption": "人员",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysEmployeePickupGridView",
            "viewtag": "c84df2684f29705ac6c5dec67df9f217"
        },
        "useryearworkstatstitleeditview9": {
            "title": "用户年度工作内容统计编辑视图（标题）",
            "caption": "标题",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "UserYearWorkStatsTitleEditView9",
            "viewtag": "c84eb25ff4b166053057f3afe2390c15"
        },
        "taskmoretabexpview": {
            "title": "任务分页导航视图（更多）",
            "caption": "更多",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskMoreTabExpView",
            "viewtag": "c85d9b5e8fda56f19059573f794d31c6"
        },
        "buggridview": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugGridView",
            "viewtag": "c9410c9f72535adf1fff569d5243edd1"
        },
        "productstatseditview9": {
            "title": "产品统计编辑视图",
            "caption": "产品统计",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProductStatsEditView9",
            "viewtag": "c9f01b5b2c2c2c6f8e4bc4bd4db9a323"
        },
        "productstatstesteditview9": {
            "title": "产品统计编辑视图",
            "caption": "产品统计",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProductStatsTestEditView9",
            "viewtag": "ca19b98324385ce8ab457a006b9f0289"
        },
        "ibzreportroleconfigeditview": {
            "title": "汇报角色配置编辑视图",
            "caption": "汇报角色配置",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzReportRoleConfigEditView",
            "viewtag": "ca5520ca32c6104961484f490807058d"
        },
        "projectstatsgridview9": {
            "title": "项目统计表格视图",
            "caption": "项目统计",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsGridView9",
            "viewtag": "cabba7fe7d745d33b88f1ba31a19c4b3"
        },
        "todotodocreateview": {
            "title": "添加待办",
            "caption": "待办",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TodoTodoCreateView",
            "viewtag": "cae752b2c37e8fdd2b34f57cba9ce7d2"
        },
        "modulepickupview": {
            "title": "模块选择",
            "caption": "模块",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "ModulePickupView",
            "viewtag": "cb6c278fd7205b3de3fc041816d15dd8"
        },
        "ibzcasedashboardview": {
            "title": "用例库用例数据看板视图",
            "caption": "测试用例",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzCaseDashboardView",
            "viewtag": "cbb71f998dc532ef4a5ff32525a46284"
        },
        "projectstatsallgridview": {
            "title": "所有项目",
            "caption": "所有项目",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsALLGridView",
            "viewtag": "cbf15d6f53138d6c5f992b22b473c2ef"
        },
        "bugstatsgridview": {
            "title": "Bug统计表格视图",
            "caption": "Bug创建表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugStatsGridView",
            "viewtag": "cc499c250db0b7a0d84342f6943d6ed0"
        },
        "casestepmaingridview9_editmode": {
            "title": "用例步骤",
            "caption": "用例步骤",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseStepMainGridView9_EditMode",
            "viewtag": "cc95ccdffa772694833ec569e8aaa025"
        },
        "bugmpickupview2": {
            "title": "关联Bug",
            "caption": "关联Bug",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "BugMPickupView2",
            "viewtag": "ccf81bc02ce640c9401f639571fc599a"
        },
        "actionmytrendslistview": {
            "title": "系统日志列表视图",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionMyTrendsListView",
            "viewtag": "cd6e8d183f33115b00fbaef1afbbd1dc"
        },
        "storycurprojectgridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryCurProjectGridView",
            "viewtag": "ce036665dd22b3e4a3ca89005d573e65"
        },
        "docdocstatuseditview": {
            "title": "文档编辑视图",
            "caption": "嵌入文档库主页",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "DocDocStatusEditView",
            "viewtag": "ce20b160838d91ba8213e4665eadfcdf"
        },
        "casemaininfoeditview9": {
            "title": "测试用例编辑视图",
            "caption": "测试用例",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseMainInfoEditView9",
            "viewtag": "ce53f8a085a9a861e165f77f38528a86"
        },
        "companymaintabexpview": {
            "title": "组织权限",
            "caption": "组织权限",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "CompanyMainTabExpView",
            "viewtag": "ce7d59895df173ceb652f3c63bdef4aa"
        },
        "projectproductlistview9": {
            "title": "项目产品列表视图",
            "caption": "关联产品",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectProductListView9",
            "viewtag": "d0454a2ae9eb44aca3613b27169f3b18"
        },
        "fileeditview": {
            "title": "file编辑视图",
            "caption": "附件",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "FileEditView",
            "viewtag": "d05d51fbbdb75506a5d0b36ab527d47a"
        },
        "branchpickupview": {
            "title": "平台数据选择视图",
            "caption": "产品的分支和平台信息",
            "viewtype": "DEPICKUPVIEW",
            "viewmodule": "zentao",
            "viewname": "BranchPickupView",
            "viewtag": "d0851a0acfe0e92a6a5ba34b1552bc66"
        },
        "taskteamgridview9": {
            "title": "团队",
            "caption": "团队",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "ibiz",
            "viewname": "TaskTeamGridView9",
            "viewtag": "d1339f33d3d82d7b6993e510b20fddbe"
        },
        "productliferoadmapslistview9": {
            "title": "路线图",
            "caption": "产品生命周期",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProductLifeRoadMapSListView9",
            "viewtag": "d1b3f6d9d0ca781020cf5e4665461fbf"
        },
        "projectlistexpview": {
            "title": "项目列表导航视图",
            "caption": "项目",
            "viewtype": "DELISTEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectListExpView",
            "viewtag": "d1de7b1c3f0c14ee93de65e6b1045786"
        },
        "ibzlibmoduleeditview": {
            "title": "用例库模块编辑视图",
            "caption": "用例库模块",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzLibModuleEditView",
            "viewtag": "d29746fae4429a6ea5c81cc7d552bb5a"
        },
        "todobaseeditview9": {
            "title": "待办事宜表编辑视图",
            "caption": "基本信息",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TodoBaseEditView9",
            "viewtag": "d2bc94e4e8156e65ff17c8a6cd125b5b"
        },
        "ibzweeklyusr2gridview": {
            "title": "周报表格视图",
            "caption": "周报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzWeeklyUsr2GridView",
            "viewtag": "d2d8b61120cbf258864721c3324ab556"
        },
        "groupeditview": {
            "title": "群组编辑视图",
            "caption": "分组信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "GroupEditView",
            "viewtag": "d2de1e2449f8c1cf2e0310f5477eef4b"
        },
        "testmodulequickcfgview": {
            "title": "需求模块",
            "caption": "测试模块",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "ibiz",
            "viewname": "TestModuleQuickCfgView",
            "viewtag": "d337f5c3c125dc2641321f2d93b65476"
        },
        "systeamgridview": {
            "title": "组表格视图",
            "caption": "组",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamGridView",
            "viewtag": "d356c19266944e00bc8ebc1bbd85ca7c"
        },
        "ibzplantempletgridview": {
            "title": "产品计划模板表格视图",
            "caption": "计划模板",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbzPlanTempletGridView",
            "viewtag": "d378b177dcd91bb7920c5dc7a12175fa"
        },
        "doclibproducttreeview": {
            "title": "文档库树视图（产品）",
            "caption": "产品",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibProductTreeView",
            "viewtag": "d38df3a0f4241bde77b4494cc4b6f897"
        },
        "actionoptionview": {
            "title": "添加备注",
            "caption": "添加备注",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionOptionView",
            "viewtag": "d393b56053431c45eb3c8026e4bb2ca1"
        },
        "projectchartview9": {
            "title": "项目图表视图",
            "caption": "项目",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectChartView9",
            "viewtag": "d3faf41f12df89727a6f18eca8b7a117"
        },
        "ibzlibeditview": {
            "title": "用例库编辑视图",
            "caption": "用例库",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzLibEditView",
            "viewtag": "d4205baa91f50b3608df636281c73c20"
        },
        "branchpmeditview": {
            "title": "平台管理",
            "caption": "产品的分支和平台信息",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BranchPMEditView",
            "viewtag": "d4cb26555e6d81a172652580cf7d9f7f"
        },
        "casetotalopenedcasechartview9": {
            "title": "测试用例图表视图（累计创建用例）",
            "caption": "累计创建用例",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseTotalOpenedCaseChartView9",
            "viewtag": "d5147e02b1784ad744560cee3bc97c25"
        },
        "productexpeditview": {
            "title": "产品编辑视图",
            "caption": "产品",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductExpEditView",
            "viewtag": "d55d7aa68d58421bd2fe177c0be57c23"
        },
        "projectmainview_edit": {
            "title": "项目编辑视图",
            "caption": "项目",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectMainView_Edit",
            "viewtag": "d5700c9e8b9e0d9eba56c81a052ed438"
        },
        "docmoremydoctreeview": {
            "title": "文档树视图",
            "caption": "我的文档",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocMoreMyDocTreeView",
            "viewtag": "d5f2e9a6f7a981823a3327cba1c0b9d4"
        },
        "taskkanbanview": {
            "title": "任务看板视图",
            "caption": "任务",
            "viewtype": "DEKANBANVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskKanbanView",
            "viewtag": "d617e99633b9426aa8bd3ea293f91c6c"
        },
        "productplanprojectgridview9": {
            "title": "产品计划表格视图（项目）",
            "caption": "项目",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProductPlanProjectGridView9",
            "viewtag": "d66b7fe2cd9096259cab78e8feb19163"
        },
        "ibzreportlyreportlydetaileditview": {
            "title": "汇报编辑视图",
            "caption": "汇报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzReportlyReportlyDetailEditView",
            "viewtag": "d6d6a7c24897b28611fb32791d4d1a4a"
        },
        "projectmodulequickcfgview": {
            "title": "任务模块",
            "caption": "任务模块",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectModuleQuickCfgView",
            "viewtag": "d74289c64b10041b287211156dc0e147"
        },
        "bugstatsassigntogridview": {
            "title": "Bug统计表格视图（Bug指派表）",
            "caption": "Bug指派表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugStatsAssigntoGridView",
            "viewtag": "d7afba730262987d24bf40fcd4442fb9"
        },
        "storyplansubeditview": {
            "title": "需求",
            "caption": "需求",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryPlanSubEditView",
            "viewtag": "d7b673bf2aaf66911c38e84eeff9e1a7"
        },
        "testreporteditview_testtasks": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportEditView_TestTasks",
            "viewtag": "d7d565614eb5ab6d7763a92110c481dd"
        },
        "ibzproconfiggridview": {
            "title": "系统配置表表格视图",
            "caption": "系统配置表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbzproConfigGridView",
            "viewtag": "d86ccce9f88117cf723ae455a1bd065c"
        },
        "testreportmaininfoview": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportMainInfoView",
            "viewtag": "d876490f0254c8897bbdc3b0eb56a42e"
        },
        "taskestimateoptionview": {
            "title": "任务预计选项操作视图",
            "caption": "任务预计",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskEstimateOptionView",
            "viewtag": "d8db3dc48ecc1e32478d7490136cda6c"
        },
        "filelistview9": {
            "title": "附件",
            "caption": "附件",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "zentao",
            "viewname": "FileListView9",
            "viewtag": "d940bfd96f6087050755b99a3b6bab0a"
        },
        "sysemployeempickupview": {
            "title": "人员数据多项选择视图",
            "caption": "人员",
            "viewtype": "DEMPICKUPVIEW",
            "viewmodule": "ou",
            "viewname": "SysEmployeeMPickupView",
            "viewtag": "d946240b09028ae684e1eb31281a4caf"
        },
        "ibzreportlycalendareditview": {
            "title": "汇报编辑视图",
            "caption": "汇报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzReportlyCalendarEditView",
            "viewtag": "da1e5d81fc6839e5d3862946971b9eb5"
        },
        "bugstatseditview": {
            "title": "Bug统计编辑视图",
            "caption": "Bug统计",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "BugStatsEditView",
            "viewtag": "da5ec2a7fba9f4847d1fdc135daddd0d"
        },
        "ibzmyterritorycalendarview": {
            "title": "我的地盘日历视图",
            "caption": "我的地盘",
            "viewtype": "DECALENDARVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryCalendarView",
            "viewtag": "daa81f275f6b23066a6e64b06528641c"
        },
        "ibzmonthlymyreceivededitview": {
            "title": "月报编辑视图",
            "caption": "月报实体编辑视图",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzMonthlyMyReceivedEditView",
            "viewtag": "db51b8e325f272b56c73b038bf8ab237"
        },
        "storyplansubgridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryPlanSubGridView",
            "viewtag": "dbb115ffc3faea7eac968cbaa01b8f3b"
        },
        "ibzcasemaineditview9": {
            "title": "用例库用例编辑视图（主信息）",
            "caption": "主信息",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "IbzCaseMainEditView9",
            "viewtag": "dc07e84fe7098ae898d79235fd45c16d"
        },
        "testreporteditview_report": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportEditView_Report",
            "viewtag": "dca214243fca630e01d49127ee77a468"
        },
        "casegridview9_my": {
            "title": "测试用例表格视图",
            "caption": "测试用例",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseGridView9_My",
            "viewtag": "dcfb6f3c855cc82a1d94f125b0a14246"
        },
        "ibzmonthlyproductmonthlygridview": {
            "title": "月报表格视图",
            "caption": "月报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "report",
            "viewname": "IbzMonthlyProductMonthlyGridView",
            "viewtag": "dd53ef67c3ff17f64635741f5216b38a"
        },
        "usertreeexpview": {
            "title": "用户",
            "caption": "用户",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "UserTreeExpView",
            "viewtag": "dd7fc6839d2e1f024028a23ae1f53489"
        },
        "ibzmyterritorycalendarexpview": {
            "title": "我的地盘日历导航视图",
            "caption": "我的地盘",
            "viewtype": "DECALENDAREXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryCalendarExpView",
            "viewtag": "de099c7c4f5c1f66e518aab73595f15f"
        },
        "storymain2gridview": {
            "title": "story表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryMain2GridView",
            "viewtag": "dea346284a2fbb66467c4838c1b3f577"
        },
        "todoeditview": {
            "title": "编辑待办",
            "caption": "待办",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TodoEditView",
            "viewtag": "e00040c0d616f2f1c0ad4b36c9e920b5"
        },
        "testresultmeditview9": {
            "title": "测试结果多表单编辑视图",
            "caption": "测试结果",
            "viewtype": "DEMEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestResultMEditView9",
            "viewtag": "e01d5c7f0080afdcf4e9c9ee9924abef"
        },
        "producteditview": {
            "title": "产品编辑视图",
            "caption": "产品",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductEditView",
            "viewtag": "e042a1dee405b0a853f315b39a375783"
        },
        "sysemployeedashboardview": {
            "title": "人员数据看板视图",
            "caption": "人员",
            "viewtype": "DEPORTALVIEW",
            "viewmodule": "ou",
            "viewname": "SysEmployeeDashboardView",
            "viewtag": "e1d5f010f5462cd529bf9d820bc3d518"
        },
        "todofinishview": {
            "title": "完成",
            "caption": "完成",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TodoFinishView",
            "viewtag": "e2542e0695475ad7d3be90ae4372d13f"
        },
        "ibzproprojectusertaskprojectweeklygridview": {
            "title": "项目汇报用户任务表格视图",
            "caption": "项目汇报用户任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbzproProjectUserTaskProjectWeeklyGridView",
            "viewtag": "e288763f49b2c168996087e7b44084c4"
        },
        "buggridview9_storyrelated": {
            "title": "相关Bug",
            "caption": "相关Bug",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "BugGridView9_StoryRelated",
            "viewtag": "e378b13cfdc97557168ac3f71b35fe6b"
        },
        "buggridview9_assignedtome": {
            "title": "Bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "BugGridView9_AssignedToMe",
            "viewtag": "e38188ce3545b9a17d4f2e0df5b755e3"
        },
        "bugeditview_1162": {
            "title": "Bug",
            "caption": "Bug",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugEditView_1162",
            "viewtag": "e3fd4174298c8eddb25bbad0b36130c0"
        },
        "doclibcustomtreeexpview": {
            "title": "文档库树导航视图（自定义文档库）",
            "caption": "自定义文档库",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibCustomTreeExpView",
            "viewtag": "e475ce86ef6e70e70e098747075a3b1d"
        },
        "storygridview9_myassignedtome": {
            "title": "需求表格视图",
            "caption": "需求",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "StoryGridView9_MyAssignedToMe",
            "viewtag": "e52315b2024949865faeea4760371117"
        },
        "projectstatsprojectstorystatusstatsgridview": {
            "title": "项目统计表格视图",
            "caption": "项目需求状态统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsProjectStoryStatusStatsGridView",
            "viewtag": "e604551415cd4a2efa0ce2fb1f78b082"
        },
        "deptpickupgridview": {
            "title": "部门选择表格视图",
            "caption": "部门",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "DeptPickupGridView",
            "viewtag": "e644f7976b08c3d7f14fd7e1d5329da8"
        },
        "taskstorytaskgroupgridview": {
            "title": "任务表格视图（需求分组）",
            "caption": "需求分组",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskStoryTaskGroupGridView",
            "viewtag": "e648566cac4a7df484196995a17af08c"
        },
        "doccreateeditview": {
            "title": "创建文档",
            "caption": "文档",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocCreateEditView",
            "viewtag": "e79942d4fd1d908a92701bc85e0810af"
        },
        "testsuiteeditview9": {
            "title": "测试套件编辑视图",
            "caption": "测试套件",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestSuiteEditView9",
            "viewtag": "e89b0906815ccabb03d421a31e94bc4a"
        },
        "casemaindetaileditview9": {
            "title": "测试用例编辑视图",
            "caption": "测试用例",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseMainDetailEditView9",
            "viewtag": "e91aa71d1c30e364681685deacb259a2"
        },
        "usermaingridview": {
            "title": "用户表格视图",
            "caption": "用户",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "UserMainGridView",
            "viewtag": "e92af8627a22ca2df4a92efbbff8e9db"
        },
        "buildeditview": {
            "title": "版本编辑视图",
            "caption": "版本",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BuildEditView",
            "viewtag": "e9d61d4506a28dec9a6f1d7b9e1fff6a"
        },
        "productplanmaindataeditview": {
            "title": "产品计划编辑视图",
            "caption": "产品计划",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductPlanMainDataEditView",
            "viewtag": "e9ed68625a3175f2645a2b2a793f9732"
        },
        "testreportactioneditview": {
            "title": "测试报告编辑视图（历史记录）",
            "caption": "历史记录",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportActionEditView",
            "viewtag": "ea118a30ed33a3579e4e45d879385123"
        },
        "taskeditview": {
            "title": "任务编辑视图",
            "caption": "任务",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskEditView",
            "viewtag": "ea141fddc78fd1af4d06e494baf12cc1"
        },
        "doclibproducttreeexpview": {
            "title": "文档库树导航视图（产品文档库）",
            "caption": "产品文档库",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibProductTreeExpView",
            "viewtag": "ea1c50ed94209eae6a5cbd3ffa5a8d17"
        },
        "sysemployeeusr3gridviewuserconcat": {
            "title": "人员表格视图",
            "caption": "人员",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "SysEmployeeUsr3GridViewUserConcat",
            "viewtag": "ea2fd7d5009d70ea21005bed6e7591fb"
        },
        "doclibcustomdoclibchildtreeview": {
            "title": "文档库树视图（自定义文档库-子目录）",
            "caption": "自定义文档库-子目录",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibCustomDocLibChildTreeView",
            "viewtag": "ea6a5cb0a178f58bf7cad0f6ea67ce0a"
        },
        "casegridview9": {
            "title": "测试用例表格视图",
            "caption": "测试用例",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseGridView9",
            "viewtag": "ea824384328af489b2686dbaa04c4cc0"
        },
        "ibzmyterritoryreporttabexpview": {
            "title": "我的地盘分页导航视图",
            "caption": "个人",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "report",
            "viewname": "IbzMyTerritoryReportTabExpView",
            "viewtag": "eafce53cbf0c9a1108bc8a0319c09808"
        },
        "caserunresultchartview9": {
            "title": "测试用例图表视图（执行结果）",
            "caption": "执行结果",
            "viewtype": "DECHARTVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseRunResultChartView9",
            "viewtag": "eb0adb7cc6e13409cd3f91e0e36d7c45"
        },
        "casegridview9_mecretae": {
            "title": "测试用例表格视图",
            "caption": "测试用例",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseGridView9_MeCretae",
            "viewtag": "ec0f9989926ab7fb4faf31f25b800d2d"
        },
        "ibzmyterritorylistview9": {
            "title": "我的工作",
            "caption": "我的工作",
            "viewtype": "DELISTVIEW9",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryListView9",
            "viewtag": "ecc0369834ef12678e1c34ca782aad23"
        },
        "bugstorytobugeditview": {
            "title": "Bug",
            "caption": "Bug",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "BugStoryTOBugEditView",
            "viewtag": "ecdca86e0402c79cb2a9978ea04f8330"
        },
        "testmodulegridviewmain": {
            "title": "产品模块表格视图",
            "caption": "测试模块",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "TestModuleGridViewMain",
            "viewtag": "ed329f43ccb32635aa3d643e421c3eb3"
        },
        "ibzreportlycreateeditview": {
            "title": "汇报编辑视图",
            "caption": "汇报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzReportlyCreateEditView",
            "viewtag": "ee2c37e457f0b7bc79b04f7e9457d62d"
        },
        "projectdashboardinfoview": {
            "title": "项目信息",
            "caption": "项目",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectDashboardInfoView",
            "viewtag": "ef1a8c8701140368af895304274c602a"
        },
        "doclibprojecttreeexpview": {
            "title": "文档库树导航视图（项目文档库）",
            "caption": "项目文档库",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "DocLibProjectTreeExpView",
            "viewtag": "ef40f09d3d3ee7ac0c78b8bcb462f973"
        },
        "ibzmyterritorytabexpview": {
            "title": "我的地盘",
            "caption": "我的地盘",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryTabExpView",
            "viewtag": "ef6be1c6669da048517cc2fd219529f6"
        },
        "taskmaindetailview9": {
            "title": "任务编辑视图",
            "caption": "任务",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskMainDetailView9",
            "viewtag": "ef6cfafd09bb61ddb6fec7840f78e97d"
        },
        "productcasetreeexpview": {
            "title": "产品需求导航视图",
            "caption": "产品",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductCaseTreeExpView",
            "viewtag": "efbe7c07b6176b6a48581178d27d39e5"
        },
        "projectstatsprojectbugtypesumusr2gridview": {
            "title": "项目bug类型统计表格视图",
            "caption": "项目统计",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsProjectBugTypeSumUsr2GridView",
            "viewtag": "f0533943874edff99f02a3cdfb584b38"
        },
        "sysupdateloginfoeditview": {
            "title": "系统更新日志编辑视图",
            "caption": "更新日志",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibiz",
            "viewname": "SysUpdateLogInfoEditView",
            "viewtag": "f05b112ce6c2ef73ca7d15ad98a0f689"
        },
        "ibzdailydailyinfoeditview": {
            "title": "日报编辑视图(日报描述)",
            "caption": "日报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "report",
            "viewname": "IbzDailyDailyInfoEditView",
            "viewtag": "f0d0f8c1b108c3227888a127f1e7a89c"
        },
        "ibizproplugingridview": {
            "title": "系统插件表格视图",
            "caption": "系统插件",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizplugin",
            "viewname": "IBIZProPluginGridView",
            "viewtag": "f17a5c894627e83a450a47a7cd75968b"
        },
        "tododesceditview9": {
            "title": "待办事宜表编辑视图",
            "caption": "基本信息",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "TodoDescEditView9",
            "viewtag": "f1b6682890513f1e91a45927d4cd6efa"
        },
        "doclibbyproducttreeexpview": {
            "title": "文档库树导航视图（产品下属）",
            "caption": "产品下属文档库",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "DocLibByProductTreeExpView",
            "viewtag": "f1d15d6af90bb0d83c07c6dca5b4d61e"
        },
        "tasktreeeditview": {
            "title": "任务编辑视图（树导航显示）",
            "caption": "树导航显示",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskTreeEditView",
            "viewtag": "f1ee6f1e2f66e3c27b6eddb3d5d526f9"
        },
        "taskgridview9_assignedtome": {
            "title": "任务表格视图",
            "caption": "任务",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskGridView9_AssignedToMe",
            "viewtag": "f20fe6d7aa45a13c1e7343fbe4c0caaf"
        },
        "ibzmyterritorymywork": {
            "title": "我的工作",
            "caption": "我的工作",
            "viewtype": "DELISTVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryMyWork",
            "viewtag": "f2fb92cfa58f754045d11085cb9c46a9"
        },
        "testreporteditview": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportEditView",
            "viewtag": "f340b16bd1355b1c511d9da4b00476e2"
        },
        "sysemployeegridexpviewdept": {
            "title": "人员表格导航视图",
            "caption": "人员",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "SysEmployeeGridExpViewDept",
            "viewtag": "f3aac9310b3f814a247eed4bc285ac07"
        },
        "casereportlinkgridview": {
            "title": "测试用例表格视图（报告关联用例）",
            "caption": "关联用例",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseReportLinkGridView",
            "viewtag": "f3bb66654596830563326a56cf36a458"
        },
        "storykanbanview": {
            "title": "需求看板视图",
            "caption": "需求",
            "viewtype": "DEKANBANVIEW",
            "viewmodule": "zentao",
            "viewname": "StoryKanbanView",
            "viewtag": "f43e50ecf07b9c17a3a78139b17163f6"
        },
        "ibizproprojectweeklygridview": {
            "title": "项目周报表格视图",
            "caption": "项目周报",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproProjectWeeklyGridView",
            "viewtag": "f48f22603c40523eb7a9d88737237b11"
        },
        "systeammembergridexpviewteam": {
            "title": "组成员表格导航视图",
            "caption": "组成员",
            "viewtype": "DEGRIDEXPVIEW",
            "viewmodule": "ou",
            "viewname": "SysTeamMemberGridExpViewTeam",
            "viewtag": "f5d633f92a5353687cbb187a7dc9bf31"
        },
        "todoactiviteview": {
            "title": "激活",
            "caption": "激活",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TodoActiviteView",
            "viewtag": "f5f4e6f9ef5ab3f55ef802e9b2304006"
        },
        "docmorerecentupdatetreeview": {
            "title": "文档树视图",
            "caption": "最近更新",
            "viewtype": "DETREEVIEW",
            "viewmodule": "zentao",
            "viewname": "DocMoreRecentUpdateTreeView",
            "viewtag": "f5fdf8a3d702d4080d12a764737533c4"
        },
        "casegridview": {
            "title": "功能测试表格视图",
            "caption": "测试用例",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "CaseGridView",
            "viewtag": "f63aae9bc8cfe29654439743b465a942"
        },
        "producteditview_close": {
            "title": "关闭产品",
            "caption": "关闭产品",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductEditView_Close",
            "viewtag": "f67e66bcffbdb0dcb87e541997e19ee2"
        },
        "casestepmaingridview9": {
            "title": "用例步骤",
            "caption": "用例步骤",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "CaseStepMainGridView9",
            "viewtag": "f69bb8c09dbc7ce369c3c3806007b1d1"
        },
        "tasksubtasknewview": {
            "title": "子任务",
            "caption": "子任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskSubTaskNewView",
            "viewtag": "f6d0bb444705d74d6b39051dc8225eb9"
        },
        "productbugtreeexpview": {
            "title": "产品需求导航视图",
            "caption": "产品",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProductBugTreeExpView",
            "viewtag": "f78c94cb0a20d7f459753a4070f8f3e7"
        },
        "actionproducttrendslistview": {
            "title": "系统日志列表视图",
            "caption": "系统日志",
            "viewtype": "DELISTVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionProductTrendsListView",
            "viewtag": "f7a278d765ff0f85a2c59cbb2485fa30"
        },
        "ibzmyterritoryemploytreeexpview": {
            "title": "我的地盘树导航视图（员工负载计）",
            "caption": "员工负载",
            "viewtype": "DETREEEXPVIEW",
            "viewmodule": "ibiz",
            "viewname": "IbzMyTerritoryEmployTreeExpView",
            "viewtag": "f7c85815755a8e1ab174b1214a0ea7cf"
        },
        "taskmaineditview": {
            "title": "任务",
            "caption": "任务",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskMainEditView",
            "viewtag": "f7cc804a46bac35842ad9cb21963ee26"
        },
        "projecteditview": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectEditView",
            "viewtag": "f83dac873b9215483c4bb91673284b41"
        },
        "actioneditview": {
            "title": "备注",
            "caption": "备注",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "ActionEditView",
            "viewtag": "f8b69912b3ca27b5d083c8fb1971c84a"
        },
        "taskchildmoregridview": {
            "title": "任务表格视图（子任务-更多）",
            "caption": "子任务",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskChildMoreGridView",
            "viewtag": "f90755fad872031d4484f3c6791d6973"
        },
        "testtaskeditview_committest": {
            "title": "提交测试",
            "caption": "测试版本",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestTaskEditView_commitTest",
            "viewtag": "f9491d4c2ef8e5263adeb7c8be5b66f9"
        },
        "bugtotalopenedchartview": {
            "title": "Bug图表视图（累计创建Bug）",
            "caption": "累计创建Bug",
            "viewtype": "DECHARTVIEW",
            "viewmodule": "zentao",
            "viewname": "BugTotalOpenedChartView",
            "viewtag": "fa5d7365b882bda04948654008a30e2e"
        },
        "branchpickupgridview": {
            "title": "平台选择表格视图",
            "caption": "产品的分支和平台信息",
            "viewtype": "DEPICKUPGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BranchPickupGridView",
            "viewtag": "fa64e271c22e6aaa89873d2556edf529"
        },
        "testreporteditview_project": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportEditView_Project",
            "viewtag": "faba3852d18767038ace554cb404255d"
        },
        "usercontactgridview": {
            "title": "usercontact表格视图",
            "caption": "用户联系方式",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "UserContactGridView",
            "viewtag": "fad11065c8858a545a9df670cdccce44"
        },
        "ibzreportmytabexpview": {
            "title": "汇报分页导航视图（我收到的）",
            "caption": "我收到的",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "report",
            "viewname": "IbzReportMyTabExpView",
            "viewtag": "faea7e2d2427080c2bd6683de726ad8d"
        },
        "taskgridview9_project": {
            "title": "任务表格视图",
            "caption": "相关任务",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TaskGridView9_Project",
            "viewtag": "fb38be2889b3a1d842fdae62e2228c24"
        },
        "taskdonetaskview": {
            "title": "完成任务",
            "caption": "完成任务",
            "viewtype": "DEOPTVIEW",
            "viewmodule": "zentao",
            "viewname": "TaskDoneTaskView",
            "viewtag": "fb6280b8fa4ffa498db1013ac94b96e6"
        },
        "ibizproprojectweeklyeditview": {
            "title": "项目周报编辑视图",
            "caption": "项目周报",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "ibizpro",
            "viewname": "IbizproProjectWeeklyEditView",
            "viewtag": "fb9f2a7e4789eb949b4277e2602bb947"
        },
        "bugmainmygridview": {
            "title": "bug表格视图",
            "caption": "Bug",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "zentao",
            "viewname": "BugMainMyGridView",
            "viewtag": "fbe7f5ac8ca88bd5a1b2445d4c62bf9b"
        },
        "testreportprojectmaininfoview": {
            "title": "测试报告编辑视图",
            "caption": "测试报告",
            "viewtype": "DEEDITVIEW",
            "viewmodule": "zentao",
            "viewname": "TestReportProjectMainInfoView",
            "viewtag": "fc13cdf6e0efbfda27195989dba8b0ab"
        },
        "projectmaintabexpview": {
            "title": "项目",
            "caption": "项目",
            "viewtype": "DETABEXPVIEW",
            "viewmodule": "zentao",
            "viewname": "ProjectMainTabExpView",
            "viewtag": "fd0b8748ff96edcde009d39903a9f211"
        },
        "projectstatseditview9": {
            "title": "项目统计编辑视图",
            "caption": "项目统计",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "ibiz",
            "viewname": "ProjectStatsEditView9",
            "viewtag": "fd583d6624bd0c70f13e1bfc2696fc2f"
        },
        "testtaskgridview9_untested": {
            "title": "测试版本表格视图",
            "caption": "测试版本",
            "viewtype": "DEGRIDVIEW9",
            "viewmodule": "zentao",
            "viewname": "TestTaskGridView9_UnTested",
            "viewtag": "fe6c2d81a15a946d67c798e5af01f6ae"
        },
        "employeeloadgridview": {
            "title": "员工负载表表格视图",
            "caption": "员工负载表",
            "viewtype": "DEGRIDVIEW",
            "viewmodule": "ibiz",
            "viewname": "EmpLoyeeloadGridView",
            "viewtag": "fed7280032d303b9f49070bd3817d668"
        },
        "projectstoryeditview9": {
            "title": "项目编辑视图（需求相关）",
            "caption": "需求",
            "viewtype": "DEEDITVIEW9",
            "viewmodule": "zentao",
            "viewname": "ProjectStoryEditView9",
            "viewtag": "ffc4f73a06a11798a643ea10965389ac"
        }
    }];
});

// 获取视图消息分组信息
mock.onGet('./assets/json/view-message-group.json').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status,{
    }];
});