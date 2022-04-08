<template src="./tree-exp-viewtreeexpbar-treeexpbar.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TreeExpViewtreeexpbarTreeExpBarBase } from './tree-exp-viewtreeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/user/user-exp-treeview/user-exp-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class TreeExpViewtreeexpbarTreeExpBar
 * @extends {TreeExpViewtreeexpbarTreeExpBarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree, 
         
    }
})
@VueLifeCycleProcessing()
export default class TreeExpViewtreeexpbarTreeExpBar extends TreeExpViewtreeexpbarTreeExpBarBase { }
</script>
