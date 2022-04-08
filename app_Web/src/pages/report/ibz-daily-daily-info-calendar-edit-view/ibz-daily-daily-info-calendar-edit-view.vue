<template src="./ibz-daily-daily-info-calendar-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzDailyDailyInfoCalendarEditViewBase } from './ibz-daily-daily-info-calendar-edit-view-base';
import view_form from '@widgets/ibz-daily/daily-info-calendar-form/daily-info-calendar-form.vue';

/**
 * 日报编辑视图(日历显示)视图
 *
 * @export
 * @class IbzDailyDailyInfoCalendarEditView
 * @extends {IbzDailyDailyInfoCalendarEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzDailyDailyInfoCalendarEditView extends IbzDailyDailyInfoCalendarEditViewBase {}
</script>
