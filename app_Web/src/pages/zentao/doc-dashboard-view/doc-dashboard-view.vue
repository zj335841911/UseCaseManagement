<template src="./doc-dashboard-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocDashboardViewBase } from './doc-dashboard-view-base';
import view_dashboard from '@widgets/doc/main-dashboard/main-dashboard.vue';

/**
 * 文档数据看板视图视图
 *
 * @export
 * @class DocDashboardView
 * @extends {DocDashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class DocDashboardView extends DocDashboardViewBase {}
</script>
