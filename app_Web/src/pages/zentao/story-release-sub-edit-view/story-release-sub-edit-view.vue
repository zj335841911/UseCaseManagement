<template src="./story-release-sub-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryReleaseSubEditViewBase } from './story-release-sub-edit-view-base';
import view_form from '@widgets/story/main-new-mode-form/main-new-mode-form.vue';

/**
 * 需求视图
 *
 * @export
 * @class StoryReleaseSubEditView
 * @extends {StoryReleaseSubEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class StoryReleaseSubEditView extends StoryReleaseSubEditViewBase {}
</script>
