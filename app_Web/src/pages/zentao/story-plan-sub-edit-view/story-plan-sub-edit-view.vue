<template src="./story-plan-sub-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryPlanSubEditViewBase } from './story-plan-sub-edit-view-base';
import view_form from '@widgets/story/main-new-mode-form/main-new-mode-form.vue';

/**
 * 需求视图
 *
 * @export
 * @class StoryPlanSubEditView
 * @extends {StoryPlanSubEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class StoryPlanSubEditView extends StoryPlanSubEditViewBase {}
</script>
