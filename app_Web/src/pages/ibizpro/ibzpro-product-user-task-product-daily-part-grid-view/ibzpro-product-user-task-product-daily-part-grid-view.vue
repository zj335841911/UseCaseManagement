<template src="./ibzpro-product-user-task-product-daily-part-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzproProductUserTaskProductDailyPartGridViewBase } from './ibzpro-product-user-task-product-daily-part-grid-view-base';
import view_grid from '@widgets/ibzpro-product-user-task/product-daily-gird-grid/product-daily-gird-grid.vue';

/**
 * 产品汇报用户任务表格视图视图
 *
 * @export
 * @class IbzproProductUserTaskProductDailyPartGridView
 * @extends {IbzproProductUserTaskProductDailyPartGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class IbzproProductUserTaskProductDailyPartGridView extends IbzproProductUserTaskProductDailyPartGridViewBase {}
</script>
