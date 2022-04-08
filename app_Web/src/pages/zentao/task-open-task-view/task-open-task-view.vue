<template src="./task-open-task-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskOpenTaskViewBase } from './task-open-task-view-base';
import view_form from '@widgets/task/start-form-form/start-form-form.vue';

/**
 * 开始任务视图
 *
 * @export
 * @class TaskOpenTaskView
 * @extends {TaskOpenTaskViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TaskOpenTaskView extends TaskOpenTaskViewBase {}
</script>
