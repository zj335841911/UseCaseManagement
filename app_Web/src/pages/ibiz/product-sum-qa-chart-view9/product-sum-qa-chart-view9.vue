<template src="./product-sum-qa-chart-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductSumQaChartView9Base } from './product-sum-qa-chart-view9-base';
import view_chart from '@widgets/product-sum/product-bugcnt-qa-chart/product-bugcnt-qa-chart.vue';

/**
 * 产品汇总表图表视图视图
 *
 * @export
 * @class ProductSumQaChartView9
 * @extends {ProductSumQaChartView9Base}
 */
@Component({
    components: {
        view_chart, 
    }
})
@VueLifeCycleProcessing()
export default class ProductSumQaChartView9 extends ProductSumQaChartView9Base {}
</script>
