<template src="./task-main-dashboard-view-link.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskMainDashboardView_LinkBase } from './task-main-dashboard-view-link-base';
import view_dashboard from '@widgets/task/main-dashboard/main-dashboard.vue';

/**
 * 任务主数据看板视图视图
 *
 * @export
 * @class TaskMainDashboardView_Link
 * @extends {TaskMainDashboardView_LinkBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class TaskMainDashboardView_Link extends TaskMainDashboardView_LinkBase { }
</script>
