<template src="./confirm-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ConfirmEditFormBase } from './confirm-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ConfirmEditForm
 * @extends {ConfirmEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ConfirmEditForm extends ConfirmEditFormBase {}
</script>
