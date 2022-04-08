<template src="./allreport-tab-exp-viewtabexppanel-tabexppanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ALLReportTabExpViewtabexppanelTabexppanelBase } from './allreport-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel from '@widgets/ibz-my-territory/allreport-tab-exp-viewtabviewpanel-tabviewpanel/allreport-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/ibz-my-territory/allreport-tab-exp-viewtabviewpanel2-tabviewpanel/allreport-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/ibz-my-territory/allreport-tab-exp-viewtabviewpanel3-tabviewpanel/allreport-tab-exp-viewtabviewpanel3-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class ALLReportTabExpViewtabexppanelTabexppanel
 * @extends {ALLReportTabExpViewtabexppanelTabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel,
        view_tabviewpanel2,
        view_tabviewpanel3,
         
    },
})
@VueLifeCycleProcessing()
export default class ALLReportTabExpViewtabexppanelTabexppanel extends ALLReportTabExpViewtabexppanelTabexppanelBase {}
</script>
