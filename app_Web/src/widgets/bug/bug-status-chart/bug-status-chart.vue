<template src="./bug-status-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugSTATUSChartBase } from './bug-status-chart-base';
 

/**
 * dashboard_sysportlet11_chart部件
 *
 * @export
 * @class BugSTATUSChart
 * @extends {BugSTATUSChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugSTATUSChart extends BugSTATUSChartBase {}
</script>
