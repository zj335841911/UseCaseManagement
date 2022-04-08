<template src="./story-main-view9-edit-mode.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryMainView9_EditModeBase } from './story-main-view9-edit-mode-base';
import view_form from '@widgets/story/main-edit-mode-form/main-edit-mode-form.vue';

/**
 * 需求编辑视图视图
 *
 * @export
 * @class StoryMainView9_EditMode
 * @extends {StoryMainView9_EditModeBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class StoryMainView9_EditMode extends StoryMainView9_EditModeBase {}
</script>
