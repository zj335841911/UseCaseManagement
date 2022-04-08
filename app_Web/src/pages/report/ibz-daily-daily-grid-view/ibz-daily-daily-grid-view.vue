<template src="./ibz-daily-daily-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzDailyDailyGridViewBase } from './ibz-daily-daily-grid-view-base';
import view_grid from '@widgets/ibz-daily/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibz-daily/default-searchform/default-searchform.vue';

/**
 * 日报表格视图视图
 *
 * @export
 * @class IbzDailyDailyGridView
 * @extends {IbzDailyDailyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbzDailyDailyGridView extends IbzDailyDailyGridViewBase {}
</script>
