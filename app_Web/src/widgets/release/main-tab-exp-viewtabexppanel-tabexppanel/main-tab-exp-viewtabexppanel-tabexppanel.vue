<template src="./main-tab-exp-viewtabexppanel-tabexppanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainTabExpViewtabexppanelTabexppanelBase } from './main-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel from '@widgets/release/main-tab-exp-viewtabviewpanel-tabviewpanel/main-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/release/main-tab-exp-viewtabviewpanel2-tabviewpanel/main-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/release/main-tab-exp-viewtabviewpanel3-tabviewpanel/main-tab-exp-viewtabviewpanel3-tabviewpanel.vue';
import view_tabviewpanel4 from '@widgets/release/main-tab-exp-viewtabviewpanel4-tabviewpanel/main-tab-exp-viewtabviewpanel4-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class MainTabExpViewtabexppanelTabexppanel
 * @extends {MainTabExpViewtabexppanelTabexppanelBase}
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
export default class MainTabExpViewtabexppanelTabexppanel extends MainTabExpViewtabexppanelTabexppanelBase {}
</script>
