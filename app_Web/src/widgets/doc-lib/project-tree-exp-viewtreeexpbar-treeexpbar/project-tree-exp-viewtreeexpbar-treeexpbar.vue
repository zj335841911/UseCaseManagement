<template src="./project-tree-exp-viewtreeexpbar-treeexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectTreeExpViewtreeexpbarTreeExpBarBase } from './project-tree-exp-viewtreeexpbar-treeexpbar-base';
import view_treeexpbar_tree from '@widgets/doc-lib/project-doc-lib-tree-treeview/project-doc-lib-tree-treeview.vue';
 

/**
 * treeexpbar部件
 *
 * @export
 * @class ProjectTreeExpViewtreeexpbarTreeExpBar
 * @extends {ProjectTreeExpViewtreeexpbarTreeExpBarBase}
 */
@Component({
    components: {
        view_treeexpbar_tree,
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectTreeExpViewtreeexpbarTreeExpBar extends ProjectTreeExpViewtreeexpbarTreeExpBarBase {}
</script>
