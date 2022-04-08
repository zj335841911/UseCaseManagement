import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("测试运行", null),
		fields: {
			lastrunresult: commonLogic.appcommonhandle("结果",null),
			lastrundate: commonLogic.appcommonhandle("最后执行时间",null),
			assignedto: commonLogic.appcommonhandle("指派给",null),
			lastrunner: commonLogic.appcommonhandle("最后执行人",null),
			status: commonLogic.appcommonhandle("当前状态",null),
			id: commonLogic.appcommonhandle("编号",null),
			version: commonLogic.appcommonhandle("用例版本",null),
			ibizcase: commonLogic.appcommonhandle("测试用例",null),
			task: commonLogic.appcommonhandle("测试单",null),
		},
			views: {
				meditview9: {
					caption: commonLogic.appcommonhandle("测试运行",null),
					title: commonLogic.appcommonhandle("测试运行多表单编辑视图",null),
				},
				editview9: {
					caption: commonLogic.appcommonhandle("测试运行",null),
					title: commonLogic.appcommonhandle("测试运行编辑视图",null),
				},
			},
			main_form: {
				details: {
					druipart1: commonLogic.appcommonhandle("",null), 
					group1: commonLogic.appcommonhandle("testrun基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("",null), 
					lastrundate: commonLogic.appcommonhandle("",null), 
					lastrunner: commonLogic.appcommonhandle("",null), 
					lastrunresult: commonLogic.appcommonhandle("",null), 
					status: commonLogic.appcommonhandle("",null), 
					case: commonLogic.appcommonhandle("测试用例",null), 
				},
				uiactions: {
				},
			},
		};
		return data;
}
export default getLocaleResourceBase;