<template src="./project-main-dashboard-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectMainDashboardViewBase } from './project-main-dashboard-view-base';
import view_dashboard from '@widgets/project/main-dashboard/main-dashboard.vue';

/**
 * 项目数据看板视图视图
 *
 * @export
 * @class ProjectMainDashboardView
 * @extends {ProjectMainDashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectMainDashboardView extends ProjectMainDashboardViewBase {
    /**
     * 关闭
     *
     * @param {*} $event
     * @memberof ProjectMainDashboardViewBase
     */
    public closeView($event: any) {
        this.$emit('closeview', $event)
    }
}
</script>
