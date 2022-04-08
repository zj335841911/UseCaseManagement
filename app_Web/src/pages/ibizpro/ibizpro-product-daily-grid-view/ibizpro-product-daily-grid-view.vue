<template src="./ibizpro-product-daily-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbizproProductDailyGridViewBase } from './ibizpro-product-daily-grid-view-base';
import view_grid from '@widgets/ibizpro-product-daily/main-grid/main-grid.vue';

/**
 * 产品日报表格视图视图
 *
 * @export
 * @class IbizproProductDailyGridView
 * @extends {IbizproProductDailyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class IbizproProductDailyGridView extends IbizproProductDailyGridViewBase {}
</script>
