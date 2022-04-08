<template src="./product-test-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductTestGridViewBase } from './product-test-grid-view-base';
import view_grid from '@widgets/product/test-grid/test-grid.vue';
import view_searchbar from '@widgets/product/custom-searchbar/custom-searchbar.vue';

/**
 * 所有产品视图
 *
 * @export
 * @class ProductTestGridView
 * @extends {ProductTestGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class ProductTestGridView extends ProductTestGridViewBase {}
</script>
