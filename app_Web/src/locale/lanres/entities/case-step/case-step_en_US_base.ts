import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
		fields: {
			casestepid: commonLogic.appcommonhandle("用例步骤编号",null),
			reals: commonLogic.appcommonhandle("实际情况",null),
			steps: commonLogic.appcommonhandle("测试结果",null),
			type: commonLogic.appcommonhandle("用例步骤类型",null),
			id: commonLogic.appcommonhandle("编号",null),
			desc: commonLogic.appcommonhandle("步骤",null),
			expect: commonLogic.appcommonhandle("预期",null),
			files: commonLogic.appcommonhandle("附件",null),
			runid: commonLogic.appcommonhandle("执行编号",null),
			version: commonLogic.appcommonhandle("用例版本",null),
			ibizcase: commonLogic.appcommonhandle("用例",null),
			parent: commonLogic.appcommonhandle("分组用例步骤的组编号",null),
		},
			views: {
				gridview9: {
					caption: commonLogic.appcommonhandle("用例步骤",null),
					title: commonLogic.appcommonhandle("用例步骤表格视图",null),
				},
				maingridview9: {
					caption: commonLogic.appcommonhandle("用例步骤",null),
					title: commonLogic.appcommonhandle("用例步骤",null),
				},
			},
			main_grid: {
				columns: {
					id: commonLogic.appcommonhandle("编号",null),
					desc: commonLogic.appcommonhandle("步骤",null),
					type: commonLogic.appcommonhandle("类型",null),
					expect: commonLogic.appcommonhandle("预期",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			mainr_grid: {
				columns: {
					id: commonLogic.appcommonhandle("编号",null),
					desc: commonLogic.appcommonhandle("步骤",null),
					type: commonLogic.appcommonhandle("类型",null),
					expect: commonLogic.appcommonhandle("预期",null),
					steps: commonLogic.appcommonhandle("测试结果",null),
					reals: commonLogic.appcommonhandle("实际情况",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			maingridview9toolbar_toolbar: {
				deuiaction2: {
					caption: commonLogic.appcommonhandle("刷新",null),
					tip: commonLogic.appcommonhandle("刷新",null),
				},
				deuiaction1: {
					caption: commonLogic.appcommonhandle("Export",null),
					tip: commonLogic.appcommonhandle("Export {0} Data To Excel",null),
				},
			},
		};
		return data;
}

export default getLocaleResourceBase;