<template src="./bug-resolution-project-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugResolution_ProjectPortletBase } from './bug-resolution-project-portlet-base';
import view_dashboard_BugResolutionProject_chart from '@widgets/bug/bug-resolution-project-chart/bug-resolution-project-chart.vue';
 

/**
 * dashboard_BugResolutionProject部件
 *
 * @export
 * @class BugResolution_ProjectPortlet
 * @extends {BugResolution_ProjectPortletBase}
 */
@Component({
    components: {
        view_dashboard_BugResolutionProject_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class BugResolution_ProjectPortlet extends BugResolution_ProjectPortletBase {}
</script>
