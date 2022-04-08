<template src="./product-portal-view-db-dashboard.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductPortalView_dbDashboardBase } from './product-portal-view-db-dashboard-base';
import view_db_productexpportlet from '@widgets/product/product-exp-view-portlet/product-exp-view-portlet.vue';
import view_db_productunclosedportlet from '@widgets/product/un-closed-product-portlet/un-closed-product-portlet.vue';
import view_db_productstatusportlet from '@widgets/product/product-status-chart-portlet/product-status-chart-portlet.vue';
import view_db_assignedtomestoryportlet from '@widgets/story/assigned-to-me-story-portlet/assigned-to-me-story-portlet.vue';
 

/**
 * dashboard部件
 *
 * @export
 * @class ProductPortalView_dbDashboard
 * @extends {ProductPortalView_dbDashboardBase}
 */
@Component({
    components: {
        view_db_productexpportlet,
        view_db_productunclosedportlet,
        view_db_productstatusportlet,
        view_db_assignedtomestoryportlet,
         
    },
})
@VueLifeCycleProcessing()
export default class ProductPortalView_dbDashboard extends ProductPortalView_dbDashboardBase {}
</script>
