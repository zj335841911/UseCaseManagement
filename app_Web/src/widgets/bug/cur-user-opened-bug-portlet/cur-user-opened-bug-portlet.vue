<template src="./cur-user-opened-bug-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CurUserOpenedBugPortletBase } from './cur-user-opened-bug-portlet-base';
import view_dashboard_sysportlet4_chart from '@widgets/bug/cur-user-opened-bug-chart/cur-user-opened-bug-chart.vue';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class CurUserOpenedBugPortlet
 * @extends {CurUserOpenedBugPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet4_chart, 
         
    }
})
@VueLifeCycleProcessing()
export default class CurUserOpenedBugPortlet extends CurUserOpenedBugPortletBase { }
</script>
