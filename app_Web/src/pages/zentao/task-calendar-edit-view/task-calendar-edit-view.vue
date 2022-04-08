<template src="./task-calendar-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskCalendarEditViewBase } from './task-calendar-edit-view-base';
import view_form from '@widgets/task/calendar-main-form/calendar-main-form.vue';

/**
 * 任务编辑视图（日历航显示）视图
 *
 * @export
 * @class TaskCalendarEditView
 * @extends {TaskCalendarEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TaskCalendarEditView extends TaskCalendarEditViewBase {}
</script>
