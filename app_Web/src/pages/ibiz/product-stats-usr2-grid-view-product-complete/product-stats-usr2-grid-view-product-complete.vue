<template src="./product-stats-usr2-grid-view-product-complete.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductStatsUsr2GridViewPRoductCompleteBase } from './product-stats-usr2-grid-view-product-complete-base';
import view_grid from '@widgets/product-stats/product-complete-table-grid/product-complete-table-grid.vue';

/**
 * 产品统计表格视图视图
 *
 * @export
 * @class ProductStatsUsr2GridViewPRoductComplete
 * @extends {ProductStatsUsr2GridViewPRoductCompleteBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProductStatsUsr2GridViewPRoductComplete extends ProductStatsUsr2GridViewPRoductCompleteBase {}
</script>
