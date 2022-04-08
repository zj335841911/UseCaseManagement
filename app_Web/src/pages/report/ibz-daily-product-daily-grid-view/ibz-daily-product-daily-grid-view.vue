<template src="./ibz-daily-product-daily-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzDailyProductDailyGridViewBase } from './ibz-daily-product-daily-grid-view-base';
import view_grid from '@widgets/ibz-daily/product-daily-main-grid/product-daily-main-grid.vue';

/**
 * 日报表格视图视图
 *
 * @export
 * @class IbzDailyProductDailyGridView
 * @extends {IbzDailyProductDailyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class IbzDailyProductDailyGridView extends IbzDailyProductDailyGridViewBase {}
</script>
