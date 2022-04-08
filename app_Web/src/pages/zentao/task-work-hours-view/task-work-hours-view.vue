<template src="./task-work-hours-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskWorkHoursViewBase } from './task-work-hours-view-base';
import view_form from '@widgets/task/task-estimate-form/task-estimate-form.vue';

/**
 * 工时视图
 *
 * @export
 * @class TaskWorkHoursView
 * @extends {TaskWorkHoursViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TaskWorkHoursView extends TaskWorkHoursViewBase {}
</script>
