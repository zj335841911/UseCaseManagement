<template src="./project-task-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectTaskTreeExpViewBase } from './project-task-tree-exp-view-base';
import view_treeexpbar from '@widgets/project/task-tree-exp-viewtreeexpbar-treeexpbar/task-tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 项目任务导航视图视图
 *
 * @export
 * @class ProjectTaskTreeExpView
 * @extends {ProjectTaskTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectTaskTreeExpView extends ProjectTaskTreeExpViewBase {}
</script>
