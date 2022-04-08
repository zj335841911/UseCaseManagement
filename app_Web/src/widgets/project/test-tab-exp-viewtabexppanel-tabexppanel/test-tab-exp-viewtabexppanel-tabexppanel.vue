<template src="./test-tab-exp-viewtabexppanel-tabexppanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTabExpViewtabexppanelTabexppanelBase } from './test-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel from '@widgets/project/test-tab-exp-viewtabviewpanel-tabviewpanel/test-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel4 from '@widgets/project/test-tab-exp-viewtabviewpanel4-tabviewpanel/test-tab-exp-viewtabviewpanel4-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/project/test-tab-exp-viewtabviewpanel3-tabviewpanel/test-tab-exp-viewtabviewpanel3-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/project/test-tab-exp-viewtabviewpanel2-tabviewpanel/test-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class TestTabExpViewtabexppanelTabexppanel
 * @extends {TestTabExpViewtabexppanelTabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel,
        view_tabviewpanel4,
        view_tabviewpanel3,
        view_tabviewpanel2,
         
    },
})
@VueLifeCycleProcessing()
export default class TestTabExpViewtabexppanelTabexppanel extends TestTabExpViewtabexppanelTabexppanelBase {}
</script>
