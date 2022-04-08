<template src="./product-sum-story-sum-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductSumStorySumGridViewBase } from './product-sum-story-sum-grid-view-base';
import view_grid from '@widgets/product-sum/product-story-sum-grid/product-story-sum-grid.vue';
import view_searchform from '@widgets/product-sum/product-story-sum-searchform/product-story-sum-searchform.vue';

/**
 * 产品汇总表表格视图视图
 *
 * @export
 * @class ProductSumStorySumGridView
 * @extends {ProductSumStorySumGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class ProductSumStorySumGridView extends ProductSumStorySumGridViewBase {}
</script>
