<template src="./group-tree-exp-viewtreeexpbar-treeexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { GroupTreeExpViewtreeexpbarTreeExpBarBase } from './group-tree-exp-viewtreeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/task/task-group-tree-treeview/task-group-tree-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class GroupTreeExpViewtreeexpbarTreeExpBar
 * @extends {GroupTreeExpViewtreeexpbarTreeExpBarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree,
         
    },
})
@VueLifeCycleProcessing()
export default class GroupTreeExpViewtreeexpbarTreeExpBar extends GroupTreeExpViewtreeexpbarTreeExpBarBase {}
</script>
