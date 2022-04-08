<template src="./doclib-child-tree-view-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DoclibChildTreeViewTreeBase } from './doclib-child-tree-view-treeview-base';
 

/**
 * tree部件
 *
 * @export
 * @class DoclibChildTreeViewTree
 * @extends {DoclibChildTreeViewTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DoclibChildTreeViewTree extends DoclibChildTreeViewTreeBase {}
</script>
<style lang="less">
@import './doclib-child-tree-view-treeview.less';
</style>