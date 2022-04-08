<template src="./product-grid-view-un-closed.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductGridView_UnClosedBase } from './product-grid-view-un-closed-base';
import view_grid from '@widgets/product/main2-grid/main2-grid.vue';

/**
 * 产品表格视图视图
 *
 * @export
 * @class ProductGridView_UnClosed
 * @extends {ProductGridView_UnClosedBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProductGridView_UnClosed extends ProductGridView_UnClosedBase {}
</script>
