<template src="./task-child-more-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskChildMoreGridViewBase } from './task-child-more-grid-view-base';
import view_searchbar from '@widgets/task/custom-searchbar/custom-searchbar.vue';
import view_grid from '@widgets/task/child-main-grid/child-main-grid.vue';

/**
 * 任务表格视图（子任务-更多）视图
 *
 * @export
 * @class TaskChildMoreGridView
 * @extends {TaskChildMoreGridViewBase}
 */
@Component({
    components: {
        view_searchbar, 
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskChildMoreGridView extends TaskChildMoreGridViewBase {}
</script>
