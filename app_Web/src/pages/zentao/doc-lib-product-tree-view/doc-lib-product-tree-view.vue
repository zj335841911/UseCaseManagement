<template src="./doc-lib-product-tree-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibProductTreeViewBase } from './doc-lib-product-tree-view-base';
import view_tree from '@widgets/doc-lib/doc-lib-tree-product-treeview/doc-lib-tree-product-treeview.vue';

/**
 * 文档库树视图（产品）视图
 *
 * @export
 * @class DocLibProductTreeView
 * @extends {DocLibProductTreeViewBase}
 */
@Component({
    components: {
        view_tree, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibProductTreeView extends DocLibProductTreeViewBase {}
</script>
