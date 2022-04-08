<template src="./task-work-info-edit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskWorkInfoEditView9Base } from './task-work-info-edit-view9-base';
import view_form from '@widgets/task/work-info-form-form/work-info-form-form.vue';

/**
 * 工时信息视图
 *
 * @export
 * @class TaskWorkInfoEditView9
 * @extends {TaskWorkInfoEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TaskWorkInfoEditView9 extends TaskWorkInfoEditView9Base {}
</script>
