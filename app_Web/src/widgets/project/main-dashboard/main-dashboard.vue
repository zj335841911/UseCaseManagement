<template src="./main-dashboard.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainDashboardBase } from './main-dashboard-base';
import view_dashboard_sysportlet6 from '@widgets/ibz-project-member/related-members-portlet/related-members-portlet.vue';
import view_dashboard_sysportlet4 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/project/project-main-toolbar-portlet/project-main-toolbar-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/action/project-trends-timeline-portlet/project-trends-timeline-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/project/dash-borad-info-view-portlet/dash-borad-info-view-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/burn/burn-down-chart-portlet/burn-down-chart-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class MainDashboard
 * @extends {MainDashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet6,
        view_dashboard_sysportlet4,
        view_dashboard_sysportlet5,
        view_dashboard_sysportlet2,
        view_dashboard_sysportlet3,
        view_dashboard_sysportlet1,
         
    },
})
@VueLifeCycleProcessing()
export default class MainDashboard extends MainDashboardBase {}
</script>
<style lang="less">
@import './main-dashboard.less';
</style>
