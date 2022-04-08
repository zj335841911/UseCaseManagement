<template src="./story-edit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryEditView9Base } from './story-edit-view9-base';
import view_form from '@widgets/story/task-story-spec-form/task-story-spec-form.vue';

/**
 * 关联需求视图
 *
 * @export
 * @class StoryEditView9
 * @extends {StoryEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class StoryEditView9 extends StoryEditView9Base {}
</script>
