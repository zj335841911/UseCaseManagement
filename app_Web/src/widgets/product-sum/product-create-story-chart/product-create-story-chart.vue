<template src="./product-create-story-chart.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductCreateStoryChartBase } from './product-create-story-chart-base';
 

/**
 * dashboard_sysportlet3_chart部件
 *
 * @export
 * @class ProductCreateStoryChart
 * @extends {ProductCreateStoryChartBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ProductCreateStoryChart extends ProductCreateStoryChartBase { }
</script>
