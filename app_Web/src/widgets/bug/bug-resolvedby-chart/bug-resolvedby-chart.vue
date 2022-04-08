<template src="./bug-resolvedby-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugRESOLVEDBYChartBase } from './bug-resolvedby-chart-base';
 

/**
 * dashboard_sysportlet15_chart部件
 *
 * @export
 * @class BugRESOLVEDBYChart
 * @extends {BugRESOLVEDBYChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugRESOLVEDBYChart extends BugRESOLVEDBYChartBase {}
</script>
