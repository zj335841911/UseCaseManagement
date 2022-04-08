<template src="./case-type-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseTypePortletBase } from './case-type-portlet-base';
import view_dashboard_sysportlet2_chart from '@widgets/case/case-type-chart/case-type-chart.vue';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class CaseTypePortlet
 * @extends {CaseTypePortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet2_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class CaseTypePortlet extends CaseTypePortletBase {}
</script>
