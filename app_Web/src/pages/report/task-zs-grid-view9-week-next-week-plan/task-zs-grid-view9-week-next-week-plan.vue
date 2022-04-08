<template src="./task-zs-grid-view9-week-next-week-plan.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskZsGridView9WeekNextWeekPlanBase } from './task-zs-grid-view9-week-next-week-plan-base';
import view_grid from '@widgets/task/report-main-zs-grid/report-main-zs-grid.vue';

/**
 * 任务表格视图（展示）视图
 *
 * @export
 * @class TaskZsGridView9WeekNextWeekPlan
 * @extends {TaskZsGridView9WeekNextWeekPlanBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskZsGridView9WeekNextWeekPlan extends TaskZsGridView9WeekNextWeekPlanBase {}
</script>
