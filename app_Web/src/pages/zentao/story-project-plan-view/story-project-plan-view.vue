<template src="./story-project-plan-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryProjectPlanViewBase } from './story-project-plan-view-base';
import view_form from '@widgets/story/project-plan-form/project-plan-form.vue';

/**
 * 按照计划关联视图
 *
 * @export
 * @class StoryProjectPlanView
 * @extends {StoryProjectPlanViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class StoryProjectPlanView extends StoryProjectPlanViewBase {}
</script>
