<template src="./bug-status-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugStatusPortletBase } from './bug-status-portlet-base';
import view_dashboard_sysportlet11_chart from '@widgets/bug/bug-status-chart/bug-status-chart.vue';
 

/**
 * dashboard_sysportlet11部件
 *
 * @export
 * @class BugStatusPortlet
 * @extends {BugStatusPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet11_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class BugStatusPortlet extends BugStatusPortletBase {}
</script>
