<template src="./doc-lib-dashboard-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibDashboardViewBase } from './doc-lib-dashboard-view-base';
import view_dashboard from '@widgets/doc-lib/main-dashboard/main-dashboard.vue';

/**
 * 文档库数据看板视图视图
 *
 * @export
 * @class DocLibDashboardView
 * @extends {DocLibDashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibDashboardView extends DocLibDashboardViewBase {}
</script>
