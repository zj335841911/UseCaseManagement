<template src="./product-module-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductModuleTreeExpViewBase } from './product-module-tree-exp-view-base';
import view_treeexpbar from '@widgets/product-module/tree-exp-viewtreeexpbar-treeexpbar/tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 需求模块树导航视图视图
 *
 * @export
 * @class ProductModuleTreeExpView
 * @extends {ProductModuleTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class ProductModuleTreeExpView extends ProductModuleTreeExpViewBase {}
</script>
