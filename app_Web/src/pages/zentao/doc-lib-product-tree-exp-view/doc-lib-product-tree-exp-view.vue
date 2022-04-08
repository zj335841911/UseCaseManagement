<template src="./doc-lib-product-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibProductTreeExpViewBase } from './doc-lib-product-tree-exp-view-base';
import view_treeexpbar from '@widgets/doc-lib/product-tree-exp-viewtreeexpbar-treeexpbar/product-tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 文档库树导航视图（产品文档库）视图
 *
 * @export
 * @class DocLibProductTreeExpView
 * @extends {DocLibProductTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibProductTreeExpView extends DocLibProductTreeExpViewBase {}
</script>
