<template src="./task-activation-task-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskActivationTaskViewBase } from './task-activation-task-view-base';
import view_form from '@widgets/task/activation-form/activation-form.vue';

/**
 * 激活任务视图
 *
 * @export
 * @class TaskActivationTaskView
 * @extends {TaskActivationTaskViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TaskActivationTaskView extends TaskActivationTaskViewBase {}
</script>
