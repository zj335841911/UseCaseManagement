<template src="./story-build-sub-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryBuildSubGridViewBase } from './story-build-sub-grid-view-base';
import view_grid from '@widgets/story/main-build-sub-grid/main-build-sub-grid.vue';
import view_searchbar from '@widgets/story/custom-searchbar/custom-searchbar.vue';

/**
 * story表格视图视图
 *
 * @export
 * @class StoryBuildSubGridView
 * @extends {StoryBuildSubGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class StoryBuildSubGridView extends StoryBuildSubGridViewBase {}
</script>
