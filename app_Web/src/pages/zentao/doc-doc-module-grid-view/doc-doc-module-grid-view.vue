<template src="./doc-doc-module-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocDocModuleGridViewBase } from './doc-doc-module-grid-view-base';
import view_grid from '@widgets/doc/main-grid/main-grid.vue';
import view_searchbar from '@widgets/doc/custom-searchbar/custom-searchbar.vue';

/**
 * doc表格视图视图
 *
 * @export
 * @class DocDocModuleGridView
 * @extends {DocDocModuleGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class DocDocModuleGridView extends DocDocModuleGridViewBase {}
</script>
