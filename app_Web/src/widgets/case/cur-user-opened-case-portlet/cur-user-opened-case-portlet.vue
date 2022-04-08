<template src="./cur-user-opened-case-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CurUserOpenedCasePortletBase } from './cur-user-opened-case-portlet-base';
import view_dashboard_sysportlet5_chart from '@widgets/case/cur-opened-case-chart/cur-opened-case-chart.vue';
 

/**
 * dashboard_sysportlet5部件
 *
 * @export
 * @class CurUserOpenedCasePortlet
 * @extends {CurUserOpenedCasePortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet5_chart, 
         
    }
})
@VueLifeCycleProcessing()
export default class CurUserOpenedCasePortlet extends CurUserOpenedCasePortletBase { }
</script>
