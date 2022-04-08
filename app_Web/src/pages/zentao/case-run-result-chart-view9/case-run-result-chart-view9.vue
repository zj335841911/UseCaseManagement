<template src="./case-run-result-chart-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseRunResultChartView9Base } from './case-run-result-chart-view9-base';
import view_chart from '@widgets/case/caseresult-chart/caseresult-chart.vue';

/**
 * 测试用例图表视图（执行结果）视图
 *
 * @export
 * @class CaseRunResultChartView9
 * @extends {CaseRunResultChartView9Base}
 */
@Component({
    components: {
        view_chart, 
    }
})
@VueLifeCycleProcessing()
export default class CaseRunResultChartView9 extends CaseRunResultChartView9Base { }
</script>
