<template src="./story-main-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryMainGridViewBase } from './story-main-grid-view-base';
import view_grid from '@widgets/story/tree-main-grid/tree-main-grid.vue';
import view_searchbar from '@widgets/story/custom-searchbar/custom-searchbar.vue';

/**
 * story表格视图视图
 *
 * @export
 * @class StoryMainGridView
 * @extends {StoryMainGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class StoryMainGridView extends StoryMainGridViewBase {}
</script>
