<template src="./bug-opened-by-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugOpenedByPortletBase } from './bug-opened-by-portlet-base';
import view_dashboard_sysportlet13_chart from '@widgets/bug/bug-opened-by-chart/bug-opened-by-chart.vue';
 

/**
 * dashboard_sysportlet13部件
 *
 * @export
 * @class BugOpenedByPortlet
 * @extends {BugOpenedByPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet13_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class BugOpenedByPortlet extends BugOpenedByPortletBase {}
</script>
