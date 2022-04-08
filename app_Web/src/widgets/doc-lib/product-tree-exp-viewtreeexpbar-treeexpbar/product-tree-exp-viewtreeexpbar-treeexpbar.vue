<template src="./product-tree-exp-viewtreeexpbar-treeexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductTreeExpViewtreeexpbarTreeExpBarBase } from './product-tree-exp-viewtreeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/doc-lib/loo-product-doc-lib-tree-treeview/loo-product-doc-lib-tree-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class ProductTreeExpViewtreeexpbarTreeExpBar
 * @extends {ProductTreeExpViewtreeexpbarTreeExpBarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree,
         
    },
})
@VueLifeCycleProcessing()
export default class ProductTreeExpViewtreeexpbarTreeExpBar extends ProductTreeExpViewtreeexpbarTreeExpBarBase {}
</script>
