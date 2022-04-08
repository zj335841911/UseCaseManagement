import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("项目", null),
		fields: {
			openedversion: commonLogic.appcommonhandle("当前系统版本",null),
			begin: commonLogic.appcommonhandle("开始时间",null),
			hours: commonLogic.appcommonhandle("可用工时/天",null),
			pmseeprojectinfo: commonLogic.appcommonhandle("项目立项信息",null),
			acl: commonLogic.appcommonhandle("访问控制",null),
			deleted: commonLogic.appcommonhandle("已删除",null),
			totalconsumed: commonLogic.appcommonhandle("任务消耗总工时",null),
			products: commonLogic.appcommonhandle("关联产品",null),
			ycompletetaskcnt: commonLogic.appcommonhandle("已完成任务数",null),
			plans: commonLogic.appcommonhandle("关联计划",null),
			desc: commonLogic.appcommonhandle("项目描述",null),
			temptaskcnt: commonLogic.appcommonhandle("临时任务数",null),
			doclibcnt: commonLogic.appcommonhandle("文档数量",null),
			mycompletetaskcnt: commonLogic.appcommonhandle("我完成任务数",null),
			istop: commonLogic.appcommonhandle("是否置顶",null),
			uncompletetaskcnt: commonLogic.appcommonhandle("未完成任务数",null),
			teamcnt: commonLogic.appcommonhandle("团队成员总数",null),
			pm: commonLogic.appcommonhandle("项目负责人",null),
			dept: commonLogic.appcommonhandle("选择部门",null),
			id: commonLogic.appcommonhandle("项目编号",null),
			name: commonLogic.appcommonhandle("项目名称",null),
			substatus: commonLogic.appcommonhandle("子状态",null),
			role: commonLogic.appcommonhandle("角色",null),
			order: commonLogic.appcommonhandle("项目排序",null),
			bugcnt: commonLogic.appcommonhandle("Bug总数",null),
			rd: commonLogic.appcommonhandle("发布负责人",null),
			managemembers: commonLogic.appcommonhandle("复制团队",null),
			ystarttaskcnt: commonLogic.appcommonhandle("进行中任务数",null),
			whitelist: commonLogic.appcommonhandle("分组白名单",null),
			mobimage: commonLogic.appcommonhandle("移动端图片",null),
			totalwh: commonLogic.appcommonhandle("总工时",null),
			projectteams: commonLogic.appcommonhandle("项目团队成员",null),
			totalhours: commonLogic.appcommonhandle("可用工时",null),
			pri: commonLogic.appcommonhandle("优先级",null),
			end: commonLogic.appcommonhandle("结束日期",null),
			canceleddate: commonLogic.appcommonhandle("取消日期",null),
			plantaskcnt: commonLogic.appcommonhandle("计划任务数",null),
			join: commonLogic.appcommonhandle("加盟日",null),
			totalestimate: commonLogic.appcommonhandle("任务最初预计总工时",null),
			mdeptid: commonLogic.appcommonhandle("部门标识",null),
			totalleft: commonLogic.appcommonhandle("任务预计剩余总工时",null),
			srfarray: commonLogic.appcommonhandle("关联数据数组",null),
			code: commonLogic.appcommonhandle("项目代号",null),
			period: commonLogic.appcommonhandle("时间段",null),
			closetaskcnt: commonLogic.appcommonhandle("关闭任务数",null),
			branchs: commonLogic.appcommonhandle("关联产品平台集合",null),
			catid: commonLogic.appcommonhandle("catID",null),
			orgid: commonLogic.appcommonhandle("组织标识",null),
			unstarttaskcnt: commonLogic.appcommonhandle("未开始任务数",null),
			accounts: commonLogic.appcommonhandle("项目团队相关成员",null),
			noticeusers: commonLogic.appcommonhandle("消息通知用户",null),
			statge: commonLogic.appcommonhandle("statge",null),
			canceltaskcnt: commonLogic.appcommonhandle("取消任务数",null),
			taskcnt: commonLogic.appcommonhandle("任务总数",null),
			alltaskcnt: commonLogic.appcommonhandle("所有任务数",null),
			supproreport: commonLogic.appcommonhandle("支持项目汇报",null),
			canceledby: commonLogic.appcommonhandle("由谁取消",null),
			iscat: commonLogic.appcommonhandle("isCat",null),
			openeddate: commonLogic.appcommonhandle("创建日期",null),
			unclosetaskcnt: commonLogic.appcommonhandle("未关闭任务数",null),
			storychangecnt: commonLogic.appcommonhandle("需求变更数",null),
			closedby: commonLogic.appcommonhandle("由谁关闭",null),
			type: commonLogic.appcommonhandle("项目类型",null),
			buildcnt: commonLogic.appcommonhandle("版本总数",null),
			account: commonLogic.appcommonhandle("项目团队成员",null),
			po: commonLogic.appcommonhandle("产品负责人",null),
			asstomytaskcnt: commonLogic.appcommonhandle("指派给我任务数",null),
			order1: commonLogic.appcommonhandle("项目排序",null),
			status: commonLogic.appcommonhandle("项目状态",null),
			moretaskcnt: commonLogic.appcommonhandle("更多任务数",null),
			days: commonLogic.appcommonhandle("可用工作日",null),
			cycletaskcnt: commonLogic.appcommonhandle("周期任务数",null),
			team: commonLogic.appcommonhandle("团队名称",null),
			closeddate: commonLogic.appcommonhandle("关闭日期",null),
			comment: commonLogic.appcommonhandle("备注",null),
			openedby: commonLogic.appcommonhandle("由谁创建",null),
			storycnt: commonLogic.appcommonhandle("需求总数",null),
			qd: commonLogic.appcommonhandle("测试负责人",null),
			parentname: commonLogic.appcommonhandle("parent",null),
			parent: commonLogic.appcommonhandle("父项目",null),
		},
			views: {
				tasktreeexpview: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目任务导航视图",null),
				},
				burndownchartview: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("燃尽图",null),
				},
				pickupgridview: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目选择表格视图",null),
				},
				storymeditview9: {
					caption: commonLogic.appcommonhandle("需求相关",null),
					title: commonLogic.appcommonhandle("项目多表单编辑视图（需求相关）",null),
				},
				gridexpview: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目表格导航视图",null),
				},
				gridviewemp: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目",null),
				},
				curproductgridview: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("project表格视图",null),
				},
				pickupview: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目数据选择视图",null),
				},
				planaddeditview: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目编辑视图（计划添加）",null),
				},
				moreundoneprogridview: {
					caption: commonLogic.appcommonhandle("未完成项目",null),
					title: commonLogic.appcommonhandle("项目表格视图",null),
				},
				gridview9: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目表格视图",null),
				},
				editview_close: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目",null),
				},
				editview_putoff: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目",null),
				},
				leftsidebarlistview: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("所有项目",null),
				},
				gridview: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目",null),
				},
				maindashboardview: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目数据看板视图",null),
				},
				mainmygridview: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目",null),
				},
				editview_suspend: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目",null),
				},
				mgeditview: {
					caption: commonLogic.appcommonhandle("团队管理",null),
					title: commonLogic.appcommonhandle("项目编辑视图（团队管理）",null),
				},
				gridview9_unclosed: {
					caption: commonLogic.appcommonhandle("未关闭的项目",null),
					title: commonLogic.appcommonhandle("项目表格视图",null),
				},
				undoneprojectgridview: {
					caption: commonLogic.appcommonhandle("未完成项目",null),
					title: commonLogic.appcommonhandle("项目表格视图",null),
				},
				editview_activate: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目",null),
				},
				testtabexpview: {
					caption: commonLogic.appcommonhandle("测试",null),
					title: commonLogic.appcommonhandle("项目分页导航视图（测试）",null),
				},
				usr2gridview: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目实体表格视图(参与项目)",null),
				},
				listexpview: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目列表导航视图",null),
				},
				chartview9: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目图表视图",null),
				},
				mainview_edit: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目编辑视图",null),
				},
				dashboardinfoview: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目信息",null),
				},
				editview: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目",null),
				},
				maintabexpview: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("项目",null),
				},
				storyeditview9: {
					caption: commonLogic.appcommonhandle("需求",null),
					title: commonLogic.appcommonhandle("项目编辑视图（需求相关）",null),
				},
			},
			putoff_form: {
				details: {
					grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					druipart1: commonLogic.appcommonhandle("",null), 
					group1: commonLogic.appcommonhandle("project基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("项目编号",null), 
					srfmajortext: commonLogic.appcommonhandle("项目名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					begin: commonLogic.appcommonhandle("开始时间",null), 
					end: commonLogic.appcommonhandle("至",null), 
					period: commonLogic.appcommonhandle("",null), 
					days: commonLogic.appcommonhandle("可用工作日",null), 
					type: commonLogic.appcommonhandle("项目类型",null), 
					comment: commonLogic.appcommonhandle("备注",null), 
					id: commonLogic.appcommonhandle("项目编号",null), 
				},
				uiactions: {
				},
			},
			suspendnclose_form: {
				details: {
					druipart1: commonLogic.appcommonhandle("",null), 
					group1: commonLogic.appcommonhandle("project基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("项目编号",null), 
					srfmajortext: commonLogic.appcommonhandle("项目名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					comment: commonLogic.appcommonhandle("备注",null), 
					id: commonLogic.appcommonhandle("项目编号",null), 
				},
				uiactions: {
				},
			},
			activate_form: {
				details: {
					druipart1: commonLogic.appcommonhandle("",null), 
					group1: commonLogic.appcommonhandle("project基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("项目编号",null), 
					srfmajortext: commonLogic.appcommonhandle("项目名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					formitem: commonLogic.appcommonhandle("开始时间",null), 
					formitem1: commonLogic.appcommonhandle("结束日期",null), 
					formitemex1: commonLogic.appcommonhandle("起止时间",null), 
					comment: commonLogic.appcommonhandle("备注",null), 
					id: commonLogic.appcommonhandle("项目编号",null), 
				},
				uiactions: {
				},
			},
			main_edit_form: {
				details: {
					grouppanel3: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel2: commonLogic.appcommonhandle("负责人",null), 
					grouppanel4: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					group1: commonLogic.appcommonhandle("project基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("项目编号",null), 
					srfmajortext: commonLogic.appcommonhandle("项目名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					name: commonLogic.appcommonhandle("项目名称",null), 
					code: commonLogic.appcommonhandle("项目代号",null), 
					begin: commonLogic.appcommonhandle("起始日期",null), 
					end: commonLogic.appcommonhandle("至",null), 
					period: commonLogic.appcommonhandle("",null), 
					days: commonLogic.appcommonhandle("可用工作日",null), 
					type: commonLogic.appcommonhandle("项目类型",null), 
					supproreport: commonLogic.appcommonhandle("支持项目汇报",null), 
					team: commonLogic.appcommonhandle("团队名称",null), 
					status: commonLogic.appcommonhandle("项目状态",null), 
					po: commonLogic.appcommonhandle("产品负责人",null), 
					pm: commonLogic.appcommonhandle("项目负责人",null), 
					rd: commonLogic.appcommonhandle("发布负责人",null), 
					qd: commonLogic.appcommonhandle("测试负责人",null), 
					srfarray: commonLogic.appcommonhandle("关联数据数组",null), 
					products: commonLogic.appcommonhandle("关联产品",null), 
					branchs: commonLogic.appcommonhandle("关联产品平台集合",null), 
					plans: commonLogic.appcommonhandle("关联计划",null), 
					formitemex2: commonLogic.appcommonhandle("",null), 
					desc: commonLogic.appcommonhandle("项目描述",null), 
					acl: commonLogic.appcommonhandle("访问控制",null), 
					id: commonLogic.appcommonhandle("项目编号",null), 
				},
				uiactions: {
				},
			},
			dashboardinfo_form: {
				details: {
					grouppanel9: commonLogic.appcommonhandle("分组面板",null), 
					group1: commonLogic.appcommonhandle("project基本信息",null), 
					druipart1: commonLogic.appcommonhandle("",null), 
					grouppanel6: commonLogic.appcommonhandle("关联产品",null), 
					druipart2: commonLogic.appcommonhandle("",null), 
					grouppanel7: commonLogic.appcommonhandle("关联计划",null), 
					grouppanel8: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel3: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel1: commonLogic.appcommonhandle("工时统计",null), 
					grouppanel4: commonLogic.appcommonhandle("基本信息",null), 
					grouppanel5: commonLogic.appcommonhandle("访问控制",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("项目编号",null), 
					srfmajortext: commonLogic.appcommonhandle("项目名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("项目编号",null), 
					code: commonLogic.appcommonhandle("项目代号",null), 
					name: commonLogic.appcommonhandle("",null), 
					desc: commonLogic.appcommonhandle("",null), 
					type: commonLogic.appcommonhandle("项目类型",null), 
					status: commonLogic.appcommonhandle("项目状态",null), 
					formitem6: commonLogic.appcommonhandle("总工时",null), 
					formitem7: commonLogic.appcommonhandle("任务消耗总工时",null), 
					formitemex1: commonLogic.appcommonhandle("进度",null), 
					begin: commonLogic.appcommonhandle("开始时间",null), 
					end: commonLogic.appcommonhandle("结束日期",null), 
					days: commonLogic.appcommonhandle("可用工作日",null), 
					totalhours: commonLogic.appcommonhandle("可用工时",null), 
					formitem: commonLogic.appcommonhandle("预计",null), 
					formitem1: commonLogic.appcommonhandle("消耗",null), 
					formitem2: commonLogic.appcommonhandle("剩余",null), 
					formitem3: commonLogic.appcommonhandle("需求",null), 
					formitem4: commonLogic.appcommonhandle("任务",null), 
					formitem5: commonLogic.appcommonhandle("Bug",null), 
					acl: commonLogic.appcommonhandle("访问控制",null), 
				},
				uiactions: {
				},
			},
			newplan_form: {
				details: {
					grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					group1: commonLogic.appcommonhandle("project基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("项目编号",null), 
					srfmajortext: commonLogic.appcommonhandle("项目名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					name: commonLogic.appcommonhandle("项目名称",null), 
					code: commonLogic.appcommonhandle("项目代号",null), 
					begin: commonLogic.appcommonhandle("开始时间",null), 
					end: commonLogic.appcommonhandle("至",null), 
					period: commonLogic.appcommonhandle("",null), 
					days: commonLogic.appcommonhandle("可用工作日",null), 
					team: commonLogic.appcommonhandle("团队名称",null), 
					type: commonLogic.appcommonhandle("项目类型",null), 
					supproreport: commonLogic.appcommonhandle("支持项目汇报",null), 
					srfarray: commonLogic.appcommonhandle("关联数据数组",null), 
					products: commonLogic.appcommonhandle("关联产品",null), 
					branchs: commonLogic.appcommonhandle("关联产品平台集合",null), 
					plans: commonLogic.appcommonhandle("关联计划",null), 
					formitemex2: commonLogic.appcommonhandle("",null), 
					desc: commonLogic.appcommonhandle("项目描述",null), 
					acl: commonLogic.appcommonhandle("访问控制",null), 
					id: commonLogic.appcommonhandle("项目编号",null), 
				},
				uiactions: {
				},
			},
			newform_form: {
				details: {
					grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					group1: commonLogic.appcommonhandle("project基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("项目编号",null), 
					srfmajortext: commonLogic.appcommonhandle("项目名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					name: commonLogic.appcommonhandle("项目名称",null), 
					code: commonLogic.appcommonhandle("项目代号",null), 
					begin: commonLogic.appcommonhandle("开始时间",null), 
					end: commonLogic.appcommonhandle("至",null), 
					period: commonLogic.appcommonhandle("",null), 
					days: commonLogic.appcommonhandle("可用工作日",null), 
					team: commonLogic.appcommonhandle("团队名称",null), 
					type: commonLogic.appcommonhandle("项目类型",null), 
					supproreport: commonLogic.appcommonhandle("支持项目汇报",null), 
					srfarray: commonLogic.appcommonhandle("关联数据数组",null), 
					products: commonLogic.appcommonhandle("关联产品",null), 
					branchs: commonLogic.appcommonhandle("关联产品平台集合",null), 
					plans: commonLogic.appcommonhandle("关联计划",null), 
					formitemex2: commonLogic.appcommonhandle("",null), 
					desc: commonLogic.appcommonhandle("项目描述",null), 
					acl: commonLogic.appcommonhandle("访问控制",null), 
					id: commonLogic.appcommonhandle("项目编号",null), 
				},
				uiactions: {
				},
			},
			projectmg_form: {
				details: {
					rawitem1: commonLogic.appcommonhandle("",null), 
					druipart1: commonLogic.appcommonhandle("",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("项目编号",null), 
					srfmajortext: commonLogic.appcommonhandle("项目名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					dept: commonLogic.appcommonhandle("选择部门",null), 
					managemembers: commonLogic.appcommonhandle("复制团队",null), 
					id: commonLogic.appcommonhandle("项目编号",null), 
				},
				uiactions: {
				},
			},
			storyproject_form: {
				details: {
					druipart1: commonLogic.appcommonhandle("",null), 
					group1: commonLogic.appcommonhandle("项目基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("项目编号",null), 
					srfmajortext: commonLogic.appcommonhandle("项目名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					accounts: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("项目编号",null), 
				},
				uiactions: {
				},
			},
			main_grid: {
				columns: {
					id: commonLogic.appcommonhandle("ID",null),
					name: commonLogic.appcommonhandle("项目名称",null),
					code: commonLogic.appcommonhandle("项目代号",null),
					status: commonLogic.appcommonhandle("项目状态",null),
					end: commonLogic.appcommonhandle("结束日期",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			involvedproject_grid: {
				columns: {
					name: commonLogic.appcommonhandle("项目名称",null),
					storycnt: commonLogic.appcommonhandle("需求总数",null),
					ycompletetaskcnt: commonLogic.appcommonhandle("已完成任务数",null),
					bugcnt: commonLogic.appcommonhandle("Bug总数",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			undoneproject_grid: {
				columns: {
					name: commonLogic.appcommonhandle("项目名称",null),
					doclibcnt: commonLogic.appcommonhandle("文档数量",null),
					openedby: commonLogic.appcommonhandle("由谁添加",null),
					openeddate: commonLogic.appcommonhandle("添加时间",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			mainconcat_grid: {
				columns: {
					id: commonLogic.appcommonhandle("ID",null),
					name: commonLogic.appcommonhandle("项目名称",null),
					status: commonLogic.appcommonhandle("项目状态",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			mainmy_grid: {
				columns: {
					id: commonLogic.appcommonhandle("ID",null),
					code: commonLogic.appcommonhandle("项目代号",null),
					name: commonLogic.appcommonhandle("项目名称",null),
					begin: commonLogic.appcommonhandle("开始时间",null),
					end: commonLogic.appcommonhandle("结束日期",null),
					status: commonLogic.appcommonhandle("项目状态",null),
					role: commonLogic.appcommonhandle("角色",null),
					join: commonLogic.appcommonhandle("加盟日",null),
					hours: commonLogic.appcommonhandle("可用工时/天",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			moreundoneproject_grid: {
				columns: {
					name: commonLogic.appcommonhandle("项目名称",null),
					doclibcnt: commonLogic.appcommonhandle("文档数量",null),
					openedby: commonLogic.appcommonhandle("由谁添加",null),
					openeddate: commonLogic.appcommonhandle("添加时间",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			main2_grid: {
				columns: {
					id: commonLogic.appcommonhandle("ID",null),
					name: commonLogic.appcommonhandle("项目名称",null),
					code: commonLogic.appcommonhandle("项目代号",null),
					status: commonLogic.appcommonhandle("项目状态",null),
					end: commonLogic.appcommonhandle("结束日期",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			sidebar_list: {
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
					project_projecttop: commonLogic.appcommonhandle("置顶",null),
					project_cancelprojecttop: commonLogic.appcommonhandle("取消置顶",null),
				},
			},
			exp_list: {
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			involvedproject_dev_chart: {
				nodata:commonLogic.appcommonhandle("",null),
			},
			projectstatusbar_chart: {
				nodata:commonLogic.appcommonhandle("",null),
			},
			burndown_chart: {
				nodata:commonLogic.appcommonhandle("",null),
			},
			default_searchform: {
				details: {
					formpage1: commonLogic.appcommonhandle("常规条件",null), 
				},
				uiactions: {
				},
			},
			editview_putofftoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("保存并关闭",null),
					tip: commonLogic.appcommonhandle("保存并关闭",null),
				},
			},
			editview_suspendtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("保存并关闭",null),
					tip: commonLogic.appcommonhandle("保存并关闭",null),
				},
			},
			editview_activatetoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("保存并关闭",null),
					tip: commonLogic.appcommonhandle("保存并关闭",null),
				},
			},
			editview_closetoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("保存并关闭",null),
					tip: commonLogic.appcommonhandle("保存并关闭",null),
				},
			},
			mainview_edittoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("保存并关闭",null),
					tip: commonLogic.appcommonhandle("保存并关闭",null),
				},
			},
			planaddeditviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("保存并关闭",null),
					tip: commonLogic.appcommonhandle("保存并关闭",null),
				},
			},
			curproductgridviewtoolbar_toolbar: {
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
			leftsidebarlistviewtoolbar_toolbar: {
				deuiaction3_manager: {
					caption: commonLogic.appcommonhandle("管理",null),
					tip: commonLogic.appcommonhandle("管理",null),
				},
				deuiaction3_create: {
					caption: commonLogic.appcommonhandle("新建",null),
					tip: commonLogic.appcommonhandle("新建",null),
				},
				deuiaction2: {
					caption: commonLogic.appcommonhandle("刷新",null),
					tip: commonLogic.appcommonhandle("刷新",null),
				},
			},
			leftsidebarlistviewlist_quicktoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("置顶",null),
					tip: commonLogic.appcommonhandle("置顶",null),
				},
				deuiaction2: {
					caption: commonLogic.appcommonhandle("取消置顶",null),
					tip: commonLogic.appcommonhandle("取消置顶",null),
				},
			},
			mainmygridviewtoolbar_toolbar: {
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
			moreundoneprogridviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("过滤",null),
					tip: commonLogic.appcommonhandle("过滤",null),
				},
			},
			usr2gridviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("过滤",null),
					tip: commonLogic.appcommonhandle("过滤",null),
				},
			},
			maintabexpviewtabexppanel_tabexppanel: {
				tabviewpanels: {
					tabviewpanel: {
						caption: commonLogic.appcommonhandle("概况",null),
					},
					tabviewpanel2: {
						caption: commonLogic.appcommonhandle("任务",null),
					},
					tabviewpanel6: {
						caption: commonLogic.appcommonhandle("看板",null),
					},
					tabviewpanel11: {
						caption: commonLogic.appcommonhandle("燃尽图",null),
					},
					tabviewpanel5: {
						caption: commonLogic.appcommonhandle("透视表",null),
					},
					tabviewpanel4: {
						caption: commonLogic.appcommonhandle("甘特图",null),
					},
					tabviewpanel7: {
						caption: commonLogic.appcommonhandle("需求",null),
					},
					tabviewpanel8: {
						caption: commonLogic.appcommonhandle("测试",null),
					},
					tabviewpanel9: {
						caption: commonLogic.appcommonhandle("更多",null),
					},
					tabviewpanel3: {
						caption: commonLogic.appcommonhandle("动态",null),
					},
					tabviewpanel10: {
						caption: commonLogic.appcommonhandle("模块",null),
					},
					tabviewpanel14: {
						caption: commonLogic.appcommonhandle("文档",null),
					},
					tabviewpanel12: {
						caption: commonLogic.appcommonhandle("团队",null),
					}
				},
				uiactions: {
				},
			},
			testtabexpviewtabexppanel_tabexppanel: {
				tabviewpanels: {
					tabviewpanel: {
						caption: commonLogic.appcommonhandle("Bug",null),
					},
					tabviewpanel4: {
						caption: commonLogic.appcommonhandle("看板",null),
					},
					tabviewpanel3: {
						caption: commonLogic.appcommonhandle("版本",null),
					},
					tabviewpanel2: {
						caption: commonLogic.appcommonhandle("测试单",null),
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
			maindashboardviewdashboard_container4_portlet: {
				uiactions: {
				},
			},
			projectmaintoolbar_portlet: {
				projectmaintoolbar: {
					title: commonLogic.appcommonhandle("项目主数据操作栏", null)
				},
				uiactions: {
					project_projectputoff: commonLogic.appcommonhandle("延期",null),
					project_projectsuspend: commonLogic.appcommonhandle("挂起",null),
					project_projectactivate: commonLogic.appcommonhandle("激活",null),
					project_projectclose: commonLogic.appcommonhandle("关闭",null),
					project_projectedit: commonLogic.appcommonhandle("编辑",null),
					project_delete: commonLogic.appcommonhandle("删除",null),
					project_returnedit: commonLogic.appcommonhandle("退出",null),
				},
			},
			maindashboardviewdashboard_container3_portlet: {
				uiactions: {
				},
			},
			dashboradinfoview_portlet: {
				dashboradinfoview: {
					title: commonLogic.appcommonhandle("项目信息", null)
				},
				uiactions: {
				},
			},
			undoneproject_portlet: {
				undoneproject: {
					title: commonLogic.appcommonhandle("未完成项目", null)
				},
				uiactions: {
					project_moreundone: commonLogic.appcommonhandle("MORE",null),
				},
			},
			projectexpview_portlet: {
				projectexpview: {
					title: commonLogic.appcommonhandle("项目统计", null)
				},
				uiactions: {
				},
			},
			unclosedproject_portlet: {
				unclosedproject: {
					title: commonLogic.appcommonhandle("未关闭的项目", null)
				},
				uiactions: {
				},
			},
			projectstatusbar_portlet: {
				projectstatusbar: {
					title: commonLogic.appcommonhandle("项目总览", null)
				},
				uiactions: {
				},
			},
		};
		return data;
}
export default getLocaleResourceBase;