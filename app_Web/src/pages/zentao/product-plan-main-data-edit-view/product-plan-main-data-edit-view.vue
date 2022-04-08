<template src="./product-plan-main-data-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductPlanMainDataEditViewBase } from './product-plan-main-data-edit-view-base';
import view_form from '@widgets/product-plan/main-data-form/main-data-form.vue';

/**
 * 产品计划编辑视图视图
 *
 * @export
 * @class ProductPlanMainDataEditView
 * @extends {ProductPlanMainDataEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProductPlanMainDataEditView extends ProductPlanMainDataEditViewBase {}
</script>
