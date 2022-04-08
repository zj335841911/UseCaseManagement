<template src="./module-exp-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ModuleExpTreeBase } from './module-exp-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class ModuleExpTree
 * @extends {ModuleExpTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ModuleExpTree extends ModuleExpTreeBase {}
</script>
