<template src="./project-portal-view-db-dashboard.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectPortalView_dbDashboardBase } from './project-portal-view-db-dashboard-base';
import view_db_assignedtometaskportlet from '@widgets/task/assign-to-me-portlet/assign-to-me-portlet.vue';
import view_db_projectstatusportlet from '@widgets/project/project-status-bar-portlet/project-status-bar-portlet.vue';
import view_db_projectexpportlet from '@widgets/project/project-exp-view-portlet/project-exp-view-portlet.vue';
import view_db_projectunclosedportlet from '@widgets/project/un-closed-project-portlet/un-closed-project-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class ProjectPortalView_dbDashboard
 * @extends {ProjectPortalView_dbDashboardBase}
 */
@Component({
    components: {
        view_db_assignedtometaskportlet,
        view_db_projectstatusportlet,
        view_db_projectexpportlet,
        view_db_projectunclosedportlet,
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectPortalView_dbDashboard extends ProjectPortalView_dbDashboardBase {}
</script>
