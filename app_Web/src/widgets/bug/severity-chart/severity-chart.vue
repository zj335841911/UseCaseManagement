<template src="./severity-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SeverityChartBase } from './severity-chart-base';
 

/**
 * dashboard_sysportlet9_chart部件
 *
 * @export
 * @class SeverityChart
 * @extends {SeverityChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class SeverityChart extends SeverityChartBase {}
</script>
