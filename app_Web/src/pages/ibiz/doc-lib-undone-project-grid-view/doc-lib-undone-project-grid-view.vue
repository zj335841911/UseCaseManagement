<template src="./doc-lib-undone-project-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibUndoneProjectGridViewBase } from './doc-lib-undone-project-grid-view-base';
import view_grid from '@widgets/doc-lib/main-grid/main-grid.vue';
import view_searchbar from '@widgets/doc-lib/custom-searchbar/custom-searchbar.vue';

/**
 * doclib表格视图视图
 *
 * @export
 * @class DocLibUndoneProjectGridView
 * @extends {DocLibUndoneProjectGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibUndoneProjectGridView extends DocLibUndoneProjectGridViewBase {}
</script>
