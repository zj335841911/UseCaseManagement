<template src="./month-opened-story-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MonthOpenedStoryChartBase } from './month-opened-story-chart-base';
 

/**
 * dashboard_sysportlet5_chart部件
 *
 * @export
 * @class MonthOpenedStoryChart
 * @extends {MonthOpenedStoryChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MonthOpenedStoryChart extends MonthOpenedStoryChartBase {}
</script>
