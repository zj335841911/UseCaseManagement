<template src="./task-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskTreeExpViewBase } from './task-tree-exp-view-base';
import view_treeexpbar from '@widgets/task/tree-exp-viewtreeexpbar-treeexpbar/tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 任务树导航视图视图
 *
 * @export
 * @class TaskTreeExpView
 * @extends {TaskTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class TaskTreeExpView extends TaskTreeExpViewBase {}
</script>
