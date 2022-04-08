<template src="./module-wei-hu-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ModuleWeiHuTreeBase } from './module-wei-hu-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class ModuleWeiHuTree
 * @extends {ModuleWeiHuTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ModuleWeiHuTree extends ModuleWeiHuTreeBase {}
</script>
