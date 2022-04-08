<template src="./task-sub-task-new-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskSubTaskNewViewBase } from './task-sub-task-new-view-base';
import view_grid from '@widgets/sub-task/sub-task-new-grid/sub-task-new-grid.vue';

/**
 * 子任务视图
 *
 * @export
 * @class TaskSubTaskNewView
 * @extends {TaskSubTaskNewViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskSubTaskNewView extends TaskSubTaskNewViewBase {}
</script>
