<template src="./case-type-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseTypeChartBase } from './case-type-chart-base';
 

/**
 * dashboard_sysportlet2_chart部件
 *
 * @export
 * @class CaseTypeChart
 * @extends {CaseTypeChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CaseTypeChart extends CaseTypeChartBase {}
</script>
