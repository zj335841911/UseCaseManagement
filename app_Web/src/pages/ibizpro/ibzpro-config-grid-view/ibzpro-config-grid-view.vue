<template src="./ibzpro-config-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzproConfigGridViewBase } from './ibzpro-config-grid-view-base';
import view_grid from '@widgets/ibzpro-config/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibzpro-config/default-searchform/default-searchform.vue';

/**
 * 系统配置表表格视图视图
 *
 * @export
 * @class IbzproConfigGridView
 * @extends {IbzproConfigGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbzproConfigGridView extends IbzproConfigGridViewBase {}
</script>
