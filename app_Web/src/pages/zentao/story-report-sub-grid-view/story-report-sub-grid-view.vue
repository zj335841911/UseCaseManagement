<template src="./story-report-sub-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryReportSubGridViewBase } from './story-report-sub-grid-view-base';
import view_grid from '@widgets/story/main-report-sub-grid/main-report-sub-grid.vue';
import view_searchbar from '@widgets/story/custom-searchbar/custom-searchbar.vue';

/**
 * story表格视图视图
 *
 * @export
 * @class StoryReportSubGridView
 * @extends {StoryReportSubGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class StoryReportSubGridView extends StoryReportSubGridViewBase {}
</script>
