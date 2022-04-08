<template src="./test-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTreeBase } from './test-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class TestTree
 * @extends {TestTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TestTree extends TestTreeBase {}
</script>
