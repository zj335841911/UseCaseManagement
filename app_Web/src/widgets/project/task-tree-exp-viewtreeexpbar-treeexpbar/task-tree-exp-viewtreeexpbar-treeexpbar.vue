<template src="./task-tree-exp-viewtreeexpbar-treeexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskTreeExpViewtreeexpbarTreeExpBarBase } from './task-tree-exp-viewtreeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/project-module/task-module-exp-treeview/task-module-exp-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class TaskTreeExpViewtreeexpbarTreeExpBar
 * @extends {TaskTreeExpViewtreeexpbarTreeExpBarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree,
         
    },
})
@VueLifeCycleProcessing()
export default class TaskTreeExpViewtreeexpbarTreeExpBar extends TaskTreeExpViewtreeexpbarTreeExpBarBase {}
</script>
