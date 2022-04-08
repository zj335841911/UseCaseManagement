<template src="./by-product-tree-exp-viewtreeexpbar-treeexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ByProductTreeExpViewtreeexpbarTreeExpBarBase } from './by-product-tree-exp-viewtreeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/doc-lib/product-left-doc-lib-tree-treeview/product-left-doc-lib-tree-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class ByProductTreeExpViewtreeexpbarTreeExpBar
 * @extends {ByProductTreeExpViewtreeexpbarTreeExpBarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree,
         
    },
})
@VueLifeCycleProcessing()
export default class ByProductTreeExpViewtreeexpbarTreeExpBar extends ByProductTreeExpViewtreeexpbarTreeExpBarBase {}
</script>
