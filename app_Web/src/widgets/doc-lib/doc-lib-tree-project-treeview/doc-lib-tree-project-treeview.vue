<template src="./doc-lib-tree-project-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibTreeProjectTreeBase } from './doc-lib-tree-project-treeview-base';
 

/**
 * tree部件
 *
 * @export
 * @class DocLibTreeProjectTree
 * @extends {DocLibTreeProjectTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DocLibTreeProjectTree extends DocLibTreeProjectTreeBase {}
</script>
<style lang="less">
@import './doc-lib-tree-project-treeview.less';
</style>