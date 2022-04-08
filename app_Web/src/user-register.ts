import Vue from 'vue';
import { UserDefaultComponent } from './user-default-register';
import { iBizProjectCore } from './ibiz-project-core';

// 图表插件（表格图例）
import ChartFormLegend from './components/chart-form-legend/chart-form-legend.vue';
import IconCodeList from './components/icon-codelist/icon-codelist.vue';


// 注册Vue插件
export const UserComponent = {
    install(v: any, opt: any) {
        Vue.use(UserDefaultComponent);
        Vue.use(iBizProjectCore);
        // 图表插件（表格图例）
        v.component('chart-form-legend',ChartFormLegend);
        v.component('icon-codelist',IconCodeList);
    }
};