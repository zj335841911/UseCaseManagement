<template src="./product-bug-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductBugTreeExpViewBase } from './product-bug-tree-exp-view-base';
import view_treeexpbar from '@widgets/product/bug-tree-exp-viewtreeexpbar-treeexpbar/bug-tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 产品需求导航视图视图
 *
 * @export
 * @class ProductBugTreeExpView
 * @extends {ProductBugTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class ProductBugTreeExpView extends ProductBugTreeExpViewBase {}
</script>
