<template src="./ibzpro-project-user-task-monthly-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzproProjectUserTaskMonthlyGridViewBase } from './ibzpro-project-user-task-monthly-grid-view-base';
import view_grid from '@widgets/ibzpro-project-user-task/monthly-main-grid/monthly-main-grid.vue';

/**
 * 项目汇报用户任务表格视图视图
 *
 * @export
 * @class IbzproProjectUserTaskMonthlyGridView
 * @extends {IbzproProjectUserTaskMonthlyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class IbzproProjectUserTaskMonthlyGridView extends IbzproProjectUserTaskMonthlyGridViewBase {}
</script>
