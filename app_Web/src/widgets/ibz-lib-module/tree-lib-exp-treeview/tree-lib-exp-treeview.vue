<template src="./tree-lib-exp-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TreeLibExpTreeBase } from './tree-lib-exp-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class TreeLibExpTree
 * @extends {TreeLibExpTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TreeLibExpTree extends TreeLibExpTreeBase {}
</script>
