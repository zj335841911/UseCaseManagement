<template src="./case-module-project-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseModuleProjectChartBase } from './case-module-project-chart-base';
 

/**
 * dashboard_sysportlet3_chart部件
 *
 * @export
 * @class CaseModuleProjectChart
 * @extends {CaseModuleProjectChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CaseModuleProjectChart extends CaseModuleProjectChartBase {}
</script>
