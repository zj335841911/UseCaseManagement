<template src="./product-plan-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductPlanEditViewBase } from './product-plan-edit-view-base';
import view_form from '@widgets/product-plan/main-form/main-form.vue';

/**
 * 计划视图
 *
 * @export
 * @class ProductPlanEditView
 * @extends {ProductPlanEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProductPlanEditView extends ProductPlanEditViewBase {}
</script>
