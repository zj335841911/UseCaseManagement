<template src="./product-main-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductMainTabExpViewBase } from './product-main-tab-exp-view-base';
import view_tabexppanel from '@widgets/product/main-tab-exp-viewtabexppanel-tabexppanel/main-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 产品视图
 *
 * @export
 * @class ProductMainTabExpView
 * @extends {ProductMainTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class ProductMainTabExpView extends ProductMainTabExpViewBase {}
</script>
