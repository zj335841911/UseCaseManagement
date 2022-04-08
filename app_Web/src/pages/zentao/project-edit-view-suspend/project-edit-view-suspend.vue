<template src="./project-edit-view-suspend.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectEditView_SuspendBase } from './project-edit-view-suspend-base';
import view_form from '@widgets/project/suspend-nclose-form/suspend-nclose-form.vue';

/**
 * 项目视图
 *
 * @export
 * @class ProjectEditView_Suspend
 * @extends {ProjectEditView_SuspendBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectEditView_Suspend extends ProjectEditView_SuspendBase {}
</script>
