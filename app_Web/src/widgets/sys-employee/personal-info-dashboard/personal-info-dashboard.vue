<template src="./personal-info-dashboard.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PersonalInfoDashboardBase } from './personal-info-dashboard-base';
import view_dashboard_sysportlet2 from '@widgets/sys-employee/person-basic-information-portlet/person-basic-information-portlet.vue';
import view_dashboard_sysportlet1 from '@widgets/sys-employee/person-info-portlet/person-info-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class PersonalInfoDashboard
 * @extends {PersonalInfoDashboardBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet2,
        view_dashboard_sysportlet1,
         
    },
})
@VueLifeCycleProcessing()
export default class PersonalInfoDashboard extends PersonalInfoDashboardBase {}
</script>
