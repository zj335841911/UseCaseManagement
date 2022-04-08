<template src="./test-suite-main-dashboard-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestSuiteMainDashboardViewBase } from './test-suite-main-dashboard-view-base';
import view_dashboard from '@widgets/test-suite/main-dashboard/main-dashboard.vue';

/**
 * 测试套件数据看板视图视图
 *
 * @export
 * @class TestSuiteMainDashboardView
 * @extends {TestSuiteMainDashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class TestSuiteMainDashboardView extends TestSuiteMainDashboardViewBase {}
</script>
