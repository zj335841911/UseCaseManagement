<template src="./doc-lib-tree-cust-child-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibTreeCustChildTreeBase } from './doc-lib-tree-cust-child-treeview-base';
 

/**
 * tree部件
 *
 * @export
 * @class DocLibTreeCustChildTree
 * @extends {DocLibTreeCustChildTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DocLibTreeCustChildTree extends DocLibTreeCustChildTreeBase {}
</script>
<style lang="less">
@import './doc-lib-tree-cust-child-treeview.less';
</style>