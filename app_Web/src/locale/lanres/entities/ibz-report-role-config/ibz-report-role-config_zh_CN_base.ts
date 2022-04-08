import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("汇报角色配置", null),
		fields: {
			ibzreportroleconfigname: commonLogic.appcommonhandle("汇报角色配置名称",null),
			ibzreportroleconfigid: commonLogic.appcommonhandle("汇报角色配置标识",null),
			report_role: commonLogic.appcommonhandle("角色",null),
			type: commonLogic.appcommonhandle("类型",null),
			createdate: commonLogic.appcommonhandle("建立时间",null),
			updatedate: commonLogic.appcommonhandle("更新时间",null),
			createman: commonLogic.appcommonhandle("建立人",null),
			updateman: commonLogic.appcommonhandle("更新人",null),
		},
			views: {
				gridview: {
					caption: commonLogic.appcommonhandle("汇报角色配置",null),
					title: commonLogic.appcommonhandle("汇报角色配置表格视图",null),
				},
				editview: {
					caption: commonLogic.appcommonhandle("汇报角色配置",null),
					title: commonLogic.appcommonhandle("汇报角色配置编辑视图",null),
				},
			},
			main_form: {
				details: {
					group1: commonLogic.appcommonhandle("汇报角色配置基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("更新时间",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("汇报角色配置标识",null), 
					srfmajortext: commonLogic.appcommonhandle("汇报角色配置名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					ibz_report_role_configname: commonLogic.appcommonhandle("名称",null), 
					type: commonLogic.appcommonhandle("类型",null), 
					report_role: commonLogic.appcommonhandle("角色",null), 
					ibz_report_role_configid: commonLogic.appcommonhandle("汇报角色配置标识",null), 
				},
				uiactions: {
				},
			},
			main_grid: {
				columns: {
					ibz_report_role_configname: commonLogic.appcommonhandle("名称",null),
					type: commonLogic.appcommonhandle("类型",null),
					report_role: commonLogic.appcommonhandle("角色",null),
					updateman: commonLogic.appcommonhandle("更新人",null),
					updatedate: commonLogic.appcommonhandle("更新时间",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			default_searchform: {
				details: {
					formpage1: commonLogic.appcommonhandle("常规条件",null), 
				},
				uiactions: {
				},
			},
			gridviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("新建",null),
					tip: commonLogic.appcommonhandle("新建",null),
				},
				deuiaction4: {
					caption: commonLogic.appcommonhandle("删除",null),
					tip: commonLogic.appcommonhandle("删除",null),
				},
				seperator1: {
					caption: commonLogic.appcommonhandle("",null),
					tip: commonLogic.appcommonhandle("",null),
				},
				deuiaction2: {
					caption: commonLogic.appcommonhandle("刷新",null),
					tip: commonLogic.appcommonhandle("刷新",null),
				},
				seperator3: {
					caption: commonLogic.appcommonhandle("",null),
					tip: commonLogic.appcommonhandle("",null),
				},
				deuiaction5: {
					caption: commonLogic.appcommonhandle("导出",null),
					tip: commonLogic.appcommonhandle("导出",null),
				},
				seperator4: {
					caption: commonLogic.appcommonhandle("",null),
					tip: commonLogic.appcommonhandle("",null),
				},
				deuiaction7: {
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
		};
		return data;
}
export default getLocaleResourceBase;