<template src="./bug-module-project-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugModule_ProjectChartBase } from './bug-module-project-chart-base';
 

/**
 * dashboard_BugModuleProject_chart部件
 *
 * @export
 * @class BugModule_ProjectChart
 * @extends {BugModule_ProjectChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugModule_ProjectChart extends BugModule_ProjectChartBase {}
</script>
