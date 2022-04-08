<template src="./ibz-monthly-my-received-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMonthlyMyReceivedGridViewBase } from './ibz-monthly-my-received-grid-view-base';
import view_grid from '@widgets/ibz-monthly/my-received-grid/my-received-grid.vue';

/**
 * 月报表格视图视图
 *
 * @export
 * @class IbzMonthlyMyReceivedGridView
 * @extends {IbzMonthlyMyReceivedGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMonthlyMyReceivedGridView extends IbzMonthlyMyReceivedGridViewBase {}
</script>
