<template src="./exp-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ExpTreeBase } from './exp-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class ExpTree
 * @extends {ExpTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ExpTree extends ExpTreeBase {}
</script>
