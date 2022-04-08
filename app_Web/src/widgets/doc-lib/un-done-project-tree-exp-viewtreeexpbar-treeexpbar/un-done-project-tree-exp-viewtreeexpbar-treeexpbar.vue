<template src="./un-done-project-tree-exp-viewtreeexpbar-treeexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UnDoneProjectTreeExpViewtreeexpbarTreeExpBarBase } from './un-done-project-tree-exp-viewtreeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/doc-lib/undone-project-doc-lib-tree-treeview/undone-project-doc-lib-tree-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class UnDoneProjectTreeExpViewtreeexpbarTreeExpBar
 * @extends {UnDoneProjectTreeExpViewtreeexpbarTreeExpBarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree,
         
    },
})
@VueLifeCycleProcessing()
export default class UnDoneProjectTreeExpViewtreeexpbarTreeExpBar extends UnDoneProjectTreeExpViewtreeexpbarTreeExpBarBase {}
</script>
