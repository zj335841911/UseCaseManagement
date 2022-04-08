<template src="./ibz-reportly-my-received-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzReportlyMyReceivedGridViewBase } from './ibz-reportly-my-received-grid-view-base';
import view_grid from '@widgets/ibz-reportly/my-received-grid/my-received-grid.vue';

/**
 * 汇报表格视图视图
 *
 * @export
 * @class IbzReportlyMyReceivedGridView
 * @extends {IbzReportlyMyReceivedGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class IbzReportlyMyReceivedGridView extends IbzReportlyMyReceivedGridViewBase {}
</script>
