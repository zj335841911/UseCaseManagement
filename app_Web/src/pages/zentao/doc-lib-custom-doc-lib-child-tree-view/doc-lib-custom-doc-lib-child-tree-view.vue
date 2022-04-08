<template src="./doc-lib-custom-doc-lib-child-tree-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibCustomDocLibChildTreeViewBase } from './doc-lib-custom-doc-lib-child-tree-view-base';
import view_tree from '@widgets/doc-lib/doc-lib-tree-cust-child-treeview/doc-lib-tree-cust-child-treeview.vue';

/**
 * 文档库树视图（自定义文档库-子目录）视图
 *
 * @export
 * @class DocLibCustomDocLibChildTreeView
 * @extends {DocLibCustomDocLibChildTreeViewBase}
 */
@Component({
    components: {
        view_tree, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibCustomDocLibChildTreeView extends DocLibCustomDocLibChildTreeViewBase {}
</script>
