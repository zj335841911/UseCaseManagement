<template src="./dash-board-dashboard.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashboardDashboardBase } from './dash-board-dashboard-base';
import view_dashboard_sysportlet4 from '@widgets/test-task/action-bar-portlet/action-bar-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/test-task/main-info-portlet/main-info-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/test-task/main-detail-portlet/main-detail-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class DashboardDashboard
 * @extends {DashboardDashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet4,
        view_dashboard_sysportlet2,
        view_dashboard_sysportlet3,
        view_dashboard_sysportlet1,
         
    },
})
@VueLifeCycleProcessing()
export default class DashboardDashboard extends DashboardDashboardBase {}
</script>
<style lang="less">
@import './dash-board-dashboard.less';
</style>
