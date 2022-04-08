<template src="./my-test-tab-exp-viewtabexppanel-tabexppanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MyTestTabExpViewtabexppanelTabexppanelBase } from './my-test-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel3 from '@widgets/product/my-test-tab-exp-viewtabviewpanel3-tabviewpanel/my-test-tab-exp-viewtabviewpanel3-tabviewpanel.vue';
import view_tabviewpanel4 from '@widgets/product/my-test-tab-exp-viewtabviewpanel4-tabviewpanel/my-test-tab-exp-viewtabviewpanel4-tabviewpanel.vue';
import view_tabviewpanel5 from '@widgets/product/my-test-tab-exp-viewtabviewpanel5-tabviewpanel/my-test-tab-exp-viewtabviewpanel5-tabviewpanel.vue';
import view_tabviewpanel6 from '@widgets/product/my-test-tab-exp-viewtabviewpanel6-tabviewpanel/my-test-tab-exp-viewtabviewpanel6-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class MyTestTabExpViewtabexppanelTabexppanel
 * @extends {MyTestTabExpViewtabexppanelTabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel3,
        view_tabviewpanel4,
        view_tabviewpanel5,
        view_tabviewpanel6,
         
    },
})
@VueLifeCycleProcessing()
export default class MyTestTabExpViewtabexppanelTabexppanel extends MyTestTabExpViewtabexppanelTabexppanelBase {}
</script>
