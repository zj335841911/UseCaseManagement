<template src="./ibz-lib-module-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzLibModuleGridViewBase } from './ibz-lib-module-grid-view-base';
import view_grid from '@widgets/ibz-lib-module/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibz-lib-module/default-searchform/default-searchform.vue';

/**
 * 用例库模块表格视图视图
 *
 * @export
 * @class IbzLibModuleGridView
 * @extends {IbzLibModuleGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbzLibModuleGridView extends IbzLibModuleGridViewBase {}
</script>
