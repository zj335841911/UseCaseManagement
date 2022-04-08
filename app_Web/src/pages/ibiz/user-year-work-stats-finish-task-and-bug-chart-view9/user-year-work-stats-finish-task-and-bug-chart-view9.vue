<template src="./user-year-work-stats-finish-task-and-bug-chart-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserYearWorkStatsFinishTaskAndBugChartView9Base } from './user-year-work-stats-finish-task-and-bug-chart-view9-base';
import view_chart from '@widgets/user-year-work-stats/month-finish-task-and-bug-chart/month-finish-task-and-bug-chart.vue';

/**
 * 用户年度工作内容统计图表视图（月完成任务和解决的Bug）视图
 *
 * @export
 * @class UserYearWorkStatsFinishTaskAndBugChartView9
 * @extends {UserYearWorkStatsFinishTaskAndBugChartView9Base}
 */
@Component({
    components: {
        view_chart, 
    }
})
@VueLifeCycleProcessing()
export default class UserYearWorkStatsFinishTaskAndBugChartView9 extends UserYearWorkStatsFinishTaskAndBugChartView9Base { }
</script>
