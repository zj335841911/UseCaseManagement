<template src="./case-type-project-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseTypeProjectPortletBase } from './case-type-project-portlet-base';
import view_dashboard_sysportlet2_chart from '@widgets/case/case-type-project-chart/case-type-project-chart.vue';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class CaseTypeProjectPortlet
 * @extends {CaseTypeProjectPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet2_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class CaseTypeProjectPortlet extends CaseTypeProjectPortletBase {}
</script>
