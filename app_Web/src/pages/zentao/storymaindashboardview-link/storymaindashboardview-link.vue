<template src="./storymaindashboardview-link.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Storymaindashboardview_linkBase } from './storymaindashboardview-link-base';
import view_dashboard from '@widgets/story/main-panel-dashboard/main-panel-dashboard.vue';

/**
 * 需求数据看板视图视图
 *
 * @export
 * @class Storymaindashboardview_link
 * @extends {Storymaindashboardview_linkBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class Storymaindashboardview_link extends Storymaindashboardview_linkBase {}
</script>
