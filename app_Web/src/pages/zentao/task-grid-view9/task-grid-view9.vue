<template src="./task-grid-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskGridView9Base } from './task-grid-view9-base';
import view_grid from '@widgets/task/report-main-zs-grid/report-main-zs-grid.vue';

/**
 * 任务表格视图视图
 *
 * @export
 * @class TaskGridView9
 * @extends {TaskGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskGridView9 extends TaskGridView9Base {}
</script>
