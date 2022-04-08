<template src="./project-status-bar-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStatusBarChartBase } from './project-status-bar-chart-base';
 

/**
 * db_projectstatusportlet_chart部件
 *
 * @export
 * @class ProjectStatusBarChart
 * @extends {ProjectStatusBarChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectStatusBarChart extends ProjectStatusBarChartBase {}
</script>
