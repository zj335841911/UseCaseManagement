<template src="./story-rev-iew-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryRevIewViewBase } from './story-rev-iew-view-base';
import view_form from '@widgets/story/review-form/review-form.vue';

/**
 * 需求评审视图
 *
 * @export
 * @class StoryRevIewView
 * @extends {StoryRevIewViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class StoryRevIewView extends StoryRevIewViewBase {}
</script>
