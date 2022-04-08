<template src="./todo-calendar-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TodoCalendarEditViewBase } from './todo-calendar-edit-view-base';
import view_form from '@widgets/todo/calendar-main-form/calendar-main-form.vue';

/**
 * 待办编辑视图（日历导航）视图
 *
 * @export
 * @class TodoCalendarEditView
 * @extends {TodoCalendarEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TodoCalendarEditView extends TodoCalendarEditViewBase {}
</script>
