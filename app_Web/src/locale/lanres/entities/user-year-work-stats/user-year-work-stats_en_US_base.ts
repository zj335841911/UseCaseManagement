import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
		fields: {
			password: commonLogic.appcommonhandle("密码",null),
			yearproductcnt: commonLogic.appcommonhandle("累计参与产品数",null),
			yearbugcnt: commonLogic.appcommonhandle("累计创建Bug数",null),
			weixin: commonLogic.appcommonhandle("微信",null),
			yearcasecnt: commonLogic.appcommonhandle("累计创建用例数",null),
			account: commonLogic.appcommonhandle("账号",null),
			qq: commonLogic.appcommonhandle("QQ",null),
			ranzhi: commonLogic.appcommonhandle("ranzhi",null),
			nickname: commonLogic.appcommonhandle("nickname",null),
			avatar: commonLogic.appcommonhandle("avatar",null),
			monthfinishtask: commonLogic.appcommonhandle("月完成任务数",null),
			fails: commonLogic.appcommonhandle("fails",null),
			join: commonLogic.appcommonhandle("入职日期",null),
			yearstorycnt: commonLogic.appcommonhandle("累计创建需求数",null),
			yearplancnt: commonLogic.appcommonhandle("累计创建计划数",null),
			dingding: commonLogic.appcommonhandle("钉钉",null),
			ip: commonLogic.appcommonhandle("ip",null),
			yearactioncnt: commonLogic.appcommonhandle("累计动态数",null),
			mobile: commonLogic.appcommonhandle("手机",null),
			whatsapp: commonLogic.appcommonhandle("whatsapp",null),
			id: commonLogic.appcommonhandle("用户编号",null),
			email: commonLogic.appcommonhandle("邮箱",null),
			yearestimatecnt: commonLogic.appcommonhandle("累计工时数",null),
			clientlang: commonLogic.appcommonhandle("clientLang",null),
			montestimate: commonLogic.appcommonhandle("月累计工时",null),
			realname: commonLogic.appcommonhandle("真实用户名",null),
			commiter: commonLogic.appcommonhandle("源代码账户",null),
			slack: commonLogic.appcommonhandle("slack",null),
			deleted: commonLogic.appcommonhandle("逻辑删除标志",null),
			last: commonLogic.appcommonhandle("最后登录",null),
			curyear: commonLogic.appcommonhandle("年度",null),
			judgerole: commonLogic.appcommonhandle("判断角色",null),
			skype: commonLogic.appcommonhandle("skype",null),
			birthday: commonLogic.appcommonhandle("birthday",null),
			phone: commonLogic.appcommonhandle("电话",null),
			yearvisits: commonLogic.appcommonhandle("累计登录次数",null),
			score: commonLogic.appcommonhandle("score",null),
			role: commonLogic.appcommonhandle("角色",null),
			clientstatus: commonLogic.appcommonhandle("clientStatus",null),
			dept: commonLogic.appcommonhandle("部门编号",null),
			title: commonLogic.appcommonhandle("标题",null),
			curmonth: commonLogic.appcommonhandle("当前月",null),
			montresolvedbug: commonLogic.appcommonhandle("月解决Bug数",null),
			address: commonLogic.appcommonhandle("通讯地址",null),
			scorelevel: commonLogic.appcommonhandle("scoreLevel",null),
			visits: commonLogic.appcommonhandle("累计登录次数",null),
			yearlogcnt: commonLogic.appcommonhandle("累计日志数",null),
			locked: commonLogic.appcommonhandle("locked",null),
			gender: commonLogic.appcommonhandle("性别",null),
			zipcode: commonLogic.appcommonhandle("zipcode",null),
		},
			views: {
				dashboardview: {
					caption: commonLogic.appcommonhandle("用户年度工作内容统计",null),
					title: commonLogic.appcommonhandle("用户年度工作内容统计数据看板视图",null),
				},
				infoeditview9: {
					caption: commonLogic.appcommonhandle("基础信息",null),
					title: commonLogic.appcommonhandle("用户年度工作内容统计编辑视图（基础信息）",null),
				},
				podashboardview: {
					caption: commonLogic.appcommonhandle("用户年度工作内容统计",null),
					title: commonLogic.appcommonhandle("用户年度工作内容统计数据看板视图",null),
				},
				qadashboardview: {
					caption: commonLogic.appcommonhandle("用户年度工作内容统计",null),
					title: commonLogic.appcommonhandle("用户年度工作内容统计数据看板视图",null),
				},
				editview: {
					caption: commonLogic.appcommonhandle("用户年度工作内容统计",null),
					title: commonLogic.appcommonhandle("用户年度工作内容统计编辑视图",null),
				},
				titleeditview9: {
					caption: commonLogic.appcommonhandle("标题",null),
					title: commonLogic.appcommonhandle("用户年度工作内容统计编辑视图（标题）",null),
				},
			},
			basismaininfo_form: {
				details: {
					group1: commonLogic.appcommonhandle("用户年度工作内容统计基本信息",null), 
					rawitem1: commonLogic.appcommonhandle("",null), 
					rawitem2: commonLogic.appcommonhandle("",null), 
					rawitem3: commonLogic.appcommonhandle("",null), 
					grouppanel5: commonLogic.appcommonhandle("基本数据信息",null), 
					druipart6: commonLogic.appcommonhandle("",null), 
					grouppanel10: commonLogic.appcommonhandle("产品创建需求数及占比",null), 
					druipart7: commonLogic.appcommonhandle("",null), 
					grouppanel11: commonLogic.appcommonhandle("产品创建Bug数及占比",null), 
					druipart4: commonLogic.appcommonhandle("",null), 
					grouppanel6: commonLogic.appcommonhandle("参与项目概览",null), 
					grouppanel8: commonLogic.appcommonhandle("分组面板",null), 
					druipart5: commonLogic.appcommonhandle("",null), 
					grouppanel7: commonLogic.appcommonhandle("研发",null), 
					druipart8: commonLogic.appcommonhandle("",null), 
					grouppanel12: commonLogic.appcommonhandle("产品经理",null), 
					druipart9: commonLogic.appcommonhandle("",null), 
					grouppanel13: commonLogic.appcommonhandle("测试",null), 
					grouppanel9: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel4: commonLogic.appcommonhandle("分组面板",null), 
					druipart1: commonLogic.appcommonhandle("",null), 
					grouppanel1: commonLogic.appcommonhandle("研发",null), 
					druipart2: commonLogic.appcommonhandle("",null), 
					grouppanel2: commonLogic.appcommonhandle("测试",null), 
					druipart3: commonLogic.appcommonhandle("",null), 
					grouppanel3: commonLogic.appcommonhandle("产品经理",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用户编号",null), 
					srfmajortext: commonLogic.appcommonhandle("标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					title: commonLogic.appcommonhandle("",null), 
					curyear: commonLogic.appcommonhandle("年度",null), 
					account: commonLogic.appcommonhandle("账号",null), 
					realname: commonLogic.appcommonhandle("真实用户名",null), 
					judgerole: commonLogic.appcommonhandle("判断角色",null), 
					visits: commonLogic.appcommonhandle("累计登录次数",null), 
					yearactioncnt: commonLogic.appcommonhandle("累计动态数",null), 
					yearbugcnt: commonLogic.appcommonhandle("累计创建Bug数",null), 
					yearlogcnt: commonLogic.appcommonhandle("累计日志数",null), 
					yearcasecnt: commonLogic.appcommonhandle("累计创建用例数",null), 
					yearvisits: commonLogic.appcommonhandle("累计登录次数",null), 
					yearstorycnt: commonLogic.appcommonhandle("累计创建需求数",null), 
					yearproductcnt: commonLogic.appcommonhandle("累计参与产品数",null), 
					yearplancnt: commonLogic.appcommonhandle("累计创建计划数",null), 
					yearestimatecnt: commonLogic.appcommonhandle("累计工时数",null), 
					id: commonLogic.appcommonhandle("用户编号",null), 
				},
				uiactions: {
				},
			},
			maininfo_form: {
				details: {
					grouppanel1: commonLogic.appcommonhandle("研发",null), 
					grouppanel2: commonLogic.appcommonhandle("测试",null), 
					grouppanel3: commonLogic.appcommonhandle("产品经理",null), 
					group1: commonLogic.appcommonhandle("基本数据信息",null), 
					grouppanel9: commonLogic.appcommonhandle("基本信息",null), 
					rawitem1: commonLogic.appcommonhandle("",null), 
					rawitem2: commonLogic.appcommonhandle("",null), 
					rawitem3: commonLogic.appcommonhandle("",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用户编号",null), 
					srfmajortext: commonLogic.appcommonhandle("标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					role: commonLogic.appcommonhandle("角色",null), 
					yearvisits: commonLogic.appcommonhandle("累计登录次数",null), 
					yearactioncnt: commonLogic.appcommonhandle("累计动态数",null), 
					yearlogcnt: commonLogic.appcommonhandle("累计日志数",null), 
					yearestimatecnt: commonLogic.appcommonhandle("累计工时数",null), 
					yearcasecnt: commonLogic.appcommonhandle("累计创建用例数",null), 
					yearbugcnt: commonLogic.appcommonhandle("累计创建Bug数",null), 
					yearproductcnt: commonLogic.appcommonhandle("累计参与产品数",null), 
					yearplancnt: commonLogic.appcommonhandle("累计创建计划数",null), 
					yearstorycnt: commonLogic.appcommonhandle("累计创建需求数",null), 
					judgerole: commonLogic.appcommonhandle("判断角色",null), 
					id: commonLogic.appcommonhandle("用户编号",null), 
				},
				uiactions: {
				},
			},
			titleform_form: {
				details: {
					group1: commonLogic.appcommonhandle("用户年度工作内容统计基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("用户编号",null), 
					srfmajortext: commonLogic.appcommonhandle("标题",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					title: commonLogic.appcommonhandle("",null), 
					curyear: commonLogic.appcommonhandle("年度",null), 
					id: commonLogic.appcommonhandle("用户编号",null), 
				},
				uiactions: {
				},
			},
			monthfinishtaskandbug_chart: {
				nodata:commonLogic.appcommonhandle("",null),
			},
			monthopenedbugandcase_chart: {
				nodata:commonLogic.appcommonhandle("",null),
			},
			monthopenedstory_chart: {
				nodata:commonLogic.appcommonhandle("",null),
			},
			dashboardviewdashboard_container3_portlet: {
				uiactions: {
				},
			},
			dashboardviewdashboard_container4_portlet: {
				dashboardviewdashboard_container4: {
					title: commonLogic.appcommonhandle("完成任务数和解决Bug数", null)
			  	},
				uiactions: {
				},
			},
			dashboardviewdashboard_container5_portlet: {
				dashboardviewdashboard_container5: {
					title: commonLogic.appcommonhandle("月完成任务数及累计工时和解决Bug数", null)
			  	},
				uiactions: {
				},
			},
			finishtaskandbug_portlet: {
				finishtaskandbug: {
					title: commonLogic.appcommonhandle("月完成任务数及累计工时和解决Bug数", null)
			  	},
				uiactions: {
				},
			},
			qadashboardviewdashboard_container3_portlet: {
				uiactions: {
				},
			},
			qadashboardviewdashboard_container4_portlet: {
				qadashboardviewdashboard_container4: {
					title: commonLogic.appcommonhandle("累计创建Bug数和创建用例数", null)
			  	},
				uiactions: {
				},
			},
			qadashboardviewdashboard_container9_portlet: {
				uiactions: {
				},
			},
			qadashboardviewdashboard_container10_portlet: {
				uiactions: {
				},
			},
			qadashboardviewdashboard_container5_portlet: {
				qadashboardviewdashboard_container5: {
					title: commonLogic.appcommonhandle("月创建Bug数和创建用例数", null)
			  	},
				uiactions: {
				},
			},
			monthopenedbugandcase_portlet: {
				monthopenedbugandcase: {
					title: commonLogic.appcommonhandle("月创建Bug数和创建用例数", null)
			  	},
				uiactions: {
				},
			},
			podashboardviewdashboard_container3_portlet: {
				uiactions: {
				},
			},
			podashboardviewdashboard_container4_portlet: {
				podashboardviewdashboard_container4: {
					title: commonLogic.appcommonhandle("所创建需求数和对应的优先级及状态", null)
			  	},
				uiactions: {
				},
			},
			podashboardviewdashboard_container9_portlet: {
				uiactions: {
				},
			},
			podashboardviewdashboard_container10_portlet: {
				uiactions: {
				},
			},
			podashboardviewdashboard_container5_portlet: {
				podashboardviewdashboard_container5: {
					title: commonLogic.appcommonhandle("月创建需求数", null)
			  	},
				uiactions: {
				},
			},
			monthopenedstory_portlet: {
				monthopenedstory: {
					title: commonLogic.appcommonhandle("月累计需求数", null)
			  	},
				uiactions: {
				},
			},
		};
		return data;
}

export default getLocaleResourceBase;