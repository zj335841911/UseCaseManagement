<template src="./story-main-view9-related.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryMainView9_RelatedBase } from './story-main-view9-related-base';
import view_form from '@widgets/story/related-form/related-form.vue';

/**
 * 需求编辑视图视图
 *
 * @export
 * @class StoryMainView9_Related
 * @extends {StoryMainView9_RelatedBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class StoryMainView9_Related extends StoryMainView9_RelatedBase {}
</script>
