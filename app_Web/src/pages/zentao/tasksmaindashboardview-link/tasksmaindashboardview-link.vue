<template src="./tasksmaindashboardview-link.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Tasksmaindashboardview_linkBase } from './tasksmaindashboardview-link-base';
import view_dashboard from '@widgets/task/main-dashboard/main-dashboard.vue';

/**
 * 任务主数据看板视图视图
 *
 * @export
 * @class Tasksmaindashboardview_link
 * @extends {Tasksmaindashboardview_linkBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class Tasksmaindashboardview_link extends Tasksmaindashboardview_linkBase { }
</script>
