<template src="./task-main-info-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskMainInfoView9Base } from './task-main-info-view9-base';
import view_form from '@widgets/task/main-info-form/main-info-form.vue';

/**
 * 任务编辑视图视图
 *
 * @export
 * @class TaskMainInfoView9
 * @extends {TaskMainInfoView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TaskMainInfoView9 extends TaskMainInfoView9Base {}
</script>
