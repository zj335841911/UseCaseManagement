<template src="./task-estimate-edit-grid-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskEstimateEditGridView9Base } from './task-estimate-edit-grid-view9-base';
import view_grid from '@widgets/task-estimate/main-edit-grid/main-edit-grid.vue';

/**
 * 任务预计表格视图视图
 *
 * @export
 * @class TaskEstimateEditGridView9
 * @extends {TaskEstimateEditGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskEstimateEditGridView9 extends TaskEstimateEditGridView9Base {}
</script>
