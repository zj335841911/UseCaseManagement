<template src="./my-opened-story-stage-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyOpenedStory_StageChartBase } from './my-opened-story-stage-chart-base';
 

/**
 * dashboard_sysportlet7_chart部件
 *
 * @export
 * @class MyOpenedStory_StageChart
 * @extends {MyOpenedStory_StageChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MyOpenedStory_StageChart extends MyOpenedStory_StageChartBase {}
</script>
