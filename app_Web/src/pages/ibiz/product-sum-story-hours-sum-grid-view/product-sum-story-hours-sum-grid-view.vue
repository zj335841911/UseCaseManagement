<template src="./product-sum-story-hours-sum-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductSumStoryHoursSumGridViewBase } from './product-sum-story-hours-sum-grid-view-base';
import view_grid from '@widgets/product-sum/product-story-hours-sum-grid/product-story-hours-sum-grid.vue';
import view_searchform from '@widgets/product-sum/product-story-sum-searchform/product-story-sum-searchform.vue';

/**
 * 产品汇总表表格视图视图
 *
 * @export
 * @class ProductSumStoryHoursSumGridView
 * @extends {ProductSumStoryHoursSumGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class ProductSumStoryHoursSumGridView extends ProductSumStoryHoursSumGridViewBase {}
</script>
