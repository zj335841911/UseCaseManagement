<template src="./complete-form-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CompleteFormEditFormBase } from './complete-form-form-base';
 

/**
 * form部件
 *
 * @export
 * @class CompleteFormEditForm
 * @extends {CompleteFormEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CompleteFormEditForm extends CompleteFormEditFormBase {}
</script>
