<template src="./new-plan-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { NewPlanEditFormBase } from './new-plan-form-base';
 

/**
 * form部件
 *
 * @export
 * @class NewPlanEditForm
 * @extends {NewPlanEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class NewPlanEditForm extends NewPlanEditFormBase {}
</script>
