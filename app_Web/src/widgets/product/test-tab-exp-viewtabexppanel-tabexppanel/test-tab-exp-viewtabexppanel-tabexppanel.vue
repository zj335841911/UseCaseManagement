<template src="./test-tab-exp-viewtabexppanel-tabexppanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTabExpViewtabexppanelTabexppanelBase } from './test-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel2 from '@widgets/product/test-tab-exp-viewtabviewpanel2-tabviewpanel/test-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel8 from '@widgets/product/test-tab-exp-viewtabviewpanel8-tabviewpanel/test-tab-exp-viewtabviewpanel8-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/product/test-tab-exp-viewtabviewpanel3-tabviewpanel/test-tab-exp-viewtabviewpanel3-tabviewpanel.vue';
import view_tabviewpanel4 from '@widgets/product/test-tab-exp-viewtabviewpanel4-tabviewpanel/test-tab-exp-viewtabviewpanel4-tabviewpanel.vue';
import view_tabviewpanel5 from '@widgets/product/test-tab-exp-viewtabviewpanel5-tabviewpanel/test-tab-exp-viewtabviewpanel5-tabviewpanel.vue';
import view_tabviewpanel6 from '@widgets/product/test-tab-exp-viewtabviewpanel6-tabviewpanel/test-tab-exp-viewtabviewpanel6-tabviewpanel.vue';
import view_tabviewpanel7 from '@widgets/product/test-tab-exp-viewtabviewpanel7-tabviewpanel/test-tab-exp-viewtabviewpanel7-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class TestTabExpViewtabexppanelTabexppanel
 * @extends {TestTabExpViewtabexppanelTabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel2,
        view_tabviewpanel8,
        view_tabviewpanel3,
        view_tabviewpanel4,
        view_tabviewpanel5,
        view_tabviewpanel6,
        view_tabviewpanel7,
         
    },
})
@VueLifeCycleProcessing()
export default class TestTabExpViewtabexppanelTabexppanel extends TestTabExpViewtabexppanelTabexppanelBase {}
</script>
