<template src="./project-stats-project-progress-usr2-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStatsProjectProgressUsr2GridViewBase } from './project-stats-project-progress-usr2-grid-view-base';
import view_grid from '@widgets/project-stats/project-progress-grid/project-progress-grid.vue';
import view_searchform from '@widgets/project-stats/project-status-def-searchform/project-status-def-searchform.vue';

/**
 * 项目进度表格视图视图
 *
 * @export
 * @class ProjectStatsProjectProgressUsr2GridView
 * @extends {ProjectStatsProjectProgressUsr2GridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectStatsProjectProgressUsr2GridView extends ProjectStatsProjectProgressUsr2GridViewBase {}
</script>
