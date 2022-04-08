<template src="./user-year-work-stats-qadashboard-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserYearWorkStatsQADashboardViewBase } from './user-year-work-stats-qadashboard-view-base';
import view_dashboard from '@widgets/user-year-work-stats/qay-dashboard/qay-dashboard.vue';

/**
 * 用户年度工作内容统计数据看板视图视图
 *
 * @export
 * @class UserYearWorkStatsQADashboardView
 * @extends {UserYearWorkStatsQADashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class UserYearWorkStatsQADashboardView extends UserYearWorkStatsQADashboardViewBase {}
</script>
