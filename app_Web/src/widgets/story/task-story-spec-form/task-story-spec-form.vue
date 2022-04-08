<template src="./task-story-spec-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskStorySpecEditFormBase } from './task-story-spec-form-base';
 

/**
 * form部件
 *
 * @export
 * @class TaskStorySpecEditForm
 * @extends {TaskStorySpecEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TaskStorySpecEditForm extends TaskStorySpecEditFormBase {}
</script>
