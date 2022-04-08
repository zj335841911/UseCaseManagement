import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
		fields: {
			projectweeklyname: commonLogic.appcommonhandle("项目周报名称",null),
			projectweeklyid: commonLogic.appcommonhandle("项目周报标识",null),
			createdate: commonLogic.appcommonhandle("建立时间",null),
			updateman: commonLogic.appcommonhandle("更新人",null),
			createman: commonLogic.appcommonhandle("建立人",null),
			updatedate: commonLogic.appcommonhandle("更新时间",null),
			pm: commonLogic.appcommonhandle("项目负责人",null),
			totalestimates: commonLogic.appcommonhandle("总工时",null),
			tasks: commonLogic.appcommonhandle("任务",null),
			date: commonLogic.appcommonhandle("日期",null),
			project: commonLogic.appcommonhandle("项目编号",null),
			projectname: commonLogic.appcommonhandle("项目名称",null),
			week: commonLogic.appcommonhandle("周",null),
			year: commonLogic.appcommonhandle("年",null),
		},
		};
		return data;
}

export default getLocaleResourceBase;