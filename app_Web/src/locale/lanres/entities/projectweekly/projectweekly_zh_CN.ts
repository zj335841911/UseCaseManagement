import PROJECTWEEKLY_zh_CN_Base from './projectweekly_zh_CN_base';

function getLocaleResource(){
    const PROJECTWEEKLY_zh_CN_OwnData = {};
    const targetData = Object.assign(PROJECTWEEKLY_zh_CN_Base(), PROJECTWEEKLY_zh_CN_OwnData);
    return targetData;
}
export default getLocaleResource;