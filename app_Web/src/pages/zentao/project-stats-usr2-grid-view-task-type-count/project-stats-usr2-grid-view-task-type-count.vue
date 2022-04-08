<template src="./project-stats-usr2-grid-view-task-type-count.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStatsUsr2GridViewTaskTypeCountBase } from './project-stats-usr2-grid-view-task-type-count-base';
import view_grid from '@widgets/project-stats/project-task-type-count-grid/project-task-type-count-grid.vue';
import view_searchform from '@widgets/project-stats/project-task-type-count-searchform/project-task-type-count-searchform.vue';

/**
 * 项目统计表格视图（任务状态统计）视图
 *
 * @export
 * @class ProjectStatsUsr2GridViewTaskTypeCount
 * @extends {ProjectStatsUsr2GridViewTaskTypeCountBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectStatsUsr2GridViewTaskTypeCount extends ProjectStatsUsr2GridViewTaskTypeCountBase {}
</script>
