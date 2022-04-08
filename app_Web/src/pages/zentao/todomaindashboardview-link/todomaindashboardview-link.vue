<template src="./todomaindashboardview-link.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Todomaindashboardview_linkBase } from './todomaindashboardview-link-base';
import view_dashboard from '@widgets/todo/main-dashboard/main-dashboard.vue';

/**
 * 待办事宜表数据看板视图视图
 *
 * @export
 * @class Todomaindashboardview_link
 * @extends {Todomaindashboardview_linkBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class Todomaindashboardview_link extends Todomaindashboardview_linkBase {}
</script>
