<template src="./story-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryEditViewBase } from './story-edit-view-base';
import view_form from '@widgets/story/main-new-mode-form/main-new-mode-form.vue';

/**
 * 需求视图
 *
 * @export
 * @class StoryEditView
 * @extends {StoryEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class StoryEditView extends StoryEditViewBase {}
</script>
