<template src="./story-calendar-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryCalendarEditViewBase } from './story-calendar-edit-view-base';
import view_form from '@widgets/story/story-spec-calendar-form/story-spec-calendar-form.vue';

/**
 * 需求编辑视图（日历）视图
 *
 * @export
 * @class StoryCalendarEditView
 * @extends {StoryCalendarEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class StoryCalendarEditView extends StoryCalendarEditViewBase {}
</script>
