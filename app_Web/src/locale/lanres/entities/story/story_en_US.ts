import Story_en_US_Base from './story_en_US_base';

function getLocaleResource(){
    const Story_en_US_OwnData = {};
    const targetData = Object.assign(Story_en_US_Base(), Story_en_US_OwnData);
    return targetData;
}
export default getLocaleResource;
