<template src="./case-test-main-dashboard-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseTestMainDashboardViewBase } from './case-test-main-dashboard-view-base';
import view_dashboard from '@widgets/case/main-dashboard-test-dashboard/main-dashboard-test-dashboard.vue';

/**
 * 功能测试视图
 *
 * @export
 * @class CaseTestMainDashboardView
 * @extends {CaseTestMainDashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class CaseTestMainDashboardView extends CaseTestMainDashboardViewBase {}
</script>
