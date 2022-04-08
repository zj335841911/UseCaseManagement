<template src="./dashboard-quick-action-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashboardQuickActionPortletBase } from './dashboard-quick-action-portlet-base';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class DashboardQuickActionPortlet
 * @extends {DashboardQuickActionPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DashboardQuickActionPortlet extends DashboardQuickActionPortletBase {}
</script>
