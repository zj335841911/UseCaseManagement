import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
		fields: {
			stories: commonLogic.appcommonhandle("完成的需求",null),
			marker: commonLogic.appcommonhandle("里程碑",null),
			id: commonLogic.appcommonhandle("ID",null),
			sqlid: commonLogic.appcommonhandle("运行数据库",null),
			leftbugs: commonLogic.appcommonhandle("遗留的Bug",null),
			bugs: commonLogic.appcommonhandle("解决的Bug",null),
			deleted: commonLogic.appcommonhandle("已删除",null),
			noticeusers: commonLogic.appcommonhandle("消息通知用户",null),
			rebuild: commonLogic.appcommonhandle("重新构建",null),
			name: commonLogic.appcommonhandle("发布名称",null),
			date: commonLogic.appcommonhandle("发布日期",null),
			status: commonLogic.appcommonhandle("状态",null),
			releasetype: commonLogic.appcommonhandle("运行模式",null),
			substatus: commonLogic.appcommonhandle("子状态",null),
			backgroundid: commonLogic.appcommonhandle("后台体系",null),
			desc: commonLogic.appcommonhandle("描述",null),
			files: commonLogic.appcommonhandle("附件",null),
			frontapplication: commonLogic.appcommonhandle("系统应用",null),
			productname: commonLogic.appcommonhandle("产品名称",null),
			builder: commonLogic.appcommonhandle("构建者",null),
			buildname: commonLogic.appcommonhandle("版本",null),
			builddate: commonLogic.appcommonhandle("打包日期",null),
			product: commonLogic.appcommonhandle("产品",null),
			build: commonLogic.appcommonhandle("版本",null),
			branch: commonLogic.appcommonhandle("平台/分支",null),
		},
			views: {
				quickcreateview: {
					caption: commonLogic.appcommonhandle("发布",null),
					title: commonLogic.appcommonhandle("发布编辑视图",null),
				},
				optionview: {
					caption: commonLogic.appcommonhandle("发布",null),
					title: commonLogic.appcommonhandle("发布选项操作视图",null),
				},
				maininfoview: {
					caption: commonLogic.appcommonhandle("发布",null),
					title: commonLogic.appcommonhandle("发布编辑视图",null),
				},
				gridview: {
					caption: commonLogic.appcommonhandle("发布",null),
					title: commonLogic.appcommonhandle("发布表格视图",null),
				},
				editview: {
					caption: commonLogic.appcommonhandle("发布",null),
					title: commonLogic.appcommonhandle("发布编辑视图",null),
				},
				maintabexpview: {
					caption: commonLogic.appcommonhandle("产品发布",null),
					title: commonLogic.appcommonhandle("发布分页导航视图",null),
				},
			},
			main_form: {
				details: {
					group1: commonLogic.appcommonhandle("基本信息",null), 
					druipart2: commonLogic.appcommonhandle("",null), 
					grouppanel1: commonLogic.appcommonhandle("附件",null), 
					druipart1: commonLogic.appcommonhandle("",null), 
					grouppanel2: commonLogic.appcommonhandle("历史记录",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("ID",null), 
					srfmajortext: commonLogic.appcommonhandle("发布名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					productname: commonLogic.appcommonhandle("产品名称",null), 
					name: commonLogic.appcommonhandle("发布名称",null), 
					buildname: commonLogic.appcommonhandle("版本",null), 
					status: commonLogic.appcommonhandle("状态",null), 
					date: commonLogic.appcommonhandle("发布日期",null), 
					desc: commonLogic.appcommonhandle("描述",null), 
					id: commonLogic.appcommonhandle("ID",null), 
					product: commonLogic.appcommonhandle("产品",null), 
					build: commonLogic.appcommonhandle("版本",null), 
				},
				uiactions: {
				},
			},
			editform_form: {
				details: {
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
					group1: commonLogic.appcommonhandle("release基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("ID",null), 
					srfmajortext: commonLogic.appcommonhandle("发布名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					product: commonLogic.appcommonhandle("产品",null), 
					productname: commonLogic.appcommonhandle("产品名称",null), 
					name: commonLogic.appcommonhandle("发布名称",null), 
					buildname: commonLogic.appcommonhandle("版本",null), 
					date: commonLogic.appcommonhandle("发布日期",null), 
					marker: commonLogic.appcommonhandle("里程碑",null), 
					desc: commonLogic.appcommonhandle("描述",null), 
					files: commonLogic.appcommonhandle("附件",null), 
					id: commonLogic.appcommonhandle("ID",null), 
					build: commonLogic.appcommonhandle("版本",null), 
				},
				uiactions: {
				},
			},
			quickcreate_form: {
				details: {
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
					group1: commonLogic.appcommonhandle("release基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("ID",null), 
					srfmajortext: commonLogic.appcommonhandle("发布名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					product: commonLogic.appcommonhandle("产品",null), 
					productname: commonLogic.appcommonhandle("产品名称",null), 
					name: commonLogic.appcommonhandle("发布名称",null), 
					buildname: commonLogic.appcommonhandle("版本",null), 
					date: commonLogic.appcommonhandle("发布日期",null), 
					marker: commonLogic.appcommonhandle("里程碑",null), 
					desc: commonLogic.appcommonhandle("描述",null), 
					files: commonLogic.appcommonhandle("附件",null), 
					id: commonLogic.appcommonhandle("ID",null), 
					build: commonLogic.appcommonhandle("版本",null), 
				},
				uiactions: {
				},
			},
			onerelease_form: {
				details: {
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("ID",null), 
					srfmajortext: commonLogic.appcommonhandle("发布名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					releasetype: commonLogic.appcommonhandle("运行模式",null), 
					backgroundid: commonLogic.appcommonhandle("后台体系",null), 
					frontapplication: commonLogic.appcommonhandle("系统应用",null), 
					sqlid: commonLogic.appcommonhandle("运行数据库",null), 
					rebuild: commonLogic.appcommonhandle("重新构建",null), 
					product: commonLogic.appcommonhandle("产品",null), 
					id: commonLogic.appcommonhandle("ID",null), 
				},
				uiactions: {
				},
			},
			main_grid: {
				columns: {
					id: commonLogic.appcommonhandle("ID",null),
					name: commonLogic.appcommonhandle("发布名称",null),
					buildname: commonLogic.appcommonhandle("版本",null),
					status: commonLogic.appcommonhandle("状态",null),
					date: commonLogic.appcommonhandle("发布日期",null),
					uagridcolumn1: commonLogic.appcommonhandle("操作",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
			exportColumns: {
					id: commonLogic.appcommonhandle("ID",null),
					name: commonLogic.appcommonhandle("发布名称",null),
					buildname: commonLogic.appcommonhandle("版本",null),
					status: commonLogic.appcommonhandle("状态",null),
					date: commonLogic.appcommonhandle("发布日期",null),
					product: commonLogic.appcommonhandle("产品",null),
			},
				uiactions: {
				release_linkstory: commonLogic.appcommonhandle("关联需求",null),
				refresh: commonLogic.appcommonhandle("刷新",null),
				release_linkbug: commonLogic.appcommonhandle("关联bug",null),
				release_terminal: commonLogic.appcommonhandle("停止维护",null),
				release_active: commonLogic.appcommonhandle("激活",null),
				release_quickedit: commonLogic.appcommonhandle("编辑",null),
				copy: commonLogic.appcommonhandle("Copy",null),
				release_remove: commonLogic.appcommonhandle("删除",null),
				},
			},
			editviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("Save And Close",null),
					tip: commonLogic.appcommonhandle("Save And Close Window",null),
				},
			},
			quickcreateviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("Save And Close",null),
					tip: commonLogic.appcommonhandle("Save And Close Window",null),
				},
			},
			gridviewtoolbar_toolbar: {
				deuiaction3_quickcreate: {
					caption: commonLogic.appcommonhandle("创建发布",null),
					tip: commonLogic.appcommonhandle("创建发布",null),
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
			maintabexpviewtabexppanel_tabexppanel: {
				tabviewpanels: {
					tabviewpanel: {
						caption: commonLogic.appcommonhandle("完成的需求",null),
					},
					tabviewpanel2: {
						caption: commonLogic.appcommonhandle("解决的Bug",null),
					},
					tabviewpanel3: {
						caption: commonLogic.appcommonhandle("遗留的Bug",null),
					},
					tabviewpanel4: {
						caption: commonLogic.appcommonhandle("发布详情",null),
					}
				},
				uiactions: {
				},
			},
		};
		return data;
}

export default getLocaleResourceBase;