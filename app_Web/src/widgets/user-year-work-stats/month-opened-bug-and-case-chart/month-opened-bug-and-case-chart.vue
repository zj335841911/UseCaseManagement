<template src="./month-opened-bug-and-case-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MonthOpenedBugAndCaseChartBase } from './month-opened-bug-and-case-chart-base';
 

/**
 * dashboard_sysportlet3_chart部件
 *
 * @export
 * @class MonthOpenedBugAndCaseChart
 * @extends {MonthOpenedBugAndCaseChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MonthOpenedBugAndCaseChart extends MonthOpenedBugAndCaseChartBase {}
</script>
