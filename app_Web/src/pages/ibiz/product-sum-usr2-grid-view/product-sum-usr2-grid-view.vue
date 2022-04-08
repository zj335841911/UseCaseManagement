<template src="./product-sum-usr2-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductSumUsr2GridViewBase } from './product-sum-usr2-grid-view-base';
import view_grid from '@widgets/product-sum/product-plancnt-and-storycnt-po-grid/product-plancnt-and-storycnt-po-grid.vue';

/**
 * 产品计划数和需求数实体表格视图视图
 *
 * @export
 * @class ProductSumUsr2GridView
 * @extends {ProductSumUsr2GridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProductSumUsr2GridView extends ProductSumUsr2GridViewBase {}
</script>
