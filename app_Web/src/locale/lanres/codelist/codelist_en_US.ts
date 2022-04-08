import codelist_en_US_Base from './codelist_en_US_base';

function getLocaleResource(){
    const codelist_en_US_OwnData = {
        ConfigManagementstatus: {
            "product_project": "产品 - 项目",
            "product_iteration": "产品 - 迭代",
            "project_iteration": "项目 - 迭代",
            "product_sprint": "产品 - 冲刺",
            "project_sprint": "项目 - 冲刺",
            "empty": "",
        },
    };
    const targetData = Object.assign(codelist_en_US_Base(), codelist_en_US_OwnData);
    return targetData;
}

export default getLocaleResource;