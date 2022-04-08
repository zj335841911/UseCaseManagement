<template src="./test-reportproject-dashboard-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestReportprojectDashboardViewBase } from './test-reportproject-dashboard-view-base';
import view_dashboard from '@widgets/test-report/project-main-dashboard/project-main-dashboard.vue';

/**
 * 测试报告数据看板视图视图
 *
 * @export
 * @class TestReportprojectDashboardView
 * @extends {TestReportprojectDashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class TestReportprojectDashboardView extends TestReportprojectDashboardViewBase {}
</script>
