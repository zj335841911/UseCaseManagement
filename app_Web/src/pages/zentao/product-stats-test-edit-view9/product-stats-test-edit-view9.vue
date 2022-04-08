<template src="./product-stats-test-edit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductStatsTestEditView9Base } from './product-stats-test-edit-view9-base';
import view_form from '@widgets/product-stats/test-main2-form/test-main2-form.vue';

/**
 * 产品统计编辑视图视图
 *
 * @export
 * @class ProductStatsTestEditView9
 * @extends {ProductStatsTestEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProductStatsTestEditView9 extends ProductStatsTestEditView9Base {}
</script>
