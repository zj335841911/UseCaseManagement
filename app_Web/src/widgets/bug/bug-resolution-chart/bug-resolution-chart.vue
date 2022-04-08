<template src="./bug-resolution-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugRESOLUTIONChartBase } from './bug-resolution-chart-base';
 

/**
 * dashboard_sysportlet12_chart部件
 *
 * @export
 * @class BugRESOLUTIONChart
 * @extends {BugRESOLUTIONChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugRESOLUTIONChart extends BugRESOLUTIONChartBase {}
</script>
