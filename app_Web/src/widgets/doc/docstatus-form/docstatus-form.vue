<template src="./docstatus-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DOCSTATUSEditFormBase } from './docstatus-form-base';
 

/**
 * form部件
 *
 * @export
 * @class DOCSTATUSEditForm
 * @extends {DOCSTATUSEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class DOCSTATUSEditForm extends DOCSTATUSEditFormBase {}
</script>
