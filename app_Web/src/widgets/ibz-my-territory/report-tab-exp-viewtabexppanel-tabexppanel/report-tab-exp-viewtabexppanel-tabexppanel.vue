<template src="./report-tab-exp-viewtabexppanel-tabexppanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ReportTabExpViewtabexppanelTabexppanelBase } from './report-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel from '@widgets/ibz-my-territory/report-tab-exp-viewtabviewpanel-tabviewpanel/report-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/ibz-my-territory/report-tab-exp-viewtabviewpanel2-tabviewpanel/report-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/ibz-my-territory/report-tab-exp-viewtabviewpanel3-tabviewpanel/report-tab-exp-viewtabviewpanel3-tabviewpanel.vue';
import view_tabviewpanel4 from '@widgets/ibz-my-territory/report-tab-exp-viewtabviewpanel4-tabviewpanel/report-tab-exp-viewtabviewpanel4-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class ReportTabExpViewtabexppanelTabexppanel
 * @extends {ReportTabExpViewtabexppanelTabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel,
        view_tabviewpanel2,
        view_tabviewpanel3,
        view_tabviewpanel4,
         
    },
})
@VueLifeCycleProcessing()
export default class ReportTabExpViewtabexppanelTabexppanel extends ReportTabExpViewtabexppanelTabexppanelBase {}
</script>
