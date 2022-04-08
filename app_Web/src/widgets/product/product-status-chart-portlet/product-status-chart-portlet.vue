<template src="./product-status-chart-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductStatusChartPortletBase } from './product-status-chart-portlet-base';
import view_db_productstatusportlet_chart from '@widgets/product/product-status-chart/product-status-chart.vue';
 

/**
 * db_productstatusportlet部件
 *
 * @export
 * @class ProductStatusChartPortlet
 * @extends {ProductStatusChartPortletBase}
 */
@Component({
    components: {
        view_db_productstatusportlet_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class ProductStatusChartPortlet extends ProductStatusChartPortletBase {}
</script>
