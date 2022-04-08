<template src="./doc-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocGridViewBase } from './doc-grid-view-base';
import view_grid from '@widgets/doc/main-grid/main-grid.vue';
import view_searchbar from '@widgets/doc/custom-searchbar/custom-searchbar.vue';

/**
 * doc表格视图视图
 *
 * @export
 * @class DocGridView
 * @extends {DocGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class DocGridView extends DocGridViewBase {}
</script>
