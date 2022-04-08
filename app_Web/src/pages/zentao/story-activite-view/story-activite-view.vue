<template src="./story-activite-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryActiviteViewBase } from './story-activite-view-base';
import view_form from '@widgets/story/activation-form/activation-form.vue';

/**
 * 需求激活视图
 *
 * @export
 * @class StoryActiviteView
 * @extends {StoryActiviteViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class StoryActiviteView extends StoryActiviteViewBase {}
</script>
