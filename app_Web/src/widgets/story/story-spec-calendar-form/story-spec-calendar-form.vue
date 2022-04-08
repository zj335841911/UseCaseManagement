<template src="./story-spec-calendar-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StorySpecCalendarEditFormBase } from './story-spec-calendar-form-base';
 

/**
 * form部件
 *
 * @export
 * @class StorySpecCalendarEditForm
 * @extends {StorySpecCalendarEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class StorySpecCalendarEditForm extends StorySpecCalendarEditFormBase {}
</script>
<style lang="less">
@import './story-spec-calendar-form.less';
</style>
