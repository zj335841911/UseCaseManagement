<template src="./product-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductEditViewBase } from './product-edit-view-base';
import view_form from '@widgets/product/main-form/main-form.vue';

/**
 * 产品编辑视图视图
 *
 * @export
 * @class ProductEditView
 * @extends {ProductEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProductEditView extends ProductEditViewBase {}
</script>
