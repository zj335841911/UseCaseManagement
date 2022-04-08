<template src="./total-cur-opened-bug-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TotalCurOpenedBugPortletBase } from './total-cur-opened-bug-portlet-base';
import view_dashboard_sysportlet4_chart from '@widgets/bug/cur-user-opened-bug-chart/cur-user-opened-bug-chart.vue';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class TotalCurOpenedBugPortlet
 * @extends {TotalCurOpenedBugPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet4_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class TotalCurOpenedBugPortlet extends TotalCurOpenedBugPortletBase {}
</script>
