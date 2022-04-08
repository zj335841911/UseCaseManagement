<template src="./bug-resolution-project-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugResolution_ProjectChartBase } from './bug-resolution-project-chart-base';
 

/**
 * dashboard_BugResolutionProject_chart部件
 *
 * @export
 * @class BugResolution_ProjectChart
 * @extends {BugResolution_ProjectChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugResolution_ProjectChart extends BugResolution_ProjectChartBase {}
</script>
