<template src="./product-main-view-edit.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductMainView_EditBase } from './product-main-view-edit-base';
import view_form from '@widgets/product/main-edit-form/main-edit-form.vue';

/**
 * 产品编辑视图视图
 *
 * @export
 * @class ProductMainView_Edit
 * @extends {ProductMainView_EditBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProductMainView_Edit extends ProductMainView_EditBase {}
</script>
