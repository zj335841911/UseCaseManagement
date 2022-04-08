<template src="./concat-list-treeview.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ConcatListTreeBase } from './concat-list-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class ConcatListTree
 * @extends {ConcatListTreeBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ConcatListTree extends ConcatListTreeBase { }
</script>
