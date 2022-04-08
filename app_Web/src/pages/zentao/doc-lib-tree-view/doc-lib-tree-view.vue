<template src="./doc-lib-tree-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibTreeViewBase } from './doc-lib-tree-view-base';
import view_tree from '@widgets/doc-lib/doc-child-product-tree-view-treeview/doc-child-product-tree-view-treeview.vue';

/**
 * 文档库树视图视图
 *
 * @export
 * @class DocLibTreeView
 * @extends {DocLibTreeViewBase}
 */
@Component({
    components: {
        view_tree, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibTreeView extends DocLibTreeViewBase {}
</script>
