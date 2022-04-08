<template src="./month-opened-bug-and-case-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MonthOpenedBugAndCasePortletBase } from './month-opened-bug-and-case-portlet-base';
import view_dashboard_sysportlet3_chart from '@widgets/user-year-work-stats/month-opened-bug-and-case-chart/month-opened-bug-and-case-chart.vue';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class MonthOpenedBugAndCasePortlet
 * @extends {MonthOpenedBugAndCasePortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet3_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class MonthOpenedBugAndCasePortlet extends MonthOpenedBugAndCasePortletBase {}
</script>
