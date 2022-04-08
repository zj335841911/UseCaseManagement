import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("测试版本", null),
		fields: {
			end: commonLogic.appcommonhandle("结束日期",null),
			begin: commonLogic.appcommonhandle("开始日期",null),
			ownerpk: commonLogic.appcommonhandle("负责人（选择）",null),
			mailto: commonLogic.appcommonhandle("抄送给",null),
			casecnt: commonLogic.appcommonhandle("用例数",null),
			mailtopk: commonLogic.appcommonhandle("抄送给",null),
			pri: commonLogic.appcommonhandle("优先级",null),
			comment: commonLogic.appcommonhandle("备注",null),
			substatus: commonLogic.appcommonhandle("子状态",null),
			report: commonLogic.appcommonhandle("report",null),
			desc: commonLogic.appcommonhandle("描述",null),
			id: commonLogic.appcommonhandle("编号",null),
			status: commonLogic.appcommonhandle("当前状态",null),
			mailtoconact: commonLogic.appcommonhandle("联系人",null),
			owner: commonLogic.appcommonhandle("负责人",null),
			deleted: commonLogic.appcommonhandle("已删除",null),
			auto: commonLogic.appcommonhandle("auto",null),
			name: commonLogic.appcommonhandle("名称",null),
			buildname: commonLogic.appcommonhandle("版本",null),
			productname: commonLogic.appcommonhandle("产品",null),
			projecttname: commonLogic.appcommonhandle("项目",null),
			product: commonLogic.appcommonhandle("所属产品",null),
			build: commonLogic.appcommonhandle("版本",null),
			project: commonLogic.appcommonhandle("所属项目",null),
		},
			views: {
				editview_edit: {
					caption: commonLogic.appcommonhandle("测试版本",null),
					title: commonLogic.appcommonhandle("测试单编辑视图",null),
				},
				calendareditview: {
					caption: commonLogic.appcommonhandle("日历导航",null),
					title: commonLogic.appcommonhandle("测试版本编辑视图（日历导航）",null),
				},
				maintabexpview: {
					caption: commonLogic.appcommonhandle("测试版本",null),
					title: commonLogic.appcommonhandle("测试版本分页导航视图",null),
				},
				maindashboardview: {
					caption: commonLogic.appcommonhandle("测试版本",null),
					title: commonLogic.appcommonhandle("测试版本数据看板视图",null),
				},
				activiteoptionview: {
					caption: commonLogic.appcommonhandle("激活",null),
					title: commonLogic.appcommonhandle("激活",null),
				},
				startoptionview: {
					caption: commonLogic.appcommonhandle("开始",null),
					title: commonLogic.appcommonhandle("开始",null),
				},
				editview: {
					caption: commonLogic.appcommonhandle("测试版本",null),
					title: commonLogic.appcommonhandle("测试单编辑视图",null),
				},
				projectgridview: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("测试单表格视图（项目）",null),
				},
				projectneweditview: {
					caption: commonLogic.appcommonhandle("提交测试",null),
					title: commonLogic.appcommonhandle("测试单编辑视图",null),
				},
				editview9_info: {
					caption: commonLogic.appcommonhandle("测试版本",null),
					title: commonLogic.appcommonhandle("测试版本编辑视图",null),
				},
				myygridview: {
					caption: commonLogic.appcommonhandle("测试版本",null),
					title: commonLogic.appcommonhandle("测试单表格视图",null),
				},
				closeoptionview: {
					caption: commonLogic.appcommonhandle("关闭",null),
					title: commonLogic.appcommonhandle("关闭",null),
				},
				blockoptionview: {
					caption: commonLogic.appcommonhandle("阻塞",null),
					title: commonLogic.appcommonhandle("阻塞",null),
				},
				editview9_detail: {
					caption: commonLogic.appcommonhandle("测试版本",null),
					title: commonLogic.appcommonhandle("测试版本编辑视图",null),
				},
				gridview: {
					caption: commonLogic.appcommonhandle("测试版本",null),
					title: commonLogic.appcommonhandle("测试单表格视图",null),
				},
				mydgridview: {
					caption: commonLogic.appcommonhandle("测试版本",null),
					title: commonLogic.appcommonhandle("测试单表格视图",null),
				},
				editview_committest: {
					caption: commonLogic.appcommonhandle("测试版本",null),
					title: commonLogic.appcommonhandle("提交测试",null),
				},
				gridview9_untested: {
					caption: commonLogic.appcommonhandle("测试版本",null),
					title: commonLogic.appcommonhandle("测试版本表格视图",null),
				},
			},
			buildsubmit_form: {
				details: {
					grouppanel2: commonLogic.appcommonhandle("起止日期",null), 
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					group1: commonLogic.appcommonhandle("基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					productname: commonLogic.appcommonhandle("产品",null), 
					projecttname: commonLogic.appcommonhandle("项目",null), 
					buildname: commonLogic.appcommonhandle("版本",null), 
					owner: commonLogic.appcommonhandle("负责人",null), 
					pri: commonLogic.appcommonhandle("优先级",null), 
					begin: commonLogic.appcommonhandle("开始日期",null), 
					end: commonLogic.appcommonhandle("结束日期",null), 
					project: commonLogic.appcommonhandle("所属项目",null), 
					build: commonLogic.appcommonhandle("版本",null), 
					status: commonLogic.appcommonhandle("当前状态",null), 
					product: commonLogic.appcommonhandle("所属产品",null), 
					name: commonLogic.appcommonhandle("名称",null), 
					desc: commonLogic.appcommonhandle("描述",null), 
					mailto: commonLogic.appcommonhandle("抄送给",null), 
					mailtoconact: commonLogic.appcommonhandle("",null), 
					mailtopk: commonLogic.appcommonhandle("抄送给",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			maindetail_form: {
				details: {
					grouppanel1: commonLogic.appcommonhandle("描述",null), 
					group1: commonLogic.appcommonhandle("",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					desc: commonLogic.appcommonhandle("描述",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			activite_form: {
				details: {
					druipart1: commonLogic.appcommonhandle("",null), 
					group1: commonLogic.appcommonhandle("测试版本基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("",null), 
					name: commonLogic.appcommonhandle("",null), 
					comment: commonLogic.appcommonhandle("备注",null), 
				},
				uiactions: {
				},
			},
			start_form: {
				details: {
					druipart1: commonLogic.appcommonhandle("",null), 
					group1: commonLogic.appcommonhandle("测试版本基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("",null), 
					name: commonLogic.appcommonhandle("",null), 
					comment: commonLogic.appcommonhandle("备注",null), 
				},
				uiactions: {
				},
			},
			close_form: {
				details: {
					druipart1: commonLogic.appcommonhandle("",null), 
					group1: commonLogic.appcommonhandle("测试版本基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("",null), 
					name: commonLogic.appcommonhandle("",null), 
					comment: commonLogic.appcommonhandle("备注",null), 
					mailto: commonLogic.appcommonhandle("抄送给",null), 
					mailtoconact: commonLogic.appcommonhandle("",null), 
					mailtopk: commonLogic.appcommonhandle("抄送给",null), 
				},
				uiactions: {
				},
			},
			block_form: {
				details: {
					druipart1: commonLogic.appcommonhandle("",null), 
					group1: commonLogic.appcommonhandle("测试版本基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("",null), 
					name: commonLogic.appcommonhandle("",null), 
					comment: commonLogic.appcommonhandle("备注",null), 
				},
				uiactions: {
				},
			},
			maininfo_form: {
				details: {
					group1: commonLogic.appcommonhandle("基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					projecttname: commonLogic.appcommonhandle("所属项目",null), 
					build: commonLogic.appcommonhandle("版本",null), 
					owner: commonLogic.appcommonhandle("负责人",null), 
					mailto: commonLogic.appcommonhandle("抄送给",null), 
					pri: commonLogic.appcommonhandle("优先级",null), 
					begin: commonLogic.appcommonhandle("开始日期",null), 
					end: commonLogic.appcommonhandle("结束日期",null), 
					status: commonLogic.appcommonhandle("当前状态",null), 
					id: commonLogic.appcommonhandle("编号",null), 
					project: commonLogic.appcommonhandle("所属项目",null), 
				},
				uiactions: {
				},
			},
			mainedit_form: {
				details: {
					grouppanel2: commonLogic.appcommonhandle("起止日期",null), 
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					group1: commonLogic.appcommonhandle("基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					projecttname: commonLogic.appcommonhandle("项目",null), 
					product: commonLogic.appcommonhandle("所属产品",null), 
					buildname: commonLogic.appcommonhandle("版本",null), 
					owner: commonLogic.appcommonhandle("负责人",null), 
					pri: commonLogic.appcommonhandle("优先级",null), 
					begin: commonLogic.appcommonhandle("开始日期",null), 
					end: commonLogic.appcommonhandle("结束日期",null), 
					status: commonLogic.appcommonhandle("当前状态",null), 
					name: commonLogic.appcommonhandle("名称",null), 
					desc: commonLogic.appcommonhandle("描述",null), 
					comment: commonLogic.appcommonhandle("备注",null), 
					mailto: commonLogic.appcommonhandle("抄送给",null), 
					mailtoconact: commonLogic.appcommonhandle("",null), 
					mailtopk: commonLogic.appcommonhandle("抄送给",null), 
					id: commonLogic.appcommonhandle("编号",null), 
					project: commonLogic.appcommonhandle("所属项目",null), 
					build: commonLogic.appcommonhandle("版本",null), 
				},
				uiactions: {
				},
			},
			projectnew_form: {
				details: {
					grouppanel2: commonLogic.appcommonhandle("起止日期",null), 
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					group1: commonLogic.appcommonhandle("基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					productname: commonLogic.appcommonhandle("产品",null), 
					projecttname: commonLogic.appcommonhandle("项目",null), 
					buildname: commonLogic.appcommonhandle("版本",null), 
					owner: commonLogic.appcommonhandle("负责人",null), 
					pri: commonLogic.appcommonhandle("优先级",null), 
					begin: commonLogic.appcommonhandle("开始日期",null), 
					end: commonLogic.appcommonhandle("结束日期",null), 
					project: commonLogic.appcommonhandle("所属项目",null), 
					build: commonLogic.appcommonhandle("版本",null), 
					status: commonLogic.appcommonhandle("当前状态",null), 
					product: commonLogic.appcommonhandle("所属产品",null), 
					name: commonLogic.appcommonhandle("名称",null), 
					desc: commonLogic.appcommonhandle("描述",null), 
					mailto: commonLogic.appcommonhandle("抄送给",null), 
					mailtoconact: commonLogic.appcommonhandle("",null), 
					mailtopk: commonLogic.appcommonhandle("抄送给",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			main_form: {
				details: {
					grouppanel2: commonLogic.appcommonhandle("起止日期",null), 
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					group1: commonLogic.appcommonhandle("基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					projecttname: commonLogic.appcommonhandle("项目",null), 
					buildname: commonLogic.appcommonhandle("版本",null), 
					owner: commonLogic.appcommonhandle("负责人",null), 
					pri: commonLogic.appcommonhandle("优先级",null), 
					begin: commonLogic.appcommonhandle("开始日期",null), 
					end: commonLogic.appcommonhandle("结束日期",null), 
					project: commonLogic.appcommonhandle("所属项目",null), 
					build: commonLogic.appcommonhandle("版本",null), 
					status: commonLogic.appcommonhandle("当前状态",null), 
					product: commonLogic.appcommonhandle("所属产品",null), 
					name: commonLogic.appcommonhandle("名称",null), 
					desc: commonLogic.appcommonhandle("描述",null), 
					mailto: commonLogic.appcommonhandle("抄送给",null), 
					mailtoconact: commonLogic.appcommonhandle("",null), 
					mailtopk: commonLogic.appcommonhandle("抄送给",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			calendarmain_form: {
				details: {
					button1: commonLogic.appcommonhandle("开始",null), 
					button2: commonLogic.appcommonhandle("关闭",null), 
					button3: commonLogic.appcommonhandle("阻塞",null), 
					button4: commonLogic.appcommonhandle("编辑",null), 
					button5: commonLogic.appcommonhandle("查看",null), 
					grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel3: commonLogic.appcommonhandle("描述",null), 
					druipart1: commonLogic.appcommonhandle("",null), 
					grouppanel4: commonLogic.appcommonhandle("历史记录",null), 
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("",null), 
					status: commonLogic.appcommonhandle("",null), 
					name: commonLogic.appcommonhandle("",null), 
					pri: commonLogic.appcommonhandle("优先级",null), 
					begin: commonLogic.appcommonhandle("开始日期",null), 
					end: commonLogic.appcommonhandle("结束日期",null), 
					desc: commonLogic.appcommonhandle("",null), 
				},
				uiactions: {
					testtask_startdash: commonLogic.appcommonhandle("开始",null),
					testtask_closedash: commonLogic.appcommonhandle("关闭",null),
					testtask_blockdash: commonLogic.appcommonhandle("阻塞",null),
					testtask_editedit: commonLogic.appcommonhandle("编辑",null),
					testtask_look: commonLogic.appcommonhandle("查看",null),
				},
			},
			main_grid: {
				columns: {
					id: commonLogic.appcommonhandle("ID",null),
					name: commonLogic.appcommonhandle("名称",null),
					productname: commonLogic.appcommonhandle("产品",null),
					projecttname: commonLogic.appcommonhandle("项目",null),
					buildname: commonLogic.appcommonhandle("版本",null),
					owner: commonLogic.appcommonhandle("负责人",null),
					begin: commonLogic.appcommonhandle("开始日期",null),
					end: commonLogic.appcommonhandle("结束日期",null),
					status: commonLogic.appcommonhandle("当前状态",null),
					uagridcolumn1: commonLogic.appcommonhandle("操作",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
			exportColumns: {
					id: commonLogic.appcommonhandle("ID",null),
					name: commonLogic.appcommonhandle("名称",null),
					productname: commonLogic.appcommonhandle("产品",null),
					projecttname: commonLogic.appcommonhandle("项目",null),
					product: commonLogic.appcommonhandle("所属产品",null),
					project: commonLogic.appcommonhandle("所属项目",null),
					build: commonLogic.appcommonhandle("版本",null),
					buildname: commonLogic.appcommonhandle("版本",null),
					owner: commonLogic.appcommonhandle("负责人",null),
					begin: commonLogic.appcommonhandle("开始日期",null),
					end: commonLogic.appcommonhandle("结束日期",null),
					status: commonLogic.appcommonhandle("当前状态",null),
			},
				uiactions: {
					testtask_linkcase: commonLogic.appcommonhandle("关联用例",null),
					testtask_testreportr: commonLogic.appcommonhandle("测试报告",null),
					testtask_openinfoview: commonLogic.appcommonhandle("概况",null),
					testtask_editedit: commonLogic.appcommonhandle("编辑",null),
					testtask_delete: commonLogic.appcommonhandle("删除",null),
				},
			},
			main2_grid: {
				columns: {
					id: commonLogic.appcommonhandle("ID",null),
					productname: commonLogic.appcommonhandle("产品",null),
					name: commonLogic.appcommonhandle("名称",null),
					projecttname: commonLogic.appcommonhandle("项目",null),
					build: commonLogic.appcommonhandle("版本",null),
					begin: commonLogic.appcommonhandle("开始日期",null),
					end: commonLogic.appcommonhandle("结束日期",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			editview_committesttoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("保存并关闭",null),
					tip: commonLogic.appcommonhandle("保存并关闭",null),
				},
			},
			editview_edittoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("保存并关闭",null),
					tip: commonLogic.appcommonhandle("保存并关闭",null),
				},
			},
			projectneweditviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("保存并关闭",null),
					tip: commonLogic.appcommonhandle("保存并关闭",null),
				},
			},
			projectgridviewtoolbar_toolbar: {
				deuiaction3_testreport: {
					caption: commonLogic.appcommonhandle("测试报告",null),
					tip: commonLogic.appcommonhandle("测试报告",null),
				},
				deuiaction3_reports: {
					caption: commonLogic.appcommonhandle("报告列表",null),
					tip: commonLogic.appcommonhandle("报告列表",null),
				},
				deuiaction3_projectcreate: {
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
			editviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("保存并关闭",null),
					tip: commonLogic.appcommonhandle("保存并关闭",null),
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
					caption: commonLogic.appcommonhandle("导出",null),
					tip: commonLogic.appcommonhandle("导出",null),
				},
				deuiaction4: {
					caption: commonLogic.appcommonhandle("过滤",null),
					tip: commonLogic.appcommonhandle("过滤",null),
				},
			},
			mydgridviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("过滤",null),
					tip: commonLogic.appcommonhandle("过滤",null),
				},
			},
			myygridviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("过滤",null),
					tip: commonLogic.appcommonhandle("过滤",null),
				},
			},
			maintabexpviewtabexppanel_tabexppanel: {
				tabviewpanels: {
					tabviewpanel: {
						caption: commonLogic.appcommonhandle("测试用例",null),
					},
					tabviewpanel2: {
						caption: commonLogic.appcommonhandle("测试版本详情",null),
					}
				},
				uiactions: {
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
			maindetail_portlet: {
				maindetail: {
					title: commonLogic.appcommonhandle("详细信息", null)
				},
				uiactions: {
				},
			},
			maindashboardviewdashboard_container4_portlet: {
				uiactions: {
				},
			},
			actionbar_portlet: {
				actionbar: {
					title: commonLogic.appcommonhandle("操作栏", null)
				},
				uiactions: {
					exit: commonLogic.appcommonhandle("返回",null),
					testtask_activitedash: commonLogic.appcommonhandle("激活",null),
					testtask_startdash: commonLogic.appcommonhandle("开始",null),
					testtask_closedash: commonLogic.appcommonhandle("关闭",null),
					testtask_blockdash: commonLogic.appcommonhandle("阻塞",null),
				},
			},
			maindashboardviewdashboard_container3_portlet: {
				uiactions: {
				},
			},
			maininfo_portlet: {
				maininfo: {
					title: commonLogic.appcommonhandle("基本信息", null)
				},
				uiactions: {
				},
			},
			totesttesttask_portlet: {
				totesttesttask: {
					title: commonLogic.appcommonhandle("待测试版本", null)
				},
				uiactions: {
				},
			},
		};
		return data;
}
export default getLocaleResourceBase;