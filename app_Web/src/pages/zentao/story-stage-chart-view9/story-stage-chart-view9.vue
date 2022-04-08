<template src="./story-stage-chart-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryStageChartView9Base } from './story-stage-chart-view9-base';
import view_chart from '@widgets/story/my-opened-story-stage-chart/my-opened-story-stage-chart.vue';

/**
 * 需求图表视图（累计创建需求-阶段）视图
 *
 * @export
 * @class StoryStageChartView9
 * @extends {StoryStageChartView9Base}
 */
@Component({
    components: {
        view_chart, 
    }
})
@VueLifeCycleProcessing()
export default class StoryStageChartView9 extends StoryStageChartView9Base { }
</script>
