<template src="./task-zs-grid-view9-week.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskZsGridView9WeekBase } from './task-zs-grid-view9-week-base';
import view_grid from '@widgets/task/complete-report-main-zs-grid/complete-report-main-zs-grid.vue';

/**
 * 任务表格视图（展示）视图
 *
 * @export
 * @class TaskZsGridView9Week
 * @extends {TaskZsGridView9WeekBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskZsGridView9Week extends TaskZsGridView9WeekBase {}
</script>
