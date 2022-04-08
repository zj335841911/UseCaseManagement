<template src="./main-dashboard-test-dashboard.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainDashboardTestDashboardBase } from './main-dashboard-test-dashboard-base';
import view_dashboard_sysportlet4 from '@widgets/case/test-dashboard-quick-action-portlet/test-dashboard-quick-action-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/case/test-main-detail-portlet/test-main-detail-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/case/main-info-portlet/main-info-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class MainDashboardTestDashboard
 * @extends {MainDashboardTestDashboardBase}
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
export default class MainDashboardTestDashboard extends MainDashboardTestDashboardBase {}
</script>
<style lang="less">
@import './main-dashboard-test-dashboard.less';
</style>
