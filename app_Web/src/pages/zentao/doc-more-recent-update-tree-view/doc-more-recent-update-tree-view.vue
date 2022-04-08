<template src="./doc-more-recent-update-tree-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocMoreRecentUpdateTreeViewBase } from './doc-more-recent-update-tree-view-base';
import view_tree from '@widgets/doc/more-recent-update-tree-treeview/more-recent-update-tree-treeview.vue';

/**
 * 文档树视图视图
 *
 * @export
 * @class DocMoreRecentUpdateTreeView
 * @extends {DocMoreRecentUpdateTreeViewBase}
 */
@Component({
    components: {
        view_tree, 
    }
})
@VueLifeCycleProcessing()
export default class DocMoreRecentUpdateTreeView extends DocMoreRecentUpdateTreeViewBase {}
</script>
