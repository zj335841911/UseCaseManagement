<template src="./create-form-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CreateFormEditFormBase } from './create-form-form-base';
 

/**
 * form部件
 *
 * @export
 * @class CreateFormEditForm
 * @extends {CreateFormEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CreateFormEditForm extends CreateFormEditFormBase {}
</script>
