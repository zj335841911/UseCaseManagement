<template src="./activation-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActivationEditFormBase } from './activation-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ActivationEditForm
 * @extends {ActivationEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ActivationEditForm extends ActivationEditFormBase {}
</script>
