<template src="./test-task-calendar-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskCalendarEditViewBase } from './test-task-calendar-edit-view-base';
import view_form from '@widgets/test-task/calendar-main-form/calendar-main-form.vue';

/**
 * 测试版本编辑视图（日历导航）视图
 *
 * @export
 * @class TestTaskCalendarEditView
 * @extends {TestTaskCalendarEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestTaskCalendarEditView extends TestTaskCalendarEditViewBase {}
</script>
