<template src="./company-stats-company-dynamic-stats-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CompanyStatsCompanyDynamicStatsGridViewBase } from './company-stats-company-dynamic-stats-grid-view-base';
import view_grid from '@widgets/company-stats/company-dynamic-stats-grid/company-dynamic-stats-grid.vue';
import view_searchform from '@widgets/company-stats/company-dynamic-static-searchform/company-dynamic-static-searchform.vue';

/**
 * 公司动态汇总表格视图视图
 *
 * @export
 * @class CompanyStatsCompanyDynamicStatsGridView
 * @extends {CompanyStatsCompanyDynamicStatsGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class CompanyStatsCompanyDynamicStatsGridView extends CompanyStatsCompanyDynamicStatsGridViewBase {}
</script>
