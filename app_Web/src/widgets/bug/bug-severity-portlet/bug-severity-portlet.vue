<template src="./bug-severity-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugSeverityPortletBase } from './bug-severity-portlet-base';
import view_dashboard_sysportlet9_chart from '@widgets/bug/severity-chart/severity-chart.vue';
 

/**
 * dashboard_sysportlet9部件
 *
 * @export
 * @class BugSeverityPortlet
 * @extends {BugSeverityPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet9_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class BugSeverityPortlet extends BugSeverityPortletBase {}
</script>
