<template src="./case-type-project-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseTypeProjectChartBase } from './case-type-project-chart-base';
 

/**
 * dashboard_sysportlet2_chart部件
 *
 * @export
 * @class CaseTypeProjectChart
 * @extends {CaseTypeProjectChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CaseTypeProjectChart extends CaseTypeProjectChartBase {}
</script>
