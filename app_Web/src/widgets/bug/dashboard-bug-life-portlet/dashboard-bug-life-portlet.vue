<template src="./dashboard-bug-life-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashboardBugLifePortletBase } from './dashboard-bug-life-portlet-base';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class DashboardBugLifePortlet
 * @extends {DashboardBugLifePortletBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DashboardBugLifePortlet extends DashboardBugLifePortletBase {}
</script>
