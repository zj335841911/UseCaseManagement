<template src="./doc-lib-product-tree-view-cust.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibProductTreeViewCustBase } from './doc-lib-product-tree-view-cust-base';
import view_tree from '@widgets/doc-lib/doc-lib-tree-cust-treeview/doc-lib-tree-cust-treeview.vue';

/**
 * 文档库树视图（自定义文档库）视图
 *
 * @export
 * @class DocLibProductTreeViewCust
 * @extends {DocLibProductTreeViewCustBase}
 */
@Component({
    components: {
        view_tree, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibProductTreeViewCust extends DocLibProductTreeViewCustBase {}
</script>
