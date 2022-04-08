<template src="./task-grid-view9-assigned-to-me.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskGridView9_AssignedToMeBase } from './task-grid-view9-assigned-to-me-base';
import view_grid from '@widgets/task/main2-my-grid/main2-my-grid.vue';

/**
 * 任务表格视图视图
 *
 * @export
 * @class TaskGridView9_AssignedToMe
 * @extends {TaskGridView9_AssignedToMeBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskGridView9_AssignedToMe extends TaskGridView9_AssignedToMeBase {}
</script>
