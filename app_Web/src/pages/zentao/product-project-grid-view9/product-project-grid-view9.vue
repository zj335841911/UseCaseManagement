<template src="./product-project-grid-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductProjectGridView9Base } from './product-project-grid-view9-base';
import view_grid from '@widgets/product/main-project-grid/main-project-grid.vue';

/**
 * 产品表格视图（项目）视图
 *
 * @export
 * @class ProductProjectGridView9
 * @extends {ProductProjectGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProductProjectGridView9 extends ProductProjectGridView9Base {}
</script>
