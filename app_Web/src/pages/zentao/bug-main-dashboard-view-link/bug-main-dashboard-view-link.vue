<template src="./bug-main-dashboard-view-link.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugMainDashboardView_LinkBase } from './bug-main-dashboard-view-link-base';
import view_dashboard from '@widgets/bug/main-dashboard/main-dashboard.vue';

/**
 * Bug数据看板视图视图
 *
 * @export
 * @class BugMainDashboardView_Link
 * @extends {BugMainDashboardView_LinkBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class BugMainDashboardView_Link extends BugMainDashboardView_LinkBase { }
</script>
