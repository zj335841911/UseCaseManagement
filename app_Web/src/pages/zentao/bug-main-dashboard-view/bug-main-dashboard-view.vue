<template src="./bug-main-dashboard-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugMainDashboardViewBase } from './bug-main-dashboard-view-base';
import view_dashboard from '@widgets/bug/main-dashboard/main-dashboard.vue';

/**
 * Bug数据看板视图视图
 *
 * @export
 * @class BugMainDashboardView
 * @extends {BugMainDashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class BugMainDashboardView extends BugMainDashboardViewBase {}
</script>
