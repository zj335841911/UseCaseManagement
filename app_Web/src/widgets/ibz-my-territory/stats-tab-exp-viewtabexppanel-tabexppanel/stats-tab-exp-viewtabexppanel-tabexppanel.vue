<template src="./stats-tab-exp-viewtabexppanel-tabexppanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StatsTabExpViewtabexppanelTabexppanelBase } from './stats-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel3 from '@widgets/ibz-my-territory/stats-tab-exp-viewtabviewpanel3-tabviewpanel/stats-tab-exp-viewtabviewpanel3-tabviewpanel.vue';
import view_tabviewpanel5 from '@widgets/ibz-my-territory/stats-tab-exp-viewtabviewpanel5-tabviewpanel/stats-tab-exp-viewtabviewpanel5-tabviewpanel.vue';
import view_tabviewpanel from '@widgets/ibz-my-territory/stats-tab-exp-viewtabviewpanel-tabviewpanel/stats-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/ibz-my-territory/stats-tab-exp-viewtabviewpanel2-tabviewpanel/stats-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel6 from '@widgets/ibz-my-territory/stats-tab-exp-viewtabviewpanel6-tabviewpanel/stats-tab-exp-viewtabviewpanel6-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class StatsTabExpViewtabexppanelTabexppanel
 * @extends {StatsTabExpViewtabexppanelTabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel3,
        view_tabviewpanel5,
        view_tabviewpanel,
        view_tabviewpanel2,
        view_tabviewpanel6,
         
    },
})
@VueLifeCycleProcessing()
export default class StatsTabExpViewtabexppanelTabexppanel extends StatsTabExpViewtabexppanelTabexppanelBase {}
</script>
