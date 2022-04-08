<template src="./product-creat-stroy-po-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductCreatStroy_POPortletBase } from './product-creat-stroy-po-portlet-base';
import view_dashboard_sysportlet3_chart from '@widgets/product-sum/product-create-story-po-chart/product-create-story-po-chart.vue';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class ProductCreatStroy_POPortlet
 * @extends {ProductCreatStroy_POPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet3_chart, 
         
    }
})
@VueLifeCycleProcessing()
export default class ProductCreatStroy_POPortlet extends ProductCreatStroy_POPortletBase { }
</script>
