import PROJECTWEEKLY_en_US_Base from './projectweekly_en_US_base';

function getLocaleResource(){
    const PROJECTWEEKLY_en_US_OwnData = {};
    const targetData = Object.assign(PROJECTWEEKLY_en_US_Base(), PROJECTWEEKLY_en_US_OwnData);
    return targetData;
}
export default getLocaleResource;
