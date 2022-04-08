<template src="./ibzpro-project-user-task-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzproProjectUserTaskEditViewBase } from './ibzpro-project-user-task-edit-view-base';
import view_form from '@widgets/ibzpro-project-user-task/main-form/main-form.vue';

/**
 * 项目汇报用户任务编辑视图视图
 *
 * @export
 * @class IbzproProjectUserTaskEditView
 * @extends {IbzproProjectUserTaskEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzproProjectUserTaskEditView extends IbzproProjectUserTaskEditViewBase {}
</script>
