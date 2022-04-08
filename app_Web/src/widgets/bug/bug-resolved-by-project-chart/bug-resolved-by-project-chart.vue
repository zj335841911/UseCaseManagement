<template src="./bug-resolved-by-project-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugResolvedBy_ProjectChartBase } from './bug-resolved-by-project-chart-base';
 

/**
 * dashboard_sysportlet15_chart部件
 *
 * @export
 * @class BugResolvedBy_ProjectChart
 * @extends {BugResolvedBy_ProjectChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugResolvedBy_ProjectChart extends BugResolvedBy_ProjectChartBase {}
</script>
