<template src="./ibz-daily-project-daily-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzDailyProjectDailyGridViewBase } from './ibz-daily-project-daily-grid-view-base';
import view_grid from '@widgets/ibz-daily/project-daily-main-grid/project-daily-main-grid.vue';
import view_searchform from '@widgets/ibz-daily/default-searchform/default-searchform.vue';

/**
 * 日报表格视图视图
 *
 * @export
 * @class IbzDailyProjectDailyGridView
 * @extends {IbzDailyProjectDailyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbzDailyProjectDailyGridView extends IbzDailyProjectDailyGridViewBase {}
</script>
