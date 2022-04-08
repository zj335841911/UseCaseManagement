<template src="./case-total-opened-case-chart-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseTotalOpenedCaseChartView9Base } from './case-total-opened-case-chart-view9-base';
import view_chart from '@widgets/case/cur-opened-case-chart/cur-opened-case-chart.vue';

/**
 * 测试用例图表视图（累计创建用例）视图
 *
 * @export
 * @class CaseTotalOpenedCaseChartView9
 * @extends {CaseTotalOpenedCaseChartView9Base}
 */
@Component({
    components: {
        view_chart, 
    }
})
@VueLifeCycleProcessing()
export default class CaseTotalOpenedCaseChartView9 extends CaseTotalOpenedCaseChartView9Base { }
</script>
