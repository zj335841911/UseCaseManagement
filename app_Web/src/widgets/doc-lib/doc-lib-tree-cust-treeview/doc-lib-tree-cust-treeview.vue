<template src="./doc-lib-tree-cust-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibTreeCustTreeBase } from './doc-lib-tree-cust-treeview-base';
 

/**
 * tree部件
 *
 * @export
 * @class DocLibTreeCustTree
 * @extends {DocLibTreeCustTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DocLibTreeCustTree extends DocLibTreeCustTreeBase {}
</script>
<style lang="less">
@import './doc-lib-tree-cust-treeview.less';
</style>