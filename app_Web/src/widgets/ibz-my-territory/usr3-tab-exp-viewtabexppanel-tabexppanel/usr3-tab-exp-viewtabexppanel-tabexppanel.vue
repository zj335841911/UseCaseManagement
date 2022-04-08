<template src="./usr3-tab-exp-viewtabexppanel-tabexppanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Usr3TabExpViewtabexppanelTabexppanelBase } from './usr3-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel3 from '@widgets/ibz-my-territory/usr3-tab-exp-viewtabviewpanel3-tabviewpanel/usr3-tab-exp-viewtabviewpanel3-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/ibz-my-territory/usr3-tab-exp-viewtabviewpanel2-tabviewpanel/usr3-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel from '@widgets/ibz-my-territory/usr3-tab-exp-viewtabviewpanel-tabviewpanel/usr3-tab-exp-viewtabviewpanel-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class Usr3TabExpViewtabexppanelTabexppanel
 * @extends {Usr3TabExpViewtabexppanelTabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel3,
        view_tabviewpanel2,
        view_tabviewpanel,
         
    },
})
@VueLifeCycleProcessing()
export default class Usr3TabExpViewtabexppanelTabexppanel extends Usr3TabExpViewtabexppanelTabexppanelBase {}
</script>
