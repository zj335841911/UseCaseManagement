<template src="./task-pri-task-group-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskPriTaskGroupGridViewBase } from './task-pri-task-group-grid-view-base';
import view_grid from '@widgets/task/pri-task-group-grid/pri-task-group-grid.vue';
import view_searchbar from '@widgets/task/custom-searchbar/custom-searchbar.vue';

/**
 * 任务表格视图（优先级分组）视图
 *
 * @export
 * @class TaskPriTaskGroupGridView
 * @extends {TaskPriTaskGroupGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class TaskPriTaskGroupGridView extends TaskPriTaskGroupGridViewBase {}
</script>
