<template src="./activate-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActivateEditFormBase } from './activate-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ActivateEditForm
 * @extends {ActivateEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ActivateEditForm extends ActivateEditFormBase {}
</script>
