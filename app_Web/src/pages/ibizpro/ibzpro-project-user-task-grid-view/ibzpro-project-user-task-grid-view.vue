<template src="./ibzpro-project-user-task-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzproProjectUserTaskGridViewBase } from './ibzpro-project-user-task-grid-view-base';
import view_grid from '@widgets/ibzpro-project-user-task/main-grid/main-grid.vue';

/**
 * 项目汇报用户任务表格视图视图
 *
 * @export
 * @class IbzproProjectUserTaskGridView
 * @extends {IbzproProjectUserTaskGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class IbzproProjectUserTaskGridView extends IbzproProjectUserTaskGridViewBase {}
</script>
