<template src="./story-main-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryMainView9Base } from './story-main-view9-base';
import view_form from '@widgets/story/main-form/main-form.vue';

/**
 * 需求编辑视图视图
 *
 * @export
 * @class StoryMainView9
 * @extends {StoryMainView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class StoryMainView9 extends StoryMainView9Base {}
</script>
