<template src="./employ-eeload-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { EmployEeloadTreeBase } from './employ-eeload-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class EmployEeloadTree
 * @extends {EmployEeloadTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class EmployEeloadTree extends EmployEeloadTreeBase {}
</script>
