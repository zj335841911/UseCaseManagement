<template src="./case-result-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseResultPortletBase } from './case-result-portlet-base';
import view_dashboard_sysportlet1_chart from '@widgets/case/caseresult-chart/caseresult-chart.vue';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class CaseResultPortlet
 * @extends {CaseResultPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet1_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class CaseResultPortlet extends CaseResultPortletBase {}
</script>
