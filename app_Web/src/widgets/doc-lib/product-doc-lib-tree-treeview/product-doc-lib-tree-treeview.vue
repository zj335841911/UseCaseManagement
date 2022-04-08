<template src="./product-doc-lib-tree-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductDocLibTreeTreeBase } from './product-doc-lib-tree-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class ProductDocLibTreeTree
 * @extends {ProductDocLibTreeTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductDocLibTreeTree extends ProductDocLibTreeTreeBase {}
</script>
