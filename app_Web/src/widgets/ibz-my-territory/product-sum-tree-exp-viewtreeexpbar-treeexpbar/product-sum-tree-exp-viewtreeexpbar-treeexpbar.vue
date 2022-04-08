<template src="./product-sum-tree-exp-viewtreeexpbar-treeexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductSumTreeExpViewtreeexpbarTreeExpBarBase } from './product-sum-tree-exp-viewtreeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/ibz-my-territory/product-sum-treeview/product-sum-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class ProductSumTreeExpViewtreeexpbarTreeExpBar
 * @extends {ProductSumTreeExpViewtreeexpbarTreeExpBarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree,
         
    },
})
@VueLifeCycleProcessing()
export default class ProductSumTreeExpViewtreeexpbarTreeExpBar extends ProductSumTreeExpViewtreeexpbarTreeExpBarBase {}
</script>
