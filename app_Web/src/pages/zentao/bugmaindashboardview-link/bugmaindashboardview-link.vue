<template src="./bugmaindashboardview-link.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Bugmaindashboardview_linkBase } from './bugmaindashboardview-link-base';
import view_dashboard from '@widgets/bug/main-dashboard/main-dashboard.vue';

/**
 * Bug数据看板视图视图
 *
 * @export
 * @class Bugmaindashboardview_link
 * @extends {Bugmaindashboardview_linkBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class Bugmaindashboardview_link extends Bugmaindashboardview_linkBase {}
</script>
