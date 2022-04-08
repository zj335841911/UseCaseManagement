<template src="./task-story-new-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskStoryNewEditViewBase } from './task-story-new-edit-view-base';
import view_form from '@widgets/task/main-form/main-form.vue';

/**
 * 任务编辑视图视图
 *
 * @export
 * @class TaskStoryNewEditView
 * @extends {TaskStoryNewEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TaskStoryNewEditView extends TaskStoryNewEditViewBase {}
</script>
