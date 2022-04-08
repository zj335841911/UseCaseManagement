<template src="./task-main-grid-view9-child.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskMainGridView9_ChildBase } from './task-main-grid-view9-child-base';
import view_grid from '@widgets/task/main2-grid/main2-grid.vue';

/**
 * 任务表格视图视图
 *
 * @export
 * @class TaskMainGridView9_Child
 * @extends {TaskMainGridView9_ChildBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskMainGridView9_Child extends TaskMainGridView9_ChildBase {}
</script>
