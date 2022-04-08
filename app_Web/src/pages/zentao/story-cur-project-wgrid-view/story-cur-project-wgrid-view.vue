<template src="./story-cur-project-wgrid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryCurProjectWGridViewBase } from './story-cur-project-wgrid-view-base';
import view_grid from '@widgets/story/project-story-grid/project-story-grid.vue';
import view_searchbar from '@widgets/story/custom-searchbar/custom-searchbar.vue';

/**
 * story表格视图视图
 *
 * @export
 * @class StoryCurProjectWGridView
 * @extends {StoryCurProjectWGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class StoryCurProjectWGridView extends StoryCurProjectWGridViewBase {}
</script>
