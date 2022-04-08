<template src="./create-edit-form-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CreateEditFormEditFormBase } from './create-edit-form-form-base';
 

/**
 * form部件
 *
 * @export
 * @class CreateEditFormEditForm
 * @extends {CreateEditFormEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CreateEditFormEditForm extends CreateEditFormEditFormBase {}
</script>
