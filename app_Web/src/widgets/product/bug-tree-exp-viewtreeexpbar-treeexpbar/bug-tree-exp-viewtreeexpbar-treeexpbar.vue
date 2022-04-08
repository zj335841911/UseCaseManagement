<template src="./bug-tree-exp-viewtreeexpbar-treeexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugTreeExpViewtreeexpbarTreeExpBarBase } from './bug-tree-exp-viewtreeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/product-module/bug-exp-treeview/bug-exp-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class BugTreeExpViewtreeexpbarTreeExpBar
 * @extends {BugTreeExpViewtreeexpbarTreeExpBarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree,
         
    },
})
@VueLifeCycleProcessing()
export default class BugTreeExpViewtreeexpbarTreeExpBar extends BugTreeExpViewtreeexpbarTreeExpBarBase {}
</script>
