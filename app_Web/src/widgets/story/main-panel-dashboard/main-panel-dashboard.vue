<template src="./main-panel-dashboard.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainPanelDashboardBase } from './main-panel-dashboard-base';
import view_dashboard_sysportlet4 from '@widgets/action/action-history-portlet/action-history-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/story/story-related-portlet/story-related-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/story/base-info-portlet/base-info-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/story/main-toolbar-portlet/main-toolbar-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/story/storyspec-portlet/storyspec-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class MainPanelDashboard
 * @extends {MainPanelDashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet4,
        view_dashboard_sysportlet5,
        view_dashboard_sysportlet2,
        view_dashboard_sysportlet3,
        view_dashboard_sysportlet1,
         
    },
})
@VueLifeCycleProcessing()
export default class MainPanelDashboard extends MainPanelDashboardBase {}
</script>
<style lang="less">
@import './main-panel-dashboard.less';
</style>
