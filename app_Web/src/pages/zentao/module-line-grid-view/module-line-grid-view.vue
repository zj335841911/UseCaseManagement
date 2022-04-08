<template src="./module-line-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ModuleLineGridViewBase } from './module-line-grid-view-base';
import view_grid from '@widgets/module/line-grid/line-grid.vue';

/**
 * 产品线视图
 *
 * @export
 * @class ModuleLineGridView
 * @extends {ModuleLineGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ModuleLineGridView extends ModuleLineGridViewBase {}
</script>
