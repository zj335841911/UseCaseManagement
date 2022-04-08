<template src="./story-close-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryCloseViewBase } from './story-close-view-base';
import view_form from '@widgets/story/cosed-form/cosed-form.vue';

/**
 * 需求关闭视图
 *
 * @export
 * @class StoryCloseView
 * @extends {StoryCloseViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class StoryCloseView extends StoryCloseViewBase {}
</script>
