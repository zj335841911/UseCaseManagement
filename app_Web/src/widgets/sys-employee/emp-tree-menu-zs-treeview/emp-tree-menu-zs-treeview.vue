<template src="./emp-tree-menu-zs-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { EmpTreeMenuZSTreeBase } from './emp-tree-menu-zs-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class EmpTreeMenuZSTree
 * @extends {EmpTreeMenuZSTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class EmpTreeMenuZSTree extends EmpTreeMenuZSTreeBase {}
</script>
