<template src="./create-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CreateEditFormBase } from './create-form-base';
 

/**
 * form部件
 *
 * @export
 * @class CreateEditForm
 * @extends {CreateEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CreateEditForm extends CreateEditFormBase {}
</script>
