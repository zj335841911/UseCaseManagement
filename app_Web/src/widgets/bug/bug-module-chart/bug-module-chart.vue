<template src="./bug-module-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugModuleChartBase } from './bug-module-chart-base';
 

/**
 * dashboard_sysportlet14_chart部件
 *
 * @export
 * @class BugModuleChart
 * @extends {BugModuleChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugModuleChart extends BugModuleChartBase {}
</script>
