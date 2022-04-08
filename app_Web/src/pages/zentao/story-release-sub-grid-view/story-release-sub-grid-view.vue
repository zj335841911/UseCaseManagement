<template src="./story-release-sub-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryReleaseSubGridViewBase } from './story-release-sub-grid-view-base';
import view_grid from '@widgets/story/main-release-sub-grid/main-release-sub-grid.vue';
import view_searchbar from '@widgets/story/custom-searchbar/custom-searchbar.vue';

/**
 * story表格视图视图
 *
 * @export
 * @class StoryReleaseSubGridView
 * @extends {StoryReleaseSubGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class StoryReleaseSubGridView extends StoryReleaseSubGridViewBase {}
</script>
