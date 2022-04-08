<template src="./product-create-story-po-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductCreateStory_POChartBase } from './product-create-story-po-chart-base';
 

/**
 * chart部件
 *
 * @export
 * @class ProductCreateStory_POChart
 * @extends {ProductCreateStory_POChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductCreateStory_POChart extends ProductCreateStory_POChartBase {}
</script>
