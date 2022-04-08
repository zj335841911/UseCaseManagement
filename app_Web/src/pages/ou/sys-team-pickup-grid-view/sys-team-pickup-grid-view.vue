<template src="./sys-team-pickup-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysTeamPickupGridViewBase } from './sys-team-pickup-grid-view-base';
import view_grid from '@widgets/sys-team/main-grid/main-grid.vue';
import view_searchform from '@widgets/sys-team/default-searchform/default-searchform.vue';

/**
 * 组选择表格视图视图
 *
 * @export
 * @class SysTeamPickupGridView
 * @extends {SysTeamPickupGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class SysTeamPickupGridView extends SysTeamPickupGridViewBase {}
</script>
