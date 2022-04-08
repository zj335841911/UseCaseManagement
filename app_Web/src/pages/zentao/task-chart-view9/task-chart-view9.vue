<template src="./task-chart-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskChartView9Base } from './task-chart-view9-base';
import view_chart from '@widgets/task/my-finishedby-task-chart/my-finishedby-task-chart.vue';

/**
 * 任务图表视图视图
 *
 * @export
 * @class TaskChartView9
 * @extends {TaskChartView9Base}
 */
@Component({
    components: {
        view_chart, 
    }
})
@VueLifeCycleProcessing()
export default class TaskChartView9 extends TaskChartView9Base { }
</script>
