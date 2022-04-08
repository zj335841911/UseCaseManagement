<template src="./user-sum-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserSumTreeBase } from './user-sum-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class UserSumTree
 * @extends {UserSumTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class UserSumTree extends UserSumTreeBase {}
</script>
