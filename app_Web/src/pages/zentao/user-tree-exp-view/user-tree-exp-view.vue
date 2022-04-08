<template src="./user-tree-exp-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserTreeExpViewBase } from './user-tree-exp-view-base';
import view_treeexpbar from '@widgets/user/tree-exp-viewtreeexpbar-treeexpbar/tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 用户视图
 *
 * @export
 * @class UserTreeExpView
 * @extends {UserTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class UserTreeExpView extends UserTreeExpViewBase { }
</script>
