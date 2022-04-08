<template src="./month-bug-chart.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MonthBugChartBase } from './month-bug-chart-base';
 

/**
 * dashboard_sysportlet5_chart部件
 *
 * @export
 * @class MonthBugChart
 * @extends {MonthBugChartBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MonthBugChart extends MonthBugChartBase { }
</script>
