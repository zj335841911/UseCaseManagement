<template src="./main-dashboard.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainDashboardBase } from './main-dashboard-base';
import view_dashboard_sysportlet4 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/product/product-main-toolbar-portlet/product-main-toolbar-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/action/product-trends-timeline-portlet/product-trends-timeline-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/product/product-info-portlet/product-info-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/product-life/get-roadmaps-portlet/get-roadmaps-portlet.vue';
 

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
