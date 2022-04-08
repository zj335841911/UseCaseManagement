<template src="./bug-opened-by-project-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugOpenedBy_ProjectChartBase } from './bug-opened-by-project-chart-base';
 

/**
 * dashboard_sysportlet13_chart部件
 *
 * @export
 * @class BugOpenedBy_ProjectChart
 * @extends {BugOpenedBy_ProjectChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugOpenedBy_ProjectChart extends BugOpenedBy_ProjectChartBase {}
</script>
