<template src="./product-edit-view-close.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductEditView_CloseBase } from './product-edit-view-close-base';
import view_form from '@widgets/product/close-form/close-form.vue';

/**
 * 关闭产品视图
 *
 * @export
 * @class ProductEditView_Close
 * @extends {ProductEditView_CloseBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProductEditView_Close extends ProductEditView_CloseBase {}
</script>
