<template src="./ibz-my-territory-user-finish-task-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryUserFinishTaskGridViewBase } from './ibz-my-territory-user-finish-task-grid-view-base';
import view_grid from '@widgets/ibz-my-territory/user-finish-task-sum-grid/user-finish-task-sum-grid.vue';
import view_searchform from '@widgets/ibz-my-territory/default-searchform/default-searchform.vue';

/**
 * 我的地盘表格视图视图
 *
 * @export
 * @class IbzMyTerritoryUserFinishTaskGridView
 * @extends {IbzMyTerritoryUserFinishTaskGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryUserFinishTaskGridView extends IbzMyTerritoryUserFinishTaskGridViewBase {}
</script>
