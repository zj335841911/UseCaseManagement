<template src="./more-tab-exp-viewtabexppanel-tabexppanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MoreTabExpViewtabexppanelTabexppanelBase } from './more-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel from '@widgets/task/more-tab-exp-viewtabviewpanel-tabviewpanel/more-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/task/more-tab-exp-viewtabviewpanel2-tabviewpanel/more-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class MoreTabExpViewtabexppanelTabexppanel
 * @extends {MoreTabExpViewtabexppanelTabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel,
        view_tabviewpanel2,
         
    },
})
@VueLifeCycleProcessing()
export default class MoreTabExpViewtabexppanelTabexppanel extends MoreTabExpViewtabexppanelTabexppanelBase {}
</script>
