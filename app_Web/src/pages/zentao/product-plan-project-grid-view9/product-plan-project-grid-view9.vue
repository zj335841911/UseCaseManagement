<template src="./product-plan-project-grid-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductPlanProjectGridView9Base } from './product-plan-project-grid-view9-base';
import view_grid from '@widgets/product-plan/main-project-grid/main-project-grid.vue';

/**
 * 产品计划表格视图（项目）视图
 *
 * @export
 * @class ProductPlanProjectGridView9
 * @extends {ProductPlanProjectGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProductPlanProjectGridView9 extends ProductPlanProjectGridView9Base {}
</script>
