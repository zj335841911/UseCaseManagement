<template src="./bug-status-project-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugStatus_ProjectChartBase } from './bug-status-project-chart-base';
 

/**
 * dashboard_BugStatusProject_chart部件
 *
 * @export
 * @class BugStatus_ProjectChart
 * @extends {BugStatus_ProjectChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugStatus_ProjectChart extends BugStatus_ProjectChartBase {}
</script>
