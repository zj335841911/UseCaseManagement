<template src="./story-plan-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryPlanEditViewBase } from './story-plan-edit-view-base';
import view_form from '@widgets/story/plan-new-form/plan-new-form.vue';

/**
 * 需求视图
 *
 * @export
 * @class StoryPlanEditView
 * @extends {StoryPlanEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class StoryPlanEditView extends StoryPlanEditViewBase {}
</script>
