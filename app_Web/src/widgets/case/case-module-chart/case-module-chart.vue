<template src="./case-module-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseModuleChartBase } from './case-module-chart-base';
 

/**
 * dashboard_sysportlet3_chart部件
 *
 * @export
 * @class CaseModuleChart
 * @extends {CaseModuleChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CaseModuleChart extends CaseModuleChartBase {}
</script>
