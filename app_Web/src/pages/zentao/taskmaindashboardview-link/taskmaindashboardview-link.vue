<template src="./taskmaindashboardview-link.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Taskmaindashboardview_linkBase } from './taskmaindashboardview-link-base';
import view_dashboard from '@widgets/task/main-dashboard/main-dashboard.vue';

/**
 * 任务主数据看板视图视图
 *
 * @export
 * @class Taskmaindashboardview_link
 * @extends {Taskmaindashboardview_linkBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class Taskmaindashboardview_link extends Taskmaindashboardview_linkBase {}
</script>
