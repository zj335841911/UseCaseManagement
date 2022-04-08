<template src="./user-year-work-stats-podashboard-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserYearWorkStatsPODashboardViewBase } from './user-year-work-stats-podashboard-view-base';
import view_dashboard from '@widgets/user-year-work-stats/poy-dashboard/poy-dashboard.vue';

/**
 * 用户年度工作内容统计数据看板视图视图
 *
 * @export
 * @class UserYearWorkStatsPODashboardView
 * @extends {UserYearWorkStatsPODashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class UserYearWorkStatsPODashboardView extends UserYearWorkStatsPODashboardViewBase {}
</script>
