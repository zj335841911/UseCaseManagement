<template src="./cur-opened-case-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CurOpenedCaseChartBase } from './cur-opened-case-chart-base';
 

/**
 * dashboard_sysportlet5_chart部件
 *
 * @export
 * @class CurOpenedCaseChart
 * @extends {CurOpenedCaseChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CurOpenedCaseChart extends CurOpenedCaseChartBase {}
</script>
