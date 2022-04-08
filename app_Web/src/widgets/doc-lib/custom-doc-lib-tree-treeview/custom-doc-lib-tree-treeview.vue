<template src="./custom-doc-lib-tree-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CustomDocLibTreeTreeBase } from './custom-doc-lib-tree-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class CustomDocLibTreeTree
 * @extends {CustomDocLibTreeTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CustomDocLibTreeTree extends CustomDocLibTreeTreeBase {}
</script>
