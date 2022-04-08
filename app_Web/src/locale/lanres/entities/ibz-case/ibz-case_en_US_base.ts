import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
		fields: {
			lasteditedby: commonLogic.appcommonhandle("最后修改者",null),
			path: commonLogic.appcommonhandle("path",null),
			id: commonLogic.appcommonhandle("用例编号",null),
			scriptedby: commonLogic.appcommonhandle("scriptedBy",null),
			type: commonLogic.appcommonhandle("用例类型",null),
			scriptstatus: commonLogic.appcommonhandle("scriptStatus",null),
			stage: commonLogic.appcommonhandle("适用阶段",null),
			openeddate: commonLogic.appcommonhandle("创建日期",null),
			lastediteddate: commonLogic.appcommonhandle("修改日期",null),
			auto: commonLogic.appcommonhandle("auto",null),
			title: commonLogic.appcommonhandle("用例标题",null),
			howrun: commonLogic.appcommonhandle("howRun",null),
			pri: commonLogic.appcommonhandle("优先级",null),
			comment: commonLogic.appcommonhandle("备注",null),
			keywords: commonLogic.appcommonhandle("关键词",null),
			scriptlocation: commonLogic.appcommonhandle("scriptLocation",null),
			version: commonLogic.appcommonhandle("用例版本",null),
			status: commonLogic.appcommonhandle("状态",null),
			precondition: commonLogic.appcommonhandle("前置条件",null),
			deleted: commonLogic.appcommonhandle("已删除",null),
			order: commonLogic.appcommonhandle("排序",null),
			openedby: commonLogic.appcommonhandle("由谁创建",null),
			scripteddate: commonLogic.appcommonhandle("scriptedDate",null),
			libname: commonLogic.appcommonhandle("用例库",null),
			modulename: commonLogic.appcommonhandle("所属模块",null),
			module: commonLogic.appcommonhandle("id",null),
			lib: commonLogic.appcommonhandle("编号",null),
		},
			views: {
				opencaseview: {
					caption: commonLogic.appcommonhandle("测试用例",null),
					title: commonLogic.appcommonhandle("用例库用例数据看板视图",null),
				},
				neweditview: {
					caption: commonLogic.appcommonhandle("新建",null),
					title: commonLogic.appcommonhandle("用例库用例编辑视图（新建）",null),
				},
				gridview: {
					caption: commonLogic.appcommonhandle("测试用例",null),
					title: commonLogic.appcommonhandle("用例库用例表格视图",null),
				},
				newediteditview9: {
					caption: commonLogic.appcommonhandle("创建编辑",null),
					title: commonLogic.appcommonhandle("用例库用例编辑视图（创建编辑）",null),
				},
				editeditview: {
					caption: commonLogic.appcommonhandle("测试用例",null),
					title: commonLogic.appcommonhandle("用例库用例编辑视图（编辑）",null),
				},
				editview: {
					caption: commonLogic.appcommonhandle("测试用例",null),
					title: commonLogic.appcommonhandle("用例库用例编辑视图",null),
				},
				infoeditview9: {
					caption: commonLogic.appcommonhandle("基本信息",null),
					title: commonLogic.appcommonhandle("用例库用例编辑视图（基本信息）",null),
				},
				dashboardview: {
					caption: commonLogic.appcommonhandle("测试用例",null),
					title: commonLogic.appcommonhandle("用例库用例数据看板视图",null),
				},
				maineditview9: {
					caption: commonLogic.appcommonhandle("主信息",null),
					title: commonLogic.appcommonhandle("用例库用例编辑视图（主信息）",null),
				},
			},
			maininfo_form: {
				details: {
					druipart2: commonLogic.appcommonhandle("",null), 
					druipart1: commonLogic.appcommonhandle("",null), 
					grouppanel1: commonLogic.appcommonhandle("附件",null), 
					group1: commonLogic.appcommonhandle("用例库用例基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用例编号",null), 
					srfmajortext: commonLogic.appcommonhandle("用例标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("",null), 
					title: commonLogic.appcommonhandle("",null), 
					precondition: commonLogic.appcommonhandle("前置条件",null), 
				},
				uiactions: {
				},
			},
			infoedit_form: {
				details: {
					druipart1: commonLogic.appcommonhandle("",null), 
					druipart2: commonLogic.appcommonhandle("",null), 
					group1: commonLogic.appcommonhandle("用例库用例基本信息",null), 
					grouppanel1: commonLogic.appcommonhandle("基本信息",null), 
					grouppanel2: commonLogic.appcommonhandle("创建编辑",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用例编号",null), 
					srfmajortext: commonLogic.appcommonhandle("用例标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					title: commonLogic.appcommonhandle("用例标题",null), 
					precondition: commonLogic.appcommonhandle("前置条件",null), 
					comment: commonLogic.appcommonhandle("备注",null), 
					libname: commonLogic.appcommonhandle("用例库",null), 
					modulename: commonLogic.appcommonhandle("所属模块",null), 
					type: commonLogic.appcommonhandle("用例类型",null), 
					stage: commonLogic.appcommonhandle("适用阶段",null), 
					pri: commonLogic.appcommonhandle("优先级",null), 
					keywords: commonLogic.appcommonhandle("关键词",null), 
					status: commonLogic.appcommonhandle("用例状态",null), 
					openedby: commonLogic.appcommonhandle("由谁创建",null), 
					openeddate: commonLogic.appcommonhandle("于",null), 
					lasteditedby: commonLogic.appcommonhandle("由谁修改",null), 
					lastediteddate: commonLogic.appcommonhandle("于",null), 
					id: commonLogic.appcommonhandle("用例编号",null), 
					module: commonLogic.appcommonhandle("id",null), 
					lib: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			jbinfo_form: {
				details: {
					group1: commonLogic.appcommonhandle("基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用例编号",null), 
					srfmajortext: commonLogic.appcommonhandle("用例标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					libname: commonLogic.appcommonhandle("用例库",null), 
					modulename: commonLogic.appcommonhandle("所属模块",null), 
					type: commonLogic.appcommonhandle("用例类型",null), 
					stage: commonLogic.appcommonhandle("适用阶段",null), 
					pri: commonLogic.appcommonhandle("优先级",null), 
					status: commonLogic.appcommonhandle("状态",null), 
					keywords: commonLogic.appcommonhandle("关键词",null), 
					id: commonLogic.appcommonhandle("用例编号",null), 
					lib: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			newedit_form: {
				details: {
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用例编号",null), 
					srfmajortext: commonLogic.appcommonhandle("用例标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					openedby: commonLogic.appcommonhandle("由谁创建",null), 
					openeddate: commonLogic.appcommonhandle("于",null), 
					lasteditedby: commonLogic.appcommonhandle("由谁编辑",null), 
					lastediteddate: commonLogic.appcommonhandle("于",null), 
					id: commonLogic.appcommonhandle("用例编号",null), 
				},
				uiactions: {
				},
			},
			main_form: {
				details: {
					druipart1: commonLogic.appcommonhandle("",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用例编号",null), 
					srfmajortext: commonLogic.appcommonhandle("用例标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					lib: commonLogic.appcommonhandle("编号",null), 
					libname: commonLogic.appcommonhandle("用例库",null), 
					module: commonLogic.appcommonhandle("id",null), 
					modulename: commonLogic.appcommonhandle("所属模块",null), 
					type: commonLogic.appcommonhandle("用例类型",null), 
					stage: commonLogic.appcommonhandle("适用阶段",null), 
					title: commonLogic.appcommonhandle("用例标题",null), 
					pri: commonLogic.appcommonhandle("优先级",null), 
					precondition: commonLogic.appcommonhandle("前置条件",null), 
					keywords: commonLogic.appcommonhandle("关键词",null), 
					id: commonLogic.appcommonhandle("用例编号",null), 
				},
				uiactions: {
				},
			},
			main_grid: {
				columns: {
					lib: commonLogic.appcommonhandle("编号",null),
					pri: commonLogic.appcommonhandle("P",null),
					title: commonLogic.appcommonhandle("用例标题",null),
					type: commonLogic.appcommonhandle("用例类型",null),
					openedby: commonLogic.appcommonhandle("创建",null),
					status: commonLogic.appcommonhandle("状态",null),
					uagridcolumn1: commonLogic.appcommonhandle("操作",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				ibzcase_editcase: commonLogic.appcommonhandle("编辑",null),
				ibzcase_delete: commonLogic.appcommonhandle("删除",null),
				},
			},
			editeditviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("Save And Close",null),
					tip: commonLogic.appcommonhandle("Save And Close Window",null),
				},
			},
			neweditviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("Save And Close",null),
					tip: commonLogic.appcommonhandle("Save And Close Window",null),
				},
			},
			gridviewtoolbar_toolbar: {
				deuiaction3_create: {
					caption: commonLogic.appcommonhandle("新建",null),
					tip: commonLogic.appcommonhandle("新建",null),
				},
				deuiaction2: {
					caption: commonLogic.appcommonhandle("刷新",null),
					tip: commonLogic.appcommonhandle("刷新",null),
				},
				deuiaction1: {
					caption: commonLogic.appcommonhandle("Export",null),
					tip: commonLogic.appcommonhandle("Export {0} Data To Excel",null),
				},
				deuiaction4: {
					caption: commonLogic.appcommonhandle("Filter",null),
					tip: commonLogic.appcommonhandle("Filter",null),
				},
			},
			editviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("Save And Close",null),
					tip: commonLogic.appcommonhandle("Save And Close Window",null),
				},
			},
			dashboardviewdashboard_container1_portlet: {
				uiactions: {
				},
			},
			dashboardviewdashboard_container2_portlet: {
				uiactions: {
				},
			},
			casemain_portlet: {
				casemain: {
					title: commonLogic.appcommonhandle("主信息", null)
			  	},
				uiactions: {
				},
			},
			dashboardviewdashboard_container4_portlet: {
				uiactions: {
				},
			},
			ibzcases_portlet: {
				ibzcases: {
					title: commonLogic.appcommonhandle("用例库用例操作栏", null)
			  	},
				uiactions: {
				exit: commonLogic.appcommonhandle("返回",null),
				ibzcase_editcasecz: commonLogic.appcommonhandle("编辑",null),
				ibzcase_deletecz: commonLogic.appcommonhandle("删除",null),
				},
			},
			dashboardviewdashboard_container3_portlet: {
				uiactions: {
				},
			},
			caseinfo_portlet: {
				caseinfo: {
					title: commonLogic.appcommonhandle("用例库用例基本信息", null)
			  	},
				uiactions: {
				},
			},
			casenewedit_portlet: {
				casenewedit: {
					title: commonLogic.appcommonhandle("用例库用例创建编辑", null)
			  	},
				uiactions: {
				},
			},
			opencaseviewdashboard_container1_portlet: {
				uiactions: {
				},
			},
			opencaseviewdashboard_container2_portlet: {
				uiactions: {
				},
			},
			opencaseviewdashboard_container4_portlet: {
				uiactions: {
				},
			},
			opencaseviewdashboard_container3_portlet: {
				uiactions: {
				},
			},
		};
		return data;
}

export default getLocaleResourceBase;