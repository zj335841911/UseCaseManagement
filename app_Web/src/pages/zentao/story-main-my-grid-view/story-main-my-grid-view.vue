<template src="./story-main-my-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryMainMyGridViewBase } from './story-main-my-grid-view-base';
import view_grid from '@widgets/story/my-group-main-grid/my-group-main-grid.vue';
import view_searchbar from '@widgets/story/custom-searchbar/custom-searchbar.vue';

/**
 * story表格视图视图
 *
 * @export
 * @class StoryMainMyGridView
 * @extends {StoryMainMyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class StoryMainMyGridView extends StoryMainMyGridViewBase {}
</script>
