<template src="./sys-employee-dashboard-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysEmployeeDashboardViewBase } from './sys-employee-dashboard-view-base';
import view_dashboard from '@widgets/sys-employee/personal-info-dashboard/personal-info-dashboard.vue';

/**
 * 人员数据看板视图视图
 *
 * @export
 * @class SysEmployeeDashboardView
 * @extends {SysEmployeeDashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class SysEmployeeDashboardView extends SysEmployeeDashboardViewBase {}
</script>
