import Vue from 'vue';
import { StudioCore } from './studio-core';
import IBizStudioComponentsVue from 'ibiz-studio-components-vue';
import AppSpan from './components/app-span/app-span';
import AppFormGroup from './components/app-form-group/app-form-group';
import AppFormGroupDataPanel from './components/app-form-group-data-panel/app-form-group-data-panel';
import FilterTree from './components/filter-tree/filter-tree.vue';

// 注册Vue插件
export const UserDefaultComponent = {
    install(v: any, opt: any) {
        Vue.use(StudioCore);
        Vue.use(IBizStudioComponentsVue);
        v.component('app-form-group', AppFormGroup);
        v.component('app-form-group-data-panel', AppFormGroupDataPanel);
        v.component('app-span', AppSpan);
        v.component('filter-tree', FilterTree);
        v.component('app-vue-pivottable', () => import('./components/app-vue-pivottable/app-vue-pivottable.vue'));
        v.component('app-form-group4', () => import('./components/app-form-group4/app-form-group4'));
        v.component('draggable', () => import('vuedraggable'));
    },
};
