<template src="./product-module-grid-view-branch.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductModuleGridViewBranchBase } from './product-module-grid-view-branch-base';
import view_grid from '@widgets/product-module/main-branch-grid/main-branch-grid.vue';

/**
 * 产品模块表格视图视图
 *
 * @export
 * @class ProductModuleGridViewBranch
 * @extends {ProductModuleGridViewBranchBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProductModuleGridViewBranch extends ProductModuleGridViewBranchBase {}
</script>
