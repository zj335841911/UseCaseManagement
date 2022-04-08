<template src="./project-stats-treeview.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStatsTreeBase } from './project-stats-treeview-base';
 

/**
 * treeexpbar_tree部件
 *
 * @export
 * @class ProjectStatsTree
 * @extends {ProjectStatsTreeBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectStatsTree extends ProjectStatsTreeBase {}
</script>
