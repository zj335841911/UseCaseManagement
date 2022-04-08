import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
		fields: {
			id: commonLogic.appcommonhandle("编号",null),
			account: commonLogic.appcommonhandle("所有者",null),
			config_day: commonLogic.appcommonhandle("间隔天数",null),
			assignedtopk: commonLogic.appcommonhandle("指派给（选择）",null),
			date1: commonLogic.appcommonhandle("日期",null),
			config_type: commonLogic.appcommonhandle("周期类型",null),
			closeddate: commonLogic.appcommonhandle("关闭时间",null),
			closedby: commonLogic.appcommonhandle("由谁关闭",null),
			type: commonLogic.appcommonhandle("类型",null),
			end: commonLogic.appcommonhandle("结束",null),
			desc: commonLogic.appcommonhandle("描述",null),
			noticeusers: commonLogic.appcommonhandle("消息通知用户",null),
			finishedby: commonLogic.appcommonhandle("由谁完成",null),
			begin: commonLogic.appcommonhandle("开始",null),
			idvalue: commonLogic.appcommonhandle("关联编号",null),
			assignedby: commonLogic.appcommonhandle("由谁指派",null),
			config_month: commonLogic.appcommonhandle("周期设置月",null),
			task: commonLogic.appcommonhandle("待办名称",null),
			bug: commonLogic.appcommonhandle("待办名称",null),
			finisheddate: commonLogic.appcommonhandle("完成时间",null),
			cycle: commonLogic.appcommonhandle("周期",null),
			date_disable: commonLogic.appcommonhandle("待定",null),
			config_week: commonLogic.appcommonhandle("周期设置周几",null),
			assignedto: commonLogic.appcommonhandle("指派给",null),
			status: commonLogic.appcommonhandle("状态",null),
			config_beforedays: commonLogic.appcommonhandle("提前",null),
			name: commonLogic.appcommonhandle("待办名称",null),
			assigneddate: commonLogic.appcommonhandle("指派日期",null),
			config_end: commonLogic.appcommonhandle("过期时间",null),
			cost: commonLogic.appcommonhandle("费用",null),
			pri: commonLogic.appcommonhandle("优先级",null),
			date: commonLogic.appcommonhandle("日期",null),
			story: commonLogic.appcommonhandle("待办名称",null),
			ibizprivate: commonLogic.appcommonhandle("私人事务",null),
			config: commonLogic.appcommonhandle("config",null),
		},
			views: {
				closeview: {
					caption: commonLogic.appcommonhandle("关闭",null),
					title: commonLogic.appcommonhandle("关闭",null),
				},
				assigntoview: {
					caption: commonLogic.appcommonhandle("指派给",null),
					title: commonLogic.appcommonhandle("指派表单视图",null),
				},
				dashboardview: {
					caption: commonLogic.appcommonhandle("待办",null),
					title: commonLogic.appcommonhandle("待办事宜表数据看板视图",null),
				},
				calendareditview: {
					caption: commonLogic.appcommonhandle("待办",null),
					title: commonLogic.appcommonhandle("待办编辑视图（日历导航）",null),
				},
				maindashboardview_link: {
					caption: commonLogic.appcommonhandle("待办",null),
					title: commonLogic.appcommonhandle("待办事宜表数据看板视图",null),
				},
				gridview9: {
					caption: commonLogic.appcommonhandle("我的待办",null),
					title: commonLogic.appcommonhandle("我的待办",null),
				},
				gridview: {
					caption: commonLogic.appcommonhandle("待办",null),
					title: commonLogic.appcommonhandle("待办事宜表格视图",null),
				},
				todocreateview: {
					caption: commonLogic.appcommonhandle("待办",null),
					title: commonLogic.appcommonhandle("添加待办",null),
				},
				baseeditview9: {
					caption: commonLogic.appcommonhandle("基本信息",null),
					title: commonLogic.appcommonhandle("待办事宜表编辑视图",null),
				},
				editview: {
					caption: commonLogic.appcommonhandle("待办",null),
					title: commonLogic.appcommonhandle("编辑待办",null),
				},
				finishview: {
					caption: commonLogic.appcommonhandle("完成",null),
					title: commonLogic.appcommonhandle("完成",null),
				},
				desceditview9: {
					caption: commonLogic.appcommonhandle("基本信息",null),
					title: commonLogic.appcommonhandle("待办事宜表编辑视图",null),
				},
				activiteview: {
					caption: commonLogic.appcommonhandle("激活",null),
					title: commonLogic.appcommonhandle("激活",null),
				},
			},
			dashboardmain_form: {
				details: {
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("待办名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					name: commonLogic.appcommonhandle("描述",null), 
					desc: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			editform_form: {
				details: {
					grouppanel3: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel2: commonLogic.appcommonhandle("周期设置",null), 
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					group1: commonLogic.appcommonhandle("编辑待办",null), 
					formpage1: commonLogic.appcommonhandle("添加待办",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("待办名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					date: commonLogic.appcommonhandle("日期",null), 
					cycle: commonLogic.appcommonhandle("周期",null), 
					config_type: commonLogic.appcommonhandle("周期类型",null), 
					config_day: commonLogic.appcommonhandle("",null), 
					config_week: commonLogic.appcommonhandle("",null), 
					config_month: commonLogic.appcommonhandle("",null), 
					idvalue: commonLogic.appcommonhandle("关联编号",null), 
					config_beforedays: commonLogic.appcommonhandle("提前",null), 
					formitem: commonLogic.appcommonhandle("天生成待办",null), 
					config_end: commonLogic.appcommonhandle("过期时间",null), 
					type: commonLogic.appcommonhandle("类型",null), 
					story: commonLogic.appcommonhandle("待办名称",null), 
					bug: commonLogic.appcommonhandle("待办名称",null), 
					task: commonLogic.appcommonhandle("待办名称",null), 
					pri: commonLogic.appcommonhandle("优先级",null), 
					name: commonLogic.appcommonhandle("待办名称",null), 
					desc: commonLogic.appcommonhandle("描述",null), 
					status: commonLogic.appcommonhandle("状态",null), 
					begin: commonLogic.appcommonhandle("起止时间",null), 
					end: commonLogic.appcommonhandle("~",null), 
					formitem10: commonLogic.appcommonhandle("",null), 
					private: commonLogic.appcommonhandle("私人事务",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			assigntoform_form: {
				details: {
					group1: commonLogic.appcommonhandle("指派给",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("待办名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					assignto: commonLogic.appcommonhandle("指派给",null), 
					date: commonLogic.appcommonhandle("日期",null), 
					future: commonLogic.appcommonhandle("",null), 
					begin: commonLogic.appcommonhandle("起止时间",null), 
					end: commonLogic.appcommonhandle("~",null), 
					lbldisabledate: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			finishfrom_form: {
				details: {
					rawitem1: commonLogic.appcommonhandle("",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("待办名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			activitefrom_form: {
				details: {
					rawitem1: commonLogic.appcommonhandle("",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("待办名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			closeform_form: {
				details: {
					rawitem1: commonLogic.appcommonhandle("",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("待办名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			dashboardbasic_form: {
				details: {
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel2: commonLogic.appcommonhandle("周期",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("待办名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					pri: commonLogic.appcommonhandle("优先级",null), 
					status: commonLogic.appcommonhandle("状态",null), 
					type: commonLogic.appcommonhandle("类型",null), 
					account: commonLogic.appcommonhandle("所有者",null), 
					date: commonLogic.appcommonhandle("日期",null), 
					begin: commonLogic.appcommonhandle("起止时间",null), 
					end: commonLogic.appcommonhandle("~",null), 
					assignedto: commonLogic.appcommonhandle("指派给",null), 
					assigneddate: commonLogic.appcommonhandle("指派日期",null), 
					config_type: commonLogic.appcommonhandle("周期类型",null), 
					date1: commonLogic.appcommonhandle("起止时间",null), 
					config_end: commonLogic.appcommonhandle("~",null), 
					config_day: commonLogic.appcommonhandle("周期设置",null), 
					config_week: commonLogic.appcommonhandle("周期设置",null), 
					config_month: commonLogic.appcommonhandle("周期设置",null), 
					config_beforedays: commonLogic.appcommonhandle("提前",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			main_form: {
				details: {
					grouppanel3: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel1: commonLogic.appcommonhandle("周期设置",null), 
					grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
					group1: commonLogic.appcommonhandle("",null), 
					formpage1: commonLogic.appcommonhandle("添加待办",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("待办名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					date: commonLogic.appcommonhandle("日期",null), 
					date_disable: commonLogic.appcommonhandle("",null), 
					cycle_enable: commonLogic.appcommonhandle("",null), 
					config_type: commonLogic.appcommonhandle("周期类型",null), 
					idvalue: commonLogic.appcommonhandle("关联编号",null), 
					formitem3: commonLogic.appcommonhandle("",null), 
					formitem4: commonLogic.appcommonhandle("",null), 
					formitem5: commonLogic.appcommonhandle("",null), 
					formitem2: commonLogic.appcommonhandle("提前",null), 
					formitem6: commonLogic.appcommonhandle("天生成待办",null), 
					formitem: commonLogic.appcommonhandle("过期时间",null), 
					type: commonLogic.appcommonhandle("类型",null), 
					pri: commonLogic.appcommonhandle("优先级",null), 
					task: commonLogic.appcommonhandle("待办名称",null), 
					story: commonLogic.appcommonhandle("待办名称",null), 
					bug: commonLogic.appcommonhandle("待办名称",null), 
					name: commonLogic.appcommonhandle("待办名称",null), 
					desc: commonLogic.appcommonhandle("描述",null), 
					status: commonLogic.appcommonhandle("状态",null), 
					begin: commonLogic.appcommonhandle("起止时间",null), 
					end: commonLogic.appcommonhandle("~",null), 
					formitem10: commonLogic.appcommonhandle("",null), 
					private: commonLogic.appcommonhandle("私人事务",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			calendarmain_form: {
				details: {
					button1: commonLogic.appcommonhandle("指派",null), 
					button2: commonLogic.appcommonhandle("完成",null), 
					button3: commonLogic.appcommonhandle("激活",null), 
					button4: commonLogic.appcommonhandle("关闭",null), 
					button5: commonLogic.appcommonhandle("编辑",null), 
					button6: commonLogic.appcommonhandle("删除",null), 
					grouppanel3: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel4: commonLogic.appcommonhandle("描述",null), 
					druipart1: commonLogic.appcommonhandle("",null), 
					grouppanel2: commonLogic.appcommonhandle("历史记录",null), 
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("待办名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("",null), 
					status: commonLogic.appcommonhandle("",null), 
					name: commonLogic.appcommonhandle("",null), 
					pri: commonLogic.appcommonhandle("优先级",null), 
					date: commonLogic.appcommonhandle("日期",null), 
					begin: commonLogic.appcommonhandle("开始",null), 
					end: commonLogic.appcommonhandle("~",null), 
					desc: commonLogic.appcommonhandle("",null), 
				},
				uiactions: {
				todo_assigntocz: commonLogic.appcommonhandle("指派",null),
				todo_finishcz: commonLogic.appcommonhandle("完成",null),
				todo_activatecz: commonLogic.appcommonhandle("激活",null),
				todo_closecz: commonLogic.appcommonhandle("关闭",null),
				todo_edit1cz: commonLogic.appcommonhandle("编辑",null),
				todo_deletecz: commonLogic.appcommonhandle("删除",null),
				exit: commonLogic.appcommonhandle("返回",null),
				},
			},
			myupcoming_grid: {
				columns: {
					date1: commonLogic.appcommonhandle("日期",null),
					begin: commonLogic.appcommonhandle("开始",null),
					pri: commonLogic.appcommonhandle("优先级",null),
					name: commonLogic.appcommonhandle("待办名称",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			main_grid: {
				columns: {
					id: commonLogic.appcommonhandle("编号",null),
					date1: commonLogic.appcommonhandle("日期",null),
					type: commonLogic.appcommonhandle("类型",null),
					pri: commonLogic.appcommonhandle("优先级",null),
					name: commonLogic.appcommonhandle("待办名称",null),
					begin: commonLogic.appcommonhandle("开始",null),
					end: commonLogic.appcommonhandle("结束",null),
					status: commonLogic.appcommonhandle("状态",null),
					uagridcolumn1: commonLogic.appcommonhandle("操作",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
			exportColumns: {
					id: commonLogic.appcommonhandle("编号",null),
					date1: commonLogic.appcommonhandle("日期",null),
					type: commonLogic.appcommonhandle("类型",null),
					pri: commonLogic.appcommonhandle("优先级",null),
					name: commonLogic.appcommonhandle("待办名称",null),
					begin: commonLogic.appcommonhandle("开始",null),
					end: commonLogic.appcommonhandle("结束",null),
					status: commonLogic.appcommonhandle("状态",null),
			},
				uiactions: {
				todo_assignto: commonLogic.appcommonhandle("指派",null),
				todo_finish: commonLogic.appcommonhandle("完成",null),
				todo_activate: commonLogic.appcommonhandle("激活",null),
				todo_close: commonLogic.appcommonhandle("关闭",null),
				todo_edit1: commonLogic.appcommonhandle("编辑",null),
				todo_delete: commonLogic.appcommonhandle("删除",null),
				},
			},
			editviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("Save And Close",null),
					tip: commonLogic.appcommonhandle("Save And Close Window",null),
				},
			},
			todocreateviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("Save And Close",null),
					tip: commonLogic.appcommonhandle("Save And Close Window",null),
				},
			},
			gridviewtoolbar_toolbar: {
				deuiaction3_todocreate: {
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
			dashboardviewdashboard_container1_portlet: {
				uiactions: {
				},
			},
			dashboardviewdashboard_container2_portlet: {
				uiactions: {
				},
			},
			tododesc_portlet: {
				tododesc: {
					title: commonLogic.appcommonhandle("描述", null)
			  	},
				uiactions: {
				},
			},
			todoaction_portlet: {
				todoaction: {
					title: commonLogic.appcommonhandle("历史记录", null)
			  	},
				uiactions: {
				},
			},
			dashboardviewdashboard_container4_portlet: {
				uiactions: {
				},
			},
			tododashboardactions_portlet: {
				tododashboardactions: {
					title: commonLogic.appcommonhandle("操作栏", null)
			  	},
				uiactions: {
				exit: commonLogic.appcommonhandle("返回",null),
				todo_edit1cz: commonLogic.appcommonhandle("编辑",null),
				todo_deletecz: commonLogic.appcommonhandle("删除",null),
				todo_assigntocz: commonLogic.appcommonhandle("指派",null),
				todo_finishcz: commonLogic.appcommonhandle("完成",null),
				todo_activatecz: commonLogic.appcommonhandle("激活",null),
				todo_closecz: commonLogic.appcommonhandle("关闭",null),
				todo_tobug: commonLogic.appcommonhandle("转Bug",null),
				todo_totask: commonLogic.appcommonhandle("转任务",null),
				},
			},
			dashboardviewdashboard_container3_portlet: {
				uiactions: {
				},
			},
			todobase_portlet: {
				todobase: {
					title: commonLogic.appcommonhandle("基本信息", null)
			  	},
				uiactions: {
				},
			},
			myupcoming_portlet: {
				myupcoming: {
					title: commonLogic.appcommonhandle("我的待办", null)
			  	},
				uiactions: {
				todo_more: commonLogic.appcommonhandle("MORE",null),
				},
			},
			maindashboardview_linkdashboard_container1_portlet: {
				uiactions: {
				},
			},
			maindashboardview_linkdashboard_container2_portlet: {
				uiactions: {
				},
			},
			maindashboardview_linkdashboard_container4_portlet: {
				uiactions: {
				},
			},
			maindashboardview_linkdashboard_container3_portlet: {
				uiactions: {
				},
			},
		};
		return data;
}

export default getLocaleResourceBase;