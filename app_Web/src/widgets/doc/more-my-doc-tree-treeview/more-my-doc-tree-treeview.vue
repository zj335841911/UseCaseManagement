<template src="./more-my-doc-tree-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MoreMyDocTreeTreeBase } from './more-my-doc-tree-treeview-base';
 

/**
 * tree部件
 *
 * @export
 * @class MoreMyDocTreeTree
 * @extends {MoreMyDocTreeTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MoreMyDocTreeTree extends MoreMyDocTreeTreeBase {}
</script>
<style lang="less">
@import './more-my-doc-tree-treeview.less';
</style>