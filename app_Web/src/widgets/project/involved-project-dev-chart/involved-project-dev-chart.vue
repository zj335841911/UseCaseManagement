<template src="./involved-project-dev-chart.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { InvolvedProject_devChartBase } from './involved-project-dev-chart-base';
 

/**
 * chart部件
 *
 * @export
 * @class InvolvedProject_devChart
 * @extends {InvolvedProject_devChartBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class InvolvedProject_devChart extends InvolvedProject_devChartBase {}
</script>
