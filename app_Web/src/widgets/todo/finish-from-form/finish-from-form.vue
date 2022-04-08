<template src="./finish-from-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { FinishFromEditFormBase } from './finish-from-form-base';
 

/**
 * form部件
 *
 * @export
 * @class FinishFromEditForm
 * @extends {FinishFromEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class FinishFromEditForm extends FinishFromEditFormBase {}
</script>
