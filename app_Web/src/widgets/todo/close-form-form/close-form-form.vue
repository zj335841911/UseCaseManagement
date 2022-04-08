<template src="./close-form-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CloseFormEditFormBase } from './close-form-form-base';
 

/**
 * form部件
 *
 * @export
 * @class CloseFormEditForm
 * @extends {CloseFormEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CloseFormEditForm extends CloseFormEditFormBase {}
</script>
