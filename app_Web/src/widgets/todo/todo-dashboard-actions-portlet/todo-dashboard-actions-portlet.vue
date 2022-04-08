<template src="./todo-dashboard-actions-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TodoDashboardActionsPortletBase } from './todo-dashboard-actions-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class TodoDashboardActionsPortlet
 * @extends {TodoDashboardActionsPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TodoDashboardActionsPortlet extends TodoDashboardActionsPortletBase {}
</script>
