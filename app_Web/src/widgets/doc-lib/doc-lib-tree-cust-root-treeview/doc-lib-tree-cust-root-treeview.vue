<template src="./doc-lib-tree-cust-root-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibTreeCustRootTreeBase } from './doc-lib-tree-cust-root-treeview-base';
 

/**
 * tree部件
 *
 * @export
 * @class DocLibTreeCustRootTree
 * @extends {DocLibTreeCustRootTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DocLibTreeCustRootTree extends DocLibTreeCustRootTreeBase {}
</script>
<style lang="less">
@import './doc-lib-tree-cust-root-treeview.less';
</style>