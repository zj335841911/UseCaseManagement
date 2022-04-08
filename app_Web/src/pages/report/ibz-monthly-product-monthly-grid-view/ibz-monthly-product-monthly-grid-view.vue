<template src="./ibz-monthly-product-monthly-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMonthlyProductMonthlyGridViewBase } from './ibz-monthly-product-monthly-grid-view-base';
import view_grid from '@widgets/ibz-monthly/product-monthly-main-grid/product-monthly-main-grid.vue';

/**
 * 月报表格视图视图
 *
 * @export
 * @class IbzMonthlyProductMonthlyGridView
 * @extends {IbzMonthlyProductMonthlyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMonthlyProductMonthlyGridView extends IbzMonthlyProductMonthlyGridViewBase {}
</script>
