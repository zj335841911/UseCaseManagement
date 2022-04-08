<template src="./task-daily-complete-zs-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskDailyCompleteZsGridViewBase } from './task-daily-complete-zs-grid-view-base';
import view_grid from '@widgets/task/complete-report-main-zs-grid/complete-report-main-zs-grid.vue';

/**
 * 任务表格视图（展示）视图
 *
 * @export
 * @class TaskDailyCompleteZsGridView
 * @extends {TaskDailyCompleteZsGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskDailyCompleteZsGridView extends TaskDailyCompleteZsGridViewBase {}
</script>
