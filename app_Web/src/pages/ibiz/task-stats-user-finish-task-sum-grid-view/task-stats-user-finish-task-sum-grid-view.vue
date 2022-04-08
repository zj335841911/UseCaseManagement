<template src="./task-stats-user-finish-task-sum-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskStatsUserFinishTaskSumGridViewBase } from './task-stats-user-finish-task-sum-grid-view-base';
import view_grid from '@widgets/task-stats/user-finish-task-sum-grid/user-finish-task-sum-grid.vue';
import view_searchform from '@widgets/task-stats/user-finish-task-searchform/user-finish-task-searchform.vue';

/**
 * 任务统计表格视图视图
 *
 * @export
 * @class TaskStatsUserFinishTaskSumGridView
 * @extends {TaskStatsUserFinishTaskSumGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class TaskStatsUserFinishTaskSumGridView extends TaskStatsUserFinishTaskSumGridViewBase {}
</script>
