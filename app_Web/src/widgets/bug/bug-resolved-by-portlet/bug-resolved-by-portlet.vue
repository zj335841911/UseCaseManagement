<template src="./bug-resolved-by-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugResolvedByPortletBase } from './bug-resolved-by-portlet-base';
import view_dashboard_sysportlet15_chart from '@widgets/bug/bug-resolvedby-chart/bug-resolvedby-chart.vue';
 

/**
 * dashboard_sysportlet15部件
 *
 * @export
 * @class BugResolvedByPortlet
 * @extends {BugResolvedByPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet15_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class BugResolvedByPortlet extends BugResolvedByPortletBase {}
</script>
