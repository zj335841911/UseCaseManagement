<template src="./product-stats-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductStatsGridViewBase } from './product-stats-grid-view-base';
import view_grid from '@widgets/product-stats/product-quantity-gird-grid/product-quantity-gird-grid.vue';

/**
 * 产品统计表格视图视图
 *
 * @export
 * @class ProductStatsGridView
 * @extends {ProductStatsGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProductStatsGridView extends ProductStatsGridViewBase {}
</script>
