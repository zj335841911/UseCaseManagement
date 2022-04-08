<template src="./caseresult-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseresultChartBase } from './caseresult-chart-base';
 

/**
 * dashboard_sysportlet1_chart部件
 *
 * @export
 * @class CaseresultChart
 * @extends {CaseresultChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CaseresultChart extends CaseresultChartBase {}
</script>
