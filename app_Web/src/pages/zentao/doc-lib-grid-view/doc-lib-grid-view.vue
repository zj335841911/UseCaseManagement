<template src="./doc-lib-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibGridViewBase } from './doc-lib-grid-view-base';
import view_grid from '@widgets/doc-lib/main-grid/main-grid.vue';
import view_searchbar from '@widgets/doc-lib/custom-searchbar/custom-searchbar.vue';

/**
 * doclib表格视图视图
 *
 * @export
 * @class DocLibGridView
 * @extends {DocLibGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibGridView extends DocLibGridViewBase {}
</script>
