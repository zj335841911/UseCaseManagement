<template src="./task-tree-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskTreeTreeBase } from './task-tree-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class TaskTreeTree
 * @extends {TaskTreeTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TaskTreeTree extends TaskTreeTreeBase {}
</script>
