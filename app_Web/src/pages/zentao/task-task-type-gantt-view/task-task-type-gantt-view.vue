<template src="./task-task-type-gantt-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskTaskTypeGanttViewBase } from './task-task-type-gantt-view-base';
import view_gantt from '@widgets/task/type-gantt-gantt/type-gantt-gantt.vue';

/**
 * 任务甘特视图视图
 *
 * @export
 * @class TaskTaskTypeGanttView
 * @extends {TaskTaskTypeGanttViewBase}
 */
@Component({
    components: {
        view_gantt, 
    }
})
@VueLifeCycleProcessing()
export default class TaskTaskTypeGanttView extends TaskTaskTypeGanttViewBase {}
</script>
