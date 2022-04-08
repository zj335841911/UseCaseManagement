<template src="./ibz-my-territory-calendar-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryCalendarExpViewBase } from './ibz-my-territory-calendar-exp-view-base';
import view_calendarexpbar from '@widgets/ibz-my-territory/calendar-exp-viewcalendarexpbar-calendarexpbar/calendar-exp-viewcalendarexpbar-calendarexpbar.vue';

/**
 * 我的地盘日历导航视图视图
 *
 * @export
 * @class IbzMyTerritoryCalendarExpView
 * @extends {IbzMyTerritoryCalendarExpViewBase}
 */
@Component({
    components: {
        view_calendarexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryCalendarExpView extends IbzMyTerritoryCalendarExpViewBase {}
</script>
