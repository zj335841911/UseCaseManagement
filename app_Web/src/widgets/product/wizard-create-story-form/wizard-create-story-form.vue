<template src="./wizard-create-story-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { WizardCreateStoryEditFormBase } from './wizard-create-story-form-base';
 

/**
 * wizardpanel_form_CreateStory部件
 *
 * @export
 * @class WizardCreateStoryEditForm
 * @extends {WizardCreateStoryEditFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class WizardCreateStoryEditForm extends WizardCreateStoryEditFormBase { }
</script>
