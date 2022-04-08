<template src="./task-task-group-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskTaskGroupGridViewBase } from './task-task-group-grid-view-base';
import view_grid from '@widgets/task/task-group-grid/task-group-grid.vue';
import view_searchbar from '@widgets/task/custom-searchbar/custom-searchbar.vue';

/**
 * 任务表格视图（任务分组）视图
 *
 * @export
 * @class TaskTaskGroupGridView
 * @extends {TaskTaskGroupGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class TaskTaskGroupGridView extends TaskTaskGroupGridViewBase {}
</script>
