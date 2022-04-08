<template src="./bug-opened-by-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugOpenedByChartBase } from './bug-opened-by-chart-base';
 

/**
 * dashboard_sysportlet13_chart部件
 *
 * @export
 * @class BugOpenedByChart
 * @extends {BugOpenedByChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugOpenedByChart extends BugOpenedByChartBase {}
</script>
