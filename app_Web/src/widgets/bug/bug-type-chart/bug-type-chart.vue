<template src="./bug-type-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugTypeChartBase } from './bug-type-chart-base';
 

/**
 * dashboard_sysportlet10_chart部件
 *
 * @export
 * @class BugTypeChart
 * @extends {BugTypeChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugTypeChart extends BugTypeChartBase {}
</script>
