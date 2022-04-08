<template src="./tab-exp-viewtabexppanel-tabexppanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TabExpViewtabexppanelTabexppanelBase } from './tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel from '@widgets/story/tab-exp-viewtabviewpanel-tabviewpanel/tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/story/tab-exp-viewtabviewpanel2-tabviewpanel/tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/story/tab-exp-viewtabviewpanel3-tabviewpanel/tab-exp-viewtabviewpanel3-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class TabExpViewtabexppanelTabexppanel
 * @extends {TabExpViewtabexppanelTabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel,
        view_tabviewpanel2,
        view_tabviewpanel3,
         
    },
})
@VueLifeCycleProcessing()
export default class TabExpViewtabexppanelTabexppanel extends TabExpViewtabexppanelTabexppanelBase {}
</script>
