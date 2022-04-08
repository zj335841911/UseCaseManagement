<template src="./dashboard-bug-main-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashboardBugMainPortletBase } from './dashboard-bug-main-portlet-base';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class DashboardBugMainPortlet
 * @extends {DashboardBugMainPortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DashboardBugMainPortlet extends DashboardBugMainPortletBase {}
</script>
