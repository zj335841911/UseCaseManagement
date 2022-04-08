<template src="./task-story-sub-task-new-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskStorySubTaskNewViewBase } from './task-story-sub-task-new-view-base';
import view_grid from '@widgets/task/story-sub-task-new-grid/story-sub-task-new-grid.vue';

/**
 * 需求批量分解视图
 *
 * @export
 * @class TaskStorySubTaskNewView
 * @extends {TaskStorySubTaskNewViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskStorySubTaskNewView extends TaskStorySubTaskNewViewBase {}
</script>
