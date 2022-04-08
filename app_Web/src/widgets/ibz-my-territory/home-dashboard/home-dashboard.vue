<template src="./home-dashboard.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { HomeDashboardBase } from './home-dashboard-base';
import view_dashboard_sysportlet10 from '@widgets/todo/my-upcoming-portlet/my-upcoming-portlet.vue';
import view_dashboard_sysportlet6 from '@widgets/task/assign-to-me-portlet/assign-to-me-portlet.vue';
import view_dashboard_sysportlet7 from '@widgets/product/product-exp-view-portlet/product-exp-view-portlet.vue';
import view_dashboard_sysportlet11 from '@widgets/sys-update-log/last-update-portlet/last-update-portlet.vue';
import view_dashboard_sysportlet4 from '@widgets/bug/assigned-to-me-bug-portlet/assigned-to-me-bug-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/story/assigned-to-me-story-portlet/assigned-to-me-story-portlet.vue';
import view_dashboard_sysportlet12 from '@widgets/ibz-report/my-report-portlet/my-report-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/ibz-my-territory/my-work-portlet/my-work-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/action/all-trends-portlet/all-trends-portlet.vue';
import view_dashboard_sysportlet9 from '@widgets/product/text-exp-view-portlet/text-exp-view-portlet.vue';
import view_dashboard_sysportlet8 from '@widgets/project/project-exp-view-portlet/project-exp-view-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class HomeDashboard
 * @extends {HomeDashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet10,
        view_dashboard_sysportlet6,
        view_dashboard_sysportlet7,
        view_dashboard_sysportlet11,
        view_dashboard_sysportlet4,
        view_dashboard_sysportlet5,
        view_dashboard_sysportlet12,
        view_dashboard_sysportlet2,
        view_dashboard_sysportlet3,
        view_dashboard_sysportlet9,
        view_dashboard_sysportlet8,
         
    },
})
@VueLifeCycleProcessing()
export default class HomeDashboard extends HomeDashboardBase {}
</script>
