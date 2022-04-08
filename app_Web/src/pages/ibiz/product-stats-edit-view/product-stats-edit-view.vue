<template src="./product-stats-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductStatsEditViewBase } from './product-stats-edit-view-base';
import view_form from '@widgets/product-stats/main-form/main-form.vue';

/**
 * 产品统计编辑视图视图
 *
 * @export
 * @class ProductStatsEditView
 * @extends {ProductStatsEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProductStatsEditView extends ProductStatsEditViewBase {}
</script>
