<template src="./task-cancel-task-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskCancelTaskViewBase } from './task-cancel-task-view-base';
import view_form from '@widgets/task/close-pause-cancel-form-form/close-pause-cancel-form-form.vue';

/**
 * 取消任务视图
 *
 * @export
 * @class TaskCancelTaskView
 * @extends {TaskCancelTaskViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TaskCancelTaskView extends TaskCancelTaskViewBase {}
</script>
