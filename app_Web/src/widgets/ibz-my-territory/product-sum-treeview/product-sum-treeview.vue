<template src="./product-sum-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductSumTreeBase } from './product-sum-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class ProductSumTree
 * @extends {ProductSumTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProductSumTree extends ProductSumTreeBase {}
</script>
