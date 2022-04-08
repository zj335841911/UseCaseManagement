<template src="./product-sum-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductSumGridViewBase } from './product-sum-grid-view-base';
import view_grid from '@widgets/product-sum/main-grid/main-grid.vue';
import view_searchform from '@widgets/product-sum/default-searchform/default-searchform.vue';

/**
 * 产品汇总表表格视图视图
 *
 * @export
 * @class ProductSumGridView
 * @extends {ProductSumGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class ProductSumGridView extends ProductSumGridViewBase {}
</script>
