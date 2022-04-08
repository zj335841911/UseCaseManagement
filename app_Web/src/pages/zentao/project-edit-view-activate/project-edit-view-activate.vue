<template src="./project-edit-view-activate.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectEditView_ActivateBase } from './project-edit-view-activate-base';
import view_form from '@widgets/project/activate-form/activate-form.vue';

/**
 * 项目视图
 *
 * @export
 * @class ProjectEditView_Activate
 * @extends {ProjectEditView_ActivateBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectEditView_Activate extends ProjectEditView_ActivateBase {}
</script>
