<template src="./bug-total-opened-chart-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugTotalOpenedChartViewBase } from './bug-total-opened-chart-view-base';
import view_chart from '@widgets/bug/cur-user-opened-bug-chart/cur-user-opened-bug-chart.vue';

/**
 * Bug图表视图（累计创建Bug）视图
 *
 * @export
 * @class BugTotalOpenedChartView
 * @extends {BugTotalOpenedChartViewBase}
 */
@Component({
    components: {
        view_chart, 
    }
})
@VueLifeCycleProcessing()
export default class BugTotalOpenedChartView extends BugTotalOpenedChartViewBase { }
</script>
