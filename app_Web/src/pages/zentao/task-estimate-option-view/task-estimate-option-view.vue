<template src="./task-estimate-option-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskEstimateOptionViewBase } from './task-estimate-option-view-base';
import view_form from '@widgets/task-estimate/main-form/main-form.vue';

/**
 * 任务预计选项操作视图视图
 *
 * @export
 * @class TaskEstimateOptionView
 * @extends {TaskEstimateOptionViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TaskEstimateOptionView extends TaskEstimateOptionViewBase {}
</script>
