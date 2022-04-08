<template src="./product-module-quick-cfg-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductModuleQuickCfgViewBase } from './product-module-quick-cfg-view-base';
import view_form from '@widgets/product-module/main-form/main-form.vue';

/**
 * 需求模块视图
 *
 * @export
 * @class ProductModuleQuickCfgView
 * @extends {ProductModuleQuickCfgViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProductModuleQuickCfgView extends ProductModuleQuickCfgViewBase {}
</script>
