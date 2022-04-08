import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
		fields: {
			totalestimates: commonLogic.appcommonhandle("总工时",null),
			tasks: commonLogic.appcommonhandle("任务",null),
			po: commonLogic.appcommonhandle("产品负责人",null),
			date: commonLogic.appcommonhandle("日期",null),
			updatedate: commonLogic.appcommonhandle("更新时间",null),
			updateman: commonLogic.appcommonhandle("更新人",null),
			createman: commonLogic.appcommonhandle("建立人",null),
			createdate: commonLogic.appcommonhandle("建立时间",null),
			ibizproproductweeklyname: commonLogic.appcommonhandle("产品周报名称",null),
			ibizpro_productweeklyid: commonLogic.appcommonhandle("产品周报标识",null),
			product: commonLogic.appcommonhandle("编号",null),
			productname: commonLogic.appcommonhandle("产品名称",null),
		},
		};
		return data;
}

export default getLocaleResourceBase;