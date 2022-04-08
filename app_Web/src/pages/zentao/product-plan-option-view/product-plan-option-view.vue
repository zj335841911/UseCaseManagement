<template src="./product-plan-option-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductPlanOptionViewBase } from './product-plan-option-view-base';
import view_form from '@widgets/product-plan/import-plan-templet-form/import-plan-templet-form.vue';

/**
 * 导入计划模板视图
 *
 * @export
 * @class ProductPlanOptionView
 * @extends {ProductPlanOptionViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProductPlanOptionView extends ProductPlanOptionViewBase {}
</script>
