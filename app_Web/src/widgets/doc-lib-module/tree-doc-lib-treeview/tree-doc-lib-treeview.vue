<template src="./tree-doc-lib-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TreeDocLibTreeBase } from './tree-doc-lib-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class TreeDocLibTree
 * @extends {TreeDocLibTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TreeDocLibTree extends TreeDocLibTreeBase {}
</script>
