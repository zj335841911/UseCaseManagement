<template src="./case-tree-exp-viewtreeexpbar-treeexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseTreeExpViewtreeexpbarTreeExpBarBase } from './case-tree-exp-viewtreeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/product-module/case-exp-treeview/case-exp-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class CaseTreeExpViewtreeexpbarTreeExpBar
 * @extends {CaseTreeExpViewtreeexpbarTreeExpBarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree,
         
    },
})
@VueLifeCycleProcessing()
export default class CaseTreeExpViewtreeexpbarTreeExpBar extends CaseTreeExpViewtreeexpbarTreeExpBarBase {}
</script>
