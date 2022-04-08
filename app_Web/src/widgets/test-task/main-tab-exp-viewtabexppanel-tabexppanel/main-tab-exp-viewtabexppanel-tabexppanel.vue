<template src="./main-tab-exp-viewtabexppanel-tabexppanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainTabExpViewtabexppanelTabexppanelBase } from './main-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel from '@widgets/test-task/main-tab-exp-viewtabviewpanel-tabviewpanel/main-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/test-task/main-tab-exp-viewtabviewpanel2-tabviewpanel/main-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
 

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
         
    },
})
@VueLifeCycleProcessing()
export default class MainTabExpViewtabexppanelTabexppanel extends MainTabExpViewtabexppanelTabexppanelBase {}
</script>
