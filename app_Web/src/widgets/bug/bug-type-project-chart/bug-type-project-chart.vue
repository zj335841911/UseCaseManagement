<template src="./bug-type-project-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugType_ProjectChartBase } from './bug-type-project-chart-base';
 

/**
 * dashboard_BugTypeProject_chart部件
 *
 * @export
 * @class BugType_ProjectChart
 * @extends {BugType_ProjectChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugType_ProjectChart extends BugType_ProjectChartBase {}
</script>
