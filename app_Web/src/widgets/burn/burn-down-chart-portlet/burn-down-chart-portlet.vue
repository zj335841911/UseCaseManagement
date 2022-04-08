<template src="./burn-down-chart-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BurnDownChartPortletBase } from './burn-down-chart-portlet-base';
import view_dashboard_sysportlet1_chart from '@widgets/burn/burn-down-chart/burn-down-chart.vue';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class BurnDownChartPortlet
 * @extends {BurnDownChartPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet1_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class BurnDownChartPortlet extends BurnDownChartPortletBase {}
</script>
