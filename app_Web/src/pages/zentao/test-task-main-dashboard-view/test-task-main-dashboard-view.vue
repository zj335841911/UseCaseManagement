<template src="./test-task-main-dashboard-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskMainDashboardViewBase } from './test-task-main-dashboard-view-base';
import view_dashboard from '@widgets/test-task/dash-board-dashboard/dash-board-dashboard.vue';

/**
 * 测试版本数据看板视图视图
 *
 * @export
 * @class TestTaskMainDashboardView
 * @extends {TestTaskMainDashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class TestTaskMainDashboardView extends TestTaskMainDashboardViewBase {
    /**
     * 关闭
     *
     * @param {*} $event
     * @memberof ProjectMainDashboardViewBase
     */
    public closeView($event: any) {
        this.$emit('closeview', $event)
        super.closeView($event);
    }
}
</script>
