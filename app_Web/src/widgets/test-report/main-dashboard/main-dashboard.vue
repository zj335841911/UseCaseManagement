<template src="./main-dashboard.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainDashboardBase } from './main-dashboard-base';
import view_dashboard_sysportlet10 from '@widgets/bug/bug-type-portlet/bug-type-portlet.vue';
import view_dashboard_sysportlet13 from '@widgets/bug/bug-opened-by-portlet/bug-opened-by-portlet.vue';
import view_dashboard_sysportlet14 from '@widgets/bug/bug-module-portlet/bug-module-portlet.vue';
import view_dashboard_sysportlet11 from '@widgets/bug/bug-status-portlet/bug-status-portlet.vue';
import view_dashboard_sysportlet4 from '@widgets/case/case-lastrunner-portlet/case-lastrunner-portlet.vue';
import view_dashboard_sysportlet12 from '@widgets/bug/bug-resolution-portlet/bug-resolution-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/case/case-type-portlet/case-type-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/case/case-module-portlet/case-module-portlet.vue';
import view_dashboard_sysportlet15 from '@widgets/bug/bug-resolved-by-portlet/bug-resolved-by-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/case/case-result-portlet/case-result-portlet.vue';
import view_dashboard_sysportlet9 from '@widgets/bug/bug-severity-portlet/bug-severity-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class MainDashboard
 * @extends {MainDashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet10,
        view_dashboard_sysportlet13,
        view_dashboard_sysportlet14,
        view_dashboard_sysportlet11,
        view_dashboard_sysportlet4,
        view_dashboard_sysportlet12,
        view_dashboard_sysportlet2,
        view_dashboard_sysportlet3,
        view_dashboard_sysportlet15,
        view_dashboard_sysportlet1,
        view_dashboard_sysportlet9,
         
    },
})
@VueLifeCycleProcessing()
export default class MainDashboard extends MainDashboardBase {}
</script>
