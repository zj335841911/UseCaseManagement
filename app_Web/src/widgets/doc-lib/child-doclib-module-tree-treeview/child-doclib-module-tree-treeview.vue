<template src="./child-doclib-module-tree-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ChildDoclibModuleTreeTreeBase } from './child-doclib-module-tree-treeview-base';
 

/**
 * tree部件
 *
 * @export
 * @class ChildDoclibModuleTreeTree
 * @extends {ChildDoclibModuleTreeTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ChildDoclibModuleTreeTree extends ChildDoclibModuleTreeTreeBase {}
</script>
<style lang="less">
@import './child-doclib-module-tree-treeview.less';
</style>