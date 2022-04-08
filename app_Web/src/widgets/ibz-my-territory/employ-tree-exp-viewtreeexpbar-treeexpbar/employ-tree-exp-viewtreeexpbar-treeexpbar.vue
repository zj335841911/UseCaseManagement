<template src="./employ-tree-exp-viewtreeexpbar-treeexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { EmployTreeExpViewtreeexpbarTreeExpBarBase } from './employ-tree-exp-viewtreeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/ibz-my-territory/employ-eeload-treeview/employ-eeload-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class EmployTreeExpViewtreeexpbarTreeExpBar
 * @extends {EmployTreeExpViewtreeexpbarTreeExpBarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree,
         
    },
})
@VueLifeCycleProcessing()
export default class EmployTreeExpViewtreeexpbarTreeExpBar extends EmployTreeExpViewtreeexpbarTreeExpBarBase {}
</script>
