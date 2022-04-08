<template src="./story-cur-project-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryCurProjectGridViewBase } from './story-cur-project-grid-view-base';
import view_grid from '@widgets/story/project-story-grid/project-story-grid.vue';
import view_searchbar from '@widgets/story/custom-searchbar/custom-searchbar.vue';

/**
 * story表格视图视图
 *
 * @export
 * @class StoryCurProjectGridView
 * @extends {StoryCurProjectGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class StoryCurProjectGridView extends StoryCurProjectGridViewBase {}
</script>
