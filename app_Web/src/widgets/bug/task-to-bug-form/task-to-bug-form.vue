<template src="./task-to-bug-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskToBugEditFormBase } from './task-to-bug-form-base';
 

/**
 * form部件
 *
 * @export
 * @class TaskToBugEditForm
 * @extends {TaskToBugEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TaskToBugEditForm extends TaskToBugEditFormBase {}
</script>
