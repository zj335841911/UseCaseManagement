<template src="./ibz-reportly-main-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzReportlyMainGridViewBase } from './ibz-reportly-main-grid-view-base';
import view_grid from '@widgets/ibz-reportly/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibz-reportly/default-searchform/default-searchform.vue';

/**
 * 汇报表格视图视图
 *
 * @export
 * @class IbzReportlyMainGridView
 * @extends {IbzReportlyMainGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbzReportlyMainGridView extends IbzReportlyMainGridViewBase {}
</script>
