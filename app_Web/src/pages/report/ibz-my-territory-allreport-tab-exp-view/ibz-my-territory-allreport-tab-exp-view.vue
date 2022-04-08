<template src="./ibz-my-territory-allreport-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryALLReportTabExpViewBase } from './ibz-my-territory-allreport-tab-exp-view-base';
import view_tabexppanel from '@widgets/ibz-my-territory/allreport-tab-exp-viewtabexppanel-tabexppanel/allreport-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 我的地盘分页导航视图视图
 *
 * @export
 * @class IbzMyTerritoryALLReportTabExpView
 * @extends {IbzMyTerritoryALLReportTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryALLReportTabExpView extends IbzMyTerritoryALLReportTabExpViewBase {}
</script>
