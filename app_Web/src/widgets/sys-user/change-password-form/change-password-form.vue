<template src="./change-password-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ChangePasswordEditFormBase } from './change-password-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ChangePasswordEditForm
 * @extends {ChangePasswordEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ChangePasswordEditForm extends ChangePasswordEditFormBase {}
</script>
