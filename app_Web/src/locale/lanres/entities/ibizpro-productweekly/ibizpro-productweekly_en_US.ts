import IBIZPRO_PRODUCTWEEKLY_en_US_Base from './ibizpro-productweekly_en_US_base';

function getLocaleResource(){
    const IBIZPRO_PRODUCTWEEKLY_en_US_OwnData = {};
    const targetData = Object.assign(IBIZPRO_PRODUCTWEEKLY_en_US_Base(), IBIZPRO_PRODUCTWEEKLY_en_US_OwnData);
    return targetData;
}
export default getLocaleResource;
