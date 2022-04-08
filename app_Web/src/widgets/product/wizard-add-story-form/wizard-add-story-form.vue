<template src="./wizard-add-story-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { WizardAddStoryEditFormBase } from './wizard-add-story-form-base';
 

/**
 * wizardpanel_form_AddStory部件
 *
 * @export
 * @class WizardAddStoryEditForm
 * @extends {WizardAddStoryEditFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class WizardAddStoryEditForm extends WizardAddStoryEditFormBase { }
</script>
