<template src="./product-pickup-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductPickupGridViewBase } from './product-pickup-grid-view-base';
import view_grid from '@widgets/product/main-grid/main-grid.vue';
import view_searchform from '@widgets/product/default-searchform/default-searchform.vue';

/**
 * 产品选择表格视图视图
 *
 * @export
 * @class ProductPickupGridView
 * @extends {ProductPickupGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class ProductPickupGridView extends ProductPickupGridViewBase {}
</script>
