<template src="./product-wizard-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductWizardViewBase } from './product-wizard-view-base';
import view_wizardpanel from '@widgets/product/product-wizard-wizardpanel/product-wizard-wizardpanel.vue';

/**
 * 产品向导视图视图
 *
 * @export
 * @class ProductWizardView
 * @extends {ProductWizardViewBase}
 */
@Component({
    components: {
        view_wizardpanel, 
    }
})
@VueLifeCycleProcessing()
export default class ProductWizardView extends ProductWizardViewBase { }
</script>
