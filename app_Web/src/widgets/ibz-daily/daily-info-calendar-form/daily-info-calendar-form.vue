<template src="./daily-info-calendar-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DailyInfoCalendarEditFormBase } from './daily-info-calendar-form-base';
 

/**
 * form部件
 *
 * @export
 * @class DailyInfoCalendarEditForm
 * @extends {DailyInfoCalendarEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DailyInfoCalendarEditForm extends DailyInfoCalendarEditFormBase {}
</script>
