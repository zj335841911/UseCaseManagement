<template src="./main-sub-plan-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainSubPlanEditFormBase } from './main-sub-plan-form-base';
 

/**
 * form部件
 *
 * @export
 * @class MainSubPlanEditForm
 * @extends {MainSubPlanEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class MainSubPlanEditForm extends MainSubPlanEditFormBase {}
</script>
