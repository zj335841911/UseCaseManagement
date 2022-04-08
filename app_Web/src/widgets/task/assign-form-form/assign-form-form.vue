<template src="./assign-form-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { AssignFormEditFormBase } from './assign-form-form-base';
 

/**
 * form部件
 *
 * @export
 * @class AssignFormEditForm
 * @extends {AssignFormEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class AssignFormEditForm extends AssignFormEditFormBase {}
</script>
