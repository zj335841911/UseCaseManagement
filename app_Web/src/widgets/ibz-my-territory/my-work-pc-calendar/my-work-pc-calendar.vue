<template src="./my-work-pc-calendar.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyWorkPCCalendarBase } from './my-work-pc-calendar-base';
import layout_todolayoutpanel from '@widgets/todo/mob-panel/mob-panel.vue';
import layout_testtasklayoutpanel from '@widgets/project-team/mob-panel/mob-panel.vue';
import layout_tasklayoutpanel from '@widgets/task/mob-panel/mob-panel.vue';
import layout_buglayoutpanel from '@widgets/bug/mob-panel/mob-panel.vue';
import FullCalendar from '@fullcalendar/vue'
 

/**
 * calendarexpbar_calendar部件
 *
 * @export
 * @class MyWorkPCCalendar
 * @extends {MyWorkPCCalendarBase}
 */
@Component({
    components: {
        layout_todolayoutpanel,
        layout_testtasklayoutpanel,
        layout_tasklayoutpanel,
        layout_buglayoutpanel,
            FullCalendar,
 
    },
})
@VueLifeCycleProcessing()
export default class MyWorkPCCalendar extends MyWorkPCCalendarBase {}
</script>
