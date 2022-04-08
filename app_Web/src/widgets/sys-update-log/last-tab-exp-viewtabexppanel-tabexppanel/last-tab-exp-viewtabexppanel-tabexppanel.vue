<template src="./last-tab-exp-viewtabexppanel-tabexppanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { LastTabExpViewtabexppanelTabexppanelBase } from './last-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel2 from '@widgets/sys-update-log/last-tab-exp-viewtabviewpanel2-tabviewpanel/last-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel from '@widgets/sys-update-log/last-tab-exp-viewtabviewpanel-tabviewpanel/last-tab-exp-viewtabviewpanel-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class LastTabExpViewtabexppanelTabexppanel
 * @extends {LastTabExpViewtabexppanelTabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel2,
        view_tabviewpanel,
         
    },
})
@VueLifeCycleProcessing()
export default class LastTabExpViewtabexppanelTabexppanel extends LastTabExpViewtabexppanelTabexppanelBase {}
</script>
