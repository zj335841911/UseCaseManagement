<template src="./case-to-bug-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseToBugEditFormBase } from './case-to-bug-form-base';
 

/**
 * form部件
 *
 * @export
 * @class CaseToBugEditForm
 * @extends {CaseToBugEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class CaseToBugEditForm extends CaseToBugEditFormBase {}
</script>
