<template src="./test-dashboard-quick-action-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestDashboardQuickActionPortletBase } from './test-dashboard-quick-action-portlet-base';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class TestDashboardQuickActionPortlet
 * @extends {TestDashboardQuickActionPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TestDashboardQuickActionPortlet extends TestDashboardQuickActionPortletBase {}
</script>
