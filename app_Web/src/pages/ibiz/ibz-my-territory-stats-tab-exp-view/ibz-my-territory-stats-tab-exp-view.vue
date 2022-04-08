<template src="./ibz-my-territory-stats-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryStatsTabExpViewBase } from './ibz-my-territory-stats-tab-exp-view-base';
import view_tabexppanel from '@widgets/ibz-my-territory/stats-tab-exp-viewtabexppanel-tabexppanel/stats-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 我的地盘分页导航视图（统计）视图
 *
 * @export
 * @class IbzMyTerritoryStatsTabExpView
 * @extends {IbzMyTerritoryStatsTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryStatsTabExpView extends IbzMyTerritoryStatsTabExpViewBase {}
</script>
