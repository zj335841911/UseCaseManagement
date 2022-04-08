<template src="./ibz-my-territory-project-report-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryProjectReportTabExpViewBase } from './ibz-my-territory-project-report-tab-exp-view-base';
import view_tabexppanel from '@widgets/ibz-my-territory/project-report-tab-exp-viewtabexppanel-tabexppanel/project-report-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 我的地盘分页导航视图视图
 *
 * @export
 * @class IbzMyTerritoryProjectReportTabExpView
 * @extends {IbzMyTerritoryProjectReportTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryProjectReportTabExpView extends IbzMyTerritoryProjectReportTabExpViewBase {}
</script>
