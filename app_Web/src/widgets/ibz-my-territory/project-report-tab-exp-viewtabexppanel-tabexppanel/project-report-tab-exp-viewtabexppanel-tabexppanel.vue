<template src="./project-report-tab-exp-viewtabexppanel-tabexppanel.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectReportTabExpViewtabexppanelTabexppanelBase } from './project-report-tab-exp-viewtabexppanel-tabexppanel-base';
import view_tabviewpanel from '@widgets/ibz-my-territory/project-report-tab-exp-viewtabviewpanel-tabviewpanel/project-report-tab-exp-viewtabviewpanel-tabviewpanel.vue';
import view_tabviewpanel2 from '@widgets/ibz-my-territory/project-report-tab-exp-viewtabviewpanel2-tabviewpanel/project-report-tab-exp-viewtabviewpanel2-tabviewpanel.vue';
import view_tabviewpanel3 from '@widgets/ibz-my-territory/project-report-tab-exp-viewtabviewpanel3-tabviewpanel/project-report-tab-exp-viewtabviewpanel3-tabviewpanel.vue';
 

/**
 * tabexppanel部件
 *
 * @export
 * @class ProjectReportTabExpViewtabexppanelTabexppanel
 * @extends {ProjectReportTabExpViewtabexppanelTabexppanelBase}
 */
@Component({
    components: {
        view_tabviewpanel,
        view_tabviewpanel2,
        view_tabviewpanel3,
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectReportTabExpViewtabexppanelTabexppanel extends ProjectReportTabExpViewtabexppanelTabexppanelBase {}
</script>
