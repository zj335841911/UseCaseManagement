<template src="./project-stats-usr2-grid-view-task-status-count.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStatsUsr2GridViewTaskStatusCountBase } from './project-stats-usr2-grid-view-task-status-count-base';
import view_grid from '@widgets/project-stats/project-task-status-count-grid/project-task-status-count-grid.vue';
import view_searchform from '@widgets/project-stats/default-searchform/default-searchform.vue';

/**
 * 项目统计表格视图（任务状态统计）视图
 *
 * @export
 * @class ProjectStatsUsr2GridViewTaskStatusCount
 * @extends {ProjectStatsUsr2GridViewTaskStatusCountBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectStatsUsr2GridViewTaskStatusCount extends ProjectStatsUsr2GridViewTaskStatusCountBase {}
</script>
