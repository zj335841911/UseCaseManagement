<template src="./burn-down-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BurnDownChartBase } from './burn-down-chart-base';
 

/**
 * dashboard_sysportlet1_chart部件
 *
 * @export
 * @class BurnDownChart
 * @extends {BurnDownChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BurnDownChart extends BurnDownChartBase {}
</script>
