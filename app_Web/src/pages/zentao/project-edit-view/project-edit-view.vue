<template src="./project-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectEditViewBase } from './project-edit-view-base';
import view_form from '@widgets/project/new-form-form/new-form-form.vue';

/**
 * 项目视图
 *
 * @export
 * @class ProjectEditView
 * @extends {ProjectEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectEditView extends ProjectEditViewBase {}
</script>
