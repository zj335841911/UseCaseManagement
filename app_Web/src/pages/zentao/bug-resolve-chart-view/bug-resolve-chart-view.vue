<template src="./bug-resolve-chart-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugResolveChartViewBase } from './bug-resolve-chart-view-base';
import view_chart from '@widgets/bug/cur-user-resolve-bug-chart/cur-user-resolve-bug-chart.vue';

/**
 * Bug图表视图（解决Bug）视图
 *
 * @export
 * @class BugResolveChartView
 * @extends {BugResolveChartViewBase}
 */
@Component({
    components: {
        view_chart, 
    }
})
@VueLifeCycleProcessing()
export default class BugResolveChartView extends BugResolveChartViewBase { }
</script>
