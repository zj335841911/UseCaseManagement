<template src="./bug-opened-by-project-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugOpenedBy_ProjectPortletBase } from './bug-opened-by-project-portlet-base';
import view_dashboard_sysportlet13_chart from '@widgets/bug/bug-opened-by-project-chart/bug-opened-by-project-chart.vue';
 

/**
 * dashboard_sysportlet13部件
 *
 * @export
 * @class BugOpenedBy_ProjectPortlet
 * @extends {BugOpenedBy_ProjectPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet13_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class BugOpenedBy_ProjectPortlet extends BugOpenedBy_ProjectPortletBase {}
</script>
