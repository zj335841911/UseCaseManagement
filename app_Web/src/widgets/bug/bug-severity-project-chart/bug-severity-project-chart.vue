<template src="./bug-severity-project-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugSeverity_ProjectChartBase } from './bug-severity-project-chart-base';
 

/**
 * dashboard_BugSeverity_chart部件
 *
 * @export
 * @class BugSeverity_ProjectChart
 * @extends {BugSeverity_ProjectChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugSeverity_ProjectChart extends BugSeverity_ProjectChartBase {}
</script>
