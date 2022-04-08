<template src="./storyto-story-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StorytoStoryEditViewBase } from './storyto-story-edit-view-base';
import view_form from '@widgets/story/bug-to-story-form/bug-to-story-form.vue';

/**
 * 需求视图
 *
 * @export
 * @class StorytoStoryEditView
 * @extends {StorytoStoryEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class StorytoStoryEditView extends StorytoStoryEditViewBase {}
</script>
