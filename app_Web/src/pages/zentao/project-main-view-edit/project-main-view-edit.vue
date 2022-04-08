<template src="./project-main-view-edit.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectMainView_EditBase } from './project-main-view-edit-base';
import view_form from '@widgets/project/main-edit-form/main-edit-form.vue';

/**
 * 项目编辑视图视图
 *
 * @export
 * @class ProjectMainView_Edit
 * @extends {ProjectMainView_EditBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectMainView_Edit extends ProjectMainView_EditBase {}
</script>
