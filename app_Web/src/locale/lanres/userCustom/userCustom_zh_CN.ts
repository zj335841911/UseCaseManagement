// 用户自定义语言资源 中文
import commonLogic from '@/locale/logic/common/common-logic';
function userCustom(){
    const data:any = {
        noCloseProduct: commonLogic.appcommonhandle("未关闭的产品", null),
        noCloseProject: commonLogic.appcommonhandle("未关闭的项目", null),
        allProduct: commonLogic.appcommonhandle("所有产品", null),
        allProject: commonLogic.appcommonhandle("所有项目", null)
    }
    return data;
}

export default userCustom;
