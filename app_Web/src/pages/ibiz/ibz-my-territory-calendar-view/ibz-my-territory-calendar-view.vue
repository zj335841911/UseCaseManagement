<template src="./ibz-my-territory-calendar-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryCalendarViewBase } from './ibz-my-territory-calendar-view-base';
import view_calendar from '@widgets/ibz-my-territory/my-work-pc-calendar/my-work-pc-calendar.vue';

/**
 * 我的地盘日历视图视图
 *
 * @export
 * @class IbzMyTerritoryCalendarView
 * @extends {IbzMyTerritoryCalendarViewBase}
 */
@Component({
    components: {
        view_calendar, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryCalendarView extends IbzMyTerritoryCalendarViewBase { }
</script>
