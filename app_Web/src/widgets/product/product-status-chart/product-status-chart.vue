<template src="./product-status-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductStatusChartBase } from './product-status-chart-base';
 

/**
 * db_productstatusportlet_chart部件
 *
 * @export
 * @class ProductStatusChart
 * @extends {ProductStatusChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductStatusChart extends ProductStatusChartBase {}
</script>
