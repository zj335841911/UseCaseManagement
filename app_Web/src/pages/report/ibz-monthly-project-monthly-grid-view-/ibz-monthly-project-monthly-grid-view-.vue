<template src="./ibz-monthly-project-monthly-grid-view-.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMonthlyProjectMonthlyGridView_Base } from './ibz-monthly-project-monthly-grid-view--base';
import view_grid from '@widgets/ibz-monthly/month-main-grid/month-main-grid.vue';
import view_searchform from '@widgets/ibz-monthly/default-searchform/default-searchform.vue';

/**
 * 月报表格视图视图
 *
 * @export
 * @class IbzMonthlyProjectMonthlyGridView_
 * @extends {IbzMonthlyProjectMonthlyGridView_Base}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMonthlyProjectMonthlyGridView_ extends IbzMonthlyProjectMonthlyGridView_Base {}
</script>
