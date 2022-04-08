<template src="./doc-lib-tree-view-product-root.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibTreeViewProductRootBase } from './doc-lib-tree-view-product-root-base';
import view_tree from '@widgets/doc-lib/doclib-child-tree-view-treeview/doclib-child-tree-view-treeview.vue';

/**
 * 文档库树视图视图
 *
 * @export
 * @class DocLibTreeViewProductRoot
 * @extends {DocLibTreeViewProductRootBase}
 */
@Component({
    components: {
        view_tree, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibTreeViewProductRoot extends DocLibTreeViewProductRootBase {}
</script>
