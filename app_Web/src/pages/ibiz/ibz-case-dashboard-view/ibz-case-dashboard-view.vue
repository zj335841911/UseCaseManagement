<template src="./ibz-case-dashboard-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzCaseDashboardViewBase } from './ibz-case-dashboard-view-base';
import view_dashboard from '@widgets/ibz-case/main-dashboard/main-dashboard.vue';

/**
 * 用例库用例数据看板视图视图
 *
 * @export
 * @class IbzCaseDashboardView
 * @extends {IbzCaseDashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class IbzCaseDashboardView extends IbzCaseDashboardViewBase {}
</script>
