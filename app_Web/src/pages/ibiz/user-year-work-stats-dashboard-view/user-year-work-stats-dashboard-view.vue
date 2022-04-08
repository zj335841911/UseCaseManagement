<template src="./user-year-work-stats-dashboard-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserYearWorkStatsDashboardViewBase } from './user-year-work-stats-dashboard-view-base';
import view_dashboard from '@widgets/user-year-work-stats/devy-dashboard/devy-dashboard.vue';

/**
 * 用户年度工作内容统计数据看板视图视图
 *
 * @export
 * @class UserYearWorkStatsDashboardView
 * @extends {UserYearWorkStatsDashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class UserYearWorkStatsDashboardView extends UserYearWorkStatsDashboardViewBase {}
</script>
