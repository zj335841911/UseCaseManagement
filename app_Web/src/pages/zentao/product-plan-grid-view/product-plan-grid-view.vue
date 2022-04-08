<template src="./product-plan-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductPlanGridViewBase } from './product-plan-grid-view-base';
import view_grid from '@widgets/product-plan/main-info-grid/main-info-grid.vue';
import view_searchbar from '@widgets/product-plan/custom-searchbar/custom-searchbar.vue';

/**
 * 产品计划表格视图视图
 *
 * @export
 * @class ProductPlanGridView
 * @extends {ProductPlanGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class ProductPlanGridView extends ProductPlanGridViewBase {}
</script>
