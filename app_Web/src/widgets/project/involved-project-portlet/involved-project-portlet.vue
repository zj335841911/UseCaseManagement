<template src="./involved-project-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { InvolvedProjectPortletBase } from './involved-project-portlet-base';
import view_dashboard_sysportlet6_chart from '@widgets/project/involved-project-dev-chart/involved-project-dev-chart.vue';
 

/**
 * dashboard_sysportlet6部件
 *
 * @export
 * @class InvolvedProjectPortlet
 * @extends {InvolvedProjectPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet6_chart, 
         
    }
})
@VueLifeCycleProcessing()
export default class InvolvedProjectPortlet extends InvolvedProjectPortletBase { }
</script>
