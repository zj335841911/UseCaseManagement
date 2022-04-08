<template src="./task-done-task-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskDoneTaskViewBase } from './task-done-task-view-base';
import view_form from '@widgets/task/complete-form-form/complete-form-form.vue';

/**
 * 完成任务视图
 *
 * @export
 * @class TaskDoneTaskView
 * @extends {TaskDoneTaskViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TaskDoneTaskView extends TaskDoneTaskViewBase {}
</script>
