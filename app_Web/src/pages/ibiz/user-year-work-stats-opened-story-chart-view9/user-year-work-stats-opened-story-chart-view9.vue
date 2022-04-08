<template src="./user-year-work-stats-opened-story-chart-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserYearWorkStatsOpenedStoryChartView9Base } from './user-year-work-stats-opened-story-chart-view9-base';
import view_chart from '@widgets/user-year-work-stats/month-opened-story-chart/month-opened-story-chart.vue';

/**
 * 用户年度工作内容统计图表视图（月创建需求）视图
 *
 * @export
 * @class UserYearWorkStatsOpenedStoryChartView9
 * @extends {UserYearWorkStatsOpenedStoryChartView9Base}
 */
@Component({
    components: {
        view_chart, 
    }
})
@VueLifeCycleProcessing()
export default class UserYearWorkStatsOpenedStoryChartView9 extends UserYearWorkStatsOpenedStoryChartView9Base { }
</script>
