<template src="./doc-child-product-tree-view-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocChildProductTreeViewTreeBase } from './doc-child-product-tree-view-treeview-base';
 

/**
 * tree部件
 *
 * @export
 * @class DocChildProductTreeViewTree
 * @extends {DocChildProductTreeViewTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DocChildProductTreeViewTree extends DocChildProductTreeViewTreeBase {}
</script>
<style lang="less">
@import './doc-child-product-tree-view-treeview.less';
</style>