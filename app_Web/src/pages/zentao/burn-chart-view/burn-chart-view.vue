<template src="./burn-chart-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BurnChartViewBase } from './burn-chart-view-base';
import view_quicksearchform from '@widgets/burn/default-searchform/default-searchform.vue';
import view_chart from '@widgets/burn/burn-down2-chart/burn-down2-chart.vue';

/**
 * 燃尽图视图
 *
 * @export
 * @class BurnChartView
 * @extends {BurnChartViewBase}
 */
@Component({
    components: {
        view_quicksearchform, 
        view_chart, 
    }
})
@VueLifeCycleProcessing()
export default class BurnChartView extends BurnChartViewBase { 
    /**
     * 引擎初始化
     *
     * @public
     * @memberof BurnChartViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            chart: this.$refs.chart,
            searchform: this.$refs.quicksearchform,
            keyPSDEField: 'burn',
            majorPSDEField: 'date',
            isLoadDefault: false,
        });
    }
}
</script>
