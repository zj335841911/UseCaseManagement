<template src="./product-bugcnt-qa-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductBugcnt_QAChartBase } from './product-bugcnt-qa-chart-base';
 

/**
 * chart部件
 *
 * @export
 * @class ProductBugcnt_QAChart
 * @extends {ProductBugcnt_QAChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductBugcnt_QAChart extends ProductBugcnt_QAChartBase {}
</script>
