<template src="./user-exp-treeview.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserExpTreeBase } from './user-exp-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class UserExpTree
 * @extends {UserExpTreeBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class UserExpTree extends UserExpTreeBase { }
</script>
