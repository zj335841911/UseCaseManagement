<template src="./import-plan-templet-form.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ImportPlanTempletEditFormBase } from './import-plan-templet-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ImportPlanTempletEditForm
 * @extends {ImportPlanTempletEditFormBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ImportPlanTempletEditForm extends ImportPlanTempletEditFormBase {}
</script>
