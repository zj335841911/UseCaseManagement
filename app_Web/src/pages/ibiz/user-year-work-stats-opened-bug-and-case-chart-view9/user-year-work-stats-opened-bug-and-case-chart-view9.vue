<template src="./user-year-work-stats-opened-bug-and-case-chart-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserYearWorkStatsOpenedBugAndCaseChartView9Base } from './user-year-work-stats-opened-bug-and-case-chart-view9-base';
import view_chart from '@widgets/user-year-work-stats/month-opened-bug-and-case-chart/month-opened-bug-and-case-chart.vue';

/**
 * 用户年度工作内容统计图表视图（月创建Bug和用例）视图
 *
 * @export
 * @class UserYearWorkStatsOpenedBugAndCaseChartView9
 * @extends {UserYearWorkStatsOpenedBugAndCaseChartView9Base}
 */
@Component({
    components: {
        view_chart, 
    }
})
@VueLifeCycleProcessing()
export default class UserYearWorkStatsOpenedBugAndCaseChartView9 extends UserYearWorkStatsOpenedBugAndCaseChartView9Base { }
</script>
