<template src="./product-sum-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductSumEditViewBase } from './product-sum-edit-view-base';
import view_form from '@widgets/product-sum/main-form/main-form.vue';

/**
 * 产品汇总表编辑视图视图
 *
 * @export
 * @class ProductSumEditView
 * @extends {ProductSumEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProductSumEditView extends ProductSumEditViewBase {}
</script>
