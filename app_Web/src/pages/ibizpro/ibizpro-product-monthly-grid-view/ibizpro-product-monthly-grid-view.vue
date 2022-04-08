<template src="./ibizpro-product-monthly-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbizproProductMonthlyGridViewBase } from './ibizpro-product-monthly-grid-view-base';
import view_grid from '@widgets/ibizpro-product-monthly/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibizpro-product-monthly/default-searchform/default-searchform.vue';

/**
 * 产品月报表格视图视图
 *
 * @export
 * @class IbizproProductMonthlyGridView
 * @extends {IbizproProductMonthlyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbizproProductMonthlyGridView extends IbizproProductMonthlyGridViewBase {}
</script>
