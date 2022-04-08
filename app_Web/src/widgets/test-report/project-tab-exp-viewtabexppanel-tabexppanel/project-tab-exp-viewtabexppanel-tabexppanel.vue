<template src="./project-tab-exp-viewtabexppanel-tabexppanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectTabExpViewtabexppanelTabexppanelBase } from './project-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel from '@widgets/test-report/project-tab-exp-viewtabviewpanel-tabviewpanel/project-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/test-report/project-tab-exp-viewtabviewpanel2-tabviewpanel/project-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel4 from '@widgets/test-report/project-tab-exp-viewtabviewpanel4-tabviewpanel/project-tab-exp-viewtabviewpanel4-tabviewpanel.vue';
import view_tabviewpanel5 from '@widgets/test-report/project-tab-exp-viewtabviewpanel5-tabviewpanel/project-tab-exp-viewtabviewpanel5-tabviewpanel.vue';
import view_tabviewpanel6 from '@widgets/test-report/project-tab-exp-viewtabviewpanel6-tabviewpanel/project-tab-exp-viewtabviewpanel6-tabviewpanel.vue';
import view_tabviewpanel8 from '@widgets/test-report/project-tab-exp-viewtabviewpanel8-tabviewpanel/project-tab-exp-viewtabviewpanel8-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/test-report/project-tab-exp-viewtabviewpanel3-tabviewpanel/project-tab-exp-viewtabviewpanel3-tabviewpanel.vue';
import view_tabviewpanel7 from '@widgets/test-report/project-tab-exp-viewtabviewpanel7-tabviewpanel/project-tab-exp-viewtabviewpanel7-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class ProjectTabExpViewtabexppanelTabexppanel
 * @extends {ProjectTabExpViewtabexppanelTabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel,
        view_tabviewpanel2,
        view_tabviewpanel4,
        view_tabviewpanel5,
        view_tabviewpanel6,
        view_tabviewpanel8,
        view_tabviewpanel3,
        view_tabviewpanel7,
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectTabExpViewtabexppanelTabexppanel extends ProjectTabExpViewtabexppanelTabexppanelBase {}
</script>
