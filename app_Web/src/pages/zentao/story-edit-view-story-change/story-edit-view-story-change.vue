<template src="./story-edit-view-story-change.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryEditView_StoryChangeBase } from './story-edit-view-story-change-base';
import view_form from '@widgets/story/story-spec-edit-mode-form/story-spec-edit-mode-form.vue';

/**
 * 需求编辑视图视图
 *
 * @export
 * @class StoryEditView_StoryChange
 * @extends {StoryEditView_StoryChangeBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class StoryEditView_StoryChange extends StoryEditView_StoryChangeBase {}
</script>
