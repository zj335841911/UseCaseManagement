<template src="./test-portal-view-db-dashboard.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestPortalView_dbDashboardBase } from './test-portal-view-db-dashboard-base';
import view_db_assigntomebugportlet1 from '@widgets/bug/assigned-to-me-bug-portlet/assigned-to-me-bug-portlet.vue';
import view_db_sysportlet2 from '@widgets/product/text-exp-view-portlet/text-exp-view-portlet.vue';
import view_db_sysportlet1 from '@widgets/test-task/to-test-test-task-portlet/to-test-test-task-portlet.vue';
import view_db_assigntomecaseportlet1 from '@widgets/case/me-create-case-portlet/me-create-case-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class TestPortalView_dbDashboard
 * @extends {TestPortalView_dbDashboardBase}
 */
@Component({
    components: {
        view_db_assigntomebugportlet1,
        view_db_sysportlet2,
        view_db_sysportlet1,
        view_db_assigntomecaseportlet1,
         
    },
})
@VueLifeCycleProcessing()
export default class TestPortalView_dbDashboard extends TestPortalView_dbDashboardBase {}
</script>
