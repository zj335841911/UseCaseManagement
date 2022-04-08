<template src="./calendar-exp-viewcalendarexpbar-calendarexpbar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CalendarExpViewcalendarexpbarCalendarexpbarBase } from './calendar-exp-viewcalendarexpbar-calendarexpbar-base';
import view_calendarexpbar_calendar from '@widgets/ibz-my-territory/my-work-pc-calendar/my-work-pc-calendar.vue';
 

/**
 * calendarexpbar部件
 *
 * @export
 * @class CalendarExpViewcalendarexpbarCalendarexpbar
 * @extends {CalendarExpViewcalendarexpbarCalendarexpbarBase}
 */
@Component({
    components: {
        view_calendarexpbar_calendar,
         
    },
})
@VueLifeCycleProcessing()
export default class CalendarExpViewcalendarexpbarCalendarexpbar extends CalendarExpViewcalendarexpbarCalendarexpbarBase {}
</script>
