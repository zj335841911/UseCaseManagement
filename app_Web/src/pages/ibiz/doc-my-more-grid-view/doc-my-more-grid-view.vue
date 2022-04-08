<template src="./doc-my-more-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocMyMoreGridViewBase } from './doc-my-more-grid-view-base';
import view_grid from '@widgets/doc/more-recent-update-grid/more-recent-update-grid.vue';
import view_searchbar from '@widgets/doc/custom-searchbar/custom-searchbar.vue';

/**
 * doc表格视图视图
 *
 * @export
 * @class DocMyMoreGridView
 * @extends {DocMyMoreGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class DocMyMoreGridView extends DocMyMoreGridViewBase {}
</script>
