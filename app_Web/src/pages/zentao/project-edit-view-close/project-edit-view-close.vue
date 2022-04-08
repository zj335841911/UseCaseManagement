<template src="./project-edit-view-close.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectEditView_CloseBase } from './project-edit-view-close-base';
import view_form from '@widgets/project/suspend-nclose-form/suspend-nclose-form.vue';

/**
 * 项目视图
 *
 * @export
 * @class ProjectEditView_Close
 * @extends {ProjectEditView_CloseBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectEditView_Close extends ProjectEditView_CloseBase {}
</script>
