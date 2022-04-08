<template src="./finish-task-and-bug-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { FinishTaskAndBugPortletBase } from './finish-task-and-bug-portlet-base';
import view_dashboard_sysportlet5_chart from '@widgets/user-year-work-stats/month-finish-task-and-bug-chart/month-finish-task-and-bug-chart.vue';
 

/**
 * dashboard_sysportlet5部件
 *
 * @export
 * @class FinishTaskAndBugPortlet
 * @extends {FinishTaskAndBugPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet5_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class FinishTaskAndBugPortlet extends FinishTaskAndBugPortletBase {}
</script>
