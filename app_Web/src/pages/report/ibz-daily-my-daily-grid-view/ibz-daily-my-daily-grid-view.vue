<template src="./ibz-daily-my-daily-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzDailyMyDailyGridViewBase } from './ibz-daily-my-daily-grid-view-base';
import view_grid from '@widgets/ibz-daily/my-main-grid/my-main-grid.vue';

/**
 * 日报表格视图视图
 *
 * @export
 * @class IbzDailyMyDailyGridView
 * @extends {IbzDailyMyDailyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class IbzDailyMyDailyGridView extends IbzDailyMyDailyGridViewBase {}
</script>
