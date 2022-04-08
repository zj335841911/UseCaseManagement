<template src="./caseresult-project-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseresultProjectChartBase } from './caseresult-project-chart-base';
 

/**
 * dashboard_sysportlet1_chart部件
 *
 * @export
 * @class CaseresultProjectChart
 * @extends {CaseresultProjectChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CaseresultProjectChart extends CaseresultProjectChartBase {}
</script>
