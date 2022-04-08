<template src="./task-usr2-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskUsr2GridViewBase } from './task-usr2-grid-view-base';
import view_grid from '@widgets/task/report-main-grid/report-main-grid.vue';

/**
 * 任务表格视图视图
 *
 * @export
 * @class TaskUsr2GridView
 * @extends {TaskUsr2GridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskUsr2GridView extends TaskUsr2GridViewBase {}
</script>
