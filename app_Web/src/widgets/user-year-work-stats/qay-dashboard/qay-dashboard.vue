<template src="./qay-dashboard.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { QAYDashboardBase } from './qay-dashboard-base';
import view_dashboard_sysportlet4 from '@widgets/bug/total-cur-opened-bug-portlet/total-cur-opened-bug-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/case/total-cur-opened-case-portlet/total-cur-opened-case-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/user-year-work-stats/month-opened-bug-and-case-portlet/month-opened-bug-and-case-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class QAYDashboard
 * @extends {QAYDashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet4,
        view_dashboard_sysportlet5,
        view_dashboard_sysportlet3,
         
    },
})
@VueLifeCycleProcessing()
export default class QAYDashboard extends QAYDashboardBase {}
</script>
