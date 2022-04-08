<template src="./lib-tab-exp-viewtabexppanel-tabexppanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { LibTabExpViewtabexppanelTabexppanelBase } from './lib-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel4 from '@widgets/doc-lib/lib-tab-exp-viewtabviewpanel4-tabviewpanel/lib-tab-exp-viewtabviewpanel4-tabviewpanel.vue';
import view_tabviewpanel from '@widgets/doc-lib/lib-tab-exp-viewtabviewpanel-tabviewpanel/lib-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/doc-lib/lib-tab-exp-viewtabviewpanel2-tabviewpanel/lib-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/doc-lib/lib-tab-exp-viewtabviewpanel3-tabviewpanel/lib-tab-exp-viewtabviewpanel3-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class LibTabExpViewtabexppanelTabexppanel
 * @extends {LibTabExpViewtabexppanelTabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel4,
        view_tabviewpanel,
        view_tabviewpanel2,
        view_tabviewpanel3,
         
    },
})
@VueLifeCycleProcessing()
export default class LibTabExpViewtabexppanelTabexppanel extends LibTabExpViewtabexppanelTabexppanelBase {}
</script>
