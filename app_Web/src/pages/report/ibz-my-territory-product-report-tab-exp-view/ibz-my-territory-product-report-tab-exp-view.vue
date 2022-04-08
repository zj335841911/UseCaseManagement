<template src="./ibz-my-territory-product-report-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryProductReportTabExpViewBase } from './ibz-my-territory-product-report-tab-exp-view-base';
import view_tabexppanel from '@widgets/ibz-my-territory/product-report-tab-exp-viewtabexppanel-tabexppanel/product-report-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 我的地盘分页导航视图视图
 *
 * @export
 * @class IbzMyTerritoryProductReportTabExpView
 * @extends {IbzMyTerritoryProductReportTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryProductReportTabExpView extends IbzMyTerritoryProductReportTabExpViewBase {}
</script>
