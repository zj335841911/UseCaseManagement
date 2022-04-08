<template src="./cur-user-resolve-bug-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CurUserResolveBugPortletBase } from './cur-user-resolve-bug-portlet-base';
import view_dashboard_sysportlet4_chart from '@widgets/bug/cur-user-resolve-bug-chart/cur-user-resolve-bug-chart.vue';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class CurUserResolveBugPortlet
 * @extends {CurUserResolveBugPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet4_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class CurUserResolveBugPortlet extends CurUserResolveBugPortletBase {}
</script>
