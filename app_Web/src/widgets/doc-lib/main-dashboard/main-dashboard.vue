<template src="./main-dashboard.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainDashboardBase } from './main-dashboard-base';
import view_dashboard_sysportlet4 from '@widgets/doc/my-doc-portlet/my-doc-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/doc/my-favourite-portlet/my-favourite-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/project/undone-project-portlet/undone-project-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/doc/docstatus-portlet/docstatus-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/doc/recent-update-portlet/recent-update-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class MainDashboard
 * @extends {MainDashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet4,
        view_dashboard_sysportlet5,
        view_dashboard_sysportlet2,
        view_dashboard_sysportlet3,
        view_dashboard_sysportlet1,
         
    },
})
@VueLifeCycleProcessing()
export default class MainDashboard extends MainDashboardBase {}
</script>
