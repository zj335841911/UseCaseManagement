<template src="./bug-status-project-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugStatus_ProjectPortletBase } from './bug-status-project-portlet-base';
import view_dashboard_BugStatusProject_chart from '@widgets/bug/bug-status-project-chart/bug-status-project-chart.vue';
 

/**
 * dashboard_BugStatusProject部件
 *
 * @export
 * @class BugStatus_ProjectPortlet
 * @extends {BugStatus_ProjectPortletBase}
 */
@Component({
    components: {
        view_dashboard_BugStatusProject_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class BugStatus_ProjectPortlet extends BugStatus_ProjectPortletBase {}
</script>
