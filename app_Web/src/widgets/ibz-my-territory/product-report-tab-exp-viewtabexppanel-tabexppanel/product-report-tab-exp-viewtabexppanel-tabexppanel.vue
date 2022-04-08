<template src="./product-report-tab-exp-viewtabexppanel-tabexppanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductReportTabExpViewtabexppanelTabexppanelBase } from './product-report-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel from '@widgets/ibz-my-territory/product-report-tab-exp-viewtabviewpanel-tabviewpanel/product-report-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/ibz-my-territory/product-report-tab-exp-viewtabviewpanel2-tabviewpanel/product-report-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/ibz-my-territory/product-report-tab-exp-viewtabviewpanel3-tabviewpanel/product-report-tab-exp-viewtabviewpanel3-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class ProductReportTabExpViewtabexppanelTabexppanel
 * @extends {ProductReportTabExpViewtabexppanelTabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel,
        view_tabviewpanel2,
        view_tabviewpanel3,
         
    },
})
@VueLifeCycleProcessing()
export default class ProductReportTabExpViewtabexppanelTabexppanel extends ProductReportTabExpViewtabexppanelTabexppanelBase {}
</script>
