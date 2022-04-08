<template src="./story-assign-to-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryAssignToViewBase } from './story-assign-to-view-base';
import view_form from '@widgets/story/assign-to-form/assign-to-form.vue';

/**
 * 指派视图
 *
 * @export
 * @class StoryAssignToView
 * @extends {StoryAssignToViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class StoryAssignToView extends StoryAssignToViewBase {}
</script>
