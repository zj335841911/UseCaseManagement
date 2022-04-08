<template src="./task-group-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskGroupTreeExpViewBase } from './task-group-tree-exp-view-base';
import view_treeexpbar from '@widgets/task/group-tree-exp-viewtreeexpbar-treeexpbar/group-tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 任务树导航视图（分组树）视图
 *
 * @export
 * @class TaskGroupTreeExpView
 * @extends {TaskGroupTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class TaskGroupTreeExpView extends TaskGroupTreeExpViewBase {}
</script>
