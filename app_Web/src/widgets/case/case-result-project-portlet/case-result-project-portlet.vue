<template src="./case-result-project-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseResultProjectPortletBase } from './case-result-project-portlet-base';
import view_dashboard_sysportlet1_chart from '@widgets/case/caseresult-project-chart/caseresult-project-chart.vue';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class CaseResultProjectPortlet
 * @extends {CaseResultProjectPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet1_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class CaseResultProjectPortlet extends CaseResultProjectPortletBase {}
</script>
