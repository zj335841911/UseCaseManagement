<template src="./storysmaindashboardview-link.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Storysmaindashboardview_linkBase } from './storysmaindashboardview-link-base';
import view_dashboard from '@widgets/story/main-panel-dashboard/main-panel-dashboard.vue';

/**
 * 需求数据看板视图视图
 *
 * @export
 * @class Storysmaindashboardview_link
 * @extends {Storysmaindashboardview_linkBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class Storysmaindashboardview_link extends Storysmaindashboardview_linkBase { }
</script>
