import TestSuite_zh_CN_Base from './test-suite_zh_CN_base';

function getLocaleResource(){
    const TestSuite_zh_CN_OwnData = {};
    const targetData = Object.assign(TestSuite_zh_CN_Base(), TestSuite_zh_CN_OwnData);
    return targetData;
}
export default getLocaleResource;