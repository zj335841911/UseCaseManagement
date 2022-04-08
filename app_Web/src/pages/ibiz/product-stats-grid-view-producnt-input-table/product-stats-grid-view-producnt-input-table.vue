<template src="./product-stats-grid-view-producnt-input-table.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductStatsGridViewProducntInputTableBase } from './product-stats-grid-view-producnt-input-table-base';
import view_grid from '@widgets/product-stats/product-input-table-grid/product-input-table-grid.vue';

/**
 * 产品统计表格视图视图
 *
 * @export
 * @class ProductStatsGridViewProducntInputTable
 * @extends {ProductStatsGridViewProducntInputTableBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProductStatsGridViewProducntInputTable extends ProductStatsGridViewProducntInputTableBase {}
</script>
