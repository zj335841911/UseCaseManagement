<template src="./my-tab-exp-viewtabexppanel-tabexppanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyTabExpViewtabexppanelTabexppanelBase } from './my-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel from '@widgets/ibz-report/my-tab-exp-viewtabviewpanel-tabviewpanel/my-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/ibz-report/my-tab-exp-viewtabviewpanel2-tabviewpanel/my-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/ibz-report/my-tab-exp-viewtabviewpanel3-tabviewpanel/my-tab-exp-viewtabviewpanel3-tabviewpanel.vue';
import view_tabviewpanel4 from '@widgets/ibz-report/my-tab-exp-viewtabviewpanel4-tabviewpanel/my-tab-exp-viewtabviewpanel4-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class MyTabExpViewtabexppanelTabexppanel
 * @extends {MyTabExpViewtabexppanelTabexppanelBase}
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
export default class MyTabExpViewtabexppanelTabexppanel extends MyTabExpViewtabexppanelTabexppanelBase {}
</script>
