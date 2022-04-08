<template src="./product-sum-po-chart-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductSumPoChartView9Base } from './product-sum-po-chart-view9-base';
import view_chart from '@widgets/product-sum/product-create-story-po-chart/product-create-story-po-chart.vue';

/**
 * 产品汇总表图表视图视图
 *
 * @export
 * @class ProductSumPoChartView9
 * @extends {ProductSumPoChartView9Base}
 */
@Component({
    components: {
        view_chart, 
    }
})
@VueLifeCycleProcessing()
export default class ProductSumPoChartView9 extends ProductSumPoChartView9Base {}
</script>
