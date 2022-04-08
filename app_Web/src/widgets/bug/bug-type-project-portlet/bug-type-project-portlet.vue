<template src="./bug-type-project-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugType_ProjectPortletBase } from './bug-type-project-portlet-base';
import view_dashboard_BugTypeProject_chart from '@widgets/bug/bug-type-project-chart/bug-type-project-chart.vue';
 

/**
 * dashboard_BugTypeProject部件
 *
 * @export
 * @class BugType_ProjectPortlet
 * @extends {BugType_ProjectPortletBase}
 */
@Component({
    components: {
        view_dashboard_BugTypeProject_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class BugType_ProjectPortlet extends BugType_ProjectPortletBase {}
</script>
