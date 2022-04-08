<template src="./doc-lib-tree-product-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibTreeProductTreeBase } from './doc-lib-tree-product-treeview-base';
 

/**
 * tree部件
 *
 * @export
 * @class DocLibTreeProductTree
 * @extends {DocLibTreeProductTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DocLibTreeProductTree extends DocLibTreeProductTreeBase {}
</script>
<style lang="less">
@import './doc-lib-tree-product-treeview.less';
</style>