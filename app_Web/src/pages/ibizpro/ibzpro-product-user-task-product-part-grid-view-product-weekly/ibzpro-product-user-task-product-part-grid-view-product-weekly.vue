<template src="./ibzpro-product-user-task-product-part-grid-view-product-weekly.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzproProductUserTaskProductPartGridViewProductWeeklyBase } from './ibzpro-product-user-task-product-part-grid-view-product-weekly-base';
import view_grid from '@widgets/ibzpro-product-user-task/product-weekly-gird-grid/product-weekly-gird-grid.vue';

/**
 * 产品汇报用户任务表格视图视图
 *
 * @export
 * @class IbzproProductUserTaskProductPartGridViewProductWeekly
 * @extends {IbzproProductUserTaskProductPartGridViewProductWeeklyBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class IbzproProductUserTaskProductPartGridViewProductWeekly extends IbzproProductUserTaskProductPartGridViewProductWeeklyBase {}
</script>
