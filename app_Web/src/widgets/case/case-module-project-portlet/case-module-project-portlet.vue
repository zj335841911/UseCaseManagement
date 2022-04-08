<template src="./case-module-project-portlet.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseModuleProjectPortletBase } from './case-module-project-portlet-base';
import view_dashboard_sysportlet3_chart from '@widgets/case/case-module-project-chart/case-module-project-chart.vue';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class CaseModuleProjectPortlet
 * @extends {CaseModuleProjectPortletBase}
 */
@Component({
    components: {
        view_dashboard_sysportlet3_chart,
         
    },
})
@VueLifeCycleProcessing()
export default class CaseModuleProjectPortlet extends CaseModuleProjectPortletBase {}
</script>
