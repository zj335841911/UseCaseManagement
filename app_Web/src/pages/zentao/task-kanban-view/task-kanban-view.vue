<template src="./task-kanban-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskKanbanViewBase } from './task-kanban-view-base';
import view_kanban from '@widgets/task/task-kan-ban-kanban/task-kan-ban-kanban.vue';

/**
 * 任务看板视图视图
 *
 * @export
 * @class TaskKanbanView
 * @extends {TaskKanbanViewBase}
 */
@Component({
    components: {
        view_kanban, 
    }
})
@VueLifeCycleProcessing()
export default class TaskKanbanView extends TaskKanbanViewBase {}
</script>
