<template src="./project-module-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectModuleTreeExpViewBase } from './project-module-tree-exp-view-base';
import view_treeexpbar from '@widgets/project-module/tree-exp-viewtreeexpbar-treeexpbar/tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 任务模块树导航视图视图
 *
 * @export
 * @class ProjectModuleTreeExpView
 * @extends {ProjectModuleTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectModuleTreeExpView extends ProjectModuleTreeExpViewBase {}
</script>
