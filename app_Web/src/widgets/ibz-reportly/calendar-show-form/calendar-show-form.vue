<template src="./calendar-show-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CalendarShowEditFormBase } from './calendar-show-form-base';
 

/**
 * form部件
 *
 * @export
 * @class CalendarShowEditForm
 * @extends {CalendarShowEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CalendarShowEditForm extends CalendarShowEditFormBase {}
</script>
<style lang="less">
@import './calendar-show-form.less';
</style>
