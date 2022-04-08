<template src="./case-lastrunner-project-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseLastrunnerProjectPortletBase } from './case-lastrunner-project-portlet-base';
import view_dashboard_sysportlet4_chart from '@widgets/case/case-lastrunnerproject-chart/case-lastrunnerproject-chart.vue';
 

/**
 * dashboard_sysportlet4部件
 *
 * @export
 * @class CaseLastrunnerProjectPortlet
 * @extends {CaseLastrunnerProjectPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet4_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class CaseLastrunnerProjectPortlet extends CaseLastrunnerProjectPortletBase {}
</script>
