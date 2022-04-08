<template src="./case-exp-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseExpTreeBase } from './case-exp-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class CaseExpTree
 * @extends {CaseExpTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CaseExpTree extends CaseExpTreeBase {}
</script>
