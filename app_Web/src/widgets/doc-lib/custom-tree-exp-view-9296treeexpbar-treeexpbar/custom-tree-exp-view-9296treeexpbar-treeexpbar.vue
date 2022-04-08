<template src="./custom-tree-exp-view-9296treeexpbar-treeexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CustomTreeExpView_9296treeexpbarTreeExpBarBase } from './custom-tree-exp-view-9296treeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/doc-lib/product-left-doc-lib-tree-treeview/product-left-doc-lib-tree-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class CustomTreeExpView_9296treeexpbarTreeExpBar
 * @extends {CustomTreeExpView_9296treeexpbarTreeExpBarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree,
         
    },
})
@VueLifeCycleProcessing()
export default class CustomTreeExpView_9296treeexpbarTreeExpBar extends CustomTreeExpView_9296treeexpbarTreeExpBarBase {}
</script>
