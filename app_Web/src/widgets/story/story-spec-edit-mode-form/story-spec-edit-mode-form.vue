<template src="./story-spec-edit-mode-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StorySpec_EditModeEditFormBase } from './story-spec-edit-mode-form-base';
 

/**
 * form部件
 *
 * @export
 * @class StorySpec_EditModeEditForm
 * @extends {StorySpec_EditModeEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class StorySpec_EditModeEditForm extends StorySpec_EditModeEditFormBase {}
</script>
