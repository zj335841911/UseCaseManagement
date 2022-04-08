<template src="./task-stats-user-finish-task-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskStatsUserFinishTaskGridViewBase } from './task-stats-user-finish-task-grid-view-base';
import view_grid from '@widgets/task-stats/task-finish-gird-grid/task-finish-gird-grid.vue';
import view_searchform from '@widgets/task-stats/task-finsh-search-gird-searchform/task-finsh-search-gird-searchform.vue';

/**
 * 任务统计表格视图视图
 *
 * @export
 * @class TaskStatsUserFinishTaskGridView
 * @extends {TaskStatsUserFinishTaskGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class TaskStatsUserFinishTaskGridView extends TaskStatsUserFinishTaskGridViewBase {}
</script>
