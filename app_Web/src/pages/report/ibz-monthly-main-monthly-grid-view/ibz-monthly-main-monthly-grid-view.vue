<template src="./ibz-monthly-main-monthly-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMonthlyMainMonthlyGridViewBase } from './ibz-monthly-main-monthly-grid-view-base';
import view_grid from '@widgets/ibz-monthly/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibz-monthly/default-searchform/default-searchform.vue';

/**
 * 月报表格视图视图
 *
 * @export
 * @class IbzMonthlyMainMonthlyGridView
 * @extends {IbzMonthlyMainMonthlyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMonthlyMainMonthlyGridView extends IbzMonthlyMainMonthlyGridViewBase {}
</script>
