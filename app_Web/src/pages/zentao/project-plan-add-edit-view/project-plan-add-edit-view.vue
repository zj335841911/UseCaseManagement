<template src="./project-plan-add-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectPlanAddEditViewBase } from './project-plan-add-edit-view-base';
import view_form from '@widgets/project/new-plan-form/new-plan-form.vue';

/**
 * 项目编辑视图（计划添加）视图
 *
 * @export
 * @class ProjectPlanAddEditView
 * @extends {ProjectPlanAddEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectPlanAddEditView extends ProjectPlanAddEditViewBase {}
</script>
