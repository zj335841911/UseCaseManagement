<template src="./custom-tree-exp-viewtreeexpbar-treeexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CustomTreeExpViewtreeexpbarTreeExpBarBase } from './custom-tree-exp-viewtreeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/doc-lib/custom-doc-lib-tree-treeview/custom-doc-lib-tree-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class CustomTreeExpViewtreeexpbarTreeExpBar
 * @extends {CustomTreeExpViewtreeexpbarTreeExpBarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree,
         
    },
})
@VueLifeCycleProcessing()
export default class CustomTreeExpViewtreeexpbarTreeExpBar extends CustomTreeExpViewtreeexpbarTreeExpBarBase {}
</script>
