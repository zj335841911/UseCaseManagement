<template src="./child-wei-hui-tree-exp-viewtreeexpbar-treeexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ChildWeiHuiTreeExpViewtreeexpbarTreeExpBarBase } from './child-wei-hui-tree-exp-viewtreeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/doc-lib-module/module-wei-hu-treeview/module-wei-hu-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class ChildWeiHuiTreeExpViewtreeexpbarTreeExpBar
 * @extends {ChildWeiHuiTreeExpViewtreeexpbarTreeExpBarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree,
         
    },
})
@VueLifeCycleProcessing()
export default class ChildWeiHuiTreeExpViewtreeexpbarTreeExpBar extends ChildWeiHuiTreeExpViewtreeexpbarTreeExpBarBase {}
</script>
