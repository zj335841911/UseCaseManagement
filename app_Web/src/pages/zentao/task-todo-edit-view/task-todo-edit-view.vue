<template src="./task-todo-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskTodoEditViewBase } from './task-todo-edit-view-base';
import view_form from '@widgets/task/pending-submission-form/pending-submission-form.vue';

/**
 * 任务编辑视图视图
 *
 * @export
 * @class TaskTodoEditView
 * @extends {TaskTodoEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TaskTodoEditView extends TaskTodoEditViewBase {}
</script>
