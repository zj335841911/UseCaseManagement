<template src="./ibz-my-territory-dashboard-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryDashboardViewBase } from './ibz-my-territory-dashboard-view-base';
import view_dashboard from '@widgets/ibz-my-territory/home-dashboard/home-dashboard.vue';

/**
 * 首页视图
 *
 * @export
 * @class IbzMyTerritoryDashboardView
 * @extends {IbzMyTerritoryDashboardViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryDashboardView extends IbzMyTerritoryDashboardViewBase {}
</script>
