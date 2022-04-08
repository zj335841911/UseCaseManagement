<template src="./task-monthly-complete-zs-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskMonthlyCompleteZsGridViewBase } from './task-monthly-complete-zs-grid-view-base';
import view_grid from '@widgets/task/complete-report-main-zs-grid/complete-report-main-zs-grid.vue';

/**
 * 任务表格视图（展示）视图
 *
 * @export
 * @class TaskMonthlyCompleteZsGridView
 * @extends {TaskMonthlyCompleteZsGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskMonthlyCompleteZsGridView extends TaskMonthlyCompleteZsGridViewBase {}
</script>
