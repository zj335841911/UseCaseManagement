<template src="./cur-user-opened-bug-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CurUserOpenedBugChartBase } from './cur-user-opened-bug-chart-base';
 

/**
 * dashboard_sysportlet4_chart部件
 *
 * @export
 * @class CurUserOpenedBugChart
 * @extends {CurUserOpenedBugChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CurUserOpenedBugChart extends CurUserOpenedBugChartBase {}
</script>
