<template src="./story-plan-sub-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryPlanSubGridViewBase } from './story-plan-sub-grid-view-base';
import view_grid from '@widgets/story/main-plan-sub-grid/main-plan-sub-grid.vue';
import view_searchbar from '@widgets/story/custom-searchbar/custom-searchbar.vue';

/**
 * story表格视图视图
 *
 * @export
 * @class StoryPlanSubGridView
 * @extends {StoryPlanSubGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class StoryPlanSubGridView extends StoryPlanSubGridViewBase {}
</script>
