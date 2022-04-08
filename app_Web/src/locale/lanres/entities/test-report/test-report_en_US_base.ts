import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
		fields: {
			productcnt: commonLogic.appcommonhandle("项目报告产品数",null),
			overviews: commonLogic.appcommonhandle("概况",null),
			objectid: commonLogic.appcommonhandle("所属对象",null),
			cases: commonLogic.appcommonhandle("用例",null),
			members: commonLogic.appcommonhandle("参与人员",null),
			bugs: commonLogic.appcommonhandle("测试的Bug",null),
			createdby: commonLogic.appcommonhandle("由谁创建",null),
			stories: commonLogic.appcommonhandle("测试的需求",null),
			files: commonLogic.appcommonhandle("附件",null),
			comment: commonLogic.appcommonhandle("备注",null),
			tasks: commonLogic.appcommonhandle("测试单",null),
			title: commonLogic.appcommonhandle("标题",null),
			begin: commonLogic.appcommonhandle("开始时间",null),
			objecttype: commonLogic.appcommonhandle("对象类型",null),
			end: commonLogic.appcommonhandle("结束时间",null),
			builds: commonLogic.appcommonhandle("版本信息",null),
			createddate: commonLogic.appcommonhandle("创建时间",null),
			report: commonLogic.appcommonhandle("总结",null),
			id: commonLogic.appcommonhandle("编号",null),
			owner: commonLogic.appcommonhandle("负责人",null),
			deleted: commonLogic.appcommonhandle("已删除",null),
			projectname: commonLogic.appcommonhandle("所属项目",null),
			productname: commonLogic.appcommonhandle("所属产品",null),
			product: commonLogic.appcommonhandle("所属产品",null),
			project: commonLogic.appcommonhandle("所属项目",null),
		},
			views: {
				projectgridview: {
					caption: commonLogic.appcommonhandle("项目报告",null),
					title: commonLogic.appcommonhandle("测试报告表格视图",null),
				},
				mainediteditview: {
					caption: commonLogic.appcommonhandle("测试报告",null),
					title: commonLogic.appcommonhandle("测试报告编辑视图",null),
				},
				projecttabexpview: {
					caption: commonLogic.appcommonhandle("项目报告",null),
					title: commonLogic.appcommonhandle("测试报告分页导航视图",null),
				},
				gridview: {
					caption: commonLogic.appcommonhandle("测试报告",null),
					title: commonLogic.appcommonhandle("测试报告表格视图",null),
				},
				editview_r: {
					caption: commonLogic.appcommonhandle("测试报告",null),
					title: commonLogic.appcommonhandle("测试报告编辑视图",null),
				},
				editview_testrange: {
					caption: commonLogic.appcommonhandle("测试报告",null),
					title: commonLogic.appcommonhandle("测试报告编辑视图",null),
				},
				projectmainediteditview: {
					caption: commonLogic.appcommonhandle("测试报告",null),
					title: commonLogic.appcommonhandle("测试报告编辑视图",null),
				},
				dashboardview: {
					caption: commonLogic.appcommonhandle("测试报告",null),
					title: commonLogic.appcommonhandle("测试报告数据看板视图",null),
				},
				maintabexpview: {
					caption: commonLogic.appcommonhandle("测试报告",null),
					title: commonLogic.appcommonhandle("测试报告分页导航视图",null),
				},
				editview_tosumup: {
					caption: commonLogic.appcommonhandle("测试报告",null),
					title: commonLogic.appcommonhandle("测试报告编辑视图",null),
				},
				projectdashboardview: {
					caption: commonLogic.appcommonhandle("项目报告",null),
					title: commonLogic.appcommonhandle("测试报告数据看板视图",null),
				},
				editview_testtasks: {
					caption: commonLogic.appcommonhandle("测试报告",null),
					title: commonLogic.appcommonhandle("测试报告编辑视图",null),
				},
				maininfoview: {
					caption: commonLogic.appcommonhandle("测试报告",null),
					title: commonLogic.appcommonhandle("测试报告编辑视图",null),
				},
				editview_report: {
					caption: commonLogic.appcommonhandle("测试报告",null),
					title: commonLogic.appcommonhandle("测试报告编辑视图",null),
				},
				actioneditview: {
					caption: commonLogic.appcommonhandle("历史记录",null),
					title: commonLogic.appcommonhandle("测试报告编辑视图（历史记录）",null),
				},
				editview: {
					caption: commonLogic.appcommonhandle("测试报告",null),
					title: commonLogic.appcommonhandle("测试报告编辑视图",null),
				},
				editview_project: {
					caption: commonLogic.appcommonhandle("测试报告",null),
					title: commonLogic.appcommonhandle("测试报告编辑视图",null),
				},
				projectmaininfoview: {
					caption: commonLogic.appcommonhandle("测试报告",null),
					title: commonLogic.appcommonhandle("测试报告编辑视图",null),
				},
			},
			main_form: {
				details: {
					group1: commonLogic.appcommonhandle("基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					tasks: commonLogic.appcommonhandle("测试单",null), 
					objectid: commonLogic.appcommonhandle("所属对象",null), 
					project: commonLogic.appcommonhandle("所属项目",null), 
					productname: commonLogic.appcommonhandle("所属产品",null), 
					begin: commonLogic.appcommonhandle("起始时间",null), 
					end: commonLogic.appcommonhandle("~",null), 
					product: commonLogic.appcommonhandle("所属产品",null), 
					owner: commonLogic.appcommonhandle("负责人",null), 
					objecttype: commonLogic.appcommonhandle("对象类型",null), 
					builds: commonLogic.appcommonhandle("版本信息",null), 
					bugs: commonLogic.appcommonhandle("测试的Bug",null), 
					stories: commonLogic.appcommonhandle("测试的需求",null), 
					cases: commonLogic.appcommonhandle("用例",null), 
					title: commonLogic.appcommonhandle("标题",null), 
					members: commonLogic.appcommonhandle("参与人员",null), 
					projectname: commonLogic.appcommonhandle("所属项目",null), 
					overviews: commonLogic.appcommonhandle("概况",null), 
					report: commonLogic.appcommonhandle("总结",null), 
					files: commonLogic.appcommonhandle("附件",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			project_new_form: {
				details: {
					group1: commonLogic.appcommonhandle("基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					objectid: commonLogic.appcommonhandle("所属对象",null), 
					project: commonLogic.appcommonhandle("所属项目",null), 
					tasks: commonLogic.appcommonhandle("测试单",null), 
					productname: commonLogic.appcommonhandle("所属产品",null), 
					product: commonLogic.appcommonhandle("所属产品",null), 
					begin: commonLogic.appcommonhandle("开始时间",null), 
					end: commonLogic.appcommonhandle("结束时间",null), 
					formitemex1: commonLogic.appcommonhandle("起止时间",null), 
					owner: commonLogic.appcommonhandle("负责人",null), 
					objecttype: commonLogic.appcommonhandle("对象类型",null), 
					builds: commonLogic.appcommonhandle("版本信息",null), 
					bugs: commonLogic.appcommonhandle("测试的Bug",null), 
					stories: commonLogic.appcommonhandle("测试的需求",null), 
					cases: commonLogic.appcommonhandle("用例",null), 
					title: commonLogic.appcommonhandle("标题",null), 
					members: commonLogic.appcommonhandle("参与人员",null), 
					projectname: commonLogic.appcommonhandle("所属项目",null), 
					overviews: commonLogic.appcommonhandle("概况",null), 
					report: commonLogic.appcommonhandle("总结",null), 
					files: commonLogic.appcommonhandle("附件",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			mainedit_form: {
				details: {
					group1: commonLogic.appcommonhandle("基本信息",null), 
					formpage1: commonLogic.appcommonhandle("报告编辑",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					tasks: commonLogic.appcommonhandle("测试单",null), 
					objectid: commonLogic.appcommonhandle("所属对象",null), 
					project: commonLogic.appcommonhandle("所属项目",null), 
					productname: commonLogic.appcommonhandle("所属产品",null), 
					product: commonLogic.appcommonhandle("所属产品",null), 
					begin: commonLogic.appcommonhandle("开始时间",null), 
					end: commonLogic.appcommonhandle("结束时间",null), 
					formitemex1: commonLogic.appcommonhandle("起止时间",null), 
					owner: commonLogic.appcommonhandle("负责人",null), 
					objecttype: commonLogic.appcommonhandle("对象类型",null), 
					builds: commonLogic.appcommonhandle("版本信息",null), 
					bugs: commonLogic.appcommonhandle("测试的Bug",null), 
					stories: commonLogic.appcommonhandle("测试的需求",null), 
					cases: commonLogic.appcommonhandle("用例",null), 
					title: commonLogic.appcommonhandle("标题",null), 
					members: commonLogic.appcommonhandle("参与人员",null), 
					projectname: commonLogic.appcommonhandle("所属项目",null), 
					overviews: commonLogic.appcommonhandle("概况",null), 
					report: commonLogic.appcommonhandle("总结",null), 
					files: commonLogic.appcommonhandle("附件",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			maininfo_form: {
				details: {
					druipart1: commonLogic.appcommonhandle("",null), 
					grouppanel1: commonLogic.appcommonhandle("附件",null), 
					group1: commonLogic.appcommonhandle("基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					tasks: commonLogic.appcommonhandle("测试单",null), 
					objectid: commonLogic.appcommonhandle("所属对象",null), 
					project: commonLogic.appcommonhandle("所属项目",null), 
					productname: commonLogic.appcommonhandle("所属产品",null), 
					product: commonLogic.appcommonhandle("所属产品",null), 
					begin: commonLogic.appcommonhandle("开始时间",null), 
					end: commonLogic.appcommonhandle("结束时间",null), 
					formitemex1: commonLogic.appcommonhandle("起止时间",null), 
					owner: commonLogic.appcommonhandle("负责人",null), 
					members: commonLogic.appcommonhandle("参与人员",null), 
					objecttype: commonLogic.appcommonhandle("对象类型",null), 
					builds: commonLogic.appcommonhandle("版本信息",null), 
					bugs: commonLogic.appcommonhandle("测试的Bug",null), 
					stories: commonLogic.appcommonhandle("测试的需求",null), 
					cases: commonLogic.appcommonhandle("用例",null), 
					title: commonLogic.appcommonhandle("标题",null), 
					projectname: commonLogic.appcommonhandle("所属项目",null), 
					overviews: commonLogic.appcommonhandle("概况",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			testrange_form: {
				details: {
					druipart1: commonLogic.appcommonhandle("",null), 
					druipart2: commonLogic.appcommonhandle("",null), 
					group1: commonLogic.appcommonhandle("基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			tosumup_form: {
				details: {
					rawitem1: commonLogic.appcommonhandle("",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					report: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			action_form: {
				details: {
					druipart1: commonLogic.appcommonhandle("",null), 
					group1: commonLogic.appcommonhandle("历史记录",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			report_form: {
				details: {
					druipart1: commonLogic.appcommonhandle("",null), 
					druipart2: commonLogic.appcommonhandle("",null), 
					grouppanel1: commonLogic.appcommonhandle("按执行结果",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			projectmain_grid: {
				columns: {
					id: commonLogic.appcommonhandle("ID",null),
					title: commonLogic.appcommonhandle("标题",null),
					createdby: commonLogic.appcommonhandle("创建",null),
					createddate: commonLogic.appcommonhandle("创建时间",null),
					projectname: commonLogic.appcommonhandle("所属项目",null),
					tasks: commonLogic.appcommonhandle("测试版本",null),
					uagridcolumn1: commonLogic.appcommonhandle("操作",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				edit: commonLogic.appcommonhandle("Edit",null),
				testreport_projectedits: commonLogic.appcommonhandle("编辑",null),
				testreport_delete: commonLogic.appcommonhandle("删除",null),
				},
			},
			main_grid: {
				columns: {
					id: commonLogic.appcommonhandle("ID",null),
					title: commonLogic.appcommonhandle("标题",null),
					createdby: commonLogic.appcommonhandle("创建",null),
					createddate: commonLogic.appcommonhandle("创建时间",null),
					projectname: commonLogic.appcommonhandle("所属项目",null),
					tasks: commonLogic.appcommonhandle("测试版本",null),
					uagridcolumn1: commonLogic.appcommonhandle("操作",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
			exportColumns: {
					id: commonLogic.appcommonhandle("ID",null),
					title: commonLogic.appcommonhandle("标题",null),
					createdby: commonLogic.appcommonhandle("创建",null),
					createddate: commonLogic.appcommonhandle("创建时间",null),
					projectname: commonLogic.appcommonhandle("所属项目",null),
					tasks: commonLogic.appcommonhandle("测试版本",null),
			},
				uiactions: {
				edit: commonLogic.appcommonhandle("Edit",null),
				testreport_edits: commonLogic.appcommonhandle("编辑",null),
				testreport_delete: commonLogic.appcommonhandle("删除",null),
				},
			},
			editview_rtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("Save And Close",null),
					tip: commonLogic.appcommonhandle("Save And Close Window",null),
				},
			},
			editview_testtaskstoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("Save And Close",null),
					tip: commonLogic.appcommonhandle("Save And Close Window",null),
				},
			},
			projectmainediteditviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("Save And Close",null),
					tip: commonLogic.appcommonhandle("Save And Close Window",null),
				},
			},
			editview_projecttoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("Save And Close",null),
					tip: commonLogic.appcommonhandle("Save And Close Window",null),
				},
			},
			projectgridviewtoolbar_toolbar: {
				deuiaction3_createproject: {
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
			mainediteditviewtoolbar_toolbar: {
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
			projecttabexpviewtabexppanel_tabexppanel: {
				tabviewpanels: {
					tabviewpanel: {
						caption: commonLogic.appcommonhandle("基本信息",null),
					},
					tabviewpanel2: {
						caption: commonLogic.appcommonhandle("测试范围",null),
					},
					tabviewpanel4: {
						caption: commonLogic.appcommonhandle("测试轮次",null),
					},
					tabviewpanel5: {
						caption: commonLogic.appcommonhandle("关联的用例",null),
					},
					tabviewpanel6: {
						caption: commonLogic.appcommonhandle("遗留的Bug",null),
					},
					tabviewpanel8: {
						caption: commonLogic.appcommonhandle("报告",null),
					},
					tabviewpanel3: {
						caption: commonLogic.appcommonhandle("总结",null),
					},
					tabviewpanel7: {
						caption: commonLogic.appcommonhandle("历史记录",null),
					}
				},
				uiactions: {
				},
			},
			maintabexpviewtabexppanel_tabexppanel: {
				tabviewpanels: {
					tabviewpanel: {
						caption: commonLogic.appcommonhandle("基本信息",null),
					},
					tabviewpanel2: {
						caption: commonLogic.appcommonhandle("测试范围",null),
					},
					tabviewpanel4: {
						caption: commonLogic.appcommonhandle("测试轮次",null),
					},
					tabviewpanel5: {
						caption: commonLogic.appcommonhandle("关联的用例",null),
					},
					tabviewpanel6: {
						caption: commonLogic.appcommonhandle("遗留的Bug",null),
					},
					tabviewpanel8: {
						caption: commonLogic.appcommonhandle("报告",null),
					},
					tabviewpanel3: {
						caption: commonLogic.appcommonhandle("总结",null),
					},
					tabviewpanel7: {
						caption: commonLogic.appcommonhandle("历史记录",null),
					}
				},
				uiactions: {
				},
			},
			projectdashboardviewdashboard_container1_portlet: {
				uiactions: {
				},
			},
			projectdashboardviewdashboard_container2_portlet: {
				uiactions: {
				},
			},
			projectdashboardviewdashboard_container3_portlet: {
				uiactions: {
				},
			},
			projectdashboardviewdashboard_container4_portlet: {
				uiactions: {
				},
			},
			projectdashboardviewdashboard_container5_portlet: {
				uiactions: {
				},
			},
			projectdashboardviewdashboard_container6_portlet: {
				uiactions: {
				},
			},
			projectdashboardviewdashboard_container7_portlet: {
				uiactions: {
				},
			},
			projectdashboardviewdashboard_container8_portlet: {
				uiactions: {
				},
			},
			projectdashboardviewdashboard_container9_portlet: {
				uiactions: {
				},
			},
			projectdashboardviewdashboard_container10_portlet: {
				uiactions: {
				},
			},
			projectdashboardviewdashboard_container11_portlet: {
				uiactions: {
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
			dashboardviewdashboard_container3_portlet: {
				uiactions: {
				},
			},
			dashboardviewdashboard_container4_portlet: {
				uiactions: {
				},
			},
			dashboardviewdashboard_container5_portlet: {
				uiactions: {
				},
			},
			dashboardviewdashboard_container6_portlet: {
				uiactions: {
				},
			},
			dashboardviewdashboard_container7_portlet: {
				uiactions: {
				},
			},
			dashboardviewdashboard_container8_portlet: {
				uiactions: {
				},
			},
			dashboardviewdashboard_container9_portlet: {
				uiactions: {
				},
			},
			dashboardviewdashboard_container10_portlet: {
				uiactions: {
				},
			},
			dashboardviewdashboard_container11_portlet: {
				uiactions: {
				},
			},
		};
		return data;
}

export default getLocaleResourceBase;