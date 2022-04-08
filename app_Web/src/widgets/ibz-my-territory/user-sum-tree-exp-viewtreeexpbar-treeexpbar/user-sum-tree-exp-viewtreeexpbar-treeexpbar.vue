<template src="./user-sum-tree-exp-viewtreeexpbar-treeexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserSumTreeExpViewtreeexpbarTreeExpBarBase } from './user-sum-tree-exp-viewtreeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/ibz-my-territory/user-sum-treeview/user-sum-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class UserSumTreeExpViewtreeexpbarTreeExpBar
 * @extends {UserSumTreeExpViewtreeexpbarTreeExpBarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree,
         
    },
})
@VueLifeCycleProcessing()
export default class UserSumTreeExpViewtreeexpbarTreeExpBar extends UserSumTreeExpViewtreeexpbarTreeExpBarBase {}
</script>
