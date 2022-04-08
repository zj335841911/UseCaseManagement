<template src="./sys-update-features-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysUpdateFeaturesGridViewBase } from './sys-update-features-grid-view-base';
import view_grid from '@widgets/sys-update-features/main-grid/main-grid.vue';
import view_searchform from '@widgets/sys-update-features/default-searchform/default-searchform.vue';

/**
 * 系统更新功能表格视图视图
 *
 * @export
 * @class SysUpdateFeaturesGridView
 * @extends {SysUpdateFeaturesGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class SysUpdateFeaturesGridView extends SysUpdateFeaturesGridViewBase {}
</script>
