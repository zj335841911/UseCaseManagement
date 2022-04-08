<template src="./case-main-dashboard-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseMainDashboardViewBase } from './case-main-dashboard-view-base';
import view_dashboard from '@widgets/case/main-dashboard-dashboard/main-dashboard-dashboard.vue';

/**
 * 功能测试视图
 *
 * @export
 * @class CaseMainDashboardView
 * @extends {CaseMainDashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class CaseMainDashboardView extends CaseMainDashboardViewBase {}
</script>
