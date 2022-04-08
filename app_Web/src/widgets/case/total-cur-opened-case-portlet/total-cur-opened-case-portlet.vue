<template src="./total-cur-opened-case-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TotalCurOpenedCasePortletBase } from './total-cur-opened-case-portlet-base';
import view_dashboard_sysportlet5_chart from '@widgets/case/cur-opened-case-chart/cur-opened-case-chart.vue';
 

/**
 * dashboard_sysportlet5部件
 *
 * @export
 * @class TotalCurOpenedCasePortlet
 * @extends {TotalCurOpenedCasePortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet5_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class TotalCurOpenedCasePortlet extends TotalCurOpenedCasePortletBase {}
</script>
