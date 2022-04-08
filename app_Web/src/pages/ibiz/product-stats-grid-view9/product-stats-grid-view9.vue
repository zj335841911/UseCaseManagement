<template src="./product-stats-grid-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductStatsGridView9Base } from './product-stats-grid-view9-base';
import view_grid from '@widgets/product-stats/open-items-grid/open-items-grid.vue';

/**
 * 产品统计表格视图视图
 *
 * @export
 * @class ProductStatsGridView9
 * @extends {ProductStatsGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProductStatsGridView9 extends ProductStatsGridView9Base {}
</script>
