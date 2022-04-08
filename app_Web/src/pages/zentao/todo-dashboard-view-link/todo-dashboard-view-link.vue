<template src="./todo-dashboard-view-link.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TodoDashboardView_LinkBase } from './todo-dashboard-view-link-base';
import view_dashboard from '@widgets/todo/main-dashboard/main-dashboard.vue';

/**
 * 待办事宜表数据看板视图视图
 *
 * @export
 * @class TodoDashboardView_Link
 * @extends {TodoDashboardView_LinkBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class TodoDashboardView_Link extends TodoDashboardView_LinkBase { }
</script>
