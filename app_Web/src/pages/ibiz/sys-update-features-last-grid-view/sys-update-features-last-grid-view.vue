<template src="./sys-update-features-last-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysUpdateFeaturesLastGridViewBase } from './sys-update-features-last-grid-view-base';
import view_grid from '@widgets/sys-update-features/main-grid/main-grid.vue';
import view_searchform from '@widgets/sys-update-features/default-searchform/default-searchform.vue';

/**
 * 系统更新功能表格视图视图
 *
 * @export
 * @class SysUpdateFeaturesLastGridView
 * @extends {SysUpdateFeaturesLastGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class SysUpdateFeaturesLastGridView extends SysUpdateFeaturesLastGridViewBase {}
</script>
