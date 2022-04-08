<template src="./task-restart-task-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskRestartTaskViewBase } from './task-restart-task-view-base';
import view_form from '@widgets/task/start-form-form/start-form-form.vue';

/**
 * 继续任务视图
 *
 * @export
 * @class TaskRestartTaskView
 * @extends {TaskRestartTaskViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TaskRestartTaskView extends TaskRestartTaskViewBase {}
</script>
