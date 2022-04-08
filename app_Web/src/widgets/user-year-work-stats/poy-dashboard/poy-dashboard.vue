<template src="./poy-dashboard.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { POYDashboardBase } from './poy-dashboard-base';
import view_dashboard_sysportlet6 from '@widgets/story/total-cur-opened-story-pri-portlet/total-cur-opened-story-pri-portlet.vue';
import view_dashboard_sysportlet7 from '@widgets/story/total-cur-opened-story-stage-portlet/total-cur-opened-story-stage-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/user-year-work-stats/month-opened-story-portlet/month-opened-story-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class POYDashboard
 * @extends {POYDashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet6,
        view_dashboard_sysportlet7,
        view_dashboard_sysportlet5,
         
    },
})
@VueLifeCycleProcessing()
export default class POYDashboard extends POYDashboardBase {}
</script>
