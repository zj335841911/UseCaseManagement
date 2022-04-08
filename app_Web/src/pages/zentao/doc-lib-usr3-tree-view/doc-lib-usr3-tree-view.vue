<template src="./doc-lib-usr3-tree-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibUsr3TreeViewBase } from './doc-lib-usr3-tree-view-base';
import view_tree from '@widgets/doc-lib/child-doclib-module-tree-treeview/child-doclib-module-tree-treeview.vue';

/**
 * 文档库树视图视图
 *
 * @export
 * @class DocLibUsr3TreeView
 * @extends {DocLibUsr3TreeViewBase}
 */
@Component({
    components: {
        view_tree, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibUsr3TreeView extends DocLibUsr3TreeViewBase {}
</script>
