<template src="./task-module-exp-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskModuleExpTreeBase } from './task-module-exp-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class TaskModuleExpTree
 * @extends {TaskModuleExpTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TaskModuleExpTree extends TaskModuleExpTreeBase {}
</script>
