<template src="./module-pickup-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ModulePickupGridViewBase } from './module-pickup-grid-view-base';
import view_grid from '@widgets/module/main-grid/main-grid.vue';
import view_searchform from '@widgets/module/default-searchform/default-searchform.vue';

/**
 * 模块选择视图
 *
 * @export
 * @class ModulePickupGridView
 * @extends {ModulePickupGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class ModulePickupGridView extends ModulePickupGridViewBase {}
</script>
