<template src="./ibz-my-territory-product-sum-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryProductSumTreeExpViewBase } from './ibz-my-territory-product-sum-tree-exp-view-base';
import view_treeexpbar from '@widgets/ibz-my-territory/product-sum-tree-exp-viewtreeexpbar-treeexpbar/product-sum-tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 我的地盘树导航视图（产品汇总表）视图
 *
 * @export
 * @class IbzMyTerritoryProductSumTreeExpView
 * @extends {IbzMyTerritoryProductSumTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryProductSumTreeExpView extends IbzMyTerritoryProductSumTreeExpViewBase {}
</script>
