<template src="./task-assign-task-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskAssignTaskViewBase } from './task-assign-task-view-base';
import view_form from '@widgets/task/assign-form-form/assign-form-form.vue';

/**
 * 指派任务视图
 *
 * @export
 * @class TaskAssignTaskView
 * @extends {TaskAssignTaskViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TaskAssignTaskView extends TaskAssignTaskViewBase {}
</script>
