<template src="./task-estimate-look-grid-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskEstimateLookGridView9Base } from './task-estimate-look-grid-view9-base';
import view_grid from '@widgets/task-estimate/main-look-grid/main-look-grid.vue';

/**
 * 任务预计表格视图视图
 *
 * @export
 * @class TaskEstimateLookGridView9
 * @extends {TaskEstimateLookGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskEstimateLookGridView9 extends TaskEstimateLookGridView9Base {}
</script>
