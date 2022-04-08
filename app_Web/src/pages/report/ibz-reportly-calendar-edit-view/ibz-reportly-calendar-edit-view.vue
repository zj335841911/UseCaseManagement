<template src="./ibz-reportly-calendar-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzReportlyCalendarEditViewBase } from './ibz-reportly-calendar-edit-view-base';
import view_form from '@widgets/ibz-reportly/calendar-show-form/calendar-show-form.vue';

/**
 * 汇报编辑视图视图
 *
 * @export
 * @class IbzReportlyCalendarEditView
 * @extends {IbzReportlyCalendarEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzReportlyCalendarEditView extends IbzReportlyCalendarEditViewBase {}
</script>
