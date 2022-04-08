<template src="./doc-lib-usr2-tree-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibUsr2TreeViewBase } from './doc-lib-usr2-tree-view-base';
import view_tree from '@widgets/doc-lib/root-doclib-project-tree-veiw-treeview/root-doclib-project-tree-veiw-treeview.vue';

/**
 * 文档库树视图视图
 *
 * @export
 * @class DocLibUsr2TreeView
 * @extends {DocLibUsr2TreeViewBase}
 */
@Component({
    components: {
        view_tree, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibUsr2TreeView extends DocLibUsr2TreeViewBase {}
</script>
