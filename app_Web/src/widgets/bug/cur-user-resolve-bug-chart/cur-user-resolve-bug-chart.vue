<template src="./cur-user-resolve-bug-chart.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CurUserResolveBugChartBase } from './cur-user-resolve-bug-chart-base';
import { ChartDataSetField,ChartLineSeries,ChartFunnelSeries,ChartPieSeries,ChartBarSeries,ChartRadarSeries} from '@/model/chart-detail';

/**
 * chart部件
 *
 * @export
 * @class CurUserResolveBugChart
 * @extends {CurUserResolveBugChartBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class CurUserResolveBugChart extends CurUserResolveBugChartBase { 
    
}
</script>
