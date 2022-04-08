<template src="./tree-exp-view-project-statstreeexpbar-treeexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TreeExpViewProjectStatstreeexpbarTreeExpBarBase } from './tree-exp-view-project-statstreeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/ibz-my-territory/project-stats-treeview/project-stats-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class TreeExpViewProjectStatstreeexpbarTreeExpBar
 * @extends {TreeExpViewProjectStatstreeexpbarTreeExpBarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree,
         
    },
})
@VueLifeCycleProcessing()
export default class TreeExpViewProjectStatstreeexpbarTreeExpBar extends TreeExpViewProjectStatstreeexpbarTreeExpBarBase {}
</script>
