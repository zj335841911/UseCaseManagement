import IBIZPRO_PRODUCTWEEKLY_zh_CN_Base from './ibizpro-productweekly_zh_CN_base';

function getLocaleResource(){
    const IBIZPRO_PRODUCTWEEKLY_zh_CN_OwnData = {};
    const targetData = Object.assign(IBIZPRO_PRODUCTWEEKLY_zh_CN_Base(), IBIZPRO_PRODUCTWEEKLY_zh_CN_OwnData);
    return targetData;
}
export default getLocaleResource;