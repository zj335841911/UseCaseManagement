<template src="./bug-module-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugModulePortletBase } from './bug-module-portlet-base';
import view_dashboard_sysportlet14_chart from '@widgets/bug/bug-module-chart/bug-module-chart.vue';
 

/**
 * dashboard_sysportlet14部件
 *
 * @export
 * @class BugModulePortlet
 * @extends {BugModulePortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet14_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class BugModulePortlet extends BugModulePortletBase {}
</script>
