<template src="./main-dashboard.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainDashboardBase } from './main-dashboard-base';
import view_dashboard_sysportlet4 from '@widgets/todo/todoaction-portlet/todoaction-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/todo/todo-dashboard-actions-portlet/todo-dashboard-actions-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/todo/todo-desc-portlet/todo-desc-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/todo/todo-base-portlet/todo-base-portlet.vue';
 

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
