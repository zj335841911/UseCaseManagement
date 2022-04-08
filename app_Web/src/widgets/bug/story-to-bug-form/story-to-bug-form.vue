<template src="./story-to-bug-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryToBugEditFormBase } from './story-to-bug-form-base';
 

/**
 * form部件
 *
 * @export
 * @class StoryToBugEditForm
 * @extends {StoryToBugEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class StoryToBugEditForm extends StoryToBugEditFormBase {}
</script>
