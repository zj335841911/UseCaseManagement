<template src="./ibz-my-territory-report-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryReportTabExpViewBase } from './ibz-my-territory-report-tab-exp-view-base';
import view_tabexppanel from '@widgets/ibz-my-territory/report-tab-exp-viewtabexppanel-tabexppanel/report-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 我的地盘分页导航视图视图
 *
 * @export
 * @class IbzMyTerritoryReportTabExpView
 * @extends {IbzMyTerritoryReportTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryReportTabExpView extends IbzMyTerritoryReportTabExpViewBase {}
</script>
