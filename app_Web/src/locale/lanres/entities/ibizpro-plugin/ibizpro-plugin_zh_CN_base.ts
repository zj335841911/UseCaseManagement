import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("系统插件", null),
		fields: {
			version: commonLogic.appcommonhandle("版本",null),
			type: commonLogic.appcommonhandle("类型",null),
			createman: commonLogic.appcommonhandle("建立人",null),
			downloadcount: commonLogic.appcommonhandle("总下载量",null),
			createdate: commonLogic.appcommonhandle("建立时间",null),
			downloadurl: commonLogic.appcommonhandle("最新版本下载地址",null),
			updatedate: commonLogic.appcommonhandle("更新时间",null),
			tag: commonLogic.appcommonhandle("标签",null),
			score: commonLogic.appcommonhandle("总评分",null),
			ibizpropluginname: commonLogic.appcommonhandle("系统插件名称",null),
			ibizpropluginid: commonLogic.appcommonhandle("系统插件标识",null),
			keyword: commonLogic.appcommonhandle("关键字",null),
			updateman: commonLogic.appcommonhandle("更新人",null),
			commentcount: commonLogic.appcommonhandle("总评论数",null),
		},
			views: {
				editview: {
					caption: commonLogic.appcommonhandle("系统插件",null),
					title: commonLogic.appcommonhandle("系统插件编辑视图",null),
				},
				gridview: {
					caption: commonLogic.appcommonhandle("系统插件",null),
					title: commonLogic.appcommonhandle("系统插件表格视图",null),
				},
			},
			main_form: {
				details: {
					group1: commonLogic.appcommonhandle("系统插件基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srfupdatedate: commonLogic.appcommonhandle("更新时间",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("系统插件标识",null), 
					srfmajortext: commonLogic.appcommonhandle("系统插件名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					ibizpro_pluginname: commonLogic.appcommonhandle("插件名称",null), 
					version: commonLogic.appcommonhandle("版本",null), 
					type: commonLogic.appcommonhandle("类型",null), 
					downloadurl: commonLogic.appcommonhandle("最新版本下载地址",null), 
					tag: commonLogic.appcommonhandle("标签",null), 
					keyword: commonLogic.appcommonhandle("关键字",null), 
					ibizpro_pluginid: commonLogic.appcommonhandle("系统插件标识",null), 
				},
				uiactions: {
				},
			},
			main_grid: {
				columns: {
					ibizpro_pluginname: commonLogic.appcommonhandle("插件名称",null),
					type: commonLogic.appcommonhandle("类型",null),
					version: commonLogic.appcommonhandle("版本",null),
					downloadurl: commonLogic.appcommonhandle("最新版本下载地址",null),
					downloadcount: commonLogic.appcommonhandle("总下载量",null),
					commentcount: commonLogic.appcommonhandle("总评论数",null),
					score: commonLogic.appcommonhandle("总评分",null),
					updatedate: commonLogic.appcommonhandle("更新时间",null),
					updateman: commonLogic.appcommonhandle("更新人",null),
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