<template src="./task-estimate-grid-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskEstimateGridView9Base } from './task-estimate-grid-view9-base';
import view_grid from '@widgets/ibztask-estimate/main-grid/main-grid.vue';

/**
 * 任务预计表格视图视图
 *
 * @export
 * @class TaskEstimateGridView9
 * @extends {TaskEstimateGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskEstimateGridView9 extends TaskEstimateGridView9Base {}
</script>
