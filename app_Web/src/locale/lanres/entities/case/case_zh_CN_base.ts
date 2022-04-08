import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("测试用例", null),
		fields: {
			lastediteddate: commonLogic.appcommonhandle("修改日期",null),
			scripteddate: commonLogic.appcommonhandle("scriptedDate",null),
			color: commonLogic.appcommonhandle("标题颜色",null),
			path: commonLogic.appcommonhandle("path",null),
			openeddate: commonLogic.appcommonhandle("创建日期",null),
			lastrunresult: commonLogic.appcommonhandle("结果",null),
			modulename1: commonLogic.appcommonhandle("模块名称",null),
			linkcase: commonLogic.appcommonhandle("相关用例",null),
			casesteps: commonLogic.appcommonhandle("用例步骤集合",null),
			task: commonLogic.appcommonhandle("属性",null),
			order: commonLogic.appcommonhandle("排序",null),
			howrun: commonLogic.appcommonhandle("howRun",null),
			resultcnt: commonLogic.appcommonhandle("测试结果数",null),
			noticeusers: commonLogic.appcommonhandle("消息通知用户",null),
			version: commonLogic.appcommonhandle("用例版本",null),
			scriptedby: commonLogic.appcommonhandle("scriptedBy",null),
			openedby: commonLogic.appcommonhandle("由谁创建",null),
			type: commonLogic.appcommonhandle("用例类型",null),
			resultfalicnt: commonLogic.appcommonhandle("测试失败数",null),
			status: commonLogic.appcommonhandle("用例状态",null),
			comment: commonLogic.appcommonhandle("备注",null),
			auto: commonLogic.appcommonhandle("auto",null),
			isfavorites: commonLogic.appcommonhandle("是否收藏",null),
			frequency: commonLogic.appcommonhandle("frequency",null),
			title: commonLogic.appcommonhandle("用例标题",null),
			lasteditedby: commonLogic.appcommonhandle("最后修改者",null),
			reviewedby: commonLogic.appcommonhandle("由谁评审",null),
			files: commonLogic.appcommonhandle("附件",null),
			tobugcnt: commonLogic.appcommonhandle("转bug数",null),
			assignedto: commonLogic.appcommonhandle("指派给",null),
			deleted: commonLogic.appcommonhandle("已删除",null),
			revieweddate: commonLogic.appcommonhandle("评审时间",null),
			pri: commonLogic.appcommonhandle("优先级",null),
			stage: commonLogic.appcommonhandle("适用阶段",null),
			scriptlocation: commonLogic.appcommonhandle("scriptLocation",null),
			status1: commonLogic.appcommonhandle("用例状态",null),
			lastrundate: commonLogic.appcommonhandle("执行时间",null),
			keywords: commonLogic.appcommonhandle("关键词",null),
			scriptstatus: commonLogic.appcommonhandle("scriptStatus",null),
			frame: commonLogic.appcommonhandle("工具/框架",null),
			lastrunresult1: commonLogic.appcommonhandle("测试用例结果",null),
			stepcnt: commonLogic.appcommonhandle("用例步骤数",null),
			substatus: commonLogic.appcommonhandle("子状态",null),
			id: commonLogic.appcommonhandle("用例编号",null),
			precondition: commonLogic.appcommonhandle("前置条件",null),
			lastrunner: commonLogic.appcommonhandle("执行人",null),
			libname: commonLogic.appcommonhandle("用例库",null),
			fromcaseversion: commonLogic.appcommonhandle("来源用例版本",null),
			storyname: commonLogic.appcommonhandle("需求名称",null),
			modulename: commonLogic.appcommonhandle("模块名称",null),
			storyversion: commonLogic.appcommonhandle("需求版本",null),
			productname: commonLogic.appcommonhandle("产品名称",null),
			fromcaseid: commonLogic.appcommonhandle("来源用例",null),
			branch: commonLogic.appcommonhandle("平台/分支",null),
			frombug: commonLogic.appcommonhandle("来源Bug",null),
			story: commonLogic.appcommonhandle("相关需求",null),
			product: commonLogic.appcommonhandle("所属产品",null),
			lib: commonLogic.appcommonhandle("所属库",null),
			module: commonLogic.appcommonhandle("所属模块",null),
		},
			views: {
				editview: {
					caption: commonLogic.appcommonhandle("测试用例",null),
					title: commonLogic.appcommonhandle("功能测试编辑视图",null),
				},
				maineditview: {
					caption: commonLogic.appcommonhandle("测试用例",null),
					title: commonLogic.appcommonhandle("测试用例",null),
				},
				cursuitgridview: {
					caption: commonLogic.appcommonhandle("功能测试",null),
					title: commonLogic.appcommonhandle("功能测试",null),
				},
				mainmygridview: {
					caption: commonLogic.appcommonhandle("功能测试",null),
					title: commonLogic.appcommonhandle("功能测试",null),
				},
				curtesttaskgridview: {
					caption: commonLogic.appcommonhandle("功能测试",null),
					title: commonLogic.appcommonhandle("功能测试",null),
				},
				tobugtesteditview: {
					caption: commonLogic.appcommonhandle("转BUG",null),
					title: commonLogic.appcommonhandle("转BUG",null),
				},
				mainmynewgridview: {
					caption: commonLogic.appcommonhandle("功能测试",null),
					title: commonLogic.appcommonhandle("功能测试",null),
				},
				moduleentrygridview: {
					caption: commonLogic.appcommonhandle("测试结果条目",null),
					title: commonLogic.appcommonhandle("测试用例表格视图（测试结果条目）",null),
				},
				casetypechartview9: {
					caption: commonLogic.appcommonhandle("测试类型",null),
					title: commonLogic.appcommonhandle("测试用例图表视图（测试类型）",null),
				},
				exceditview: {
					caption: commonLogic.appcommonhandle("执行结果",null),
					title: commonLogic.appcommonhandle("执行结果",null),
				},
				modulechartview9: {
					caption: commonLogic.appcommonhandle("模块",null),
					title: commonLogic.appcommonhandle("测试用例图表视图（模块）",null),
				},
				gridview9_storyrelated: {
					caption: commonLogic.appcommonhandle("相关用例",null),
					title: commonLogic.appcommonhandle("相关用例",null),
				},
				casefavorite: {
					caption: commonLogic.appcommonhandle("测试用例",null),
					title: commonLogic.appcommonhandle("case我得收藏",null),
				},
				tobugeditview: {
					caption: commonLogic.appcommonhandle("转BUG",null),
					title: commonLogic.appcommonhandle("转BUG",null),
				},
				maingridview: {
					caption: commonLogic.appcommonhandle("功能测试",null),
					title: commonLogic.appcommonhandle("功能测试",null),
				},
				testoptionview: {
					caption: commonLogic.appcommonhandle("执行",null),
					title: commonLogic.appcommonhandle("执行",null),
				},
				mainnewview: {
					caption: commonLogic.appcommonhandle("功能测试",null),
					title: commonLogic.appcommonhandle("功能测试",null),
				},
				linkcasegridview: {
					caption: commonLogic.appcommonhandle("关联用例",null),
					title: commonLogic.appcommonhandle("测试用例表格视图（关联用例）",null),
				},
				runerentrygridview: {
					caption: commonLogic.appcommonhandle("测试结果条目",null),
					title: commonLogic.appcommonhandle("测试用例表格视图（测试结果条目）",null),
				},
				resultentrygridview: {
					caption: commonLogic.appcommonhandle("测试结果条目",null),
					title: commonLogic.appcommonhandle("测试用例表格视图（测试结果条目）",null),
				},
				testmaindetaileditview9: {
					caption: commonLogic.appcommonhandle("测试用例",null),
					title: commonLogic.appcommonhandle("测试用例编辑视图",null),
				},
				gridview9_storyaffect: {
					caption: commonLogic.appcommonhandle("相关用例",null),
					title: commonLogic.appcommonhandle("相关用例",null),
				},
				testtaskexceditview: {
					caption: commonLogic.appcommonhandle("执行结果",null),
					title: commonLogic.appcommonhandle("执行结果",null),
				},
				suitelinkcasegridview: {
					caption: commonLogic.appcommonhandle("关联用例",null),
					title: commonLogic.appcommonhandle("测试用例表格视图（关联用例）",null),
				},
				typeentrygridview: {
					caption: commonLogic.appcommonhandle("测试结果条目",null),
					title: commonLogic.appcommonhandle("测试用例表格视图（测试结果条目）",null),
				},
				projectreportlinkgridview: {
					caption: commonLogic.appcommonhandle("关联用例",null),
					title: commonLogic.appcommonhandle("测试用例表格视图（报告关联用例）",null),
				},
				testmaindashboardview: {
					caption: commonLogic.appcommonhandle("功能测试",null),
					title: commonLogic.appcommonhandle("功能测试",null),
				},
				optionview: {
					caption: commonLogic.appcommonhandle("执行",null),
					title: commonLogic.appcommonhandle("执行",null),
				},
				batchnewgridview: {
					caption: commonLogic.appcommonhandle("测试用例",null),
					title: commonLogic.appcommonhandle("测试用例",null),
				},
				maindashboardview: {
					caption: commonLogic.appcommonhandle("功能测试",null),
					title: commonLogic.appcommonhandle("功能测试",null),
				},
				maininfoeditview9: {
					caption: commonLogic.appcommonhandle("测试用例",null),
					title: commonLogic.appcommonhandle("测试用例编辑视图",null),
				},
				totalopenedcasechartview9: {
					caption: commonLogic.appcommonhandle("累计创建用例",null),
					title: commonLogic.appcommonhandle("测试用例图表视图（累计创建用例）",null),
				},
				gridview9_my: {
					caption: commonLogic.appcommonhandle("测试用例",null),
					title: commonLogic.appcommonhandle("测试用例表格视图",null),
				},
				maindetaileditview9: {
					caption: commonLogic.appcommonhandle("测试用例",null),
					title: commonLogic.appcommonhandle("测试用例编辑视图",null),
				},
				gridview9: {
					caption: commonLogic.appcommonhandle("测试用例",null),
					title: commonLogic.appcommonhandle("测试用例表格视图",null),
				},
				runresultchartview9: {
					caption: commonLogic.appcommonhandle("执行结果",null),
					title: commonLogic.appcommonhandle("测试用例图表视图（执行结果）",null),
				},
				gridview9_mecretae: {
					caption: commonLogic.appcommonhandle("测试用例",null),
					title: commonLogic.appcommonhandle("测试用例表格视图",null),
				},
				reportlinkgridview: {
					caption: commonLogic.appcommonhandle("关联用例",null),
					title: commonLogic.appcommonhandle("测试用例表格视图（报告关联用例）",null),
				},
				gridview: {
					caption: commonLogic.appcommonhandle("测试用例",null),
					title: commonLogic.appcommonhandle("功能测试表格视图",null),
				},
			},
			mainnew_form: {
				details: {
					druipart1: commonLogic.appcommonhandle("用例步骤",null), 
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					group1: commonLogic.appcommonhandle("测试用例基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("修改日期",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用例编号",null), 
					srfmajortext: commonLogic.appcommonhandle("用例标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					product: commonLogic.appcommonhandle("所属产品",null), 
					productname: commonLogic.appcommonhandle("产品名称",null), 
					module: commonLogic.appcommonhandle("所属模块",null), 
					modulename: commonLogic.appcommonhandle("模块名称",null), 
					type: commonLogic.appcommonhandle("用例类型",null), 
					stage: commonLogic.appcommonhandle("适用阶段",null), 
					story: commonLogic.appcommonhandle("相关需求",null), 
					storyname: commonLogic.appcommonhandle("需求名称",null), 
					title: commonLogic.appcommonhandle("用例标题",null), 
					pri: commonLogic.appcommonhandle("优先级",null), 
					color: commonLogic.appcommonhandle("标题颜色",null), 
					precondition: commonLogic.appcommonhandle("前置条件",null), 
					keywords: commonLogic.appcommonhandle("关键词",null), 
					id: commonLogic.appcommonhandle("用例编号",null), 
					files: commonLogic.appcommonhandle("附件",null), 
				},
				uiactions: {
				},
			},
			maininfo_form: {
				details: {
					druipart1: commonLogic.appcommonhandle("用例步骤",null), 
					druipart2: commonLogic.appcommonhandle("",null), 
					grouppanel1: commonLogic.appcommonhandle("附件",null), 
					group1: commonLogic.appcommonhandle("测试用例基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("修改日期",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用例编号",null), 
					srfmajortext: commonLogic.appcommonhandle("用例标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("",null), 
					title: commonLogic.appcommonhandle("",null), 
					version: commonLogic.appcommonhandle("",null), 
					color: commonLogic.appcommonhandle("标题颜色",null), 
					precondition: commonLogic.appcommonhandle("前置条件",null), 
				},
				uiactions: {
				},
			},
			maincarry_form: {
				details: {
					grouppanel4: commonLogic.appcommonhandle("分组面板",null), 
					druipart1: commonLogic.appcommonhandle("用例步骤",null), 
					rawitem1: commonLogic.appcommonhandle("",null), 
					rawitem2: commonLogic.appcommonhandle("",null), 
					grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
					druipart2: commonLogic.appcommonhandle("",null), 
					grouppanel1: commonLogic.appcommonhandle("执行结果",null), 
					grouppanel3: commonLogic.appcommonhandle("分组面板",null), 
					group1: commonLogic.appcommonhandle("测试用例基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("修改日期",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用例编号",null), 
					srfmajortext: commonLogic.appcommonhandle("用例标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					version: commonLogic.appcommonhandle("版本#",null), 
					precondition: commonLogic.appcommonhandle("前置条件",null), 
					resultcnt: commonLogic.appcommonhandle("共执行",null), 
					resultfalicnt: commonLogic.appcommonhandle("失败",null), 
					id: commonLogic.appcommonhandle("用例编号",null), 
				},
				uiactions: {
				},
			},
			mainr_form: {
				details: {
					grouppanel4: commonLogic.appcommonhandle("分组面板",null), 
					rawitem1: commonLogic.appcommonhandle("",null), 
					rawitem2: commonLogic.appcommonhandle("",null), 
					grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
					druipart2: commonLogic.appcommonhandle("",null), 
					grouppanel1: commonLogic.appcommonhandle("执行结果",null), 
					grouppanel3: commonLogic.appcommonhandle("分组面板",null), 
					group1: commonLogic.appcommonhandle("测试用例基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("修改日期",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用例编号",null), 
					srfmajortext: commonLogic.appcommonhandle("用例标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					version: commonLogic.appcommonhandle("版本#",null), 
					precondition: commonLogic.appcommonhandle("前置条件",null), 
					resultcnt: commonLogic.appcommonhandle("共执行",null), 
					resultfalicnt: commonLogic.appcommonhandle("失败",null), 
					id: commonLogic.appcommonhandle("用例编号",null), 
				},
				uiactions: {
				},
			},
			tobug_form: {
				details: {
					rawitem1: commonLogic.appcommonhandle("",null), 
					rawitem2: commonLogic.appcommonhandle("",null), 
					grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
					druipart2: commonLogic.appcommonhandle("",null), 
					grouppanel1: commonLogic.appcommonhandle("执行结果",null), 
					group1: commonLogic.appcommonhandle("测试用例基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("修改日期",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用例编号",null), 
					srfmajortext: commonLogic.appcommonhandle("用例标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					resultcnt: commonLogic.appcommonhandle("共执行",null), 
					resultfalicnt: commonLogic.appcommonhandle("失败",null), 
					id: commonLogic.appcommonhandle("用例编号",null), 
				},
				uiactions: {
				},
			},
			mainedit_form: {
				details: {
					druipart1: commonLogic.appcommonhandle("用例步骤",null), 
					grouppanel5: commonLogic.appcommonhandle("用例步骤",null), 
					druipart2: commonLogic.appcommonhandle("",null), 
					grouppanel6: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel2: commonLogic.appcommonhandle("基本信息",null), 
					grouppanel4: commonLogic.appcommonhandle("创建编辑",null), 
					grouppanel3: commonLogic.appcommonhandle("分组面板",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("修改日期",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用例编号",null), 
					srfmajortext: commonLogic.appcommonhandle("用例标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					title: commonLogic.appcommonhandle("用例标题",null), 
					color: commonLogic.appcommonhandle("标题颜色",null), 
					precondition: commonLogic.appcommonhandle("前置条件",null), 
					comment: commonLogic.appcommonhandle("备注",null), 
					files: commonLogic.appcommonhandle("附件",null), 
					product: commonLogic.appcommonhandle("所属产品",null), 
					productname: commonLogic.appcommonhandle("产品名称",null), 
					module: commonLogic.appcommonhandle("所属模块",null), 
					modulename: commonLogic.appcommonhandle("模块名称",null), 
					story: commonLogic.appcommonhandle("相关需求",null), 
					storyname: commonLogic.appcommonhandle("需求名称",null), 
					type: commonLogic.appcommonhandle("用例类型",null), 
					stage: commonLogic.appcommonhandle("适用阶段",null), 
					version: commonLogic.appcommonhandle("用例版本",null), 
					storyversion: commonLogic.appcommonhandle("需求版本",null), 
					pri: commonLogic.appcommonhandle("优先级",null), 
					status: commonLogic.appcommonhandle("用例状态",null), 
					keywords: commonLogic.appcommonhandle("关键词",null), 
					linkcase: commonLogic.appcommonhandle("相关用例",null), 
					openedby: commonLogic.appcommonhandle("由谁创建",null), 
					openeddate: commonLogic.appcommonhandle("于",null), 
					lasteditedby: commonLogic.appcommonhandle("最后修改者",null), 
					lastediteddate: commonLogic.appcommonhandle("于",null), 
					id: commonLogic.appcommonhandle("用例编号",null), 
				},
				uiactions: {
				},
			},
			maindetail_form: {
				details: {
					grouppanel1: commonLogic.appcommonhandle("相关Bug",null), 
					grouppanel2: commonLogic.appcommonhandle("创建编辑",null), 
					group1: commonLogic.appcommonhandle("基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("修改日期",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用例编号",null), 
					srfmajortext: commonLogic.appcommonhandle("用例标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					product: commonLogic.appcommonhandle("所属产品",null), 
					productname: commonLogic.appcommonhandle("产品名称",null), 
					module: commonLogic.appcommonhandle("所属模块",null), 
					modulename: commonLogic.appcommonhandle("模块名称",null), 
					modulename1: commonLogic.appcommonhandle("模块名称",null), 
					storyname: commonLogic.appcommonhandle("相关需求",null), 
					type: commonLogic.appcommonhandle("用例类型",null), 
					stage: commonLogic.appcommonhandle("适用阶段",null), 
					pri: commonLogic.appcommonhandle("优先级",null), 
					status: commonLogic.appcommonhandle("用例状态",null), 
					lastrundate: commonLogic.appcommonhandle("执行时间",null), 
					lastrunresult: commonLogic.appcommonhandle("结果",null), 
					keywords: commonLogic.appcommonhandle("关键词",null), 
					linkcase: commonLogic.appcommonhandle("相关用例",null), 
					openedby: commonLogic.appcommonhandle("由谁创建",null), 
					openeddate: commonLogic.appcommonhandle("于",null), 
					lasteditedby: commonLogic.appcommonhandle("最后修改者",null), 
					lastediteddate: commonLogic.appcommonhandle("于",null), 
					id: commonLogic.appcommonhandle("用例编号",null), 
					story: commonLogic.appcommonhandle("相关需求",null), 
				},
				uiactions: {
				},
			},
			main_form: {
				details: {
					group1: commonLogic.appcommonhandle("case基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					group2: commonLogic.appcommonhandle("操作信息",null), 
					formpage2: commonLogic.appcommonhandle("其它",null), 
					srfupdatedate: commonLogic.appcommonhandle("修改日期",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用例编号",null), 
					srfmajortext: commonLogic.appcommonhandle("用例标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					title: commonLogic.appcommonhandle("用例标题",null), 
					color: commonLogic.appcommonhandle("标题颜色",null), 
					id: commonLogic.appcommonhandle("用例编号",null), 
				},
				uiactions: {
				},
			},
			maintesttask_form: {
				details: {
					grouppanel4: commonLogic.appcommonhandle("分组面板",null), 
					druipart1: commonLogic.appcommonhandle("用例步骤",null), 
					rawitem1: commonLogic.appcommonhandle("",null), 
					rawitem3: commonLogic.appcommonhandle("",null), 
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					druipart2: commonLogic.appcommonhandle("",null), 
					grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel3: commonLogic.appcommonhandle("分组面板",null), 
					group1: commonLogic.appcommonhandle("测试用例基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("修改日期",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用例编号",null), 
					srfmajortext: commonLogic.appcommonhandle("用例标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					version: commonLogic.appcommonhandle("版本#",null), 
					precondition: commonLogic.appcommonhandle("前置条件",null), 
					resultcnt: commonLogic.appcommonhandle("共执行",null), 
					resultfalicnt: commonLogic.appcommonhandle("失败",null), 
					task: commonLogic.appcommonhandle("属性",null), 
					id: commonLogic.appcommonhandle("用例编号",null), 
				},
				uiactions: {
				},
			},
			testtaskrmain_form: {
				details: {
					grouppanel4: commonLogic.appcommonhandle("分组面板",null), 
					rawitem1: commonLogic.appcommonhandle("",null), 
					rawitem3: commonLogic.appcommonhandle("",null), 
					grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
					druipart2: commonLogic.appcommonhandle("",null), 
					grouppanel1: commonLogic.appcommonhandle("执行结果",null), 
					grouppanel3: commonLogic.appcommonhandle("分组面板",null), 
					group1: commonLogic.appcommonhandle("测试用例基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("修改日期",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用例编号",null), 
					srfmajortext: commonLogic.appcommonhandle("用例标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					version: commonLogic.appcommonhandle("版本#",null), 
					precondition: commonLogic.appcommonhandle("前置条件",null), 
					resultcnt: commonLogic.appcommonhandle("共执行",null), 
					resultfalicnt: commonLogic.appcommonhandle("失败",null), 
					id: commonLogic.appcommonhandle("用例编号",null), 
				},
				uiactions: {
				},
			},
			tobugtesttask_form: {
				details: {
					rawitem1: commonLogic.appcommonhandle("",null), 
					rawitem2: commonLogic.appcommonhandle("",null), 
					grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
					druipart2: commonLogic.appcommonhandle("",null), 
					grouppanel1: commonLogic.appcommonhandle("执行结果",null), 
					group1: commonLogic.appcommonhandle("测试用例基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("修改日期",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用例编号",null), 
					srfmajortext: commonLogic.appcommonhandle("用例标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					resultcnt: commonLogic.appcommonhandle("共执行",null), 
					resultfalicnt: commonLogic.appcommonhandle("失败",null), 
					id: commonLogic.appcommonhandle("用例编号",null), 
				},
				uiactions: {
				},
			},
			storyaffectcase_grid: {
				columns: {
					pri: commonLogic.appcommonhandle("P",null),
					title: commonLogic.appcommonhandle("用例标题",null),
					status: commonLogic.appcommonhandle("状态",null),
					openedby: commonLogic.appcommonhandle("由谁创建",null),
					lasteditedby: commonLogic.appcommonhandle("最后修改者",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			storyrelated_grid: {
				columns: {
					pri: commonLogic.appcommonhandle("P",null),
					title: commonLogic.appcommonhandle("用例标题",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			testmaingrid_grid: {
				columns: {
					id: commonLogic.appcommonhandle("id",null),
					pri: commonLogic.appcommonhandle("P",null),
					title: commonLogic.appcommonhandle("用例标题",null),
					type: commonLogic.appcommonhandle("用例类型",null),
					openedby: commonLogic.appcommonhandle("创建",null),
					assignedto: commonLogic.appcommonhandle("指派给",null),
					lastrunner: commonLogic.appcommonhandle("执行人",null),
					lastrundate: commonLogic.appcommonhandle("执行时间",null),
					lastrunresult: commonLogic.appcommonhandle("结果",null),
					status1: commonLogic.appcommonhandle("状态",null),
					tobugcnt: commonLogic.appcommonhandle("B",null),
					resultcnt: commonLogic.appcommonhandle("R",null),
					casesteps: commonLogic.appcommonhandle("S",null),
					uagridcolumn1: commonLogic.appcommonhandle("操作",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
			exportColumns: {
					id: commonLogic.appcommonhandle("id",null),
					pri: commonLogic.appcommonhandle("P",null),
					title: commonLogic.appcommonhandle("用例标题",null),
					type: commonLogic.appcommonhandle("用例类型",null),
					openedby: commonLogic.appcommonhandle("创建",null),
					lastrunner: commonLogic.appcommonhandle("执行人",null),
					lastrundate: commonLogic.appcommonhandle("执行时间",null),
					lastrunresult: commonLogic.appcommonhandle("结果",null),
					status: commonLogic.appcommonhandle("状态",null),
					status1: commonLogic.appcommonhandle("状态",null),
					tobugcnt: commonLogic.appcommonhandle("B",null),
					resultcnt: commonLogic.appcommonhandle("R",null),
					casesteps: commonLogic.appcommonhandle("S",null),
					lastrunresult1: commonLogic.appcommonhandle("测试用例结果",null),
					isfavorites: commonLogic.appcommonhandle("是否收藏",null),
					color: commonLogic.appcommonhandle("标题颜色",null),
			},
				uiactions: {
					case_edits: commonLogic.appcommonhandle("概况",null),
					case_confirmchange: commonLogic.appcommonhandle("确认用例变动",null),
					case_newbugbytestcaseresult: commonLogic.appcommonhandle("转Bug",null),
					case_caseopentestrunresultview: commonLogic.appcommonhandle("结果",null),
					case_caseexecute: commonLogic.appcommonhandle("执行",null),
					case_unlinkcase: commonLogic.appcommonhandle("移除",null),
				},
			},
			mainlinktest_grid: {
				columns: {
					id: commonLogic.appcommonhandle("ID",null),
					version: commonLogic.appcommonhandle("版本",null),
					pri: commonLogic.appcommonhandle("P",null),
					title: commonLogic.appcommonhandle("用例标题",null),
					type: commonLogic.appcommonhandle("用例类型",null),
					openedby: commonLogic.appcommonhandle("创建",null),
					lastrunner: commonLogic.appcommonhandle("执行人",null),
					lastrundate: commonLogic.appcommonhandle("执行时间",null),
					lastrunresult: commonLogic.appcommonhandle("结果",null),
					status1: commonLogic.appcommonhandle("状态",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			reportmaingrid_grid: {
				columns: {
					id: commonLogic.appcommonhandle("id",null),
					pri: commonLogic.appcommonhandle("P",null),
					title: commonLogic.appcommonhandle("用例标题",null),
					type: commonLogic.appcommonhandle("用例类型",null),
					openedby: commonLogic.appcommonhandle("创建",null),
					lastrunner: commonLogic.appcommonhandle("执行人",null),
					lastrundate: commonLogic.appcommonhandle("执行时间",null),
					lastrunresult: commonLogic.appcommonhandle("结果",null),
					status1: commonLogic.appcommonhandle("状态",null),
					tobugcnt: commonLogic.appcommonhandle("B",null),
					resultcnt: commonLogic.appcommonhandle("R",null),
					casesteps: commonLogic.appcommonhandle("S",null),
					lastrunresult1: commonLogic.appcommonhandle("测试用例结果",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			maingrid_grid: {
				columns: {
					id: commonLogic.appcommonhandle("id",null),
					pri: commonLogic.appcommonhandle("P",null),
					title: commonLogic.appcommonhandle("用例标题",null),
					type: commonLogic.appcommonhandle("用例类型",null),
					openedby: commonLogic.appcommonhandle("创建",null),
					lastrunner: commonLogic.appcommonhandle("执行人",null),
					lastrundate: commonLogic.appcommonhandle("执行时间",null),
					lastrunresult: commonLogic.appcommonhandle("结果",null),
					status1: commonLogic.appcommonhandle("状态",null),
					tobugcnt: commonLogic.appcommonhandle("B",null),
					resultcnt: commonLogic.appcommonhandle("R",null),
					casesteps: commonLogic.appcommonhandle("S",null),
					uagridcolumn1: commonLogic.appcommonhandle("操作",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
			exportColumns: {
					id: commonLogic.appcommonhandle("id",null),
					pri: commonLogic.appcommonhandle("P",null),
					title: commonLogic.appcommonhandle("用例标题",null),
					type: commonLogic.appcommonhandle("用例类型",null),
					openedby: commonLogic.appcommonhandle("创建",null),
					lastrunner: commonLogic.appcommonhandle("执行人",null),
					lastrundate: commonLogic.appcommonhandle("执行时间",null),
					lastrunresult: commonLogic.appcommonhandle("结果",null),
					status: commonLogic.appcommonhandle("状态",null),
					status1: commonLogic.appcommonhandle("状态",null),
					tobugcnt: commonLogic.appcommonhandle("B",null),
					resultcnt: commonLogic.appcommonhandle("R",null),
					casesteps: commonLogic.appcommonhandle("S",null),
					lastrunresult1: commonLogic.appcommonhandle("测试用例结果",null),
					isfavorites: commonLogic.appcommonhandle("是否收藏",null),
					color: commonLogic.appcommonhandle("标题颜色",null),
			},
				uiactions: {
					case_confirmstorychange: commonLogic.appcommonhandle("确认",null),
					case_opentestrunresultview: commonLogic.appcommonhandle("结果",null),
					case_execute: commonLogic.appcommonhandle("执行",null),
					case_mainedit: commonLogic.appcommonhandle("编辑",null),
					refresh: commonLogic.appcommonhandle("刷新",null),
					case_newbugbycaseresult: commonLogic.appcommonhandle("转Bug",null),
					copy: commonLogic.appcommonhandle("拷贝",null),
					case_casefavorite: commonLogic.appcommonhandle("收藏",null),
					case_casenfavorite: commonLogic.appcommonhandle("取消收藏",null),
				},
			},
			batchnew_grid: {
				columns: {
					modulename: commonLogic.appcommonhandle("所属模块",null),
					storyname: commonLogic.appcommonhandle("相关需求",null),
					title: commonLogic.appcommonhandle("用例标题",null),
					type: commonLogic.appcommonhandle("用例类型",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			maingrid_suitsub_grid: {
				columns: {
					id: commonLogic.appcommonhandle("id",null),
					pri: commonLogic.appcommonhandle("P",null),
					title: commonLogic.appcommonhandle("用例标题",null),
					type: commonLogic.appcommonhandle("用例类型",null),
					lastrunresult: commonLogic.appcommonhandle("结果",null),
					status1: commonLogic.appcommonhandle("状态",null),
					tobugcnt: commonLogic.appcommonhandle("B",null),
					resultcnt: commonLogic.appcommonhandle("R",null),
					casesteps: commonLogic.appcommonhandle("S",null),
					uagridcolumn1: commonLogic.appcommonhandle("操作",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
			exportColumns: {
					id: commonLogic.appcommonhandle("id",null),
					pri: commonLogic.appcommonhandle("P",null),
					title: commonLogic.appcommonhandle("用例标题",null),
					type: commonLogic.appcommonhandle("用例类型",null),
					openedby: commonLogic.appcommonhandle("创建",null),
					lastrunner: commonLogic.appcommonhandle("执行人",null),
					lastrundate: commonLogic.appcommonhandle("执行时间",null),
					lastrunresult: commonLogic.appcommonhandle("结果",null),
					status: commonLogic.appcommonhandle("状态",null),
					status1: commonLogic.appcommonhandle("状态",null),
					tobugcnt: commonLogic.appcommonhandle("B",null),
					resultcnt: commonLogic.appcommonhandle("R",null),
					casesteps: commonLogic.appcommonhandle("S",null),
					lastrunresult1: commonLogic.appcommonhandle("测试用例结果",null),
					isfavorites: commonLogic.appcommonhandle("是否收藏",null),
					color: commonLogic.appcommonhandle("标题颜色",null),
			},
				uiactions: {
					case_unlinksuitecase: commonLogic.appcommonhandle("移除",null),
					case_opentestrunresultview: commonLogic.appcommonhandle("结果",null),
					case_execute: commonLogic.appcommonhandle("执行",null),
				},
			},
			main2_grid: {
				columns: {
					pri: commonLogic.appcommonhandle("P",null),
					title: commonLogic.appcommonhandle("用例标题",null),
					status1: commonLogic.appcommonhandle("状态",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			caseresultentry_grid: {
				columns: {
					lastrunresult1: commonLogic.appcommonhandle("条目",null),
					resultcnt: commonLogic.appcommonhandle("值",null),
					task: commonLogic.appcommonhandle("百分比",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			main_grid: {
				columns: {
					pri: commonLogic.appcommonhandle("P",null),
					title: commonLogic.appcommonhandle("用例标题",null),
					status1: commonLogic.appcommonhandle("状态",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			caseresultproject_chart: {
				nodata:commonLogic.appcommonhandle("无",null),
			},
			casetypeproject_chart: {
				nodata:commonLogic.appcommonhandle("无",null),
			},
			casemoduleproject_chart: {
				nodata:commonLogic.appcommonhandle("无",null),
			},
			caselastrunnerproject_chart: {
				nodata:commonLogic.appcommonhandle("无",null),
			},
			caseresult_chart: {
				nodata:commonLogic.appcommonhandle("无",null),
			},
			casetype_chart: {
				nodata:commonLogic.appcommonhandle("无",null),
			},
			casemodule_chart: {
				nodata:commonLogic.appcommonhandle("无",null),
			},
			caselastrunner_chart: {
				nodata:commonLogic.appcommonhandle("无",null),
			},
			curopenedcase_chart: {
				nodata:commonLogic.appcommonhandle("无",null),
			},
			default_searchform: {
				details: {
					formpage1: commonLogic.appcommonhandle("常规条件",null), 
				},
				uiactions: {
				},
			},
			mainnewviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("保存并关闭",null),
					tip: commonLogic.appcommonhandle("保存并关闭",null),
				},
			},
			maineditviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("保存并关闭",null),
					tip: commonLogic.appcommonhandle("保存并关闭",null),
				},
			},
			editviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("保存并关闭",null),
					tip: commonLogic.appcommonhandle("保存并关闭",null),
				},
			},
			linkcasegridviewtoolbar_toolbar: {
				deuiaction1_linkcase: {
					caption: commonLogic.appcommonhandle("保存",null),
					tip: commonLogic.appcommonhandle("保存",null),
				},
				seperator1: {
					caption: commonLogic.appcommonhandle("",null),
					tip: commonLogic.appcommonhandle("",null),
				},
				deuiaction2_togglefilter: {
					caption: commonLogic.appcommonhandle("过滤",null),
					tip: commonLogic.appcommonhandle("过滤",null),
				},
			},
			curtesttaskgridviewtoolbar_toolbar: {
				deuiaction1_linkcasec: {
					caption: commonLogic.appcommonhandle("关联用例",null),
					tip: commonLogic.appcommonhandle("关联用例",null),
				},
				deuiaction7: {
					caption: commonLogic.appcommonhandle("导出",null),
					tip: commonLogic.appcommonhandle("导出",null),
				},
				deuiaction3_togglefilter: {
					caption: commonLogic.appcommonhandle("过滤",null),
					tip: commonLogic.appcommonhandle("过滤",null),
				},
			},
			projectreportlinkgridviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("过滤",null),
					tip: commonLogic.appcommonhandle("过滤",null),
				},
			},
			batchnewgridviewtoolbar_toolbar: {
				deuiaction2: {
					caption: commonLogic.appcommonhandle("新建行",null),
					tip: commonLogic.appcommonhandle("新建行",null),
				},
				deuiaction3: {
					caption: commonLogic.appcommonhandle("保存行",null),
					tip: commonLogic.appcommonhandle("保存行",null),
				},
			},
			maingridviewtoolbar_toolbar: {
				deuiaction3_batchnew: {
					caption: commonLogic.appcommonhandle("批量新建用例",null),
					tip: commonLogic.appcommonhandle("批量新建用例",null),
				},
				deuiaction3_create: {
					caption: commonLogic.appcommonhandle("新建",null),
					tip: commonLogic.appcommonhandle("新建",null),
				},
				deuiaction2: {
					caption: commonLogic.appcommonhandle("刷新",null),
					tip: commonLogic.appcommonhandle("刷新",null),
				},
				deuiaction1: {
					caption: commonLogic.appcommonhandle("导出",null),
					tip: commonLogic.appcommonhandle("导出",null),
				},
				deuiaction4: {
					caption: commonLogic.appcommonhandle("过滤",null),
					tip: commonLogic.appcommonhandle("过滤",null),
				},
			},
			reportlinkgridviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("过滤",null),
					tip: commonLogic.appcommonhandle("过滤",null),
				},
			},
			cursuitgridviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("过滤",null),
					tip: commonLogic.appcommonhandle("过滤",null),
				},
			},
			suitelinkcasegridviewtoolbar_toolbar: {
				deuiaction1_suitelinkcase: {
					caption: commonLogic.appcommonhandle("保存",null),
					tip: commonLogic.appcommonhandle("保存",null),
				},
				seperator1: {
					caption: commonLogic.appcommonhandle("",null),
					tip: commonLogic.appcommonhandle("",null),
				},
				deuiaction2_togglefilter: {
					caption: commonLogic.appcommonhandle("过滤",null),
					tip: commonLogic.appcommonhandle("过滤",null),
				},
			},
			casefavoritetoolbar_toolbar: {
				deuiaction2: {
					caption: commonLogic.appcommonhandle("刷新",null),
					tip: commonLogic.appcommonhandle("刷新",null),
				},
				deuiaction1: {
					caption: commonLogic.appcommonhandle("导出",null),
					tip: commonLogic.appcommonhandle("导出",null),
				},
				deuiaction4: {
					caption: commonLogic.appcommonhandle("过滤",null),
					tip: commonLogic.appcommonhandle("过滤",null),
				},
			},
			mainmygridviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("过滤",null),
					tip: commonLogic.appcommonhandle("过滤",null),
				},
			},
			mainmynewgridviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("过滤",null),
					tip: commonLogic.appcommonhandle("过滤",null),
				},
			},
			gridviewtoolbar_toolbar: {
				deuiaction3_batchnew: {
					caption: commonLogic.appcommonhandle("批量新建用例",null),
					tip: commonLogic.appcommonhandle("批量新建用例",null),
				},
				deuiaction3_create: {
					caption: commonLogic.appcommonhandle("新建",null),
					tip: commonLogic.appcommonhandle("新建",null),
				},
				deuiaction2: {
					caption: commonLogic.appcommonhandle("刷新",null),
					tip: commonLogic.appcommonhandle("刷新",null),
				},
				deuiaction1: {
					caption: commonLogic.appcommonhandle("导出",null),
					tip: commonLogic.appcommonhandle("导出",null),
				},
				deuiaction4: {
					caption: commonLogic.appcommonhandle("过滤",null),
					tip: commonLogic.appcommonhandle("过滤",null),
				},
			},
			maindashboardviewdashboard_container1_portlet: {
				uiactions: {
				},
			},
			maindashboardviewdashboard_container2_portlet: {
				uiactions: {
				},
			},
			maininfo_portlet: {
				maininfo: {
					title: commonLogic.appcommonhandle("看板主信息", null)
				},
				uiactions: {
				},
			},
			maindashboardviewdashboard_container4_portlet: {
				uiactions: {
				},
			},
			dashboardquickaction_portlet: {
				dashboardquickaction: {
					title: commonLogic.appcommonhandle("操作栏", null)
				},
				uiactions: {
					exit: commonLogic.appcommonhandle("返回",null),
					case_executecz: commonLogic.appcommonhandle("执行",null),
					case_opentestrunresultviewcz: commonLogic.appcommonhandle("结果",null),
					case_newbugbycaseresultcz: commonLogic.appcommonhandle("转Bug",null),
					case_maineditcz: commonLogic.appcommonhandle("编辑",null),
					refresh: commonLogic.appcommonhandle("刷新",null),
					case_deletecz: commonLogic.appcommonhandle("删除",null),
				},
			},
			maindashboardviewdashboard_container3_portlet: {
				uiactions: {
				},
			},
			maindetail_portlet: {
				maindetail: {
					title: commonLogic.appcommonhandle("基本信息", null)
				},
				uiactions: {
				},
			},
			testmaindashboardviewdashboard_container1_portlet: {
				uiactions: {
				},
			},
			testmaindashboardviewdashboard_container2_portlet: {
				uiactions: {
				},
			},
			testmaindashboardviewdashboard_container4_portlet: {
				uiactions: {
				},
			},
			testdashboardquickaction_portlet: {
				testdashboardquickaction: {
					title: commonLogic.appcommonhandle("操作栏", null)
				},
				uiactions: {
					exit: commonLogic.appcommonhandle("返回",null),
					case_caseexecute: commonLogic.appcommonhandle("执行",null),
					case_caseopentestrunresultview: commonLogic.appcommonhandle("结果",null),
					case_maineditcz: commonLogic.appcommonhandle("编辑",null),
					refresh: commonLogic.appcommonhandle("刷新",null),
					case_deletecz: commonLogic.appcommonhandle("删除",null),
				},
			},
			testmaindashboardviewdashboard_container3_portlet: {
				uiactions: {
				},
			},
			testmaindetail_portlet: {
				testmaindetail: {
					title: commonLogic.appcommonhandle("基本信息", null)
				},
				uiactions: {
				},
			},
			caseresultproject_portlet: {
				caseresultproject: {
					title: commonLogic.appcommonhandle("根据测试结果分类", null)
				},
				uiactions: {
				},
			},
			casetypeproject_portlet: {
				casetypeproject: {
					title: commonLogic.appcommonhandle("按用例类型统计", null)
				},
				uiactions: {
				},
			},
			casemoduleproject_portlet: {
				casemoduleproject: {
					title: commonLogic.appcommonhandle("按用例模块统计", null)
				},
				uiactions: {
				},
			},
			caselastrunnerproject_portlet: {
				caselastrunnerproject: {
					title: commonLogic.appcommonhandle("按用例执行人统计", null)
				},
				uiactions: {
				},
			},
			caseresult_portlet: {
				caseresult: {
					title: commonLogic.appcommonhandle("按用例结果统计", null)
				},
				uiactions: {
				},
			},
			casetype_portlet: {
				casetype: {
					title: commonLogic.appcommonhandle("按用例类型统计", null)
				},
				uiactions: {
				},
			},
			casemodule_portlet: {
				casemodule: {
					title: commonLogic.appcommonhandle("按用例模块统计", null)
				},
				uiactions: {
				},
			},
			caselastrunner_portlet: {
				caselastrunner: {
					title: commonLogic.appcommonhandle("按用例执行人统计", null)
				},
				uiactions: {
				},
			},
			totalcuropenedcase_portlet: {
				totalcuropenedcase: {
					title: commonLogic.appcommonhandle("累计创建用例", null)
				},
				uiactions: {
				},
			},
			mecreatecase_portlet: {
				mecreatecase: {
					title: commonLogic.appcommonhandle("由我创建的用例", null)
				},
				uiactions: {
				},
			},
		};
		return data;
}
export default getLocaleResourceBase;