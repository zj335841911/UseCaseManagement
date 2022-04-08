<template src="./emp-tree-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { EmpTreeTreeBase } from './emp-tree-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class EmpTreeTree
 * @extends {EmpTreeTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class EmpTreeTree extends EmpTreeTreeBase {}
</script>
