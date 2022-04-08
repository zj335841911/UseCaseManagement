<template src="./product-sum-product-bug-type-sum-usr4-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductSumProductBugTypeSumUsr4GridViewBase } from './product-sum-product-bug-type-sum-usr4-grid-view-base';
import view_grid from '@widgets/product-sum/product-bug-type-sum-form-grid/product-bug-type-sum-form-grid.vue';

/**
 * 产品Bug类型统计表格视图视图
 *
 * @export
 * @class ProductSumProductBugTypeSumUsr4GridView
 * @extends {ProductSumProductBugTypeSumUsr4GridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProductSumProductBugTypeSumUsr4GridView extends ProductSumProductBugTypeSumUsr4GridViewBase {}
</script>
