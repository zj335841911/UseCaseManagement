<template src="./todo-dashboard-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TodoDashboardViewBase } from './todo-dashboard-view-base';
import view_dashboard from '@widgets/todo/main-dashboard/main-dashboard.vue';

/**
 * 待办事宜表数据看板视图视图
 *
 * @export
 * @class TodoDashboardView
 * @extends {TodoDashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class TodoDashboardView extends TodoDashboardViewBase {}
</script>
