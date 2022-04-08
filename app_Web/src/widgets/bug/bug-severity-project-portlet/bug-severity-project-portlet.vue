<template src="./bug-severity-project-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugSeverity_ProjectPortletBase } from './bug-severity-project-portlet-base';
import view_dashboard_BugSeverity_chart from '@widgets/bug/bug-severity-project-chart/bug-severity-project-chart.vue';
 

/**
 * dashboard_BugSeverity部件
 *
 * @export
 * @class BugSeverity_ProjectPortlet
 * @extends {BugSeverity_ProjectPortletBase}
 */
@Component({
    components: {
        view_dashboard_BugSeverity_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class BugSeverity_ProjectPortlet extends BugSeverity_ProjectPortletBase {}
</script>
