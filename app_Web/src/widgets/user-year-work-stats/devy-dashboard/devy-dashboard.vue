<template src="./devy-dashboard.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DEVYDashboardBase } from './devy-dashboard-base';
import view_dashboard_sysportlet4 from '@widgets/bug/cur-user-resolve-bug-portlet/cur-user-resolve-bug-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/user-year-work-stats/finish-task-and-bug-portlet/finish-task-and-bug-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/task/cur-finishedby-task-portlet/cur-finishedby-task-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class DEVYDashboard
 * @extends {DEVYDashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet4,
        view_dashboard_sysportlet5,
        view_dashboard_sysportlet3,
         
    },
})
@VueLifeCycleProcessing()
export default class DEVYDashboard extends DEVYDashboardBase {}
</script>
