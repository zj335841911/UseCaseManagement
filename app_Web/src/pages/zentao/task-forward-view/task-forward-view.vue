<template src="./task-forward-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskForwardViewBase } from './task-forward-view-base';
import view_form from '@widgets/task/forward-form/forward-form.vue';

/**
 * 转交任务视图
 *
 * @export
 * @class TaskForwardView
 * @extends {TaskForwardViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TaskForwardView extends TaskForwardViewBase {}
</script>
