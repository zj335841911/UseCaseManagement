<template src="./story-main-view9-story-spec.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryMainView9_StorySpecBase } from './story-main-view9-story-spec-base';
import view_form from '@widgets/story/story-spec-form/story-spec-form.vue';

/**
 * 需求编辑视图视图
 *
 * @export
 * @class StoryMainView9_StorySpec
 * @extends {StoryMainView9_StorySpecBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class StoryMainView9_StorySpec extends StoryMainView9_StorySpecBase {}
</script>
