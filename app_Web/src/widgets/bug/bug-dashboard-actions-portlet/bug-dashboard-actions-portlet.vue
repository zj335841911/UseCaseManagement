<template src="./bug-dashboard-actions-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugDashboardActionsPortletBase } from './bug-dashboard-actions-portlet-base';
 

/**
 * dashboard_sysportlet5部件
 *
 * @export
 * @class BugDashboardActionsPortlet
 * @extends {BugDashboardActionsPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugDashboardActionsPortlet extends BugDashboardActionsPortletBase {}
</script>
