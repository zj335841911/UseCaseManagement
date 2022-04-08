<template src="./dev-dashboard.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DEVDashboardBase } from './dev-dashboard-base';
import view_dashboard_sysportlet6 from '@widgets/project/involved-project-portlet/involved-project-portlet.vue';
import view_dashboard_sysportlet7 from '@widgets/user-year-work-stats/involved-project-story-task-bug-portlet/involved-project-story-task-bug-portlet.vue';
import view_dashboard_sysportlet4 from '@widgets/bug/cur-user-resolve-bug-portlet/cur-user-resolve-bug-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/user-year-work-stats/finish-task-and-bug-portlet/finish-task-and-bug-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/user-year-work-stats/info-portlet/info-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/task/cur-finishedby-task-portlet/cur-finishedby-task-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class DEVDashboard
 * @extends {DEVDashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet6, 
        view_dashboard_sysportlet7, 
        view_dashboard_sysportlet4, 
        view_dashboard_sysportlet5, 
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
         
    }
})
@VueLifeCycleProcessing()
export default class DEVDashboard extends DEVDashboardBase { }
</script>
