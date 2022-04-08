<template src="./bug-to-story-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugToStoryEditFormBase } from './bug-to-story-form-base';
 

/**
 * form部件
 *
 * @export
 * @class BugToStoryEditForm
 * @extends {BugToStoryEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class BugToStoryEditForm extends BugToStoryEditFormBase {}
</script>
