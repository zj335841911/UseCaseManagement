<template src="./task-main-my-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskMainMyGridViewBase } from './task-main-my-grid-view-base';
import view_grid from '@widgets/task/my-group-main-grid/my-group-main-grid.vue';
import view_searchbar from '@widgets/task/custom-searchbar/custom-searchbar.vue';

/**
 * 任务表格视图视图
 *
 * @export
 * @class TaskMainMyGridView
 * @extends {TaskMainMyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class TaskMainMyGridView extends TaskMainMyGridViewBase {}
</script>
