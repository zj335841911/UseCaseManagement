import CommonLogicBase from './common-logic-base';
import store from '@/store';

const CommonLogicOwnData = {
    appcommonhandle: function(param1: any, param2: any) {
        const appData = store.getters.getAppData();
        if(appData.settings && appData.settings.srfmstatus) {
            let srfmstatus: string = appData.settings.srfmstatus;
            if(!srfmstatus) {
                return param1;
            }
            switch(srfmstatus) {
                case "product_iteration": 
                    if(param1.search("项目") !== -1) param1 = param1.replace("项目", "迭代"); break;
                case "product_sprint":
                    if(param1.search("项目") !== -1) param1 = param1.replace("项目", "冲刺"); break;
                case "project_iteration":
                    if(param1.search("产品") !== -1) param1 = param1.replace("产品", "项目");
                    else if(param1.search("项目") !== -1) param1 = param1.replace("项目", "迭代"); break;
                case "project_sprint":
                    if(param1.search("产品") !== -1) param1 = param1.replace("产品", "项目");
                    else if(param1.search("项目") !== -1) param1 = param1.replace("项目", "冲刺"); break;
            }
        }
        return param1;
    }
};
const targetData = Object.assign(CommonLogicBase, CommonLogicOwnData);
export default targetData;