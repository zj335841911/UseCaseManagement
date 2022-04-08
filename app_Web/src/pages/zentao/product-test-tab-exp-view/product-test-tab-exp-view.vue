<template src="./product-test-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductTestTabExpViewBase } from './product-test-tab-exp-view-base';
import view_tabexppanel from '@widgets/product/test-tab-exp-viewtabexppanel-tabexppanel/test-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 测试视图
 *
 * @export
 * @class ProductTestTabExpView
 * @extends {ProductTestTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class ProductTestTabExpView extends ProductTestTabExpViewBase {}
</script>
