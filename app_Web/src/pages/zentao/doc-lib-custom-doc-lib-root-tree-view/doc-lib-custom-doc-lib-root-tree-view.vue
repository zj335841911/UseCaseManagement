<template src="./doc-lib-custom-doc-lib-root-tree-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibCustomDocLibRootTreeViewBase } from './doc-lib-custom-doc-lib-root-tree-view-base';
import view_tree from '@widgets/doc-lib/doc-lib-tree-cust-root-treeview/doc-lib-tree-cust-root-treeview.vue';

/**
 * 文档库树视图（自定义文档库-根目录）视图
 *
 * @export
 * @class DocLibCustomDocLibRootTreeView
 * @extends {DocLibCustomDocLibRootTreeViewBase}
 */
@Component({
    components: {
        view_tree, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibCustomDocLibRootTreeView extends DocLibCustomDocLibRootTreeViewBase {}
</script>
