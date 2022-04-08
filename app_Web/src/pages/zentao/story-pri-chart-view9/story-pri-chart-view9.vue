<template src="./story-pri-chart-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryPriChartView9Base } from './story-pri-chart-view9-base';
import view_chart from '@widgets/story/my-opened-story-chart/my-opened-story-chart.vue';

/**
 * 需求图表视图（累计创建需求-优先级）视图
 *
 * @export
 * @class StoryPriChartView9
 * @extends {StoryPriChartView9Base}
 */
@Component({
    components: {
        view_chart, 
    }
})
@VueLifeCycleProcessing()
export default class StoryPriChartView9 extends StoryPriChartView9Base { }
</script>
