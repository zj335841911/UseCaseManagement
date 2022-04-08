<template src="./task-group-tree-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskGroupTreeTreeBase } from './task-group-tree-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class TaskGroupTreeTree
 * @extends {TaskGroupTreeTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TaskGroupTreeTree extends TaskGroupTreeTreeBase {}
</script>
