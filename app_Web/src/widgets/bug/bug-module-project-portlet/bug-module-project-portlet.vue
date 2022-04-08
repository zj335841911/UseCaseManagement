<template src="./bug-module-project-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugModule_ProjectPortletBase } from './bug-module-project-portlet-base';
import view_dashboard_BugModuleProject_chart from '@widgets/bug/bug-module-project-chart/bug-module-project-chart.vue';
 

/**
 * dashboard_BugModuleProject部件
 *
 * @export
 * @class BugModule_ProjectPortlet
 * @extends {BugModule_ProjectPortletBase}
 */
@Component({
    components: {
        view_dashboard_BugModuleProject_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class BugModule_ProjectPortlet extends BugModule_ProjectPortletBase {}
</script>
