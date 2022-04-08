<template src="./assign-to-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { AssignToEditFormBase } from './assign-to-form-base';
 

/**
 * form部件
 *
 * @export
 * @class AssignToEditForm
 * @extends {AssignToEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class AssignToEditForm extends AssignToEditFormBase {}
</script>
