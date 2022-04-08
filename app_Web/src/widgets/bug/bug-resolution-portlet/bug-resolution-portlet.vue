<template src="./bug-resolution-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugResolutionPortletBase } from './bug-resolution-portlet-base';
import view_dashboard_sysportlet12_chart from '@widgets/bug/bug-resolution-chart/bug-resolution-chart.vue';
 

/**
 * dashboard_sysportlet12部件
 *
 * @export
 * @class BugResolutionPortlet
 * @extends {BugResolutionPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet12_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class BugResolutionPortlet extends BugResolutionPortletBase {}
</script>
