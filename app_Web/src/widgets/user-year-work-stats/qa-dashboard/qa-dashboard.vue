<template src="./qa-dashboard.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { QADashboardBase } from './qa-dashboard-base';
import view_dashboard_sysportlet6 from '@widgets/user-year-work-stats/product-bugcnt-qa-portlet/product-bugcnt-qa-portlet.vue';
import view_dashboard_sysportlet4 from '@widgets/bug/total-cur-opened-bug-portlet/total-cur-opened-bug-portlet.vue';
import view_dashboard_sysportlet5 from '@widgets/case/total-cur-opened-case-portlet/total-cur-opened-case-portlet.vue';
import view_dashboard_sysportlet2 from '@widgets/user-year-work-stats/info-portlet/info-portlet.vue';
import view_dashboard_sysportlet3 from '@widgets/user-year-work-stats/month-opened-bug-and-case-portlet/month-opened-bug-and-case-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/product-sum/product-bugcnt-qa-portlet/product-bugcnt-qa-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class QADashboard
 * @extends {QADashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet6, 
        view_dashboard_sysportlet4, 
        view_dashboard_sysportlet5, 
        view_dashboard_sysportlet2, 
        view_dashboard_sysportlet3, 
        view_dashboard_sysportlet1, 
         
    }
})
@VueLifeCycleProcessing()
export default class QADashboard extends QADashboardBase { }
</script>
