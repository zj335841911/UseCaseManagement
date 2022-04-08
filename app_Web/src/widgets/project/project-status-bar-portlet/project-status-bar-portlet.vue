<template src="./project-status-bar-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStatusBarPortletBase } from './project-status-bar-portlet-base';
import view_db_projectstatusportlet_chart from '@widgets/project/project-status-bar-chart/project-status-bar-chart.vue';
 

/**
 * db_projectstatusportlet部件
 *
 * @export
 * @class ProjectStatusBarPortlet
 * @extends {ProjectStatusBarPortletBase}
 */
@Component({
    components: {
        view_db_projectstatusportlet_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectStatusBarPortlet extends ProjectStatusBarPortletBase {}
</script>
