<template src="./dashboard-dashboard.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashboardDashboardBase } from './dashboard-dashboard-base';
import view_dashboard_sysportlet6 from '@widgets/project/involved-project-portlet/involved-project-portlet.vue';
import view_dashboard_sysportlet7 from '@widgets/user-year-work-stats/involved-project-story-task-bug-portlet/involved-project-story-task-bug-portlet.vue';
import view_dashboard_sysportlet4 from '@widgets/user-year-work-stats/resolve-bug-portlet/resolve-bug-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/user-year-work-stats/finish-task-and-bug-portlet/finish-task-and-bug-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/user-year-work-stats/info-portlet/info-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/user-year-work-stats/finishedby-task-portlet/finishedby-task-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/user-year-work-stats/title-portlet/title-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class DashboardDashboard
 * @extends {DashboardDashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet6, 
        view_dashboard_sysportlet7, 
        view_dashboard_sysportlet4, 
        view_dashboard_sysportlet5, 
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
@VueLifeCycleProcessing()
export default class DashboardDashboard extends DashboardDashboardBase { }
</script>
