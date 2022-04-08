<template src="./month-finish-task-and-bug-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MonthFinishTaskAndBugChartBase } from './month-finish-task-and-bug-chart-base';
 

/**
 * dashboard_sysportlet5_chart部件
 *
 * @export
 * @class MonthFinishTaskAndBugChart
 * @extends {MonthFinishTaskAndBugChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MonthFinishTaskAndBugChart extends MonthFinishTaskAndBugChartBase {}
</script>
