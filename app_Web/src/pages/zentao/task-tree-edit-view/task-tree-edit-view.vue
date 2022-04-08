<template src="./task-tree-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskTreeEditViewBase } from './task-tree-edit-view-base';
import view_form from '@widgets/task/tree-info-form/tree-info-form.vue';

/**
 * 任务编辑视图（树导航显示）视图
 *
 * @export
 * @class TaskTreeEditView
 * @extends {TaskTreeEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TaskTreeEditView extends TaskTreeEditViewBase {}
</script>
