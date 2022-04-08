<template src="./task-main-detail-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskMainDetailView9Base } from './task-main-detail-view9-base';
import view_form from '@widgets/task/main-detail-form/main-detail-form.vue';

/**
 * 任务编辑视图视图
 *
 * @export
 * @class TaskMainDetailView9
 * @extends {TaskMainDetailView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TaskMainDetailView9 extends TaskMainDetailView9Base {}
</script>
