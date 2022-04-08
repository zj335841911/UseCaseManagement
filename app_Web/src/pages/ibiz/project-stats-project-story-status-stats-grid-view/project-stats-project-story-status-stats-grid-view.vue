<template src="./project-stats-project-story-status-stats-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStatsProjectStoryStatusStatsGridViewBase } from './project-stats-project-story-status-stats-grid-view-base';
import view_grid from '@widgets/project-stats/project-story-status-stats-grid/project-story-status-stats-grid.vue';
import view_searchform from '@widgets/project-stats/project-story-stats-searchform/project-story-stats-searchform.vue';

/**
 * 项目统计表格视图视图
 *
 * @export
 * @class ProjectStatsProjectStoryStatusStatsGridView
 * @extends {ProjectStatsProjectStoryStatusStatsGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectStatsProjectStoryStatusStatsGridView extends ProjectStatsProjectStoryStatusStatsGridViewBase {}
</script>
