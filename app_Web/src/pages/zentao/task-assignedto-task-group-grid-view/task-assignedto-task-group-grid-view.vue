<template src="./task-assignedto-task-group-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskAssignedtoTaskGroupGridViewBase } from './task-assignedto-task-group-grid-view-base';
import view_grid from '@widgets/task/assignedto-group-grid/assignedto-group-grid.vue';
import view_searchbar from '@widgets/task/custom-searchbar/custom-searchbar.vue';

/**
 * 任务表格视图（指派分组）视图
 *
 * @export
 * @class TaskAssignedtoTaskGroupGridView
 * @extends {TaskAssignedtoTaskGroupGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class TaskAssignedtoTaskGroupGridView extends TaskAssignedtoTaskGroupGridViewBase {}
</script>
