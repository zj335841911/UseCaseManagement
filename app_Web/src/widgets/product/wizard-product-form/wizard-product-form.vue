<template src="./wizard-product-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { WizardProductEditFormBase } from './wizard-product-form-base';
 

/**
 * wizardpanel_form_Product部件
 *
 * @export
 * @class WizardProductEditForm
 * @extends {WizardProductEditFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class WizardProductEditForm extends WizardProductEditFormBase { }
</script>
