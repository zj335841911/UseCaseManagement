<template src="./doc-more-my-doc-tree-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocMoreMyDocTreeViewBase } from './doc-more-my-doc-tree-view-base';
import view_tree from '@widgets/doc/more-my-doc-tree-treeview/more-my-doc-tree-treeview.vue';

/**
 * 文档树视图视图
 *
 * @export
 * @class DocMoreMyDocTreeView
 * @extends {DocMoreMyDocTreeViewBase}
 */
@Component({
    components: {
        view_tree, 
    }
})
@VueLifeCycleProcessing()
export default class DocMoreMyDocTreeView extends DocMoreMyDocTreeViewBase {}
</script>
