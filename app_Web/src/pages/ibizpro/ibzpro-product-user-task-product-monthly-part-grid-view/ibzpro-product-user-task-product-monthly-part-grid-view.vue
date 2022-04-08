<template src="./ibzpro-product-user-task-product-monthly-part-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzproProductUserTaskProductMonthlyPartGridViewBase } from './ibzpro-product-user-task-product-monthly-part-grid-view-base';
import view_grid from '@widgets/ibzpro-product-user-task/product-monthly-gird-grid/product-monthly-gird-grid.vue';

/**
 * 产品汇报用户任务表格视图视图
 *
 * @export
 * @class IbzproProductUserTaskProductMonthlyPartGridView
 * @extends {IbzproProductUserTaskProductMonthlyPartGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class IbzproProductUserTaskProductMonthlyPartGridView extends IbzproProductUserTaskProductMonthlyPartGridViewBase {}
</script>
