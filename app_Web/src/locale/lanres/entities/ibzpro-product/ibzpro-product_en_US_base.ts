import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
		fields: {
			ibizid: commonLogic.appcommonhandle("IBIZ标识",null),
			code: commonLogic.appcommonhandle("产品代号",null),
			name: commonLogic.appcommonhandle("产品名称",null),
			id: commonLogic.appcommonhandle("编号",null),
		},
			views: {
				editview: {
					caption: commonLogic.appcommonhandle("平台产品",null),
					title: commonLogic.appcommonhandle("平台产品编辑视图",null),
				},
				gridview: {
					caption: commonLogic.appcommonhandle("平台产品",null),
					title: commonLogic.appcommonhandle("平台产品表格视图",null),
				},
			},
			main_form: {
				details: {
					group1: commonLogic.appcommonhandle("平台产品基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					group2: commonLogic.appcommonhandle("操作信息",null), 
					formpage2: commonLogic.appcommonhandle("其它",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("产品名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("编号",null), 
					name: commonLogic.appcommonhandle("产品名称",null), 
					ibiz_id: commonLogic.appcommonhandle("IBIZ标识",null), 
				},
				uiactions: {
				},
			},
			main_grid: {
				columns: {
					id: commonLogic.appcommonhandle("编号",null),
					name: commonLogic.appcommonhandle("产品名称",null),
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
			editviewtoolbar_toolbar: {
				tbitem3: {
					caption: commonLogic.appcommonhandle("Save",null),
					tip: commonLogic.appcommonhandle("Save",null),
				},
				tbitem4: {
					caption: commonLogic.appcommonhandle("Save And New",null),
					tip: commonLogic.appcommonhandle("Save And New",null),
				},
				tbitem5: {
					caption: commonLogic.appcommonhandle("Save And Close",null),
					tip: commonLogic.appcommonhandle("Save And Close Window",null),
				},
				tbitem7: {
					caption: commonLogic.appcommonhandle("Remove And Close",null),
					tip: commonLogic.appcommonhandle("Remove And Close Window",null),
				},
			},
			gridviewtoolbar_toolbar: {
				tbitem3: {
					caption: commonLogic.appcommonhandle("New",null),
					tip: commonLogic.appcommonhandle("New",null),
				},
				tbitem4: {
					caption: commonLogic.appcommonhandle("Edit",null),
					tip: commonLogic.appcommonhandle("Edit {0}",null),
				},
				tbitem6: {
					caption: commonLogic.appcommonhandle("Copy",null),
					tip: commonLogic.appcommonhandle("Copy {0}",null),
				},
				tbitem7: {
					caption: commonLogic.appcommonhandle("-",null),
					tip: commonLogic.appcommonhandle("",null),
				},
				tbitem8: {
					caption: commonLogic.appcommonhandle("Remove",null),
					tip: commonLogic.appcommonhandle("Remove {0}",null),
				},
				tbitem9: {
					caption: commonLogic.appcommonhandle("-",null),
					tip: commonLogic.appcommonhandle("",null),
				},
				tbitem13: {
					caption: commonLogic.appcommonhandle("Export",null),
					tip: commonLogic.appcommonhandle("Export {0} Data To Excel",null),
				},
				tbitem10: {
					caption: commonLogic.appcommonhandle("-",null),
					tip: commonLogic.appcommonhandle("",null),
				},
				tbitem16: {
					caption: commonLogic.appcommonhandle("其它",null),
					tip: commonLogic.appcommonhandle("其它",null),
				},
				tbitem21: {
					caption: commonLogic.appcommonhandle("Export Data Model",null),
					tip: commonLogic.appcommonhandle("导出数据模型",null),
				},
				tbitem23: {
					caption: commonLogic.appcommonhandle("数据导入",null),
					tip: commonLogic.appcommonhandle("数据导入",null),
				},
				tbitem17: {
					caption: commonLogic.appcommonhandle("-",null),
					tip: commonLogic.appcommonhandle("",null),
				},
				tbitem19: {
					caption: commonLogic.appcommonhandle("Filter",null),
					tip: commonLogic.appcommonhandle("Filter",null),
				},
				tbitem18: {
					caption: commonLogic.appcommonhandle("Help",null),
					tip: commonLogic.appcommonhandle("Help",null),
				},
			},
		};
		return data;
}

export default getLocaleResourceBase;