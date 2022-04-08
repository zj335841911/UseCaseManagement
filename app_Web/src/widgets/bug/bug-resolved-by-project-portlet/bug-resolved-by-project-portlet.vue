<template src="./bug-resolved-by-project-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugResolvedBy_ProjectPortletBase } from './bug-resolved-by-project-portlet-base';
import view_dashboard_sysportlet15_chart from '@widgets/bug/bug-resolved-by-project-chart/bug-resolved-by-project-chart.vue';
 

/**
 * dashboard_sysportlet15部件
 *
 * @export
 * @class BugResolvedBy_ProjectPortlet
 * @extends {BugResolvedBy_ProjectPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet15_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class BugResolvedBy_ProjectPortlet extends BugResolvedBy_ProjectPortletBase {}
</script>
