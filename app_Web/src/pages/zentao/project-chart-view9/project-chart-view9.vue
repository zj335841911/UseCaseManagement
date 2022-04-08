<template src="./project-chart-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectChartView9Base } from './project-chart-view9-base';
import view_chart from '@widgets/project/involved-project-dev-chart/involved-project-dev-chart.vue';

/**
 * 项目图表视图视图
 *
 * @export
 * @class ProjectChartView9
 * @extends {ProjectChartView9Base}
 */
@Component({
    components: {
        view_chart, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectChartView9 extends ProjectChartView9Base {}
</script>
