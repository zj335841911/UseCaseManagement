<template src="./project-doc-lib-tree-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectDocLibTreeTreeBase } from './project-doc-lib-tree-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class ProjectDocLibTreeTree
 * @extends {ProjectDocLibTreeTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectDocLibTreeTree extends ProjectDocLibTreeTreeBase {}
</script>
