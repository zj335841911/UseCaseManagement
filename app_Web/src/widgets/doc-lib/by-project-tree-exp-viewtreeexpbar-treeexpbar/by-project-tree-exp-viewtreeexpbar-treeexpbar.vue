<template src="./by-project-tree-exp-viewtreeexpbar-treeexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ByProjectTreeExpViewtreeexpbarTreeExpBarBase } from './by-project-tree-exp-viewtreeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/doc-lib/project-left-doc-lib-tree-treeview/project-left-doc-lib-tree-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class ByProjectTreeExpViewtreeexpbarTreeExpBar
 * @extends {ByProjectTreeExpViewtreeexpbarTreeExpBarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree,
         
    },
})
@VueLifeCycleProcessing()
export default class ByProjectTreeExpViewtreeexpbarTreeExpBar extends ByProjectTreeExpViewtreeexpbarTreeExpBarBase {}
</script>
