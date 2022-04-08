<template src="./project-stats-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStatsEditViewBase } from './project-stats-edit-view-base';
import view_form from '@widgets/project-stats/main-form/main-form.vue';

/**
 * 项目统计编辑视图视图
 *
 * @export
 * @class ProjectStatsEditView
 * @extends {ProjectStatsEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectStatsEditView extends ProjectStatsEditViewBase {}
</script>
