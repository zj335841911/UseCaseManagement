<template src="./bug-calendar-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugCalendarEditViewBase } from './bug-calendar-edit-view-base';
import view_form from '@widgets/bug/calendar-main-form/calendar-main-form.vue';

/**
 * Bug编辑视图（日历导航）视图
 *
 * @export
 * @class BugCalendarEditView
 * @extends {BugCalendarEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BugCalendarEditView extends BugCalendarEditViewBase {}
</script>
