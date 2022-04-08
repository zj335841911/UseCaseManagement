<template src="./test-tree-exp-viewtreeexpbar-treeexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTreeExpViewtreeexpbarTreeExpBarBase } from './test-tree-exp-viewtreeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/ibz-my-territory/test-treeview/test-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class TestTreeExpViewtreeexpbarTreeExpBar
 * @extends {TestTreeExpViewtreeexpbarTreeExpBarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree,
         
    },
})
@VueLifeCycleProcessing()
export default class TestTreeExpViewtreeexpbarTreeExpBar extends TestTreeExpViewtreeexpbarTreeExpBarBase {}
</script>
