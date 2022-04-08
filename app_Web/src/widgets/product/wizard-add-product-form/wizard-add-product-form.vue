<template src="./wizard-add-product-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { WizardAddProductEditFormBase } from './wizard-add-product-form-base';
 

/**
 * wizardpanel_form_AddProduct部件
 *
 * @export
 * @class WizardAddProductEditForm
 * @extends {WizardAddProductEditFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class WizardAddProductEditForm extends WizardAddProductEditFormBase { }
</script>
<style lang='less'>
@import './wizard-add-product-form.less';
</style>
