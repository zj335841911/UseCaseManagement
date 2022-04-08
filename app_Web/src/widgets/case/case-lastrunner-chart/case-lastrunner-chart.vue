<template src="./case-lastrunner-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseLASTRUNNERChartBase } from './case-lastrunner-chart-base';
 

/**
 * dashboard_sysportlet4_chart部件
 *
 * @export
 * @class CaseLASTRUNNERChart
 * @extends {CaseLASTRUNNERChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CaseLASTRUNNERChart extends CaseLASTRUNNERChartBase {}
</script>
