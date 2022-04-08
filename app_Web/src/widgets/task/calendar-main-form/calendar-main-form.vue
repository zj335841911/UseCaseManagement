<template src="./calendar-main-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CalendarMainEditFormBase } from './calendar-main-form-base';
 

/**
 * form部件
 *
 * @export
 * @class CalendarMainEditForm
 * @extends {CalendarMainEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CalendarMainEditForm extends CalendarMainEditFormBase {}
</script>
<style lang="less">
@import './calendar-main-form.less';
</style>
