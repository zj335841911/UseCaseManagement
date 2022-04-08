<template src="./product-dashboard-info-main-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductDashboardInfoMainView9Base } from './product-dashboard-info-main-view9-base';
import view_form from '@widgets/product/dashboard-info-form/dashboard-info-form.vue';

/**
 * 产品信息视图
 *
 * @export
 * @class ProductDashboardInfoMainView9
 * @extends {ProductDashboardInfoMainView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProductDashboardInfoMainView9 extends ProductDashboardInfoMainView9Base {}
</script>
