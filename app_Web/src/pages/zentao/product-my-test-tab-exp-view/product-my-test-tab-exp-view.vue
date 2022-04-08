<template src="./product-my-test-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductMyTestTabExpViewBase } from './product-my-test-tab-exp-view-base';
import view_tabexppanel from '@widgets/product/my-test-tab-exp-viewtabexppanel-tabexppanel/my-test-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 测试视图
 *
 * @export
 * @class ProductMyTestTabExpView
 * @extends {ProductMyTestTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class ProductMyTestTabExpView extends ProductMyTestTabExpViewBase {}
</script>
