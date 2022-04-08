<template src="./plan-new-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PlanNewEditFormBase } from './plan-new-form-base';
 

/**
 * form部件
 *
 * @export
 * @class PlanNewEditForm
 * @extends {PlanNewEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class PlanNewEditForm extends PlanNewEditFormBase {}
</script>
