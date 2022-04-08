<template src="./product-wizard-wizardpanel.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductWizardWizardPanelBase } from './product-wizard-wizardpanel-base';
import view_wizardpanel_form_AddStory from '@widgets/product/wizard-add-story-form/wizard-add-story-form.vue';
import view_wizardpanel_form_AddProduct from '@widgets/product/wizard-add-product-form/wizard-add-product-form.vue';
import view_wizardpanel_form_Product from '@widgets/product/wizard-product-form/wizard-product-form.vue';
import view_wizardpanel_form_CreateStory from '@widgets/product/wizard-create-story-form/wizard-create-story-form.vue';
 

/**
 * wizardpanel部件
 *
 * @export
 * @class ProductWizardWizardPanel
 * @extends {ProductWizardWizardPanelBase}
 */
@Component({
    components: {
        view_wizardpanel_form_AddStory, 
        view_wizardpanel_form_AddProduct, 
        view_wizardpanel_form_Product, 
        view_wizardpanel_form_CreateStory, 
         
    }
})
@VueLifeCycleProcessing()
export default class ProductWizardWizardPanel extends ProductWizardWizardPanelBase { }
</script>
