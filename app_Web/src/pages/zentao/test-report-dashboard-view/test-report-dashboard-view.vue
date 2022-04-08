<template src="./test-report-dashboard-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestReportDashboardViewBase } from './test-report-dashboard-view-base';
import view_dashboard from '@widgets/test-report/main-dashboard/main-dashboard.vue';

/**
 * 测试报告数据看板视图视图
 *
 * @export
 * @class TestReportDashboardView
 * @extends {TestReportDashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class TestReportDashboardView extends TestReportDashboardViewBase {}
</script>
