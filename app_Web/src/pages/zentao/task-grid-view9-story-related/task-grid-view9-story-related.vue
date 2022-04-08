<template src="./task-grid-view9-story-related.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskGridView9_StoryRelatedBase } from './task-grid-view9-story-related-base';
import view_grid from '@widgets/task/story-related-grid/story-related-grid.vue';

/**
 * 任务表格视图视图
 *
 * @export
 * @class TaskGridView9_StoryRelated
 * @extends {TaskGridView9_StoryRelatedBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskGridView9_StoryRelated extends TaskGridView9_StoryRelatedBase {}
</script>
