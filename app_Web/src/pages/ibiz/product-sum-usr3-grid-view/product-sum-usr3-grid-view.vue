<template src="./product-sum-usr3-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductSumUsr3GridViewBase } from './product-sum-usr3-grid-view-base';
import view_grid from '@widgets/product-sum/product-bugcnt-qa-grid/product-bugcnt-qa-grid.vue';

/**
 * 产品汇总表表格视图视图
 *
 * @export
 * @class ProductSumUsr3GridView
 * @extends {ProductSumUsr3GridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProductSumUsr3GridView extends ProductSumUsr3GridViewBase {}
</script>
