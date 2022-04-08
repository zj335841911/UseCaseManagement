<template src="./taskreport-pickup-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskreportPickupGridViewBase } from './taskreport-pickup-grid-view-base';
import view_grid from '@widgets/task/report-main-grid/report-main-grid.vue';
import view_searchform from '@widgets/task/default-searchform/default-searchform.vue';

/**
 * 任务选择表格视图（汇报）视图
 *
 * @export
 * @class TaskreportPickupGridView
 * @extends {TaskreportPickupGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class TaskreportPickupGridView extends TaskreportPickupGridViewBase {}
</script>
