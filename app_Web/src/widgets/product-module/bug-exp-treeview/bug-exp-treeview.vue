<template src="./bug-exp-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugExpTreeBase } from './bug-exp-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class BugExpTree
 * @extends {BugExpTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugExpTree extends BugExpTreeBase {}
</script>
