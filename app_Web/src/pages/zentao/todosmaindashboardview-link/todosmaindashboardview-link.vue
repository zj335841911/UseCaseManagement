<template src="./todosmaindashboardview-link.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Todosmaindashboardview_linkBase } from './todosmaindashboardview-link-base';
import view_dashboard from '@widgets/todo/main-dashboard/main-dashboard.vue';

/**
 * 待办事宜表数据看板视图视图
 *
 * @export
 * @class Todosmaindashboardview_link
 * @extends {Todosmaindashboardview_linkBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class Todosmaindashboardview_link extends Todosmaindashboardview_linkBase { }
</script>
