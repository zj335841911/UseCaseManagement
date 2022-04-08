import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
		fields: {
			name: commonLogic.appcommonhandle("名称",null),
			addeddate: commonLogic.appcommonhandle("创建时间",null),
			id: commonLogic.appcommonhandle("编号",null),
			deleted: commonLogic.appcommonhandle("已删除",null),
			lasteditedby: commonLogic.appcommonhandle("最后编辑人",null),
			type: commonLogic.appcommonhandle("类型",null),
			lastediteddate: commonLogic.appcommonhandle("最后编辑时间",null),
			addedby: commonLogic.appcommonhandle("由谁创建",null),
			casecnt: commonLogic.appcommonhandle("用例数",null),
			desc: commonLogic.appcommonhandle("描述",null),
			product: commonLogic.appcommonhandle("所属产品",null),
		},
			views: {
				maindashboardview: {
					caption: commonLogic.appcommonhandle("测试套件",null),
					title: commonLogic.appcommonhandle("测试套件数据看板视图",null),
				},
				editview: {
					caption: commonLogic.appcommonhandle("测试套件",null),
					title: commonLogic.appcommonhandle("测试套件编辑视图",null),
				},
				gridview: {
					caption: commonLogic.appcommonhandle("测试套件",null),
					title: commonLogic.appcommonhandle("测试套件表格视图",null),
				},
				editview9: {
					caption: commonLogic.appcommonhandle("测试套件",null),
					title: commonLogic.appcommonhandle("测试套件编辑视图",null),
				},
			},
			main_form: {
				details: {
					group1: commonLogic.appcommonhandle("testsuite基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("最后编辑时间",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					name: commonLogic.appcommonhandle("名称",null), 
					desc: commonLogic.appcommonhandle("描述",null), 
					type: commonLogic.appcommonhandle("类型",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			maininfo_form: {
				details: {
					group1: commonLogic.appcommonhandle("基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("最后编辑时间",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					name: commonLogic.appcommonhandle("名称",null), 
					desc: commonLogic.appcommonhandle("描述",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			main_grid: {
				columns: {
					id: commonLogic.appcommonhandle("编号",null),
					name: commonLogic.appcommonhandle("名称",null),
					desc: commonLogic.appcommonhandle("描述",null),
					addedby: commonLogic.appcommonhandle("由谁创建",null),
					addeddate: commonLogic.appcommonhandle("创建时间",null),
					uagridcolumn1: commonLogic.appcommonhandle("操作",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
			exportColumns: {
					id: commonLogic.appcommonhandle("编号",null),
					name: commonLogic.appcommonhandle("名称",null),
					desc: commonLogic.appcommonhandle("描述",null),
					addedby: commonLogic.appcommonhandle("由谁创建",null),
					addeddate: commonLogic.appcommonhandle("创建时间",null),
			},
				uiactions: {
				testsuite_linkcasedash: commonLogic.appcommonhandle("关联用例",null),
				testsuite_editsuitedash: commonLogic.appcommonhandle("编辑",null),
				testsuite_deletedash: commonLogic.appcommonhandle("删除",null),
				},
			},
			editviewtoolbar_toolbar: {
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
			maindashboardviewdashboard_container1_portlet: {
				uiactions: {
				},
			},
			maindashboardviewdashboard_container2_portlet: {
				uiactions: {
				},
			},
			cursuitcasegridview_portlet: {
				cursuitcasegridview: {
					title: commonLogic.appcommonhandle("关联套件", null)
			  	},
				uiactions: {
				},
			},
			maindashboardviewdashboard_container4_portlet: {
				uiactions: {
				},
			},
			testsuitequickaction_portlet: {
				testsuitequickaction: {
					title: commonLogic.appcommonhandle("操作栏", null)
			  	},
				uiactions: {
				exit: commonLogic.appcommonhandle("返回",null),
				testsuite_linkcasedash: commonLogic.appcommonhandle("关联用例",null),
				testsuite_editsuitedash: commonLogic.appcommonhandle("编辑",null),
				testsuite_deletedash: commonLogic.appcommonhandle("删除",null),
				},
			},
			maindashboardviewdashboard_container3_portlet: {
				uiactions: {
				},
			},
			maininfoview_portlet: {
				maininfoview: {
					title: commonLogic.appcommonhandle("基本信息", null)
			  	},
				uiactions: {
				},
			},
		};
		return data;
}

export default getLocaleResourceBase;