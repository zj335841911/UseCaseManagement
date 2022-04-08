<template src="./doc-lib-project-tree-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibProjectTreeViewBase } from './doc-lib-project-tree-view-base';
import view_tree from '@widgets/doc-lib/doc-lib-tree-project-treeview/doc-lib-tree-project-treeview.vue';

/**
 * 文档库树视图视图
 *
 * @export
 * @class DocLibProjectTreeView
 * @extends {DocLibProjectTreeViewBase}
 */
@Component({
    components: {
        view_tree, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibProjectTreeView extends DocLibProjectTreeViewBase {}
</script>
