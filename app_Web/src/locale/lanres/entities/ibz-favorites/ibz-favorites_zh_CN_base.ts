import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("收藏", null),
		fields: {
			type: commonLogic.appcommonhandle("类型",null),
			createman: commonLogic.appcommonhandle("建立人",null),
			ibzfavoritesid: commonLogic.appcommonhandle("收藏标识",null),
			createdate: commonLogic.appcommonhandle("建立时间",null),
			updateman: commonLogic.appcommonhandle("更新人",null),
			objectid: commonLogic.appcommonhandle("数据对象标识",null),
			account: commonLogic.appcommonhandle("收藏用户",null),
			ibzfavoritesname: commonLogic.appcommonhandle("收藏名称",null),
			updatedate: commonLogic.appcommonhandle("更新时间",null),
		},
			views: {
				tabexpview: {
					caption: commonLogic.appcommonhandle("我的收藏",null),
					title: commonLogic.appcommonhandle("我的收藏",null),
				},
			},
			tabexpviewtabexppanel_tabexppanel: {
				tabviewpanels: {
					tabviewpanel: {
						caption: commonLogic.appcommonhandle("需求",null),
					},
					tabviewpanel2: {
						caption: commonLogic.appcommonhandle("任务",null),
					},
					tabviewpanel4: {
						caption: commonLogic.appcommonhandle("用例",null),
					},
					tabviewpanel3: {
						caption: commonLogic.appcommonhandle("Bug",null),
					}
				},
				uiactions: {
				},
			},
		};
		return data;
}
export default getLocaleResourceBase;