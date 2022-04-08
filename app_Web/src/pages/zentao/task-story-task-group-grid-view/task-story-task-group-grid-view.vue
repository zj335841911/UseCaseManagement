<template src="./task-story-task-group-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskStoryTaskGroupGridViewBase } from './task-story-task-group-grid-view-base';
import view_grid from '@widgets/task/story-task-group-grid/story-task-group-grid.vue';
import view_searchbar from '@widgets/task/custom-searchbar/custom-searchbar.vue';

/**
 * 任务表格视图（需求分组）视图
 *
 * @export
 * @class TaskStoryTaskGroupGridView
 * @extends {TaskStoryTaskGroupGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class TaskStoryTaskGroupGridView extends TaskStoryTaskGroupGridViewBase {}
</script>
