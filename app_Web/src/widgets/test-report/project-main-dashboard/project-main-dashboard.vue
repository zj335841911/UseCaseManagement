<template src="./project-main-dashboard.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectMainDashboardBase } from './project-main-dashboard-base';
import view_dashboard_BugTypeProject from '@widgets/bug/bug-type-project-portlet/bug-type-project-portlet.vue';
import view_dashboard_BugSeverity from '@widgets/bug/bug-severity-project-portlet/bug-severity-project-portlet.vue';
import view_dashboard_sysportlet13 from '@widgets/bug/bug-opened-by-project-portlet/bug-opened-by-project-portlet.vue';
import view_dashboard_sysportlet4 from '@widgets/case/case-lastrunner-project-portlet/case-lastrunner-project-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/case/case-type-project-portlet/case-type-project-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/case/case-module-project-portlet/case-module-project-portlet.vue';
import view_dashboard_sysportlet15 from '@widgets/bug/bug-resolved-by-project-portlet/bug-resolved-by-project-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/case/case-result-project-portlet/case-result-project-portlet.vue';
import view_dashboard_BugModuleProject from '@widgets/bug/bug-module-project-portlet/bug-module-project-portlet.vue';
import view_dashboard_BugStatusProject from '@widgets/bug/bug-status-project-portlet/bug-status-project-portlet.vue';
import view_dashboard_BugResolutionProject from '@widgets/bug/bug-resolution-project-portlet/bug-resolution-project-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class ProjectMainDashboard
 * @extends {ProjectMainDashboardBase}
 */
@Component({
    components: {
        view_dashboard_BugTypeProject,
        view_dashboard_BugSeverity,
        view_dashboard_sysportlet13,
        view_dashboard_sysportlet4,
        view_dashboard_sysportlet2,
        view_dashboard_sysportlet3,
        view_dashboard_sysportlet15,
        view_dashboard_sysportlet1,
        view_dashboard_BugModuleProject,
        view_dashboard_BugStatusProject,
        view_dashboard_BugResolutionProject,
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectMainDashboard extends ProjectMainDashboardBase {}
</script>
