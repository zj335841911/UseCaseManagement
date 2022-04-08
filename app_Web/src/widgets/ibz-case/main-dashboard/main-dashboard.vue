<template src="./main-dashboard.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainDashboardBase } from './main-dashboard-base';
import view_dashboard_sysportlet4 from '@widgets/ibz-case/case-new-edit-portlet/case-new-edit-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/ibz-case/ibz-cases-portlet/ibz-cases-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/ibz-case/case-info-portlet/case-info-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/ibz-case/case-main-portlet/case-main-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class MainDashboard
 * @extends {MainDashboardBase}
 */
@Component({
    components: {
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
