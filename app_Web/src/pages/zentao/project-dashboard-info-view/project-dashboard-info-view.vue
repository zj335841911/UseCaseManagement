<template src="./project-dashboard-info-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectDashboardInfoViewBase } from './project-dashboard-info-view-base';
import view_form from '@widgets/project/dash-board-info-form/dash-board-info-form.vue';

/**
 * 项目信息视图
 *
 * @export
 * @class ProjectDashboardInfoView
 * @extends {ProjectDashboardInfoViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectDashboardInfoView extends ProjectDashboardInfoViewBase {}
</script>
