<template src="./tree-lib-module-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TreeLibModuleTreeBase } from './tree-lib-module-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class TreeLibModuleTree
 * @extends {TreeLibModuleTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TreeLibModuleTree extends TreeLibModuleTreeBase {}
</script>
