<template src="./story-project-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryProjectEditViewBase } from './story-project-edit-view-base';
import view_form from '@widgets/story/main-project-new-form/main-project-new-form.vue';

/**
 * 需求视图
 *
 * @export
 * @class StoryProjectEditView
 * @extends {StoryProjectEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class StoryProjectEditView extends StoryProjectEditViewBase {}
</script>
